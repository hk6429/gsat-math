(() => {
  const exams = window.MATH_BANK || [];
  const allQuestions = exams.flatMap((exam) => exam.questions.map((q) => ({ ...q, exam })));
  const $ = (id) => document.getElementById(id);
  const state = {
    pool: [], index: 0, selected: new Set(), answered: new Set(), correct: 0,
    activeTags: new Set(), timerId: null, secondsLeft: 0, timed: false, startedAt: null
  };

  const safeStorage = {
    get(key, fallback = null) {
      try {
        const value = localStorage.getItem(key);
        return value == null ? fallback : JSON.parse(value);
      } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* 不讓儲存失敗中斷作答 */ }
    }
  };

  const questionKey = (q) => `${q.exam.year}${q.exam.subject}-${q.no}`;
  const kindLabel = (kind) => ({ single: "單選題", multi: "多選題", fill: "選填題", written: "非選擇題" }[kind] || kind);
  const difficulty = (q) => q.pass == null ? "未提供" : q.pass >= .7 ? "較易" : q.pass >= .4 ? "中等" : "較難";
  const correctKeys = (q) => String(q.answer).split(",").map((value) => value.trim());
  const normalize = (value) => String(value).trim().replaceAll("，", ",").replaceAll("、", ",").replace(/\s+/g, "").toLowerCase();
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

  function populateFilters() {
    const years = [...new Set(exams.map((exam) => exam.year))].sort((a, b) => b - a);
    const subjects = [...new Map(exams.map((exam) => [exam.subject, exam.label])).entries()];
    $("yearSel").innerHTML = '<option value="all">全部 33 個年份</option>' + years.map((year) => `<option value="${year}">${year} 學年度</option>`).join("");
    $("subjectSel").innerHTML = '<option value="all">全部考科</option>' + subjects.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    $("mockFormSel").innerHTML += exams.map((exam) => `<option value="${exam.year}${exam.subject}">${exam.year} 學年度・${exam.label}</option>`).join("");

    const categoryMap = new Map();
    for (const q of allQuestions) {
      if (!categoryMap.has(q.cat)) categoryMap.set(q.cat, new Set());
      q.tags.forEach((tag) => {
        categoryMap.get(q.cat).add(tag);
        state.activeTags.add(`${q.cat}::${tag}`);
      });
    }
    $("categoryGroups").innerHTML = [...categoryMap.entries()].map(([cat, tags], index) => `
      <details class="catgroup">
        <summary><span class="catdot catdot-${index % 8}"></span><b>${escapeHtml(cat)}</b><span>展開細項</span></summary>
        <div class="cat-actions"><button type="button" data-cat-all="${escapeHtml(cat)}">全選</button><button type="button" data-cat-clear="${escapeHtml(cat)}">清除</button></div>
        <div class="tag-checks">${[...tags].sort().map((tag) => `<label><input class="tagCheck" type="checkbox" data-cat="${escapeHtml(cat)}" value="${escapeHtml(tag)}" checked> ${escapeHtml(tag)}</label>`).join("")}</div>
      </details>`).join("");
  }

  function updateStats() {
    const objective = allQuestions.filter((q) => q.kind !== "written").length;
    const stats = allQuestions.filter((q) => q.pass != null && q.disc != null).length;
    $("questionCount").textContent = allQuestions.length;
    $("answerCount").textContent = `${objective} / ${objective}`;
    $("statsCount").textContent = `${stats} / ${objective}`;
    $("formCount").textContent = `${new Set(exams.map((exam) => exam.year)).size} 年／${exams.length} 份`;
  }

  function selectedKinds() {
    return new Set([...document.querySelectorAll(".kindCheck:checked")].map((box) => box.value));
  }

  function filtered() {
    const year = $("yearSel").value;
    const subject = $("subjectSel").value;
    const diff = $("diffSel").value;
    const disc = $("discSel").value;
    const kinds = selectedKinds();
    const done = new Set((safeStorage.get("gsatMathProgress", []) || []).map((row) => `${row.year}${row.subject}-${row.no}`));
    return allQuestions.filter((q) => {
      if (year !== "all" && q.exam.year !== Number(year)) return false;
      if (subject !== "all" && q.exam.subject !== subject) return false;
      if (!kinds.has(q.kind)) return false;
      if (!q.tags.some((tag) => state.activeTags.has(`${q.cat}::${tag}`))) return false;
      if (diff !== "all" && difficulty(q) !== diff) return false;
      if (disc !== "all") {
        if (q.disc == null) return false;
        if (disc === "high" && q.disc < .4) return false;
        if (disc === "mid" && (q.disc < .2 || q.disc >= .4)) return false;
        if (disc === "low" && q.disc >= .2) return false;
      }
      if ($("excludeDone").checked && done.has(questionKey(q))) return false;
      return true;
    });
  }

  function selectedText(id) {
    const select = $(id);
    return select?.options[select.selectedIndex]?.text || "全部";
  }

  function updateFilterSummary() {
    const pool = filtered();
    const totalTags = document.querySelectorAll(".tagCheck").length;
    const parts = [
      `年份 ${selectedText("yearSel")}`,
      `考科 ${selectedText("subjectSel")}`,
      `分類 ${state.activeTags.size}/${totalTags}`,
      `每次 ${$("questionLimit").value || 10} 題`,
      $("shuffleCheck").checked ? "隨機" : "依題號",
      `難度 ${selectedText("diffSel")}`
    ];
    $("filterSummary").textContent = parts.join("・");
    $("countInfo").textContent = `符合條件且尚未被題數上限截斷：${pool.length} 題（題庫總計 ${allQuestions.length} 題）`;
  }

  function strategyFor(q) {
    const strategies = {
      "機率與統計": "先確認樣本空間、事件或統計量的定義，再依題目條件列式，避免把互斥、獨立與條件機率混用。",
      "數列與級數": "先辨認等差、等比或遞迴關係，寫出首項、公差／公比與所求項數，再套用對應公式。",
      "函數與圖形": "把題目條件轉成函數式、零點、單調性或圖形位置關係，再逐項檢查。",
      "平面幾何": "先在圖上標記已知長度與角度，再選用相似、向量、三角函數或圓的性質建立關係式。",
      "空間幾何": "先建立方向向量、法向量或空間坐標，再用內積、距離與平行垂直條件判斷。",
      "向量與矩陣": "把幾何或線性關係改寫成向量、矩陣與行列式運算，並檢查方向與符號。",
      "數與式": "先整理代數式的定義域與符號，再用因式分解、指對數或不等式性質化簡。",
      "排列組合": "先釐清是否計順序、能否重複及限制條件，再以加法或乘法原理分情況計數。"
    };
    return strategies[q.cat] || "先把題目條件逐一轉成數學關係，再用定義、公式或圖形性質驗證答案。";
  }

  function explanationHtml(q) {
    const fallback = `<div class="explainBox"><b>解析</b><p>本題考查「${escapeHtml(q.tags.join("、"))}」：${escapeHtml(q.summary)}。${strategyFor(q)}</p><p>依大考中心官方參考答案，本題答案為 <b>${escapeHtml(q.answer)}</b>。題面中的式子、圖形與數值請以官方原卷裁圖為準。</p></div>`;
    return window.MathQuestionUI.solutionHtml(q, fallback);
  }

  function optionAnalysisHtml(q) {
    return window.MathQuestionUI.optionAnalysisHtml(q);
  }

  function updateScorebar() {
    $("answeredNow").textContent = state.answered.size;
    $("totalNow").textContent = state.pool.length;
    $("correctNow").textContent = state.correct;
    $("scoreProgress").style.width = `${state.pool.length ? state.answered.size / state.pool.length * 100 : 0}%`;
    $("timerText").textContent = state.timed ? `剩餘時間 ${formatTime(state.secondsLeft)}` : "";
  }

  function formatTime(seconds) {
    const safe = Math.max(0, seconds);
    return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
  }

  function startTimer(minutes) {
    clearInterval(state.timerId);
    state.timed = Boolean(minutes);
    state.secondsLeft = Math.round(minutes * 60);
    updateScorebar();
    if (!state.timed) return;
    state.timerId = setInterval(() => {
      state.secondsLeft -= 1;
      updateScorebar();
      if (state.secondsLeft <= 0) {
        clearInterval(state.timerId);
        alert("作答時間到，系統已停止計時。");
        recordSession();
      }
    }, 1000);
  }

  function render() {
    const q = state.pool[state.index];
    if (!q) {
      $("questionArea").innerHTML = '<div class="panel empty">目前條件沒有符合的題目，請調整篩選。</div>';
      return;
    }
    state.selected.clear();
    const stats = q.pass == null ? "" : `<div class="meta-grid"><div class="meta-box"><b>${Math.round(q.pass * 100)}%</b><span>${q.kind === "multi" ? "官方得分率 P" : "官方答對率 P"}</span></div><div class="meta-box"><b>${Math.round(q.disc * 100)}</b><span>官方鑑別度 D</span></div><div class="meta-box"><b>${difficulty(q)}</b><span>依 P 值分級</span></div></div>`;
    const structured = window.MathQuestionUI.contentFor(q)?.verified;
    const group = q.groupImage && !structured ? `<img class="group-image" src="${q.groupImage}" alt="共用題組材料">` : "";
    $("questionArea").innerHTML = `<article class="panel question-card">
      <div class="question-head"><div><p class="eyebrow">${q.exam.year} 學年度・${q.exam.label}</p><h2 class="question-title">第 ${q.no} 題｜${escapeHtml(q.summary)}</h2><div class="chips"><span class="chip">${escapeHtml(q.cat)}</span><span class="chip">${escapeHtml(q.tags[0])}</span><span class="chip accent">${kindLabel(q.kind)}</span></div></div><div class="counter">${state.index + 1} / ${state.pool.length}</div></div>
      ${group}${window.MathQuestionUI.questionBodyHtml(q)}
      <div class="answer-zone">${answerControl(q)}</div><div id="feedback" class="feedback" role="status" aria-live="polite"></div><div id="postAnswer"></div>${stats}
      <div class="btn-row"><button class="btn ghost" id="prevBtn" type="button">上一題</button><button class="btn secondary" id="nextBtn" type="button">下一題</button><a class="btn ghost" href="check?year=${q.exam.year}&subject=${q.exam.subject}&no=${q.no}">查題校對</a></div>
    </article>`;
    bindQuestion(q);
    $("questionArea").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function answerControl(q) {
    if (q.kind === "single" || q.kind === "multi") {
      return `<p>${q.kind === "multi" ? "可複選，選好後送出。" : "請選一個答案。"}</p><div class="choice-list">${Array.from({ length: q.optionCount }, (_, i) => `<button class="choice" type="button" data-choice="${i + 1}" aria-pressed="false"><span>${i + 1}</span><span class="choice-content">${window.MathQuestionUI.optionHtml(q, String(i + 1))}</span></button>`).join("")}</div><div class="btn-row"><button class="btn" id="submitBtn" type="button">送出答案</button></div>`;
    }
    if (q.kind === "fill") return `<label for="fillAnswer"><b>輸入答案</b>（分數可用 /，根號可用 √）</label><input id="fillAnswer" type="text" autocomplete="off"><div class="btn-row"><button class="btn" id="submitBtn" type="button">送出答案</button></div>`;
    return `<p>非選擇題依推理過程評分，請完成後對照官方評分原則。</p><a class="btn" href="${q.rubricUrl}" target="_blank" rel="noopener">查看官方評分原則</a><div class="btn-row"><button class="btn" id="selfCheckBtn" type="button">已自行核對</button></div>`;
  }

  function bindQuestion(q) {
    document.querySelectorAll(".choice").forEach((button) => button.addEventListener("click", () => {
      const value = button.dataset.choice;
      if (q.kind === "single") {
        state.selected.clear();
        document.querySelectorAll(".choice").forEach((item) => { item.classList.remove("selected"); item.setAttribute("aria-pressed", "false"); });
      }
      if (state.selected.has(value)) {
        state.selected.delete(value); button.classList.remove("selected"); button.setAttribute("aria-pressed", "false");
      } else {
        state.selected.add(value); button.classList.add("selected"); button.setAttribute("aria-pressed", "true");
      }
    }));
    $("submitBtn")?.addEventListener("click", () => check(q));
    $("selfCheckBtn")?.addEventListener("click", () => markWritten(q));
    $("prevBtn").addEventListener("click", () => { state.index = Math.max(0, state.index - 1); render(); });
    $("nextBtn").addEventListener("click", () => { state.index = Math.min(state.pool.length - 1, state.index + 1); render(); });
  }

  function markWritten(q) {
    const key = questionKey(q);
    if (!state.answered.has(key)) {
      state.answered.add(key);
      const history = safeStorage.get("gsatMathProgress", []) || [];
      history.push({ year: q.exam.year, subject: q.exam.subject, no: q.no, ok: null, at: new Date().toISOString() });
      safeStorage.set("gsatMathProgress", history.slice(-1000));
    }
    $("postAnswer").innerHTML = explanationHtml(q) + optionAnalysisHtml(q);
    updateScorebar();
    if (state.answered.size === state.pool.length) recordSession();
  }

  function check(q) {
    const response = q.kind === "fill" ? $("fillAnswer").value : [...state.selected].sort((a, b) => Number(a) - Number(b)).join(",");
    if (!response) return alert("請先作答再送出。");
    const ok = normalize(response) === normalize(q.answer);
    const key = questionKey(q);
    const firstAttempt = !state.answered.has(key);
    if (firstAttempt) {
      state.answered.add(key);
      if (ok) state.correct += 1;
      const history = safeStorage.get("gsatMathProgress", []) || [];
      history.push({ year: q.exam.year, subject: q.exam.subject, no: q.no, ok, at: new Date().toISOString() });
      safeStorage.set("gsatMathProgress", history.slice(-1000));
      const wrong = new Set(safeStorage.get("gsatMathWrong", []) || []);
      if (ok) wrong.delete(key); else wrong.add(key);
      safeStorage.set("gsatMathWrong", [...wrong]);
      updateWrongCount();
    }
    const feedback = $("feedback");
    feedback.className = `feedback show ${ok ? "ok" : "bad"}`;
    feedback.textContent = ok ? "✓ 答對了！" : `✗ 答錯了。官方答案：${q.answer}`;
    $("postAnswer").innerHTML = explanationHtml(q) + optionAnalysisHtml(q);
    $("submitBtn").disabled = true;
    document.querySelectorAll(".choice").forEach((button) => {
      button.disabled = true;
      if (correctKeys(q).includes(button.dataset.choice)) button.classList.add("correct");
    });
    updateScorebar();
    if (state.answered.size === state.pool.length) {
      clearInterval(state.timerId);
      state.timed = false;
      $("timerText").textContent = "作答完成";
      recordSession();
    }
  }

  function recordSession() {
    if (!state.startedAt || state.sessionRecorded) return;
    state.sessionRecorded = true;
    const sessions = safeStorage.get("gsatMathSessions", []) || [];
    sessions.push({ at: new Date().toISOString(), total: state.pool.length, answered: state.answered.size, correct: state.correct, seconds: Math.round((Date.now() - state.startedAt) / 1000) });
    safeStorage.set("gsatMathSessions", sessions.slice(-100));
  }

  function start({ pool = null, forceShuffle = null, limit = null, minutes = null } = {}) {
    clearInterval(state.timerId);
    let next = pool ? [...pool] : filtered();
    if ($("easyFirst").checked) next.sort((a, b) => (b.pass ?? -1) - (a.pass ?? -1));
    else if (forceShuffle ?? $("shuffleCheck").checked) next.sort(() => Math.random() - .5);
    const cap = limit ?? Math.max(1, Number($("questionLimit").value) || 10);
    if (!pool) next = next.slice(0, cap);
    state.pool = next; state.index = 0; state.answered = new Set(); state.correct = 0; state.startedAt = Date.now(); state.sessionRecorded = false;
    $("scorebar").style.display = "block";
    startTimer(minutes ?? ($("timedCheck").checked ? Math.max(1, Math.round(next.length * 1.5)) : 0));
    render(); updateFilterSummary(); updateScorebar();
  }

  function updateWrongCount() {
    $("wrongCount").textContent = (safeStorage.get("gsatMathWrong", []) || []).length;
  }

  function showUtility(html) {
    $("utilityPanel").hidden = false;
    $("utilityPanel").innerHTML = html;
    $("utilityPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderPaper() {
    const pool = filtered().slice(0, Math.max(1, Number($("questionLimit").value) || 10));
    if (!pool.length) return alert("目前條件沒有可出卷的題目。");
    $("questionArea").innerHTML = pool.map((q, index) => `<article class="panel paper-question"><b>${index + 1}. ${q.exam.year} 學年度・${q.exam.label}・原題第 ${q.no} 題</b>${q.groupImage ? `<img class="group-image" src="${q.groupImage}" alt="題組材料">` : ""}<img class="question-image" src="${q.image}" alt="官方題面"></article>`).join("");
    setTimeout(() => window.print(), 250);
  }

  populateFilters();
  updateStats();
  updateWrongCount();
  updateFilterSummary();

  document.querySelectorAll(".tagCheck").forEach((box) => box.addEventListener("change", () => {
    const key = `${box.dataset.cat}::${box.value}`;
    box.checked ? state.activeTags.add(key) : state.activeTags.delete(key);
    updateFilterSummary();
  }));
  document.querySelectorAll("[data-cat-all]").forEach((button) => button.addEventListener("click", () => {
    [...document.querySelectorAll(".tagCheck")].filter((box) => box.dataset.cat === button.dataset.catAll).forEach((box) => { box.checked = true; state.activeTags.add(`${box.dataset.cat}::${box.value}`); });
    updateFilterSummary();
  }));
  document.querySelectorAll("[data-cat-clear]").forEach((button) => button.addEventListener("click", () => {
    [...document.querySelectorAll(".tagCheck")].filter((box) => box.dataset.cat === button.dataset.catClear).forEach((box) => { box.checked = false; state.activeTags.delete(`${box.dataset.cat}::${box.value}`); });
    updateFilterSummary();
  }));
  ["yearSel","subjectSel","questionLimit","shuffleCheck","timedCheck","diffSel","discSel","excludeDone","easyFirst"].forEach((id) => $(id).addEventListener("change", updateFilterSummary));
  document.querySelectorAll(".kindCheck").forEach((box) => box.addEventListener("change", updateFilterSummary));

  $("startBtn").addEventListener("click", () => start());
  $("quickStartBtn").addEventListener("click", () => start({ forceShuffle: true, limit: 10 }));
  $("mockBtn").addEventListener("click", () => {
    const key = $("mockFormSel").value;
    const exam = exams.find((item) => `${item.year}${item.subject}` === key);
    if (!exam) return alert("請先選擇一份考卷。");
    start({ pool: exam.questions.map((q) => ({ ...q, exam })), forceShuffle: false, limit: exam.questions.length, minutes: exam.duration });
  });
  $("paperBtn").addEventListener("click", renderPaper);
  $("rankingBtn").addEventListener("click", () => {
    const rows = allQuestions.filter((q) => q.pass != null).sort((a, b) => a.pass - b.pass).slice(0, 20);
    showUtility(`<div class="toolrow"><h2>難度排行榜</h2><button class="text-toggle close-utility" type="button">關閉</button></div><p>依大考中心官方 P 值由低至高排列。</p><ol class="ranking-list">${rows.map((q) => `<li><b>${q.exam.year}・${q.exam.label}・第 ${q.no} 題</b>　${escapeHtml(q.summary)}　<span>${Math.round(q.pass * 100)}%</span></li>`).join("")}</ol>`);
    document.querySelector(".close-utility")?.addEventListener("click", () => { $("utilityPanel").hidden = true; });
  });
  $("wrongBtn").addEventListener("click", () => {
    const keys = new Set(safeStorage.get("gsatMathWrong", []) || []);
    const pool = allQuestions.filter((q) => keys.has(questionKey(q)));
    if (!pool.length) return alert("錯題本目前沒有題目。");
    start({ pool, forceShuffle: false, limit: pool.length });
  });
  $("historyBtn").addEventListener("click", () => {
    const sessions = (safeStorage.get("gsatMathSessions", []) || []).slice().reverse();
    showUtility(`<div class="toolrow"><h2>學習歷程</h2><button class="text-toggle close-utility" type="button">關閉</button></div>${sessions.length ? sessions.map((row) => `<div class="history-row"><span>${new Date(row.at).toLocaleString("zh-TW")}</span><b>${row.correct}／${row.total}</b><span>作答 ${row.answered} 題・${formatTime(row.seconds)}</span></div>`).join("") : "<p>尚無完整練習紀錄。</p>"}`);
    document.querySelector(".close-utility")?.addEventListener("click", () => { $("utilityPanel").hidden = true; });
  });
  $("advToggle").addEventListener("click", () => {
    const expanded = $("advToggle").getAttribute("aria-expanded") === "true";
    $("filterBody").hidden = expanded;
    $("advToggle").setAttribute("aria-expanded", String(!expanded));
    $("advToggle").textContent = expanded ? "展開進階篩選 ▾" : "收合進階篩選 ▴";
  });
  $("moreToggle").addEventListener("click", () => {
    const expanded = $("moreToggle").getAttribute("aria-expanded") === "true";
    $("moreTools").hidden = expanded;
    $("moreToggle").setAttribute("aria-expanded", String(!expanded));
    $("moreToggle").textContent = expanded ? "更多功能 ▾" : "收合功能 ▴";
  });

  const savedFontSize = safeStorage.get("gsatMathFontSize", "");
  if (["fs-lg", "fs-xl"].includes(savedFontSize)) document.documentElement.classList.add(savedFontSize);
  $("fsFold").addEventListener("click", () => {
    const folded = $("fsCtrl").classList.toggle("folded");
    $("fsFold").setAttribute("aria-expanded", String(!folded));
  });
  [["fsSmall",""],["fsLarge","fs-lg"],["fsXLarge","fs-xl"]].forEach(([id, className]) => $(id).addEventListener("click", () => {
    document.documentElement.classList.remove("fs-lg", "fs-xl");
    if (className) document.documentElement.classList.add(className);
    safeStorage.set("gsatMathFontSize", className);
  }));
})();
