(() => {
  Object.assign(window.MATH_CONTENT, {
    "100M-1": {
      verified: true, sourcePage: 1,
      stem: "箱中有 3 黑球、2 白球，任取一球。黑球獎金 50 元、白球獎金 100 元，求獎金期望值。",
      options: { "1": "70 元", "2": "75 元", "3": "80 元", "4": "85 元", "5": "90 元" },
      solution: [String.raw`期望值為
      \[
      \frac35(50)+\frac25(100)=30+40=70\text{ 元}。
      \]`],
      optionAnalysis: { "1":"依黑、白球機率加權後為70元。","2":"不是兩種獎金的等機率平均。","3":"高估白球被抽中的機率。","4":"未依3:2的球數比例計算。","5":"結果過度偏向100元獎金。" }
    },
    "100M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`化簡多項式 \(4(x^2+1)+(x+1)^2(x-3)+(x-1)^3\)。`,
      options: { "1": String.raw`\(x(x+1)^2\)`, "2": String.raw`\(2x(x-1)^2\)`, "3": String.raw`\(x(x-1)(x+1)\)`, "4": String.raw`\(2(x-1)^2(x+1)\)`, "5": String.raw`\(2x(x-1)(x+1)\)` },
      solution: [String.raw`逐項展開合併得
      \[
      2x^3-2x=2x(x^2-1)=2x(x-1)(x+1)。
      \]`],
      optionAnalysis: { "1":"展開後會出現二次項，與原式不符。","2":"重根x=1不符合化簡後的多項式。","3":"少了整體係數2。","4":"多出x=1的重根且缺少因子x。","5":"展開即為2x³−2x。" }
    },
    "100M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`正數列滿足 \(a_{n+1}^2=\frac1{10}a_n^2\)。令 \(b_n=\log a_n\)，判斷 \(b_n\) 的數列型態。`,
      options: { "1": "公差為正的等差數列", "2": "公差為負的等差數列", "3": "公比為正的等比數列", "4": "公比為負的等比數列", "5": "既非等差亦非等比" },
      solution: [String.raw`因各項為正，\(a_{n+1}=a_n/\sqrt{10}\)。所以
      \[
      b_{n+1}-b_n=\log\frac1{\sqrt{10}}=-\frac12，
      \]
      是公差為負的等差數列。`],
      optionAnalysis: { "1":"固定公差是−1/2，不是正數。","2":"相鄰兩項固定相差−1/2。","3":"取對數後乘法關係轉為加法關係。","4":"bₙ並非以固定負公比遞推。","5":"它確實是等差數列。" }
    },
    "100M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`判斷方程
      \[
      \left(\frac{x^2}{5^2}+\frac{y^2}{4^2}\right)
      \left(\frac{x^2}{3^2}-\frac{y^2}{4^2}\right)=0
      \]
      所表示的圖形。`,
      options: { "1": "只有原點", "2": "橢圓及原點", "3": "兩條相異直線", "4": "橢圓及雙曲線", "5": "雙曲線及原點" },
      solution: [String.raw`第一因式為兩個非負數之和，只在原點為 0；第二因式等於 0 時，
      \[
      y=\pm\frac43x，
      \]
      已包含原點。因此整體圖形就是兩條相異直線。`],
      optionAnalysis: { "1":"第二因式還給出兩條直線。","2":"第一因式等於0只有原點，不形成橢圓。","3":"第二因式分解成兩條直線，且已包含原點。","4":"兩因式等於0都不是非退化的圓錐曲線組合。","5":"第二因式是退化雙曲線的兩條直線，不是雙曲線。" }
    },
    "100M-5": {
      verified: true, sourcePage: 2,
      stem: "比較題列的五個指數與對數敘述，選出正確者。",
      options: { "1": String.raw`\(3^7<7^3\)`, "2": String.raw`\(5^{10}<10^5\)`, "3": String.raw`\(2^{100}<10^{30}\)`, "4": String.raw`\(\log_2 3=1.5\)`, "5": String.raw`\(\log_2 11<3.5\)` },
      solution: [String.raw`\(3^7=2187>343=7^3\)；\(5^{10}>10^5\)；且 \(100\log10 2\approx30.10\)，所以 \(2^{100}>10^{30}\)。`, String.raw`\(\log_2 3\approx1.585\)。又 \(2^{3.5}=8\sqrt2\approx11.31>11\)，故 \(\log_2 11<3.5\)。`],
      optionAnalysis: { "1":"3⁷=2187，大於7³=343。","2":"5¹⁰遠大於10⁵。","3":"2¹⁰⁰約為10³⁰·¹，大於10³⁰。","4":"log₂3約為1.585，不等於1.5。","5":"2³·⁵約11.31大於11，故此不等式正確。" }
    },
    "100M-6": {
      verified: true, sourcePage: 2,
      stem: "題列 0～60 歲男性死亡率共 61 筆，已知其中 24 筆小於 0.2%。求這組資料的中位數。",
      options: { "1": "0.2034", "2": "0.2164", "3": "0.2137", "4": "0.2085", "5": "0.2019" },
      solution: ["61 筆資料的中位數是排序後第 31 筆。已有 24 筆小於 0.2，接著依序為 0.2019、0.2034、0.2051、0.2085、0.2123、0.2137、0.2164。", "因此第 31 筆是 0.2164。"],
      optionAnalysis: { "1":"0.2034是排序後第26筆。","2":"0.2164是排序後第31筆，正是中位數。","3":"0.2137是第30筆，差一個順位。","4":"0.2085是第28筆。","5":"0.2019是第25筆。" }
    },
    "100M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`複數平面中 \(O=0、A=1+i、B=1-i\)。選出落在 \(\triangle OAB\) 內部的複數點。`,
      options: { "1": String.raw`\(\cos60^\circ\)`, "2": String.raw`\(\cos50^\circ+i\sin50^\circ\)`, "3": String.raw`\(\frac{4-3i}{5}\)`, "4": String.raw`\(\frac{1+3i}{2}\)`, "5": String.raw`\((\cos30^\circ+i\sin30^\circ)^{25}\)` },
      solution: [String.raw`三角形內部可寫成 \(0<x<1、|y|<x\)。（1）為 \((1/2,0)\)；（3）為 \((4/5,-3/5)\)，皆符合。`, String.raw`（5）由棣美弗定理化為角度 \(750^\circ\equiv30^\circ\)，點 \((\sqrt3/2,1/2)\) 也符合；其餘不符合 \(|y|<x\)。`],
      optionAnalysis: { "1":"點(1/2,0)滿足0<x<1且|y|<x。","2":"單位圓50°點的虛部大於實部，落在三角形外。","3":"點(4/5,−3/5)滿足|y|<x<1。","4":"點(1/2,3/2)的虛部超出三角形。","5":"化為單位圓30°點，滿足三角形內部條件。" }
    },
    "100M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`已知 \(\sin\theta=-\frac23、\cos\theta>0\)，選出正確敘述。`,
      options: { "1": String.raw`\(\tan\theta<0\)`, "2": String.raw`\(\tan^2\theta>\frac49\)`, "3": String.raw`\(\sin^2\theta>\cos^2\theta\)`, "4": String.raw`\(\sin2\theta>0\)`, "5": "θ 與 2θ 的終邊在不同象限" },
      solution: [String.raw`\(\cos\theta=\sqrt5/3\)，所以 \(\tan\theta=-2/\sqrt5<0\)，且 \(\tan^2\theta=4/5>4/9\)。`, String.raw`\(\sin^2\theta=4/9<5/9=\cos^2\theta\)，而 \(\sin2\theta<0\)。θ 與 2θ 的標準位置終邊都在第四象限。`],
      optionAnalysis: { "1":"正弦負、餘弦正，所以正切為負。","2":"tan²θ=(4/9)/(5/9)=4/5，大於4/9。","3":"sin²θ=4/9，小於cos²θ=5/9。","4":"sin2θ=2sinθcosθ為負。","5":"θ約在−42°，2θ約在−84°，兩者都在第四象限。" }
    },
    "100M-9": {
      verified: true, sourcePage: 3,
      stem: "直角三角形 OAB 的頂點為 O(0,0)、A(3,0)、B(0,4)。C₁、C₂ 分別為外接圓、內切圓，選出正確敘述。",
      options: { "1": "C₁ 半徑為 2", "2": "C₁ 圓心在 y=x", "3": "C₁ 圓心在 4x+3y=12", "4": "C₂ 圓心在 y=x", "5": "C₂ 圓心在 4x+3y=6" },
      solution: [String.raw`斜邊長為 5，所以外接圓半徑 \(5/2\)，圓心是斜邊中點 \((3/2,2)\)，滿足 \(4x+3y=12\)。`, "3-4-5 直角三角形內切圓半徑為 1，內心是 (1,1)，位於 y=x，但不在 4x+3y=6。"],
      optionAnalysis: { "1":"直角三角形外接圓半徑是斜邊一半，即5/2。","2":"外心(3/2,2)不滿足y=x。","3":"外心代入4x+3y得到12。","4":"內心為(1,1)，位於y=x。","5":"內心代入4x+3y得到7，不是6。" }
    },
    "100M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`向量 \(\vec w\) 與 \(\vec v=(2,5)\) 垂直且等長，選出正確敘述。`,
      options: { "1": String.raw`\(\vec w=(5,-2)\) 或 \((-5,2)\)`, "2": String.raw`\(|\vec v+\vec w|=|\vec v-\vec w|\)`, "3": String.raw`\(\vec v+\vec w\) 與 \(\vec w\) 夾角可能為 135°`, "4": String.raw`若 \(\vec u=a\vec v+b\vec w\)，則 \(|\vec u|=\sqrt{a^2+b^2}\)`, "5": String.raw`若 \((1,0)=c\vec v+d\vec w\)，則 \(c>0\)` },
      solution: ["將 (2,5) 旋轉 ±90° 得（1）。因兩向量垂直等長，\(|v\pm w|^2=|v|^2+|w|^2\)，所以（2）成立。", String.raw`投影係數 \(c=(1,0)\cdot v/|v|^2=2/29>0\)。選項（4）漏了共同長度 \(\sqrt{29}\)；（3）的夾角為 45°。`],
      optionAnalysis: { "1":"(2,5)旋轉正負90°即得兩個可能向量。","2":"兩式平方長都等於|v|²+|w|²。","3":"v+w與w的夾角為45°，不是135°。","4":"正確長度應為√29·√(a²+b²)。","5":"v方向投影係數c=2/29>0。" }
    },
    "100M-11": {
      verified: true, sourcePage: 3,
      stem: "圓 C 以原點為圓心、半徑 2。已知直線 L 與 C 相交，選出 L 一定會相交的圖形。",
      options: { "1": "x 軸", "2": String.raw`\(y=(1/2)^x\)`, "3": String.raw`\(x^2+y^2=3\)`, "4": String.raw`\((x-2)^2+y^2=16\)`, "5": String.raw`\(\frac{x^2}{9}+\frac{y^2}{4}=1\)` },
      solution: ["L 通過半徑 2 圓的內部。圓 \((x-2)^2+y^2=16\) 與橢圓 \(x^2/9+y^2/4=1\) 都包住原圓內部；直線既進入其內部，延伸時必穿過邊界。", "x 軸、指數圖形與較小同心圓都可被某些割線避開。"],
      optionAnalysis: { "1":"可取不與x軸相交的水平割線。","2":"有些原圓割線可避開此指數曲線。","3":"可取到原點距離介於√3與2之間的割線，便不交較小圓。","4":"此大圓包住原圓，割線延伸必穿越其邊界。","5":"此橢圓包住原圓，割線延伸必穿越其邊界。" }
    },
    "100M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`球面 \(S:(x-1)^2+(y-2)^2+(z-3)^2=14\)，並給 \(A(1,0,0)、B(-1,0,0)\)。選出正確敘述。`,
      options: { "1": "原點在 S 上", "2": "A 在 S 外部", "3": "線段 AB 與 S 相交", "4": "A 是直線 AB 上距球心最近點", "5": "三坐標平面截圓中以 xy 平面截圓面積最大" },
      solution: ["球心 (1,2,3)，半徑 √14。原點到球心距離正是 √14；A 到球心距離 √13，在球內。", "x 軸代入球面得 x=0 或2，故線段 AB 含交點原點；球心投影到 x 軸是 A。截圓最大的是距球心最近的 yz 平面，不是 xy 平面。"],
      optionAnalysis: { "1":"原點到球心距離等於半徑√14。","2":"A到球心距離√13，小於半徑，在球內。","3":"線段AB包含球面交點原點。","4":"球心到x軸的垂足就是A。","5":"yz平面距球心只有1，截圓面積比xy平面更大。" }
    },
    "100M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`設 \(f(x)=x(x-1)(x+1)=x^3-x\)，選出正確敘述。`,
      options: { "1": String.raw`\(f(1/2)>0\)`, "2": String.raw`\(f(x)=2\) 有整數解`, "3": String.raw`\(f(x)=x^2+1\) 有實數解`, "4": String.raw`\(f(x)=x\) 有非零有理數解`, "5": String.raw`若 \(f(a)=2\)，則 \(f(-a)=2\)` },
      solution: [String.raw`（1）\(f(1/2)=-3/8\)；（2）檢查可能整數根可知無解；（4）化為 \(x(x^2-2)=0\)，非零解為無理數。`, String.raw`（3）移項得到三次多項式，連續且兩端趨向正、負無窮，必有實根。f 是奇函數，所以（5）應為 \(f(-a)=-2\)。`],
      optionAnalysis: { "1":"f(1/2)=−3/8，小於0。","2":"整數代入無法使x³−x等於2。","3":"移項後的三次連續函數必穿越x軸，故有實解。","4":"非零解為±√2，不是有理數。","5":"f是奇函數，f(−a)=−f(a)=−2。" }
    },
    "100M-14": {
      verified: true, sourcePage: 4,
      stem: "首項 a、公比 r 的無窮等比級數和為 5；首項 a、公比 3r 的和為 7。求首項 a、公比 2r 的級數和。",
      solution: [String.raw`由 \(a/(1-r)=5、a/(1-3r)=7\)，得 \(r=1/8、a=35/8\)。所以
      \[
      \frac{a}{1-2r}=\frac{35/8}{3/4}=\frac{35}{6}。
      \]`]
    },
    "100M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`長方體中 ABCD 為正方形，BE 為另一邊。已知 \(\cot\angle AEB=\frac{2\sqrt6}{5}\)，求 \(\cot\angle CED\)。`,
      solution: [String.raw`設正方形邊長 \(s=5\)、\(BE=h=2\sqrt6\)。取 E 為原點配置各頂點，則
      \[
      \overrightarrow{EC}=(s,-h,0),\quad \overrightarrow{ED}=(s,-h,s)。
      \]`, String.raw`由 \(\cot\phi=\frac{u\cdot v}{|u\times v|}\)，得
      \[
      \cot\angle CED=\frac{s^2+h^2}{s\sqrt{s^2+h^2}}=\frac{49}{35}=\frac75。
      \]`]
    },
    "100M-16": {
      verified: true, sourcePage: 5,
      stem: "班上 20 男、15 女，等機率抽 3 人。求三人中有男也有女的機率。",
      solution: [String.raw`用補事件：
      \[
      1-\frac{\binom{20}{3}+\binom{15}{3}}{\binom{35}{3}}
      =\frac{90}{119}。
      \]`]
    },
    "100M-17": {
      verified: true, sourcePage: 5,
      stem: "四邊形 ABCD 中，AB=1、BC=5、CD=5、DA=7，且 \(\angle DAB=\angle BCD=90^\circ\)。求 AC。",
      solution: ["以 BD 為共同弦配置兩個直角條件，B、D 到 C 等距皆為 5；建立坐標後聯立 AB=1、AD=7 與 BC=CD=5。", String.raw`化簡可得 \(AC^2=32\)，故 \(AC=\sqrt{32}\)。`]
    },
    "100M-18": {
      verified: true, sourcePage: 6,
      stem: "放射性物質 A、B、C 每公克輻射強度為 1、2、1，每半年質量分別乘 1/2、1/3、1/4。一年前、半年前、目前總強度為 66、22、8。求目前三者質量。",
      solution: [String.raw`設目前質量為 x、y、z，依三時點列式：
      \[
      x+2y+z=8,\quad2x+6y+4z=22,\quad4x+18y+16z=66。
      \]
      聯立解得 \((x,y,z)=(4,1,2)\)。`]
    },
    "100M-19": {
      verified: true, sourcePage: 6,
      stem: "橢圓焦點為 (±3,0)；拋物線焦點 (3,0)、準線 x=-3。兩曲線交點在直線 x=3 上，求橢圓半長軸 a。",
      solution: [String.raw`拋物線為 \(y^2=12x\)，在 x=3 時 \(y=\pm6\)。橢圓有 \(b^2=a^2-9\)，代入 (3,6)：
      \[
      \frac9{a^2}+\frac{36}{a^2-9}=1。
      \]`, String.raw`解得合法的 \(a^2=27+18\sqrt2=(3+3\sqrt2)^2\)，所以 \(a=3+3\sqrt2\)。`]
    },
    "100M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`平面 \(H:x-y+z=2\) 上有直線 L。P(2,1,1) 是 L 上距原點最近的點。求以 2 為第一分量的 L 方向向量。`,
      solution: [String.raw`設方向向量 \(v=(2,p,q)\)。L 在 H 上，故 v 與法向量 (1,-1,1) 垂直：
      \[
      2-p+q=0。
      \]`, String.raw`P 是最近點，故 \(\overrightarrow{OP}\perp v\)，即 \(4+p+q=0\)。聯立得 \(p=-1、q=-3\)，所以 \(v=(2,-1,-3)\)。`]
    }
  });
})();
