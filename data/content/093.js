(() => {
  Object.assign(window.MATH_CONTENT, {
    "93M-1": {
      verified: true, sourcePage: 1,
      stem: "一等差數列共有十項，奇數項之和為 15，偶數項之和為 30，求公差。",
      options: { "1":"1", "2":"2", "3":"3", "4":"4", "5":"5" },
      solution: [String.raw`設首項為 \(a\)、公差為 \(d\)。五個奇數項與五個偶數項的和分別為
      \[
      5a+20d=15,\qquad 5a+25d=30。
      \]
      兩式相減得 \(5d=15\)，所以 \(d=3\)。`],
      optionAnalysis: { "1":"奇、偶項和之差不只是一個公差。","2":"未除以五組相鄰項。","3":"五個偶數項各比對應奇數項多 d，故 5d=15。","4":"高估公差。","5":"把 30−15 誤當成三個公差。" }
    },
    "93M-2": {
      verified: true, sourcePage: 1,
      stem: "比較下列五個數的大小，選出最大者。其中 n!=n×(n−1)×⋯×2×1。",
      options: { "1":String.raw`\(100^{10}\)`, "2":String.raw`\(10^{100}\)`, "3":String.raw`\(50^{50}\)`, "4":String.raw`\(50!\)`, "5":String.raw`\(\frac{100!}{50!}\)` },
      solution: [String.raw`有 \(100^{10}=10^{20}<10^{100}\)，且
      \[
      50!<50^{50}<100^{50}=10^{100}。
      \]
      又 \(\frac{100!}{50!}=51\cdot52\cdots100\)，共 50 個因數且每個不超過 100，所以嚴格小於 \(100^{50}=10^{100}\)。故最大的是（2）。`],
      optionAnalysis: { "1":"等於 10²⁰，遠小於 10¹⁰⁰。","2":"比其餘四數都大。","3":"因 50<100，故 50⁵⁰<100⁵⁰。","4":"50!<50⁵⁰。","5":"50 個因數中多數小於 100，故小於 100⁵⁰。" }
    },
    "93M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`複數平面上的區域
      \[
      A=\{z:z=r(\cos\theta+i\sin\theta),\ 0\le r\le1,\ \tfrac{3\pi}{4}\le\theta\le\tfrac{5\pi}{4}\}。
      \]
      令 \(D=\{w:w=z^3,\ z\in A\}\)，哪一幅略圖最接近 \(D\)？`,
      options: {
        "1":"單位圓盤去掉第四象限的 90° 扇形",
        "2":"單位圓盤去掉以負 y 軸為中心的 90° 扇形",
        "3":"單位圓盤去掉以正 y 軸為中心的 90° 扇形",
        "4":"單位圓盤去掉以負 x 軸為中心的 90° 扇形",
        "5":"單位圓盤去掉以正 x 軸為中心的 90° 扇形"
      },
      solution: [String.raw`若 \(z=r(\cos\theta+i\sin\theta)\)，則
      \[
      z^3=r^3(\cos3\theta+i\sin3\theta)。
      \]
      半徑仍涵蓋 0 到 1；角度由 \(3\theta\in[9\pi/4,15\pi/4]\)，模 \(2\pi\) 後涵蓋 \(\pi/4\) 到 \(7\pi/4\) 的 270° 扇形，即去掉正 x 軸上下各 45° 的扇形，故選（5）。`],
      optionAnalysis: { "1":"缺口位置只在第四象限，不符三倍角範圍。","2":"缺口中心方向錯誤。","3":"缺口應朝正 x 軸，不是正 y 軸。","4":"缺口方向相反。","5":"三倍角後恰缺少正 x 軸周圍 90°。" }
    },
    "93M-4": {
      verified: true, sourcePage: 2,
      stem: String.raw`坐標空間中 \(A(1,2,3)、B(7,6,5)\)。令 \(S\) 為 xy 平面上所有使 \(\overrightarrow{PA}\perp\overrightarrow{PB}\) 的點 \(P\) 所成集合，判斷 \(S\)。`,
      options: { "1":"空集合", "2":"恰含一點", "3":"恰含兩點", "4":"一線段", "5":"一圓" },
      solution: [String.raw`令 \(P=(x,y,0)\)。垂直條件為
      \[
      (1-x,2-y,3)\cdot(7-x,6-y,5)=0，
      \]
      化簡得
      \[
      (x-4)^2+(y-4)^2+2=0。
      \]
      左式恆為正，不可能成立，所以 \(S\) 是空集合。`],
      optionAnalysis: { "1":"平方和再加 2 不可能為 0。","2":"沒有任何實數點符合。","3":"不是直線與圓的兩交點情形。","4":"垂直條件不形成線段。","5":"形式上會得到負平方半徑，並非實圓。" }
    },
    "93M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`在 \(\triangle ABC\) 中，點 \(P\) 滿足
      \[
      \overrightarrow{AP}=\frac13\overrightarrow{AB}+t\overrightarrow{AC}。
      \]
      求使 \(P\) 落在三角形內部的 \(t\) 最大範圍。`,
      options: { "1":String.raw`\(0<t<\frac14\)`, "2":String.raw`\(0<t<\frac13\)`, "3":String.raw`\(0<t<\frac12\)`, "4":String.raw`\(0<t<\frac23\)`, "5":String.raw`\(0<t<\frac34\)` },
      solution: [String.raw`P 的重心坐標係數可寫成
      \[
      P=\left(1-\frac13-t\right)A+\frac13B+tC。
      \]
      位於三角形內部要求三個係數皆正，所以 \(t>0\) 且 \(\frac23-t>0\)。因此 \(0<t<\frac23\)。`],
      optionAnalysis: { "1":"範圍過窄。","2":"只限制 t 不超過 AB 的係數，並非必要。","3":"仍漏掉部分三角形內部。","4":"三個重心坐標皆正的完整範圍。","5":"當 t≥2/3 時 A 的係數不再為正。" }
    },
    "93M-6": {
      verified: true, sourcePage: 2,
      stem: "股票某日收盤價為 40 元，接著連續五日每天跌 7%，再連續五日每天漲 7%。十日後收盤價最接近多少元？",
      options: { "1":"39 元", "2":"39.5 元", "3":"40 元", "4":"40.5 元", "5":"41 元" },
      solution: [String.raw`跌 7% 乘 \(0.93\)，漲 7% 乘 \(1.07\)。所以
      \[
      40(0.93)^5(1.07)^5
      =40(0.9951)^5\approx39.03，
      \]
      最接近 39 元。`],
      optionAnalysis: { "1":"連乘後約為 39.03 元。","2":"高於實際近似值。","3":"同百分比先跌再漲，乘積小於 1，不會回到原價。","4":"價格不會超過 40 元。","5":"漲跌順序不改變乘積，也不會得到 41 元。" }
    },
    "93M-7": {
      verified: true, sourcePage: 3,
      stem: "匝道分成內、外兩線，標誌寫「外側車道　大客車專用」。選出不違反此規定的情形。",
      options: { "1":"小型車行駛內側車道", "2":"小型車行駛外側車道", "3":"大客車行駛內側車道", "4":"大客車行駛外側車道", "5":"大貨車行駛外側車道" },
      solution: ["「外側車道大客車專用」表示行駛外側車道者必須是大客車；它沒有規定大客車只能走外側。因此小型車走內側、大客車走內側或外側都不違規，答案為（1）（3）（4）。"],
      optionAnalysis: { "1":"未使用大客車專用的外側車道。","2":"小型車占用大客車專用車道。","3":"標誌沒有禁止大客車走內側。","4":"符合外側車道的專用對象。","5":"大貨車不是大客車。" }
    },
    "93M-8": {
      verified: true, sourcePage: 3,
      stem: "下列哪些方程式的圖形有界，也就是可以放進一個夠大的圓裡？",
      options: { "1":String.raw`\(3x=2y^2\)`, "2":String.raw`\(3x^2+2y^2=1\)`, "3":String.raw`\(3x^2-2y^2=1\)`, "4":String.raw`\(|x+y|=1\)`, "5":String.raw`\(|x|+|y|=1\)` },
      solution: ["（1）是無界拋物線；（2）是有界橢圓；（3）是無界雙曲線；（4）是兩條無界平行線；（5）是四個頂點為 (±1,0)、(0,±1) 的菱形。因此只有（2）（5）有界。"],
      optionAnalysis: { "1":"拋物線向正 x 方向無限延伸。","2":"橢圓為封閉有界圖形。","3":"雙曲線兩支無限延伸。","4":"等同 x+y=±1，為兩條直線。","5":"形成封閉菱形。" }
    },
    "93M-9": {
      verified: true, sourcePage: 3,
      stem: "金字塔 O-ABCD 的底面是邊長 1 的正方形，且 O 到 A、B、C、D 的距離均為 2。判斷向量關係。",
      options: {
        "1":String.raw`\(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}=\vec0\)`,
        "2":String.raw`\(\overrightarrow{OA}+\overrightarrow{OB}-\overrightarrow{OC}-\overrightarrow{OD}=\vec0\)`,
        "3":String.raw`\(\overrightarrow{OA}-\overrightarrow{OB}+\overrightarrow{OC}-\overrightarrow{OD}=\vec0\)`,
        "4":String.raw`\(\overrightarrow{OA}\cdot\overrightarrow{OB}=\overrightarrow{OC}\cdot\overrightarrow{OD}\)`,
        "5":String.raw`\(\overrightarrow{OA}\cdot\overrightarrow{OC}=2\)`
      },
      solution: [String.raw`把底面中心置於原點，取
      \[
      A=(-\tfrac12,\tfrac12,0),B=(-\tfrac12,-\tfrac12,0),
      C=(\tfrac12,-\tfrac12,0),D=(\tfrac12,\tfrac12,0)
      \]
      且 \(O=(0,0,h)\)。直接計算得（3）的向量和為 0；相鄰頂點的內積只依共同高度與相同邊長決定，故（4）成立。又 \(h^2=4-\frac12=\frac72\)，所以 \(\overrightarrow{OA}\cdot\overrightarrow{OC}=3\)，不是 2。`],
      optionAnalysis: { "1":"四向量的垂直分量相加不為 0。","2":"水平分量不會抵消。","3":"正方形兩組對邊向量使各分量完全抵消。","4":"AB 與 CD 都是底面相鄰邊，對應內積相同。","5":"實際內積為 3。" }
    },
    "93M-10": {
      verified: true, sourcePage: 4,
      stem: "從 1 到 10 任取兩個不同整數。以 p 表示和為偶數的機率，q 表示和為奇數的機率，選出正確敘述。",
      options: { "1":String.raw`\(p+q=1\)`, "2":String.raw`\(p=q\)`, "3":String.raw`\(|p-q|\le\frac1{10}\)`, "4":String.raw`\(|p-q|\ge\frac1{20}\)`, "5":String.raw`\(p\ge\frac12\)` },
      solution: [String.raw`共有 \(\binom{10}{2}=45\) 對。和為偶數須同奇偶，有
      \[
      \binom52+\binom52=20
      \]
      對，所以 \(p=4/9、q=5/9\)，且 \(|p-q|=1/9\)。因此（1）（4）正確。`],
      optionAnalysis: { "1":"和不是偶數就是奇數，兩事件互補。","2":"20 對與 25 對並不相等。","3":"1/9 大於 1/10。","4":"1/9 大於 1/20。","5":"p=4/9 小於 1/2。" }
    },
    "93M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`\(f(x)\) 為三次實係數多項式，且 \(1+i\) 是 \(f(x)=0\) 的一根。選出必然正確的敘述。`,
      options: {
        "1":String.raw`\(f(1-i)=0\)`,
        "2":String.raw`\(f(2+i)\ne0\)`,
        "3":String.raw`沒有實數 \(x\) 滿足 \(f(x)=x\)`,
        "4":String.raw`沒有實數 \(x\) 滿足 \(f(x^3)=0\)`,
        "5":String.raw`若 \(f(0)>0、f(2)<0\)，則 \(f(4)<0\)`
      },
      solution: [String.raw`實係數多項式的非實根成共軛對，所以 \(1-i\) 也是根，而第三根必為實數 \(r\)。可寫成
      \[
      f(x)=a\big((x-1)^2+1\big)(x-r)。
      \]
      因第三根為實數，\(2+i\) 不可能是根；且 \(f(x)-x\) 為實三次多項式，必有實根，所以（3）錯；取 \(x=\sqrt[3]r\) 可使 \(f(x^3)=0\)，故（4）錯。`, String.raw`若 \(f(0)>0、f(2)<0\)，由前式中二次因子恆正可知必有 \(a<0\) 且 \(0<r<2\)，因此 \(f(4)<0\)。故（1）（2）（5）成立。`],
      optionAnalysis: { "1":"實係數保證共軛根 1−i。","2":"三次式已有兩個非實根，第三根只能是實數。","3":"實三次式 f(x)−x 必有實根。","4":"第三個實根一定有實立方根。","5":"符號條件迫使實根在 0、2 之間且首項係數為負。" }
    },
    "93M-12": {
      verified: true, sourcePage: 4,
      stem: "五次平時考取較好的三次平均占 30%，兩次期中考各占 20%，期末考占 30%。平時考為 68、82、70、73、85，期中考為 86、79，期末考為 90，求四捨五入至整數的學期成績。",
      solution: [String.raw`較好的三次平時考為 85、82、73，平均 80。加權成績為
      \[
      80(0.3)+86(0.2)+79(0.2)+90(0.3)
      =24+17.2+15.8+27=84。
      \]`]
    },
    "93M-13": {
      verified: true, sourcePage: 5,
      stem: "抽獎箱有標示 1000、800、600、0 元的四球，等可能抽取且取後放回。第一次抽到 0 元可再抽一次，但第二次獎金折半；若再抽到 0 元不再抽。求期望獎金。",
      solution: [String.raw`第一次抽獎的期望值為
      \[
      \frac{1000+800+600+0}{4}=600。
      \]
      以 \(1/4\) 機率取得第二次機會，而第二次期望獎金折半為 \(600/2=300\)。總期望值
      \[
      600+\frac14\cdot300=675\text{ 元}。
      \]`]
    },
    "93M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`正整數 \(a,b,c\) 滿足
      \[
      a\log_{520}2+b\log_{520}5+c\log_{520}13=3，
      \]
      求 \(a+b+c\)。`,
      solution: [String.raw`合併對數得
      \[
      \log_{520}(2^a5^b13^c)=3，
      \]
      所以 \(2^a5^b13^c=520^3\)。因 \(520=2^3\cdot5\cdot13\)，比較質因數指數得
      \[
      a=9,\quad b=3,\quad c=3，
      \]
      故 \(a+b+c=15\)。`]
    },
    "93M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`等腰直角三角形 \(ABC\) 中，\(\angle BAC=90^\circ\)。\(P,Q\) 為斜邊 \(BC\) 的三等分點，求 \(\tan\angle PAQ\)。`,
      solution: [String.raw`取 \(A=(0,0)、B=(1,0)、C=(0,1)\)，則兩個三等分點可取
      \[
      P=(\tfrac23,\tfrac13),\qquad Q=(\tfrac13,\tfrac23)。
      \]
      直線 AP、AQ 的斜率分別為 \(1/2、2\)，故
      \[
      \tan\angle PAQ=\frac{2-\frac12}{1+2\cdot\frac12}=\frac34。
      \]`]
    },
    "93M-16": {
      verified: true, sourcePage: 5,
      stem: "男生 1008 人、女生 924 人平均分班，各班男生數相同、女生數也相同，且每班總人數在 40 與 50 人之間。求班級數。",
      solution: [String.raw`班級數必同時整除 1008 與 924，而
      \[
      \gcd(1008,924)=84。
      \]
      若分 \(n\) 班，每班共 \(1932/n\) 人；限制 40 到 50 人使 \(n\) 約在 39 到 48 之間。84 在此範圍的因數只有 42。此時每班男生 24 人、女生 22 人，共 46 人，故分 42 班。`]
    },
    "93M-17": {
      verified: true, sourcePage: 6,
      stem: String.raw`平面 \(x-2y+z=0\) 上有一圓，圓心 \(P=(1,1,1)\)，且 \(Q=(-9,9,27)\) 在圓上。過 Q 的一條圓切線方向向量為 \((a,b,1)\)，求 \(a,b\)。`,
      solution: [String.raw`切線位於該平面，所以方向向量滿足
      \[
      a-2b+1=0。
      \]
      又半徑向量 \(\overrightarrow{PQ}=(-10,8,26)\) 與切線垂直，故
      \[
      -10a+8b+26=0。
      \]
      聯立解得 \(a=5、b=3\)。`]
    },
    "93M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`若 \(270^\circ<A<360^\circ\)，且
      \[
      \sqrt3\sin A+\cos A=2\sin2004^\circ，
      \]
      設 \(A=m^\circ\)，求 \(m\)。`,
      solution: [String.raw`左式可化為
      \[
      2\sin(A+30^\circ)。
      \]
      因此 \(\sin(A+30^\circ)=\sin2004^\circ=\sin204^\circ\)。又 \(300^\circ<A+30^\circ<390^\circ\)，符合此區間的同值角為
      \[
      A+30^\circ=336^\circ，
      \]
      所以 \(A=306^\circ\)，即 \(m=306\)。`]
    },
    "93M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`圓
      \[
      (x-7)^2+(y-8)^2=9
      \]
      上有多少個點與原點的距離恰為整數？`,
      solution: [String.raw`圓心到原點距離為 \(\sqrt{7^2+8^2}=\sqrt{113}\)，半徑為 3，所以圓上點到原點的距離範圍是
      \[
      [\sqrt{113}-3,\sqrt{113}+3]\approx[7.63,13.63]。
      \]
      整數距離有 8、9、10、11、12、13 共 6 種。每個距離所對應的原點同心圓都與題給圓交於兩點，故共有 \(6\cdot2=12\) 點。`]
    },
    "93M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`直線 \(L:y=x+2\) 與拋物線 \(\Gamma:x^2=4y\) 相交於 \(P,Q\)。若 \(F\) 為拋物線焦點，求 \(PF+QF\)。`,
      solution: [String.raw`拋物線焦點為 \(F=(0,1)\)，拋物線上任一點到焦點的距離為 \(y+1\)。將 \(y=x+2\) 代入 \(x^2=4y\)，得
      \[
      x^2-4x-8=0，
      \]
      故兩交點的 x 坐標和為 4，y 坐標和為 \(4+4=8\)。因此
      \[
      PF+QF=(y_P+1)+(y_Q+1)=8+2=10。
      \]`]
    }
  });
})();
