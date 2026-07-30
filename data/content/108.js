(() => {
  Object.assign(window.MATH_CONTENT, {
    "108M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`點 \(A=(1,0)\) 在單位圓 \(\Gamma:x^2+y^2=1\) 上。圓上除 A 以外，還有幾個點到直線 \(L:y=2x\) 的距離等於 A 到 L 的距離？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: [String.raw`A 到 L 的距離為 \(2/\sqrt5\)。與 L 距離相同的兩條平行線為 \(2x-y=\pm2\)，它們與單位圓各有兩個交點。`, "四個交點中包含 A，所以除 A 外還有 3 個。"],
      optionAnalysis: { "1": "漏計另一條平行線的交點。", "2": "只計一條割線的兩個交點。", "3": "兩條割線共四點，扣除 A 後為 3 點。", "4": "沒有扣除題目指定排除的 A。", "5": "兩條等距平行線都與圓相交。" }
    },
    "108M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`下列哪個選項是方程式 \(x^3-x^2+4x-4=0\) 的解？其中 \(i=\sqrt{-1}\)。`,
      options: { "1": String.raw`\(-2i\)`, "2": String.raw`\(-i\)`, "3": String.raw`\(i\)`, "4": "2", "5": "4" },
      solution: [String.raw`分組因式分解：
      \[
      x^3-x^2+4x-4=(x-1)(x^2+4)。
      \]`, String.raw`根為 \(1、2i、-2i\)，選項中只有 \(-2i\)。`],
      optionAnalysis: { "1": "代入可使 \(x^2+4=0\)。", "2": String.raw`\((-i)^2+4=3\neq0\)。`, "3": String.raw`\(i^2+4=3\neq0\)。`, "4": "代入原式不為零。", "5": "代入原式不為零。" }
    },
    "108M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`共有多少組正整數 \((k,m,n)\) 滿足 \(2^k4^m8^n=512\)？`,
      options: { "1": "1 組", "2": "2 組", "3": "3 組", "4": "4 組", "5": "0 組" },
      solution: [String.raw`化為同底數得 \(k+2m+3n=9\)。`, String.raw`當 \(n=1\) 有 \((k,m)=(4,1),(2,2)\)；當 \(n=2\) 有 \((k,m)=(1,1)\)，共 3 組。`],
      optionAnalysis: { "1": "漏掉同一 n 下的另一組。", "2": "漏掉 n=2 的解。", "3": "三組正整數解如解析所列。", "4": "把零也當成正整數。", "5": "至少有三組可直接驗證。" }
    },
    "108M-4": {
      verified: true, sourcePage: 1,
      stem: "豬、雞、牛三種肉類與白菜、豆腐、香菇三種素類要全部做成三道菜；每種食材只用一次，每道菜至少有一種肉。食材共有幾種分配方法？",
      options: { "1": "3", "2": "6", "3": "9", "4": "18", "5": "27" },
      solution: ["三道菜各至少一種肉，而恰有三種肉，所以每道菜各以一種肉作為區別。", String.raw`三種素料各自可分到三道菜之一，共 \(3^3=27\) 種。`],
      optionAnalysis: { "1": "只分配一種素料。", "2": "誤用排列計算。", "3": "只計兩種素料的分配。", "4": "多加了不必要的限制。", "5": "三種素料各有三個獨立去向。" }
    },
    "108M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`正實數 b 滿足 \((\log100)(\log b)+\log100+\log b=7\)。選出 b 所在的正確範圍。`,
      options: { "1": String.raw`\(1\le b\le\sqrt{10}\)`, "2": String.raw`\(\sqrt{10}\le b\le10\)`, "3": String.raw`\(10\le b\le10\sqrt{10}\)`, "4": String.raw`\(10\sqrt{10}\le b\le100\)`, "5": String.raw`\(100\le b\le100\sqrt{10}\)` },
      solution: [String.raw`令 \(x=\log b\)。因 \(\log100=2\)，方程成 \(2x+2+x=7\)，故 \(x=5/3\)。`, String.raw`因此 \(b=10^{5/3}\)，而 \(10^{3/2}=10\sqrt{10}<b<10^2=100\)。`],
      optionAnalysis: { "1": "此區間的常用對數至多 1/2。", "2": "此區間的常用對數至多 1。", "3": "上界的常用對數是 3/2，小於 5/3。", "4": "5/3 介於 3/2 與 2。", "5": "b 小於 100。" }
    },
    "108M-6": {
      verified: true, sourcePage: 2,
      stem: "平均氣溫 11、13、15、17、19、21°C 時，咖啡平均售出量依序為 512、437、361、279、203、135 杯，兩者相關係數為 -0.99。推測氣溫 8°C 時的售出量最接近何者？",
      options: { "1": "570 杯", "2": "625 杯", "3": "700 杯", "4": "755 杯", "5": "800 杯" },
      solution: ["資料近似高度負線性，每升高 2°C 約少 75～80 杯，即每 1°C 約少 38 杯。", "從 11°C 的 512 杯向下外推到 8°C，約增加 114 杯，得到約 626 杯，最接近 625 杯。"],
      optionAnalysis: { "1": "外推增量太小。", "2": "依近似線性趨勢約為 626 杯。", "3": "高估低溫帶來的增量。", "4": "高估外推斜率。", "5": "與表中近似線性趨勢不符。" }
    },
    "108M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`實數等差數列 \(a_n\) 的公差為正實數 \(\alpha\)。選出正確敘述。`,
      options: { "1": String.raw`若 \(b_n=-a_n\)，則 \(b_1>b_2>b_3>\cdots\)`, "2": String.raw`若 \(c_n=a_n^2\)，則 \(c_1<c_2<c_3<\cdots\)`, "3": String.raw`若 \(d_n=a_n+a_{n+1}\)，則 \(d_n\) 的公差為 \(\alpha\)`, "4": String.raw`若 \(e_n=a_n+n\)，則 \(e_n\) 的公差為 \(\alpha+1\)`, "5": String.raw`若 \(f_n\) 是 \(a_1,\ldots,a_n\) 的平均數，則 \(f_n\) 的公差為 \(\alpha\)` },
      solution: [String.raw`取負後公差為 \(-\alpha\)，所以 \(b_n\) 遞減；\(e_{n+1}-e_n=\alpha+1\)。`, String.raw`平方不必遞增；\(d_n\) 公差為 \(2\alpha\)；\(f_n=(a_1+a_n)/2\) 的公差為 \(\alpha/2\)。`],
      optionAnalysis: { "1": "取負使數列嚴格遞減。", "2": "若項為負且接近零，平方可能遞減。", "3": "實際公差為 2α。", "4": "相鄰差為 α+1。", "5": "實際公差為 α/2。" }
    },
    "108M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`甲從數線 \(-8\) 出發、乙從 10 出發等速運動；乙速率是甲的 \(a>1\) 倍。選出正確敘述。`,
      options: { "1": "甲向負、乙向正，兩人會相遇", "2": "兩人都向負，兩人不會相遇", "3": "甲向正、乙向負，乙先到原點", "4": "兩人都向正，距離越來越大", "5": String.raw`甲向正、乙向負且在 \(-2\) 相遇，則 \(a=2\)` },
      solution: ["同向向正時乙在前且速率較快，距離增加，故（4）正確。", "在 -2 相遇時，甲走 6、乙走 12；時間相同，速率比為 2，故（5）正確。"],
      optionAnalysis: { "1": "兩人背向而行，不會相遇。", "2": "乙在後方但較快，會追上甲。", "3": "乙是否先到原點還要看 a 是否大於 5/4。", "4": "乙在前且較快，距離增加。", "5": "路程比 12:6 等於速率比。" }
    },
    "108M-9": {
      verified: true, sourcePage: 3,
      stem: "從 1～7 中隨機任取兩個相異數，選出正確敘述。",
      options: { "1": String.raw`和大於 10 的機率為 \(\frac17\)`, "2": String.raw`和小於 5 的機率為 \(\frac17\)`, "3": String.raw`和為奇數的機率為 \(\frac47\)`, "4": String.raw`差為偶數的機率為 \(\frac57\)`, "5": String.raw`積為奇數的機率為 \(\frac27\)` },
      solution: [String.raw`全部有 \(\binom72=21\) 組。奇偶各取一數有 \(4\cdot3=12\) 組，所以和為奇數的機率 \(12/21=4/7\)。`, String.raw`兩數皆奇有 \(\binom42=6\) 組，所以積為奇數的機率 \(6/21=2/7\)。`],
      optionAnalysis: { "1": "和大於 10 有 4 組，機率 4/21。", "2": "和小於 5 有 2 組，機率 2/21。", "3": "一奇一偶共 12 組。", "4": "同奇偶共 9 組，機率 3/7。", "5": "兩數皆奇共 6 組。" }
    },
    "108M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`三角形 ABC 滿足 \(50^\circ\le A<B\le60^\circ\)。選出正確敘述。`,
      options: { "1": String.raw`\(\sin A<\sin B\)`, "2": String.raw`\(\sin B<\sin C\)`, "3": String.raw`\(\cos A<\cos B\)`, "4": String.raw`\(\sin C<\cos C\)`, "5": String.raw`\(AB<BC\)` },
      solution: [String.raw`A、B 都是銳角且 \(A<B\)，故 \(\sin A<\sin B\)。又 \(A+B<120^\circ\)，所以 \(C>60^\circ\ge B\)，得 \(\sin B<\sin C\)。`, "餘弦在銳角遞減；且 C>A，所以其對邊 AB 大於 BC。"],
      optionAnalysis: { "1": "正弦在此銳角區間遞增。", "2": "C 大於 B 且均不超過 90°。", "3": "應為 cos A>cos B。", "4": "C>60°，故 sin C>cos C。", "5": "C>A，所以 AB>BC。" }
    },
    "108M-11": {
      verified: true, sourcePage: 4,
      stem: "訪問 500 人：50～59 歲 220 人、60 歲以上 280 人；做過篩檢者 120 人，其中一年前 75 人、一年內 45 人。60 歲以上篩檢率是 50～59 歲的 3.5 倍。選出正確敘述。",
      options: { "1": "60 歲以上者超過 60%", "2": "隨機抽兩人皆為 50～59 歲的機率大於 0.25", "3": String.raw`從做過篩檢者抽兩人，恰一人在一年內、另一人在一年前的機率為 \(2(\frac{45}{120})(\frac{75}{119})\)`, "4": "未做過篩檢的比率低於 75%", "5": "60 歲以上做過篩檢者超過 90 人" },
      solution: [String.raw`設 50～59 歲篩檢率為 r，則 \(220r+280(3.5r)=120\)，得 \(r=0.1\)，60 歲以上篩檢者為 98 人。`, "不分順序抽到一位一年內、一位一年前，須把兩種順序相加，故（3）也正確。"],
      optionAnalysis: { "1": "280/500=56%。", "2": "約為 0.193，小於 0.25。", "3": "兩種抽取順序機率相同，故乘 2。", "4": "未篩檢者 380/500=76%。", "5": "解聯立關係得 98 人。" }
    },
    "108M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`實係數三次式 \(f_1,f_2\) 除以實係數二次式 \(g\) 的餘式分別為 \(r_1,r_2\)。選出正確敘述。`,
      options: { "1": String.raw`\(-f_1\) 除以 g 的餘式為 \(-r_1\)`, "2": String.raw`\(f_1+f_2\) 除以 g 的餘式為 \(r_1+r_2\)`, "3": String.raw`\(f_1f_2\) 除以 g 的餘式為 \(r_1r_2\)`, "4": String.raw`\(f_1\) 除以 \(-3g\) 的餘式為 \(-r_1/3\)`, "5": String.raw`\(f_1r_2-f_2r_1\) 可被 g 整除` },
      solution: [String.raw`寫成 \(f_i=q_ig+r_i\)。取負與相加都保留相應餘式，故（1）、（2）正確。`, String.raw`\(f_1r_2-f_2r_1=g(q_1r_2-q_2r_1)\)，故（5）正確。乘積餘式仍須再除以 g；把除式乘常數不改變餘式。`],
      optionAnalysis: { "1": "由多項式除法等式取負可得。", "2": "兩個除法等式相加可得。", "3": "r₁r₂ 可能仍為二次式，還須再取餘式。", "4": "除式縮放只改變商，不改變餘式。", "5": "代入除法等式後可提出因式 g。" }
    },
    "108M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`坐標空間的平面 P 通過 \((0,0,0),(1,2,3),(-1,2,3)\)。選出正確敘述。`,
      options: { "1": "向量 (0,3,2) 與 P 垂直", "2": "P 與 xy 平面垂直", "3": "點 (0,4,6) 在 P 上", "4": "P 包含 x 軸", "5": "點 (1,1,1) 到 P 的距離是 1" },
      solution: [String.raw`兩生成向量相減得 \((2,0,0)\)，故 P 包含 x 軸；相加得 \((0,4,6)\)，該點也在 P 上。`, String.raw`平面方程可寫成 \(3y-2z=0\)，法向量為 \((0,3,-2)\)。`],
      optionAnalysis: { "1": "正確法向量的 z 分量為 -2。", "2": "兩平面法向量內積不為 0。", "3": "滿足 3y-2z=0。", "4": "兩已知向量之差沿 x 軸。", "5": String.raw`距離為 \(1/\sqrt{13}\)。` }
    },
    "108M-14": { verified: true, sourcePage: 5, stem: String.raw`實數 x,y 滿足 \(\begin{bmatrix}3&-1&3\\2&4&-1\end{bmatrix}\begin{bmatrix}x\\y\\1\end{bmatrix}=\begin{bmatrix}6\\-6\end{bmatrix}\)。求 \(x+3y\)。`, solution: [String.raw`聯立得 \(3x-y=3、2x+4y=-5\)，解得 \(x=\frac12、y=-\frac32\)。故 \(x+3y=-4\)。`] },
    "108M-15": { verified: true, sourcePage: 5, stem: String.raw`橢圓 \(\frac{x^2}{a^2}+\frac{y^2}{16}=1\) 的四個頂點所成四邊形面積為 58，求 a。`, solution: [String.raw`兩對角線長為 \(2a、8\)，面積為 \(\frac12(2a)(8)=8a=58\)，故 \(a=\frac{29}{4}\)。`] },
    "108M-16": { verified: true, sourcePage: 5, stem: "90×60 公尺足球場外圍要鋪內圈長 400 公尺的跑道，左右為同直徑半圓、上下為直線且平行長邊。求一條直線跑道長度的最大可能整數值。", solution: [String.raw`半圓直徑至少 60。令直線段長 L，則 \(2L+60\pi\le400\)，所以 \(L\le(400-60\pi)/2\approx105.74\)。最大整數為 105。`] },
    "108M-17": { verified: true, sourcePage: 5, stem: "甲、乙、丙三案領票人數為 765、537、648；三案都領者 224 人，且每人至少領兩張。求只領甲、乙而未領丙者人數。", solution: [String.raw`設只領甲乙、甲丙、乙丙者為 x,y,z，則 \(x+y=541、x+z=313、y+z=424\)。相加前兩式減第三式得 \(2x=430\)，故 \(x=215\)。`] },
    "108M-18": { verified: true, sourcePage: 6, stem: String.raw`三角形 ABC 中，AD 交 BC 於 D，BE 交 AD 於 E，且 \(\angle ACB=30^\circ、\angle EDB=60^\circ、\angle AEB=120^\circ\)。若 \(CD=15、ED=7\)，求 AB。`, solution: [String.raw`令 \(D=(0,0)\)、AD 為 x 軸正向。由 \(ED=7\) 得 \(E=(7,0)\)。取 DB 與 x 軸夾 \(60^\circ\)，則 \(C=(-15/2,-15\sqrt3/2)\)。`, String.raw`由 \(\angle ACB=30^\circ\) 得 \(A=(15,0)\)；再由 \(\angle AEB=120^\circ\) 與 B 在 DB 上，得 \(B=(7/2,7\sqrt3/2)\)。`, String.raw`所以
    \[
    AB=\sqrt{\left(15-\frac72\right)^2+\left(\frac{7\sqrt3}{2}\right)^2}=13。
    \]`] },
    "108M-19": { verified: true, sourcePage: 6, stem: "正立方體有一頂點在 z=0 平面、另一頂點在 z=6 平面。求邊長的最小可能值。", solution: [String.raw`邊長為 s 時，任兩頂點的垂直高差至多為 \(s\sqrt3\)，因三條互相垂直邊的 z 分量絕對值和至多為 \(\sqrt3s\)。`, String.raw`要達高差 6，需 \(s\ge6/\sqrt3=2\sqrt3\)，且三邊等角傾斜時可達，故最小值為 \(2\sqrt3\)。`] },
    "108M-20": { verified: true, sourcePage: 6, stem: String.raw`平面四點 A,B,C,D 滿足 \(\overrightarrow{BC}=\overrightarrow{AB}+\overrightarrow{AD}\)，且 \(\overrightarrow{AC}、\overrightarrow{BD}\) 等長並互相垂直。求 \(\tan\angle BAD\)。`, solution: [String.raw`令 A 為原點、\(\vec b=\overrightarrow{AB}、\vec d=\overrightarrow{AD}\)，則 \(\overrightarrow{AC}=2\vec b+\vec d、\overrightarrow{BD}=\vec d-\vec b\)。`, String.raw`由等長與垂直條件得 \(\vec b\cdot\vec d=-|\vec b|^2/2、|\vec d|^2=5|\vec b|^2/2\)，所以 \(\cos\angle BAD=-1/\sqrt{10}\)、\(\sin\angle BAD=3/\sqrt{10}\)，故 \(\tan\angle BAD=-3\)。`] }
  });
})();
