(() => {
  Object.assign(window.MATH_CONTENT, {
    "109M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知兩個直角三角形的三邊長分別為 \(3,4,5\) 與 \(5,12,13\)。角 \(\alpha\) 的對邊長為 3、斜邊長為 5；角 \(\beta\) 的對邊長為 5、斜邊長為 13。選出正確敘述。`,
      options: {
        "1": String.raw`\(\sin\alpha>\sin\beta>\sin30^\circ\)`,
        "2": String.raw`\(\sin\alpha>\sin30^\circ>\sin\beta\)`,
        "3": String.raw`\(\sin\beta>\sin\alpha>\sin30^\circ\)`,
        "4": String.raw`\(\sin\beta>\sin30^\circ>\sin\alpha\)`,
        "5": String.raw`\(\sin30^\circ>\sin\alpha>\sin\beta\)`
      },
      solution: [
        String.raw`\(\sin\alpha=\frac35、\sin\beta=\frac5{13}\)，而 \(\sin30^\circ=\frac12\)。`,
        String.raw`因此 \(\frac35>\frac12>\frac5{13}\)，即 \(\sin\alpha>\sin30^\circ>\sin\beta\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\sin\beta=\frac5{13}<\frac12\)，不在 \(\sin30^\circ\) 之上。`,
        "2": "依三個正弦值直接比較，次序正確。",
        "3": String.raw`\(\sin\beta\) 小於另外兩者。`,
        "4": String.raw`\(\sin\beta<\sin30^\circ<\sin\alpha\)，次序恰好相反。`,
        "5": String.raw`\(\sin\alpha=\frac35>\frac12\)。`
      }
    },
    "109M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`空間中有相異四點 \(A,B,C,D\)，且
      \[
      \overrightarrow{AB}\cdot\overrightarrow{AC}
      =\overrightarrow{AB}\cdot\overrightarrow{AD}。
      \]
      選出正確敘述。`,
      options: {
        "1": String.raw`\(\overrightarrow{AB}\cdot\overrightarrow{CD}=0\)`,
        "2": String.raw`\(AC=AD\)`,
        "3": String.raw`\(\overrightarrow{AB}\) 與 \(\overrightarrow{CD}\) 平行`,
        "4": String.raw`\(\overrightarrow{AD}\cdot\overrightarrow{BC}=0\)`,
        "5": String.raw`\(A,B,C,D\) 四點在同一平面上`
      },
      solution: [
        String.raw`移項得
        \[
        \overrightarrow{AB}\cdot
        (\overrightarrow{AC}-\overrightarrow{AD})=0。
        \]`,
        String.raw`又 \(\overrightarrow{AC}-\overrightarrow{AD}=\overrightarrow{DC}\)，所以 \(\overrightarrow{AB}\perp\overrightarrow{CD}\)。`
      ],
      optionAnalysis: {
        "1": "由內積等式移項即可得到。",
        "2": "內積相等不代表兩向量長度相等。",
        "3": "題設推出垂直，不是平行。",
        "4": "題設沒有給出 AD 與 BC 的垂直關係。",
        "5": "空間中四點不一定共平面。"
      }
    },
    "109M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`正六邊形 \(ABCDEF\) 的中心為 \(O\)。下列哪個向量的終點 \(P\) 落在三角形 \(ODE\) 內部（不含邊界）？`,
      options: {
        "1": String.raw`\(\overrightarrow{OP}=\overrightarrow{OC}+\overrightarrow{OE}\)`,
        "2": String.raw`\(\overrightarrow{OP}=\frac14\overrightarrow{OC}+\frac12\overrightarrow{OE}\)`,
        "3": String.raw`\(\overrightarrow{OP}=-\frac14\overrightarrow{OC}+\frac12\overrightarrow{OE}\)`,
        "4": String.raw`\(\overrightarrow{OP}=\frac14\overrightarrow{OC}-\frac12\overrightarrow{OE}\)`,
        "5": String.raw`\(\overrightarrow{OP}=-\frac14\overrightarrow{OC}-\frac12\overrightarrow{OE}\)`
      },
      solution: [
        String.raw`以 O 為原點、正六邊形外接圓半徑為 1，可取 \(C=(1,0)、D=(1/2,\sqrt3/2)、E=(-1/2,\sqrt3/2)\)。`,
        String.raw`選項（2）給
        \[
        P=\frac14C+\frac12E=\left(0,\frac{\sqrt3}{4}\right)，
        \]
        位於三角形 \(ODE\) 的內部。其餘各點不是落在邊界，就是位於三角形外。`
      ],
      optionAnalysis: {
        "1": "向量和的終點超出三角形 ODE。",
        "2": String.raw`座標為 \((0,\sqrt3/4)\)，位於內部。`,
        "3": "終點位於三角形左側外部。",
        "4": "縱坐標為負，位於三角形下方。",
        "5": "縱坐標為負，位於三角形下方。"
      }
    },
    "109M-4": {
      verified: true, sourcePage: 2,
      stem: String.raw`令
      \[
      I=\begin{bmatrix}1&0\\0&1\end{bmatrix},\qquad
      A=\begin{bmatrix}1&1\\3&4\end{bmatrix},\qquad
      B=I+A+A^{-1}。
      \]
      選出代表 \(BA\) 的矩陣。`,
      options: {
        "1": String.raw`\(\begin{bmatrix}1&0\\0&1\end{bmatrix}\)`,
        "2": String.raw`\(\begin{bmatrix}6&0\\0&6\end{bmatrix}\)`,
        "3": String.raw`\(\begin{bmatrix}4&-1\\-3&1\end{bmatrix}\)`,
        "4": String.raw`\(\begin{bmatrix}1&1\\3&4\end{bmatrix}\)`,
        "5": String.raw`\(\begin{bmatrix}6&6\\18&24\end{bmatrix}\)`
      },
      solution: [
        String.raw`直接右乘 \(A\)：
        \[
        BA=(I+A+A^{-1})A=A+A^2+I。
        \]`,
        String.raw`因
        \[
        A^2=\begin{bmatrix}4&5\\15&19\end{bmatrix},
        \]
        故 \(BA=\begin{bmatrix}6&6\\18&24\end{bmatrix}\)。`
      ],
      optionAnalysis: {
        "1": String.raw`只保留了 \(A^{-1}A=I\)。`,
        "2": "誤把結果當成純量矩陣。",
        "3": String.raw`這是 \(A^{-1}\)，不是 \(BA\)。`,
        "4": "只保留了 A 本身。",
        "5": String.raw`由 \(BA=A+A^2+I\) 計算可得。`
      }
    },
    "109M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`數線上有多少個整數點與點 \(\sqrt{101}\) 的距離小於 5，但與點 \(\sqrt{38}\) 的距離大於 3？`,
      options: { "1": "1 個", "2": "4 個", "3": "6 個", "4": "8 個", "5": "10 個" },
      solution: [
        String.raw`由 \(|x-\sqrt{101}|<5\)，且 \(10<\sqrt{101}<11\)，可得整數 \(x=6,7,\ldots,15\)。`,
        String.raw`又 \(6<\sqrt{38}<7\)。條件 \(|x-\sqrt{38}|>3\) 排除 \(6,7,8,9\)，留下 \(10,11,\ldots,15\)，共 6 個。`
      ],
      optionAnalysis: {
        "1": "只計入單一端點附近的整數。",
        "2": "排除範圍多算了兩個整數。",
        "3": "符合條件的是 10 至 15，共 6 個。",
        "4": String.raw`未完整套用與 \(\sqrt{38}\) 距離大於 3 的限制。`,
        "5": "只使用第一個距離條件。"
      }
    },
    "109M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`連續投擲一顆公正骰子兩次，點數依序為 \(a,b\)。求
      \[
      \log(a^2)+\log b>1
      \]
      的機率。`,
      options: {
        "1": String.raw`\(\frac13\)`, "2": String.raw`\(\frac12\)`,
        "3": String.raw`\(\frac23\)`, "4": String.raw`\(\frac34\)`,
        "5": String.raw`\(\frac56\)`
      },
      solution: [
        String.raw`由對數性質，
        \[
        \log(a^2b)>1\Longleftrightarrow a^2b>10。
        \]`,
        String.raw`按 \(a=1,\ldots,6\) 計數，符合的 \(b\) 個數依序為 \(0,4,5,6,6,6\)，共 27 組。機率為 \(\frac{27}{36}=\frac34\)。`
      ],
      optionAnalysis: {
        "1": "符合組數不只 12 組。",
        "2": "漏計較大 a 時所有 b 都符合的情況。",
        "3": "符合組數為 27，不是 24。",
        "4": "27 組除以全部 36 組，得到 3/4。",
        "5": String.raw`把部分不符合 \(a^2b>10\) 的組合也計入。`
      }
    },
    "109M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`函數 \(y=-\sqrt3x^3\) 的圖形上有兩點 \(P,Q\)，到原點的距離都為 1。已知 \(P=(\cos\theta,\sin\theta)\)，求 \(Q\) 的坐標。`,
      options: {
        "1": String.raw`\((\cos(-\theta),\sin(-\theta))\)`,
        "2": String.raw`\((-\cos\theta,\sin\theta)\)`,
        "3": String.raw`\((\cos(-\theta),-\sin\theta)\)`,
        "4": String.raw`\((-\cos\theta,\sin(-\theta))\)`,
        "5": String.raw`\((\cos\theta,-\sin\theta)\)`
      },
      solution: [
        String.raw`函數 \(f(x)=-\sqrt3x^3\) 是奇函數，圖形關於原點對稱。單位圓與圖形的兩個交點互為相反數。`,
        String.raw`所以
        \[
        Q=(-\cos\theta,-\sin\theta)=(-\cos\theta,\sin(-\theta))。
        \]`
      ],
      optionAnalysis: {
        "1": "只對角度取負，得到關於 x 軸的對稱點。",
        "2": "只改變 x 坐標符號。",
        "3": "等同於只改變 y 坐標符號。",
        "4": "兩個坐標都取相反數，符合原點對稱。",
        "5": "只改變 y 坐標符號。"
      }
    },
    "109M-8": {
      verified: true, sourcePage: 3,
      stem: "丟三顆公正骰子。三點數全為奇數或全為偶數時符合條件 A；三點數由小到大成等差數列時符合條件 B。只符合一個條件得 100 元，兩條件都符合得 200 元。已知其中兩顆點數為 1、3，且獎金為 100 元，未知點數可能為何？",
      options: { "1": "2", "2": "3", "3": "4", "4": "5", "5": "6" },
      solution: [
        "未知點數為 2 時，只有 B 成立；為 3 時，只有 A 成立；為 5 時，A、B 都成立而得 200 元。",
        "未知點數為 4 或 6 時，兩條件都不成立。因此恰得 100 元時，未知點數可能是 2 或 3。"
      ],
      optionAnalysis: {
        "1": "1、2、3 成等差，只符合 B，得 100 元。",
        "2": "1、3、3 全為奇數，只符合 A，得 100 元。",
        "3": "1、3、4 不符合 A 或 B。",
        "4": "1、3、5 同時符合 A、B，會得 200 元。",
        "5": "1、3、6 不符合 A 或 B。"
      }
    },
    "109M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`坐標平面上有通過原點的直線 \(L\)，以及以原點為圓心、半徑為 2 的圓 \(\Gamma\)。圓上相異兩點 \(P,Q\) 滿足 \(OP、OQ\) 分別與 \(L\) 所夾的銳角都是 \(30^\circ\)。選出 \(\overrightarrow{OP}\cdot\overrightarrow{OQ}\) 可能的值。`,
      options: {
        "1": String.raw`\(2\sqrt3\)`, "2": String.raw`\(-2\sqrt3\)`,
        "3": "0", "4": String.raw`\(-2\)`, "5": String.raw`\(-4\)`
      },
      solution: [
        String.raw`符合條件的射線分布在直線 L 的兩側與反向延長線兩側；相異兩向量的夾角可能為 \(60^\circ、120^\circ、180^\circ\)。`,
        String.raw`因兩向量長度都是 2，內積為 \(4\cos\phi\)，可能值為 \(2,-2,-4\)。選項中列出的可能值是 \(-2、-4\)。`
      ],
      optionAnalysis: {
        "1": String.raw`需要夾角 \(30^\circ\)，但兩射線夾角不會是 \(30^\circ\)。`,
        "2": String.raw`需要夾角 \(150^\circ\)，不在可能夾角中。`,
        "3": String.raw`需要夾角 \(90^\circ\)，不在可能夾角中。`,
        "4": String.raw`夾角 \(120^\circ\) 時，內積為 \(-2\)。`,
        "5": String.raw`兩向量反向、夾角 \(180^\circ\) 時，內積為 \(-4\)。`
      }
    },
    "109M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`考慮多項式
      \[
      f(x)=3x^4+11x^2-4。
      \]
      選出正確敘述。`,
      options: {
        "1": String.raw`\(y=f(x)\) 與 y 軸交點的 y 坐標小於 0`,
        "2": String.raw`\(f(x)=0\) 有 4 個實根`,
        "3": String.raw`\(f(x)=0\) 至少有一個有理根`,
        "4": String.raw`\(f(x)=0\) 有一根介於 0 與 1 之間`,
        "5": String.raw`\(f(x)=0\) 有一根介於 1 與 2 之間`
      },
      solution: [
        String.raw`令 \(u=x^2\)，則
        \[
        3u^2+11u-4=(3u-1)(u+4)。
        \]
        實根只有 \(x=\pm1/\sqrt3\)。`,
        String.raw`又 \(f(0)=-4<0\)，所以（1）正確；正根 \(1/\sqrt3\) 介於 0 與 1 之間，所以（4）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`\(f(0)=-4<0\)。`,
        "2": String.raw`\(x^2=-4\) 沒有實根，因此只有 2 個實根。`,
        "3": String.raw`實根 \(\pm1/\sqrt3\) 都不是有理數。`,
        "4": String.raw`正根 \(1/\sqrt3\) 介於 0 與 1 之間。`,
        "5": "唯一正根小於 1。"
      }
    },
    "109M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`實數 \(a,b,c\) 滿足
      \[
      \log a=1.1,\qquad\log b=2.2,\qquad\log c=3.3。
      \]
      選出正確敘述。`,
      options: {
        "1": String.raw`\(a+c=2b\)`, "2": String.raw`\(1<a<10\)`,
        "3": String.raw`\(1000<c<2000\)`, "4": String.raw`\(b=2a\)`,
        "5": String.raw`\(a,b,c\) 成等比數列`
      },
      solution: [
        String.raw`由 \(\log c=3.3\)，得 \(c=10^{3.3}=1000\cdot10^{0.3}\)。因 \(10^{0.3}\) 約為 2，故 \(1000<c<2000\)。`,
        String.raw`又 \(\log b-\log a=\log c-\log b=1.1\)，所以 \(b/a=c/b\)，即 \(a,b,c\) 成等比數列。`
      ],
      optionAnalysis: {
        "1": "等比數列一般不滿足首末兩項和等於中項兩倍。",
        "2": String.raw`\(\log a=1.1>1\)，所以 \(a>10\)。`,
        "3": String.raw`\(c=10^{3.3}\) 介於 1000 與 2000。`,
        "4": String.raw`\(b/a=10^{1.1}\)，不是 2。`,
        "5": "相鄰兩項的常用對數差相同，因此成等比。"
      }
    },
    "109M-12": {
      verified: true, sourcePage: 4,
      stem: `下表為某國 2011～2018 年就業資料（總就業、農業就業以萬人計；男性農業就業及各年齡層以千人計）：
      2011：1070.9、54.2、386.3；39 歲以下 67.6、40～49 歲 85.4、50～64 歲 164.2、65 歲以上 69.1
      2012：1086.0、54.4、394.9；67.5、87.0、169.5、70.9
      2013：1096.7、54.4、391.5；66.6、83.9、171.3、69.7
      2014：1107.9、54.8、391.2；65.8、79.8、173.0、72.6
      2015：1119.8、55.5、403.1；71.7、76.9、181.3、73.2
      2016：1126.7、55.7、404.5；77.4、77.4、176.4、73.3
      2017：1135.2、55.7、405.1；73.9、78.1、178.3、74.8
      2018：1143.4、56.1、415.1；72.0、78.8、184.9、79.4
      根據表格選出正確敘述。`,
      options: {
        "1": "2013～2018 年，65 歲以上男性農業就業人口逐年遞增",
        "2": "2013～2018 年，50～64 歲男性農業就業人口逐年遞增",
        "3": "每年男性農業就業人口占總就業人口的比率都小於 5%",
        "4": "每年 50～64 歲男性農業就業人口都少於 49 歲以下男性農業就業人口",
        "5": "65 歲以上男性農業就業人口，2018 年比 2011 年增加不到一萬人"
      },
      solution: [
        "65 歲以上欄從 2013 年的 69.7 依序增為 72.6、73.2、73.3、74.8、79.4，故（1）正確；50～64 歲欄在 2016 年下降，故（2）錯。",
        "男性農業就業人口以千人計，而總就業人口以萬人計；換成同單位後逐年比率皆小於 5%，故（3）正確。",
        "50～64 歲人數每年都高於 49 歲以下兩組合計；2018 與 2011 的 65 歲以上差為 10.3 千人，超過一萬人，所以（4）、（5）錯。"
      ],
      optionAnalysis: {
        "1": "69.7、72.6、73.2、73.3、74.8、79.4，逐年遞增。",
        "2": "2015 年 181.3，2016 年降為 176.4。",
        "3": "換成相同單位後，各年比率皆未達 5%。",
        "4": "50～64 歲欄反而高於 39 歲以下與 40～49 歲兩欄合計。",
        "5": "增加 10.3 千人，即 1.03 萬人。"
      }
    },
    "109M-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`四面體 \(OABC\) 中，三角形 \(OAB\) 與 \(OAC\) 均為正三角形，且 \(\angle BOC=30^\circ\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(BC>OC\)`,
        "2": String.raw`三角形 \(OBC\) 是等腰三角形`,
        "3": String.raw`三角形 \(OBC\) 的面積大於三角形 \(OAB\) 的面積`,
        "4": String.raw`\(\angle CAB=30^\circ\)`,
        "5": String.raw`平面 OAB 與平面 OAC 的夾角（以銳角計）小於 \(30^\circ\)`
      },
      solution: [
        String.raw`兩個正三角形共有 OA，故 \(OB=OA=OC\)，所以三角形 OBC 是等腰三角形。`,
        String.raw`令共同邊長為 1。由 \(\angle BOC=30^\circ\)，得
        \[
        \overrightarrow{AB}\cdot\overrightarrow{AC}
        =(\overrightarrow{OB}-\overrightarrow{OA})\cdot
        (\overrightarrow{OC}-\overrightarrow{OA})
        =\frac{\sqrt3}{2}。
        \]
        又 \(AB=AC=1\)，因此 \(\angle CAB=30^\circ\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(BC=2\,OC\sin15^\circ<OC\)。`,
        "2": String.raw`由 \(OB=OC\) 可知是等腰三角形。`,
        "3": String.raw`兩者面積分別為 \(\frac12s^2\sin30^\circ\) 與 \(\frac12s^2\sin60^\circ\)，前者較小。`,
        "4": String.raw`由向量內積可得 \(\cos\angle CAB=\sqrt3/2\)。`,
        "5": "由兩平面的法向量或二面角計算，夾角並非小於 30°。"
      }
    },
    "109M-14": {
      verified: true, sourcePage: 5,
      stem: "網路賣家以 200 元成本取得模型，先以成本的 5 倍定價；之後每次調降售價，都把當時的利潤減少一半。求調降三次後的售價。",
      solution: [
        String.raw`原售價為 \(200\times5=1000\) 元，所以原利潤為 800 元。`,
        String.raw`利潤連續減半三次後為 \(800/2^3=100\) 元，售價為成本加利潤，即 300 元。`
      ]
    },
    "109M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`按鈕遊戲機可按三次。第一次出現黑、白的機率各為 \(\frac12\)；第二、三次出現與前一次同色的機率為 \(\frac13\)，不同色為 \(\frac23\)。求三次均同色的機率。`,
      solution: [
        "第一次不論出現哪一色都可以；要三次同色，第二次與第三次都必須和前一次同色。",
        String.raw`所求機率為
        \[
        1\cdot\frac13\cdot\frac13=\frac19。
        \]`
      ]
    },
    "109M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`直線 \(2x+y=10\) 被平行線 \(x-2y+15=0\) 與 \(x-2y=0\) 截出線段 \(S\)（含端點）。若直線 \(3x-y=c\) 與 \(S\) 有交點，求 \(c\) 的最小值。`,
      solution: [
        String.raw`兩個端點分別由聯立方程得到 \((1,8)\) 與 \((4,2)\)。`,
        String.raw`線性函數 \(3x-y\) 在線段上的最小值必在端點取得。兩端值為 \(-5、10\)，所以最小值是 \(-5\)。`
      ]
    },
    "109M-17": {
      verified: true, sourcePage: 6,
      stem: String.raw`平面上有箏形 \(ABCD\)，其中
      \[
      AB=BC=\sqrt2,\qquad AD=CD=2,\qquad\angle BAD=135^\circ。
      \]
      求 \(AC\)。`,
      solution: [
        String.raw`在三角形 ABD 中，由餘弦定理
        \[
        BD^2=(\sqrt2)^2+2^2-2(\sqrt2)(2)\cos135^\circ=10。
        \]`,
        String.raw`箏形的對稱軸 BD 垂直平分 AC。三角形 ABD 面積為 \(\frac12(\sqrt2)(2)\sin135^\circ=1\)，所以 A 到 BD 的高為 \(2/\sqrt{10}\)。`,
        String.raw`因此 \(AC\) 為高的 2 倍：
        \[
        AC=\frac4{\sqrt{10}}=\frac{2\sqrt{10}}5。
        \]`
      ]
    },
    "109M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`空間中有 \(A(1,7,2)、B(2,-6,3)、C(0,-4,1)\)。直線 \(L\) 通過 A，與直線 BC 相交且垂直。求交點坐標。`,
      solution: [
        String.raw`設垂足 \(H=B+t(C-B)\)。其中
        \[
        C-B=(-2,2,-2)。
        \]`,
        String.raw`由 \((A-H)\cdot(C-B)=0\) 解得 \(t=\frac52\)。因此
        \[
        H=(2,-6,3)+\frac52(-2,2,-2)=(-3,-1,-2)。
        \]`
      ]
    },
    "109M-19": {
      verified: true, sourcePage: 6,
      stem: "拋物線上四點構成等腰梯形，梯形與拋物線的對稱軸重合。上底長 4、下底長 6、高 14，求拋物線的焦距。",
      solution: [
        String.raw`設拋物線為 \(y=ax^2\)。上下底端點的橫坐標絕對值分別為 2、3，因此兩底高度差
        \[
        14=a(3^2-2^2)=5a，
        \]
        得 \(a=14/5\)。`,
        String.raw`標準式 \(x^2=4py\) 給 \(a=1/(4p)\)，所以
        \[
        p=\frac1{4a}=\frac5{56}。
        \]`
      ]
    },
    "109M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`月亮形灰色區域由兩段共端點 \(Q,T\) 的圓弧圍成。外弧是以 \(QT\) 為直徑的半圓，\(QT=2\sqrt3\)；內弧的圓心為 P，且 \(PQ=PT=2\)。若灰色區域面積為 \(a\pi+\sqrt b\)，其中 \(a\) 為有理數、\(b\) 為整數，求 \(a,b\)。`,
      solution: [
        String.raw`半圓半徑為 \(\sqrt3\)，面積為 \(\frac{3\pi}{2}\)。在半徑 2 的圓中，弦 \(QT=2\sqrt3\) 所對圓心角為 \(120^\circ\)。`,
        String.raw`內側弓形面積為扇形減三角形：
        \[
        \frac{120^\circ}{360^\circ}\pi(2)^2
        -\frac12(2)(2)\sin120^\circ
        =\frac{4\pi}{3}-\sqrt3。
        \]`,
        String.raw`灰色面積
        \[
        \frac{3\pi}{2}-\left(\frac{4\pi}{3}-\sqrt3\right)
        =\frac{\pi}{6}+\sqrt3，
        \]
        所以 \(a=\frac16、b=3\)。`
      ]
    }
  });
})();
