(() => {
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  function renderFormula(tex, displayMode) {
    if (!window.katex) return `<code class="math-fallback">${escapeHtml(tex)}</code>`;
    try {
      return window.katex.renderToString(tex, {
        displayMode,
        throwOnError: true,
        strict: false,
        trust: false,
        output: "htmlAndMathml"
      });
    } catch {
      return `<code class="math-error" title="公式仍待校對">${escapeHtml(tex)}</code>`;
    }
  }

  function richText(value) {
    const source = String(value || "");
    const pattern = /\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
    let cursor = 0;
    let html = "";
    for (const match of source.matchAll(pattern)) {
      html += escapeHtml(source.slice(cursor, match.index)).replaceAll("\n", "<br>");
      html += renderFormula(match[1] ?? match[2], match[1] != null);
      cursor = match.index + match[0].length;
    }
    return html + escapeHtml(source.slice(cursor)).replaceAll("\n", "<br>");
  }

  const keyFor = (q) => `${q.exam.year}${q.exam.subject}-${q.no}`;
  const contentFor = (q) => window.MATH_CONTENT?.[keyFor(q)];

  function questionBodyHtml(q) {
    const content = contentFor(q);
    const official = `<details class="official-source"><summary>查看官方原題</summary><img class="question-image" src="${q.image}" alt="${q.exam.year} 學年度${q.exam.label}第 ${q.no} 題官方原題"></details>`;
    if (!content?.verified) {
      return `<div class="transcription-pending">本題逐字 LaTeX 版正在校對，暫以官方原題呈現。</div><img class="question-image" src="${q.image}" alt="${q.exam.year} 學年度${q.exam.label}第 ${q.no} 題官方題面">`;
    }
    const figures = (content.figures || []).map((figure) => `<figure class="question-figure"><img src="${figure.src}" alt="${escapeHtml(figure.alt)}">${figure.caption ? `<figcaption>${escapeHtml(figure.caption)}</figcaption>` : ""}</figure>`).join("");
    return `<div class="structured-question"><div class="stem">${richText(content.stem)}</div>${figures}</div>${official}`;
  }

  function optionHtml(q, key) {
    const option = contentFor(q)?.options?.[key];
    return option ? richText(option) : `選項（${key}）`;
  }

  function solutionHtml(q, fallbackHtml) {
    const content = contentFor(q);
    if (!content?.solution?.length) return fallbackHtml;
    return `<div class="explainBox"><b>解析</b><ol class="solution-steps">${content.solution.map((step) => `<li>${richText(step)}</li>`).join("")}</ol><p>依大考中心官方參考答案，本題答案為 <b>${escapeHtml(q.answer)}</b>。</p></div>`;
  }

  function optionAnalysisHtml(q) {
    const content = contentFor(q);
    if (q.optionRates?.length) {
      const correct = new Set(String(q.answer).split(",").map((value) => value.trim()));
      const rows = q.optionRates.map((rate, index) => {
        const key = String(index + 1);
        const analysis = content?.optionAnalysis?.[key];
        return `<div class="option-analysis-row ${correct.has(key) ? "is-correct" : ""}">
          <div class="option-analysis-head"><span class="option-analysis-key">(${key})${correct.has(key) ? "／正解" : ""}</span><div class="option-analysis-text">${optionHtml(q, key)}</div><em>${rate}%</em></div>
          <div class="rate-track"><i class="${correct.has(key) ? "rate-ok" : ""}" style="width:${Math.min(100, rate)}%"></i></div>
          ${analysis ? `<p>${richText(analysis)}</p>` : ""}
        </div>`;
      }).join("");
      return `<div class="optionStats"><b>各選項作答分析（大考中心官方畫記率）</b>${rows}<small>${q.kind === "multi" ? "多選題各選項分別計算畫記率，合計可能超過 100%。" : "因四捨五入，各選項合計可能不等於 100%。"}</small></div>`;
    }
    if (q.pass != null) {
      const value = Math.round(q.pass * 100);
      return `<div class="optionStats"><b>大考中心官方統計</b><div class="rate-row"><span>${q.kind === "multi" ? "得分率" : "答對率"}</span><i><b class="rate-ok" style="width:${value}%"></b></i><em>${value}%</em></div><small>本年度官方公開資料未提供各錯誤選項畫記率，本站不以答對率反推。</small></div>`;
    }
    return `<div class="optionStats"><b>答題統計</b><small>本年度大考中心公開頁未提供逐題答對率或各選項畫記率，本站不自行推算。</small></div>`;
  }

  window.MathQuestionUI = { contentFor, keyFor, optionAnalysisHtml, optionHtml, questionBodyHtml, richText, solutionHtml };
})();
