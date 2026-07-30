(() => {
  Object.assign(window.MATH_CONTENT, {
    "94M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`整數 \(43659\) 共有多少個不同的質因數？`,
      options: { "1":"1 個", "2":"2 個", "3":"3 個", "4":"4 個", "5":"5 個" },
      solution: [String.raw`逐步分解可得
      \[
      43659=3^4\cdot7^2\cdot11。
      \]
      不同的質因數為 \(3、7、11\)，共 3 個。`],
      optionAnalysis: { "1":"只計到一種質因數。","2":"漏掉一種質因數。","3":"質因數恰為 3、7、11。","4":"把指數或合數也算成質因數。","5":"分解所得不同質因數沒有五種。" }
    },
    "94M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`利用
      \[
      1^3+2^3+\cdots+n^3=\left(\frac{n(n+1)}2\right)^2，
      \]
      計算 \(11^3+12^3+\cdots+20^3\)。`,
      options: { "1":"41075", "2":"41095", "3":"41115", "4":"41135", "5":"41155" },
      solution: [String.raw`用前 20 項立方和減去前 10 項：
      \[
      \left(\frac{20\cdot21}{2}\right)^2-\left(\frac{10\cdot11}{2}\right)^2
      =210^2-55^2=41075。
      \]`],
      optionAnalysis: { "1":"依公式相減得 41075。","2":"計算差多了 20。","3":"計算差多了 40。","4":"計算差多了 60。","5":"計算差多了 80。" }
    },
    "94M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`「42 選 6」樂透頭獎機率為 \(R\)，「39 選 5」樂透頭獎機率為 \(r\)，號碼皆不計次序。求 \(\frac rR\) 最接近哪個數值。`,
      options: { "1":"3", "2":"5", "3":"7", "4":"9", "5":"11" },
      solution: [String.raw`兩種頭獎機率分別為組合數的倒數，因此
      \[
      \frac rR=\frac{\binom{42}{6}}{\binom{39}{5}}
      =\frac{42\cdot41\cdot40}{6\cdot36\cdot35}
      \approx9.11，
      \]
      最接近 9。`],
      optionAnalysis: { "1":"低估兩種組合數的比值。","2":"仍低於實際約 9.11。","3":"未完整約分組合數。","4":"約 9.11，最接近 9。","5":"高估比值。" }
    },
    "94M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`設 \(a,b\) 為正實數，且 \(\log_7a=11、\log_7b=13\)。求 \(\log_7(a+b)\) 最接近哪個數值。`,
      options: { "1":"12", "2":"13", "3":"14", "4":"23", "5":"24" },
      solution: [String.raw`由 \(a=7^{11}、b=7^{13}\)，
      \[
      \log_7(a+b)=\log_7\!\left(7^{11}(1+7^2)\right)
      =11+\log_7 50。
      \]
      利用題末對數值，\(\log_7 50=\frac{\log 50}{\log 7}\approx2.01\)，故原式約為 \(13.01\)。`],
      optionAnalysis: { "1":"忽略了較大的 \(7^{13}\) 項。","2":"原式約為 13.01。","3":"比實際值大約 1。","4":"誤把兩個對數值直接相加。","5":"不是 \(\log_7a+\log_7b\)。" }
    },
    "94M-5": {
      verified: true, sourcePage: 1,
      stem: "100 位學生的原始成績為 X，調整後成績為 Y=10√X。已知調整後平均數為 65、樣本標準差為 15，求原始成績平均數 M 落在哪個區間。",
      options: { "1":String.raw`\(40\le M<41\)`, "2":String.raw`\(41\le M<42\)`, "3":String.raw`\(42\le M<43\)`, "4":String.raw`\(43\le M<44\)`, "5":String.raw`\(44\le M<45\)` },
      solution: [String.raw`因 \(X_i=Y_i^2/100\)。由樣本標準差公式
      \[
      15^2=\frac{\sum Y_i^2-100(65)^2}{99}，
      \]
      得 \(\sum Y_i^2=444775\)。所以
      \[
      M=\frac1{100}\sum\frac{Y_i^2}{100}=44.4775，
      \]
      落在 \(44\le M<45\)。`],
      optionAnalysis: { "1":"未把平方後的變異量納入。","2":"低估平均平方值。","3":"只用平均數平方得到的近似仍不完整。","4":"仍低於由二次動差算得的結果。","5":"M=44.4775，落在此區間。" }
    },
    "94M-6": {
      verified: true, sourcePage: 2,
      stem: "如原圖，射線 OA、OB 交於 O，線段 AB 與兩射線外側圍成陰影區。哪些向量的終點落在陰影區域內？",
      options: {
        "1":String.raw`\(\overrightarrow{OA}+2\overrightarrow{OB}\)`,
        "2":String.raw`\(\frac34\overrightarrow{OA}+\frac13\overrightarrow{OB}\)`,
        "3":String.raw`\(\frac34\overrightarrow{OA}-\frac13\overrightarrow{OB}\)`,
        "4":String.raw`\(\frac34\overrightarrow{OA}+\frac15\overrightarrow{OB}\)`,
        "5":String.raw`\(\frac34\overrightarrow{OA}-\frac15\overrightarrow{OB}\)`
      },
      solution: [String.raw`以 \(\overrightarrow{OA},\overrightarrow{OB}\) 為基底，陰影內的點可寫成
      \[
      s\overrightarrow{OA}+t\overrightarrow{OB},\qquad s,t\ge0,\ s+t\ge1。
      \]
      （1）的係數和為 3；（2）的係數和為 \(\frac{13}{12}\)，都在陰影內。其餘不是有負係數，就是係數和小於 1。`],
      optionAnalysis: { "1":"兩係數非負且和大於 1。","2":"兩係數非負且和為 13/12。","3":"OB 的係數為負，落到射線夾角外。","4":"係數和 19/20，小於 1，仍在線段 AB 靠 O 一側。","5":"OB 的係數為負。" }
    },
    "94M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`坐標平面上的鳶形 \(ABCD\) 中，\(A,C\) 在 y 軸，\(B,D\) 在 x 軸，且 \(AB=AD=2、BC=CD=4、AC=5\)。令四邊所在直線斜率為 \(m_{AB},m_{BC},m_{CD},m_{DA}\)，選出正確敘述。`,
      options: {
        "1":String.raw`四數中以 \(m_{AB}\) 最大`,
        "2":String.raw`四數中以 \(m_{BC}\) 最小`,
        "3":String.raw`\(m_{BC}=-m_{CD}\)`,
        "4":String.raw`\(m_{AB}m_{BC}=-1\)`,
        "5":String.raw`\(m_{CD}+m_{DA}>0\)`
      },
      solution: [String.raw`設 \(A=(0,u)、C=(0,-v)、B=(-w,0)、D=(w,0)\)，其中 \(u+v=5\)。由
      \[
      v^2+w^2=16,\quad u^2+w^2=4
      \]
      得 \((v-u)(v+u)=12\)，所以 \(v-u=12/5>0\)。四斜率依序為
      \[
      \frac uw,\ -\frac vw,\ \frac vw,\ -\frac uw。
      \]
      因 \(v>u>0\)，故（2）（3）（5）成立。`],
      optionAnalysis: { "1":"最大的是 \(m_{CD}=v/w\)。","2":"\(m_{BC}=-v/w\) 為最小。","3":"兩斜率大小相同、符號相反。","4":"乘積為 \(-uv/w^2\)，不等於 −1。","5":"其和為 \((v-u)/w>0\)。" }
    },
    "94M-8": {
      verified: true, sourcePage: 2,
      stem: String.raw`坐標空間中三個相異平面 \(E_1,E_2,E_3\) 都通過 \((-1,2,0)\) 與 \((3,0,2)\)。哪些點也必同時在三平面上？`,
      options: { "1":String.raw`\((2,2,2)\)`, "2":String.raw`\((1,1,1)\)`, "3":String.raw`\((4,-2,2)\)`, "4":String.raw`\((-2,4,0)\)`, "5":String.raw`\((-5,-4,-2)\)` },
      solution: [String.raw`三平面的共同部分至少包含通過兩已知點的直線：
      \[
      (-1,2,0)+t(4,-2,2)。
      \]
      取 \(t=\frac12\) 得 \((1,1,1)\)。其餘四點都不能以同一個 \(t\) 同時符合三個坐標。`],
      optionAnalysis: { "1":"三坐標差不成方向向量的同倍數。","2":"是兩已知點的中點，必在共同直線上。","3":"代入共同直線時三坐標的參數不一致。","4":"不在兩點決定的直線上。","5":"第二坐標不符合共同直線。" }
    },
    "94M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`若 \(0<\theta<\frac\pi4\)，哪些不等式恆成立？`,
      options: {
        "1":String.raw`\(\sin\theta<\cos\theta\)`,
        "2":String.raw`\(\tan\theta<\sin\theta\)`,
        "3":String.raw`\(\cos\theta<\tan\theta\)`,
        "4":String.raw`\(\sin2\theta<\cos2\theta\)`,
        "5":String.raw`\(\tan\frac\theta2<\frac12\tan\theta\)`
      },
      solution: [String.raw`第一象限中 \(\theta<\pi/4\)，故 \(\sin\theta<\cos\theta\)，（1）成立。又令 \(u=\tan(\theta/2)>0\)，
      \[
      \tan\theta=\frac{2u}{1-u^2}>2u，
      \]
      所以（5）成立。其餘不等式可由 \(\tan\theta=\sin\theta/\cos\theta\) 或取接近區間端點反駁。`],
      optionAnalysis: { "1":"在 0 到 45° 間，sin 小於 cos。","2":"因 cosθ<1，tanθ 反而大於 sinθ。","3":"θ 很小時 tanθ 小於 cosθ。","4":"θ>π/8 時左右大小反轉，並非恆成立。","5":"二倍角公式顯示 tanθ 大於 2tan(θ/2)。" }
    },
    "94M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`雙曲線
      \[
      \Gamma:\frac{x^2}{9}-\frac{y^2}{16}=1
      \]
      的焦點為 \(F_1,F_2\)，\(P\) 在 \(\Gamma\) 上，且 \(P,F_1,F_2\) 構成等腰三角形。哪些數值可能是三角形周長？`,
      options: { "1":"20", "2":"24", "3":"28", "4":"32", "5":"36" },
      solution: [String.raw`雙曲線有 \(a=3、c=5\)，故 \(F_1F_2=10\)，且
      \[
      |PF_1-PF_2|=2a=6。
      \]
      兩腰不可能是 \(PF_1=PF_2\)，所以必有其中一條焦半徑等於底邊 10；另一條焦半徑可能為 \(10-6=4\) 或 \(10+6=16\)。周長為 \(10+10+4=24\) 或 \(10+10+16=36\)。`],
      optionAnalysis: { "1":"焦距已為 10，且焦半徑差須為 6，無法得到此周長。","2":"邊長可為 10、10、4。","3":"不符合焦半徑差 6。","4":"不符合等腰條件與焦半徑差。","5":"邊長可為 10、10、16。" }
    },
    "94M-11": {
      verified: true, sourcePage: 3,
      stem: String.raw`球面 \(S\) 的直徑 \(AB=10\)。點 \(P\) 滿足 \(PA+PB=14\)，判斷 \(P\) 可能落在哪些位置。`,
      options: { "1":"線段 AB 上", "2":"直線 AB 上但不在線段 AB 上", "3":"球面 S 上", "4":"球 S 內部但不在線段 AB 上", "5":"球 S 外部但不在直線 AB 上" },
      solution: [String.raw`以 \(A,B\) 為焦點、距離和 14 的軌跡是旋轉橢球面，長半軸 7、焦半距 5、短半軸 \(\sqrt{7^2-5^2}=2\sqrt6<5\)。因此它在 AB 方向伸出球外，也在中垂面穿過球內，並會與半徑 5 的球面相交。`, "在線段 AB 上時距離和恆為 10，不可能；在直線延長線上取離中心 7 的點則可。故（2）（3）（4）（5）成立。"],
      optionAnalysis: { "1":"線段上 PA+PB=AB=10。","2":"直線延長線上離球心 7 的點符合。","3":"旋轉橢球面與半徑 5 的球面相交。","4":"中垂面上的軌跡半徑 2√6，小於 5。","5":"靠近長軸端的非軸上點可在球外。" }
    },
    "94M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`若多項式 \(x^2+x+2\) 能整除
      \[
      x^5+x^4+x^3+px^2+2x+q，
      \]
      求 \(p,q\)。`,
      solution: [String.raw`由 \(x^2\equiv-x-2\pmod{x^2+x+2}\)，可逐次化簡得
      \[
      x^3\equiv-x+2,\quad x^4\equiv3x+2,\quad x^5\equiv-x-6。
      \]
      原多項式的餘式為
      \[
      (3-p)x+(q-2p-2)。
      \]
      要能整除，兩係數都為 0，故 \(p=3、q=8\)。`]
    },
    "94M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`正方形 \(ABCD\) 的頂點為 \(A(0,1),B(0,0),C(1,0),D(1,1)\)。內部點 \(P\) 滿足
      \[
      [\triangle PDA]:[\triangle PBC]=1:2,\qquad
      [\triangle PAB]:[\triangle PCD]=2:3。
      \]
      求 \(P\) 的坐標。`,
      solution: [String.raw`設 \(P=(x,y)\)。以正方形四邊為底，相關三角形的高分別是到四邊的距離，因此
      \[
      \frac{1-y}{y}=\frac12\Rightarrow y=\frac23，
      \qquad
      \frac{x}{1-x}=\frac23\Rightarrow x=\frac25。
      \]
      所以 \(P=(\frac25,\frac23)\)。`]
    },
    "94M-14": {
      verified: true, sourcePage: 4,
      stem: "數線上的物體從原點出發，每次向正或負方向跳 1 單位。跳 6 次後落在 +4，共有多少種不同跳法？",
      solution: [String.raw`設向正方向跳 \(r\) 次、負方向跳 \(6-r\) 次，位移條件為
      \[
      r-(6-r)=4，
      \]
      得 \(r=5\)。只要決定唯一一次負跳出現在哪一步，所以共有
      \[
      \binom61=6
      \]
      種。`]
    },
    "94M-15": {
      verified: true, sourcePage: 4,
      stem: String.raw`設 \(z=1-i\)。若
      \[
      1+z+z^2+\cdots+z^9=a+bi，
      \]
      求實數 \(a,b\)。`,
      solution: [String.raw`由等比級數
      \[
      1+z+\cdots+z^9=\frac{1-z^{10}}{1-z}。
      \]
      因 \(z=\sqrt2(\cos(-\pi/4)+i\sin(-\pi/4))\)，故 \(z^{10}=-32i\)，且 \(1-z=i\)。所以
      \[
      \frac{1+32i}{i}=32-i，
      \]
      得 \(a=32、b=-1\)。`]
    },
    "94M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`原點為 \(O\)，\(P=(2,1)\)。\(A、B\) 分別在正 x 軸、正 y 軸，且 \(PA\perp PB\)。求 \(\triangle OAB\) 面積的最大值。`,
      solution: [String.raw`設 \(A=(a,0)、B=(0,b)\)，其中 \(a,b>0\)。由
      \[
      \overrightarrow{PA}\cdot\overrightarrow{PB}=(a-2,-1)\cdot(-2,b-1)=0
      \]
      得 \(2a+b=5\)。面積
      \[
      \frac{ab}{2}=\frac{a(5-2a)}2
      =-\left(a-\frac54\right)^2+\frac{25}{16}，
      \]
      最大值為 \(\frac{25}{16}\)。`]
    },
    "94M-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`在 \(\triangle ABC\) 中，\(\angle BAC\) 的平分線 \(AD\) 交 \(BC\) 於 \(D\)。已知 \(BD=3、DC=6、AB=AD\)，求 \(\cos\angle BAD\)。`,
      solution: [String.raw`設 \(AB=AD=x\)。由角平分線定理
      \[
      \frac{AB}{AC}=\frac{BD}{DC}=\frac12，
      \]
      所以 \(AC=2x\)。角平分線長公式 \(AD^2=AB\cdot AC-BD\cdot DC\) 給出
      \[
      x^2=2x^2-18\Rightarrow x^2=18。
      \]
      在等腰三角形 \(ABD\) 中，
      \[
      \cos\angle BAD=\frac{x^2+x^2-3^2}{2x^2}=\frac34。
      \]`]
    },
    "94M-18": {
      verified: true, sourcePage: 5,
      stem: String.raw`過拋物線 \(y^2=4x\) 的焦點 \(F=(1,0)\) 作一直線，與拋物線交於 \(P,Q\)，其中 \(P\) 在上半平面。若 \(2PF=3QF\)，求 \(P\) 的 x 坐標。`,
      solution: [String.raw`用參數表示拋物線上的點 \(P=(t^2,2t)\)，其中 \(t>0\)，則 \(PF=t^2+1\)。焦弦另一端參數為 \(-1/t\)，故
      \[
      QF=1+\frac1{t^2}=\frac{t^2+1}{t^2}。
      \]
      代入 \(2PF=3QF\)，約去 \(t^2+1\) 得 \(2=3/t^2\)，所以 \(t^2=3/2\)。因此 \(P\) 的 x 坐標為 \(\frac32\)。`]
    },
    "94M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`正實數 \(x\) 滿足 \(x\cdot3^x=3^{18}\)。若 \(x\) 位於連續正整數 \(k\) 與 \(k+1\) 之間，求 \(k\)。`,
      solution: [String.raw`函數 \(f(x)=x3^x\) 在正數範圍遞增。比較
      \[
      f(15)=15\cdot3^{15}<27\cdot3^{15}=3^{18}，
      \]
      而
      \[
      f(16)=16\cdot3^{16}=48\cdot3^{15}>3^{18}。
      \]
      所以 \(15<x<16\)，得 \(k=15\)。`]
    },
    "94M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`邊長為 1 的正立方體 \(ABCD\text{-}EFGH\) 中，內部點 \(P\) 滿足
      \[
      \overrightarrow{AP}=\frac34\overrightarrow{AB}+\frac12\overrightarrow{AD}+\frac23\overrightarrow{AE}。
      \]
      求 \(P\) 到直線 \(AB\) 的距離。`,
      solution: [String.raw`以 \(A\) 為原點、\(\overrightarrow{AB},\overrightarrow{AD},\overrightarrow{AE}\) 為互相垂直的單位坐標軸，則
      \[
      P=\left(\frac34,\frac12,\frac23\right)。
      \]
      直線 \(AB\) 是第一坐標軸，所以距離只取另外兩個垂直分量：
      \[
      \sqrt{\left(\frac12\right)^2+\left(\frac23\right)^2}
      =\sqrt{\frac{25}{36}}=\frac56。
      \]`]
    }
  });
})();
