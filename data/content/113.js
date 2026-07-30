(() => {
  Object.assign(window.MATH_CONTENT, {
    "113A-1": {
      verified: true, sourcePage: 1,
      stem: "服用某藥物後，體內藥物殘留量隨時間呈指數型衰退。已知服藥 2 小時後仍殘留一半劑量，試選出正確的敘述。",
      options: {
        "1": String.raw`3 小時後殘留 \(\frac13\) 劑量`,
        "2": String.raw`4 小時後殘留 \(\frac14\) 劑量`,
        "3": String.raw`6 小時後殘留 \(\frac16\) 劑量`,
        "4": String.raw`8 小時後殘留 \(\frac18\) 劑量`,
        "5": String.raw`10 小時後殘留 \(\frac1{10}\) 劑量`
      },
      solution: [
        String.raw`每 2 小時殘留量乘 \(\frac12\)。經過 \(t\) 小時的殘留比例為
        \[
        \left(\frac12\right)^{t/2}。
        \]`,
        String.raw`4 小時包含兩個半衰期，因此殘留
        \[
        \left(\frac12\right)^2=\frac14。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`指數衰退不是以時間作分母；3 小時為 \((\frac12)^{3/2}\)。`,
        "2": String.raw`4 小時為兩個半衰期，殘留 \(\frac14\)。`,
        "3": String.raw`6 小時後為 \((\frac12)^3=\frac18\)，不是 \(\frac16\)。`,
        "4": String.raw`8 小時後為 \((\frac12)^4=\frac1{16}\)。`,
        "5": String.raw`10 小時後為 \((\frac12)^5=\frac1{32}\)。`
      }
    },
    "113A-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`如官方附圖，\(OABC-DEFG\) 為正方體。試選出與
      \[
      \overrightarrow{AD}\times\overrightarrow{AG}
      \]
      平行的向量。`,
      options: {
        "1": String.raw`\(\overrightarrow{AE}\)`,
        "2": String.raw`\(\overrightarrow{BE}\)`,
        "3": String.raw`\(\overrightarrow{CE}\)`,
        "4": String.raw`\(\overrightarrow{DE}\)`,
        "5": String.raw`\(\overrightarrow{OE}\)`
      },
      solution: [
        String.raw`以 \(A\) 為原點，令 \(\overrightarrow{AB},\overrightarrow{AO},\overrightarrow{AE}\) 分別為三坐標軸單位向量，則
        \[
        \overrightarrow{AD}=(0,1,1),\qquad
        \overrightarrow{AG}=(1,1,1)。
        \]`,
        String.raw`所以
        \[
        \overrightarrow{AD}\times\overrightarrow{AG}
        =(0,1,-1)。
        \]
        而 \(\overrightarrow{OE}=(0,-1,1)\)，兩者互為負倍數，故平行。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\overrightarrow{AE}\) 只沿鉛直方向，與外積方向不同。`,
        "2": String.raw`\(\overrightarrow{BE}\) 的三個分量不符合 \((0,1,-1)\) 的比例。`,
        "3": String.raw`\(\overrightarrow{CE}\) 並非同時垂直於 \(AD、AG\)。`,
        "4": String.raw`\(\overrightarrow{DE}\) 只沿正方體的一條水平稜。`,
        "5": String.raw`\(\overrightarrow{OE}=-(0,1,-1)\)，與外積平行。`
      }
    },
    "113A-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`設
      \[
      a\in\{-6,-4,-2,2,4,6\}。
      \]
      已知 \(a\) 是實係數三次多項式 \(f(x)\) 的最高次項係數，且 \(y=f(x)\) 與 \(x\) 軸三個交點的 \(x\) 坐標形成首項 \(-7\)、公差 \(a\) 的等差數列。求有多少個 \(a\) 使 \(f(0)>0\)。`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "5 個" },
      solution: [
        String.raw`三根為 \(-7,-7+a,-7+2a\)，所以
        \[
        f(x)=a(x+7)(x+7-a)(x+7-2a)。
        \]`,
        String.raw`故
        \[
        f(0)=7a(7-a)(7-2a)。
        \]
        逐一代入六個候選值，只有 \(a=2\) 時為正；其餘皆為負。`,
        String.raw`因此符合者只有 1 個。`
      ],
      optionAnalysis: {
        "1": String.raw`六個候選值中只有 \(a=2\) 使乘積為正。`,
        "2": String.raw`需同時考慮最高次係數 \(a\) 與三個根因子的符號。`,
        "3": String.raw`不能只按 \(a\) 的正負各算一半。`,
        "4": String.raw`當 \(a=4、6\) 時，最後一個因子已變號，乘積為負。`,
        "5": String.raw`負的 \(a\) 三種情況皆使 \(f(0)<0\)。`
      }
    },
    "113A-4": {
      verified: true, sourcePage: 2,
      stem: String.raw`求在 \(0\le x<2\pi\) 中，方程式
      \[
      \sin\left(x+\frac{\pi}{6}\right)=\sin x+\sin\frac{\pi}{6}
      \]
      的實數解個數。`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "5 個（含）以上" },
      solution: [
        String.raw`展開並整理：
        \[
        \frac{\sqrt3}{2}\sin x+\frac12\cos x
        =\sin x+\frac12，
        \]
        即
        \[
        \cos x-1=(2-\sqrt3)\sin x。
        \]`,
        String.raw`用半角公式因式分解：
        \[
        2\sin\frac x2\left[-\sin\frac x2-(2-\sqrt3)\cos\frac x2\right]=0。
        \]
        第一因子在範圍內給 \(x=0\)；第二因子在 \(\frac x2\in[0,\pi)\) 中另有一解。`,
        String.raw`所以共有 2 個解。`
      ],
      optionAnalysis: {
        "1": String.raw`除了 \(x=0\)，另一個半角方程式仍有一解。`,
        "2": String.raw`兩個因子在指定範圍各提供一個解。`,
        "3": String.raw`半角的取值範圍是 \([0,\pi)\)，不能重複加入週期解。`,
        "4": String.raw`未限制 \(0\le x<2\pi\) 會多算週期解。`,
        "5": String.raw`此方程式在一個完整週期內不會有五個以上解。`
      }
    },
    "113A-5": {
      verified: true, sourcePage: 2,
      stem: "將 1 到 50 平分成甲、乙兩組，每組 25 個數，且甲組中位數比乙組中位數小 1。求分法數。",
      options: {
        "1": String.raw`\(\binom{50}{25}\)`,
        "2": String.raw`\(\binom{48}{24}\)`,
        "3": String.raw`\(\binom{24}{12}\)`,
        "4": String.raw`\(\binom{24}{12}^2\)`,
        "5": String.raw`\(\binom{48}{24}\binom{24}{12}\)`
      },
      solution: [
        String.raw`每組 25 個數，中位數是第 13 小。若兩中位數為 \(k、k+1\)，兩組各須從 \(1,\ldots,k-1\) 取 12 個，因此 \(k-1=24\)，故兩中位數必為 25、26。`,
        String.raw`固定 25 在甲、26 在乙。從 \(1,\ldots,24\) 選 12 個給甲，有 \(\binom{24}{12}\) 種；再從 \(27,\ldots,50\) 選 12 個給甲，也有 \(\binom{24}{12}\) 種。`,
        String.raw`總數為
        \[
        \binom{24}{12}^2。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`這是任意平分的數量，未限制兩組中位數。`,
        "2": String.raw`固定 25、26 後仍須分別控制其上下兩側各取 12 個。`,
        "3": String.raw`只完成中位數一側的分配，漏掉另一側。`,
        "4": String.raw`低於 25 與高於 26 的 24 個數各選 12 個，故為平方。`,
        "5": String.raw`把兩個並非獨立對應的選擇重複計數。`
      }
    },
    "113A-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`同一平面上兩砲台 \(A、B\) 相距 7 公里，\(A\) 在 \(B\) 正東方。兩砲台分別向西偏北 \(\theta\)、東偏北 \(\theta\) 發射，皆命中 9 公里外同一目標 \(P\)。接著 \(A\) 改向西偏北 \(\frac\theta2\) 發射至 9 公里外的 \(Q\)。求 \(BQ\)。`,
      options: { "1": "4 公里", "2": "4.5 公里", "3": "5 公里", "4": "5.5 公里", "5": "6 公里" },
      solution: [
        String.raw`在等腰三角形 \(ABP\) 中，\(AP=BP=9、AB=7\)，且底角為 \(\theta\)。由餘弦定理
        \[
        9^2=7^2+9^2-2(7)(9)\cos\theta，
        \]
        得 \(\cos\theta=\frac7{18}\)。`,
        String.raw`因 \(\theta\) 為銳角，
        \[
        \cos\frac\theta2=\sqrt{\frac{1+\cos\theta}{2}}
        =\sqrt{\frac{25}{36}}=\frac56。
        \]`,
        String.raw`在 \(\triangle ABQ\) 中，\(AB=7、AQ=9\)，夾角為 \(\frac\theta2\)，故
        \[
        BQ^2=7^2+9^2-2(7)(9)\frac56=25，
        \]
        所以 \(BQ=5\)。`
      ],
      optionAnalysis: {
        "1": String.raw`未先由原目標 \(P\) 求出 \(\theta\) 的半角餘弦。`,
        "2": String.raw`可能把 \(7\) 公里誤當成半底長。`,
        "3": String.raw`餘弦定理代入 \(\cos(\theta/2)=5/6\) 得 \(BQ=5\)。`,
        "4": String.raw`不符合三角形 \(ABQ\) 的精確餘弦定理結果。`,
        "5": String.raw`把半角方向誤用成原角 \(\theta\)。`
      }
    },
    "113A-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`令 \(\Gamma\) 為所有滿足 \(y=\log x\) 的點 \((x,y)\) 所成圖形。試選出與 \(\Gamma\) 完全相同的關係式。`,
      options: {
        "1": String.raw`\(y+\frac12=\log(5x)\)`,
        "2": String.raw`\(2y=\log(x^2)\)`,
        "3": String.raw`\(3y=\log(x^3)\)`,
        "4": String.raw`\(x=10^y\)`,
        "5": String.raw`\(x^3=10^{y^3}\)`
      },
      solution: [
        String.raw`選項（3）中 \(\log(x^3)\) 要求 \(x>0\)，且可化為 \(3\log x\)，所以等價於 \(y=\log x\)。`,
        String.raw`選項（4）是常用對數定義的等價指數式，也與原圖完全相同。`,
        String.raw`選項（2）雖形式上可約成 \(y=\log|x|\)，但 \(x^2>0\) 允許 \(x<0\)，比原圖多出左半平面部分。其餘式子也不等價。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\log5\ne\frac12\)，移項後不等於 \(y=\log x\)。`,
        "2": String.raw`因 \(x^2\) 允許負 \(x\)，圖形還包含 \(y=\log|x|\) 的左支。`,
        "3": String.raw`定義域迫使 \(x>0\)，且兩邊除以 3 後正是原式。`,
        "4": String.raw`\(y=\log x\) 與 \(x=10^y\) 完全等價。`,
        "5": String.raw`取對數得到 \(3\log x=y^3\)，不是 \(y=\log x\)。`
      }
    },
    "113A-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`對任一正整數 \(n\ge2\)，令 \(T_n\) 表示邊長為 \(n,n+1,n+2\) 的三角形。試選出正確的選項。`,
      options: {
        "1": String.raw`所有 \(T_n\) 都是銳角三角形`,
        "2": String.raw`\(T_2,T_3,\ldots,T_{10}\) 的周長形成等差數列`,
        "3": String.raw`\(T_n\) 的面積隨 \(n\) 增大而增大`,
        "4": String.raw`\(T_5\) 的三高依序形成等差數列`,
        "5": String.raw`\(T_3\) 的最大角大於 \(T_2\) 的最大角`
      },
      solution: [
        String.raw`周長為 \(3n+3\)，隨 \(n\) 每增加 1 就增加 3，因此選項（2）正確。`,
        String.raw`用海龍公式，半周長 \(s=\frac{3n+3}{2}\)，面積平方為
        \[
        s(s-n)(s-n-1)(s-n-2)，
        \]
        各正因子隨 \(n\) 增大，故面積嚴格增大，選項（3）正確。`,
        String.raw`\(T_2\) 邊長 \(2,3,4\)，因 \(4^2>2^2+3^2\) 是鈍角三角形；\(T_3\) 邊長 \(3,4,5\) 為直角三角形，故其最大角反而較小。三高與三邊成反比，\(1/5,1/6,1/7\) 也不成等差。`
      ],
      optionAnalysis: {
        "1": String.raw`\(T_2\) 的最大邊平方 16 大於另外兩邊平方和 13，是鈍角。`,
        "2": String.raw`周長通式為 \(3n+3\)，公差固定為 3。`,
        "3": String.raw`海龍公式的四個正因子皆隨 \(n\) 增大。`,
        "4": String.raw`三高比例為 \(\frac15:\frac16:\frac17\)，不成等差。`,
        "5": String.raw`\(T_3\) 最大角為 \(90^\circ\)，小於 \(T_2\) 的鈍角。`
      }
    },
    "113A-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`A、B 兩物種平均身長分別為 \(5.2、6\)，身長標準差為 \(0.3、0.1\)。體重 \(y\) 對身長 \(x\) 的迴歸直線分別為
      \[
      L_A:y=2x-0.6,\qquad L_B:y=1.5x+0.4，
      \]
      相關係數為 \(0.6、0.3\)。現有個體 \(P=(5.6,8.6)\)，試選出正確的選項。`,
      options: {
        "1": String.raw`\(\bar y_A<\bar y_B\)`,
        "2": "A 物種體重標準差小於 B 物種",
        "3": String.raw`就 A 而言，P 的體重與平均體重差的絕對值大於一個標準差`,
        "4": String.raw`P 到 \(L_A\) 的距離小於到 \(L_B\) 的距離`,
        "5": String.raw`P 到 \((\bar x_A,\bar y_A)\) 的距離小於到 \((\bar x_B,\bar y_B)\) 的距離`
      },
      solution: [
        String.raw`迴歸線通過平均點，故
        \[
        \bar y_A=2(5.2)-0.6=9.8,\qquad
        \bar y_B=1.5(6)+0.4=9.4。
        \]`,
        String.raw`由迴歸斜率 \(r\frac{\sigma_y}{\sigma_x}\)，得
        \[
        \sigma_{y,A}=\frac{2(0.3)}{0.6}=1,\qquad
        \sigma_{y,B}=\frac{1.5(0.1)}{0.3}=0.5。
        \]`,
        String.raw`P 對 A 的體重差為 \(|8.6-9.8|=1.2>1\)，所以選項（3）正確。計算點線距離與兩平均點距離，也可知（4）、（5）皆反向。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\bar y_A=9.8>\bar y_B=9.4\)。`,
        "2": String.raw`A、B 體重標準差分別為 1、0.5，A 較大。`,
        "3": String.raw`P 與 A 平均體重相差 1.2，超過 A 的一個標準差 1。`,
        "4": String.raw`P 到 \(L_A\) 距離約 0.894，到 \(L_B\) 約 0.111，前者較大。`,
        "5": String.raw`P 到 A 平均點距離約 1.265，到 B 平均點約 0.894。`
      }
    },
    "113A-10": {
      verified: true, sourcePage: 3,
      stem: "坐標平面上有一正方形與其左側的正六邊形，兩者都有一邊在 x 軸上、中心在 x 軸上方，且恰有一交點 P。正方形邊長為 6，P 到 x 軸距離為 2√3。試選出正確的選項。",
      options: {
        "1": "正方形中心 A 到 x 軸距離大於正六邊形中心 B",
        "2": "正六邊形邊長為 6",
        "3": String.raw`\(\overrightarrow{BA}=(7,3-2\sqrt3)\)`,
        "4": String.raw`\(AP>10\)`,
        "5": String.raw`直線 \(AP\) 斜率大於 \(-\frac13\)`
      },
      solution: [
        String.raw`正六邊形右端點 \(P\) 與中心同高，故其內切圓半徑為 \(2\sqrt3\)。若邊長為 \(s\)，則 \(\frac{\sqrt3}{2}s=2\sqrt3\)，得 \(s=4\)。`,
        String.raw`可取 \(B=(0,2\sqrt3)、P=(4,2\sqrt3)\)。正方形左邊通過 \(P\)，中心為
        \[
        A=(7,3)。
        \]
        因此
        \[
        \overrightarrow{BA}=(7,3-2\sqrt3)，
        \]
        選項（3）正確。`,
        String.raw`直線 \(AP\) 斜率為
        \[
        \frac{2\sqrt3-3}{4-7}
        =-\frac{2\sqrt3-3}{3}>-\frac13，
        \]
        選項（5）正確；且 \(AP\) 遠小於 10。`
      ],
      optionAnalysis: {
        "1": String.raw`A 高 3，B 高 \(2\sqrt3\approx3.464\)，A 較低。`,
        "2": String.raw`由六邊形內切圓半徑求得邊長為 4。`,
        "3": String.raw`兩中心坐標相減即得 \((7,3-2\sqrt3)\)。`,
        "4": String.raw`\(AP=\sqrt{9+(2\sqrt3-3)^2}\)，遠小於 10。`,
        "5": String.raw`精確斜率約為 \(-0.155\)，確實大於 \(-\frac13\)。`
      }
    },
    "113A-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`方程組
      \[
      \begin{cases}ax+6y=6\\x+by=1\end{cases}
      \]
      中，\(a\) 由公平骰子點數決定；硬幣正面時 \(b=1\)，反面時 \(b=2\)。試選出正確的選項。`,
      options: {
        "1": String.raw`\(P(a=b)=\frac13\)`,
        "2": String.raw`方程組無解機率為 \(\frac1{12}\)`,
        "3": String.raw`方程組有唯一解機率為 \(\frac56\)`,
        "4": String.raw`硬幣反面且方程組有解機率為 \(\frac12\)`,
        "5": String.raw`在硬幣反面且有解下，\(x>0\) 的條件機率為 \(\frac25\)`
      },
      solution: [
        String.raw`係數行列式為 \(ab-6\)。共有 12 個等可能 \((a,b)\)。行列式為 0 的情況是 \((6,1)\)、\((3,2)\)：前者有無限多解，後者無解。`,
        String.raw`因此無解機率為 \(\frac1{12}\)，唯一解共有其餘 10 種，機率 \(\frac{10}{12}=\frac56\)。`,
        String.raw`\(a=b\) 只有 \((1,1)、(2,2)\)，機率 \(\frac16\)。硬幣反面且有解有 5 種，聯立可得 \(x=\frac3{a-3}\)，其中 \(a=4,5,6\) 為正，條件機率為 \(\frac35\)。`
      ],
      optionAnalysis: {
        "1": String.raw`相等只有 2 個結果，機率為 \(2/12=1/6\)。`,
        "2": String.raw`只有 \((a,b)=(3,2)\) 無解，機率 \(\frac1{12}\)。`,
        "3": String.raw`排除兩個行列式為 0 的結果，10 個有唯一解。`,
        "4": String.raw`反面有 6 種，其中 \(a=3\) 無解，故機率是 \(5/12\)。`,
        "5": String.raw`合法的 5 種中有 3 種使 \(x>0\)，條件機率為 \(\frac35\)。`
      }
    },
    "113A-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`給定 \(A=(1,0)、B=(0,1)、C=(-1,0)\)，令 \(\Gamma\) 為 \(\triangle ABC\) 經
      \[
      T=\begin{bmatrix}3&0\\a&1\end{bmatrix}
      \]
      變換後的圖形，其中 \(a\) 為實數。試選出正確的選項。`,
      options: {
        "1": String.raw`若 \(a=0\)，則 \(\Gamma\) 為等腰直角三角形`,
        "2": String.raw`\(\triangle ABC\) 邊上至少有兩點經 \(T\) 後坐標不變`,
        "3": String.raw`\(\Gamma\) 必有部分落在第四象限`,
        "4": String.raw`平面上找得到圖形 \(\Omega\) 經 \(T\) 後為 \(\triangle ABC\)`,
        "5": String.raw`\(\Gamma\) 面積為定值`
      },
      solution: [
        String.raw`變換為 \((x,y)\mapsto(3x,ax+y)\)，且 \(\det T=3\ne0\)，所以 \(T\) 可逆，選項（4）正確。面積固定放大 \(|\det T|=3\) 倍，選項（5）正確。`,
        String.raw`固定點滿足 \(3x=x\)，故 \(x=0\)；整條 \(y\) 軸都固定。原三角形邊界上至少有 \(B=(0,1)\) 與 \(\overline{AC}\) 中點 \((0,0)\)，選項（2）正確。`,
        String.raw`若 \(a=0\)，變換後三邊為 \(\sqrt{10},\sqrt{10},6\)，不是直角三角形；圖形落在哪些象限也隨 \(a\) 改變。`
      ],
      optionAnalysis: {
        "1": String.raw`邊長平方為 \(10,10,36\)，不符合畢氏定理。`,
        "2": String.raw`\(B=(0,1)\) 與 \((0,0)\) 都在邊界且位於固定的 \(y\) 軸。`,
        "3": String.raw`不同 \(a\) 會改變斜切方向，不能保證落入第四象限。`,
        "4": String.raw`\(\det T=3\ne0\)，取 \(\Omega=T^{-1}(\triangle ABC)\) 即可。`,
        "5": String.raw`線性變換將面積固定乘以 \(|\det T|=3\)。`
      }
    },
    "113A-13": {
      verified: true, sourcePage: 4,
      stem: "甲、乙、丙型手機每支利潤分別為 100、400、240 元，銷量為 A、B、C。三型平均每支利潤 260 元；甲乙兩型平均每支利潤 280 元。求 A：B：C。",
      solution: [
        String.raw`甲乙平均條件：
        \[
        100A+400B=280(A+B)
        \Rightarrow 120B=180A，
        \]
        故 \(A:B=2:3\)。`,
        String.raw`三型平均條件：
        \[
        100A+400B+240C=260(A+B+C)
        \Rightarrow -8A+7B-C=0。
        \]`,
        String.raw`令 \(A=2t、B=3t\)，得 \(C=5t\)，所以
        \[
        A:B:C=2:3:5。
        \]`
      ]
    },
    "113A-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`實係數三次多項式 \(f,g,h\) 除以 \(x^2-2x+3\) 的餘式分別為 \(x+1、x-3、-2\)。若
      \[
      xf(x)+ag(x)+bh(x)
      \]
      可被 \(x^2-2x+3\) 整除，求 \(a,b\)。`,
      solution: [
        String.raw`模 \(x^2-2x+3\) 計算，有 \(x^2\equiv2x-3\)，所以
        \[
        x(x+1)\equiv x^2+x\equiv3x-3。
        \]`,
        String.raw`總餘式為
        \[
        (3x-3)+a(x-3)-2b
        =(3+a)x+(-3-3a-2b)。
        \]
        要恆為 0，故 \(3+a=0\)，得 \(a=-3\)。`,
        String.raw`再代常數項：
        \[
        -3-3(-3)-2b=0\Rightarrow b=3。
        \]`
      ]
    },
    "113A-15": {
      verified: true, sourcePage: 5,
      stem: "摸彩箱有 10 顆幸運獎球：5000 元與 8000 元各 5 顆。公告中獎率為 0.4%，抽後不放回。前 100 人恰有 1 人中 5000 元，無人中 8000 元。求第 101 人禮券金額期望值。",
      solution: [
        String.raw`總中獎率 \(\frac{10}{N}=0.004\)，故報名總人數 \(N=2500\)。前 100 人抽完後剩 2400 顆球。`,
        String.raw`5000 元獎剩 4 顆、8000 元獎仍有 5 顆，因此第 101 人期望金額為
        \[
        \frac{4(5000)+5(8000)}{2400}
        =\frac{60000}{2400}=25\text{ 元}。
        \]`
      ]
    },
    "113A-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`向量 \(\vec v\) 在 \((2,-3)\) 方向的正射影長比原長少 1，在 \((3,2)\) 方向的正射影長比原長少 2。若 \(\vec v\) 與兩方向夾角皆為銳角，求 \(\vec v\) 在 \((4,7)\) 方向的正射影長。`,
      solution: [
        String.raw`兩方向互相垂直且長皆為 \(\sqrt{13}\)。令 \(|\vec v|=r\)，則在這組正交單位基底的分量為 \(r-1、r-2\)。`,
        String.raw`由畢氏關係
        \[
        (r-1)^2+(r-2)^2=r^2
        \Rightarrow r^2-6r+5=0。
        \]
        因兩夾角為銳角，\(r-2>0\)，故 \(r=5\)。`,
        String.raw`因此
        \[
        \vec v=4\frac{(2,-3)}{\sqrt{13}}+3\frac{(3,2)}{\sqrt{13}}
        =\frac{(17,-6)}{\sqrt{13}}。
        \]
        在 \((4,7)\) 方向的正射影長為
        \[
        \frac{\vec v\cdot(4,7)}{\sqrt{65}}
        =\frac{26}{\sqrt{13}\sqrt{65}}
        =\frac{2\sqrt5}{5}。
        \]`
      ]
    },
    "113A-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`在單位正方形 \(OABC\) 內，令 \(R\) 為所有點 \(P=(x,y)\) 的集合，使以 \(P\) 為圓心、半徑 \(|x-y|\) 的圓完全落在正方形內。求區域 \(R\) 面積。`,
      solution: [
        String.raw`圓完全位於正方形內等價於
        \[
        |x-y|\le\min(x,1-x,y,1-y)。
        \]`,
        String.raw`先看 \(x\ge y\) 的一半。此時條件化為
        \[
        y\le x\le2y,\qquad x\le\frac{1+y}{2}。
        \]
        在 \(0\le y\le\frac13\) 寬為 \(y\)；在 \(\frac13\le y\le1\) 寬為 \(\frac{1-y}{2}\)。`,
        String.raw`這一半面積為
        \[
        \int_0^{1/3}y\,dy+\int_{1/3}^1\frac{1-y}{2}\,dy
        =\frac16。
        \]
        關於 \(x=y\) 對稱，故總面積為 \(\frac13\)。`
      ]
    },
    "113A-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`坐標空間中 \(O\) 為原點，\(E\) 為平面 \(x-z=4\)。若 \(O\) 在 \(E\) 上的投影為 \(Q\)，且 \(\overrightarrow{OQ}\) 與 \((1,0,0)\) 夾角為 \(\alpha\)，求 \(\cos\alpha\)。`,
      options: {
        "1": String.raw`\(-\frac{\sqrt2}{2}\)`,
        "2": String.raw`\(-\frac12\)`,
        "3": String.raw`\(\frac12\)`,
        "4": String.raw`\(\frac{\sqrt2}{2}\)`,
        "5": String.raw`\(\frac{\sqrt3}{2}\)`
      },
      solution: [
        String.raw`平面法向量為 \((1,0,-1)\)。從原點到平面的垂足沿此方向，且
        \[
        Q=(2,0,-2)。
        \]`,
        String.raw`因此
        \[
        \cos\alpha
        =\frac{(2,0,-2)\cdot(1,0,0)}{|(2,0,-2)|}
        =\frac2{2\sqrt2}
        =\frac{\sqrt2}{2}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`\(\overrightarrow{OQ}\) 的 \(x\) 分量為正，夾角為銳角，餘弦不為負。`,
        "2": String.raw`忽略法向量在 \(z\) 方向也有分量。`,
        "3": String.raw`向量長為 \(2\sqrt2\)，不是 4。`,
        "4": String.raw`依內積定義計算得 \(\frac{\sqrt2}{2}\)。`,
        "5": String.raw`法向量的兩個非零分量等長，與 \(x\) 軸夾角為 \(45^\circ\)。`
      }
    },
    "113A-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`空間點 \(P=(a,b,c)\) 滿足 \(\overrightarrow{OP}\) 與 \((1,0,0)\) 的夾角 \(\theta\le\frac{\pi}{6}\)。說明
      \[
      a^2\ge3(b^2+c^2)。
      \]
      （非選擇題，須寫出推導）`,
      solution: [
        String.raw`由夾角定義，
        \[
        \cos\theta
        =\frac{\overrightarrow{OP}\cdot(1,0,0)}
        {|\overrightarrow{OP}|\cdot1}
        =\frac{a}{\sqrt{a^2+b^2+c^2}}。
        \]`,
        String.raw`在 \(0\le\theta\le\frac{\pi}{6}\) 上餘弦遞減，所以
        \[
        \frac{a}{\sqrt{a^2+b^2+c^2}}
        \ge\cos\frac{\pi}{6}=\frac{\sqrt3}{2}。
        \]`,
        String.raw`兩邊平方並整理：
        \[
        4a^2\ge3(a^2+b^2+c^2)
        \Rightarrow a^2\ge3(b^2+c^2)。
        \]`
      ]
    },
    "113A-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`承第 19 題。若 \(P=(a,0,c)\) 在平面 \(x-z=4\) 上，求 \(c\) 的最大可能範圍，以及線段 \(OP\) 的最小可能長度。（非選擇題，須寫出推導）`,
      solution: [
        String.raw`由平面條件 \(a-c=4\)，故 \(a=c+4\)。代入第 19 題不等式：
        \[
        (c+4)^2\ge3c^2
        \Rightarrow c^2-4c-8\le0。
        \]`,
        String.raw`解得
        \[
        2-2\sqrt3\le c\le2+2\sqrt3。
        \]`,
        String.raw`又
        \[
        OP^2=a^2+c^2=(c+4)^2+c^2
        =2(c+2)^2+8。
        \]
        無限制的最小點 \(c=-2\) 不在上述區間，故區間內最小值發生在左端 \(c=2-2\sqrt3\)。`,
        String.raw`代入得
        \[
        OP_{\min}=\sqrt{64-32\sqrt3}
        =4(\sqrt3-1)。
        \]`
      ]
    },
    "113B-1": {
      verified: true, sourcePage: 1,
      stem: "210 位玩家中，持有 1 顆寶石的有 1 位、持有 2 顆的有 2 位，依此類推，持有 20 顆的有 20 位。求每人寶石數的第 90 百分位數。",
      options: { "1": "16", "2": "17", "3": "18", "4": "19", "5": "20" },
      solution: [
        String.raw`第 90 百分位位置為 \(0.9\times210=189\)。持有不超過 18 顆者共有
        \[
        1+2+\cdots+18=\frac{18\cdot19}{2}=171
        \]
        人；加入持有 19 顆的 19 人後累計為 190 人。`,
        String.raw`所以排序後第 189 個數值是 19，第 90 百分位數為 19。`
      ],
      optionAnalysis: {
        "1": String.raw`累計至 16 顆只有 136 人，尚未到第 189 位。`,
        "2": String.raw`累計至 17 顆為 153 人。`,
        "3": String.raw`累計至 18 顆為 171 人。`,
        "4": String.raw`第 172～190 位皆持有 19 顆，所以第 189 位為 19。`,
        "5": String.raw`持有 20 顆者從第 191 位才開始。`
      }
    },
    "113B-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知 \(1<a<10、b=\log a、c=\log b\)，試選出正確的大小關係。`,
      options: {
        "1": String.raw`\(c<0<b<1\)`, "2": String.raw`\(0<c<1<b\)`,
        "3": String.raw`\(0<c<b<1\)`, "4": String.raw`\(1<c<b\)`, "5": String.raw`\(c<b<0\)`
      },
      solution: [
        String.raw`由 \(1<a<10\)，得 \(0<\log a<1\)，所以 \(0<b<1\)。`,
        String.raw`再因 \(0<b<1\)，故 \(c=\log b<0\)。因此 \(c<0<b<1\)。`
      ],
      optionAnalysis: {
        "1": String.raw`兩次使用常用對數的單調性，關係正確。`,
        "2": String.raw`\(b<1\)，不是 \(b>1\)，且 \(c<0\)。`,
        "3": String.raw`對 \(0<b<1\) 取對數會得到負數。`,
        "4": String.raw`\(b\) 本身介於 0 與 1。`,
        "5": String.raw`\(b=\log a>0\)，並非負數。`
      }
    },
    "113B-3": {
      verified: true, sourcePage: 1,
      stem: "射擊畫面中目標 P=(12,10)。牆 AB 位於 y=5、10≤x≤15；牆 CD 位於 y=6、0≤x≤9。玩家由 Q 直線射向 P，不可穿牆。試選出可能的 Q。",
      options: { "1": "(6,3)", "2": "(7,3)", "3": "(8,5)", "4": "(9,1)", "5": "(9,2)" },
      solution: [
        String.raw`逐項求線段 \(QP\) 與 \(y=5、y=6\) 的交點橫坐標。`,
        String.raw`對 \(Q=(7,3)\)，交於 \(y=5\) 時 \(x=\frac{59}{7}<10\)，不碰 AB；交於 \(y=6\) 時 \(x=\frac{64}{7}>9\)，也不碰 CD。`,
        String.raw`其餘選項不是在 \(y=6\) 時落於 \(0\le x\le9\)，就是在 \(y=5\) 時落於 \(10\le x\le15\)，會被牆阻擋。`
      ],
      optionAnalysis: {
        "1": String.raw`射線在 \(y=6\) 時 \(x=60/7<9\)，撞上 CD。`,
        "2": String.raw`在兩道牆的高度都從牆端外側通過，為可行位置。`,
        "3": String.raw`由 Q 出發即在牆 AB 的高度，且之後於 \(y=6\) 撞上 CD。`,
        "4": String.raw`在 \(y=5\) 時 \(x=31/3\)，落在 AB 上。`,
        "5": String.raw`在 \(y=5\) 時 \(x=81/8\)，落在 AB 上。`
      }
    },
    "113B-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知 \(\vec v=(-2,3)\)，點 \(A、B\) 的兩坐標都在 \([0,1]\) 內。求
      \[
      |\vec v+\overrightarrow{AB}|
      \]
      的最大值。`,
      options: {
        "1": String.raw`\(\sqrt{13}\)`, "2": String.raw`\(\sqrt{17}\)`,
        "3": String.raw`\(3\sqrt2\)`, "4": "5", "5": String.raw`\(\sqrt2+\sqrt{13}\)`
      },
      solution: [
        String.raw`\(\overrightarrow{AB}\) 的兩分量各介於 \([-1,1]\)，所以 \(\vec v+\overrightarrow{AB}\) 的分量範圍為
        \[
        -3\le x\le-1,\qquad2\le y\le4。
        \]`,
        String.raw`距原點最遠的角點為 \((-3,4)\)，可由 \(A=(1,0)、B=(0,1)\) 達成。最大長度
        \[
        \sqrt{(-3)^2+4^2}=5。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`這只是 \(|\vec v|\)，未加入 \(\overrightarrow{AB}\)。`,
        "2": String.raw`沒有同時把兩個分量推到可行的最遠端。`,
        "3": String.raw`分量極值不是 \((\pm3,\pm3)\)。`,
        "4": String.raw`可達向量 \((-3,4)\)，長度為 5。`,
        "5": String.raw`三角不等式上界未必能達成；兩向量方向受坐標限制。`
      }
    },
    "113B-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`二次函數 \(f(x)=x^2+bx+c\) 滿足 \(f(x-2)=f(-x-2)\) 對所有實數 \(x\) 成立。當 \(-3\le x\le1\) 時，最大值是最小值的 4 倍。求最小值。`,
      options: { "1": "0", "2": String.raw`\(\frac53\)`, "3": "3", "4": "4", "5": "6" },
      solution: [
        String.raw`兩輸入 \(x-2、-x-2\) 關於 \(-2\) 對稱，所以拋物線對稱軸為 \(x=-2\)。可寫成
        \[
        f(x)=(x+2)^2+k。
        \]`,
        String.raw`區間內最小值為 \(k\)，最大值在 \(x=1\)，為 \(9+k\)。由 \(9+k=4k\)，得 \(k=3\)。`
      ],
      optionAnalysis: {
        "1": String.raw`若最小值 0，最大值也須為 0，與拋物線不符。`,
        "2": String.raw`未正確取區間中離對稱軸最遠的端點。`,
        "3": String.raw`由 \(9+k=4k\) 得最小值 \(k=3\)。`,
        "4": String.raw`代入後最大值 13，不是 16。`,
        "5": String.raw`代入後最大值 15，不是最小值的 4 倍。`
      }
    },
    "113B-6": {
      verified: true, sourcePage: 2,
      stem: "五樓外牆點 P 分別連至四樓地板兩端 A、B，以及二樓地板兩端 E、F，形成相似的等腰三角形。各樓層等高、地板等長。五樓地板在三角形 PAB 內截得線段為地板長的 1/3，求五樓地板在三角形 PEF 內截得的比例。",
      options: {
        "1": String.raw`\(\frac17\)`, "2": String.raw`\(\frac16\)`, "3": String.raw`\(\frac15\)`,
        "4": String.raw`\(\frac29\)`, "5": String.raw`\(\frac14\)`
      },
      solution: [
        String.raw`設樓層高度為 1，P 到五樓地板垂直距離為 \(h\)。四樓地板距 P 為 \(h+1\)。由相似三角形
        \[
        \frac{h}{h+1}=\frac13，
        \]
        得 \(h=\frac12\)。`,
        String.raw`二樓地板距 P 為 \(h+3=\frac72\)。因此五樓截線與二樓底邊的比例為
        \[
        \frac{h}{h+3}=\frac{1/2}{7/2}=\frac17。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`由兩次相似三角形比例可得 \(\frac17\)。`,
        "2": String.raw`把 P 到五樓地板距離誤設成一整層。`,
        "3": String.raw`只按樓層數直接取倒數，未先求 P 的相對高度。`,
        "4": String.raw`相似比是線段比，不需再平方。`,
        "5": String.raw`忽略 P 位於五樓地板上方半層的結果。`
      }
    },
    "113B-7": {
      verified: true, sourcePage: 2,
      stem: "某月 30 天，東區最高溫分組天數依 18～24、24～30、30～36、36 以上為 0、11、14、5；西區為 3、12、15、0。城市每日最高溫取兩區較大者。試選出可能的城市分組天數 (A,B,C,D)。",
      options: {
        "1": "(0,15,15,0)", "2": "(3,12,15,5)", "3": "(0,9,16,5)", "4": "(3,7,15,5)", "5": "(0,12,13,5)"
      },
      solution: [
        String.raw`因東區沒有低於 24 度的日子，城市最高溫也不可能低於 24 度，故 \(A=0\)。東區有 5 天達 36 度以上，西區沒有，所以 \(D=5\)。`,
        String.raw`城市最高溫低於 30 度表示兩區同日都低於 30 度。東區有 11 天、西區有 15 天，交集天數可介於
        \[
        \max(0,11+15-30)=0
        \quad\text{到}\quad11。
        \]
        因 \(A=0\)，所以 \(B\le11\)。`,
        String.raw`選項中只有 \((0,9,16,5)\) 同時符合，且各交集可安排達成。`
      ],
      optionAnalysis: {
        "1": String.raw`\(D\) 必為東區 36 度以上的 5 天，不可能是 0。`,
        "2": String.raw`城市低溫組 \(A\) 不可能為 3。`,
        "3": String.raw`符合 \(A=0、D=5、0\le B\le11\)，可安排實現。`,
        "4": String.raw`同樣錯在 \(A\) 不可能為 3。`,
        "5": String.raw`兩區低於 30 度日數的交集至多 11 天，\(B=12\) 不可能。`
      }
    },
    "113B-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`正實數 \(a<b<c<d<e\) 成等比數列。試選出仍為等比數列的選項。`,
      options: {
        "1": String.raw`\(a,-b,c,-d,e\)`, "2": String.raw`\(e,d,c,b,a\)`,
        "3": String.raw`\(\log a,\log b,\log c,\log d,\log e\)`,
        "4": String.raw`\(3^a,3^b,3^c,3^d,3^e\)`,
        "5": String.raw`\(abc,bcd,cde\)`
      },
      solution: [
        String.raw`設原公比為 \(r>1\)。交錯變號後相鄰比皆為 \(-r\)，故（1）是等比；倒序後相鄰比皆為 \(1/r\)，故（2）也是。`,
        String.raw`對數後形成等差數列，不一定等比；指數 \(3^a,\ldots\) 的相鄰比為 \(3^{b-a}\) 等，因原數列的相鄰差不固定，通常不相等。`,
        String.raw`最後
        \[
        \frac{bcd}{abc}=\frac da=r^3,\qquad
        \frac{cde}{bcd}=\frac eb=r^3，
        \]
        所以（5）為等比數列。`
      ],
      optionAnalysis: {
        "1": String.raw`每一步都乘 \(-r\)，公比固定。`,
        "2": String.raw`倒序後公比為 \(1/r\)。`,
        "3": String.raw`取對數把等比轉成等差，不保證仍等比。`,
        "4": String.raw`指數差 \(b-a,c-b,\ldots\) 並不固定。`,
        "5": String.raw`兩個相鄰比皆為 \(r^3\)。`
      }
    },
    "113B-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`多項式 \(f(x)\) 除以 \(D=x^2+5x+1\) 的商為 \(Q=x^3+7x^2+x+3\)。試選出可能的 \(f(x)\)。`,
      options: {
        "1": String.raw`\(2QD\)`, "2": String.raw`\(QD-x\)`, "3": String.raw`\(QD+x^2\)`,
        "4": String.raw`\((Q+1)D-x\)`, "5": String.raw`\((Q+1)D-x^2\)`
      },
      solution: [
        String.raw`除法算法要求
        \[
        f=QD+R,\qquad \deg R<2。
        \]
        選項（2）的餘式為 \(-x\)，符合。`,
        String.raw`選項（5）可整理成
        \[
        (Q+1)D-x^2=QD+(D-x^2)=QD+(5x+1)，
        \]
        餘式 \(5x+1\) 次數小於 2，也符合。其餘選項會改變商或留下二次餘式。`
      ],
      optionAnalysis: {
        "1": String.raw`除以 \(D\) 的商會是 \(2Q\)。`,
        "2": String.raw`形式為 \(QD+(-x)\)，商正是 \(Q\)。`,
        "3": String.raw`加上的 \(x^2\) 與除式同次，還能再除，商會改變。`,
        "4": String.raw`商直接變成 \(Q+1\)。`,
        "5": String.raw`整理後為 \(QD+(5x+1)\)，商仍為 \(Q\)。`
      }
    },
    "113B-10": {
      verified: true, sourcePage: 3,
      stem: "長 120 公分的直線軌道上，光點 A、B 從兩端相向移動，碰端點反向；速率分別為每秒 5、10 公分。試選出正確的選項。",
      options: {
        "1": "第一次相遇位置距某端點 40 公分",
        "2": "A 的位置週期為 24 秒",
        "3": "A 回到出發點時，B 也在 B 的出發點",
        "4": "第二次相遇在端點上",
        "5": "共有 3 個不同相遇位置"
      },
      solution: [
        String.raw`首次相遇時間 \(120/(5+10)=8\) 秒，A 走 40 公分，故（1）正確。`,
        String.raw`A 往返一次週期為 \(2(120)/5=48\) 秒；B 的週期為 24 秒，所以 A 每次回到起點時，B 也完成整數個週期回到起點，（3）正確。`,
        String.raw`以折返運動或展開法求得相遇時刻依序為 8、24、40 秒，位置為 40、120、40 公分。因此第二次在端點，且只有 2 個不同相遇位置。`
      ],
      optionAnalysis: {
        "1": String.raw`8 秒時 A 走 40 公分，敘述正確。`,
        "2": String.raw`A 的往返週期為 48 秒。`,
        "3": String.raw`A 回起點需 48 秒，恰是 B 週期 24 秒的兩倍。`,
        "4": String.raw`第二次相遇在 24 秒，位置為 120 公分端點。`,
        "5": String.raw`相遇位置只有距 A 起點 40 公分處與另一端點，共 2 個。`
      }
    },
    "113B-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`第 1 年碳排放 \(X\)，第 5 年 \(Y=(1-0.05)^4X\)。第 2～5 年成長率依序為 \(-0.07,p,q,r\)，第 2 年排放量為 \(A\)。試選出正確的選項。`,
      options: {
        "1": String.raw`\(A=0.93X\)`, "2": String.raw`\(Y\le0.8X\)`,
        "3": String.raw`\(\frac{-0.07+p+q+r}{4}=-0.05\)`,
        "4": String.raw`\(\sqrt[4]{\frac YX}-1=-0.05\)`,
        "5": String.raw`\(0.93(1+p)(1+q)(1+r)=(0.95)^4\)`
      },
      solution: [
        String.raw`第 2 年下降 7%，所以 \(A=(1-0.07)X=0.93X\)，（1）正確。`,
        String.raw`\(\frac YX=0.95^4\approx0.8145>0.8\)，（2）錯。平均減碳 5% 是幾何平均概念，不是四個成長率的算術平均，故（3）錯。`,
        String.raw`由 \(Y/X=0.95^4\) 直接得 \(\sqrt[4]{Y/X}-1=-0.05\)；逐年倍率相乘也得
        \[
        0.93(1+p)(1+q)(1+r)=0.95^4。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`下降 7% 後保留 93%，所以 \(A=0.93X\)。`,
        "2": String.raw`\(0.95^4\approx0.8145\)，仍大於 0.8。`,
        "3": String.raw`逐年成長率應以倍率相乘，不以算術平均代表總變化。`,
        "4": String.raw`四次方根還原每年平均倍率 0.95。`,
        "5": String.raw`四個年度倍率相乘必等於總倍率 \(Y/X\)。`
      }
    },
    "113B-12": {
      verified: true, sourcePage: 4,
      stem: "機器人在 2×2 棋盤 A、B、C、D 中移動，每次等機率選上、下、左、右；若越界則留在原地。初始在 A，執行 n 次後停在四格機率為 a_n、b_n、c_n、d_n。試選出正確的選項。",
      options: {
        "1": String.raw`\(b_1=\frac14\)`, "2": String.raw`\(b_2=\frac18\)`,
        "3": String.raw`\(a_2+d_2=\frac34\)`, "4": String.raw`\(b_{99}=c_{99}\)`,
        "5": String.raw`\(a_{100}+d_{100}>\frac12\)`
      },
      solution: [
        String.raw`由角落 A 出發，兩方向越界留在 A，另兩方向各到相鄰格，所以 \(a_1=\frac12、b_1=c_1=\frac14、d_1=0\)，（1）正確。`,
        String.raw`再走一步可得
        \[
        b_2=\frac14,\quad a_2=\frac38,\quad d_2=\frac18，
        \]
        故（2）、（3）錯。`,
        String.raw`棋盤及初始位置對交換 B、C 對稱，所以所有 \(n\) 都有 \(b_n=c_n\)，（4）正確。對角兩格總機率從第一次起維持 \(\frac12\)，所以（5）的嚴格不等式錯。`
      ],
      optionAnalysis: {
        "1": String.raw`從 A 有四個等可能指令，其中一個到 B。`,
        "2": String.raw`完整加總從 A、B、D 到 B 的路徑後，\(b_2=\frac14\)。`,
        "3": String.raw`\(a_2+d_2=\frac38+\frac18=\frac12\)。`,
        "4": String.raw`B、C 關於棋盤對角線對稱，機率始終相等。`,
        "5": String.raw`兩對角格總機率為 \(\frac12\)，不是嚴格大於。`
      }
    },
    "113B-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`已知
      \[
      \begin{bmatrix}1&-1\\3&-2\end{bmatrix}
      \begin{bmatrix}a\\b\end{bmatrix}
      =\begin{bmatrix}1\\0\end{bmatrix}。
      \]
      若
      \[
      \begin{bmatrix}1&-1\\3&-2\end{bmatrix}
      \begin{bmatrix}2a+1\\2b+1\end{bmatrix}
      =\begin{bmatrix}c\\d\end{bmatrix}，
      \]
      求 \(c-3d\)。`,
      solution: [
        String.raw`第一式給 \(a-b=1、3a-2b=0\)，解得 \(a=-2、b=-3\)。`,
        String.raw`所以 \((2a+1,2b+1)=(-3,-5)\)，矩陣相乘得
        \[
        c=2,\qquad d=1。
        \]
        故 \(c-3d=2-3=-1\)。`
      ]
    },
    "113B-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`全體高三生都報考數學 A 或 B。只報 A 者占全體 \(\frac3{10}\)；報 A 者中有 \(\frac58\) 同時報 B。求只報 B 者占所有報 B 者的比例。`,
      solution: [
        String.raw`設同時報考兩科者占 \(x\)。報 A 總比例為 \(\frac3{10}+x\)，故
        \[
        \frac{x}{3/10+x}=\frac58。
        \]
        解得 \(x=\frac12\)。`,
        String.raw`只報 B 的比例為 \(1-\frac3{10}-\frac12=\frac15\)，報 B 總比例為 \(\frac15+\frac12=\frac7{10}\)。`,
        String.raw`所求為
        \[
        \frac{1/5}{7/10}=\frac27。
        \]`
      ]
    },
    "113B-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`平面相異五點 \(P_1,P_2,Q_1,Q_2,R\) 滿足
      \[
      \overrightarrow{P_1R}=4\overrightarrow{P_1Q_1},\qquad
      \overrightarrow{P_2R}=7\overrightarrow{P_2Q_2}。
      \]
      將 \(\overrightarrow{Q_1Q_2}\) 表成 \(\overrightarrow{P_1Q_1}、\overrightarrow{P_2Q_2}\) 的線性組合。`,
      solution: [
        String.raw`令 \(\vec u=\overrightarrow{P_1Q_1}、\vec v=\overrightarrow{P_2Q_2}\)。由共同點 R，
        \[
        \overrightarrow{P_1P_2}
        =\overrightarrow{P_1R}+\overrightarrow{RP_2}
        =4\vec u-7\vec v。
        \]`,
        String.raw`因此
        \[
        \overrightarrow{Q_1Q_2}
        =\overrightarrow{Q_1P_1}+\overrightarrow{P_1P_2}+\overrightarrow{P_2Q_2}
        =-\vec u+(4\vec u-7\vec v)+\vec v
        =3\vec u-6\vec v。
        \]`
      ]
    },
    "113B-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`半徑 2、球心原點的地球儀上，點
      \[
      A=\left(\frac{\sqrt3}{2},\frac12,\sqrt3\right)。
      \]
      赤道上距 A 最遠的點為 P。求通過 A、P 的大圓上兩點劣弧長。`,
      solution: [
        String.raw`A 在赤道平面的投影方向為 \((\frac{\sqrt3}{2},\frac12)\)，長為 1。赤道上距 A 最遠者取相反方向且半徑為 2：
        \[
        P=(-\sqrt3,-1,0)。
        \]`,
        String.raw`\(\overrightarrow{OA}\cdot\overrightarrow{OP}=-2\)，兩向量長皆為 2，故中心角 \(\phi\) 滿足
        \[
        \cos\phi=-\frac12，
        \]
        劣弧中心角為 \(\frac{2\pi}{3}\)。`,
        String.raw`弧長為
        \[
        2\cdot\frac{2\pi}{3}=\frac{4\pi}{3}。
        \]`
      ]
    },
    "113B-17": {
      verified: true, sourcePage: 6,
      stem: "圓周上 12 個等分點依序編號。任取 3 點形成三角形，求三內角由小到大成等差數列的三角形個數。",
      solution: [
        String.raw`三頂點把圓周分成正整數間隔 \(p,q,r\)，且 \(p+q+r=12\)。三內角分別為對應間隔的 \(15^\circ\) 倍，因此內角成等差等價於 \(p,q,r\) 排序後成等差。`,
        String.raw`設排序後為 \(u,u+d,u+2d\)，則 \(3u+3d=12\)，即 \(u+d=4\)。可能的間隔組為
        \[
        (4,4,4),(3,4,5),(2,4,6),(1,4,7)。
        \]`,
        String.raw`第一組有 1 種排列，其餘各有 6 種，共 19 個有序間隔。每組從 12 個起點產生、但每個三角形被三個頂點重複計數，故
        \[
        \frac{12}{3}\cdot19=76。
        \]`
      ]
    },
    "113B-18": {
      verified: true, sourcePage: 6,
      stem: "長方體石塊的八個角都以通過該角三條鄰邊中點的平面截去。求截角後石塊的面數。",
      options: { "1": "八面體", "2": "十面體", "3": "十二面體", "4": "十四面體", "5": "十六面體" },
      solution: [
        String.raw`原長方體有 6 個面；截去每一個角會新增一個三角形截面，八個角共新增 8 面。`,
        String.raw`原來的 6 個面仍各保留為一個多邊形面，所以總面數為
        \[
        6+8=14。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`只數到八個新三角形截面，漏掉原本六個面。`,
        "2": String.raw`截去八角會新增八面，不只新增四面。`,
        "3": String.raw`原面與新面總數並非各六面。`,
        "4": String.raw`六個原面加八個截角面，共十四面。`,
        "5": String.raw`頂點數或邊數不能直接當成面數。`
      }
    },
    "113B-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`承官方長方體截角題組。已知
      \[
      BC=8,\qquad BD=DC=9。
      \]
      求 \(\triangle BCD\) 面積。（非選擇題，須寫出推導）`,
      solution: [
        String.raw`令 \(P\) 為 \(\overline{BC}\) 中點。因 \(\triangle BCD\) 為等腰三角形，\(DP\perp BC\)，且 \(BP=4\)。`,
        String.raw`由畢氏定理
        \[
        DP=\sqrt{9^2-4^2}=\sqrt{65}。
        \]`,
        String.raw`所以
        \[
        [\triangle BCD]
        =\frac12\cdot8\cdot\sqrt{65}
        =4\sqrt{65}。
        \]`
      ]
    },
    "113B-20": {
      verified: true, sourcePage: 6,
      stem: "承第 19 題。求 AD 長度、四面體 ABCD 體積，以及以 △BCD 為底面時，A 到底面的高度。（非選擇題，須寫出推導）",
      solution: [
        String.raw`依長方體中點關係，\(AD\perp BC\)，且 \(\triangle ABC\) 是等腰直角三角形、斜邊 \(BC=8\)，故
        \[
        AB=AC=4\sqrt2。
        \]
        在直角三角形 \(ABD\) 中
        \[
        AD=\sqrt{BD^2-AB^2}=\sqrt{81-32}=7。
        \]`,
        String.raw`以直角三角形 \(ABC\) 為底、\(AD\) 為高，四面體體積為
        \[
        V=\frac13\left(\frac12\cdot4\sqrt2\cdot4\sqrt2\right)\cdot7
        =\frac{112}{3}。
        \]`,
        String.raw`改以 \(\triangle BCD\) 為底，其面積由第 19 題為 \(4\sqrt{65}\)。若高為 \(h\)，
        \[
        \frac{112}{3}
        =\frac13(4\sqrt{65})h，
        \]
        故
        \[
        h=\frac{28}{\sqrt{65}}=\frac{28\sqrt{65}}{65}。
        \]`
      ]
    }
  });
})();
