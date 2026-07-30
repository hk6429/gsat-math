(() => {
  Object.assign(window.MATH_CONTENT, {
    "99M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`數列 \(a_1,a_2,\ldots,a_{10}\) 中每一項皆為 \(1\) 或 \(-1\)，則 \(a_1+a_2+\cdots+a_{10}\) 的值有多少種可能？`,
      options: { "1": "10", "2": "11", "3": String.raw`\(P^{10}_2\)`, "4": String.raw`\(C^{10}_2\)`, "5": String.raw`\(2^{10}\)` },
      solution: [String.raw`設其中有 \(k\) 項為 \(1\)，其餘 \(10-k\) 項為 \(-1\)，則總和為
      \[
      k-(10-k)=2k-10。
      \]
      當 \(k=0,1,\ldots,10\) 時，共得到 \(-10,-8,\ldots,8,10\) 等 \(11\) 種值。`],
      optionAnalysis: {
        "1": "漏算了從 0 個到 10 個正一共有 11 種情況。",
        "2": String.raw`\(k\) 有 \(0\) 至 \(10\) 共 \(11\) 種取值，且所得總和互不相同。`,
        "3": "排列數是在計算位置排法，不是不同的總和值數量。",
        "4": "組合數是在計算選出兩個位置的方法，不符合題意。",
        "5": String.raw`\(2^{10}\) 是十項正負號的完整排列數；許多排列會得到相同總和。`
      }
    },
    "99M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知 \(a,b\) 為整數且
      \[
      \begin{vmatrix}5&a\\ b&7\end{vmatrix}=4，
      \]
      求 \(|a+b|\)。`,
      options: { "1": "16", "2": "31", "3": "32", "4": "39", "5": "條件不足，無法確定" },
      solution: [String.raw`由行列式得 \(35-ab=4\)，所以 \(ab=31\)。因 \(a,b\) 為整數，只有
      \[
      (a,b)=(1,31),(31,1),(-1,-31),(-31,-1)。
      \]
      四種情形都滿足 \(|a+b|=32\)。`],
      optionAnalysis: {
        "1": "不符合整數因數 1 與 31 的和。",
        "2": "31 是乘積 \(ab\)，不是所求的和之絕對值。",
        "3": String.raw`整數因數配對必為 \(\pm1,\pm31\)，故 \(|a+b|=32\)。`,
        "4": "不符合所有可能的整數因數配對。",
        "5": "雖有四組有序解，但它們的和之絕對值都相同，因此可以確定。"
      }
    },
    "99M-3": {
      verified: true, sourcePage: 1,
      stem: "箱中有三顆紅球與三顆白球，隨機同時抽出兩顆球。兩球顏色不同可得 100 元，顏色相同則無獎金。求獎金的期望值。",
      options: { "1": "20 元", "2": "30 元", "3": "40 元", "4": "50 元", "5": "60 元" },
      solution: [String.raw`抽到一紅一白的機率為
      \[
      \frac{\binom31\binom31}{\binom62}=\frac9{15}=\frac35。
      \]
      因此期望值為 \(100\times\frac35=60\) 元。`],
      optionAnalysis: {
        "1": "不是一紅一白事件依機率加權後的結果。",
        "2": "可能只把紅白球數相等誤當成中獎機率的一半。",
        "3": String.raw`這是同色機率 \(\frac25\) 乘上 100 的結果，但同色沒有獎金。`,
        "4": "兩球顏色不同的機率不是二分之一。",
        "5": String.raw`中獎機率為 \(\frac35\)，期望值為 \(60\) 元。`
      }
    },
    "99M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`坐標平面上給定 \(A(1,0)\)、\(B(0,1)\)，另有
      \[
      P(\pi,1),\quad Q(-\sqrt3,6),\quad R(2,\log_4 32)。
      \]
      \(\triangle PAB,\triangle QAB,\triangle RAB\) 的面積依序為 \(p,q,r\)，比較三者大小。`,
      options: { "1": String.raw`\(p<q<r\)`, "2": String.raw`\(p<r<q\)`, "3": String.raw`\(q<p<r\)`, "4": String.raw`\(q<r<p\)`, "5": String.raw`\(r<q<p\)` },
      solution: [String.raw`對任意 \(X(x,y)\)，
      \[
      [\triangle XAB]=\frac12|x+y-1|。
      \]
      因而
      \[
      p=\frac{\pi}{2},\quad q=\frac{5-\sqrt3}{2},\quad
      r=\frac{2+\log_4 32-1}{2}=\frac74。
      \]
      比較近似值 \(1.571<1.634<1.75\)，故 \(p<q<r\)。`],
      optionAnalysis: {
        "1": "依三個面積的精確式或近似值比較，順序正確。",
        "2": String.raw`錯在 \(q<r\)，不是 \(r<q\)。`,
        "3": String.raw`錯在 \(p<q\)。`,
        "4": String.raw`錯在 \(p\) 是三者最小，不是最大。`,
        "5": String.raw`三者的正確次序與此完全不符。`
      }
    },
    "99M-5": {
      verified: true, sourcePage: 2,
      stem: "密閉實驗室中開始有某種細菌 1 千隻，並以每小時增加 8% 的速率繁殖。若維持此速率，100 小時後的數量最接近何者？",
      options: { "1": "9 千隻", "2": "108 千隻", "3": "2200 千隻", "4": "3200 千隻", "5": "32000 千隻" },
      solution: [String.raw`100 小時後的數量為 \(1.08^{100}\) 千隻。利用對數估計：
      \[
      100\ln1.08\approx7.696，
      \qquad e^{7.696}\approx2199。
      \]
      所以最接近 \(2200\) 千隻。`],
      optionAnalysis: {
        "1": "僅接近一段很短時間的成長，未計入 100 次複利。",
        "2": "把 100 小時與 8% 做近似線性運算，忽略複利效果。",
        "3": String.raw`\(1.08^{100}\approx2199\)，最接近 \(2200\) 千隻。`,
        "4": "高估了每小時 8% 複利 100 次的結果。",
        "5": "比正確數量大約多一個數量級。"
      }
    },
    "99M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`坐標空間中 \(O\) 為原點，\(A=(1,2,1)\)。設 \(S\) 是以 \(O\) 為球心、4 為半徑的球面。求 \(S\) 上滿足
      \[
      \overrightarrow{OA}\cdot\overrightarrow{OP}=6
      \]
      的所有點 \(P\) 所成圖形。`,
      options: { "1": "空集合", "2": "一個點", "3": "兩個點", "4": "一個圓", "5": "兩個圓" },
      solution: [String.raw`內積條件是平面 \(x+2y+z=6\)。此平面到原點的距離為
      \[
      \frac6{\sqrt{1^2+2^2+1^2}}=\sqrt6<4。
      \]
      平面穿過球面，因此交集是一個圓。`],
      optionAnalysis: {
        "1": "平面到球心距離小於半徑，交集不為空。",
        "2": "只有平面與球面相切時交集才是一點。",
        "3": "球面與平面的非相切交集不是兩個離散點。",
        "4": String.raw`因 \(\sqrt6<4\)，平面截球面所得為一個圓。`,
        "5": "單一平面截單一球面不會同時得到兩個圓。"
      }
    },
    "99M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`橢圓
      \[
      \Gamma_1:\frac{x^2}{5^2}+\frac{y^2}{3^2}=1,\quad
      \Gamma_2:\frac{x^2}{5^2}+\frac{y^2}{3^2}=2,\quad
      \Gamma_3:\frac{x^2}{5^2}+\frac{y^2}{3^2}=\frac{2x}{5}
      \]
      的長軸長分別為 \(l_1,l_2,l_3\)，比較三者。`,
      options: { "1": String.raw`\(l_1=l_2=l_3\)`, "2": String.raw`\(l_1=l_2<l_3\)`, "3": String.raw`\(l_1<l_2<l_3\)`, "4": String.raw`\(l_1=l_3<l_2\)`, "5": String.raw`\(l_1<l_3<l_2\)` },
      solution: [String.raw`\(\Gamma_1\) 的長軸長為 \(10\)；\(\Gamma_2\) 除以 2 後可見長半軸為 \(5\sqrt2\)，故長軸長為 \(10\sqrt2\)。`, String.raw`\(\Gamma_3\) 配方得
      \[
      \frac{(x-5)^2}{25}+\frac{y^2}{9}=1，
      \]
      只是 \(\Gamma_1\) 的平移，長軸長仍為 \(10\)。故 \(l_1=l_3<l_2\)。`],
      optionAnalysis: {
        "1": String.raw`\(\Gamma_2\) 的兩軸均放大 \(\sqrt2\) 倍。`,
        "2": String.raw`\(\Gamma_3\) 與 \(\Gamma_1\) 等長，不比它更長。`,
        "3": String.raw`錯在 \(l_1=l_3\)。`,
        "4": "第一、三個橢圓等長，第二個較長，正確。",
        "5": String.raw`錯在 \(l_1\) 與 \(l_3\) 相等。`
      }
    },
    "99M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(\theta_1,\theta_2,\theta_3,\theta_4\) 分別為第一、第二、第三、第四象限角，且都介於 \(0\) 與 \(2\pi\) 之間。已知
      \[
      |\cos\theta_1|=|\cos\theta_2|=|\cos\theta_3|=|\cos\theta_4|=\frac13，
      \]
      選出正確敘述。`,
      options: { "1": String.raw`\(\theta_1<\frac\pi4\)`, "2": String.raw`\(\theta_1+\theta_2=\pi\)`, "3": String.raw`\(\cos\theta_3=-\frac13\)`, "4": String.raw`\(\sin\theta_4=\frac{2\sqrt2}{3}\)`, "5": String.raw`\(\theta_4=\theta_3+\frac\pi2\)` },
      solution: [String.raw`令 \(\alpha=\arccos\frac13\)，則 \(\alpha>\frac\pi4\)，且
      \[
      \theta_1=\alpha,\quad\theta_2=\pi-\alpha,\quad
      \theta_3=\pi+\alpha,\quad\theta_4=2\pi-\alpha。
      \]
      因此（2）成立，第三象限餘弦為負，所以（3）也成立。第四象限正弦應為 \(-2\sqrt2/3\)。`],
      optionAnalysis: {
        "1": String.raw`因 \(\cos\theta_1=1/3<\cos(\pi/4)\)，故 \(\theta_1>\pi/4\)。`,
        "2": String.raw`\(\alpha+(\pi-\alpha)=\pi\)，正確。`,
        "3": "第三象限餘弦為負，絕對值又是 1/3，故正確。",
        "4": "第四象限正弦為負，符號錯誤。",
        "5": String.raw`\(\theta_4-\theta_3=\pi-2\alpha\)，並非 \(\pi/2\)。`
      }
    },
    "99M-9": {
      verified: true, sourcePage: 3,
      stem: "下列哪些方程式有實數解？請選出所有符合條件的方程式。",
      options: { "1": String.raw`\(x^3+x-1=0\)`, "2": String.raw`\(2^x+2^{-x}=0\)`, "3": String.raw`\(\log_2x+\log_x2=1\)`, "4": String.raw`\(\sin x+\cos2x=3\)`, "5": String.raw`\(4\sin x+3\cos x=\frac92\)` },
      solution: [String.raw`（1）的左式連續且嚴格遞增，於 \(x=0,1\) 間變號，故有實根。（2）左式恆正。`, String.raw`（3）令 \(t=\log_2x\ne0\)，則 \(t+1/t=1\)，化為 \(t^2-t+1=0\)，判別式為 \(-3\)。（4）令 \(s=\sin x\)，左式為 \(1+s-2s^2\)，最大值 \(9/8<3\)。（5）左式值域為 \([-5,5]\)，故 \(9/2\) 可達到。`],
      optionAnalysis: {
        "1": "由介值定理可知有實數解。",
        "2": String.raw`兩個正數 \(2^x,2^{-x}\) 的和不可能為 0。`,
        "3": "換元後二次方程判別式小於 0，沒有實解。",
        "4": String.raw`左式最大值只有 \(9/8\)，不可能等於 3。`,
        "5": String.raw`振幅為 \(\sqrt{4^2+3^2}=5\)，而 \(9/2\) 在其值域內。`
      }
    },
    "99M-10": {
      verified: true, sourcePage: 4,
      stem: String.raw`實數數列滿足
      \[
      a_{n+1}=\frac{n(n+1)}2-a_n
      \]
      對所有正整數 \(n\) 成立。選出正確敘述。`,
      options: {
        "1": String.raw`若 \(a_1=1\)，則 \(a_2=1\)`,
        "2": String.raw`若 \(a_1\) 是整數，則每一項都是整數`,
        "3": String.raw`若 \(a_1\) 是無理數，則每一項都是無理數`,
        "4": String.raw`\(a_2\le a_4\le\cdots\le a_{2n}\le\cdots\)`,
        "5": String.raw`若 \(a_k\) 是奇數，則 \(a_{k+2},a_{k+4},\ldots\) 都是奇數`
      },
      solution: [String.raw`連用兩次遞迴式可得
      \[
      a_{n+2}=a_n+n+1。
      \]
      因此偶數項子數列嚴格遞增，（4）成立。原式每次只以整數減前項，所以整數性保留；同理，整數減無理數仍為無理數，故（2）（3）成立。`, String.raw`若 \(a_1=1\)，則 \(a_2=0\)，所以（1）錯。兩步所加的 \(k+1\) 奇偶不固定，不能保證往後同奇偶，故（5）錯。`],
      optionAnalysis: {
        "1": String.raw`直接代 \(n=1\) 得 \(a_2=1-a_1=0\)。`,
        "2": "每一步都是整數減整數，整數性會保留。",
        "3": "每一步都是整數減無理數，結果仍為無理數。",
        "4": String.raw`\(a_{2m+2}=a_{2m}+2m+1>a_{2m}\)，正確。`,
        "5": String.raw`\(a_{k+2}=a_k+k+1\)，加數不一定為偶數。`
      }
    },
    "99M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`坐標空間中，直線 \(L\) 位於平面 \(2x-y=2\) 上，且通過 \(T=(2,2,2)\)。下列哪些點可能是原點 \(O\) 在 \(L\) 上的投影點？`,
      options: { "1": String.raw`\((2,2,2)\)`, "2": String.raw`\((2,0,2)\)`, "3": String.raw`\((\frac45,-\frac25,0)\)`, "4": String.raw`\((\frac45,-\frac25,-2)\)`, "5": String.raw`\((\frac89,-\frac29,-\frac29)\)` },
      solution: [String.raw`候選點 \(P\) 必須在平面上；若 \(P\ne T\)，還要滿足 \(\overrightarrow{OP}\perp\overrightarrow{TP}\)，即
      \[
      P\cdot(T-P)=0。
      \]
      逐一代入可知（3）（5）同時滿足兩條件。（2）不在平面上，（4）的內積不為 0。`, String.raw`（1）雖等於 \(T\)，仍可在平面內選一條通過 \(T\) 且方向與 \(\overrightarrow{OT}\) 垂直的直線，所以也可能是投影點。`],
      optionAnalysis: {
        "1": "可在指定平面內選取通過此點且垂直於其位置向量的直線。",
        "2": String.raw`代入 \(2x-y\) 得 4，不在指定平面上。`,
        "3": "位於平面上，且與通往固定點 T 的方向垂直，符合。",
        "4": "雖在平面上，但位置向量不垂直於 TP，不能是投影點。",
        "5": "位於平面上，且位置向量與 TP 垂直，符合。"
      }
    },
    "99M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`某議題支持度抽樣調查結果如下：女性樣本支持比例 \(\hat p=0.52\)、\(\hat p\) 的標準差為 \(0.02\)；男性樣本支持比例 \(\hat p=0.59\)、標準差為 \(0.04\)。選出可由此次抽樣結果得到的推論。`,
      options: {
        "1": "全台灣男性公民的支持比例大於女性公民",
        "2": "95% 信心水準下，全台灣女性公民支持比例的信賴區間為 [0.48,0.56]",
        "3": "此次抽樣的女性公民數少於男性公民數",
        "4": "若不區分性別，此次抽樣的支持比例介於 0.52 與 0.59 之間",
        "5": "若不區分性別，此次抽樣支持比例的標準差介於 0.02 與 0.04 之間"
      },
      solution: [String.raw`女性的 95% 信賴區間近似為
      \[
      0.52\pm2(0.02)=[0.48,0.56]，
      \]
      故（2）成立。合併後的樣本比例是兩組比例的加權平均，必介於 \(0.52\) 與 \(0.59\) 之間，故（4）成立。`, String.raw`由 \(n=\hat p(1-\hat p)/SE^2\) 估算，女性樣本約 624 人、男性約 151 人，（3）錯。樣本結果不能直接斷言兩個母體比例的大小；合併後標準差也不必介於兩組標準差之間。`],
      optionAnalysis: {
        "1": "樣本比例不同不等於已證明母體比例必有相同次序。",
        "2": String.raw`以估計值加減約兩個標準差，得到 \([0.48,0.56]\)。`,
        "3": "由比例與標準差反推，女性樣本數反而較多。",
        "4": "合併比例是兩組比例的加權平均，必位於兩者之間。",
        "5": "合併樣本的標準差需重新依合併比例與總樣本數計算，沒有此必然關係。"
      }
    },
    "99M-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`平行四邊形 \(ABCD\) 中，\(A=(2,1)\)、\(B=(8,2)\)，點 \(C\) 在第一象限且其 \(x\) 坐標為 12。若面積為 38，求 \(D\) 的坐標。`,
      solution: [String.raw`設 \(C=(12,c)\)，則
      \[
      D=A+C-B=(6,c-1)。
      \]
      又 \(\overrightarrow{AB}=(6,1)\)、\(\overrightarrow{AD}=(4,c-2)\)，故
      \[
      |6(c-2)-4|=|6c-16|=38。
      \]
      解得 \(c=9\) 或 \(-11/3\)。因 \(C\) 在第一象限，取 \(c=9\)，所以 \(D=(6,8)\)。`]
    },
    "99M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`設 \(f(x)\) 為最低次的首項係數為 1 的實係數多項式，且 \(3-2i、i、5\) 都是 \(f(x)=0\) 的解。求 \(f(x)\) 的常數項。`,
      solution: [String.raw`實係數多項式的非實根成共軛對，因此根還包括 \(3+2i\) 與 \(-i\)。最低次為五次，其根的乘積為
      \[
      (3-2i)(3+2i)\cdot i(-i)\cdot5=13\cdot1\cdot5=65。
      \]
      首一五次多項式的常數項是根乘積的相反數，故為 \(-65\)。`]
    },
    "99M-15": {
      verified: true, sourcePage: 5,
      stem: "在一個兩列三行表格的六個空格中，不重複填入 1、2、3、4、5、6。求數字 1、2 在同一行或同一列的方法數。",
      solution: [String.raw`先安排 1、2 的有序位置。同一行有 \(2\times3\times2=12\) 種；同一列有 \(3\times2=6\) 種，兩種情形不重複，共 \(18\) 種。`, String.raw`其餘四數可任意排列，有 \(4!\) 種。因此方法數為
      \[
      18\cdot4!=18\cdot24=432。
      \]`]
    },
    "99M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`設實數 \(a>0\)。若方程組
      \[
      \begin{cases}
      2x-y=1,\\
      x-2y=a,\\
      x-ay=122
      \end{cases}
      \]
      有解，求 \(a\)。`,
      solution: [String.raw`由前兩式解得
      \[
      x=\frac{2-a}{3},\qquad y=\frac{1-2a}{3}。
      \]
      代入第三式：
      \[
      \frac{2-2a+2a^2}{3}=122，
      \]
      得 \(a^2-a-182=0=(a-14)(a+13)\)。因 \(a>0\)，所以 \(a=14\)。`]
    },
    "99M-17": {
      verified: true, sourcePage: 6,
      stem: String.raw`直角三角形 \(ABD\) 中，\(\angle A=90^\circ\)，\(C\) 在 \(AD\) 上。已知 \(BC=6、AB=5\)，且 \(\angle ABD=2\angle ABC\)，求 \(BD\)。`,
      solution: [String.raw`令 \(\angle ABC=\phi\)。在直角三角形 \(ABC\) 中，
      \[
      \cos\phi=\frac{AB}{BC}=\frac56。
      \]
      因此
      \[
      \cos2\phi=2\cos^2\phi-1=2\left(\frac56\right)^2-1=\frac7{18}。
      \]
      在直角三角形 \(ABD\) 中，\(\cos\angle ABD=AB/BD\)，故
      \[
      \frac5{BD}=\frac7{18},\qquad BD=\frac{90}{7}。
      \]`]
    },
    "99M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`拋物線 \(y=x^2+ax+b\) 與 \(x\) 軸交於 \(P,Q\)，且 \(PQ=7\)。若 \(y=x^2+ax+(b+2)\) 與 \(x\) 軸交於 \(R,S\)，求 \(RS\)。`,
      solution: [String.raw`首一二次式兩根的距離是判別式的平方根，因此
      \[
      PQ=\sqrt{a^2-4b}=7\quad\Longrightarrow\quad a^2-4b=49。
      \]
      第二式的判別式為
      \[
      a^2-4(b+2)=49-8=41，
      \]
      所以 \(RS=\sqrt{41}\)。`]
    },
    "99M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`在 \(\triangle ABC\) 中，\(AB=2、BC=3\)，且 \(\angle A=2\angle C\)。求 \(AC\)。`,
      solution: [String.raw`由正弦定理
      \[
      \frac{2}{\sin C}=\frac{3}{\sin2C}
      \]
      得 \(4\cos C=3\)，即 \(\cos C=3/4\)。設 \(AC=x\)，由餘弦定理
      \[
      2^2=x^2+3^2-2\cdot x\cdot3\cdot\frac34，
      \]
      化為 \(2x^2-9x+10=0\)，故 \(x=2\) 或 \(5/2\)。`, String.raw`若 \(x=2\)，則 \(AB=AC\)，會有 \(\angle B=\angle C\)，再配合 \(\angle A=2\angle C\) 得 \(C=45^\circ\)，與 \(\cos C=3/4\) 矛盾。因此 \(AC=5/2\)。`]
    },
    "99M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`給定 \(A=(\frac94,2)\)、直線 \(L:y=-5\) 與拋物線 \(\Gamma:x^2=8y\)。若 \(P\) 在 \(\Gamma\) 上變動，求 \(d(P,L)-AP\) 的最大值。`,
      solution: [String.raw`拋物線焦點為 \(F=(0,2)\)，準線為 \(y=-2\)。對拋物線上的點 \(P\)，
      \[
      PF=d(P,y=-2)=y_P+2，
      \]
      而 \(d(P,L)=y_P+5=PF+3\)。所以
      \[
      d(P,L)-AP=3+PF-PA\le3+FA
      \]
      （由三角不等式 \(PF\le PA+AF\)）。`, String.raw`又 \(FA=9/4\)，故上界為
      \[
      3+\frac94=\frac{21}{4}。
      \]
      取 \(P=(4,2)\) 時 \(F,A,P\) 共線且 \(A\) 位於其間，可達等號。`]
    }
  });
})();
