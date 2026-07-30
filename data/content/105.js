(() => {
  Object.assign(window.MATH_CONTENT, {
    "105M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`設 \(f(x)\) 為二次實係數多項式，已知 \(f(x)\) 在 \(x=2\) 時有最小值 1，且 \(f(3)=3\)。請問 \(f(1)\) 之值為何？`,
      options: { "1": "5", "2": "2", "3": "3", "4": "4", "5": "條件不足，無法確定" },
      solution: [String.raw`二次函數的對稱軸是 \(x=2\)。\(x=1\) 與 \(x=3\) 到對稱軸的距離相同，所以 \(f(1)=f(3)=3\)。`],
      optionAnalysis: { "1": "未利用二次函數關於對稱軸的對稱性。", "2": "最小值 1 是函數值，不是對稱點的函數值。", "3": String.raw`\(1、3\) 關於 \(x=2\) 對稱，故函數值同為 3。`, "4": "對稱點的函數值不需另加頂點位置。", "5": "題目給出的對稱軸與一側函數值已足以決定。" }
    },
    "105M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`請問 \(\sin73^\circ、\sin146^\circ、\sin219^\circ、\sin292^\circ、\sin365^\circ\) 這五個數值的中位數是哪一個？`,
      options: { "1": String.raw`\(\sin73^\circ\)`, "2": String.raw`\(\sin146^\circ\)`, "3": String.raw`\(\sin219^\circ\)`, "4": String.raw`\(\sin292^\circ\)`, "5": String.raw`\(\sin365^\circ\)` },
      solution: [String.raw`依象限與參考角比較：
      \[
      \sin292^\circ<\sin219^\circ<\sin365^\circ<\sin146^\circ<\sin73^\circ。
      \]
      排序後居中的第三個數是 \(\sin365^\circ\)。`],
      optionAnalysis: { "1": "此值接近 1，是五者最大值。", "2": String.raw`\(\sin146^\circ=\sin34^\circ\)，大於中位數。`, "3": "位於第三象限，為負值。", "4": "位於第四象限且絕對值很大，是最小值。", "5": String.raw`\(\sin365^\circ=\sin5^\circ\)，排序後居中。` }
    },
    "105M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`坐標平面上兩圖形 \(\Gamma_1、\Gamma_2\) 的方程式分別為
      \[
      \Gamma_1:(x+1)^2+y^2=1,\qquad \Gamma_2:(x+y)^2=1。
      \]
      請問兩圖形共有幾個交點？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: [String.raw`\(\Gamma_1\) 是圓心 \((-1,0)\)、半徑 1 的圓；\(\Gamma_2\) 是兩直線 \(x+y=1\) 與 \(x+y=-1\)。`, String.raw`直線 \(x+y=-1\) 通過圓心，與圓有 2 個交點；圓心到 \(x+y=1\) 的距離是 \(\sqrt2>1\)，沒有交點，所以共有 2 個。`],
      optionAnalysis: { "1": "通過圓心的直線不是切線。", "2": String.raw`\(x+y=-1\) 通過圓心，產生兩個交點。`, "3": "另一條直線與圓相離，沒有再增加交點。", "4": "兩條直線並非都與圓相交。", "5": "至少有一條直線通過圓心。" }
    },
    "105M-4": {
      verified: true, sourcePage: 1,
      stem: "開始紀錄時，放射性物質 A 的質量為物質 B 的兩倍；120 小時後兩者質量相同。已知 A 的半衰期為 7.5 小時，求 B 的半衰期。",
      options: { "1": "8 小時", "2": "10 小時", "3": "12 小時", "4": "15 小時", "5": "20 小時" },
      solution: [String.raw`設 B 的半衰期為 \(T\)，初始質量為 \(m\)。120 小時後
      \[
      2m\left(\frac12\right)^{120/7.5}
      =m\left(\frac12\right)^{120/T}。
      \]
      因 \(120/7.5=16\)，得 \(2^{-15}=2^{-120/T}\)，所以 \(T=8\)。`],
      optionAnalysis: { "1": "代入衰減公式可得半衰期 8 小時。", "2": "會使 B 經歷 12 次半衰，剩餘量過多。", "3": "會使 B 經歷 10 次半衰，剩餘量過多。", "4": "誤把 A 的初始兩倍關係忽略。", "5": "衰減速度不足以在 120 小時後與 A 相同。" }
    },
    "105M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`坐標空間中一質點自 \(P(1,1,1)\) 沿方向 \(\vec a=(1,2,2)\) 等速前進，5 秒後到達平面 \(x-y+3z=28\)，立即轉向沿 \(\vec b=(-2,2,-1)\) 以相同速率前進。再經過幾秒會到達平面 \(x=2\)？`,
      options: { "1": "1 秒", "2": "2 秒", "3": "3 秒", "4": "4 秒", "5": "永遠不會到達" },
      solution: [String.raw`設原速度為 \(k\vec a\)。5 秒後位置是 \((1+5k,1+10k,1+10k)\)，代入平面得 \(3+25k=28\)，故 \(k=1\)，轉向點為 \((6,11,11)\)。`, String.raw`轉向後 \(x=6-2t\)。令 \(6-2t=2\)，得 \(t=2\) 秒。`],
      optionAnalysis: { "1": "1 秒後 x 坐標仍為 4。", "2": "轉向後 2 秒，x 坐標由 6 降至 2。", "3": "此時已越過平面。", "4": "未先由第一段運動求出實際速率。", "5": "新方向的 x 分量為負，確實會到達。" }
    },
    "105M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`設 \(a_n\) 為等比數列，已知前十項和為 \(\sum_{k=1}^{10}a_k=80\)，前五個奇數項之和 \(a_1+a_3+a_5+a_7+a_9=120\)。請選出首項 \(a_1\) 的正確範圍。`,
      options: { "1": String.raw`\(a_1<80\)`, "2": String.raw`\(80\le a_1<90\)`, "3": String.raw`\(90\le a_1<100\)`, "4": String.raw`\(100\le a_1<110\)`, "5": String.raw`\(110\le a_1\)` },
      solution: [String.raw`設公比為 r。前十項可按奇、偶項配對，所以
      \[
      80=(1+r)(a_1+a_3+\cdots+a_9)=120(1+r)，
      \]
      得 \(r=-\frac13\)。`, String.raw`再由奇數項本身是公比 \(r^2\) 的等比數列，
      \[
      120=a_1\frac{1-r^{10}}{1-r^2}
      \]
      得 \(a_1=120\frac{1-r^2}{1-r^{10}}\approx106.67\)，介於 100 與 110 之間。`],
      optionAnalysis: { "1": "首項約為 106.67，不小於 80。", "2": "由奇數項和與總和可先求得負公比。", "3": "代入奇數項等比級數公式後首項超過 100。", "4": String.raw`\(a_1\approx106.67\)，落在此範圍。`, "5": "首項小於 110。" }
    },
    "105M-7": {
      verified: true, sourcePage: 2,
      stem: "下列各方程式中，請選出有實數解的選項（可複選）。",
      options: { "1": String.raw`\(|x|+|x-5|=1\)`, "2": String.raw`\(|x|+|x-5|=6\)`, "3": String.raw`\(|x|-|x-5|=1\)`, "4": String.raw`\(|x|-|x-5|=6\)`, "5": String.raw`\(|x|-|x-5|=-1\)` },
      solution: [String.raw`由三角不等式，\(|x|+|x-5|\ge5\)，所以等於 1 無解、等於 6 有解。`, String.raw`函數 \(|x|-|x-5|\) 的值域為 \([-5,5]\)，所以等於 1 與 \(-1\) 有解，等於 6 無解。故選（2）（3）（5）。`],
      optionAnalysis: { "1": "左式最小值為 5。", "2": "6 大於最小值 5，存在實數解。", "3": "1 在值域 [-5,5] 內。", "4": "6 超出值域上界 5。", "5": "-1 在值域 [-5,5] 內。" }
    },
    "105M-8": {
      verified: true, sourcePage: 3,
      stem: "依題示甲、乙兩商場的奇異果與蘋果各種袋裝價格，選出正確敘述。",
      options: {
        "1": "在甲商場買一袋 3 顆裝蘋果的金額，低於買三袋 1 顆裝蘋果",
        "2": "乙商場奇異果一袋裝越多顆，每顆單價越低",
        "3": "只買奇異果，在甲商場花 500 元最多可買到 30 顆",
        "4": "買 12 顆奇異果和 4 顆蘋果，甲商場的最低金額低於乙商場",
        "5": "無論買多少顆蘋果，甲商場的最低金額都低於乙商場"
      },
      solution: [String.raw`（1）\(130<3\times45=135\)；（2）乙商場奇異果單價依序為 \(18、50/3、65/4、95/6\)，逐次下降。`, String.raw`（3）甲可用 480 元買 6 袋 5 顆裝，再用 20 元買 1 顆，共 31 顆；（4）甲的最低價為 \(200+175=375\) 元，乙為 \(190+190=380\) 元；（5）例如買 10 顆蘋果，乙的 10 顆裝 420 元比甲的最低組合便宜。`],
      optionAnalysis: { "1": "130 元確實低於 135 元。", "2": "逐一除以顆數後，單價嚴格遞減。", "3": "500 元可買到 31 顆，不只 30 顆。", "4": "甲 375 元，低於乙 380 元。", "5": "買 10 顆蘋果即可得到反例。" }
    },
    "105M-9": {
      verified: true, sourcePage: 3,
      stem: "下列各直線中，請選出和 z 軸互為歪斜線的選項。",
      options: {
        "1": String.raw`\(L_1:\begin{cases}x=0\\z=0\end{cases}\)`,
        "2": String.raw`\(L_2:\begin{cases}y=0\\x+z=1\end{cases}\)`,
        "3": String.raw`\(L_3:\begin{cases}z=0\\x+y=1\end{cases}\)`,
        "4": String.raw`\(L_4:\begin{cases}x=1\\y=1\end{cases}\)`,
        "5": String.raw`\(L_5:\begin{cases}y=1\\z=1\end{cases}\)`
      },
      solution: ["歪斜線須既不相交也不平行。（1）在原點與 z 軸相交；（2）在 \((0,0,1)\) 相交；（4）與 z 軸平行。", "（3）的方向不平行 z 軸且無交點；（5）亦不平行 z 軸且無交點，所以選（3）（5）。"],
      optionAnalysis: { "1": "此線是 y 軸，與 z 軸交於原點。", "2": String.raw`與 z 軸交於 \((0,0,1)\)。`, "3": "不相交也不平行，是歪斜線。", "4": "方向與 z 軸相同，兩線平行。", "5": "不相交也不平行，是歪斜線。" }
    },
    "105M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a、b、c\) 皆為正整數，考慮多項式
      \[
      f(x)=x^4+ax^3+bx^2+cx+2。
      \]
      請選出正確選項。`,
      options: { "1": String.raw`\(f(x)=0\) 無正根`, "2": String.raw`\(f(x)=0\) 一定有實根`, "3": String.raw`\(f(x)=0\) 一定有虛根`, "4": String.raw`\(f(1)+f(-1)\) 是偶數`, "5": String.raw`若 \(a+c>b+3\)，則有一根介於 \(-1\) 與 0 之間` },
      solution: [String.raw`當 \(x>0\) 時各項皆正，故無正根。（4）
      \[
      f(1)+f(-1)=6+2b
      \]
      為偶數。`, String.raw`若 \(a+c>b+3\)，則 \(f(-1)=b+3-a-c<0\)，而 \(f(0)=2>0\)，由介值定理知 \((-1,0)\) 內有根。`],
      optionAnalysis: { "1": "正 x 代入後每一項皆正，不可能為 0。", "2": "係數條件不能保證一定有實根。", "3": String.raw`例如 \((x+1)^3(x+2)\) 的係數均符合條件且四根皆為實數。`, "4": String.raw`相加後奇次項消去，留下 \(6+2b\)。`, "5": String.raw`\(f(-1)<0<f(0)\)，故區間內至少有一根。` }
    },
    "105M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`某班 41 人，原始成績皆不超過 59 分。原始成績 x 經
      \[
      40\log_{10}\left(\frac{x+1}{10}\right)+60
      \]
      調整後四捨五入至整數。請選出正確敘述。`,
      options: { "1": "原始 9 分者，新成績為 60 分", "2": "原始成績超過 20 分者，新成績超過 70 分", "3": "調整後全距比原始全距大", "4": "原始中位數所屬學生的新成績仍是新成績中位數", "5": "原始平均數所屬學生的新成績仍等於新成績平均數" },
      solution: [String.raw`調分函數嚴格遞增，因此保留大小次序與中位數。（1）代 \(x=9\) 得 60；（2）\(x\ge21\) 時新成績至少約 73.7，四捨五入後超過 70。`, "此函數不是線性函數，不能保證全距變大，也不保留平均數。故選（1）（2）（4）。"],
      optionAnalysis: { "1": String.raw`\(\log_{10}1=0\)，新成績為 60。`, "2": "整數成績超過 20 即至少 21，調整後超過 70。", "3": "對數函數在此範圍會壓縮高分端差距，不能保證。", "4": "嚴格遞增轉換保留第 21 名的位置。", "5": "非線性轉換一般不保留算術平均數。" }
    },
    "105M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`在 \(\triangle ABC\) 中，已知 \(\angle A=20^\circ、AB=5、BC=4\)。請選出可以確定的量。`,
      options: { "1": String.raw`\(\cos B\)`, "2": String.raw`\(\sin C\)`, "3": "三角形面積", "4": "內切圓半徑", "5": "外接圓半徑" },
      solution: [String.raw`依通常記號，\(a=BC=4、c=AB=5\)。由正弦定理
      \[
      \frac{\sin C}{5}=\frac{\sin20^\circ}{4},
      \]
      所以 \(\sin C\) 可確定；外接圓半徑 \(R=\frac{a}{2\sin A}=\frac{2}{\sin20^\circ}\) 也可確定。`, "這是 SSA 情形，可能形成兩個不同三角形，因此其餘量不一定唯一。"],
      optionAnalysis: { "1": "SSA 可能有兩個三角形，B 不唯一。", "2": "由正弦定理可直接確定。", "3": "夾角與高度可能不同，面積不唯一。", "4": "周長與面積不唯一，內切圓半徑也不唯一。", "5": "由已知對邊與其對角即可確定外接圓半徑。" }
    },
    "105M-13": {
      verified: true, sourcePage: 4,
      stem: "甲、乙、丙、丁四位男生各騎一台機車，A、B、C、D 四位女生依序抽鑰匙。只有 B 認得甲的鑰匙且絕對不選，其餘可選鑰匙機會均等。請選出正確敘述。",
      options: { "1": "A 抽到甲的機率大於 C 抽到甲的機率", "2": "C 抽到甲的機率大於 D 抽到甲的機率", "3": "A 抽到乙的機率大於 B 抽到乙的機率", "4": "B 抽到丙的機率大於 C 抽到丙的機率", "5": "C 抽到甲的機率大於 C 抽到乙的機率" },
      solution: [String.raw`依序枚舉條件機率可得
      \[
      P(A甲)=\frac14,\quad P(C甲)=P(D甲)=\frac38，
      \]
      \[
      P(A乙)=\frac14,\quad P(B乙)=P(B丙)=\frac13，
      \]
      且 \(P(C丙)=P(C乙)=\frac5{24}\)。`, String.raw`因此（4）\(\frac13>\frac5{24}\)，（5）\(\frac38>\frac5{24}\)，其餘皆不成立。`],
      optionAnalysis: { "1": String.raw`\(\frac14<\frac38\)。`, "2": "兩者機率同為 3/8。", "3": String.raw`\(\frac14<\frac13\)。`, "4": String.raw`\(\frac13>\frac5{24}\)。`, "5": String.raw`\(\frac38>\frac5{24}\)。` }
    },
    "105M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`考慮元素只能是 0 或 1 的 \(2\times3\) 矩陣，要求兩列不同，且每列不能全為 0。這樣的矩陣共有多少個？`,
      solution: [String.raw`一列共有 \(2^3-1=7\) 種非零列向量。第一列有 7 種，第二列須與第一列不同，有 6 種，所以共有 \(7\times6=42\) 個。`]
    },
    "105M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`坐標平面上 \(\vec u=(1,2)、\vec v=(3,4)\)。令 \(\Omega\) 為滿足
      \[
      \overrightarrow{OP}=x\vec u+y\vec v,\qquad \frac12\le x\le1,\quad -3\le y\le\frac12
      \]
      的所有點 P 所成區域，求 \(\Omega\) 的面積。`,
      solution: [String.raw`係數區域的邊長分別為 \(\frac12\) 與 \(\frac72\)，而
      \[
      |\det(\vec u,\vec v)|=|1\cdot4-2\cdot3|=2。
      \]
      線性轉換後面積為 \(\frac12\cdot\frac72\cdot2=\frac72\)。`]
    },
    "105M-16": {
      verified: true, sourcePage: 5,
      stem: "從橢圓的兩焦點分別作垂直於長軸的直線，交橢圓於四點。連此四點得到邊長為 2 的正方形，求橢圓的長軸長。",
      solution: [String.raw`設半長軸、半短軸、焦距為 \(a、b、c\)。四點坐標為 \((\pm c,\pm b^2/a)\)。正方形邊長 2 給出
      \[
      c=1,\qquad \frac{b^2}{a}=1。
      \]
      又 \(c^2=a^2-b^2\)，故 \(1=a^2-a\)，得 \(a=\frac{1+\sqrt5}{2}\)。長軸長為 \(2a=1+\sqrt5\)。`]
    },
    "105M-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`線性方程組
      \[
      \begin{cases}
      x+2y+3z=0\\
      2x+y+3z=6\\
      x-y=6\\
      x-2y-z=8
      \end{cases}
      \]
      經高斯消去後，簡化增廣矩陣前兩列為 \([1,0,a,b]\)、\([0,1,c,d]\)。求 \(a、b、c、d\)。`,
      solution: [String.raw`列運算可得簡化列梯形矩陣
      \[
      \begin{bmatrix}
      1&0&1&4\\
      0&1&1&-2\\
      0&0&0&0\\
      0&0&0&0
      \end{bmatrix}。
      \]
      因此 \(a=1、b=4、c=1、d=-2\)。`]
    },
    "105M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`設 a 為實數。第一象限內滿足
      \[
      \begin{cases}
      x-3y\le a\\
      x+2y\le14
      \end{cases}
      \]
      的區域面積為 \(\frac{213}{5}\)，求 a。`,
      solution: [String.raw`只考慮 \(x+2y\le14\) 時，第一象限三角形面積為 49。直線 \(x-3y=a\) 截去靠近 x 軸的三角形，其底為 \(14-a\)，高為 \(\frac{14-a}{5}\)。`, String.raw`所以
      \[
      49-\frac{(14-a)^2}{10}=\frac{213}{5}。
      \]
      得 \((14-a)^2=64\)。依題示區域型態須 \(a<14\)，故 \(a=6\)。`]
    },
    "105M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`投擲一枚公平骰子三次，點數依序為 \(a,b,c\)。在 b 為奇數的條件下，求
      \[
      \begin{vmatrix}a&b\\b&c\end{vmatrix}>0
      \]
      的機率。`,
      solution: [String.raw`條件樣本共有 \(6\times3\times6=108\) 種。行列式大於 0 等價於 \(ac>b^2\)。`, String.raw`分別固定 \(b=1、3、5\) 枚舉 \(1\le a,c\le6\)，符合的有 \(35、19、3\) 種，共 57 種。因此機率為
      \[
      \frac{57}{108}=\frac{19}{36}。
      \]`]
    },
    "105M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`長方體 \(ABCD-EFGH\) 中，平面 BDG 上一點 P 滿足
      \[
      \overrightarrow{AP}=\frac13\overrightarrow{AB}+2\overrightarrow{AD}+a\overrightarrow{AE}。
      \]
      求實數 a。`,
      solution: [String.raw`以 \(\overrightarrow{AB}、\overrightarrow{AD}、\overrightarrow{AE}\) 為坐標基底，則
      \[
      B=(1,0,0),\quad D=(0,1,0),\quad G=(1,1,1)。
      \]
      平面 BDG 的方程為 \(x+y-z=1\)。`, String.raw`點 \(P=(\frac13,2,a)\) 在此平面上，故
      \[
      \frac13+2-a=1,
      \]
      得 \(a=\frac43\)。`]
    }
  });
})();
