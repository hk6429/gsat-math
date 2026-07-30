(() => {
  Object.assign(window.MATH_CONTENT, {
    "106M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`某校老師玩過「寶可夢」的比率為 \(r_1\)，學生玩過的比率為 \(r_2\)，且 \(r_1\ne r_2\)。下列哪項資訊可用來判定全校師生玩過的比率？`,
      options: { "1": "全校老師與學生比率", "2": "全校老師人數", "3": "全校學生人數", "4": "全校師生人數", "5": "全校師生玩過的人數" },
      solution: [String.raw`全校比率是 \(r_1、r_2\) 依老師、學生人數所作的加權平均。已知兩群人數的比率即可決定權重。`],
      optionAnalysis: { "1": "兩群人數比率可決定加權平均的權重。", "2": "只有老師人數，仍不知道學生權重。", "3": "只有學生人數，仍不知道老師權重。", "4": "只有總人數，無法拆分兩群。", "5": "只有分子，仍缺總人數。" }
    },
    "106M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`手機程式每次點擊數 a 後，螢幕上的數會變成 \(a^2\)。初始正數 b 連續點擊三次後接近 \(81^3\)，b 最接近何者？`,
      options: { "1": "1.7", "2": "3", "3": "5.2", "4": "9", "5": "81" },
      solution: [String.raw`三次平方後為 \(b^8\)。因 \(81^3=3^{12}\)，所以 \(b\approx3^{12/8}=3\sqrt3\approx5.196\)，最接近 5.2。`],
      optionAnalysis: { "1": "少算了連續平方的指數。", "2": String.raw`\(3^8\) 遠小於 \(81^3\)。`, "3": String.raw`\(3\sqrt3\approx5.196\)。`, "4": String.raw`\(9^8\) 過大。`, "5": "把點擊後的數誤當成初始值。" }
    },
    "106M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`雙曲線 \(\Gamma:\frac{y^2}{a^2}-\frac{x^2}{b^2}=1\) 的第一象限漸近線為 \(\ell\)。動點 \((t,t^2)\) 從 \(t=0\) 出發；當 \(t>0\) 時，選出正確敘述。`,
      options: { "1": "兩者都不會碰到", "2": "會碰 Γ，但不碰 ℓ", "3": "會碰 ℓ，但不碰 Γ", "4": "先碰 Γ，再碰 ℓ", "5": "先碰 ℓ，再碰 Γ" },
      solution: [String.raw`漸近線是 \(y=(a/b)x\)，拋物線在 \(t=a/b\) 時先與它相交。`, String.raw`把 \((t,t^2)\) 代入雙曲線，左式隨 t 最終趨向無窮；在漸近線交點時左式為 0，故還要再往後才與 Γ 相交。`],
      optionAnalysis: { "1": "拋物線會先後穿過漸近線與雙曲線。", "2": "一定會碰到漸近線。", "3": "代入式最終超過 1，故也會碰 Γ。", "4": "在漸近線交點代入雙曲線左式為 0。", "5": "先過漸近線，再達雙曲線。" }
    },
    "106M-4": {
      verified: true, sourcePage: 1,
      stem: "正立方體上兩質點同時分別沿 AB、CD 等速直線運動，皆在 1 秒後到達終點。這一秒內兩質點距離如何變化？",
      options: { "1": "固定不變", "2": "越來越小", "3": "越來越大", "4": "在 1/2 秒時最小", "5": "在 1/2 秒時最大" },
      solution: ["以立方體邊長為 1 建立坐標，兩位置向量都是時間 t 的一次式；距離平方化簡為關於 t、對稱軸在 \(t=1/2\) 的開口向上二次式。", "因此兩質點在 1/2 秒時距離最小。"],
      optionAnalysis: { "1": "兩條運動線段並非保持固定平移關係。", "2": "過了中點後距離會再增加。", "3": "前半段距離先減少。", "4": "距離平方的二次式在 t=1/2 取最小。", "5": "二次式開口向上，不是最大。" }
    },
    "106M-5": {
      verified: true, sourcePage: 2,
      stem: "題圖為 2016 年各月最低溫 x 與最高溫 y 的散佈圖。改以溫差 y-x 為橫軸、最高溫 y 為縱軸後，選出正確的相關性敘述。",
      options: { "1": "正相關，且比最高溫與最低溫的相關性強", "2": "正相關，且較弱", "3": "負相關，且較強", "4": "負相關，且較弱", "5": "零相關" },
      solution: ["由原圖可見最低溫越高時，溫差大致越小；以溫差為橫軸後，最高溫與溫差呈負相關。", "散點較原本最高溫與最低溫的線性關係分散，因此相關性較弱。"],
      optionAnalysis: { "1": "方向不是正相關。", "2": "方向不是正相關。", "3": "負相關但沒有原關係強。", "4": "方向為負，且散布更分散。", "5": "仍可看出下降趨勢。" }
    },
    "106M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`有多少個實數 x 滿足 \(\frac\pi2\le x\le\frac{3\pi}{2}\)，且 \(\cos(x^\circ)\le\cos x\)？`,
      options: { "1": "0 個", "2": "1 個", "3": "2 個", "4": "4 個", "5": "無窮多個" },
      solution: [String.raw`區間內 \(x\) 介於約 1.57 與 4.71；把 x 當角度時 \(\cos(x^\circ)>0.996\)，但把 x 當弧度時 \(\cos x\le0\)。`, "所以不可能滿足不等式，解有 0 個。"],
      optionAnalysis: { "1": "左側接近 1，右側不大於 0，無解。", "2": "不存在交點。", "3": "不能把度數與弧度視為相同。", "4": "區間端點也不符合。", "5": "不等式在整段都不成立。" }
    },
    "106M-7": {
      verified: true, sourcePage: 2,
      stem: "週一到週五從牛肉麵、大滷麵、咖哩飯、排骨飯安排午餐；四種至少各一次，相鄰不能相同，且不能連兩天吃麵。共有幾種計畫？",
      options: { "1": "52", "2": "60", "3": "68", "4": "76", "5": "84" },
      solution: ["五天使用四種餐點，恰有一種重複一次。固定重複牛肉麵或大滷麵時，各有 6 種合法排列；固定重複咖哩飯或排骨飯時，各有 24 種。", String.raw`因此總數為 \(6+6+24+24=60\)。`],
      optionAnalysis: { "1": "排除條件過多。", "2": "依重複餐點與位置分類得到 60。", "3": "漏排部分連續兩天麵食。", "4": "把相鄰相同的排列計入。", "5": "只做了四種至少一次，未完整套用相鄰限制。" }
    },
    "106M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`相異正整數 \(m,n\le4\)，非零實數 a,b。函數 \(f(x)=ax^m、g(x)=bx^n\) 的圖形恰有 3 個相異交點。哪些情況可能？`,
      options: { "1": "m,n 皆偶且 a,b 同號", "2": "m,n 皆偶且 a,b 異號", "3": "m,n 皆奇且 a,b 同號", "4": "m,n 皆奇且 a,b 異號", "5": "m,n 一奇一偶" },
      solution: [String.raw`交點方程為 \(x^n(a x^{m-n}-b)=0\)，原點必為一個交點。還要有一正一負兩個非零根，需 \(m-n\) 為偶數且 \(b/a>0\)。`, "因此 m、n 同奇偶且 a、b 同號，選（1）、（3）。"],
      optionAnalysis: { "1": "同偶使指數差為偶，且同號可有正負根。", "2": "異號使非零根方程無實解。", "3": "同奇的指數差仍為偶數。", "4": "異號無法得到兩個非零實根。", "5": "指數差為奇數，只有一個非零實根。" }
    },
    "106M-9": {
      verified: true, sourcePage: 3,
      stem: "圓 Γ 的外部含原點，而 (2,6) 在圓內。選出正確敘述。",
      options: { "1": "圓心不可能在第二象限", "2": "圓心可能在第三象限，且半徑必大於 10", "3": "圓心可能在第一象限，且半徑必小於 10", "4": "圓心可能在 x 軸，且 x 坐標必小於 10", "5": "圓心可能在第四象限，且半徑必大於 10" },
      solution: [String.raw`設圓心 \((h,k)\)。要使 (2,6) 比原點更接近圓心，必有
      \[
      (h-2)^2+(k-6)^2<h^2+k^2\Longleftrightarrow h+3k>10。
      \]`, "第四象限可取 k<0、足夠大的 h；此時圓心到 (2,6) 的距離已大於 10，半徑為包住該點也必大於 10。"],
      optionAnalysis: { "1": "第二象限仍可取足夠大的正 k。", "2": "第三象限使 h+3k<0，不可能。", "3": "第一象限半徑不一定小於 10。", "4": "k=0 時反而必須 h>10。", "5": "第四象限可行，且條件迫使半徑大於 10。" }
    },
    "106M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`空間三直線
      \[
      L_1:\frac{x-1}{2}=\frac{y+1}{2}=\frac z1,\quad
      L_2:\begin{cases}x-2y+2z=-4\\x+y-4z=5\end{cases},\quad
      L_3:(x,y,z)=(-t,-2-t,4+4t)。
      \]
      選出正確敘述。`,
      options: { "1": "L₁、L₂ 方向互相垂直", "2": "L₁、L₃ 方向互相垂直", "3": "有平面同時包含 L₁、L₂", "4": "有平面同時包含 L₁、L₃", "5": "有平面同時包含 L₂、L₃" },
      solution: [String.raw`L₁ 方向為 \((2,2,1)\)；L₂ 方向由兩平面法向量外積得 \((2,2,1)\)，所以 L₁、L₂ 平行且可共面。`, String.raw`L₃ 方向為 \((-1,-1,4)\)，與 L₁ 方向內積為 0；檢查參數可知兩線相交，所以也共面。`],
      optionAnalysis: { "1": "L₁、L₂ 方向其實平行。", "2": "方向內積 -2-2+4=0。", "3": "兩條相異平行線必共面。", "4": "兩線相交，故共面。", "5": "L₂、L₃ 為歪斜線。" }
    },
    "106M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`凸五邊形 ABCDE 中，\(AB=\sqrt6+\sqrt2、BC=2、CD=4、DE=EA=2、\angle BAE=105^\circ、\angle DEA=90^\circ\)。選出正確敘述。`,
      options: { "1": String.raw`\(AD=2\sqrt2\)`, "2": String.raw`\(\angle DAB=45^\circ\)`, "3": String.raw`\(BD=2\sqrt6\)`, "4": String.raw`\(\angle ABD=45^\circ\)`, "5": String.raw`三角形 BCD 面積為 \(2\sqrt2\)` },
      solution: [String.raw`三角形 ADE 為等腰直角三角形，所以 \(AD=2\sqrt2、\angle DAE=45^\circ\)，進而 \(\angle DAB=60^\circ\)。`, String.raw`在三角形 ABD 用餘弦定理得 \(BD=2\sqrt3\)，再以正弦或餘弦定理得 \(\angle ABD=45^\circ\)。`],
      optionAnalysis: { "1": "兩直角邊皆為 2，斜邊為 2√2。", "2": "DAB=105°-45°=60°。", "3": "餘弦定理得 BD=2√3。", "4": "由邊角關係可得 45°。", "5": "依三邊計算的面積不是 2√2。" }
    },
    "106M-12": {
      verified: true, sourcePage: 4,
      stem: "全班 50 人，國文、英文、數學及格人數為 45、39、34，且英文及格者國文也及格。設數學與英文皆及格 x 人，數學及格但英文不及格 y 人。選出正確敘述。",
      options: { "1": String.raw`\(x+y=39\)`, "2": String.raw`\(y\le11\)`, "3": String.raw`至少一科不及格者有 \(39-x+y\) 人`, "4": "至少一科不及格者最少 11 人", "5": "至少一科不及格者最多 27 人" },
      solution: [String.raw`數學及格者分成 x、y 兩群，所以 \(x+y=34\)。英文不及格共 11 人，故 \(y\le11\)。`, String.raw`三科全及格者正是數學與英文皆及格的 x 人，因此至少一科不及格者為 \(50-x\)。由 \(23\le x\le34\)，其最大值為 27。`],
      optionAnalysis: { "1": "應為 x+y=34。", "2": "y 是英文不及格 11 人中的一部分。", "3": "正確人數是 50-x。", "4": "最少為 16，不是 11。", "5": "x 最少 23，所以 50-x 最多 27。" }
    },
    "106M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`四面體 ABCD 中，\(\overrightarrow{AD}\) 分別與 \(\overrightarrow{AB}、\overrightarrow{AC}\) 垂直。選出正確敘述。`,
      options: { "1": String.raw`\(\overrightarrow{DB}\cdot\overrightarrow{DC}=DA^2-\overrightarrow{AB}\cdot\overrightarrow{AC}\)`, "2": "若 BAC 為直角，則 BDC 為直角", "3": "若 BAC 為銳角，則 BDC 為銳角", "4": "若 BAC 為鈍角，則 BDC 為鈍角", "5": "若 AB<DA 且 AC<DA，則 BDC 為銳角" },
      solution: [String.raw`令 A 為原點，\(\vec b=\overrightarrow{AB}、\vec c=\overrightarrow{AC}、\vec d=\overrightarrow{AD}\)。則
      \[
      \overrightarrow{DB}\cdot\overrightarrow{DC}
      =(\vec b-\vec d)\cdot(\vec c-\vec d)=\vec b\cdot\vec c+|\vec d|^2。
      \]`, "若 BAC 銳角，兩項皆正，BDC 銳角；若 \(|b|,|c|<|d|\)，即使 \(b\cdot c\) 最小也大於 \(-|d|^2\)，故仍為銳角。"],
      optionAnalysis: { "1": "內積應為加號，不是減號。", "2": "此時 DB·DC=DA²>0，故為銳角。", "3": "AB·AC>0，使 DB·DC>0。", "4": "鈍角時負項可能被 DA² 抵消。", "5": "由柯西不等式可保證 DB·DC>0。" }
    },
    "106M-14": { verified: true, sourcePage: 5, stem: String.raw`遞迴數列 \(a_n=a_{n-1}+f(n-2)\)，其中 f 為二次多項式。若 \(a_1=1,a_2=2,a_3=5,a_4=12\)，求 \(a_5\)。`, solution: [String.raw`\(f(0),f(1),f(2)\) 依序為 1、3、7，二階差為 2，因此 \(f(3)=13\)。故 \(a_5=12+13=25\)。`] },
    "106M-15": { verified: true, sourcePage: 5, stem: String.raw`三角形 ABC 內點 P 滿足 \(\overrightarrow{AP}=(4/3,5/6)\) 且 \(\overrightarrow{AP}=\frac12\overrightarrow{AB}+\frac15\overrightarrow{AC}\)。直線 AP 交 BC 於 M，求 AM 向量。`, solution: [String.raw`令 \(\overrightarrow{AM}=\lambda\overrightarrow{AP}\)。M 在 BC 上要求 AB、AC 係數和為 1，故 \(\lambda(1/2+1/5)=1\)，得 \(\lambda=10/7\)。`, String.raw`所以 \(\overrightarrow{AM}=(10/7)(4/3,5/6)=(40/21,25/21)\)。`] },
    "106M-16": { verified: true, sourcePage: 5, stem: String.raw`正整數 a 使 \(5x^3+(a+4)x^2+ax+1=0\) 的根都是有理根，求 a。`, solution: [String.raw`有理根條件配合首末係數試根，可得
      \[
      5x^3+11x^2+7x+1=(5x+1)(x+1)^2，
      \]
      因此 \(a=7\)。`] },
    "106M-17": { verified: true, sourcePage: 5, stem: "等差數列 a₁～a₉ 作為三列線性方程的係數；右側依序為 k+1、-k-5、k+9。若方程組有解，求 k。", solution: [String.raw`等差數列使第二列係數恰為第一、三列係數的平均，因此右側也須滿足
      \[
      -k-5=\frac{(k+1)+(k+9)}2=k+5。
      \]
      解得 \(k=-5\)。`] },
    "106M-18": { verified: true, sourcePage: 6, stem: String.raw`正整數 \(a\le x\le b、b-a=3\)。以 \(1/3、2/3\) 權重內插 \(\log a、\log b\)，且題示 \(\log a=1+2\log3-\log2、\log b=4\log2+\log3\)。求 x。`, solution: [String.raw`\(\log a=\log45、\log b=\log48\)，故 \(a=45、b=48\)。權重 \(1/3、2/3\) 對應從 a 往 b 前進 \(2/3\) 的距離，所以 \(x=45+2=47\)。`] },
    "106M-19": { verified: true, sourcePage: 6, stem: "青蛙從原點出發，每步等機率向上下左右跳一單位，共跳四步。求恰回原點的機率。", solution: [String.raw`四步回原點：左右各兩步有 6 種，上下各兩步有 6 種；或四方向各一步有 \(4!=24\) 種，共 36 種。`, String.raw`全部 \(4^4=256\) 種，機率 \(36/256=9/64\)。`] },
    "106M-20": { verified: true, sourcePage: 6, stem: "甲由同一點以每秒 4 公尺向東，乙以每秒 3 公尺向北。兩人視線被圓柱建築阻擋 6 秒，求底圓直徑。", solution: [String.raw`\(t\) 秒時兩人連線為
      \[
      \frac{x}{4t}+\frac{y}{3t}=1\Longleftrightarrow3x+4y=12t。
      \]`, String.raw`這族平行線在 6 秒內掃過的垂直距離為 \(\frac{12\cdot6}{\sqrt{3^2+4^2}}=72/5=14.4\)，即圓的直徑。`] }
  });
})();
