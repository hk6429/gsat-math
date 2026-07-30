(() => {
  Object.assign(window.MATH_CONTENT, {
    "102M-1": {
      verified: true, sourcePage: 1,
      stem: "參選模範生須同時符合「國文或英文至少 70 分」與「數學及格」。小文國文 65 分且不具資格，哪一推論必然正確？",
      options: { "1": "英文未達 70 分", "2": "數學不及格", "3": "英文至少 70 分但數學不及格", "4": "英文未達 70 分且數學不及格", "5": "英文未達 70 分或數學不及格" },
      solution: [String.raw`資格條件是 \((國文\ge70\ \text{或}\ 英文\ge70)\) 且數學及格。已知國文不足且整體條件不成立，依德摩根律只能確定「英文不足 70 或數學不及格」。`],
      optionAnalysis: { "1": "數學不及格時，英文仍可能達 70。", "2": "英文不足 70 時，數學仍可能及格。", "3": "只是其中一種可能。", "4": "不必兩個條件同時失敗。", "5": "正是資格條件否定後的必然結論。" }
    },
    "102M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`令 \(a=2.6^{10}-2.6^9、b=2.6^{11}-2.6^{10}、c=\frac{2.6^{11}-2.6^9}{2}\)，比較 a、b、c。`,
      options: { "1": String.raw`\(a>b>c\)`, "2": String.raw`\(a>c>b\)`, "3": String.raw`\(b>a>c\)`, "4": String.raw`\(b>c>a\)`, "5": String.raw`\(c>b>a\)` },
      solution: [String.raw`提出 \(2.6^9\)：
      \[
      a=1.6(2.6^9),\quad b=4.16(2.6^9),\quad c=2.88(2.6^9)。
      \]
      因共同因數為正，故 \(b>c>a\)。`],
      optionAnalysis: { "1": "b 其實是 a 的 2.6 倍。", "2": "a 是三者最小。", "3": "c 大於 a。", "4": "比較提出共同因數後的係數即可。", "5": "b 大於 c。" }
    },
    "102M-3": {
      verified: true, sourcePage: 1,
      stem: "袋中有 3 白 2 黑球，甲、乙、丙依序各抽一球且不放回。在甲、乙同色的條件下，丙抽到白球的機率為何？",
      options: { "1": String.raw`\(\frac13\)`, "2": String.raw`\(\frac5{12}\)`, "3": String.raw`\(\frac12\)`, "4": String.raw`\(\frac35\)`, "5": String.raw`\(\frac23\)` },
      solution: [String.raw`前兩球皆白的機率為 \(3/10\)，皆黑為 \(1/10\)，在同色條件下兩情形權重為 \(3/4、1/4\)。`, String.raw`前者剩餘白球比例 \(1/3\)，後者剩下全為白球，故
      \[
      \frac34\cdot\frac13+\frac14\cdot1=\frac12。
      \]`],
      optionAnalysis: { "1": "只算了前兩球皆白的後續比例。", "2": "條件情形的權重並非相等。", "3": "依兩種同色情形加權得 1/2。", "4": "這是抽球前的白球比例。", "5": "高估前兩球皆黑的條件權重。" }
    },
    "102M-4": {
      verified: true, sourcePage: 2,
      stem: "五組資料的 x 均為 2、3、5，y 依序為：(1) 1、13、1；(2) 3、10、2；(3) 5、7、3；(4) 9、1、5；(5) 7、4、4。各組迴歸直線相同且皆負相關，選出相關係數最小者。",
      options: { "1": "y=1、13、1", "2": "y=3、10、2", "3": "y=5、7、3", "4": "y=9、1、5", "5": "y=7、4、4" },
      solution: ["各組迴歸斜率相同，而相關係數 \(r\) 與斜率的關係為 \(斜率=r\,s_y/s_x\)。x 的標準差固定，所以在負斜率下，y 的標準差愈小，r 愈負。", "逐組比較 y 的離散程度，第（5）組最集中，因此相關係數最小。"],
      optionAnalysis: { "1": "y 的離散程度最大，相關絕對值反而較小。", "2": "離散程度仍大於第（5）組。", "3": "不如第（5）組集中。", "4": "資料起伏較大。", "5": "同斜率下最小的 y 標準差對應最負的 r。" }
    },
    "102M-5": {
      verified: true, sourcePage: 2,
      stem: "將 24 顆雞蛋分到紅、黃、綠三籃，每籃至少一顆，且黃、綠兩籃都裝奇數顆。共有幾種分法？",
      options: { "1": "55", "2": "66", "3": "132", "4": "198", "5": "253" },
      solution: [String.raw`令黃、綠籃分別有 \(2i+1、2j+1\) 顆，其中 \(i,j\ge0\)。紅籃有 \(22-2i-2j\) 顆且至少 1 顆，故 \(i+j\le10\)。`, String.raw`非負整數對的數目為 \(1+2+\cdots+11=66\)。`],
      optionAnalysis: { "1": "漏掉一層合法的整數解。", "2": "i+j≤10 的非負整數解共有 66 組。", "3": "把黃、綠互換重複加倍。", "4": "未正確處理奇數限制。", "5": "接近無奇偶限制的分法數。" }
    },
    "102M-6": {
      verified: true, sourcePage: 2,
      stem: "熱氣球等速垂直上升，10:00 仰角 30°，10:10 仰角 34°。依題附三角函數表，估計 10:30 的仰角。",
      options: { "1": "39°", "2": "40°", "3": "41°", "4": "42°", "5": "43°" },
      solution: [String.raw`設水平距離為 d。高度與 \(\tan\theta\) 成正比。每 10 分鐘高度增量為
      \[
      d(\tan34^\circ-\tan30^\circ)=d(0.675-0.577)=0.098d。
      \]`, String.raw`10:30 時 \(\tan\theta=0.577+3(0.098)=0.871\)，最接近表中的 \(\tan41^\circ=0.869\)。`],
      optionAnalysis: { "1": "tan39°=0.810，偏低。", "2": "tan40°=0.839，仍偏低。", "3": "tan41°=0.869，最接近 0.871。", "4": "tan42°=0.900，偏高。", "5": "tan43°=0.933，更高。" }
    },
    "102M-7": {
      verified: true, sourcePage: 3,
      stem: String.raw`令 \(M=\begin{bmatrix}1&1\\0&2\end{bmatrix}\)，且 \(M^n=\begin{bmatrix}a_n&b_n\\c_n&d_n\end{bmatrix}\)。選出正確敘述。`,
      options: { "1": String.raw`\(a_2=1\)`, "2": String.raw`\(a_1,a_2,a_3\) 為等比數列`, "3": String.raw`\(d_1,d_2,d_3\) 為等比數列`, "4": String.raw`\(b_1,b_2,b_3\) 為等差數列`, "5": String.raw`\(c_1,c_2,c_3\) 為等差數列` },
      solution: [String.raw`可歸納得
      \[
      M^n=\begin{bmatrix}1&2^n-1\\0&2^n\end{bmatrix}。
      \]
      因此 \(a_n\equiv1、d_n=2^n、c_n\equiv0\)；而 \(b_1,b_2,b_3=1,3,7\) 不成等差。`],
      optionAnalysis: { "1": "a₂=1。", "2": "常數 1 數列是公比 1 的等比數列。", "3": "dₙ 是公比 2 的等比數列。", "4": "1、3、7 的相鄰差不相等。", "5": "常數 0 數列是公差 0 的等差數列。" }
    },
    "102M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a>1>b>0\)，選出必然正確的不等式。`,
      options: { "1": String.raw`\((-a)^7>(-a)^9\)`, "2": String.raw`\(b^{-9}>b^{-7}\)`, "3": String.raw`\(\log_{10}\frac1a>\log_{10}\frac1b\)`, "4": String.raw`\(\log_a1>\log_b1\)`, "5": String.raw`\(\log_ab\ge\log_ba\)` },
      solution: ["a>1 時 a⁹>a⁷，乘負號後不等號反向，故（1）成立。0<b<1 時負指數次方隨指數絕對值增加而增大，故（2）成立。", "1/a<1<1/b，所以（3）錯；兩個以 1 為真數的對數皆為 0；（5）無法由條件固定大小。"],
      optionAnalysis: { "1": "-a⁷ 大於更負的 -a⁹。", "2": "1/b⁹ 大於 1/b⁷。", "3": "左側為負、右側為正。", "4": "兩側都等於 0。", "5": "取不同 a、b 可改變兩側大小。" }
    },
    "102M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`a<b<c。開口向上的 f 之零點為 a、b，開口向上的 g 之零點為 b、c。選出 \(y=f(x)+g(x)\) 圖形可能的情況。`,
      options: { "1": "水平直線", "2": "與 x 軸交一點的直線", "3": "與 x 軸無交點的拋物線", "4": "與 x 軸僅交一點的拋物線", "5": "與 x 軸交兩點的拋物線" },
      solution: [String.raw`寫成 \(f=A(x-a)(x-b)、g=B(x-b)(x-c)\)，其中 \(A,B>0\)。則
      \[
      f+g=(x-b)\{A(x-a)+B(x-c)\}。
      \]`, "圖形必為開口向上的拋物線且有零點 b；括號內的另一根可能等於 b，也可能不等於 b，所以可能相切一點或相交兩點。"],
      optionAnalysis: { "1": "二次項係數 A+B>0。", "2": "不會退化為直線。", "3": "x=b 必為零點。", "4": "兩根重合於 b 時成立。", "5": "另一根與 b 不同時成立。" }
    },
    "102M-10": {
      verified: true, sourcePage: 4,
      stem: String.raw`給定 \(Q_1(1,0)、Q_2(-1,0)\)。選出圖形上至少有一點 P 滿足 \(\overrightarrow{PQ_1}\cdot\overrightarrow{PQ_2}<0\) 的選項。`,
      options: { "1": String.raw`\(y=\frac12\)`, "2": String.raw`\(y=x^2+1\)`, "3": String.raw`\(-x^2+2y^2=1\)`, "4": String.raw`\(4x^2+y^2=1\)`, "5": String.raw`\(\frac{x^2}{2}-\frac{y^2}{2}=1\)` },
      solution: [String.raw`若 \(P=(x,y)\)，則
      \[
      \overrightarrow{PQ_1}\cdot\overrightarrow{PQ_2}=x^2+y^2-1。
      \]
      條件等價於 P 在單位圓內。`, "（1）可取 (0,1/2)；（3）可取 (0,1/√2)；（4）可取 (1/2,0)。其餘圖形與單位圓內部無交集。"],
      optionAnalysis: { "1": "(0,1/2) 在單位圓內。", "2": "最小距離也等於 1，不符合嚴格小於。", "3": "(0,1/√2) 符合。", "4": "(1/2,0) 符合。", "5": "此雙曲線上 x²+y² 至少為 2。" }
    },
    "102M-11": {
      verified: true, sourcePage: 4,
      stem: "F₁、F₂ 為橢圓兩焦點。以 F₁ 為中心作任意方向的正方形 S，S 可能有幾個頂點落在橢圓上？",
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: ["改變正方形的邊長與旋轉角，可構造沒有頂點、恰一個頂點或一對頂點落在橢圓上的情形。", "若有三個以上頂點在橢圓上，正方形關於焦點的中心對稱關係會迫使橢圓也以焦點為中心，與非圓橢圓的兩焦點性質矛盾。因此可能數為 0、1、2。"],
      optionAnalysis: { "1": "可調整邊長讓單一射線交點命中。", "2": "可藉旋轉與邊長讓一對頂點命中。", "3": "三點條件會導致不可能的對稱。", "4": "四頂點同在橢圓會使焦點成為橢圓中心。", "5": "取足夠小或足夠大的正方形即可無頂點命中。" }
    },
    "102M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`實數等比數列 \(a_n\) 公比為 \(-0.8\)；實數等差數列 \(b_n\) 首項為 10。已知 \(a_9>b_9、a_{10}>b_{10}\)，選出正確敘述。`,
      options: { "1": String.raw`\(a_9a_{10}<0\)`, "2": String.raw`\(b_{10}>0\)`, "3": String.raw`\(b_9>b_{10}\)`, "4": String.raw`\(a_9>a_{10}\)`, "5": String.raw`\(a_8>b_8\)` },
      solution: ["相鄰兩個非零等比項因公比為負而異號，故（1）成立。又無論 a₉、a₁₀ 哪個為負，對應的 b 項更小；配合 b₁=10 可推出等差公差為負。", "進一步由第 9 或第 10 項已降到負值可知 \(b_9>b_{10}\)。其餘選項無法固定。"],
      optionAnalysis: { "1": "相鄰項公比為負，乘積為負。", "2": "條件可能迫使 b₁₀ 為負。", "3": "等差公差必為負。", "4": "a₉ 的正負未固定。", "5": "已知不等式不能向前一項直接保留。" }
    },
    "102M-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`整數 k 滿足 \(\frac{k}{3}<\sqrt{31}<\frac{k+1}{3}\)，求 k。`,
      solution: [String.raw`同乘 3 得 \(k<3\sqrt{31}<k+1\)。因 \(3\sqrt{31}\approx16.70\)，所以 \(k=16\)。`]
    },
    "102M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`實數 a、b 滿足 \((a+bi)(2+6i)=-80\)，其中 \(i^2=-1\)。求 \((a,b)\)。`,
      solution: [String.raw`比較實部與虛部：
      \[
      2a-6b=-80,\qquad6a+2b=0。
      \]
      由 \(b=-3a\) 代入得 \(20a=-80\)，所以 \((a,b)=(-4,12)\)。`]
    },
    "102M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`平面上 \(A(a,3)、B(16,b)、C(19,12)\) 共線，C 不在 A、B 之間且 \(AC:BC=3:1\)。求 \(a+b\)。`,
      solution: [String.raw`依外分位置，B 在 A、C 之間，且 \(\overrightarrow{AC}=3\overrightarrow{BC}\)，所以 \(A=3B-2C\)。`, String.raw`因此 \(A=(10,3b-24)\)。由 y 坐標 \(3=3b-24\) 得 \(b=9、a=10\)，故 \(a+b=19\)。`]
    },
    "102M-16": {
      verified: true, sourcePage: 5,
      stem: "100 公斤香蕉三天售完，單價依序為每公斤 40、36、32 元，總收入 3720 元。若第三天售 t 公斤，第二天售出量可寫成 at+b，求 a、b。",
      solution: [String.raw`設前三天銷量為 \(x,y,t\)。由 \(x+y+t=100\) 與 \(40x+36y+32t=3720\)，扣除每公斤 32 元的基準收入得
      \[
      8x+4y=520\Longleftrightarrow2x+y=130。
      \]`, String.raw`聯立可得 \(x=t+30、y=70-2t\)，所以 \(a=-2、b=70\)。`]
    },
    "102M-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`一圓被兩平行線 \(x-y=1\) 與 \(x-y=5\) 所截的弦長皆為 14，求圓面積。`,
      solution: ["等長平行弦到圓心距離相等，所以圓心位於中線 x-y=3。它到任一弦所在直線的距離為 \(2/\sqrt2=\sqrt2\)。", String.raw`半弦長為 7，故 \(r^2=7^2+(\sqrt2)^2=51\)，圓面積為 \(51\pi\)。`]
    },
    "102M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`平面向量 \(|\vec A|=1、|\vec B|=2\)，夾角 \(60^\circ\)。令 \(\vec u=\vec A+\vec B、\vec v=x\vec A+y\vec B\)，且 \(6\le x+y\le8、-2\le x-y\le0\)。求 \(\vec u\cdot\vec v\) 最大值。`,
      solution: [String.raw`因 \(\vec A\cdot\vec B=1\)，
      \[
      \vec u\cdot\vec v=2x+5y。
      \]
      令 \(s=x+y、d=x-y\)，則此式為 \((7s-3d)/2\)。`, String.raw`在 \(6\le s\le8、-2\le d\le0\) 中，取 \(s=8、d=-2\) 最大，值為 \((56+6)/2=31\)。`]
    },
    "102M-19": {
      verified: true, sourcePage: 6,
      stem: "銳角三角形 ABC 的外接圓半徑為 8；圓心到 AB 的距離為 2，到 BC 的距離為 7。求 AC。",
      solution: [String.raw`半徑 R 的圓中，圓心到弦距離為 d 時，弦長為 \(2\sqrt{R^2-d^2}\)。故
      \[
      AB=4\sqrt{15},\qquad BC=2\sqrt{15}。
      \]`, "再由兩弦所對圓心角與三角形為銳角的條件選定相應弧，配合餘弦定理可得 \(AC=4\sqrt{15}\)。"]
    },
    "102M-20": {
      verified: true, sourcePage: 6,
      stem: "邊長 6 的正立方體中，P 在 CG 上且 CP:PG=1:5，R 為 EH 中點，Q 在 AD 上。若通過 P、Q、R 的平面與直線 AG 不相交，求 Q 的 y 坐標。",
      solution: [String.raw`依題示坐標得 \(P=(6,6,1)、R=(0,3,6)、Q=(0,q,0)\)。平面 PQR 不與 AG 相交，故須與方向 \((1,1,1)\) 平行。`, String.raw`令三向量的混合積為 0：
      \[
      \det\begin{bmatrix}6&6-q&1\\0&3-q&6\\1&1&1\end{bmatrix}=15-11q=0。
      \]
      因此 \(q=\frac{15}{11}\)。`]
    }
  });
})();
