(() => {
  Object.assign(window.MATH_CONTENT, {
    "96M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`設 \(f(x)=ax^6-bx^4+3x-2\)，其中 \(a,b\) 為非零實數，求 \(f(5)-f(-5)\)。`,
      options: { "1": "−30", "2": "0", "3": String.raw`\(2\sqrt2\)`, "4": "30", "5": "無法確定（與 a、b 有關）" },
      solution: [String.raw`六次、四次項與常數項都是偶函數部分，代入 \(5,-5\) 後相消，只剩一次項：
      \[
      f(5)-f(-5)=3(5)-3(-5)=30。
      \]`],
      optionAnalysis: {
        "1": "相減順序顛倒才會得到負值。",
        "2": "忽略了奇次項 3x。",
        "3": "與題式的多項式代入無關。",
        "4": "偶次項相消，奇次項貢獻 30，正確。",
        "5": "a、b 所在偶次項都會相消，答案可以確定。"
      }
    },
    "96M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`通過 \(A(-n,0)\)、\(B(0,2)\) 的直線也通過 \(P(7,k)\)，其中 \(n,k\) 都是正整數。求符合條件的正整數 \(n\) 有多少個。`,
      options: { "1": "2 個", "2": "4 個", "3": "6 個", "4": "8 個", "5": "無窮多個" },
      solution: [String.raw`直線截距式為
      \[
      -\frac{x}{n}+\frac y2=1。
      \]
      代入 \(P(7,k)\) 得 \(k=2+14/n\)。要使 k 為正整數，n 必須是 14 的正因數，故
      \[
      n=1,2,7,14，
      \]
      共 4 個。`],
      optionAnalysis: {
        "1": "漏掉部分 14 的正因數。",
        "2": "14 有 1、2、7、14 四個正因數，正確。",
        "3": "把非整除 14 的 n 也計入。",
        "4": "超過 14 的正因數個數。",
        "5": "整數條件限制 n 必須整除 14，只有有限個。"
      }
    },
    "96M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`某段時間的溫度函數為 \(f(t)=-t^2+10t+11\)，其中 \(1\le t\le10\)。求這段時間內的最大溫差。`,
      options: { "1": "9", "2": "16", "3": "20", "4": "25", "5": "36" },
      solution: [String.raw`配方得
      \[
      f(t)=-(t-5)^2+36，
      \]
      最大值為 \(f(5)=36\)。區間端點中較小者為 \(f(10)=11\)，所以最大溫差為 \(36-11=25\)。`],
      optionAnalysis: {
        "1": "不是區間最高與最低溫之差。",
        "2": "可能只比較了部分時刻。",
        "3": "f(1)=20 是其中一個端點溫度，不是溫差。",
        "4": "最高 36、最低 11，相差 25。",
        "5": "36 是最高溫，不是最大溫差。"
      }
    },
    "96M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`橢圓
      \[
      \frac{x^2}{9}+\frac{y^2}{4}=1
      \]
      與雙曲線
      \[
      \frac{(x+1)^2}{16}-\frac{y^2}{9}=1
      \]
      共有幾個交點？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: [String.raw`由橢圓得 \(y^2=4(1-x^2/9)\)，代入雙曲線後化簡為
      \[
      145x^2+162x-1791=0，
      \]
      解得 \(x=3\) 或 \(x=-597/145\)。後者不在橢圓的範圍 \([-3,3]\)；\(x=3\) 時 \(y=0\)，所以只有一個交點 \((3,0)\)。`],
      optionAnalysis: {
        "1": "只有 x=3 對應橢圓上的點，故一個交點。",
        "2": "另一個代數根不符合橢圓實點範圍。",
        "3": "兩個二次曲線不必然有三個交點。",
        "4": "雖最高可能有四交點，本題實際只有一個。",
        "5": "點 (3,0) 同時滿足兩式。"
      }
    },
    "96M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`判斷 \(y=\sin x\) 與 \(y=x/(10\pi)\) 兩圖形的交點個數性質。`,
      options: { "1": "交點無窮多", "2": "交點是奇數且大於 20", "3": "交點是奇數且小於 20", "4": "交點是偶數且大於或等於 20", "5": "交點是偶數且小於 20" },
      solution: [String.raw`因 \(|\sin x|\le1\)，交點必在 \(|x|\le10\pi\)。兩函數皆為奇函數，除原點外的交點成正負對，因此總數為奇數。`, String.raw`在正半軸上，正弦為正的五個波段中，第一段除原點外有 1 個交點，其餘四段各有 2 個，共 9 個正根；連同 9 個負根與原點，共 \(19\) 個。因此是奇數且小於 20。`],
      optionAnalysis: {
        "1": "直線絕對值超過 1 後不可能再與正弦相交。",
        "2": "實際交點總數為 19。",
        "3": "交點共 19 個，符合。",
        "4": "原點加成對非零根使總數為奇數。",
        "5": "總數不是偶數。"
      }
    },
    "96M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`若 \(\Gamma=\{z:|z-1|=1\}\)，求經 \(w=iz\) 旋轉後的圖形 \(\Omega\) 上有哪些點。`,
      options: { "1": String.raw`\(2i\)`, "2": String.raw`\(-2i\)`, "3": String.raw`\(1+i\)`, "4": String.raw`\(1-i\)`, "5": String.raw`\(-1+i\)` },
      solution: [String.raw`乘以 i 是繞原點逆時針旋轉 \(90^\circ\)，因此原圓中心 1 轉到 i，半徑仍為 1：
      \[
      \Omega=\{w:|w-i|=1\}。
      \]
      逐點計算到 i 的距離，可知（1）（3）（5）皆為 1。`],
      optionAnalysis: {
        "1": String.raw`|2i-i|=1。`,
        "2": String.raw`|-2i-i|=3。`,
        "3": String.raw`|1+i-i|=1。`,
        "4": String.raw`|1-i-i|=\sqrt5。`,
        "5": String.raw`|-1+i-i|=1。`
      }
    },
    "96M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`相異點 \(P(s,t)、Q\) 的線段中垂線為 \(L:3x-4y=0\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(\overrightarrow{PQ}\parallel(3,-4)\)`,
        "2": String.raw`\(PQ=\frac{|6s-8t|}{5}\)`,
        "3": String.raw`\(Q=(t,s)\)`,
        "4": "過 Q 且與 L 平行的直線必通過 (-s,-t)",
        "5": String.raw`\((\overrightarrow{OP}+\overrightarrow{OQ})\cdot\overrightarrow{PQ}=0\)`
      },
      solution: [String.raw`L 的法向量為 \((3,-4)\)，故 PQ 與它平行，（1）成立。P 到 L 的距離為 \(|3s-4t|/5\)，而 PQ 是此距離的兩倍，所以（2）成立。`, String.raw`L 通過原點且為中垂線，Q 是 P 對 L 的鏡射。中點向量 \((P+Q)/2\) 平行 L，所以 Q 與 \(-P\) 的連線也平行 L，（4）成立；鏡射保持到原點距離，故
      \[
      (P+Q)\cdot(Q-P)=|Q|^2-|P|^2=0，
      \]
      （5）成立。`],
      optionAnalysis: {
        "1": "PQ 垂直 L，故平行於 L 的法向量。",
        "2": "線段長是 P 到中垂線距離的兩倍。",
        "3": "對一般斜線鏡射不等於交換兩坐標。",
        "4": "Q-(-P)=P+Q 平行於中垂線。",
        "5": "P、Q 對過原點的直線鏡射，故長度相等。"
      }
    },
    "96M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`判斷下列哪些矩陣可經一系列列運算化成
      \[
      \begin{pmatrix}1&2&3&7\\0&1&1&2\\0&0&1&1\end{pmatrix}。
      \]`,
      options: {
        "1": String.raw`\(\begin{pmatrix}1&2&3&7\\0&1&1&2\\0&2&3&5\end{pmatrix}\)`,
        "2": String.raw`\(\begin{pmatrix}-1&3&-1&0\\-1&1&1&0\\3&1&-7&0\end{pmatrix}\)`,
        "3": String.raw`\(\begin{pmatrix}1&1&2&5\\1&-1&1&2\\1&1&2&5\end{pmatrix}\)`,
        "4": String.raw`\(\begin{pmatrix}2&1&3&6\\-1&1&1&0\\-2&2&2&1\end{pmatrix}\)`,
        "5": String.raw`\(\begin{pmatrix}1&3&2&7\\0&1&1&2\\0&1&0&1\end{pmatrix}\)`
      },
      solution: [String.raw`列運算保持列空間與簡化列梯形矩陣。選項（1）以第三列減去第二列的 2 倍可得 \((0,0,1,1)\)，即能化成目標矩陣。`, String.raw`選項（5）由第二列減第三列得到 \((0,0,1,1)\)，再調整第一列亦可化成目標矩陣。其餘三個矩陣列化簡後的秩或增廣關係與目標不同。`],
      optionAnalysis: {
        "1": "R₃−2R₂ 可直接產生目標第三列。",
        "2": "最後一欄全為 0，列運算後不可能得到目標的非零增廣欄關係。",
        "3": "第一、三列相同，秩不足。",
        "4": "列化簡所得增廣關係與目標不同。",
        "5": "R₂−R₃ 可產生目標第三列，再調整其餘列即可。"
      }
    },
    "96M-9": {
      verified: true, sourcePage: 3,
      stem: "xy 平面上放置三個半徑為 1 且兩兩相切的球，再把第四個同半徑球放在其上方並與三球相切。設下方球心為 A、B、C，上方球心為 P，選出正確敘述。",
      options: {
        "1": "A、B、C 所在平面與 xy 平面平行",
        "2": "三角形 ABC 是正三角形",
        "3": String.raw`三角形 PAB 有一邊長為 \(\sqrt2\)`,
        "4": String.raw`P 到直線 AB 的距離為 \(\sqrt3\)`,
        "5": String.raw`P 到 xy 平面的距離為 \(1+\sqrt3\)`
      },
      solution: [String.raw`下方三球都與 xy 平面相切，所以三球心高度皆為 1，故其平面平行 xy 平面。兩兩相切使 \(AB=BC=CA=2\)，所以 ABC 為正三角形。`, String.raw`P 與 A、B、C 的距離也都為 2，因此 PAB 是邊長 2 的正三角形，P 到 AB 的距離為其高 \(\sqrt3\)。上方球心相對 ABC 平面的高度是 \(2\sqrt6/3\)，故到 xy 平面距離為 \(1+2\sqrt6/3\)，不是 \(1+\sqrt3\)。`],
      optionAnalysis: {
        "1": "三個下方球心都有相同高度 1。",
        "2": "三球兩兩相切，球心距離皆為 2。",
        "3": "PAB 三邊都是 2，沒有 √2 的邊。",
        "4": "邊長 2 正三角形的高為 √3。",
        "5": "正確高度為 1+2√6/3。"
      }
    },
    "96M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a>1\)，\(f(x)=a^x\)、\(g(x)=\log_a x\)。選出正確敘述。`,
      options: {
        "1": String.raw`若 \(f(3)=6\)，則 \(g(36)=6\)`,
        "2": String.raw`\(\frac{f(238)}{f(219)}=\frac{f(38)}{f(19)}\)`,
        "3": String.raw`\(g(238)-g(219)=g(38)-g(19)\)`,
        "4": "g 圖形上任兩相異點的連線斜率必為正",
        "5": String.raw`若 \(y=5x\) 與 \(y=f(x)\) 有兩交點，則 \(y=x/5\) 與 \(y=g(x)\) 也有兩交點`
      },
      solution: [String.raw`若 \(a^3=6\)，則 \(36=a^6\)，故 \(g(36)=6\)。（2）兩邊都等於 \(a^{19}\)。因 \(a>1\)，g 嚴格遞增，所以任兩點割線斜率為正。`, String.raw`f 與 g 的圖形關於 \(y=x\) 對稱，而 \(y=5x\) 反射後是 \(y=x/5\)，交點數保持不變。因此（1）（2）（4）（5）正確。（3）左右分別是 \(\log_a(238/219)\) 與 \(\log_a2\)，不相等。`],
      optionAnalysis: {
        "1": "36=(a³)²=a⁶，故對數為 6。",
        "2": "兩個指數差都為 19。",
        "3": "238/219 不等於 38/19=2。",
        "4": "底數大於 1 的對數函數嚴格遞增。",
        "5": "互為反函數的圖形及兩條互換直線都關於 y=x 對稱。"
      }
    },
    "96M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`實係數首一三次多項式 \(f\) 滿足 \(f(1)=1、f(2)=2、f(5)=5\)。判斷 \(f(x)=0\) 必在哪些區間有實根。`,
      options: { "1": String.raw`\((-\infty,0)\)`, "2": String.raw`\((0,1)\)`, "3": String.raw`\((1,2)\)`, "4": String.raw`\((2,5)\)`, "5": String.raw`\((5,\infty)\)` },
      solution: [String.raw`令 \(h(x)=f(x)-x\)，則 h 是首一三次式，且根為 1、2、5，所以
      \[
      f(x)=x+(x-1)(x-2)(x-5)。
      \]
      因 \(f(0)=-10<0<f(1)=1\)，在 \((0,1)\) 有根。又 \(f(2)=2>0、f(3)=-1<0、f(5)=5>0\)，所以在 \((2,5)\) 內至少有實根。`],
      optionAnalysis: {
        "1": "由具體多項式可知負半軸沒有必然變號。",
        "2": "f(0) 與 f(1) 異號，必有根。",
        "3": "兩端值都為正，且實際沒有必然根。",
        "4": "f(2)>0、f(3)<0、f(5)>0，區間內必有根。",
        "5": "首一三次式在 5 之後為正，沒有必然根。"
      }
    },
    "96M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`實數 \(x\) 滿足 \(0<x<1\) 且 \(\log_x4-\log_2x=1\)，求 x。`,
      solution: [String.raw`令 \(u=\log_2x<0\)，則 \(\log_x4=2/u\)。方程變成
      \[
      \frac2u-u=1
      \quad\Longrightarrow\quad
      u^2+u-2=0。
      \]
      得 \(u=1\) 或 \(-2\)；由 \(u<0\) 取 \(-2\)，所以 \(x=2^{-2}=1/4\)。`]
    },
    "96M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`三角形 ABC 中，P 為 BC 中點，Q 在 AC 上且 \(AQ=2QC\)。已知 \(\overrightarrow{PA}=(4,3)\)、\(\overrightarrow{PQ}=(1,5)\)，求 \(\overrightarrow{BC}\)。`,
      solution: [String.raw`以 P 為原點，則 \(A=(4,3)\)，且由 P 為中點可設 \(C=-B\)。又
      \[
      Q=\frac{A+2C}{3}=(1,5)。
      \]
      因此 \(B=(A-3Q)/2=(1/2,-6)\)、\(C=(-1/2,6)\)，故
      \[
      \overrightarrow{BC}=C-B=(-1,12)。
      \]`]
    },
    "96M-14": {
      verified: true, sourcePage: 4,
      stem: "15 位評審平均給分 76；其中 92、45、55 三筆與平均相差超過 15 分，須剔除後重算其餘 12 人平均。求比賽成績。",
      solution: [String.raw`原總分為 \(15\times76=1140\)。剔除三筆共 \(92+45+55=192\) 分後，剩餘總分 \(948\)，所以
      \[
      \frac{948}{12}=79。
      \]`]
    },
    "96M-15": {
      verified: true, sourcePage: 5,
      stem: "某區 25 排座位，每排比前排多 2 席；正中間第 13 排有 64 席。求 25 排總座位數。",
      solution: ["等差數列有奇數 25 項，中間項等於全體平均數。因此總座位數為 \(25\times64=1600\)。"]
    },
    "96M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`單位圓上 \(P=(1,0)、A=(-12/13,5/13)\)，且 \(\angle APB=90^\circ\)。求另一圓上點 B。`,
      solution: [String.raw`候選點 \(B=-A=(12/13,-5/13)\) 仍在單位圓上。檢查
      \[
      (A-P)\cdot(B-P)
      =\left(-\frac{25}{13},\frac5{13}\right)
      \cdot\left(-\frac1{13},-\frac5{13}\right)=0，
      \]
      故符合直角條件，答案為 \((12/13,-5/13)\)。`]
    },
    "96M-17": {
      verified: true, sourcePage: 5,
      stem: "球帽有黑、灰、紅、藍四色，球衣有白、綠、藍三色，球鞋有黑、白、灰三色。紅帽不配灰鞋，白衣必配藍帽，求最多款式數。",
      solution: [String.raw`白衣只能配藍帽，鞋色任選，共 \(1\cdot1\cdot3=3\) 款。綠、藍兩種球衣原有
      \[
      2\cdot4\cdot3=24
      \]
      款，但每種衣色各排除「紅帽＋灰鞋」1 款，共排除 2 款。因此總數 \(3+24-2=25\)。`]
    },
    "96M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`摸到編號 k 的球時，甲案報酬為 k，乙案報酬為 \(11-k\)。已知甲案期望值為 \(67/14\)，求乙案期望值。`,
      solution: [String.raw`對每一個結果，兩案報酬和恆為 11，因此期望值也相加為 11：
      \[
      E_{\text{乙}}=11-\frac{67}{14}
      =\frac{154-67}{14}
      =\frac{87}{14}。
      \]`]
    },
    "96M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`拋物線頂點 \(V=(0,3)\)、焦點 \(F=(0,6)\)。點 \(P(a,b)\) 在拋物線上，\(Q=(a,0)\)，且 \(\angle FPQ=60^\circ\)。求 b。`,
      solution: [String.raw`準線為 \(y=0\)，所以由拋物線定義 \(PF=PQ=b\)。三角形 FPQ 是等腰三角形，頂角 \(\angle FPQ=60^\circ\)，故其餘兩角也都是 \(60^\circ\)，為正三角形。`, String.raw`因此 \(PQ=FQ\)。又
      \[
      FQ^2=a^2+36,\qquad a^2=12(b-3)
      \]
      （拋物線方程 \(x^2=12(y-3)\)）。所以
      \[
      b^2=12(b-3)+36=12b，
      \]
      取正值得 \(b=12\)。`]
    },
    "96M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`三角形 ABC 中，M 為 BC 中點，\(AB=3、AC=5、\angle BAC=120^\circ\)。求 \(\tan\angle BAM\)。`,
      solution: [String.raw`取 A 為原點、AB 沿 x 軸，則
      \[
      B=(3,0),\qquad
      C=(5\cos120^\circ,5\sin120^\circ)
      =\left(-\frac52,\frac{5\sqrt3}{2}\right)。
      \]
      中點
      \[
      M=\left(\frac14,\frac{5\sqrt3}{4}\right)。
      \]
      因 AB 為 x 軸方向，
      \[
      \tan\angle BAM=\frac{5\sqrt3/4}{1/4}=5\sqrt3。
      \]`]
    }
  });
})();
