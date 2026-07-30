(() => {
  Object.assign(window.MATH_CONTENT, {
    "83M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`設 \(a=\sqrt{7+\sqrt{47}}\)，則 \(a\) 在哪兩個連續整數之間？`,
      options: { "1":"0 與 1", "2":"1 與 2", "3":"2 與 3", "4":"3 與 4", "5":"4 與 5" },
      solution: [String.raw`因 \(6<\sqrt{47}<7\)，所以
      \[
      13<7+\sqrt{47}<14。
      \]
      又 \(9<13<14<16\)，開根號後得 \(3<a<4\)。`],
      optionAnalysis: { "1":"a²大於13，所以a不可能小於1。","2":"a²大於13，所以a大於3。","3":"同樣低估了根號內的值。","4":"9<a²<16，故3<a<4。","5":"a²小於16，所以a小於4。" }
    },
    "83M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`直線
      \[
      L:\frac{x-2}{3}=\frac{y+1}{-1}=\frac{z-1}{2}
      \]
      與下列哪一個平面平行？`,
      options: { "1":String.raw`\(2x-y+z=1\)`, "2":String.raw`\(x+y-z=2\)`, "3":String.raw`\(3x-y+2z=1\)`, "4":String.raw`\(3x+2y+z=2\)`, "5":String.raw`\(x-3y+z=1\)` },
      solution: [String.raw`L 的方向向量為 \((3,-1,2)\)。直線與平面平行時，方向向量須與平面法向量垂直。選項（2）的法向量為 \((1,1,-1)\)，且
      \[
      (3,-1,2)\cdot(1,1,-1)=3-1-2=0。
      \]
      L 上點 \((2,-1,1)\) 不在此平面上，因此 L 與此平面平行。`],
      optionAnalysis: { "1":"方向向量與法向量內積為9，不垂直。","2":"內積為0，且直線不包含在平面內。","3":"內積為14，不平行。","4":"內積為9，不平行。","5":"內積為8，不平行。" }
    },
    "83M-3": {
      verified: true, sourcePage: 1,
      stem: "同時擲兩枚均勻硬幣，連續擲兩次。求至少有一次出現一正面、一反面的機率。",
      options: { "1":"0", "2":String.raw`\(\frac14\)`, "3":String.raw`\(\frac12\)`, "4":String.raw`\(\frac34\)`, "5":"1" },
      solution: [String.raw`每次兩枚硬幣同面（正正或反反）的機率為 \(1/2\)。兩次都沒有出現一正一反的機率為
      \[
      \left(\frac12\right)^2=\frac14。
      \]
      所求補事件機率為 \(1-\frac14=\frac34\)。`],
      optionAnalysis: { "1":"一正一反有可能出現。","2":"這是兩次都同面的機率。","3":"只看一次投擲，未處理兩次機會。","4":"用補事件1−(1/2)²得到3/4。","5":"兩次仍可能都同面，所以機率不到1。" }
    },
    "83M-4": {
      verified: true, sourcePage: 1,
      stem: "圖 1 中 A、B、C 三點共線，D、E、F 三點共線。由這六點任取三點作頂點，共可形成多少個三角形？",
      options: { "1":"9", "2":"14", "3":"16", "4":"18", "5":"20" },
      solution: [String.raw`六點任取三點共有
      \[
      \binom63=20
      \]
      種。不能形成三角形的只有同一直線上的 \(ABC\) 與 \(DEF\) 兩組，所以共有 \(20-2=18\) 個三角形。`],
      optionAnalysis: { "1":"漏掉多組跨兩直線取點的三角形。","2":"扣除了過多組合。","3":"並非要從20組扣4組。","4":"20個三點組合扣掉2組共線者。","5":"未排除ABC與DEF兩組共線三點。" }
    },
    "83M-5": {
      verified: true, sourcePage: 2,
      stem: "甲、乙、丙三位學生的五科成績依原表。設其標準差分別為 \(S_{\text{甲}}、S_{\text{乙}}、S_{\text{丙}}\)，判斷三者大小關係。",
      options: { "1":String.raw`\(S_{\text{甲}}>S_{\text{丙}}>S_{\text{乙}}\)`, "2":String.raw`\(S_{\text{丙}}>S_{\text{甲}}=S_{\text{乙}}\)`, "3":String.raw`\(S_{\text{甲}}>S_{\text{丙}}=S_{\text{乙}}\)`, "4":String.raw`\(S_{\text{乙}}>S_{\text{甲}}=S_{\text{丙}}\)`, "5":String.raw`\(S_{\text{甲}}=S_{\text{乙}}>S_{\text{丙}}\)` },
      solution: [String.raw`乙的每科成績都比甲少 10 分，整組資料平移不改變標準差，所以 \(S_{\text{甲}}=S_{\text{乙}}\)。丙的每科成績都是甲的 \(0.8\) 倍，因此
      \[
      S_{\text{丙}}=0.8S_{\text{甲}}。
      \]
      故 \(S_{\text{甲}}=S_{\text{乙}}>S_{\text{丙}}\)。`],
      optionAnalysis: { "1":"甲與乙只差固定常數，標準差相同。","2":"丙是甲的0.8倍，標準差反而較小。","3":"乙不等於丙。","4":"甲與乙的標準差相同。","5":"平移不改變標準差，縮放0.8使標準差乘0.8。" }
    },
    "83M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`若
      \[
      x=\frac{\sqrt[3]{88.3}}{\sqrt{2.56}}，
      \]
      判斷 \(x\) 所在的小數區間。`,
      options: { "1":String.raw`\(2.8<x<2.9\)`, "2":String.raw`\(2.7<x<2.8\)`, "3":String.raw`\(2.6<x<2.7\)`, "4":String.raw`\(2.5<x<2.6\)`, "5":String.raw`\(2.4<x<2.5\)` },
      solution: [String.raw`\(\sqrt{2.56}=1.6\)，且查表或估算得 \(\sqrt[3]{88.3}\approx4.45\)，所以
      \[
      x\approx\frac{4.45}{1.6}\approx2.78。
      \]
      因此 \(2.7<x<2.8\)。`],
      optionAnalysis: { "1":"2.78尚未超過2.8。","2":"估值約2.78，落在此區間。","3":"低估了立方根除以1.6的結果。","4":"區間過低。","5":"區間過低。" }
    },
    "83M-7": {
      verified: true, sourcePage: 2,
      stem: "半徑為 1 尺的圓上有兩條平行弦，\(AB=1.6\) 尺、\(PQ=1.2\) 尺，端點位置如圖 2。求 \(\angle AOP\) 所在的角度區間。",
      options: { "1":"13°＜∠AOP≤14°", "2":"14°＜∠AOP≤15°", "3":"15°＜∠AOP≤16°", "4":"16°＜∠AOP≤17°", "5":"17°＜∠AOP≤18°" },
      solution: [String.raw`設兩弦所對半圓心角分別為 \(\alpha、\beta\)。由半弦長，
      \[
      \sin\alpha=0.8,\qquad \sin\beta=0.6。
      \]
      因 \(0.6^2+0.8^2=1\)，可得 \(\alpha\approx53.13^\circ、\beta\approx36.87^\circ\)。故
      \[
      \angle AOP=\alpha-\beta\approx16.26^\circ，
      \]
      落在 16° 到 17° 之間。`],
      optionAnalysis: { "1":"低於實際角差約2度以上。","2":"仍低估角差。","3":"上界16°小於實際約16.26°。","4":"16.26°落在此區間。","5":"高估角差。" }
    },
    "83M-8": {
      verified: true, sourcePage: 2,
      stem: String.raw`二次函數 \(f(x)=ax^2+bx+c\) 的圖形如圖 3，零點為 \(-2、\frac12\)，且開口向上。下列哪些數為負數？`,
      options: { "1":String.raw`\(a\)`, "2":String.raw`\(b\)`, "3":String.raw`\(c\)`, "4":String.raw`\(b^2-4ac\)`, "5":String.raw`\(a-b+c\)` },
      solution: [String.raw`開口向上，所以 \(a>0\)。兩根乘積為
      \[
      \frac ca=(-2)\left(\frac12\right)=-1，
      \]
      故 \(c<0\)。圖上 \(x=-1\) 位於兩根之間，拋物線在 x 軸下方，因此
      \[
      a-b+c=f(-1)<0。
      \]
      兩實根相異，所以判別式為正；而根和 \(-3/2=-b/a\) 顯示 \(b>0\)。故負數為（3）（5）。`],
      optionAnalysis: { "1":"圖形開口向上，所以a>0。","2":"根和為−3/2=−b/a，配合a>0得b>0。","3":"兩根乘積為−1=c/a，所以c<0。","4":"有兩個相異實根，判別式大於0。","5":"a−b+c=f(−1)，圖上此點位於x軸下方。" }
    },
    "83M-9": {
      verified: true, sourcePage: 3,
      stem: "下列關於空間中通過已知直線或平面外一點的敘述，哪些正確？",
      options: { "1":"過已知直線外一點，恰有一平面與此直線垂直", "2":"過已知直線外一點，恰有一平面與此直線平行", "3":"過已知平面外一點，恰有一直線與此平面平行", "4":"過已知平面外一點，恰有一平面與此平面垂直", "5":"過已知平面外一點，恰有一平面與此平面平行" },
      solution: ["以已知直線方向作法向量，通過指定點的平面唯一，所以（1）正確。通過一點且包含與已知直線平行方向的平面有無限多個，（2）錯。", "通過平面外一點、方向平行於該平面的直線有無限多條；與已知平面垂直的平面也有無限多個，故（3）（4）錯。通過平面外一點且平行於已知平面的平面唯一，所以（5）正確。"],
      optionAnalysis: { "1":"法向量方向固定、又通過指定點，平面唯一。","2":"可繞著那條平行方向旋轉，平面不唯一。","3":"平面內有無限多個方向，故平行直線不唯一。","4":"可繞已知平面的法向方向形成無限多個垂直平面。","5":"法向量固定且通過指定點，平面唯一。" }
    },
    "83M-10": {
      verified: true, sourcePage: 3,
      stem: "下列哪些方程式的部分圖形不可能出現在圖 4 中？",
      options: { "1":String.raw`\(y=(\frac12)^x\)`, "2":String.raw`\(y=\log_2x\)`, "3":String.raw`\(y=\cot x\)`, "4":String.raw`\(5x^2+4x-6y-3=0\)`, "5":String.raw`\(x^2-y^2+4x-6y-10=0\)` },
      solution: [String.raw`圖中可辨認出通過 \((0,1)\) 且遞減、以 x 軸為漸近線的指數函數（1），以及通過 \((1,0)\) 且遞增、以 y 軸為漸近線的對數函數（2）。

      \(y=\cot x\) 應呈週期性遞減分支；（4）是
      \[
      y=\frac{5x^2+4x-3}{6}
      \]
      的特定拋物線；（5）平移後是中心在 \((-2,-3)\) 的雙曲線。三者的必要截距、頂點或漸近線位置均不符合圖 4，故不可能者為（3）（4）（5）。`],
      optionAnalysis: { "1":"圖中有符合通過(0,1)且向右遞減的指數曲線。","2":"圖中有符合通過(1,0)且向右遞增的對數曲線。","3":"cot x須有以π為週期的遞減分支，圖中不符。","4":"此拋物線的頂點與截距位置不符合圖中曲線。","5":"此雙曲線中心與兩條漸近線位置不符合圖中曲線。" }
    },
    "83M-11": {
      verified: true, sourcePage: 3,
      stem: String.raw`求函數 \(y=4^x\) 與 \(y=2^{3x+2}\) 圖形的交點坐標。`,
      solution: [String.raw`因 \(4^x=2^{2x}\)，聯立得
      \[
      2^{2x}=2^{3x+2}\Longrightarrow 2x=3x+2，
      \]
      所以 \(x=-2\)，且 \(y=4^{-2}=1/16\)。交點為
      \[
      \left(-2,\frac1{16}\right)。
      \]`]
    },
    "83M-12": {
      verified: true, sourcePage: 3,
      stem: String.raw`皮球自離地 10 公尺高處落下，首次反彈高度為 \(\frac{10}{3}\) 公尺，此後每次反彈高度為前次的 \(\frac13\)。求完全靜止前的總路徑長。`,
      solution: [String.raw`先落下 10 公尺。所有反彈高度的和為
      \[
      \frac{10}{3}+\frac{10}{9}+\cdots
      =\frac{10/3}{1-1/3}=5。
      \]
      每次反彈高度都會上、下各走一次，所以總長為 \(10+2(5)=20\) 公尺。`]
    },
    "83M-13": {
      verified: true, sourcePage: 3,
      stem: String.raw`平面上 \(A(-1,2)、B(4,2)、C(2,-1)、O(0,0)\)。過 B 作直線 OC 的平行線，交直線 OA 於 D，求 D 的坐標。`,
      solution: [String.raw`直線 OA 的方程式為 \(y=-2x\)。OC 的斜率為 \(-1/2\)，故過 B 的平行線為
      \[
      y-2=-\frac12(x-4)\Longrightarrow y=4-\frac x2。
      \]
      聯立 \(y=-2x\)，得 \(x=-8/3、y=16/3\)。因此
      \[
      D=\left(-\frac83,\frac{16}3\right)。
      \]`]
    },
    "83M-14": {
      verified: true, sourcePage: 4,
      stem: String.raw`已知 \(A(1,2)、B(3,4)\)，且 \(P(x,y)\) 在直線 \(x+2y=3\) 上。若 \(PA=PB\)，求 P 的坐標。`,
      solution: [String.raw`線段 AB 的中點為 \((2,3)\)，斜率為 1，所以垂直平分線為
      \[
      y-3=-(x-2)\Longrightarrow x+y=5。
      \]
      與 \(x+2y=3\) 聯立，得 \(y=-2、x=7\)，故 \(P=(7,-2)\)。`]
    },
    "83M-15": {
      verified: true, sourcePage: 4,
      stem: String.raw`若直線 \(L:y=mx+3\) 與圓 \(x^2+y^2+2x=3\) 相切，求 \(m\)。`,
      solution: [String.raw`圓心為 \((-1,0)\)，半徑為 2。直線寫成 \(mx-y+3=0\)，相切時圓心到直線距離等於 2：
      \[
      \frac{|3-m|}{\sqrt{m^2+1}}=2。
      \]
      平方整理得 \(3m^2+6m-5=0\)，所以
      \[
      m=-1\pm\frac{2\sqrt6}{3}。
      \]`]
    },
    "83M-16": {
      verified: true, sourcePage: 4,
      stem: String.raw`平面 \(E:x+3y+z=1\) 與球面
      \[
      x^2+y^2+z^2+2x-4y-11=0
      \]
      相交成一個圓，求此圓面積。`,
      solution: [String.raw`球面配方得球心 \((-1,2,0)\)、半徑 4。球心到平面 \(x+3y+z-1=0\) 的距離為
      \[
      d=\frac{|-1+6-1|}{\sqrt{11}}=\frac4{\sqrt{11}}。
      \]
      截圓半徑平方為 \(4^2-d^2=16-\frac{16}{11}=\frac{160}{11}\)，故面積為
      \[
      \frac{160\pi}{11}。
      \]`]
    },
    "83M-17": {
      verified: true, sourcePage: 4,
      stem: String.raw`L 為平面 \(x-y+z=1\) 與 \(x+y-z=1\) 的交線。求 L 上與點 \((1,2,3)\) 距離最近的點。`,
      solution: [String.raw`兩平面方程相加得 \(x=1\)，再代回得 \(y=z\)，所以 L 可參數化為 \((1,t,t)\)。到 \((1,2,3)\) 的距離平方為
      \[
      (t-2)^2+(t-3)^2，
      \]
      在 \(t=(2+3)/2=5/2\) 時最小。故最近點為
      \[
      \left(1,\frac52,\frac52\right)。
      \]`]
    },
    "83M-18": {
      verified: true, sourcePage: 4,
      stem: "每次用 20 根相同火柴棒圍成一個三角形，共可圍成多少種不全等的三角形？",
      solution: [String.raw`設整數邊長 \(a\le b\le c\)，則 \(a+b+c=20\) 且 \(a+b>c\)，所以 \(c<10\)。依最大邊分類：
      \[
      \begin{array}{c|c}
      c& (a,b)\\\hline
      9&(2,9),(3,8),(4,7),(5,6)\\
      8&(4,8),(5,7),(6,6)\\
      7&(6,7)
      \end{array}
      \]
      共 \(4+3+1=8\) 種。`]
    },
    "83M-19": {
      verified: true, sourcePage: 4,
      stem: String.raw`若 \(\frac{3\pi}{2}<\theta<2\pi\)，且 \(\sin\theta+\cos\theta=\frac15\)，求 \(\cos\theta\)。`,
      solution: [String.raw`平方已知式：
      \[
      1+2\sin\theta\cos\theta=\frac1{25}
      \Longrightarrow \sin\theta\cos\theta=-\frac{12}{25}。
      \]
      因 \(\theta\) 在第四象限，
      \[
      \cos\theta-\sin\theta
      =\sqrt{1-2\sin\theta\cos\theta}=\frac75。
      \]
      與 \(\cos\theta+\sin\theta=1/5\) 相加，得 \(\cos\theta=4/5\)。`]
    },
    "83M-20": {
      verified: true, sourcePage: 4,
      stem: String.raw`已知 \(p\) 為常數。若 \(x^2+px+6\) 與 \(x^3+px+6\) 的最低公倍式為四次式，求 \(p\)。`,
      solution: [String.raw`兩多項式次數和為 5，而最低公倍式為四次，表示它們有一個一次公因式，設共同根為 \(r\ne0\)。由兩式為 0，
      \[
      p=-r-\frac6r,\qquad p=-r^2-\frac6r。
      \]
      相等得 \(r^2=r\)，故 \(r=1\)。代回 \(1+p+6=0\)，得到
      \[
      p=-7。
      \]`]
    }
  });
})();
