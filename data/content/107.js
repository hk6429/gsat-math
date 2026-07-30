(() => {
  Object.assign(window.MATH_CONTENT, {
    "107M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`給定相異兩點 A、B，空間中使三角形 PAB 為正三角形的所有點 P 所成集合為何？`,
      options: { "1": "兩個點", "2": "一線段", "3": "一直線", "4": "一圓", "5": "一平面" },
      solution: [String.raw`P 必須同時滿足 \(PA=PB=AB\)。條件 \(PA=PB\) 使 P 位於 AB 的中垂面；再固定 \(PA=AB\)，交集是一個圓。`],
      optionAnalysis: { "1": "這是平面情形，空間中可繞 AB 旋轉。", "2": "P 到 A、B 的距離都固定，不成線段。", "3": "距離條件不會留下整條直線。", "4": "兩個等半徑球面的交集是一圓。", "5": "中垂面上還須滿足固定距離。" }
    },
    "107M-2": {
      verified: true, sourcePage: 1,
      stem: "一份試卷有 10 題單選題，每題 5 個選項。小明各題獨立隨機猜答，全部答對的機率最接近何者？",
      options: { "1": String.raw`\(10^{-5}\)`, "2": String.raw`\(10^{-6}\)`, "3": String.raw`\(10^{-7}\)`, "4": String.raw`\(10^{-8}\)`, "5": String.raw`\(10^{-9}\)` },
      solution: [String.raw`全部答對機率為 \((1/5)^{10}\)。取常用對數得 \(-10\log5\approx-6.99\)，所以最接近 \(10^{-7}\)。`],
      optionAnalysis: { "1": "高估約百倍。", "2": "高估約十倍。", "3": "對數約為 -6.99。", "4": "低估約十倍。", "5": "低估約百倍。" }
    },
    "107M-3": {
      verified: true, sourcePage: 1,
      stem: "甲、乙各自從一星期七天中隨機選兩天休假，且選擇互相獨立。求兩人至少有一天同時休假的機率。",
      options: { "1": String.raw`\(\frac13\)`, "2": String.raw`\(\frac8{21}\)`, "3": String.raw`\(\frac37\)`, "4": String.raw`\(\frac{10}{21}\)`, "5": String.raw`\(\frac{11}{21}\)` },
      solution: [String.raw`固定甲的兩天，乙完全避開的選法有 \(\binom52\) 種，全部有 \(\binom72\) 種。`, String.raw`所求為 \(1-\binom52/\binom72=1-10/21=11/21\)。`],
      optionAnalysis: { "1": "未正確計入可能重疊一天或兩天。", "2": "補事件計數有誤。", "3": "不是以單一天機率直接相乘。", "4": "這是完全沒有共同休假的機率。", "5": "以補事件計算得到 11/21。" }
    },
    "107M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`有多少個整數 x 滿足 \(10^9<2^x<9^{10}\)？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: [String.raw`\(2^{29}<10^9<2^{30}\)，而 \(2^{31}<9^{10}<2^{32}\)。因此整數 x 只有 30、31，共 2 個。`],
      optionAnalysis: { "1": "漏掉其中一個端點內整數。", "2": "符合者為 30、31。", "3": "把界外的 29 或 32 計入。", "4": "上下界的二進位估計過寬。", "5": "區間內確有兩個整數指數。" }
    },
    "107M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`有幾個角度 \(\theta\) 滿足 \(0^\circ<\theta<180^\circ\)，且 \(\cos(3\theta-60^\circ)、\cos3\theta、\cos(3\theta+60^\circ)\) 依序成等差數列？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "5 個" },
      solution: [String.raw`令 \(u=3\theta\)。由和角公式，首末兩項和為 \(\cos u\)。等差條件要求它等於 \(2\cos u\)，故 \(\cos u=0\)。`, String.raw`在 \(0^\circ<u<540^\circ\) 中，解為 \(90^\circ、270^\circ、450^\circ\)，共 3 個。`],
      optionAnalysis: { "1": "只取一個週期內的部分解。", "2": "漏掉區間中的第三個零點。", "3": "三個解都落在指定開區間。", "4": "把端點或非解計入。", "5": "餘弦在此區間只有三個零點。" }
    },
    "107M-6": {
      verified: true, sourcePage: 2,
      stem: "售價漲跌幅固定為成本漲跌幅的一半。四週成本為 50、100、50、90，前兩週售價為 120、180，第三、四週售價為 x、y。選出正確關係。",
      options: { "1": String.raw`\(120=x<y<180\)`, "2": String.raw`\(120<x<y<180\)`, "3": String.raw`\(x<120<y<180\)`, "4": String.raw`\(120=x<180<y\)`, "5": String.raw`\(120<x<180<y\)` },
      solution: ["第三週成本下跌 50%，售價下跌 25%，所以 \(x=180(0.75)=135\)。", "第四週成本由 50 增至 90，上漲 80%，售價上漲 40%，所以 \(y=135(1.4)=189\)。"],
      optionAnalysis: { "1": "x=135，不等於 120。", "2": "y=189，超過 180。", "3": "x 大於 120。", "4": "x 不等於 120。", "5": "120<135<180<189。" }
    },
    "107M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`三角形 ABC 內接於以 O 為圓心的單位圓，且 \(\overrightarrow{OA}+\overrightarrow{OB}+\sqrt3\overrightarrow{OC}=0\)。求 \(\angle BAC\)。`,
      options: { "1": String.raw`\(30^\circ\)`, "2": String.raw`\(45^\circ\)`, "3": String.raw`\(60^\circ\)`, "4": String.raw`\(75^\circ\)`, "5": String.raw`\(90^\circ\)` },
      solution: [String.raw`由 \(|\overrightarrow{OA}+\overrightarrow{OB}|=\sqrt3\)，得 \(\angle AOB=60^\circ\)，且其和向量方向與 OC 相反。`, String.raw`因此較小的圓心角 \(\angle BOC=150^\circ\)，相應圓周角 \(\angle BAC=75^\circ\)。`],
      optionAnalysis: { "1": "只取了 AOB 圓心角的一半。", "2": "未用到 OC 與和向量反向。", "3": "把圓心角當成圓周角。", "4": "BC 所對圓心角為 150°，圓周角為 75°。", "5": "BC 並非直徑。" }
    },
    "107M-8": {
      verified: true, sourcePage: 3,
      stem: "小華學測成績：國文 11、英文 12、數學 9、自然 9、社會 12。依題目所列五校系檢定標準，哪些校系會列入篩選？",
      options: { "1": "甲校系", "2": "乙校系", "3": "丙校系", "4": "丁校系", "5": "戊校系" },
      solution: ["甲要求國文均標、英文前標、社會均標，皆通過。丁要求國英至少一科前標，且自然、社會均標；英文達前標，其餘也通過。", "乙的國文未達前標；丙的數學、自然皆未達前標；戊的自然未達前標。"],
      optionAnalysis: { "1": "國文 11≥10、英文 12≥12、社會 12≥10。", "2": "國文 11 未達前標 12。", "3": "數學 9<10 且自然 9<11。", "4": "英文達前標，自然與社會達均標。", "5": "自然 9 未達前標 11。" }
    },
    "107M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`多項式 \(f(x)\) 除以 \(x^2-1\) 的餘式為 \(2x+1\)。選出正確敘述。`,
      options: { "1": String.raw`\(f(0)=1\)`, "2": String.raw`\(f(1)=3\)`, "3": "f 可能為一次式", "4": String.raw`f 可能為 \(4x^4+2x^2-3\)`, "5": String.raw`f 可能為 \(4x^4+2x^3-3\)` },
      solution: [String.raw`因 \(x=\pm1\) 是除式根，故 \(f(1)=3、f(-1)=-1\)，所以（2）正確。餘式本身 \(2x+1\) 可作為 f，故（3）正確。`, "檢查選項（5）在 1、-1 的值分別為 3、-1，也符合，故（5）正確。"],
      optionAnalysis: { "1": "f(0) 還會受商的常數項影響。", "2": "代入 x=1，值等於餘式 3。", "3": "直接取 f=2x+1 即可。", "4": "代入 x=-1 得 3，不是 -1。", "5": "在 ±1 的值均符合餘式。" }
    },
    "107M-10": {
      verified: true, sourcePage: 4,
      stem: String.raw`坐標平面三角形 ABC 中，\(\overrightarrow{AB}=(-4,3)\)、\(\overrightarrow{AC}=(\frac25,\frac45)\)。選出正確敘述。`,
      options: { "1": String.raw`\(BC=5\)`, "2": "ABC 是直角三角形", "3": String.raw`面積為 \(\frac{11}{5}\)`, "4": String.raw`\(\sin B>\sin C\)`, "5": String.raw`\(\cos A>\cos B\)` },
      solution: [String.raw`在 C 點，\(\overrightarrow{CA}\cdot\overrightarrow{CB}=0\)，所以是直角三角形。`, String.raw`面積為 \(\frac12|(-4)(4/5)-3(2/5)|=11/5\)。`],
      optionAnalysis: { "1": String.raw`\(BC=11/\sqrt5\)，不是 5。`, "2": "CA 與 CB 內積為 0。", "3": "以二維外積計得 11/5。", "4": "B 的對邊 AC 小於 C 的對邊 AB。", "5": "直接計算得 cos A 小於 cos B。" }
    },
    "107M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`直線 \(L:\frac{x-1}{2}=\frac{y-2}{-3}=\frac z{-1}\)，平面 \(E_1:2x-3y-z=0\)、\(E_2:x+y-z=0\)。選出正確敘述。`,
      options: { "1": "點 (3,0,-1) 在 L 上", "2": "點 (1,2,3) 在 E₁ 上", "3": "L 與 E₁ 垂直", "4": "L 在 E₂ 上", "5": "E₁ 與 E₂ 交於一直線" },
      solution: [String.raw`L 的方向向量 \((2,-3,-1)\) 正是 \(E_1\) 的法向量，所以 L 垂直 \(E_1\)。`, "兩平面法向量不平行，因此相交於一直線。"],
      optionAnalysis: { "1": "取參數 1 時 y=-1，不是 0。", "2": "代入 E₁ 得 -7。", "3": "方向向量平行 E₁ 法向量。", "4": "L 的基準點不在 E₂ 上。", "5": "兩法向量不成比例。" }
    },
    "107M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`哪些二次曲線的焦點之一，是拋物線 \(y^2=2x\) 的焦點？`,
      options: { "1": String.raw`\(y=(x-\frac12)^2-\frac14\)`, "2": String.raw`\(\frac{x^2}{4}+\frac{y^2}{3}=1\)`, "3": String.raw`\(x^2+\frac{4y^2}{3}=1\)`, "4": String.raw`\(8x^2-8y^2=1\)`, "5": String.raw`\(4x^2-4y^2=1\)` },
      solution: [String.raw`\(y^2=2x=4px\) 的焦點為 \((1/2,0)\)。`, "選項（1）的焦點為 (1/2,0)；（3）的橢圓焦距為 1/2；（4）的雙曲線 \(c^2=1/8+1/8=1/4\)。"],
      optionAnalysis: { "1": "頂點 (1/2,-1/4)、p=1/4，焦點 (1/2,0)。", "2": "橢圓焦距為 1。", "3": "橢圓焦距為 1/2。", "4": "雙曲線焦距為 1/2。", "5": String.raw`雙曲線焦距為 \(1/\sqrt2\)。` }
    },
    "107M-13": { verified: true, sourcePage: 5, stem: "三點 (3,log3)、(6,log6)、(12,y) 共線，求 y。", solution: [String.raw`前兩點斜率為 \(\log2/3\)。橫坐標由 6 增至 12 是前段的兩倍，故 \(y=\log6+2\log2=\log24\)。`] },
    "107M-14": { verified: true, sourcePage: 5, stem: String.raw`長度不變的梯子原與地面夾 \(60^\circ\)。將梯腳向外拉 51 公分後，新夾角的正弦為 0.6。求梯長。`, solution: [String.raw`設梯長 L。原水平距離為 \(L\cos60^\circ=L/2\)，新水平距離為 \(L\sqrt{1-0.6^2}=0.8L\)。`, String.raw`故 \(0.8L-0.5L=51\)，得 \(L=170\)。`] },
    "107M-15": { verified: true, sourcePage: 5, stem: "AB=5，以 A 為圓心、半徑 r 作圓，B 的切線切於 P。r 變動時，求三角形 PAB 的最大面積。", solution: [String.raw`因 AP 垂直 BP，面積為 \(\frac12r\sqrt{25-r^2}\)。當 \(r^2=25-r^2\) 時乘積最大，面積為 \(25/4\)。`] },
    "107M-16": { verified: true, sourcePage: 5, stem: String.raw`圓完全落在 \(x-y\le4、x+y\le18、x-y\ge-2、x+y\ge-24\) 所圍區域，求最大可能面積。`, solution: [String.raw`兩條 \(x-y\) 邊界的垂直距離為 \(6/\sqrt2=3\sqrt2\)，是較窄方向，故最大圓直徑為 \(3\sqrt2\)。`, String.raw`半徑 \(3\sqrt2/2\)，面積為 \(9\pi/2\)。`] },
    "107M-17": { verified: true, sourcePage: 6, stem: String.raw`拋物線 \(y=x^2+2x-3\) 頂點為 C，與 x 軸交於 A、B，求 \(\cos\angle ACB\)。`, solution: [String.raw`A=(-3,0)、B=(1,0)、C=(-1,-4)\)。向量 CA=(-2,4)、CB=(2,4)，故 \(\cos C=12/20=3/5\)。`] },
    "107M-18": { verified: true, sourcePage: 6, stem: String.raw`已知
    \[
    \begin{bmatrix}a&b\\c&d\\1&2\end{bmatrix}
    \begin{bmatrix}-3&5&7\\-4&6&e\end{bmatrix}
    =
    \begin{bmatrix}3&x&7\\0&y&7\\-11&z&23\end{bmatrix}，
    \]
    求 y。`, solution: [String.raw`由第三列第三欄 \(7+2e=23\)，得 \(e=8\)。第二列第一、三欄給
    \[
    -3c-4d=0,\qquad7c+8d=7，
    \]
    解得 \(c=7、d=-21/4\)。`, String.raw`因此 \(y=5c+6d=35-\frac{126}{4}=\frac72\)。`] },
    "107M-19": { verified: true, sourcePage: 6, stem: String.raw`D 在三角形 ABC 的 BC 上，\(\angle B=75^\circ、\angle C=45^\circ、\angle ADB=60^\circ\)。若 \(\overrightarrow{AD}=s\overrightarrow{AB}+t\overrightarrow{AC}\)，求 s、t。`, solution: [String.raw`以正弦定理求出 BD:DC，再用分點公式
    \[
    \overrightarrow{AD}=\frac{DC}{BC}\overrightarrow{AB}+\frac{BD}{BC}\overrightarrow{AC}。
    \]`, String.raw`由角度關係配合正弦定理可得 \(BD:DC=2:1\)，所以 \(s=1/3、t=2/3\)。`] },
    "107M-20": { verified: true, sourcePage: 6, stem: "15×20 長方形沿對角線 BD 對摺，使平面 ABD 與 CBD 垂直，求空間中 A、C 的距離。", solution: [String.raw`BD=25。A、C 到摺線 BD 的距離都為 \(15\cdot20/25=12\)，兩垂足沿 BD 相距 \(|20^2/25-15^2/25|=7\)。`, String.raw`兩片平面互相垂直，所以 \(AC^2=12^2+12^2+7^2=337\)，得 \(AC=\sqrt{337}\)。`] }
  });
})();
