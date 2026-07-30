(() => {
  Object.assign(window.MATH_CONTENT, {
    "112A-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`若在計算器中鍵入某正整數 \(N\)，接著連按取正平方根鍵 3 次，視窗顯示 2，則 \(N\) 為何？`,
      options: {
        "1": String.raw`\(2^3\)`, "2": String.raw`\(2^4\)`, "3": String.raw`\(2^6\)`,
        "4": String.raw`\(2^8\)`, "5": String.raw`\(2^{12}\)`
      },
      solution: [
        String.raw`連續開平方 3 次後得到
        \[
        N^{1/8}=2。
        \]`,
        String.raw`兩邊取 8 次方，得 \(N=2^8\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(2^3\) 連續開平方 3 次為 \(2^{3/8}\)，不是 2。`,
        "2": String.raw`\(2^4\) 連續開平方 3 次為 \(2^{1/2}\)。`,
        "3": String.raw`\(2^6\) 連續開平方 3 次為 \(2^{3/4}\)。`,
        "4": String.raw`因 \((2^8)^{1/8}=2\)，符合題意。`,
        "5": String.raw`\(2^{12}\) 連續開平方 3 次為 \(2^{3/2}\)。`
      }
    },
    "112A-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`坐標平面上，以原點 \(O\) 為圓心、1 為半徑作圓。在第一象限圓弧上取點 \(C\)，過 \(C\) 的切線分別交 \(x、y\) 軸於 \(D、E\)。令 \(\angle OEC=\theta\)，求 \(\tan\theta\)。`,
      options: {
        "1": String.raw`\(\overline{OE}\)`, "2": String.raw`\(\overline{OC}\)`,
        "3": String.raw`\(\overline{OD}\)`, "4": String.raw`\(\overline{CE}\)`,
        "5": String.raw`\(\overline{CD}\)`
      },
      solution: [
        String.raw`令 \(C=(\cos\varphi,\sin\varphi)\)。單位圓在 \(C\) 的切線為
        \[
        x\cos\varphi+y\sin\varphi=1。
        \]`,
        String.raw`由截距可得 \(\overline{CE}=\cot\varphi\)、\(\overline{CD}=\tan\varphi\)。又 \(\triangle OCE\) 在 \(C\) 為直角，
        \[
        \tan\theta=\frac{\overline{OC}}{\overline{CE}}
        =\frac1{\cot\varphi}=\tan\varphi=\overline{CD}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`\(\overline{OE}=\csc\varphi\)，並非 \(\tan\theta\)。`,
        "2": String.raw`\(\overline{OC}=1\)，但 \(\theta\) 會隨 \(C\) 改變。`,
        "3": String.raw`\(\overline{OD}=\sec\varphi\)，不是所求。`,
        "4": String.raw`\(\overline{CE}=\cot\varphi\)，是 \(\tan\theta\) 的倒數。`,
        "5": String.raw`\(\overline{CD}=\tan\varphi=\tan\theta\)。`
      }
    },
    "112A-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`某生把 15 筆物理量資料 \((s_k,t_k)\) 改畫成散布圖 \((s_k,\log t_k)\)。圖中資料大致沿著通過原點、斜率約為 \(\frac12\) 的直線分布。則 \(s、t\) 的關係式最可能為何？`,
      options: {
        "1": String.raw`\(s=2t\)`, "2": String.raw`\(s=3t\)`,
        "3": String.raw`\(t=10^s\)`, "4": String.raw`\(t^2=10^s\)`,
        "5": String.raw`\(t^3=10^s\)`
      },
      solution: [
        String.raw`迴歸直線顯示
        \[
        \log t\approx\frac12s。
        \]`,
        String.raw`因此 \(2\log t=s\)，即
        \[
        \log(t^2)=s\quad\Longleftrightarrow\quad t^2=10^s。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`這是 \(s、t\) 的線性關係，取 \(\log t\) 後不會得到題圖直線。`,
        "2": String.raw`同樣把原始 \(t\) 誤當成縱軸。`,
        "3": String.raw`此式給 \(\log t=s\)，斜率應為 1。`,
        "4": String.raw`此式等價於 \(\log t=s/2\)，符合散布圖。`,
        "5": String.raw`此式給 \(\log t=s/3\)，斜率不符。`
      }
    },
    "112A-4": {
      verified: true, sourcePage: 1,
      stem: "將數字 1、2、3、…、9 排成不重複的九位數，使前 5 位由左至右遞增，且後 5 位由左至右遞減。共有多少個？",
      options: {
        "1": String.raw`\(\frac{8!}{4!4!}\)`, "2": String.raw`\(\frac{8!}{5!3!}\)`,
        "3": String.raw`\(\frac{9!}{5!4!}\)`, "4": String.raw`\(\frac{8!}{5!}\)`,
        "5": String.raw`\(\frac{9!}{5!}\)`
      },
      solution: [
        "第 5 位同時是前 5 位最大數與後 5 位最大數，所以必為 9。",
        String.raw`從其餘 8 個數中選 4 個放在左側，順序由遞增條件唯一決定；剩下 4 個放右側，順序也唯一決定。因此共有
        \[
        \binom84=\frac{8!}{4!4!}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`正是從其餘 8 個數選 4 個給左側的 \(\binom84\)。`,
        "2": String.raw`左右兩側各有 4 個位置，不是分成 5 個與 3 個。`,
        "3": String.raw`中央的 9 已被固定，不能再從 9 個數任選。`,
        "4": String.raw`未除去同一組左側數字的排列重複。`,
        "5": String.raw`同時忽略中央固定與兩側順序已被決定。`
      }
    },
    "112A-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`坐標空間中，\(P、Q、R\) 是平面 \(2x-3y+5z=7\) 上不共線三點。令
      \[
      \overrightarrow{PQ}=(a_1,b_1,c_1),\qquad
      \overrightarrow{PR}=(a_2,b_2,c_2)。
      \]
      下列以指定第一列和上述兩向量為三列的行列式，何者絕對值最大？`,
      options: {
        "1": String.raw`第一列為 \((-1,1,1)\)`,
        "2": String.raw`第一列為 \((1,-1,1)\)`,
        "3": String.raw`第一列為 \((1,1,-1)\)`,
        "4": String.raw`第一列為 \((-1,-1,1)\)`,
        "5": String.raw`第一列為 \((-1,-1,-1)\)`
      },
      solution: [
        String.raw`因 \(\overrightarrow{PQ}\times\overrightarrow{PR}\) 垂直於此平面，所以與法向量
        \[
        \mathbf n=(2,-3,5)
        \]
        平行。各行列式絕對值只須比較第一列向量與 \(\mathbf n\) 的內積絕對值。`,
        String.raw`五個值依序成比例於
        \[
        0,\ 10,\ 6,\ 6,\ 4，
        \]
        故選項（2）最大。`
      ],
      optionAnalysis: {
        "1": String.raw`\(|(-1,1,1)\cdot(2,-3,5)|=0\)。`,
        "2": String.raw`\(|(1,-1,1)\cdot(2,-3,5)|=10\)，五者最大。`,
        "3": String.raw`內積絕對值為 6。`,
        "4": String.raw`內積絕對值為 6。`,
        "5": String.raw`內積絕對值為 4。`
      }
    },
    "112A-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`邊長為 1 的正立方體固定一頂點 \(O\)。從其餘 7 個頂點隨機選取相異兩點 \(P、Q\)，求 \(\overrightarrow{OP}\cdot\overrightarrow{OQ}\) 的期望值。`,
      options: {
        "1": String.raw`\(\frac47\)`, "2": String.raw`\(\frac57\)`,
        "3": String.raw`\(\frac67\)`, "4": "1", "5": String.raw`\(\frac87\)`
      },
      solution: [
        "把其餘頂點表示成非零的 0、1 三元坐標。內積等於三個坐標位置同時為 1 的個數。",
        String.raw`對任一固定坐標，7 個頂點中有 4 個該坐標為 1，故隨機兩點在此坐標同為 1 的機率為
        \[
        \frac{\binom42}{\binom72}=\frac27。
        \]`,
        String.raw`三個坐標的期望貢獻相加，得到 \(3\cdot\frac27=\frac67\)。`
      ],
      optionAnalysis: {
        "1": String.raw`只計入兩個坐標方向的期望貢獻。`,
        "2": String.raw`未依三個坐標分別使用指示變數計算。`,
        "3": String.raw`每個坐標貢獻 \(2/7\)，三者合計 \(6/7\)。`,
        "4": String.raw`內積不固定為 1，頂點組合不同會得到不同值。`,
        "5": String.raw`超過三個坐標貢獻的正確期望總和。`
      }
    },
    "112A-7": {
      verified: true, sourcePage: 2,
      stem: "甲、乙兩員工起薪相同。甲每工作滿 3 個月，次月起加薪 200 元；乙每工作滿 12 個月，次月起加薪 1000 元。選出正確敘述。",
      options: {
        "1": "第 9 個月甲比第 1 個月多 600 元",
        "2": "第 13 個月甲的月薪比乙高",
        "3": "第 19 個月甲的月薪比乙高",
        "4": "工作滿 18 個月時，甲的薪資總額比乙少",
        "5": "第 3 年的 12 個月中，恰有 3 個月甲的月薪比乙高"
      },
      solution: [
        "甲在第 4、7、10、…月調薪，乙在第 13、25、…月調薪。",
        "第 19 個月甲已調 6 次，共加 1200 元；乙只加 1000 元，所以（3）正確。",
        "第 3 年中，甲在第 34～36 月加薪總額為 2200 元，超過乙的 2000 元；恰有 3 個月，所以（5）正確。"
      ],
      optionAnalysis: {
        "1": "第 9 個月甲只在第 4、7 月調薪，共增加 400 元。",
        "2": "第 13 個月甲共加 800 元，乙加 1000 元，甲較低。",
        "3": "第 19 個月甲加 1200 元，乙加 1000 元，甲較高。",
        "4": "前 18 個月甲的加薪累計貢獻為 9000 元，乙為 6000 元，甲並未較少。",
        "5": "第 34、35、36 月甲比乙高，恰為 3 個月。"
      }
    },
    "112A-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`某抽獎遊戲單次中獎機率為 \(0.1\)，各次獨立。令 \(p_n\) 為玩 \(n\) 次至少中獎一次的機率。選出正確敘述。`,
      options: {
        "1": String.raw`\(p_{n+1}>p_n\)`,
        "2": String.raw`\(p_3=0.3\)`,
        "3": String.raw`\(\{p_n\}\) 為等差數列`,
        "4": String.raw`前兩次「第一次未中、第二次中」的機率等於 \(p_2-p_1\)`,
        "5": String.raw`玩 \(n\ge2\) 次至少中獎兩次的機率為 \(2p_n\)`
      },
      solution: [
        String.raw`至少中一次的機率為
        \[
        p_n=1-0.9^n。
        \]
        因此 \(p_{n+1}>p_n\)，（1）正確。`,
        String.raw`又
        \[
        p_2-p_1=(1-0.9^2)-(1-0.9)=0.09，
        \]
        正好等於第一次未中、第二次中的機率 \(0.9\cdot0.1\)，故（4）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`因 \(0.9^{n+1}<0.9^n\)，所以 \(p_{n+1}>p_n\)。`,
        "2": String.raw`\(p_3=1-0.9^3=0.271\)，不是 0.3。`,
        "3": String.raw`相鄰差為 \(0.1\cdot0.9^n\)，並非常數。`,
        "4": String.raw`兩者都等於 \(0.09\)。`,
        "5": String.raw`至少中兩次須用二項分配加總，不能寫成 \(2p_n\)。`
      }
    },
    "112A-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a_1,\ldots,a_n\) 是首項 3、公比 \(3\sqrt3\) 的等比數列。哪些 \(n\) 可能滿足
      \[
      \log_3a_1-\log_3a_2+\cdots+(-1)^{n+1}\log_3a_n>18？
      \]`,
      options: { "1": "23", "2": "24", "3": "25", "4": "26", "5": "27" },
      solution: [
        String.raw`因 \(3\sqrt3=3^{3/2}\)，
        \[
        \log_3a_k=1+\frac32(k-1)=\frac{3k-1}{2}。
        \]`,
        String.raw`若 \(n=2m\)，每一對相減為 \(-\frac32\)，總和為負。若 \(n=2m+1\)，總和為
        \[
        -\frac32m+(3m+1)=\frac32m+1。
        \]
        此值大於 18 的最小整數 \(m\) 為 12，因此 \(n\ge25\) 且必為奇數。`,
        "候選值中為 25、27。"
      ],
      optionAnalysis: {
        "1": String.raw`\(n=23\) 時 \(m=11\)，總和為 \(17.5\)，未超過 18。`,
        "2": "偶數項的交錯和為負。",
        "3": String.raw`\(n=25\) 時總和為 19，符合。`,
        "4": "偶數項的交錯和為負。",
        "5": String.raw`\(n=27\) 時總和為 \(20.5\)，符合。`
      }
    },
    "112A-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`直線
      \[
      L:5y+(2k-4)x-10k=0
      \]
      分別交長方形 \(O(0,0)、A(10,0)、B(10,6)、C(0,6)\) 的所在直線 \(OC、AB\) 於 \(D、E\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(k=4\) 時，\(L\) 通過 \(A\)`,
        "2": String.raw`若 \(L\) 通過 \(C\)，斜率為 \(-\frac52\)`,
        "3": String.raw`若 \(D\) 在線段 \(OC\) 上，則 \(0\le k\le3\)`,
        "4": String.raw`\(k=\frac12\) 時，線段 \(DE\) 在長方形內`,
        "5": String.raw`若 \(DE\) 在長方形內，\(L\) 的斜率可能為 \(\frac3{10}\)`
      },
      solution: [
        String.raw`令 \(x=0\) 與 \(x=10\)，分別得
        \[
        D=(0,2k),\qquad E=(10,8-2k)。
        \]`,
        String.raw`所以 \(D\in\overline{OC}\) 等價於 \(0\le k\le3\)；而 \(E\in\overline{AB}\) 等價於 \(1\le k\le4\)。故整段 \(DE\) 在長方形內時 \(1\le k\le3\)。`,
        String.raw`斜率為 \(m=(4-2k)/5\)。代入各條件可得（1）、（3）、（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`\(k=4\) 時 \(E=(10,0)=A\)，正確。`,
        "2": String.raw`通過 \(C\) 時 \(k=3\)，斜率為 \(-2/5\)，不是 \(-5/2\)。`,
        "3": String.raw`由 \(0\le2k\le6\) 得 \(0\le k\le3\)。`,
        "4": String.raw`\(k=1/2\) 時 \(E=(10,7)\)，在長方形外。`,
        "5": String.raw`令 \(m=3/10\) 得 \(k=5/4\)，落在 \(1\le k\le3\) 內。`
      }
    },
    "112A-11": {
      verified: true, sourcePage: 4,
      stem: "令 A、B 分別為以原點為中心順時針、逆時針旋轉 90° 的矩陣；C、D 分別為對直線 x=y、x=-y 的鏡射矩陣。選出正確敘述。",
      options: {
        "1": String.raw`\(A、C\) 將 \((1,0)\) 映射到同一點`,
        "2": String.raw`\(A=-B\)`, "3": String.raw`\(C=D^{-1}\)`,
        "4": String.raw`\(AB=CD\)`, "5": String.raw`\(AC=BD\)`
      },
      solution: [
        String.raw`四個矩陣為
        \[
        A=\begin{bmatrix}0&1\\-1&0\end{bmatrix},\
        B=\begin{bmatrix}0&-1\\1&0\end{bmatrix},\
        C=\begin{bmatrix}0&1\\1&0\end{bmatrix},\
        D=\begin{bmatrix}0&-1\\-1&0\end{bmatrix}。
        \]`,
        String.raw`直接比較與相乘可得 \(A=-B\)，且
        \[
        AC=BD=\begin{bmatrix}1&0\\0&-1\end{bmatrix}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`\(A(1,0)^T=(0,-1)^T\)，\(C(1,0)^T=(0,1)^T\)。`,
        "2": "兩個方向相反的 90° 旋轉矩陣互為負矩陣。",
        "3": String.raw`\(D^{-1}=D\)，但 \(C\ne D\)。`,
        "4": String.raw`\(AB=I\)，而 \(CD=-I\)。`,
        "5": String.raw`直接相乘可得 \(AC=BD\)。`
      }
    },
    "112A-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`令
      \[
      f(x)=\sin x+\sqrt3\cos x。
      \]
      選出正確敘述。`,
      options: {
        "1": String.raw`直線 \(x=\frac\pi6\) 是圖形的對稱軸`,
        "2": String.raw`若 \(x=a、x=b\) 都是對稱軸，則 \(f(a)=f(b)\)`,
        "3": String.raw`在 \([0,2\pi)\) 中只有一個 \(x\) 滿足 \(f(x)=\sqrt3\)`,
        "4": String.raw`在 \([0,2\pi)\) 中滿足 \(f(x)=\frac12\) 的所有解之和不超過 \(2\pi\)`,
        "5": String.raw`\(y=f(x)\) 可由 \(y=4\sin^2\frac x2\) 的圖形經適當平移得到`
      },
      solution: [
        String.raw`化為
        \[
        f(x)=2\sin\left(x+\frac\pi3\right)。
        \]
        極值所在的垂直線是對稱軸，故 \(x=\pi/6\) 為其中一條。`,
        String.raw`又
        \[
        4\sin^2\frac x2=2-2\cos x
        \]
        是振幅 2、週期 \(2\pi\) 的正弦型圖形，經上下與左右平移可得到 \(f\)。`
      ],
      optionAnalysis: {
        "1": String.raw`代入相位後，\(x=\pi/6\) 對應正弦函數最大值，確為對稱軸。`,
        "2": "相鄰對稱軸交替通過最大值與最小值，函數值不相等。",
        "3": String.raw`方程 \(2\sin(x+\pi/3)=\sqrt3\) 在一週期內有兩解。`,
        "4": "兩個解的相位和換回 x 後會超過 \(2\pi\)。",
        "5": "兩圖皆為振幅 2、週期 \(2\pi\) 的正弦型圖形，可藉平移重合。"
      }
    },
    "112A-13": {
      verified: true, sourcePage: 4,
      stem: "果汁、奶茶、咖啡的每日單價固定。三天銷量與總收入依序為：第 1 天 (60,80,50) 杯、12900 元；第 2 天 (30,40,30) 杯、6850 元；第 3 天 (50,70,40) 杯、10800 元。求咖啡單價。",
      solution: [
        String.raw`設三種飲料單價為 \(x、y、z\)，則
        \[
        \begin{cases}
        60x+80y+50z=12900,\\
        30x+40y+30z=6850,\\
        50x+70y+40z=10800。
        \end{cases}
        \]`,
        String.raw`第一式減去第二式的 2 倍，得 \(-10z=-800\)，所以 \(z=80\)。`
      ]
    },
    "112A-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`設 \(a,b\) 為實數且 \(a>0\)。多項式
      \[
      ax^2+(2a+b)x-12
      \]
      除以 \(x^2+(2-a)x-2a\) 的餘式為 6，求 \((a,b)\)。`,
      solution: [
        String.raw`兩式同為二次式，商為最高次係數 \(a\)，故
        \[
        ax^2+(2a+b)x-12
        =a[x^2+(2-a)x-2a]+6。
        \]`,
        String.raw`比較一次項得 \(b=-a^2\)；比較常數項得
        \[
        -12=-2a^2+6\Rightarrow a^2=9。
        \]
        因 \(a>0\)，所以 \(a=3、b=-9\)。`
      ]
    },
    "112A-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`\(O、A、B\) 不共線且 \(\overrightarrow{OA}\perp\overrightarrow{OB}\)。點 \(C、D\) 在直線 \(AB\) 上，滿足
      \[
      \overrightarrow{OC}=\frac35\overrightarrow{OA}+\frac25\overrightarrow{OB},\qquad
      3\overline{AD}=8\overline{BD},
      \]
      且 \(\overrightarrow{OC}\perp\overrightarrow{OD}\)。求 \(\overline{OB}/\overline{OA}\)。`,
      solution: [
        String.raw`因 \(AD:BD=8:3\) 且垂直條件不可能出現在內分點，故 \(D\) 是 \(AB\) 的外分點：
        \[
        \overrightarrow{OD}=-\frac35\overrightarrow{OA}+\frac85\overrightarrow{OB}。
        \]`,
        String.raw`由 \(\overrightarrow{OC}\cdot\overrightarrow{OD}=0\) 及 \(\overrightarrow{OA}\perp\overrightarrow{OB}\)，
        \[
        -\frac9{25}OA^2+\frac{16}{25}OB^2=0。
        \]
        因此 \(\frac{OB}{OA}=\frac34\)。`
      ]
    },
    "112A-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`平面 \(E:x+z=2\) 通過 \(A(2,-1,0)、B(0,1,2)、C(-2,1,4)\)。點 \(P\) 在平面 \(z=1\) 上，且 \(P\) 在 \(E\) 的投影點與 \(A、B、C\) 等距。求 \(P\) 到 \(E\) 的距離。`,
      solution: [
        String.raw`設投影點為 \(X=(x,y,z)\)。由 \(X\in E\) 且 \(XA=XB=XC\)，解得
        \[
        x+z=2,\quad -x+y+z=0,\quad z-x=4，
        \]
        所以 \(X=(-1,-4,3)\)。`,
        String.raw`平面法向量為 \((1,0,1)\)。因 \(P\) 在通過 \(X\) 的法線上且 \(z_P=1\)，
        \[
        P=X-2(1,0,1)。
        \]
        故距離為 \(2\sqrt2\)。`
      ]
    },
    "112A-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`空間中兩歪斜線
      \[
      L_1:(x,y,z)=(1,1,2)+t(1,-1,1),\quad
      L_2:(x,y,z)=(2,5,6)+s(2,1,-1)。
      \]
      直線 \(L_3\) 與 \(L_1、L_2\) 都相交且垂直。點 \(P、Q\) 分別在 \(L_1、L_2\) 上，且到 \(L_3\) 的距離皆為 3。求 \(PQ\)。`,
      solution: [
        String.raw`兩方向向量
        \[
        \mathbf u=(1,-1,1),\qquad \mathbf v=(2,1,-1)
        \]
        的內積為 0；公垂線方向也同時垂直於兩者，所以三個方向彼此垂直。`,
        String.raw`由歪斜線距離公式，
        \[
        d(L_1,L_2)=\frac{|(1,4,4)\cdot(\mathbf u\times\mathbf v)|}{|\mathbf u\times\mathbf v|}
        =4\sqrt2。
        \]`,
        String.raw`因此
        \[
        PQ^2=3^2+3^2+(4\sqrt2)^2=50，
        \]
        得 \(PQ=5\sqrt2\)。`
      ]
    },
    "112A-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`坐標平面上 \(O=(0,0)、A=(1,0)\)，點 \(P\) 在上半平面且 \(\overline{AP}=\overline{OA}=1\)。令 \(\angle AOP=\theta\)，求 \(\overline{OP}\)。`,
      options: {
        "1": String.raw`\(\sin\theta\)`, "2": String.raw`\(\cos\theta\)`,
        "3": String.raw`\(2\sin\theta\)`, "4": String.raw`\(2\cos\theta\)`,
        "5": String.raw`\(\cos2\theta\)`
      },
      solution: [
        String.raw`在 \(\triangle OAP\) 中，\(OA=AP=1\)。由餘弦定理
        \[
        AP^2=OA^2+OP^2-2(OA)(OP)\cos\theta。
        \]`,
        String.raw`代入 \(AP=OA=1\)，得 \(OP^2-2OP\cos\theta=0\)。因 \(OP>0\)，所以 \(OP=2\cos\theta\)。`
      ],
      optionAnalysis: {
        "1": "少了等腰三角形弦長關係中的倍數。",
        "2": "由餘弦定理得到的是兩倍餘弦。",
        "3": "此處 \(\theta\) 的鄰邊關係對應餘弦，不是正弦。",
        "4": String.raw`餘弦定理化簡得 \(OP=2\cos\theta\)。`,
        "5": "倍角餘弦不等於此三角形的底邊長。"
      }
    },
    "112A-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`承上題，另有 \(B=(-2,0)\) 與上半平面點 \(Q\)，滿足 \(BQ=OB=2\)、\(\angle POQ=90^\circ\)。若 \(\sin\theta=\frac35\)，求 \(Q\) 坐標，並證明 \(\overrightarrow{BQ}=2\overrightarrow{AP}\)。`,
      solution: [
        String.raw`因 \(\theta\) 為銳角，
        \[
        \cos\theta=\frac45,\qquad OP=2\cos\theta=\frac85。
        \]
        故
        \[
        P=OP(\cos\theta,\sin\theta)
        =\left(\frac{32}{25},\frac{24}{25}\right)。
        \]`,
        String.raw`因 \(\overrightarrow{OQ}\) 與 \(\overrightarrow{OP}\) 垂直且指向第二象限，設 \(\overrightarrow{OQ}=\lambda(-3,4)\)。再用 \(BQ=2\) 解得 \(\lambda=\frac{12}{25}\)，所以
        \[
        Q=\left(-\frac{36}{25},\frac{48}{25}\right)。
        \]`,
        String.raw`而
        \[
        \overrightarrow{AP}=\left(\frac7{25},\frac{24}{25}\right),\qquad
        \overrightarrow{BQ}=\left(\frac{14}{25},\frac{48}{25}\right)
        =2\overrightarrow{AP}。
        \]`
      ]
    },
    "112A-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`承第 19 題，求點 \(A\) 到直線 \(BQ\) 的距離，以及四邊形 \(PABQ\) 的面積。`,
      solution: [
        String.raw`由 \(\overrightarrow{BQ}=2\overrightarrow{AP}\)，直線 \(BQ\) 與 \(AP\) 平行。以點線距離公式計算 \(A=(1,0)\) 到通過 \(B=(-2,0)\)、方向 \((14,48)\) 的直線距離：
        \[
        d=\frac{|(A-B)\times(14,48)|}{\sqrt{14^2+48^2}}
        =\frac{144}{50}=\frac{72}{25}。
        \]`,
        String.raw`四邊形 \(PABQ\) 是一組對邊平行的梯形，平行邊長為 \(AP=1、BQ=2\)，高為 \(72/25\)，故
        \[
        [PABQ]=\frac{1+2}{2}\cdot\frac{72}{25}
        =\frac{108}{25}。
        \]`
      ]
    },

    "112B-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`抽水站用電量 \(y\) 與馬達轉速 \(x\) 的三次方成正比。哪一種圖形最能描述兩者關係？`,
      options: {
        "1": "通過原點、遞增且向上彎曲的曲線",
        "2": "通過原點的直線",
        "3": "通過原點、遞增且向下彎曲的曲線",
        "4": "先升後降再升的曲線",
        "5": "先升後降並趨近橫軸的曲線"
      },
      solution: [
        String.raw`題意給出
        \[
        y=kx^3,\qquad k>0。
        \]
        在實際轉速 \(x\ge0\) 的範圍內，圖形通過原點、單調遞增，而且斜率隨 \(x\) 增加。`
      ],
      optionAnalysis: {
        "1": String.raw`符合 \(y=kx^3\) 在第一象限的形狀。`,
        "2": "直線表示與 \(x\) 成正比，不是與 \(x^3\) 成正比。",
        "3": "向下彎曲較像次方小於 1 的冪函數。",
        "4": String.raw`\(kx^3\) 在 \(x\ge0\) 不會出現局部極大、極小。`,
        "5": String.raw`\(kx^3\) 不會在轉速增加時下降。`
      }
    },
    "112B-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`若
      \[
      \begin{bmatrix}0&1\\1&0\end{bmatrix}
      \begin{bmatrix}a&b\\c&d\end{bmatrix}
      \begin{bmatrix}1&0\\0&-2\end{bmatrix}
      =
      \begin{bmatrix}3&-4\\-9&-7\end{bmatrix},
      \]
      求 \(c-2b\)。`,
      options: { "1": "-11", "2": "-4", "3": "1", "4": "10", "5": "11" },
      solution: [
        String.raw`左乘第一個矩陣會交換兩列，再右乘對角矩陣，得到
        \[
        \begin{bmatrix}c&-2d\\a&-2b\end{bmatrix}
        =
        \begin{bmatrix}3&-4\\-9&-7\end{bmatrix}。
        \]`,
        String.raw`所以 \(c=3、b=\frac72\)，故 \(c-2b=3-7=-4\)。`
      ],
      optionAnalysis: {
        "1": "矩陣乘法的列、行變換位置有誤。",
        "2": String.raw`由 \(c=3、b=7/2\) 得 \(-4\)。`,
        "3": "未將右乘矩陣造成的第二行縮放納入。",
        "4": "符號與第二欄的 \(-2\) 倍關係不符。",
        "5": "把 \(-2b=-7\) 誤解為 \(2b=-7\)。"
      }
    },
    "112B-3": {
      verified: true, sourcePage: 1,
      stem: "甲、乙兩大樓水平距離 150 公尺，從較高的甲樓頂看乙樓頂的俯角為 22°。連接兩樓頂的直線繩索長度為何？",
      options: {
        "1": "150", "2": String.raw`\(150\sin22^\circ\)`,
        "3": String.raw`\(150\cos22^\circ\)`,
        "4": String.raw`\(\frac{150}{\cos22^\circ}\)`,
        "5": String.raw`\(\frac{150}{\sin22^\circ}\)`
      },
      solution: [
        String.raw`繩長是直角三角形斜邊，150 公尺是俯角 \(22^\circ\) 的鄰邊，因此
        \[
        \cos22^\circ=\frac{150}{\text{繩長}}。
        \]
        繩長為 \(\frac{150}{\cos22^\circ}\)。`
      ],
      optionAnalysis: {
        "1": "150 是水平鄰邊，不是斜邊。",
        "2": "把鄰邊誤乘正弦。",
        "3": "把已知鄰邊又乘餘弦，所得比鄰邊更短。",
        "4": "由鄰邊除以餘弦得到斜邊。",
        "5": "正弦對應的是對邊與斜邊，不符合已知量。"
      }
    },
    "112B-4": {
      verified: true, sourcePage: 1,
      stem: "29 名考生成績相異，第 25、50、75、95 百分位數依序為 41、60、74、92。將成績較高的前 15 名各加 5 分，其餘不變。調整後四個百分位數為何？",
      options: {
        "1": "(41, 60, 74, 92)", "2": "(41, 60, 74, 97)",
        "3": "(41, 65, 79, 97)", "4": "(46, 65, 79, 92)",
        "5": "(46, 65, 79, 97)"
      },
      solution: [
        "29 人由低到高排列時，中位數是第 15 名；第 25 百分位仍在後 14 名中，其餘三個百分位落在前 15 名。",
        "加分不改變名次，因此第 25 百分位仍為 41，其餘分別加 5，得到 (41, 65, 79, 97)。"
      ],
      optionAnalysis: {
        "1": "漏掉前三個位於高分組的百分位數調整。",
        "2": "第 50、75 百分位也位於加 5 分的前 15 名。",
        "3": "第 25 百分位不變，其餘三者各加 5。",
        "4": "第 25 百分位不在高分前 15 名，第 95 百分位則在。",
        "5": "第 25 百分位不應加 5。"
      }
    },
    "112B-5": {
      verified: true, sourcePage: 2,
      stem: "袋中有編號 1～100 的球，等可能抽一球。在下列哪個已知條件下，抽到 7 號球的條件機率最大？",
      options: {
        "1": "號碼是奇數", "2": "號碼是質數", "3": "號碼是 7 的倍數",
        "4": "號碼不是 5 的倍數", "5": "號碼小於 10"
      },
      solution: [
        "五個條件事件都包含 7，因此條件機率等於 1 除以該事件包含的球數。",
        String.raw`五個事件大小依序為 \(50、25、14、80、9\)，所以機率最大的是 \(\frac19\)，即號碼小於 10。`
      ],
      optionAnalysis: {
        "1": String.raw`條件機率為 \(1/50\)。`,
        "2": String.raw`1～100 有 25 個質數，條件機率為 \(1/25\)。`,
        "3": String.raw`有 14 個 7 的倍數，條件機率為 \(1/14\)。`,
        "4": String.raw`有 80 個號碼不是 5 的倍數，條件機率為 \(1/80\)。`,
        "5": String.raw`1～9 只有 9 顆球，條件機率 \(1/9\) 最大。`
      }
    },
    "112B-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`令
      \[
      f(x)=x^3+ax^2+bx+c,\qquad g(x)=ax^3+bx^2+cx+d,\ a\ne0。
      \]
      某甲誤算 \(g\) 除以 \(f\)，餘式為 \(-3x-17\)。若正確的 \(f\) 除以 \(g\) 餘式為 \(px^2+qx+r\)，求 \(p\)。`,
      options: { "1": "-3", "2": "-1", "3": "0", "4": "2", "5": "3" },
      solution: [
        String.raw`誤算時的商為 \(a\)，所以
        \[
        g(x)=af(x)-3x-17。
        \]
        比較二次項得 \(b=a^2\)。`,
        String.raw`正確相除時商為 \(1/a\)，餘式的二次項係數為
        \[
        p=a-\frac ba=a-\frac{a^2}{a}=0。
        \]`
      ],
      optionAnalysis: {
        "1": "-3 是誤算餘式的一次項係數。",
        "2": "未由最高次項先決定兩次除法的商。",
        "3": String.raw`由 \(b=a^2\) 得 \(p=a-b/a=0\)。`,
        "4": "不符合二次項係數比較結果。",
        "5": "把誤算餘式的係數符號或次數混用。"
      }
    },
    "112B-7": {
      verified: true, sourcePage: 2,
      stem: "手電筒光線形成頂角 60° 的直圓錐。圓錐軸垂直於牆壁與地板的交線。若牆面上的光線邊緣是拋物線的一部分，地板上的光線邊緣是哪一種圓錐曲線？",
      options: {
        "1": "兩相交直線", "2": "圓形", "3": "拋物線",
        "4": "長短軸不相等的橢圓", "5": "雙曲線"
      },
      solution: [
        "牆面切平面與圓錐的一條母線平行，所以形成拋物線。地板與牆面垂直，對此圓錐只截到單一錐面，且切面不垂直於圓錐軸。",
        "因此截痕為橢圓；又因切面不垂直於軸，並非圓，而是長短軸不相等的橢圓。"
      ],
      optionAnalysis: {
        "1": "切平面沒有通過圓錐頂點。",
        "2": "切面不垂直於圓錐軸，所以不是圓。",
        "3": "牆面是拋物線截面，地板切面的傾角不同。",
        "4": "地板只截單一錐面且非垂直軸，得到非圓橢圓。",
        "5": "地板切面不會同時截到上下兩個錐面。"
      }
    },
    "112B-8": {
      verified: true, sourcePage: 3,
      stem: "電子看板以 A、B、A、B…輪播，每段皆為整數 \(T\) 分鐘。某甲恰逢 A 開始播放，30 分鐘後回來，恰逢 B 開始播放。哪些可能是 \(T\)？",
      options: { "1": "15", "2": "10", "3": "8", "4": "6", "5": "5" },
      solution: [
        String.raw`B 開始播放的時刻是 \(T、3T、5T、\ldots\)，所以
        \[
        \frac{30}{T}
        \]
        必須是奇數。`,
        "逐一檢查，\(30/10=3、30/6=5\) 為奇數，故 \(T=10、6\)。"
      ],
      optionAnalysis: {
        "1": String.raw`\(30/15=2\)，此時開始播 A。`,
        "2": String.raw`\(30/10=3\) 為奇數，開始播 B。`,
        "3": "30 不是 8 的整數倍，並非恰好開始播放。",
        "4": String.raw`\(30/6=5\) 為奇數，開始播 B。`,
        "5": String.raw`\(30/5=6\) 為偶數，開始播 A。`
      }
    },
    "112B-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`已知 \(a=6、b=\frac{20}{3}、c=2\sqrt{10}\)，而 \(d\) 為有理數。數線上標為 \(A(a)、B(b)、C(c)、D(d)\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(a+b+c+d\) 必為有理數`,
        "2": String.raw`\(abcd\) 必為無理數`,
        "3": String.raw`\(D、C\) 的距離可能為 \(2\sqrt{10}+6\)`,
        "4": String.raw`\(A、B\) 的中點在 \(C\) 右邊`,
        "5": String.raw`與 \(B\) 距離小於 8 的點中，正整數有 14 個、負整數有 1 個`
      },
      solution: [
        String.raw`取 \(d=-6\)，則 \(|d-c|=2\sqrt{10}+6\)，所以（3）正確。`,
        String.raw`\(A、B\) 中點為 \(19/3\)，而
        \[
        \left(\frac{19}{3}\right)^2=\frac{361}{9}>40=(2\sqrt{10})^2，
        \]
        故中點在 \(C\) 右邊，（4）正確。`,
        String.raw`與 \(B=20/3\) 距離小於 8 的區間是
        \[
        \left(-\frac43,\frac{44}{3}\right)，
        \]
        其中正整數為 1～14，負整數只有 \(-1\)，故（5）正確。`
      ],
      optionAnalysis: {
        "1": "前三個有理數與 \(c\) 的和仍含非零無理數部分。",
        "2": String.raw`若 \(d=0\)，乘積為 0，是有理數。`,
        "3": String.raw`取有理數 \(d=-6\) 即可達成。`,
        "4": String.raw`中點 \(19/3>2\sqrt{10}\)。`,
        "5": String.raw`區間內正整數 1～14 共 14 個，負整數只有 \(-1\)。`
      }
    },
    "112B-10": {
      verified: true, sourcePage: 3,
      stem: "12 點時甲、乙培養皿細菌數為 X、Y。甲每 3 小時變 2 倍，乙每 2 小時變 2 倍；18 點時兩者相同。選出正確敘述。",
      options: {
        "1": String.raw`\(X>Y\)`, "2": String.raw`13 點甲為 \(\frac43X\)`,
        "3": String.raw`15 點乙為 \(3Y\)`, "4": "19 點乙為甲的 1.5 倍",
        "5": "24 點乙為甲的 2 倍"
      },
      solution: [
        String.raw`經過 \(t\) 小時後，兩者分別為
        \[
        X2^{t/3},\qquad Y2^{t/2}。
        \]
        18 點時 \(4X=8Y\)，所以 \(X=2Y>Y\)，（1）正確。`,
        String.raw`24 點時 \(t=12\)，比值為
        \[
        \frac{Y2^6}{X2^4}=\frac{64Y}{16(2Y)}=2，
        \]
        故（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`由 18 點相等可得 \(X=2Y\)。`,
        "2": String.raw`13 點甲為 \(X2^{1/3}\)，不是 \(4X/3\)。`,
        "3": String.raw`15 點乙為 \(Y2^{3/2}=2\sqrt2Y\)。`,
        "4": String.raw`19 點乙甲比為 \(2^{1/6}\)，不是 1.5。`,
        "5": "24 點乙甲比恰為 2。"
      }
    },
    "112B-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`一圓圓心為 \(A(a,b)\)，與兩坐標軸皆相切。另有 \(P(c,c)\)，其中 \(a>c>0\)，且 \(PA=a+c\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(a=b\)`, "2": String.raw`\(P\) 在 \(x+y=0\) 上`,
        "3": "P 在圓內", "4": String.raw`\(\frac{a+c}{b-c}=\sqrt2\)`,
        "5": String.raw`\(\frac ac=2+3\sqrt2\)`
      },
      solution: [
        String.raw`圓與兩軸相切給 \(|a|=|b|\)。若 \(b=-a\)，距離條件會導致 \(a=c\)，與 \(a>c\) 矛盾，所以 \(b=a\)，（1）正確。`,
        String.raw`此時
        \[
        PA=\sqrt{(a-c)^2+(a-c)^2}=\sqrt2(a-c)=a+c，
        \]
        因而 \(\frac{a+c}{b-c}=\sqrt2\)，（4）正確。`
      ],
      optionAnalysis: {
        "1": "由相切與距離條件排除 \(b=-a\)，故 \(a=b\)。",
        "2": String.raw`\(P=(c,c)\) 位在 \(x-y=0\)，不是 \(x+y=0\)。`,
        "3": String.raw`\(PA=a+c>a\)，大於半徑，所以 P 在圓外。`,
        "4": String.raw`距離式直接給 \((a+c)/(a-c)=\sqrt2\)。`,
        "5": String.raw`實際可得 \(a/c=3+2\sqrt2\)，不是 \(2+3\sqrt2\)。`
      }
    },
    "112B-12": {
      verified: true, sourcePage: 4,
      stem: "球形地球儀半徑為 R。A、B、C 在赤道，經度為東經 0°、60°、90°；D、E 在北緯 30°，經度為東經 0°、180°。選出正確敘述。",
      options: {
        "1": "赤道長度等於東經 0°、180° 兩條經線長度總和",
        "2": "北緯 45° 線長等於赤道長的一半",
        "3": "A 沿赤道到 B 的最短路徑，等於 D 沿東經 0° 到北極的路徑",
        "4": "D 沿北緯 30° 到 E，等於 D 經北極再到 E 的路徑",
        "5": "北極到 A 的直線與北極到 C 的直線互相垂直"
      },
      solution: [
        String.raw`赤道長為 \(2\pi R\)。每一條從北極到南極的經線長為 \(\pi R\)，東經 0°、180° 兩條合計 \(2\pi R\)，故（1）正確。`,
        String.raw`A 到 B 的赤道圓心角為 \(60^\circ\)，弧長 \(\pi R/3\)；D 在北緯 \(30^\circ\)，到北極的緯度差也是 \(60^\circ\)，弧長同為 \(\pi R/3\)，故（3）正確。`
      ],
      optionAnalysis: {
        "1": "赤道一整圈與兩條半圓經線的總長都為 \(2\pi R\)。",
        "2": String.raw`北緯 45° 線長是赤道的 \(\cos45^\circ=\sqrt2/2\) 倍。`,
        "3": "兩段都是半徑 R、圓心角 60° 的大圓弧。",
        "4": String.raw`沿緯線為 \(\pi R\cos30^\circ\)，經北極為 \(2\pi R/3\)，不相等。`,
        "5": "以三維坐標計算兩方向向量的內積不為 0。"
      }
    },
    "112B-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`正實數 \(a、b\) 滿足
      \[
      ab^2=10^5,\qquad a^2b=10^3。
      \]
      求 \(\log b\)。`,
      solution: [
        String.raw`令 \(A=\log a、B=\log b\)，取常用對數得
        \[
        A+2B=5,\qquad 2A+B=3。
        \]`,
        String.raw`解聯立方程式得 \(B=\frac73\)，所以 \(\log b=\frac73\)。`
      ]
    },
    "112B-14": {
      verified: true, sourcePage: 5,
      stem: "從 1～20 取相異三數 \(a<b<c\)，使其成等差數列。求有序數組 \((a,b,c)\) 的數量。",
      solution: [
        String.raw`設公差為正整數 \(d\)，則 \(a+2d\le20\)。固定 \(d\) 時，\(a\) 有 \(20-2d\) 種；\(d=1,\ldots,9\)。`,
        String.raw`因此總數為
        \[
        \sum_{d=1}^{9}(20-2d)=18+16+\cdots+2=90。
        \]`
      ]
    },
    "112B-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`每一步都前進 2 單位，走完一步後向左轉 \(15^\circ\)。求 \(\overrightarrow{P_2P_3}\) 與 \(\overrightarrow{P_5P_6}\) 的內積。`,
      solution: [
        "兩向量之間相隔 3 次轉向，所以夾角為 \(3\cdot15^\circ=45^\circ\)，且兩向量長都為 2。",
        String.raw`因此
        \[
        \overrightarrow{P_2P_3}\cdot\overrightarrow{P_5P_6}
        =2\cdot2\cos45^\circ=2\sqrt2。
        \]`
      ]
    },
    "112B-16": {
      verified: true, sourcePage: 5,
      stem: "正方形紙張左下角為 O，內部點 P 距左邊界 6 公分、距下邊界 8 公分。將 O 往內摺到 P，求摺入三角形面積。",
      solution: [
        String.raw`令 \(O=(0,0)、P=(6,8)\)。摺痕是 \(\overline{OP}\) 的中垂線；摺痕上 \((x,y)\) 滿足
        \[
        x^2+y^2=(x-6)^2+(y-8)^2，
        \]
        化為 \(3x+4y=25\)。`,
        String.raw`摺痕與兩軸截距為 \(25/3、25/4\)，故摺入三角形面積
        \[
        \frac12\cdot\frac{25}{3}\cdot\frac{25}{4}
        =\frac{625}{24}。
        \]`
      ]
    },
    "112B-17": {
      verified: true, sourcePage: 5,
      stem: "用 0、1、2 組成所有長度 \(n\) 的序列。令 \(a(n)\) 為所有序列中相鄰「00」出現次數的總和。求 \(a(5)\)。",
      solution: [
        "長度 5 有 4 個相鄰位置。固定其中一個位置為 00，其他 3 位各有 3 種選擇，所以該位置在所有序列中共貢獻 \(3^3=27\) 次。",
        String.raw`把四個位置的貢獻相加：
        \[
        a(5)=4\cdot27=108。
        \]
        同一序列若有多組 00，會在不同固定位置各被計一次，正符合題意。`
      ]
    },
    "112B-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`畫布上三根平行電線桿的底座 \(A_1=(0,0)、A_2、A_3\) 在 \(L:x+3y=0\)，頂端 \(B_1=(0,3)、B_2、B_3\) 在 \(M:2x-3y+9=0\)。已知 \(A_3B_3=2A_1B_1\)，兩線交於消失點 \(P\)。若 \(\overrightarrow{PA_1}=k\overrightarrow{PA_3}\)，求 \(k\)。`,
      solution: [
        String.raw`聯立 \(L、M\) 得
        \[
        P=(-3,1)。
        \]
        又 \(A_3B_3=6\)，可得 \(A_3=(3,-1)\)。`,
        String.raw`因此
        \[
        \overrightarrow{PA_1}=(3,-1),\qquad
        \overrightarrow{PA_3}=(6,-2)=2\overrightarrow{PA_1}，
        \]
        所以 \(k=\frac12\)。`
      ]
    },
    "112B-19": {
      verified: true, sourcePage: 6,
      stem: "承第 18 題，求消失點 P 與第三根電線桿頂端 \(B_3\) 的坐標。",
      solution: [
        String.raw`聯立
        \[
        \begin{cases}
        x+3y=0,\\
        2x-3y+9=0
        \end{cases}
        \]
        得 \(P=(-3,1)\)。`,
        String.raw`因 \(\overrightarrow{PA_3}=2\overrightarrow{PA_1}\)，\(A_1\) 是 \(P、A_3\) 中點，所以 \(A_3=(3,-1)\)。又 \(A_3B_3=2A_1B_1=6\)，電線桿平行 \(y\) 軸，故
        \[
        B_3=(3,5)。
        \]`
      ]
    },
    "112B-20": {
      verified: true, sourcePage: 6,
      stem: "承前題，中間電線桿上的蜜蜂距底座與頂端之比為 \(1:2\)。在畫布線段 \(A_2B_2\) 上對應點為 Q，且 \(A_2Q:QB_2=1:2\)。求 Q 坐標。",
      solution: [
        String.raw`透視交叉線 \(A_1B_3、A_3B_1\) 的交點在 \(A_2B_2\) 上。由相似三角形可得
        \[
        A_1A_2:A_2A_3=1:2，
        \]
        故 \(A_2=(1,-1/3)\)。同理 \(B_2=(1,11/3)\)。`,
        String.raw`由內分公式及 \(A_2Q:QB_2=1:2\)，
        \[
        Q=\frac23A_2+\frac13B_2=(1,1)。
        \]`
      ]
    }
  });
})();
