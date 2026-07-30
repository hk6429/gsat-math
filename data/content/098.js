(() => {
  Object.assign(window.MATH_CONTENT, {
    "98M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`數列 \(a_1+2,\ldots,a_k+2k,\ldots,a_{10}+20\) 共有十項，且其和為 240，求 \(a_1+\cdots+a_k+\cdots+a_{10}\)。`,
      options: { "1": "31", "2": "120", "3": "130", "4": "185", "5": "218" },
      solution: [String.raw`題給十項之和為
      \[
      (a_1+\cdots+a_{10})+2(1+2+\cdots+10)=240。
      \]
      又 \(2(1+\cdots+10)=2\cdot55=110\)，故原數列十項和為 \(240-110=130\)。`],
      optionAnalysis: {
        "1": "沒有扣除完整的等差增量總和。",
        "2": "把附加量誤算成 120。",
        "3": String.raw`由總和 \(240\) 扣除 \(2(1+\cdots+10)=110\)，得到 \(130\)。`,
        "4": "只扣除了 55，漏掉每項增量中的係數 2。",
        "5": "沒有依十個不同的附加量逐項加總。",
      }
    },
    "98M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`令 \(a=\cos(\pi^2)\)，判斷 \(a\) 所在的區間。`,
      options: { "1": String.raw`\(a=-1\)`, "2": String.raw`\(-1<a\le-\frac12\)`, "3": String.raw`\(-\frac12<a\le0\)`, "4": String.raw`\(0<a\le\frac12\)`, "5": String.raw`\(\frac12<a\le1\)` },
      solution: [String.raw`因 \(3\pi<\pi^2<\frac{10\pi}{3}\)，且 \(\pi^2=3\pi+\pi(\pi-3)\)，其中 \(0<\pi(\pi-3)<\pi/3\)。所以
      \[
      \cos(\pi^2)=-\cos\!\bigl(\pi(\pi-3)\bigr)
      \]
      介於 \(-1\) 與 \(-1/2\) 之間。`],
      optionAnalysis: {
        "1": String.raw`\(\pi^2\) 不是奇數倍的 \(\pi\)，故餘弦不等於 \(-1\)。`,
        "2": "角度落在第三個 π 之後不超過 π/3 的位置，餘弦介於 -1 與 -1/2，正確。",
        "3": "餘弦的絕對值大於 1/2。",
        "4": "此角位於餘弦為負的區段。",
        "5": "此角位於餘弦為負的區段。"
      }
    },
    "98M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知 \(f(x),g(x)\) 是實係數多項式，且 \(f(x)\) 除以 \(g(x)\) 的餘式為 \(x^4-1\)。下列何者不可能是 \(f(x)\) 與 \(g(x)\) 的公因式？`,
      options: { "1": "5", "2": String.raw`\(x-1\)`, "3": String.raw`\(x^2-1\)`, "4": String.raw`\(x^3-1\)`, "5": String.raw`\(x^4-1\)` },
      solution: [String.raw`若 \(h(x)\) 同時整除 \(f(x)\) 與 \(g(x)\)，由
      \[
      f(x)=q(x)g(x)+(x^4-1)
      \]
      可知 \(h(x)\) 必須整除 \(x^4-1\)。其中 \(x-1、x^2-1、x^4-1\) 都能整除餘式，非零常數 5 也是單位因子；但 \(x^3-1\) 不能整除 \(x^4-1\)。`],
      optionAnalysis: {
        "1": "在實係數多項式中，非零常數可作為公因式。",
        "2": String.raw`\(x-1\) 整除 \(x^4-1\)，可能成立。`,
        "3": String.raw`\(x^2-1\) 整除 \(x^4-1\)，可能成立。`,
        "4": String.raw`\(x^3-1\) 不整除餘式，故不可能同時整除 \(f,g\)。`,
        "5": "餘式本身可以成為兩多項式的公因式。"
      }
    },
    "98M-4": {
      verified: true, sourcePage: 1,
      stem: "甲、乙、丙三所高中的一年級分別有 3、4、5 個班級。從 12 班中依序不放回抽兩班參加不同科抽考，求兩班來自同校的機率最接近何者。",
      options: { "1": "21%", "2": "23%", "3": "25%", "4": "27%", "5": "29%" },
      solution: [String.raw`同校的無序班級對數為
      \[
      \binom32+\binom42+\binom52=3+6+10=19，
      \]
      全部班級對數為 \(\binom{12}2=66\)。所以機率
      \[
      \frac{19}{66}\approx28.79\%，
      \]
      最接近 29%。`],
      optionAnalysis: {
        "1": "低估了班級數最多的丙校所貢獻的同校配對。",
        "2": "不符合三校同校配對數除以全部配對數。",
        "3": "不能把三所學校直接視為等機率。",
        "4": "仍低於精確值約 28.79%。",
        "5": "精確機率約為 28.79%，最接近 29%。"
      }
    },
    "98M-5": {
      verified: true, sourcePage: 2,
      stem: "甲、乙、丙三鎮兩兩距離皆為 20 公里。一條直線公路通過甲、乙，另一條直線公路通過丙，兩路交於丁且夾角為 45°。求丙、丁的距離約為多少。",
      options: { "1": "24.5 公里", "2": "25 公里", "3": "25.5 公里", "4": "26 公里", "5": "26.5 公里" },
      solution: [String.raw`三鎮形成邊長 20 的正三角形。取甲乙公路為水平軸，丙到此路的垂直距離為 \(10\sqrt3\)。丙丁公路與水平線夾角 \(45^\circ\)，故
      \[
      CD=\frac{10\sqrt3}{\sin45^\circ}=10\sqrt6\approx24.495。
      \]
      最接近 24.5 公里。`],
      optionAnalysis: {
        "1": String.raw`\(10\sqrt6\approx24.495\)，最接近此值。`,
        "2": "把近似值過度取整為 25。",
        "3": "高估了斜線長度。",
        "4": "不符合正三角形高與 45° 斜線的關係。",
        "5": "不符合計算值。"
      }
    },
    "98M-6": {
      verified: true, sourcePage: 2,
      stem: "坐標平面上有多少條直線，使原點 O 到直線的距離為 1，且 A(3,0) 到直線的距離為 2？",
      options: { "1": "1 條", "2": "2 條", "3": "3 條", "4": "4 條", "5": "無窮多條" },
      solution: [String.raw`把所求直線視為分別與兩圓 \(C_O(O,1)\)、\(C_A(A,2)\) 相切的公切線。兩圓心距為 3，恰等於半徑和 \(1+2\)，所以兩圓外切。`, "兩外切圓有兩條外公切線，另有一條通過外切點的共同切線，共 3 條。"],
      optionAnalysis: {
        "1": "只算了兩圓接觸點處的共同切線。",
        "2": "只算兩條外公切線，漏掉接觸點切線。",
        "3": "外切兩圓共有兩條外公切線與一條接觸點公切線。",
        "4": "四條公切線只會出現在兩圓彼此分離且不相交時。",
        "5": "同時符合兩個固定距離條件的直線只有有限條。"
      }
    },
    "98M-7": {
      verified: true, sourcePage: 2,
      stem: "下列哪些選項中的數是有理數？請選出所有符合條件者。",
      options: { "1": "3.1416", "2": String.raw`\(\sqrt3\)`, "3": String.raw`\(\log_{10}5+\log_{10}2\)`, "4": String.raw`\(\frac{\sin15^\circ}{\cos15^\circ}+\frac{\cos15^\circ}{\sin15^\circ}\)`, "5": String.raw`方程式 \(x^3-2x^2+x-1=0\) 的唯一實根` },
      solution: [String.raw`有限小數 3.1416 是有理數。（3）等於 \(\log_{10}10=1\)。（4）為
      \[
      \tan15^\circ+\cot15^\circ
      =\frac1{\sin15^\circ\cos15^\circ}
      =\frac2{\sin30^\circ}=4。
      \]
      三者皆為有理數。`, String.raw`\(\sqrt3\) 是無理數。選項（5）的整係數首一多項式若有有理根，只可能是 \(\pm1\)，代入皆不成立，故其唯一實根為無理數。`],
      optionAnalysis: {
        "1": "有限小數可化成整數比，是有理數。",
        "2": String.raw`\(\sqrt3\) 是無理數。`,
        "3": "利用對數乘法可化為 1。",
        "4": "利用正弦倍角公式可化為 4。",
        "5": "有理根定理排除 ±1，因此唯一實根不是有理數。"
      }
    },
    "98M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`依原卷位置圖，四直線方程依序為
      \[
      L_1:y=m_1x,\quad L_2:y=m_2x,\quad L_3:y=m_3x,\quad L_4:y=m_4x+c。
      \]
      圖中 \(L_1\perp L_3\)、\(L_3\parallel L_4\)，且 \(0<m_3<1、m_2<m_1<0、c<0\)。選出正確敘述。`,
      options: { "1": String.raw`\(m_3>m_2>m_1\)`, "2": String.raw`\(m_1m_4=-1\)`, "3": String.raw`\(m_1<-1\)`, "4": String.raw`\(m_2m_3<-1\)`, "5": String.raw`\(c>0\)` },
      solution: [String.raw`平行給出 \(m_4=m_3\)，垂直給出 \(m_1m_3=-1\)，故 \(m_1m_4=-1\)，（2）成立。`, String.raw`因 \(0<m_3<1\)，所以 \(m_1=-1/m_3<-1\)，（3）成立。圖上 \(m_2<m_1\)，乘上正數 \(m_3\) 得 \(m_2m_3<m_1m_3=-1\)，故（4）成立。`],
      optionAnalysis: {
        "1": "圖上兩負斜率的次序是 m₂<m₁，不是 m₂>m₁。",
        "2": "由 m₄=m₃ 與 m₁m₃=-1 得到，正確。",
        "3": "m₃ 介於 0 與 1，所以其負倒數小於 -1。",
        "4": "m₂ 比 m₁ 更負，乘正的 m₃ 後小於 -1。",
        "5": "L₄ 與 y 軸交於原點下方，所以 c<0。"
      }
    },
    "98M-9": {
      verified: true, sourcePage: 3,
      stem: "某產品在甲、乙兩地知名度的 95% 信賴區間分別為 [0.50,0.58]、[0.08,0.16]。選出正確敘述。",
      options: {
        "1": "甲地本次受訪者中，54% 的人聽過該產品",
        "2": "此次民調在乙地的受訪人數少於甲地",
        "3": "甲地全體居民中有一半以上聽過該產品的機率大於 95%",
        "4": "在乙地重複民調，所得知名度有 95% 的機會落在 [0.08,0.16]",
        "5": "廣告後把乙地受訪人數增為四倍，95% 信賴區間寬度必減半為 0.04"
      },
      solution: [String.raw`信賴區間中心即樣本比例，所以甲地樣本比例為 \((0.50+0.58)/2=0.54\)，（1）成立。兩區間半寬同為 0.04，標準誤同為 0.02。`, String.raw`由 \(n=\hat p(1-\hat p)/SE^2\)，甲地約 \(0.54(0.46)/0.0004=621\) 人，乙地約 \(0.12(0.88)/0.0004=264\) 人，故（2）成立。其餘選項誤解信賴區間，或忽略廣告後母體比例可能改變。`],
      optionAnalysis: {
        "1": "區間中心 0.54 就是本次樣本比例。",
        "2": "在標準誤相同下，乙地較小的 p(1-p) 對應較小樣本數。",
        "3": "頻率學派信賴區間不能解讀為固定母體參數的機率。",
        "4": "95% 指的是重複抽樣所建區間涵蓋母體參數的長期比例，不是估計值落入本區間的機率。",
        "5": "廣告後支持比例可能改變，不能保證區間寬度恰減半。"
      }
    },
    "98M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a,b,c\) 為實數，考慮方程組
      \[
      \begin{cases}
      x+2y+az=1,\\
      3x+4y+bz=-1,\\
      2x+10y+7z=c。
      \end{cases}
      \]
      選出正確敘述。`,
      options: {
        "1": "若有解，則必定恰有一組解",
        "2": String.raw`若有解，則 \(11a-3b\ne7\)`,
        "3": String.raw`若有解，則 \(c=14\)`,
        "4": String.raw`若無解，則 \(11a-3b=7\)`,
        "5": String.raw`若無解，則 \(c\ne14\)`
      },
      solution: [String.raw`前兩式左側做 \(11\times\)第一式 \(-3\times\)第二式，可得
      \[
      2x+10y+(11a-3b)z=14。
      \]
      若 \(11a-3b\ne7\)，係數矩陣非奇異，方程組必有唯一解。要無解，必須先有 \(11a-3b=7\)，使第三式左側成為前兩式組合；此時若 \(c\ne14\) 才矛盾而無解。`],
      optionAnalysis: {
        "1": "當係數矩陣奇異且常數相容時，可能有無限多解。",
        "2": "有解也可能發生在奇異但相容的情形。",
        "3": "非奇異時任何 c 都有唯一解，不必等於 14。",
        "4": "無解必先使第三列係數成為前兩列的線性組合，故正確。",
        "5": "在係數已相依時，c 不等於相同線性組合的 14 才會無解。"
      }
    },
    "98M-11": {
      verified: true, sourcePage: 4,
      stem: "正立方體 ABCD-EFGH 稜長為 2，K 為正方形 ABCD 中心，M、N 分別為 BF、EF 中點。選出正確敘述。",
      options: {
        "1": String.raw`\(\overrightarrow{KM}=\frac12\overrightarrow{AB}-\frac12\overrightarrow{AD}+\frac12\overrightarrow{AE}\)`,
        "2": String.raw`\(\overrightarrow{KM}\cdot\overrightarrow{AB}=1\)`,
        "3": String.raw`\(\overline{KM}=3\)`,
        "4": String.raw`\(\triangle KMN\) 為直角三角形`,
        "5": String.raw`\(\triangle KMN\) 面積為 \(\frac{\sqrt{10}}2\)`
      },
      solution: [String.raw`以 \(A\) 為起點，令 \(\overrightarrow{AB}=u、\overrightarrow{AD}=v、\overrightarrow{AE}=w\)，三向量互相垂直且長皆為 2。則
      \[
      K=\frac{u+v}{2},\quad M=u+\frac w2,\quad N=\frac u2+w。
      \]
      因此 \(\overrightarrow{KM}=\frac12u-\frac12v+\frac12w\)，（1）成立。`, String.raw`其長為 \(\sqrt3\)，且 \(\overrightarrow{KM}\cdot u=2\)，故（2）（3）錯。在 \(M\) 點，
      \[
      \overrightarrow{MK}\cdot\overrightarrow{MN}=0，
      \]
      所以（4）成立。兩直角邊長為 \(\sqrt3,\sqrt2\)，面積為 \(\sqrt6/2\)，不是 \(\sqrt{10}/2\)。`],
      optionAnalysis: {
        "1": "依三個互相垂直的稜向量分解，式子正確。",
        "2": "內積為 (1/2)|AB|²=2，不是 1。",
        "3": String.raw`三個互相垂直的分量長皆為 1，所以 \(KM=\sqrt3\)。`,
        "4": "MK 與 MN 的內積為 0，因此 M 為直角頂點。",
        "5": "正確面積為 √6/2。"
      }
    },
    "98M-12": {
      verified: true, sourcePage: 4,
      stem: "從 1 到 100 的正整數中，刪去所有質數、2 的倍數與 3 的倍數後，求剩下的最大數。",
      solution: ["由 100 向下檢查：100、99、98、96 分別為 2 或 3 的倍數，97 是質數；95=5×19，既非質數，也不是 2 或 3 的倍數。因此最大剩餘數為 95。"]
    },
    "98M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`坐標平面上 \(O=(0,0)、A=(-3,-5)、B=(6,0)、C=(x,y)\)。質點自 O 沿 \(\overrightarrow{AO}\) 方向前進 \(AO\) 後到 P，再沿 \(\overrightarrow{BP}\) 方向前進 \(2BP\) 後到 Q，最後沿 \(\overrightarrow{CQ}\) 方向前進 \(3CQ\) 後回到 O。求 C。`,
      solution: [String.raw`\(\overrightarrow{AO}=(3,5)\)，故 \(P=(3,5)\)。接著
      \[
      Q=P+2(P-B)=3P-2B=(-3,15)。
      \]
      最後 \(O=Q+3(Q-C)=4Q-3C\)，所以
      \[
      C=\frac43Q=(-4,20)。
      \]`]
    },
    "98M-14": {
      verified: true, sourcePage: 4,
      stem: "抽獎箱原有 2 顆藍球、5 顆紅球；抽中藍球得 2000 元，紅球得 1000 元，其他顏色不得獎。若加入 n 顆其他色球後，期望值為 300 元，求 n。",
      solution: [String.raw`依期望值列式：
      \[
      \frac{2(2000)+5(1000)}{7+n}=300。
      \]
      因此 \(9000=2100+300n\)，解得 \(n=23\)。`]
    },
    "98M-15": {
      verified: true, sourcePage: 5,
      stem: "坐標平面上兩條平行直線的 x 截距相差 20、y 截距相差 15，求兩直線距離。",
      solution: [String.raw`把兩直線寫成同一法向量的形式 \(ax+by=c_1,c_2\)。截距差給出
      \[
      \frac{|c_1-c_2|}{|a|}=20,\qquad
      \frac{|c_1-c_2|}{|b|}=15。
      \]
      可取 \(|a|:|b|=3:4\)，且 \(|c_1-c_2|=60\)。故線距為
      \[
      \frac{60}{\sqrt{3^2+4^2}}=12。
      \]`]
    },
    "98M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`開口向上拋物線 \(\Gamma_1\) 的對稱軸為 \(x=-3/4\)，焦距為 \(1/8\)。若它與 \(\Gamma_2:y=x^2\) 恰交於一點，求 \(\Gamma_1\) 頂點的 y 坐標。`,
      solution: [String.raw`設頂點縱坐標為 \(k\)。因焦距 \(p=1/8\)，
      \[
      \Gamma_1:y=2\left(x+\frac34\right)^2+k。
      \]
      與 \(y=x^2\) 聯立後得
      \[
      x^2+3x+\frac98+k=0。
      \]
      恰交一點表示判別式為 0：
      \[
      9-4\left(\frac98+k\right)=0，
      \]
      所以 \(k=9/8\)。`]
    },
    "98M-17": {
      verified: true, sourcePage: 5,
      stem: "某公司希望五年後當年二氧化碳排放量降為目前的 75%，且每年按固定比率減少。求每年至少須比前一年減少多少百分比（四捨五入至小數點後一位）。",
      solution: [String.raw`設每年保留比例為 \(r\)，則 \(r^5=0.75\)，所以
      \[
      r=0.75^{1/5}\approx0.9441。
      \]
      每年減量比例為 \(1-r\approx0.0559\)，即約 \(5.6\%\)。`]
    },
    "98M-18": {
      verified: true, sourcePage: 5,
      stem: String.raw`xy 平面上的正方形頂點為 \(O(0,0,0)、A(8,0,0)、B(8,8,0)、C(0,8,0)\)。點 P 在 xy 平面上方，且到四頂點距離皆為 6。若通過 A、B、P 的平面為 \(x+by+cz=d\)，求 \((b,c,d)\)。`,
      solution: [String.raw`P 在正方形中心 \((4,4,0)\) 的鉛直線上。中心到頂點距離為 \(4\sqrt2\)，故高度
      \[
      h=\sqrt{6^2-(4\sqrt2)^2}=2，
      \]
      所以 \(P=(4,4,2)\)。`, String.raw`代入 A 得 \(d=8\)；代入 B 得 \(8+8b=8\)，故 \(b=0\)；代入 P 得 \(4+2c=8\)，故 \(c=2\)。答案為 \((0,2,8)\)。`]
    },
    "98M-19": {
      verified: true, sourcePage: 6,
      stem: "一橢圓與一雙曲線有共同焦點 F₁、F₂，且雙曲線的貫軸長等於橢圓的短軸長。P 為兩曲線交點，且 PF₁×PF₂=64，求 F₁F₂。",
      solution: [String.raw`設橢圓半長軸、半短軸為 \(a,b\)，共同半焦距為 \(c\)。雙曲線半貫軸等於 \(b\)。在交點 P，
      \[
      PF_1+PF_2=2a,\qquad |PF_1-PF_2|=2b。
      \]
      因此
      \[
      PF_1PF_2=\frac{(2a)^2-(2b)^2}{4}=a^2-b^2=c^2=64。
      \]
      故 \(c=8\)，焦距 \(F_1F_2=2c=16\)。`]
    },
    "98M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`在 \(\triangle ABC\) 中，\(AB=10、AC=9、\cos\angle BAC=3/8\)。P、Q 分別在 AB、AC 上，且 \(\triangle APQ\) 面積為 \(\triangle ABC\) 的一半。求 PQ 的最小值。`,
      solution: [String.raw`設 \(AP=m、AQ=n\)。兩三角形共有夾角 A，面積比為
      \[
      \frac{mn}{10\cdot9}=\frac12，
      \]
      所以 \(mn=45\)。由餘弦定理
      \[
      PQ^2=m^2+n^2-2mn\cdot\frac38。
      \]
      在 \(mn=45\) 下，\(m^2+n^2\ge2mn=90\)，等號於 \(m=n=\sqrt{45}\) 時成立，且點仍在線段內。`, String.raw`因此
      \[
      PQ_{\min}^2=90-90\cdot\frac38=\frac{225}{4}，
      \qquad PQ_{\min}=\frac{15}{2}。
      \]`]
    }
  });
})();
