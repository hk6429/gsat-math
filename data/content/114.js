(() => {
  Object.assign(window.MATH_CONTENT, {
    "114A-1": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`不透明袋中有藍、綠色球各若干顆，且球上皆有 1 或 2 的編號。各類球數如下：
      \[
      \begin{array}{c|cc}
      &\text{藍}&\text{綠}\\\hline
      1\text{ 號}&2&4\\
      2\text{ 號}&3&k
      \end{array}
      \]
      從袋中隨機抽取一球，每顆球被抽到的機率相等。若「抽到藍色球」與「抽到 1 號球」互相獨立，求 \(k\)。`,
      options: { "1": "2", "2": "3", "3": "4", "4": "5", "5": "6" },
      solution: [
        String.raw`總球數為 \(9+k\)，故
        \[
        P(\text{藍})=\frac5{9+k},\quad
        P(1\text{ 號})=\frac6{9+k},\quad
        P(\text{藍且 1 號})=\frac2{9+k}。
        \]`,
        String.raw`由事件獨立，
        \[
        \frac2{9+k}=\frac5{9+k}\cdot\frac6{9+k}，
        \]
        得 \(2(9+k)=30\)，所以 \(k=6\)。`
      ],
      optionAnalysis: {
        "1": String.raw`代入 \(k=2\) 時，交集機率不等於兩事件機率的乘積。`,
        "2": String.raw`未依獨立事件條件 \(P(A\cap B)=P(A)P(B)\) 完整列式。`,
        "3": String.raw`把某一列或某一欄的球數誤當成總球數。`,
        "4": String.raw`若只比較藍球與綠球總數，無法保證兩事件獨立。`,
        "5": String.raw`由 \(\frac2{9+k}=\frac5{9+k}\frac6{9+k}\) 解得 \(k=6\)。`
      }
    },
    "114A-2": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`坐標平面上，\(P(a,0)\) 為 \(x\) 軸上一點，其中 \(a>0\)。令 \(L_1、L_2\) 為通過 \(P\) 點，斜率分別為 \(-\frac43、-\frac32\) 的直線。已知 \(L_1、L_2\) 分別與兩坐標軸圍成的兩個直角三角形面積差為 3，求 \(a\)。`,
      options: {
        "1": String.raw`\(3\sqrt2\)`,
        "2": "6",
        "3": String.raw`\(6\sqrt2\)`,
        "4": "9",
        "5": String.raw`\(8\sqrt2\)`
      },
      solution: [
        String.raw`兩直線的 \(x\) 截距皆為 \(a\)，\(y\) 截距分別為 \(\frac43a、\frac32a\)。`,
        String.raw`兩個直角三角形面積分別為
        \[
        \frac12a\cdot\frac43a=\frac23a^2,\qquad
        \frac12a\cdot\frac32a=\frac34a^2。
        \]`,
        String.raw`面積差為 \(\frac1{12}a^2=3\)，故 \(a^2=36\)。因 \(a>0\)，所以 \(a=6\)。`
      ],
      optionAnalysis: {
        "1": String.raw`面積含有兩個截距的乘積，解方程式時須處理 \(a^2\)。`,
        "2": String.raw`由兩面積差 \(\frac1{12}a^2=3\) 得 \(a=6\)。`,
        "3": String.raw`把面積公式中的 \(\frac12\) 或兩斜率差處理錯誤。`,
        "4": String.raw`未對 \(a^2=36\) 正確取正平方根。`,
        "5": String.raw`不符合兩個截距三角形的面積差條件。`
      }
    },
    "114A-3": {
      verified: true,
      sourcePage: 1,
      stem: "某校音樂會包含 5 個鋼琴、4 個小提琴、3 個歌唱表演，共 12 個不同曲目。若同類表演必須排在一起，且歌唱必須排在鋼琴之後或小提琴之後，求可能的曲目排列方式數。",
      options: {
        "1": String.raw`\(5!\times4!\times3!\)`,
        "2": String.raw`\(2\times5!\times4!\times3!\)`,
        "3": String.raw`\(3\times5!\times4!\times3!\)`,
        "4": String.raw`\(4\times5!\times4!\times3!\)`,
        "5": String.raw`\(6\times5!\times4!\times3!\)`
      },
      solution: [
        String.raw`先把鋼琴、小提琴、歌唱各視為一個區塊。三區塊共有 \(3!=6\) 種順序。`,
        String.raw`歌唱必須在鋼琴或小提琴至少一類之後，等同歌唱區塊不能排第一；歌唱排第二有 2 種、排第三有 2 種，共 4 種區塊順序。`,
        String.raw`各區塊內曲目分別可排 \(5!、4!、3!\) 種，因此總數為
        \[
        4\times5!\times4!\times3!。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`只算一種區塊順序，漏掉其他符合條件的排列。`,
        "2": String.raw`只計歌唱排在最後，漏掉歌唱排第二的兩種情況。`,
        "3": String.raw`三類區塊的合法順序不是 3 種，而是 4 種。`,
        "4": String.raw`歌唱不排第一共有 4 種區塊順序，再乘各區塊內排列。`,
        "5": String.raw`把全部 \(3!\) 種區塊順序都算入，包含歌唱排第一的兩種非法情況。`
      }
    },
    "114A-4": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`坐標平面上，\(x、y\) 坐標均為整數的點稱為格子點。求函數圖形
      \[
      y=\log_2x、
      \]
      \(x\) 軸與直線 \(x=\frac{61}{2}\) 所圍有界區域內部（不含邊界）的格子點數。`,
      options: { "1": "88", "2": "89", "3": "90", "4": "91", "5": "92" },
      solution: [
        String.raw`內部格子點須滿足 \(1<x<30.5\) 且 \(0<y<\log_2x\)，所以整數 \(x\) 為 \(2\) 至 \(30\)。`,
        String.raw`依 \(x\) 分段計數正整數 \(y\)：
        \[
        \begin{array}{c|c}
        x\text{ 範圍}&y\text{ 的個數}\\\hline
        2&0\\
        3&1\\
        4&1\\
        5\sim7&2\\
        8&2\\
        9\sim15&3\\
        16&3\\
        17\sim30&4
        \end{array}
        \]`,
        String.raw`合計
        \[
        0+1+1+3\cdot2+2+7\cdot3+3+14\cdot4=90。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`常見原因是漏算靠近 \(x=30\) 的格子點。`,
        "2": String.raw`需注意 \(x=4,8,16\) 時圖形上的整數點屬邊界，不能算入。`,
        "3": String.raw`逐段排除對數曲線與坐標軸邊界後，共 90 點。`,
        "4": String.raw`可能把某個位於 \(y=\log_2x\) 上的邊界點算入。`,
        "5": String.raw`可能同時把兩個對數值為整數的邊界點誤算入。`
      }
    },
    "114A-5": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`設 \(0\le\theta\le2\pi\)。所有同時滿足
      \[
      \sin2\theta>\sin\theta,\qquad \cos2\theta>\cos\theta
      \]
      的 \(\theta\) 可表為 \(a\pi<\theta<b\pi\)。求 \(b-a\)。`,
      options: {
        "1": String.raw`\(\frac13\)`,
        "2": String.raw`\(\frac12\)`,
        "3": String.raw`\(\frac23\)`,
        "4": String.raw`\(\frac34\)`,
        "5": "1"
      },
      solution: [
        String.raw`第二個不等式可化為
        \[
        2\cos^2\theta-\cos\theta-1
        =(\cos\theta-1)(2\cos\theta+1)>0。
        \]
        在題設範圍內須有 \(\cos\theta<-\frac12\)，故 \(\frac{2\pi}{3}<\theta<\frac{4\pi}{3}\)。`,
        String.raw`第一個不等式為
        \[
        \sin\theta(2\cos\theta-1)>0。
        \]
        在上述區間中 \(2\cos\theta-1<0\)，因此還要 \(\sin\theta<0\)，得到
        \[
        \pi<\theta<\frac{4\pi}{3}。
        \]`,
        String.raw`所以 \(a=1、b=\frac43\)，故 \(b-a=\frac13\)。`
      ],
      optionAnalysis: {
        "1": String.raw`兩個不等式取交集後為 \((\pi,\frac{4\pi}{3})\)，長度係數為 \(\frac13\)。`,
        "2": String.raw`只依正弦或餘弦的正負判斷，未取兩條件交集。`,
        "3": String.raw`這是 \((\frac{2\pi}{3},\frac{4\pi}{3})\) 的長度，但尚未套用第一個不等式。`,
        "4": String.raw`不符合兩個三角不等式的共同解集。`,
        "5": String.raw`共同解集只落在第三象限的一段，並非長達 \(\pi\)。`
      }
    },
    "114A-6": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`坐標空間中有三個彼此互相垂直的向量 \(\vec u,\vec v,\vec w\)。已知
      \[
      \vec u-\vec v=(2,-1,0),\qquad
      \vec v-\vec w=(-1,2,3)。
      \]
      求由 \(\vec u,\vec v,\vec w\) 張出的平行六面體體積。`,
      options: {
        "1": String.raw`\(2\sqrt5\)`,
        "2": String.raw`\(5\sqrt2\)`,
        "3": String.raw`\(2\sqrt{10}\)`,
        "4": String.raw`\(4\sqrt5\)`,
        "5": String.raw`\(4\sqrt{10}\)`
      },
      solution: [
        String.raw`由互相垂直，
        \[
        |\vec u-\vec v|^2=|\vec u|^2+|\vec v|^2=5，
        \]
        \[
        |\vec v-\vec w|^2=|\vec v|^2+|\vec w|^2=14。
        \]`,
        String.raw`又
        \[
        (\vec u-\vec v)\cdot(\vec v-\vec w)
        =-|\vec v|^2=(2,-1,0)\cdot(-1,2,3)=-4，
        \]
        所以 \(|\vec v|=2\)。進而得 \(|\vec u|=1、|\vec w|=\sqrt{10}\)。`,
        String.raw`三向量互相垂直，體積就是三邊長乘積：
        \[
        V=|\vec u||\vec v||\vec w|=1\cdot2\cdot\sqrt{10}=2\sqrt{10}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`未同時利用兩個差向量的內積求出 \(|\vec v|^2\)。`,
        "2": String.raw`把某個平方長直接當成向量長度。`,
        "3": String.raw`三個互相垂直向量長度為 \(1,2,\sqrt{10}\)，乘積正確。`,
        "4": String.raw`多乘了一個 2 或錯算 \(|\vec u|\)。`,
        "5": String.raw`把 \(|\vec v|^2=4\) 當成 \(|\vec v|=4\)。`
      }
    },
    "114A-7": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`數列 \(\langle a_n\rangle\) 滿足
      \[
      3a_{n+1}=a_n+n\quad(n\in\mathbb N),\qquad a_1=2。
      \]
      令
      \[
      b_n=a_n-\frac n2+\frac34。
      \]
      試選出正確的選項。`,
      options: {
        "1": String.raw`\(a_2=2\)`,
        "2": String.raw`\(b_2=\frac34\)`,
        "3": String.raw`數列 \(\langle b_n\rangle\) 是公比為 \(\frac23\) 的等比數列`,
        "4": String.raw`對任意正整數 \(n\)，\(3^na_n\) 皆為正整數`,
        "5": String.raw`\(b_{10}<10^{-4}\)`
      },
      solution: [
        String.raw`由遞迴式 \(a_2=\frac{a_1+1}{3}=1\)，所以選項（1）錯；而
        \[
        b_2=1-1+\frac34=\frac34，
        \]
        選項（2）正確。`,
        String.raw`代入定義可得
        \[
        b_{n+1}=a_{n+1}-\frac{n+1}{2}+\frac34
        =\frac13b_n，
        \]
        因此公比是 \(\frac13\)，選項（3）錯誤。`,
        String.raw`令 \(c_n=3^na_n\)，則
        \[
        c_{n+1}=c_n+n3^n。
        \]
        由 \(c_1=6\) 可用歸納法知每個 \(c_n\) 都是正整數，選項（4）正確。`,
        String.raw`\(b_1=\frac94\)，所以
        \[
        b_{10}=\frac94\left(\frac13\right)^9=\frac1{4\cdot3^7}>10^{-4}，
        \]
        選項（5）錯誤。`
      ],
      optionAnalysis: {
        "1": String.raw`直接代 \(n=1\) 得 \(3a_2=3\)，所以 \(a_2=1\)。`,
        "2": String.raw`由 \(a_2=1\) 代入定義，確得 \(b_2=\frac34\)。`,
        "3": String.raw`正確公比是 \(\frac13\)，不是 \(\frac23\)。`,
        "4": String.raw`\(3^{n+1}a_{n+1}=3^na_n+n3^n\)，可由歸納法證明為正整數。`,
        "5": String.raw`精確值為 \(\frac1{8748}\approx1.143\times10^{-4}\)，仍大於 \(10^{-4}\)。`
      }
    },
    "114A-8": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`考慮坐標平面上滿足
      \[
      \frac{2^{x^2}}8=\frac{4^x}{2^{y^2}}
      \]
      的點 \(P(x,y)\)，試選出正確的選項。`,
      options: {
        "1": String.raw`當 \(x=3\) 時，滿足方程式的 \(y\) 有相異 2 個`,
        "2": String.raw`若 \((a,b)\) 滿足方程式，則 \((-a,-b)\) 也滿足`,
        "3": "所有可能的點構成的圖形為一個圓",
        "4": String.raw`點 \(P(x,y)\) 可能在直線 \(x+y=4\) 上`,
        "5": String.raw`對所有可能的點 \(P(x,y)\)，\(x-y\) 的最大值為 \(1+2\sqrt2\)`
      },
      solution: [
        String.raw`全部改寫成以 2 為底：
        \[
        x^2-3=2x-y^2
        \quad\Longleftrightarrow\quad
        (x-1)^2+y^2=4。
        \]
        軌跡是圓心 \((1,0)\)、半徑 2 的圓，所以選項（3）正確。`,
        String.raw`當 \(x=3\) 時只有 \(y=0\)；圓對 \(x\) 軸對稱，但不對原點對稱。直線 \(x+y=4\) 到圓心距離為 \(\frac3{\sqrt2}>2\)，不與圓相交。`,
        String.raw`在線性函數 \(x-y\) 的方向 \((1,-1)\) 上，最大值為
        \[
        (1,0)\cdot(1,-1)+2\sqrt{1^2+(-1)^2}=1+2\sqrt2，
        \]
        所以選項（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`\(x=3\) 是圓的最右端，只得到 \(y=0\) 一個解。`,
        "2": String.raw`圓心是 \((1,0)\)，圖形不以原點為中心對稱。`,
        "3": String.raw`方程式等價於 \((x-1)^2+y^2=4\)，確為一個圓。`,
        "4": String.raw`直線到圓心距離 \(\frac3{\sqrt2}\) 大於半徑 2，沒有交點。`,
        "5": String.raw`以圓心投影值加上半徑乘方向向量長度，得 \(1+2\sqrt2\)。`
      }
    },
    "114A-9": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`設 \(b、c\) 為實數。已知
      \[
      x^2+bx+c=0
      \]
      有實根，但
      \[
      x^2+(b+2)x+c=0
      \]
      沒有實根。試選出正確的選項。`,
      options: {
        "1": String.raw`\(c<0\)`,
        "2": String.raw`\(b<0\)`,
        "3": String.raw`\(x^2+(b+1)x+c=0\) 有實根`,
        "4": String.raw`\(x^2+(b+2)x-c=0\) 有實根`,
        "5": String.raw`\(x^2+(b-2)x+c=0\) 有實根`
      },
      solution: [
        String.raw`由判別式條件，
        \[
        b^2-4c\ge0,\qquad (b+2)^2-4c<0。
        \]
        因此
        \[
        (b+2)^2<4c\le b^2。
        \]`,
        String.raw`上式先給出 \(c>0\)，並由 \((b+2)^2<b^2\) 得 \(b<-1\)，故選項（2）正確、（1）錯誤。`,
        String.raw`選項（4）的判別式為 \((b+2)^2+4c>0\)，必有實根。`,
        String.raw`因 \(b<-1\)，有 \((b-2)^2>b^2\ge4c\)，所以選項（5）的判別式為正，必有實根。至於 \((b+1)^2-4c\) 不一定非負，選項（3）不能保證。`
      ],
      optionAnalysis: {
        "1": String.raw`由 \((b+2)^2<4c\) 可知 \(c>0\)，方向相反。`,
        "2": String.raw`由 \((b+2)^2<b^2\) 解得 \(b<-1\)，因此必有 \(b<0\)。`,
        "3": String.raw`條件沒有保證 \((b+1)^2\ge4c\)，可能沒有實根。`,
        "4": String.raw`判別式 \((b+2)^2+4c\) 為正，必有實根。`,
        "5": String.raw`\(b<-1\) 使 \((b-2)^2>b^2\ge4c\)，判別式非負。`
      }
    },
    "114A-10": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`令 \(\Gamma\) 為 \(y=\sin\pi x\) 在 \(0\le x\le3\) 內的圖形。水平直線 \(L:y=k\) 與 \(\Gamma\) 相交，其中三個交點
      \[
      P(x_1,k),\ Q(x_2,k),\ R(x_3,k)
      \]
      滿足 \(x_1<x_2<1<x_3\)。試選出正確的選項。`,
      options: {
        "1": String.raw`\(k>0\)`,
        "2": String.raw`\(L\) 與 \(\Gamma\) 恰有 3 個交點`,
        "3": String.raw`\(x_1+x_2<1\)`,
        "4": String.raw`若 \(2\overline{PQ}=\overline{QR}\)，則 \(k=\frac12\)`,
        "5": String.raw`\(L\) 與 \(\Gamma\) 所有交點的 \(x\) 坐標之和大於 5`
      },
      solution: [
        String.raw`在 \(0<x<1\) 有兩個交點，故 \(0<k<1\)，選項（1）正確。設 \(x_1=t\)，則由正弦圖形對稱性，
        \[
        x_2=1-t,\quad x_3=2+t,\quad x_4=3-t，
        \]
        所以其實共有 4 個交點。`,
        String.raw`\(x_1+x_2=1\)，故選項（3）錯。四交點橫坐標和為
        \[
        t+(1-t)+(2+t)+(3-t)=6>5，
        \]
        選項（5）正確。`,
        String.raw`若 \(2PQ=QR\)，則
        \[
        2(1-2t)=1+2t，
        \]
        得 \(t=\frac16\)，所以 \(k=\sin\frac{\pi}{6}=\frac12\)，選項（4）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`前兩個交點都在正弦圖形的正半波，故 \(k>0\)。`,
        "2": String.raw`在 \((2,3)\) 還有兩個對稱交點，總數為 4。`,
        "3": String.raw`同一正半波的兩交點關於 \(x=\frac12\) 對稱，所以和恰為 1。`,
        "4": String.raw`距離條件解得 \(x_1=\frac16\)，因此 \(k=\frac12\)。`,
        "5": String.raw`四個交點的 \(x\) 坐標總和固定為 6。`
      }
    },
    "114A-11": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`在 \(\triangle ABC\) 中，
      \[
      AB=6,\quad AC=5,\quad BC=4。
      \]
      令 \(D\) 為 \(\overline{AB}\) 中點，\(P\) 為 \(\angle ABC\) 的角平分線與 \(\overline{CD}\) 的交點。試選出正確的選項。`,
      options: {
        "1": String.raw`\(CP=\frac37CD\)`,
        "2": String.raw`\(\overrightarrow{AP}=\frac37\overrightarrow{AB}+\frac27\overrightarrow{AC}\)`,
        "3": String.raw`\(\cos\angle BAC=\frac34\)`,
        "4": String.raw`\(\triangle ACP\) 面積為 \(\frac{15\sqrt7}{14}\)`,
        "5": String.raw`\(\overrightarrow{AP}\cdot\overrightarrow{AC}=\frac{120}{7}\)`
      },
      solution: [
        String.raw`在 \(\triangle BCD\) 中，\(BP\) 平分 \(\angle CBD\)，且 \(BC:BD=4:3\)，故
        \[
        CP:PD=4:3,\qquad CP=\frac47CD。
        \]
        因此選項（1）錯誤。`,
        String.raw`由餘弦定理，
        \[
        \cos\angle BAC=\frac{AB^2+AC^2-BC^2}{2AB\cdot AC}
        =\frac{36+25-16}{60}=\frac34，
        \]
        選項（3）正確。`,
        String.raw`取 \(B=(0,0)、A=(6,0)\)，可得 \(C=(\frac94,\frac{5\sqrt7}{4})\)。由分點公式
        \[
        P=\frac{3C+4D}{7}
        =\left(\frac{75}{28},\frac{15\sqrt7}{28}\right)。
        \]
        因而
        \[
        [\triangle ACP]=\frac{15\sqrt7}{14},\qquad
        \overrightarrow{AP}\cdot\overrightarrow{AC}=\frac{120}{7}。
        \]`,
        String.raw`此外
        \[
        \overrightarrow{AP}=\frac27\overrightarrow{AB}+\frac37\overrightarrow{AC}，
        \]
        所以選項（2）的係數互換了。`
      ],
      optionAnalysis: {
        "1": String.raw`角平分線定理給 \(CP:PD=4:3\)，所以 \(CP=\frac47CD\)。`,
        "2": String.raw`正確係數是 \(\frac27\overrightarrow{AB}+\frac37\overrightarrow{AC}\)。`,
        "3": String.raw`代三邊長進餘弦定理可得 \(\frac34\)。`,
        "4": String.raw`由 \(CP/CD=4/7\) 搭配中線分割面積，可得 \(\frac{15\sqrt7}{14}\)。`,
        "5": String.raw`使用分點坐標或向量線性組合計算，內積為 \(\frac{120}{7}\)。`
      }
    },
    "114A-12": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`某合金由甲、乙兩種金屬組成。20 筆「甲占比為 \(x\%\) 的合金所對應波長 \(y\)（奈米）」資料，其迴歸直線為
      \[
      y=21.3x-40。
      \]
      現改述為「乙占比 \(u\%\) 所對應波長 \(v\)（微米）」，轉換後迴歸直線為 \(v=au+b\)。已知 \(1\) 奈米 \(=10^{-9}\) 公尺、\(1\) 微米 \(=10^{-6}\) 公尺。試選出正確的選項。`,
      options: {
        "1": String.raw`\(u_k=100-x_k\)`,
        "2": String.raw`\(v_k=1000y_k\)`,
        "3": String.raw`\(u_1,\ldots,u_{20}\) 的標準差等於 \(x_1,\ldots,x_{20}\) 的標準差`,
        "4": String.raw`\(b=2.09\)`,
        "5": String.raw`若新增一筆恰在 \(v=au+b\) 上的資料，21 筆資料的迴歸直線仍為 \(v=au+b\)`
      },
      solution: [
        String.raw`兩金屬占比和為 100%，所以 \(u=100-x\)，選項（1）正確。由奈米換微米須除以 1000，故 \(v=\frac{y}{1000}\)，選項（2）錯誤。`,
        String.raw`平移與乘以 \(-1\) 都不改變標準差，所以 \(u=100-x\) 與 \(x\) 的標準差相同，選項（3）正確。`,
        String.raw`轉換迴歸式：
        \[
        v=\frac{21.3x-40}{1000}
        =0.0213(100-u)-0.04
        =-0.0213u+2.09，
        \]
        所以 \(b=2.09\)，選項（4）正確。`,
        String.raw`最小平方法的舊殘差和及「自變數乘殘差和」皆為 0；新增點在原迴歸線上，新增殘差也是 0，因此原直線仍滿足常態方程，選項（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`甲、乙占比相加為 100%，故 \(u=100-x\)。`,
        "2": String.raw`1 微米等於 1000 奈米，奈米數值換成微米應除以 1000。`,
        "3": String.raw`\(u=100-x\) 只做平移及乘 \(-1\)，標準差不變。`,
        "4": String.raw`單位與占比同時轉換後，截距為 \(2.09\)。`,
        "5": String.raw`新增點在既有迴歸線上、殘差為 0，不會改變最小平方法的迴歸線。`
      }
    },
    "114A-13": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`已知實係數三次多項式 \(f(x)\) 除以 \(x+6\) 得商式 \(q(x)\) 和餘式 3。若 \(q(x)\) 在 \(x=-6\) 有最大值 8，求 \(y=f(x)\) 圖形的對稱中心坐標。`,
      solution: [
        String.raw`因 \(q(x)\) 是二次式且在 \(x=-6\) 有最大值 8，可設
        \[
        q(x)=a(x+6)^2+8,\qquad a<0。
        \]`,
        String.raw`由除法算法
        \[
        f(x)=(x+6)q(x)+3=a(x+6)^3+8(x+6)+3。
        \]`,
        String.raw`這是以 \((-6,3)\) 為中心的奇函數平移型，因此圖形對稱中心為
        \[
        \boxed{(-6,3)}。
        \]`
      ]
    },
    "114A-14": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`坐標空間中，點 \(A=(a,b,c)\)，其中 \(a,b,c<0\)。點 \(A\) 與三平面
      \[
      E_1:4y+3z=2,\quad
      E_2:3y+4z=-5,\quad
      E_3:x+2y+2z=-2
      \]
      的距離都是 6。求 \(a+b+c\)。`,
      solution: [
        String.raw`由 \(A\) 到 \(E_1\) 的距離，
        \[
        \frac{|4b+3c-2|}{5}=6。
        \]
        因 \(b,c<0\)，括號內為負，所以 \(4b+3c=-28\)。`,
        String.raw`同理由 \(E_2\) 得
        \[
        \frac{|3b+4c+5|}{5}=6。
        \]
        配合 \(b,c<0\) 可取 \(3b+4c=-35\)。聯立得到 \(b=-1、c=-8\)。`,
        String.raw`再由 \(E_3\)：
        \[
        \frac{|a+2b+2c+2|}{3}=6。
        \]
        代入 \(b,c\) 並使用 \(a<0\)，得 \(a=-2\)。所以
        \[
        a+b+c=-2-1-8=-11。
        \]`
      ]
    },
    "114A-15": {
      verified: true,
      sourcePage: 5,
      stem: "顧客投擲一枚均勻硬幣至多 5 次：前 3 次即累積 3 個正面，以 240 元購買玩偶；到第 4 次才累積 3 個正面，付 320 元；到第 5 次才累積 3 個正面，付 400 元；5 次後仍未累積 3 個正面，付 480 元。求購買金額的期望值。",
      solution: [
        String.raw`第 3 次取得第 3 個正面的機率為 \(\frac18\)。第 4 次才取得第 3 個正面，須前三次恰有 2 正面且第 4 次為正面，機率
        \[
        \binom32\left(\frac12\right)^4=\frac3{16}。
        \]`,
        String.raw`第 5 次才取得第 3 個正面的機率為
        \[
        \binom42\left(\frac12\right)^5=\frac3{16}。
        \]
        五次後正面不超過 2 個的機率為
        \[
        \frac{\binom50+\binom51+\binom52}{2^5}=\frac12。
        \]`,
        String.raw`期望金額
        \[
        240\cdot\frac18+320\cdot\frac3{16}
        +400\cdot\frac3{16}+480\cdot\frac12
        =405。
        \]`
      ]
    },
    "114A-16": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`坐標平面上，\(L_1、L_2\) 通過 \((3,1)\)，斜率分別為 \(m、-m\)。圓 \(\Gamma\) 的圓心在原點，且 \(\Gamma\) 與 \(L_1\) 交於相異兩點 \(A、B\)，圓心到 \(L_1\) 的距離為 1，又 \(\Gamma\) 與 \(L_2\) 相切。求弦 \(\overline{AB}\) 長。`,
      solution: [
        String.raw`兩直線可寫為
        \[
        L_1:mx-y+1-3m=0,\qquad
        L_2:mx+y-1-3m=0。
        \]`,
        String.raw`原點到 \(L_1\) 距離為 1：
        \[
        \frac{|1-3m|}{\sqrt{m^2+1}}=1。
        \]
        平方後得 \(m=0\) 或 \(m=\frac34\)。若 \(m=0\)，兩直線重合且同時相切、相割，矛盾，故 \(m=\frac34\)。`,
        String.raw`圓半徑等於原點到切線 \(L_2\) 的距離：
        \[
        r=\frac{|1+3m|}{\sqrt{m^2+1}}=\frac{13}{5}。
        \]`,
        String.raw`圓心到弦所在直線距離為 1，因此
        \[
        AB=2\sqrt{r^2-1^2}
        =2\sqrt{\frac{169}{25}-1}
        =\frac{24}{5}。
        \]`
      ]
    },
    "114A-17": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`在 \(\triangle ABC\) 中，\(AB=BC=3\)，且
      \[
      \cos\angle ABC=-\frac18。
      \]
      外接圓上一點 \(D\) 滿足 \(BD=4\) 且 \(AD\le CD\)。求 \(CD\)。（化為最簡根式）`,
      solution: [
        String.raw`由餘弦定理，
        \[
        AC^2=3^2+3^2-2\cdot3\cdot3\left(-\frac18\right)=\frac{81}{4}，
        \]
        所以 \(AC=\frac92\)。又 \(\sin B=\frac{3\sqrt7}{8}\)，故外接圓直徑
        \[
        2R=\frac{AC}{\sin B}=\frac{12}{\sqrt7}。
        \]`,
        String.raw`弦 \(BD=4\)，因此其所對圓周角 \(\angle BAD\) 滿足
        \[
        \sin\angle BAD=\frac{BD}{2R}=\frac{\sqrt7}{3}，
        \]
        故 \(|\cos\angle BAD|=\frac{\sqrt2}{3}\)。`,
        String.raw`條件 \(AD\le CD\) 選定 \(D\) 位於靠近 \(A\) 的交點，此時 \(\angle BAD\) 為鈍角，故 \(\cos\angle BAD=-\frac{\sqrt2}{3}\)。在 \(\triangle ABD\) 用餘弦定理：
        \[
        4^2=3^2+AD^2-2(3)(AD)\left(-\frac{\sqrt2}{3}\right)，
        \]
        解得 \(AD=3-\sqrt2\)。`,
        String.raw`圓內接四邊形 \(ABCD\) 的兩條對角線為 \(AC、BD\)。由托勒密定理，
        \[
        AC\cdot BD=AB\cdot CD+BC\cdot AD。
        \]
        代入 \(AC=\frac92、BD=4、AB=BC=3、AD=3-\sqrt2\)，得
        \[
        18=3CD+3(3-\sqrt2)，
        \]
        所以 \(CD=3+\sqrt2\)。`
      ]
    },
    "114A-18": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`已知 \(A、B\) 都是坐標平面上以原點為中心、逆時針旋轉一銳角的旋轉矩陣，且
      \[
      A^2=B^3=
      \begin{bmatrix}0&c\\1&d\end{bmatrix}。
      \]
      求 \(c\)。`,
      options: {
        "1": "0",
        "2": String.raw`\(-1\)`,
        "3": "1",
        "4": String.raw`\(-\frac12\)`,
        "5": String.raw`\(\frac12\)`
      },
      solution: [
        String.raw`右側矩陣的第一欄表示 \((1,0)\) 被變換到 \((0,1)\)，所以它是逆時鐘旋轉 \(90^\circ\) 的矩陣。`,
        String.raw`旋轉 \(90^\circ\) 的標準矩陣為
        \[
        \begin{bmatrix}0&-1\\1&0\end{bmatrix}，
        \]
        因而 \(c=-1、d=0\)。`
      ],
      optionAnalysis: {
        "1": String.raw`若 \(c=0\)，兩欄不會構成正交單位向量，並非旋轉矩陣。`,
        "2": String.raw`逆時鐘旋轉 \(90^\circ\) 的右上元素為 \(-1\)。`,
        "3": String.raw`右上元素為 1 對應順時鐘旋轉 \(90^\circ\)。`,
        "4": String.raw`旋轉矩陣的欄向量長度須為 1，不能取 \(-\frac12\)。`,
        "5": String.raw`同樣不符合旋轉矩陣欄向量為單位向量的條件。`
      }
    },
    "114A-19": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 18 題。設 \(P=(1,1)\) 經 \(A^3\) 變換後為 \(Q\)，且 \(Q\) 經 \(B^4\) 變換後為 \(R\)。求 \(Q\) 坐標，以及 \(\overrightarrow{OR}\) 與向量 \((1,0)\) 的夾角。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`因 \(A^2\) 是逆時鐘旋轉 \(90^\circ\)，且 \(A\) 本身旋轉銳角，所以 \(A\) 是旋轉 \(45^\circ\)；同理 \(B\) 是旋轉 \(30^\circ\)。`,
        String.raw`向量 \(\overrightarrow{OP}=(1,1)\) 長為 \(\sqrt2\)、方向角為 \(45^\circ\)。經 \(A^3\) 再旋轉 \(135^\circ\)，方向角成為 \(180^\circ\)，所以
        \[
        Q=(-\sqrt2,0)。
        \]`,
        String.raw`再經 \(B^4\) 旋轉 \(120^\circ\)，\(\overrightarrow{OR}\) 的方向角為
        \[
        180^\circ+120^\circ=300^\circ。
        \]
        因此它與正 \(x\) 軸方向 \((1,0)\) 的較小夾角為 \(60^\circ\)。`
      ]
    },
    "114A-20": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 18、19 題。令 \(L\) 為通過 \(P\) 且與直線 \(OQ\) 平行的直線，\(S\) 為 \(L\) 與直線 \(OR\) 的交點。求 \(\angle OSP\) 與 \(S\) 的坐標。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`由 \(Q=(-\sqrt2,0)\)，直線 \(OQ\) 是 \(x\) 軸。故通過 \(P=(1,1)\) 且平行於 \(OQ\) 的直線為
        \[
        L:y=1。
        \]`,
        String.raw`由第 19 題，\(\overrightarrow{OR}\) 方向角為 \(300^\circ\)，所以直線 \(OR\) 斜率為
        \[
        \tan300^\circ=-\sqrt3，
        \]
        方程式為 \(y=-\sqrt3x\)。`,
        String.raw`聯立 \(y=1\) 得
        \[
        x=-\frac1{\sqrt3}=-\frac{\sqrt3}{3}，
        \]
        因此
        \[
        S=\left(-\frac{\sqrt3}{3},1\right)。
        \]`,
        String.raw`因 \(SP\) 水平，而直線 \(SO\) 與正 \(x\) 軸的銳夾角為 \(60^\circ\)，故
        \[
        \angle OSP=60^\circ。
        \]`
      ]
    },
    "114B-1": {
      verified: true,
      sourcePage: 1,
      stem: "數線上有一點 P，P 到 1 的距離加上 P 到 4 的距離等於 4。求符合條件的 P 有幾個。",
      options: { "1": "0 個", "2": "1 個", "3": "2 個", "4": "3 個", "5": "無限多個" },
      solution: [
        String.raw`設 \(P\) 的坐標為 \(x\)，條件為
        \[
        |x-1|+|x-4|=4。
        \]`,
        String.raw`若 \(1\le x\le4\)，左式恆為 3，不合。若 \(x<1\)，得 \(5-2x=4\)，所以 \(x=\frac12\)；若 \(x>4\)，得 \(2x-5=4\)，所以 \(x=\frac92\)。`,
        String.raw`共有 2 個符合條件的點。`
      ],
      optionAnalysis: {
        "1": String.raw`區間外各有一個解，並非無解。`,
        "2": String.raw`只找到數線其中一側的解，漏掉另一側。`,
        "3": String.raw`兩解為 \(x=\frac12、\frac92\)。`,
        "4": String.raw`在 \([1,4]\) 內距離和恆為 3，沒有額外解。`,
        "5": String.raw`距離和在 \([1,4]\) 雖為常數，但常數是 3，不是 4。`
      }
    },
    "114B-2": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`設 \(A\) 為 \(3\times2\) 矩陣，且
      \[
      A\begin{bmatrix}1&0\\-1&1\end{bmatrix}
      =
      \begin{bmatrix}4&-6\\-2&1\\3&5\end{bmatrix}。
      \]
      若
      \[
      A\begin{bmatrix}1\\0\end{bmatrix}
      =
      \begin{bmatrix}a\\b\\c\end{bmatrix}，
      \]
      求 \(a+b+c\)。`,
      options: { "1": "0", "2": "2", "3": "4", "4": "5", "5": "8" },
      solution: [
        String.raw`把 \(A\) 的兩欄記為 \(\vec p、\vec q\)。矩陣乘積的兩欄分別為
        \[
        \vec p-\vec q=\begin{bmatrix}4\\-2\\3\end{bmatrix},
        \qquad
        \vec q=\begin{bmatrix}-6\\1\\5\end{bmatrix}。
        \]`,
        String.raw`所以
        \[
        \vec p=
        \begin{bmatrix}4\\-2\\3\end{bmatrix}
        +
        \begin{bmatrix}-6\\1\\5\end{bmatrix}
        =
        \begin{bmatrix}-2\\-1\\8\end{bmatrix}。
        \]
        而 \(A(1,0)^T=\vec p\)，故 \(a+b+c=-2-1+8=5\)。`
      ],
      optionAnalysis: {
        "1": String.raw`沒有正確辨認乘積矩陣的兩個欄向量。`,
        "2": String.raw`可能只處理其中一列，未加總三個分量。`,
        "3": String.raw`把 \(\vec p-\vec q\) 誤當成 \(A\) 的第一欄。`,
        "4": String.raw`第一欄為 \((-2,-1,8)^T\)，分量和為 5。`,
        "5": String.raw`8 只是第一欄的第三個分量，不是三分量總和。`
      }
    },
    "114B-3": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`已知實數 \(a,b\) 滿足
      \[
      \frac12<a<1,\qquad1<b<2。
      \]
      試選出值最小的選項。`,
      options: {
        "1": "0",
        "2": String.raw`\(\log a\)`,
        "3": String.raw`\(\log(a^2)\)`,
        "4": String.raw`\(\log b\)`,
        "5": String.raw`\(\frac1{\log b}\)`
      },
      solution: [
        String.raw`因 \(0<a<1\)，所以 \(\log a<0\)，且
        \[
        \log(a^2)=2\log a<\log a。
        \]`,
        String.raw`又 \(b>1\)，所以 \(\log b>0\) 且 \(\frac1{\log b}>0\)。因此所有選項中最小的是 \(\log(a^2)\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\log a\) 與 \(\log(a^2)\) 都是負數，故小於 0。`,
        "2": String.raw`因 \(\log a<0\)，乘 2 後的 \(\log(a^2)\) 更小。`,
        "3": String.raw`\(\log(a^2)=2\log a<\log a<0\)，為最小值。`,
        "4": String.raw`\(b>1\)，所以 \(\log b>0\)。`,
        "5": String.raw`\(\log b>0\)，其倒數也為正。`
      }
    },
    "114B-4": {
      verified: true,
      sourcePage: 1,
      stem: "四種水果公仔每次被抽中的機率相等，每次抽得一個。某甲抽獎四次，求恰好抽到三種不同款式公仔的機率。",
      options: {
        "1": String.raw`\(\frac5{16}\)`,
        "2": String.raw`\(\frac38\)`,
        "3": String.raw`\(\frac12\)`,
        "4": String.raw`\(\frac9{16}\)`,
        "5": String.raw`\(\frac58\)`
      },
      solution: [
        String.raw`四次抽到三種款式，表示其中一款出現兩次，另兩款各一次。先選出現的三款有 \(\binom43\) 種，再選重複款有 3 種。`,
        String.raw`四次結果的排列數為 \(\frac{4!}{2!}=12\)，所以有利序列數
        \[
        \binom43\cdot3\cdot12=144。
        \]`,
        String.raw`全部等可能序列有 \(4^4=256\) 種，故機率為
        \[
        \frac{144}{256}=\frac9{16}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`未完整計入重複款式的選法或四次排列。`,
        "2": String.raw`只計算部分三款組合，漏掉款式選擇。`,
        "3": String.raw`恰三款並非所有非全同事件的一半。`,
        "4": String.raw`有利序列 144 種除以全部 256 種，得到 \(\frac9{16}\)。`,
        "5": String.raw`可能把「至少三款」與「恰三款」混在一起。`
      }
    },
    "114B-5": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`空間中兩相交直線 \(L、M\) 的夾角為 \(24^\circ\)。將 \(M\) 繞著 \(L\) 旋轉一圈形成直圓錐面。若平面 \(E\) 與直線 \(L\) 平行，求 \(E\) 與圓錐面的截痕種類。`,
      options: { "1": "雙曲線", "2": "拋物線", "3": "橢圓（長短軸不相等）", "4": "圓", "5": "兩相交直線" },
      solution: [
        String.raw`直線 \(L\) 是圓錐軸。平面 \(E\) 與軸平行，因此會同時切到圓錐的上下兩個錐面。`,
        String.raw`平面截直圓錐面且穿過兩個錐面時，截痕是雙曲線。`
      ],
      optionAnalysis: {
        "1": String.raw`平面平行圓錐軸並切過兩個錐面，截痕為雙曲線。`,
        "2": String.raw`拋物線要求截平面平行於圓錐的一條母線，不是平行於軸。`,
        "3": String.raw`橢圓只切到單一錐面，與本題平行軸的情況不同。`,
        "4": String.raw`圓要求截平面垂直圓錐軸。`,
        "5": String.raw`只有截平面通過圓錐頂點時才可能退化成兩相交直線，題目未給此條件。`
      }
    },
    "114B-6": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`設 \(a,b,c\) 為實數，且
      \[
      f(x)=a(x-1)(x-3)+b(x-1)(x-4)+c(x-3)(x-4)
      \]
      化簡後等於 \(x^2\)。試選出 \(a,b,c\) 的正確大小關係。`,
      options: {
        "1": String.raw`\(a>b>c\)`,
        "2": String.raw`\(a>c>b\)`,
        "3": String.raw`\(b>c>a\)`,
        "4": String.raw`\(c>a>b\)`,
        "5": String.raw`\(c>b>a\)`
      },
      solution: [
        String.raw`分別代入使兩項消失的數值。令 \(x=1\)：
        \[
        6c=1\Rightarrow c=\frac16。
        \]`,
        String.raw`令 \(x=3\)：
        \[
        -2b=9\Rightarrow b=-\frac92。
        \]
        令 \(x=4\)：
        \[
        3a=16\Rightarrow a=\frac{16}{3}。
        \]`,
        String.raw`所以 \(a>c>b\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(c=\frac16\) 大於負數 \(b=-\frac92\)，故 \(b>c\) 錯誤。`,
        "2": String.raw`三值為 \(\frac{16}{3},-\frac92,\frac16\)，關係正確。`,
        "3": String.raw`\(b\) 是三者中最小，不是最大。`,
        "4": String.raw`\(a=\frac{16}{3}\) 大於 \(c=\frac16\)。`,
        "5": String.raw`\(a\) 是最大值，不是最小。`
      }
    },
    "114B-7": {
      verified: true,
      sourcePage: 2,
      stem: "以單點透視法把地面上的六根鉛直柱 A～F 畫在坐標平面上，消失點為 V(4,9)。各柱柱頂／柱底坐標依序為：A (0,8)/(0,6)、B (2,3)/(2,0)、C (4,6)/(4,3)、D (6,8)/(6,5)、E (8,5)/(8,1)、F (10,8)/(10,6)。已知 A、F 實際高度相等，求實際高度最大的柱子。",
      options: { "1": "A", "2": "B", "3": "C", "4": "D", "5": "E" },
      solution: [
        String.raw`在單點透視中，同一位置的投影柱高除以柱底到地平線的投影距離，可比較實際高度。地平線的 \(y\) 坐標為 9。`,
        String.raw`A～E 的比例依序為
        \[
        \frac2{9-6}=\frac23,\quad
        \frac3{9-0}=\frac13,\quad
        \frac3{9-3}=\frac12,\quad
        \frac3{9-5}=\frac34,\quad
        \frac4{9-1}=\frac12。
        \]`,
        String.raw`最大比例為 D 的 \(\frac34\)，所以 D 柱實際高度最大。`
      ],
      optionAnalysis: {
        "1": String.raw`A 的投影比例為 \(\frac23\)，小於 D 的 \(\frac34\)。`,
        "2": String.raw`B 雖投影高 3，但離地平線較遠，實際高度比例只有 \(\frac13\)。`,
        "3": String.raw`C 的比例為 \(\frac12\)。`,
        "4": String.raw`D 的投影柱高與底點深度比為 \(\frac34\)，六柱中最大。`,
        "5": String.raw`E 的投影柱高雖為 4，但比例只有 \(\frac12\)。`
      }
    },
    "114B-8": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`設 \(\Gamma\) 為函數
      \[
      y=x^3-x
      \]
      的圖形。試選出正確的選項。`,
      options: {
        "1": String.raw`\(\Gamma\) 的對稱中心為原點`,
        "2": String.raw`\(\Gamma\) 在 \(x=0\) 附近近似直線 \(y=x\)`,
        "3": String.raw`\(\Gamma\) 經適當平移後可與 \(y=x^3+x+3\) 的圖形重合`,
        "4": String.raw`\(\Gamma\) 與 \(y=x^3+x\) 的圖形對稱於 \(x\) 軸`,
        "5": String.raw`\(\Gamma\) 與 \(y=-x^3+x\) 的圖形對稱於 \(y\) 軸`
      },
      solution: [
        String.raw`\(f(x)=x^3-x\) 滿足 \(f(-x)=-f(x)\)，是奇函數，圖形以原點為對稱中心，選項（1）正確。`,
        String.raw`在 \(x=0\) 附近，三次項遠小於一次項，所以 \(f(x)\approx-x\)，不是 \(x\)。平移三次函數若不產生二次項只能不做水平平移，無法把一次項係數由 \(-1\) 改成 \(+1\)。`,
        String.raw`把 \(\Gamma\) 對 \(y\) 軸反射，得到
        \[
        y=f(-x)=-x^3+x，
        \]
        因此選項（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`函數為奇函數，圖形以原點中心對稱。`,
        "2": String.raw`原點附近主導項是 \(-x\)，近似線應為 \(y=-x\)。`,
        "3": String.raw`平移不能在保持無二次項的同時把一次項係數由 \(-1\) 變 \(+1\)。`,
        "4": String.raw`對 \(x\) 軸反射會得到 \(y=-x^3+x\)，不是 \(x^3+x\)。`,
        "5": String.raw`以 \(y\) 軸反射即把 \(x\) 換成 \(-x\)，得到 \(-x^3+x\)。`
      }
    },
    "114B-9": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`坐標平面上 \(O\) 為原點，\(P=(2,2)\)。已知
      \[
      \overrightarrow{OP}=\alpha\overrightarrow{OA}+\beta\overrightarrow{OB},
      \qquad0\le\alpha,\beta\le1。
      \]
      試選出可能的 \(A、B\) 坐標。`,
      options: {
        "1": String.raw`\(A=(2,-3)、B=(-4,3)\)`,
        "2": String.raw`\(A=(3,2)、B=(3,4)\)`,
        "3": String.raw`\(A=(3,4)、B=(4,-1)\)`,
        "4": String.raw`\(A=(1,2)、B=(2,1)\)`,
        "5": String.raw`\(A=(1,-1)、B=(1,1)\)`
      },
      solution: [
        String.raw`條件表示 \(P\) 位於由 \(\overrightarrow{OA}、\overrightarrow{OB}\) 張成、係數皆介於 0 與 1 的平行四邊形內。逐項聯立兩坐標。`,
        String.raw`選項（2）解得 \(\alpha=\beta=\frac13\)；選項（3）解得 \(\alpha=\frac{10}{19}、\beta=\frac2{19}\)；選項（4）解得 \(\alpha=\beta=\frac23\)，皆在指定區間內。`,
        String.raw`選項（1）的係數不符合區間；選項（5）若要 \(x=2\) 必有 \(\alpha=\beta=1\)，但此時 \(y=0\)，不能得到 \(P\)。`
      ],
      optionAnalysis: {
        "1": String.raw`聯立後至少一個係數不在 \([0,1]\) 內。`,
        "2": String.raw`取 \(\alpha=\beta=\frac13\) 即得到 \((2,2)\)。`,
        "3": String.raw`取 \(\alpha=\frac{10}{19}、\beta=\frac2{19}\)，兩係數均合法。`,
        "4": String.raw`取 \(\alpha=\beta=\frac23\) 即得到 \((2,2)\)。`,
        "5": String.raw`要使 \(x=2\) 只能取兩係數皆為 1，但所得 \(y=0\)。`
      }
    },
    "114B-10": {
      verified: true,
      sourcePage: 3,
      stem: "四位羽球選手甲、乙、丙、丁在一場比賽中的殺球次數、每次殺球平均用時、標準差依序為：甲 25 次／1.2 秒／0.5 秒；乙 14 次／1.5 秒／0.3 秒；丙 20 次／1.7 秒／0.2 秒；丁 30 次／1.2 秒／0.4 秒。試選出正確的選項。",
      options: {
        "1": "丙的每次殺球平均用時為四位中最多",
        "2": "丁花在殺球的總用時為四位中最多",
        "3": "甲每次殺球的用時都與丁相同",
        "4": "甲每次殺球用時的全距大於丁的全距",
        "5": "乙各次殺球用時不可能都在 1.4 到 1.6 秒之間"
      },
      solution: [
        String.raw`四人的平均用時以丙的 \(1.7\) 秒最大，選項（1）正確。`,
        String.raw`總用時為次數乘平均：甲 \(30\)、乙 \(21\)、丙 \(34\)、丁 \(36\) 秒，所以丁最多，選項（2）正確。`,
        String.raw`甲、丁平均相同不代表每筆資料相同；標準差也不能唯一決定全距，所以（3）、（4）皆不能推出。`,
        String.raw`若乙的所有用時都在 \(1.4\) 到 \(1.6\) 秒，且平均為 \(1.5\)，每筆與平均的距離至多 \(0.1\)，標準差不可能達 \(0.3\)，所以選項（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`四個平均數中 \(1.7\) 最大。`,
        "2": String.raw`次數乘平均後，丁的總用時 \(36\) 秒最大。`,
        "3": String.raw`平均數相同不代表每一筆觀測值都相同。`,
        "4": String.raw`僅比較標準差不能確定兩組資料的全距大小。`,
        "5": String.raw`若全在 \(1.4\)～\(1.6\)，與平均差至多 \(0.1\)，不可能有 \(0.3\) 的標準差。`
      }
    },
    "114B-11": {
      verified: true,
      sourcePage: 4,
      stem: "把地球視為球體。A、B 分別位於經度 0°、180°且北緯 60°；C、D 分別位於經度 0°、180°且北緯 30°；E 位於經度 0°、緯度 0°。球面兩點最短路徑為通過兩點之大圓上的較小弧。試選出正確的選項。",
      options: {
        "1": "北極點到 A 與到 B 的最短路徑長相等",
        "2": "A 到 B 與 C 到 D 的最短路徑長相等",
        "3": "A 到 E 的最短路徑必經過 C",
        "4": "C 到 D 的最短路徑必經過北極點",
        "5": "E 到北極點與 C 到 D 的最短路徑長比為 2：3"
      },
      solution: [
        String.raw`A、B 都在北緯 \(60^\circ\)，到北極的中心角皆為 \(30^\circ\)，選項（1）正確。`,
        String.raw`A、B 位於相反經線，最短路徑經北極，中心角為 \(30^\circ+30^\circ=60^\circ\)；C、D 的最短路徑也經北極，中心角為 \(60^\circ+60^\circ=120^\circ\)，兩者不相等，選項（4）正確。`,
        String.raw`A、C、E 同在經度 \(0^\circ\) 的同一大圓弧上，A 到 E 的較小弧由北緯 \(60^\circ\) 走到赤道，必經北緯 \(30^\circ\) 的 C，選項（3）正確。`,
        String.raw`E 到北極中心角為 \(90^\circ\)，與 C 到 D 的 \(120^\circ\) 之比為 \(3:4\)，不是 \(2:3\)。`
      ],
      optionAnalysis: {
        "1": String.raw`同緯度兩點到北極的中心角相同，皆為 \(30^\circ\)。`,
        "2": String.raw`A 到 B 為 \(60^\circ\)，C 到 D 為 \(120^\circ\)。`,
        "3": String.raw`A、C、E 位於同一條經線的大圓較小弧上。`,
        "4": String.raw`C、D 在相反經線，較短的 \(120^\circ\) 路徑經北極。`,
        "5": String.raw`正確比值為 \(90:120=3:4\)。`
      }
    },
    "114B-12": {
      verified: true,
      sourcePage: 4,
      stem: "某等差數列首項為 1、末項為 81，且 9 也在數列中。設項數為 n，且 n≤100。試選出正確的選項。",
      options: {
        "1": String.raw`\(n\) 為奇數`,
        "2": "41 必在此等差數列",
        "3": "所有符合條件數列的公差都是整數",
        "4": "符合條件的等差數列共有 10 個",
        "5": String.raw`若 \(n\) 為 7 的倍數，則 \(n=21\)`
      },
      solution: [
        String.raw`設 9 是第 \(m+1\) 項，則 \(md=8\)，故 \(d=\frac8m\)，其中 \(m\) 為正整數。`,
        String.raw`末項條件給
        \[
        (n-1)d=80
        \Rightarrow n-1=10m
        \Rightarrow n=10m+1。
        \]
        因 \(n\le100\)，所以 \(m=1,\ldots,9\)，共有 9 個數列，且每個 \(n\) 都是奇數。`,
        String.raw`又
        \[
        41=1+40=1+(5m)d，
        \]
        所以 41 必在數列中。公差 \(\frac8m\) 不一定是整數。`,
        String.raw`若 \(n\) 是 7 的倍數，在 \(m=1,\ldots,9\) 中可得 \(n=21\) 或 \(91\)，不只 21。`
      ],
      optionAnalysis: {
        "1": String.raw`\(n=10m+1\)，必為奇數。`,
        "2": String.raw`41 與首項差 40，等於 \(5m\) 個公差，必是數列項。`,
        "3": String.raw`例如 \(m=3\) 時公差為 \(\frac83\)，不是整數。`,
        "4": String.raw`\(m\) 只能取 1 到 9，共 9 個數列。`,
        "5": String.raw`除 \(n=21\) 外，\(n=91\) 也符合且是 7 的倍數。`
      }
    },
    "114B-13": {
      verified: true,
      sourcePage: 4,
      stem: "某日任一停車場沒有空位的機率都是 0.7，且兩停車場是否有空位互相獨立。求至少有一個停車場有空位的機率。",
      solution: [
        String.raw`兩個停車場都沒有空位的機率為
        \[
        0.7\times0.7=0.49。
        \]`,
        String.raw`所以至少一個有空位的機率為
        \[
        1-0.49=0.51。
        \]`
      ]
    },
    "114B-14": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`坐標平面上有 \(A=(0,2)、B=(-1,0)、C=(4,0)\)。若直線 \(y=mx\) 將 \(\triangle ABC\) 分成面積相等的兩部分，求 \(m\)。`,
      solution: [
        String.raw`\(\triangle ABC\) 面積為 \(\frac12\cdot5\cdot2=5\)，每部分面積須為 \(\frac52\)。`,
        String.raw`設直線與 \(\overline{AC}\) 交於 \(X\)。直線 \(AC\) 方程式為 \(y=2-\frac12x\)。由右側三角形 \(OCX\) 面積
        \[
        \frac12\cdot4\cdot y_X=\frac52，
        \]
        得 \(y_X=\frac54\)。`,
        String.raw`代入 \(AC\) 得 \(x_X=\frac32\)，因此
        \[
        m=\frac{y_X}{x_X}=\frac{5/4}{3/2}=\frac56。
        \]`
      ]
    },
    "114B-15": {
      verified: true,
      sourcePage: 5,
      stem: "某公司聘請 8 名新進員工，含 2 名翻譯、3 名工程師、3 名助理。分派至研發、測試兩個部門，每部門各 4 人，且各須有 1 名翻譯與至少 1 名工程師。求分配方法數。",
      solution: [
        String.raw`先選研發部門的翻譯，有 2 種；另一名翻譯自動分到測試部門。`,
        String.raw`研發部門還須從 3 名工程師、3 名助理中選 3 人，且兩部門都至少有 1 名工程師，所以研發須選 1 或 2 名工程師。`,
        String.raw`方法數為
        \[
        2\left[\binom31\binom32+\binom32\binom31\right]
        =2(9+9)=36。
        \]`
      ]
    },
    "114B-16": {
      verified: true,
      sourcePage: 5,
      stem: "教室牆角由三個兩兩垂直的平面形成。三角形擋板 ABC 的三頂點位於三條交界線上，距牆角 O 分別為 20、20、10 公分，三邊貼合相應平面。求 tan∠CAB。",
      solution: [
        String.raw`把三條互相垂直的交界線設為坐標軸，可取
        \[
        A=(20,0,0),\quad B=(0,20,0),\quad C=(0,0,10)。
        \]`,
        String.raw`因此
        \[
        AB=20\sqrt2,\qquad AC=BC=10\sqrt5。
        \]
        由餘弦定理
        \[
        \cos A=\frac{AB^2+AC^2-BC^2}{2AB\cdot AC}
        =\sqrt{\frac25}。
        \]`,
        String.raw`所以 \(\sin A=\sqrt{\frac35}\)，進而
        \[
        \tan A=\frac{\sin A}{\cos A}
        =\sqrt{\frac32}=\frac{\sqrt6}{2}。
        \]`
      ]
    },
    "114B-17": {
      verified: true,
      sourcePage: 5,
      stem: "紅燈循環為亮 3 秒、暗 1 秒、亮 2 秒；綠燈循環為亮 6 秒、暗 2 秒；藍燈循環為亮 k 秒、暗 (15−k) 秒，其中 k 為正整數。三燈同時開始循環，且面板始終至少有一燈亮。求 k 的最小值。",
      solution: [
        String.raw`紅燈週期 6 秒、綠燈週期 8 秒，兩者共同週期為 24 秒。逐段比對可得紅、綠同時熄滅的區間為
        \[
        [15+24j,\ 16+24j)\qquad(j\in\mathbb Z_{\ge0})。
        \]`,
        String.raw`把這些區間對藍燈的 15 秒週期取餘數，起點依序落在
        \[
        0,\ 9,\ 3,\ 12,\ 6\pmod{15}，
        \]
        所以藍燈必須涵蓋 \([12,13)\) 才能避免三燈同暗。`,
        String.raw`藍燈每週期從第 0 秒亮到第 \(k\) 秒，因此最小須取
        \[
        k=13。
        \]`
      ]
    },
    "114B-18": {
      verified: true,
      sourcePage: 6,
      stem: "UVI 數值與高度呈指數關係：高度每上升 300 公尺，UVI 增加上升前的 4%。地平面每平方公尺接收 400 焦耳紫外線，而一單位 UVI 相當於每平方公尺 100 焦耳。求高度 4500 公尺處的 UVI 表示式。",
      options: {
        "1": String.raw`\(4(1+0.04\times15)\)`,
        "2": String.raw`\(4(1+0.04^{15})\)`,
        "3": String.raw`\(4(1+0.04)^{15}\)`,
        "4": String.raw`\(4\times100(1+0.04)^{15}\)`,
        "5": String.raw`\(4\times100(1+0.04^{45})\)`
      },
      solution: [
        String.raw`地平面 400 焦耳相當於 UVI \(=4\)。高度 4500 公尺包含
        \[
        \frac{4500}{300}=15
        \]
        個增長區段。`,
        String.raw`每次增加 4% 即乘 \(1.04\)，所以山上的 UVI 為
        \[
        4(1+0.04)^{15}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`把逐次複利成長誤當成以原值計算的單利。`,
        "2": String.raw`指數應作用在整個成長倍率 \(1.04\)，不是只作用在 \(0.04\)。`,
        "3": String.raw`初始 UVI 為 4，連續 15 次各乘 1.04，表示式正確。`,
        "4": String.raw`初始 400 焦耳已換成 UVI 4，不應再乘 100。`,
        "5": String.raw`高度區段數為 15，不是 45，且成長倍率寫法也不正確。`
      }
    },
    "114B-19": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`某地日照時數為 12 小時，日出後 \(x\) 小時的 UVI 可用
      \[
      f(x)=a\sin(bx),\qquad0\le x\le12,\quad a,b>0
      \]
      表示。日照期間 UVI 為正，且 \(f(0)=f(12)=0\)；日出後 2 小時 UVI 為 4。求 \(a、b\)。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`因 \(f(x)>0\) 於 \(0<x<12\)，且只在兩端為 0，正弦函數恰走完一個正半波。因此
        \[
        12b=\pi\Rightarrow b=\frac{\pi}{12}。
        \]`,
        String.raw`代入 \(f(2)=4\)：
        \[
        a\sin\left(\frac{\pi}{12}\cdot2\right)
        =a\sin\frac{\pi}{6}
        =\frac a2=4，
        \]
        所以 \(a=8\)。`,
        String.raw`故
        \[
        \boxed{a=8,\quad b=\frac{\pi}{12}}。
        \]`
      ]
    },
    "114B-20": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 19 題。某人要在該日 UVI 介於 \(4\sqrt2\) 與 \(4\sqrt3\) 之間（含端點）時做日光浴。設日出後時間為 \(t\) 小時，求 \(t\) 的最大可能範圍。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`由第 19 題
        \[
        f(t)=8\sin\frac{\pi t}{12}。
        \]
        題意等價於
        \[
        4\sqrt2\le8\sin\frac{\pi t}{12}\le4\sqrt3，
        \]
        即
        \[
        \frac{\sqrt2}{2}\le\sin\frac{\pi t}{12}\le\frac{\sqrt3}{2}。
        \]`,
        String.raw`在 \(0\le\frac{\pi t}{12}\le\pi\) 內，解集為
        \[
        \frac\pi4\le\frac{\pi t}{12}\le\frac\pi3
        \quad\text{或}\quad
        \frac{2\pi}{3}\le\frac{\pi t}{12}\le\frac{3\pi}{4}。
        \]`,
        String.raw`所以最大可能範圍為
        \[
        \boxed{3\le t\le4\quad\text{或}\quad8\le t\le9}。
        \]`
      ]
    }
  });
})();
