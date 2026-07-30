(() => {
  const exams = window.MATH_BANK || [];
  const allQuestions = exams.flatMap((exam) => exam.questions.map((q) => ({ ...q, exam })));
  const state = { pool: [], index: 0, selected: new Set() };
  const $ = (id) => document.getElementById(id);

  const safeStorage = {
    get(key) {
      try { return JSON.parse(localStorage.getItem(key) || "null"); } catch { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* 作答不能因儲存失敗中斷 */ }
    }
  };

  function kindLabel(kind) {
    return { single: "單選題", multi: "多選題", fill: "選填題", written: "非選擇題" }[kind] || kind;
  }

  function difficulty(q) {
    if (q.pass == null) return "未提供";
    if (q.pass >= .7) return "較易";
    if (q.pass >= .4) return "中等";
    return "較難";
  }

  function populateFilters() {
    const cats = [...new Set(allQuestions.map((q) => q.cat))].sort();
    const years = [...new Set(exams.map((exam) => exam.year))].sort((a, b) => b - a);
    const subjects = [...new Map(exams.map((exam) => [exam.subject, exam.label])).entries()];
    $("yearSel").innerHTML = '<option value="all">全部年份</option>' + years.map((year) => `<option value="${year}">${year} 學年度</option>`).join("");
    $("subjectSel").innerHTML = '<option value="all">全部考科</option>' + subjects.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    $("catSel").innerHTML = '<option value="all">全部單元</option>' + cats.map((cat) => `<option>${cat}</option>`).join("");
  }

  function updateStats() {
    const questions = allQuestions.length;
    const objective = allQuestions.filter((q) => q.kind !== "written").length;
    const stats = allQuestions.filter((q) => q.pass != null && q.disc != null).length;
    const years = new Set(exams.map((exam) => exam.year)).size;
    $("questionCount").textContent = questions;
    $("answerCount").textContent = `${objective} / ${objective}`;
    $("statsCount").textContent = `${stats} / ${objective}`;
    $("formCount").textContent = `${years} 年／${exams.length} 份`;
  }

  function filtered() {
    const year = $("yearSel").value;
    const subject = $("subjectSel").value;
    const cat = $("catSel").value;
    const kind = $("kindSel").value;
    const diff = $("diffSel").value;
    return allQuestions.filter((q) => {
      if (year !== "all" && q.exam.year !== Number(year)) return false;
      if (subject !== "all" && q.exam.subject !== subject) return false;
      if (cat !== "all" && q.cat !== cat) return false;
      if (kind !== "all" && q.kind !== kind) return false;
      if (diff !== "all" && difficulty(q) !== diff) return false;
      return true;
    });
  }

  function selectedText(id) {
    const select = $(id);
    return select?.options[select.selectedIndex]?.text || "全部";
  }

  function updateFilterSummary() {
    const pool = filtered();
    const parts = [
      selectedText("yearSel"),
      selectedText("subjectSel"),
      selectedText("catSel"),
      selectedText("kindSel"),
      selectedText("diffSel")
    ];
    $("filterSummary").textContent = `${parts.join("・")}｜符合 ${pool.length} 題`;
    $("countInfo").textContent = `目前條件共 ${pool.length} 題；按「開始練習」依題號作答，或按「隨機排序」打散順序。`;
  }

  function normalize(value) {
    return String(value)
      .trim()
      .replaceAll("，", ",")
      .replaceAll("、", ",")
      .replace(/\s+/g, "")
      .toLowerCase();
  }

  function render() {
    const q = state.pool[state.index];
    if (!q) {
      $("questionArea").innerHTML = '<div class="panel empty">目前條件沒有符合的題目，請調整篩選。</div>';
      return;
    }
    state.selected.clear();
    const stats = q.pass == null ? "" : `
      <div class="meta-grid">
        <div class="meta-box"><b>${Math.round(q.pass * 100)}%</b><span>${q.kind === "multi" ? "官方得分率 P" : "官方答對率 P"}</span></div>
        <div class="meta-box"><b>${Math.round(q.disc * 100)}</b><span>官方鑑別度 D</span></div>
        <div class="meta-box"><b>${difficulty(q)}</b><span>依 P 值分級</span></div>
      </div>`;
    const group = q.groupImage ? `<img class="group-image" src="${q.groupImage}" alt="第 18 至 20 題共用題組材料">` : "";
    $("questionArea").innerHTML = `
      <article class="panel question-card">
        <div class="question-head">
          <div>
            <p class="eyebrow">${q.exam.year} 學年度・${q.exam.label}</p>
            <h2 class="question-title">第 ${q.no} 題｜${q.summary}</h2>
            <div class="chips">
              <span class="chip">${q.cat}</span>
              <span class="chip">${q.tags[0]}</span>
              <span class="chip accent">${kindLabel(q.kind)}</span>
            </div>
          </div>
          <div class="counter">${state.index + 1} / ${state.pool.length}</div>
        </div>
        ${group}
        <img class="question-image" src="${q.image}" alt="${q.exam.year} 學年度${q.exam.label}第 ${q.no} 題官方題面">
        <div class="answer-zone">${answerControl(q)}</div>
        <div id="feedback" class="feedback" role="status" aria-live="polite"></div>
        ${stats}
        <div class="btn-row">
          <button class="btn ghost" id="prevBtn" type="button">上一題</button>
          <button class="btn secondary" id="nextBtn" type="button">下一題</button>
          <a class="btn ghost" href="check?year=${q.exam.year}&subject=${q.exam.subject}&no=${q.no}" style="text-decoration:none">查題校對</a>
        </div>
      </article>`;
    bindQuestion(q);
  }

  function answerControl(q) {
    if (q.kind === "single" || q.kind === "multi") {
      const buttons = Array.from({ length: q.optionCount }, (_, i) => `<button class="choice" type="button" data-choice="${i + 1}" aria-pressed="false">${i + 1}</button>`).join("");
      return `<p>${q.kind === "multi" ? "可複選，選好後送出。" : "請選一個答案。"}</p><div class="choice-grid">${buttons}</div><div class="btn-row"><button class="btn" id="submitBtn" type="button">送出答案</button></div>`;
    }
    if (q.kind === "fill") {
      return `<label for="fillAnswer"><b>輸入答案</b>（分數可用 /，根號可用 √）</label><input id="fillAnswer" type="text" inputmode="text" autocomplete="off"><div class="btn-row"><button class="btn" id="submitBtn" type="button">送出答案</button></div>`;
    }
    return `<p>非選擇題需依推理過程評分，本站不以單一數字自動給分。</p><a class="btn" href="${q.rubricUrl}" target="_blank" rel="noopener" style="display:inline-flex;text-decoration:none">查看官方評分原則</a>`;
  }

  function bindQuestion(q) {
    document.querySelectorAll(".choice").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.choice;
        if (q.kind === "single") {
          state.selected.clear();
          document.querySelectorAll(".choice").forEach((item) => {
            item.classList.remove("selected");
            item.setAttribute("aria-pressed", "false");
          });
        }
        if (state.selected.has(value)) {
          state.selected.delete(value);
          button.classList.remove("selected");
          button.setAttribute("aria-pressed", "false");
        } else {
          state.selected.add(value);
          button.classList.add("selected");
          button.setAttribute("aria-pressed", "true");
        }
      });
    });
    $("submitBtn")?.addEventListener("click", () => check(q));
    $("prevBtn").addEventListener("click", () => { state.index = Math.max(0, state.index - 1); render(); });
    $("nextBtn").addEventListener("click", () => { state.index = Math.min(state.pool.length - 1, state.index + 1); render(); });
  }

  function check(q) {
    let response = "";
    if (q.kind === "fill") response = $("fillAnswer").value;
    else response = [...state.selected].sort((a, b) => Number(a) - Number(b)).join(",");
    const ok = normalize(response) === normalize(q.answer);
    const feedback = $("feedback");
    feedback.className = `feedback show ${ok ? "ok" : "bad"}`;
    feedback.textContent = ok ? "✓ 答對了！" : `✗ 再想想看。官方答案：${q.answer}`;
    const history = safeStorage.get("gsatMathProgress") || [];
    history.push({ year: q.exam.year, subject: q.exam.subject, no: q.no, ok, at: new Date().toISOString() });
    safeStorage.set("gsatMathProgress", history.slice(-500));
  }

  function start({ shuffle = false, limit = null, focus = false } = {}) {
    state.pool = filtered();
    if (shuffle) state.pool = [...state.pool].sort(() => Math.random() - .5);
    if (limit != null) state.pool = state.pool.slice(0, limit);
    state.index = 0;
    render();
    updateFilterSummary();
    if (focus) $("questionArea").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  populateFilters();
  updateStats();
  ["yearSel", "subjectSel", "catSel", "kindSel", "diffSel"].forEach((id) => $(id).addEventListener("change", () => {
    updateFilterSummary();
    start();
  }));
  $("startBtn").addEventListener("click", () => start({ focus: true }));
  $("shuffleBtn").addEventListener("click", () => {
    start({ shuffle: true, focus: true });
  });
  $("quickStartBtn").addEventListener("click", () => start({ shuffle: true, limit: 10, focus: true }));

  $("advToggle").addEventListener("click", () => {
    const body = $("filterBody");
    const expanded = $("advToggle").getAttribute("aria-expanded") === "true";
    body.hidden = expanded;
    $("advToggle").setAttribute("aria-expanded", String(!expanded));
    $("advToggle").textContent = expanded ? "展開進階篩選 ▾" : "收合進階篩選 ▴";
  });

  const savedFontSize = safeStorage.get("gsatMathFontSize");
  if (["fs-lg", "fs-xl"].includes(savedFontSize)) document.documentElement.classList.add(savedFontSize);
  $("fsFold").addEventListener("click", () => {
    const folded = $("fsCtrl").classList.toggle("folded");
    $("fsFold").setAttribute("aria-expanded", String(!folded));
  });
  [
    ["fsSmall", ""],
    ["fsLarge", "fs-lg"],
    ["fsXLarge", "fs-xl"]
  ].forEach(([id, className]) => $(id).addEventListener("click", () => {
    document.documentElement.classList.remove("fs-lg", "fs-xl");
    if (className) document.documentElement.classList.add(className);
    safeStorage.set("gsatMathFontSize", className);
  }));

  updateFilterSummary();
  start();
})();
