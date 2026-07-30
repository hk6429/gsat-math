(() => {
  Object.assign(window.MATH_CONTENT, {
    "86M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`坐標平面上兩直線斜率分別為 \(\sqrt3\) 與 \(\frac1{\sqrt3}\)，求其中一個交角。`,
      options: { "1":String.raw`\(30^\circ\)`, "2":String.raw`\(36^\circ\)`, "3":String.raw`\(45^\circ\)`, "4":String.raw`\(60^\circ\)`, "5":String.raw`\(90^\circ\)` },
      solution: [String.raw`斜率 \(\sqrt3=\tan60^\circ\)，斜率 \(1/\sqrt3=\tan30^\circ\)。兩直線方向角可取 \(60^\circ、30^\circ\)，故銳交角為
      \[
      60^\circ-30^\circ=30^\circ。
      \]`],
      optionAnalysis: { "1":"兩方向角相差 30°。","2":"不是這兩個特殊斜率的角差。","3":"斜率 1 才對應 45° 方向。","4":"這是其中一條線的方向角，不是交角。","5":"兩斜率乘積為 1，不是 −1。" }
    },
    "86M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`P、Q 是平面 \(ax+by+cz=5\) 上相異兩點，且 \(\overrightarrow{PQ}=(x_0,y_0,z_0)\)。求 \(\overrightarrow{PQ}\cdot(a,b,c)\)。`,
      options: { "1":"不定值", "2":"25", "3":"5", "4":"0", "5":"−1" },
      solution: [String.raw`向量 \((a,b,c)\) 是平面的法向量，而同一平面內兩點的連線向量 \(\overrightarrow{PQ}\) 平行於平面，因此兩者垂直：
      \[
      \overrightarrow{PQ}\cdot(a,b,c)=0。
      \]`],
      optionAnalysis: { "1":"雖然 PQ 可變，但永遠位於平面內。","2":"把常數項平方沒有幾何依據。","3":"平面常數 5 不是此內積。","4":"平面內向量與法向量正交。","5":"內積沒有固定為 −1。" }
    },
    "86M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`二次函數 f 滿足不等式 \(f(x)>0\) 的解為 \(-2<x<4\)。求 \(f(2x)<0\) 的解。`,
      options: { "1":String.raw`\(-1<x<2\)`, "2":String.raw`\(x<-1\) 或 \(x>2\)`, "3":String.raw`\(x<-2\) 或 \(x>4\)`, "4":String.raw`\(-4<x<8\)`, "5":String.raw`\(x<-4\) 或 \(x>8\)` },
      solution: [String.raw`因 f 在 \((-2,4)\) 內為正，故在外部為負。令自變數為 \(2x\)，則
      \[
      f(2x)<0\iff 2x<-2\ \text{或}\ 2x>4，
      \]
      所以 \(x<-1\) 或 \(x>2\)。`],
      optionAnalysis: { "1":"這是 f(2x)>0 的區間。","2":"把原來外部區間的端點同除以 2。","3":"忘了把端點除以 2。","4":"把端點錯誤乘 2且取內部。","5":"把端點錯誤乘 2。" }
    },
    "86M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`無窮等比級數和為 \(\frac89\)，第四項為 \(\frac3{32}\)，公比為有理數。將公比化為最簡分數，求分母。`,
      options: { "1":"2", "2":"3", "3":"4", "4":"6", "5":"8" },
      solution: [String.raw`設公比 r、首項 a。由 \(a/(1-r)=8/9\)，得 \(a=\frac89(1-r)\)。又
      \[
      ar^3=\frac89(1-r)r^3=\frac3{32}。
      \]
      代入 \(r=3/4\) 可驗得等式成立；題設有理公比所對應的解即 \(3/4\)，最簡分數分母為 4。`],
      optionAnalysis: { "1":"r=1/2 不符合第四項。","2":"符合條件的公比不是分母 3。","3":"公比為 3/4。","4":"3/4 已是最簡分數，不寫成 4.5/6。","5":"不需擴分為 6/8。" }
    },
    "86M-5": {
      verified: true, sourcePage: 1,
      stem: "邊長 3 的正六邊形每個角各剪去一個小三角形，使剩餘紙板成為正十二邊形。求正十二邊形邊長。",
      options: { "1":"1", "2":String.raw`\(\frac32\)`, "3":String.raw`\(\sqrt3\)`, "4":String.raw`\(\frac{3\sqrt3-3}{2}\)`, "5":String.raw`\(6\sqrt3-9\)` },
      solution: [String.raw`設在原六邊形每邊兩端各截去長 x。原邊留下 \(3-2x\)；跨過原頂角的新增邊，由夾角 120° 的等腰三角形得長 \(x\sqrt3\)。正十二邊形要求
      \[
      3-2x=x\sqrt3。
      \]
      解得 \(x=6-3\sqrt3\)，新邊長 \(x\sqrt3=6\sqrt3-9\)。`],
      optionAnalysis: { "1":"未符合新增斜邊與原邊等長。","2":"只是原邊的一半。","3":"沒有解截角等長條件。","4":"不是上述方程的結果。","5":"由 3−2x=x√3 解得。" }
    },
    "86M-6": {
      verified: true, sourcePage: 1,
      stem: "邊長為 1 的正立方體中，向量 a 的起點與終點都是頂點，且 |a|=1。共有多少個不相等的向量 a？",
      options: { "1":"3", "2":"6", "3":"12", "4":"24", "5":"28" },
      solution: ["長度為 1 的頂點向量只能沿立方體的稜方向。若把三組互相垂直的稜方向視為 x、y、z 軸，則不同向量共有 ±x、±y、±z 六個方向，所以有 6 個。"],
      optionAnalysis: { "1":"只數三個軸，漏掉相反方向。","2":"三個軸各有正、負兩向。","3":"把平行但同向的不同起點重複計算。","4":"接近有向稜的總數，但題目問不相等向量。","5":"混入面或體對角向量。" }
    },
    "86M-7": {
      verified: true, sourcePage: 2,
      stem: "取正立方體六個面的中心點，從中選四點作為頂點，可形成多少個正方形？",
      options: { "1":"3", "2":"4", "3":"6", "4":"8", "5":"12" },
      solution: ["六個面中心是正八面體的六個頂點。每一組相對的兩個面中心排除後，其餘四點位於同一平面並形成正方形；相對面共有三組，因此正方形共有 3 個。"],
      optionAnalysis: { "1":"分別對應排除三組相對面中心。","2":"多算了一個不存在的共面四點組。","3":"把同一正方形按不同起點重複。","4":"不是共面正方形數。","5":"混入非共面的四點組。" }
    },
    "86M-8": {
      verified: true, sourcePage: 2,
      stem: "每人丟公平硬幣，連續正面才繼續，反面即出局。40 人各玩一局，求至少一人連續丟 5 次正面後仍可繼續的機率 p 所在區間。",
      options: { "1":String.raw`\(0.4\le p<0.5\)`, "2":String.raw`\(0.5\le p<0.6\)`, "3":String.raw`\(0.6\le p<0.7\)`, "4":String.raw`\(0.7\le p<0.8\)`, "5":String.raw`\(0.8\le p<0.9\)` },
      solution: [String.raw`單人成功機率為 \(1/32\)，所以至少一人成功為
      \[
      p=1-\left(\frac{31}{32}\right)^{40}\approx1-e^{-1.25}\approx0.713。
      \]
      精確計算也落在 \(0.7\le p<0.8\)。`],
      optionAnalysis: { "1":"低估 40 次機會的累積效果。","2":"仍低於實際約 0.72。","3":"上界仍不足。","4":"1−(31/32)^40 落在此區間。","5":"高估至少一人成功的機率。" }
    },
    "86M-9": {
      verified: true, sourcePage: 2,
      stem: String.raw`設
      \[
      f(x)=\sum_{n=1}^{3}(x-n)^2+\sum_{n=8}^{10}(x-n)^2。
      \]
      若 f 在 \(x=a\) 取得最小值，判斷正確敘述。`,
      options: { "1":"a 為整數", "2":String.raw`\(a<5.9\)`, "3":String.raw`\(a>5.1\)`, "4":String.raw`\(|a-4|<0.5\)`, "5":String.raw`\(|a-6|<0.5\)` },
      solution: [String.raw`平方離差和在 x 等於六個數的平均數時最小：
      \[
      a=\frac{1+2+3+8+9+10}{6}=\frac{33}{6}=5.5。
      \]
      因此 a 不是整數，且 \(a<5.9、a>5.1\)；兩個嚴格距離不等式都因距離恰為 1.5 或 0.5 而不成立。`],
      optionAnalysis: { "1":"a=5.5，不是整數。","2":"5.5<5.9。","3":"5.5>5.1。","4":"|5.5−4|=1.5。","5":"|5.5−6|=0.5，不符合嚴格小於。" }
    },
    "86M-10": {
      verified: true, sourcePage: 2,
      stem: String.raw`曲線 \(\Gamma\) 滿足
      \[
      \frac{|3x+y-19|}{\sqrt{10}}=\sqrt{(x+1)^2+(y-2)^2}。
      \]
      判斷正確敘述。`,
      options: { "1":"Γ 為拋物線", "2":String.raw`\((1,-2)\) 是焦點`, "3":String.raw`\(3x+y-19=0\) 是漸近線`, "4":String.raw`\(x-3y+7=0\) 是對稱軸`, "5":String.raw`\((3,1)\) 是頂點` },
      solution: ["左側是點到直線 3x+y−19=0 的距離，右側是點到 (−1,2) 的距離，因此 Γ 是焦點 (−1,2)、準線 3x+y−19=0 的拋物線。", "軸通過焦點且垂直準線，方程為 x−3y+7=0。焦點在準線上的投影為 (5,4)，頂點是兩者中點 (2,3)，所以（5）錯。"],
      optionAnalysis: { "1":"符合到焦點與準線等距的定義。","2":"焦點應為 (−1,2)。","3":"這條線是準線，不是漸近線。","4":"通過焦點且方向為準線法向量。","5":"真正頂點為 (2,3)。" }
    },
    "86M-11": {
      verified: true, sourcePage: 3,
      stem: "判斷原題五種幾何軌跡或立體截線中，哪些曲線是橢圓。",
      options: { "1":"標準跑道的內側邊界", "2":"橢圓上 P 沿 OP 方向移動固定距離 1 所得 Q 的軌跡", "3":"橢圓上 P 與中心 O 共線，且 PQ=OP 所得 Q 的軌跡", "4":"直圓柱面與原圖平面 E 的交線", "5":"直圓錐面與原圖平面 E 的交線" },
      solution: ["（1）含直線段，不是單一橢圓。（2）是橢圓的固定徑向偏移，一般不再是橢圓。（3）使 Q 為 P 對中心的倍數伸縮，仍是橢圓。", "直圓柱被非平行於軸且非垂直極端的平面斜截得到橢圓；原圖圓錐平面只切單一錐面且不平行母線，也得到橢圓。故（3）（4）（5）正確。"],
      optionAnalysis: { "1":"由兩段直線與兩個半圓組成。","2":"固定法向／徑向偏移不保持橢圓方程。","3":"以中心作等比例伸縮仍為橢圓。","4":"斜截直圓柱得到橢圓。","5":"平面截圓錐的一個封閉截線為橢圓。" }
    },
    "86M-12": {
      verified: true, sourcePage: 3,
      stem: "依原圖五組各六個資料點的散布情形，比較相關係數 \(r_1、r_2、r_3、r_4、r_5\)。",
      options: { "1":String.raw`\(r_1=r_2\)`, "2":String.raw`\(r_2<r_3\)`, "3":String.raw`\(r_3>r_4\)`, "4":String.raw`\(r_3<r_5\)`, "5":String.raw`\(r_4=r_5\)` },
      solution: ["依各格點坐標代入相關係數公式，第一、二組的共變異數與標準差比例相同，因此 r₁=r₂；第三組比第二組更貼近正斜率直線，故 r₂<r₃。", "第四、五組雖尺度與點距配置不同，但標準化後的線性關係相同，故 r₄=r₅。其餘兩個大小敘述不成立。答案為（1）（2）（5）。"],
      optionAnalysis: { "1":"兩組標準化後有相同線性關係。","2":"第三組的正線性趨勢較強。","3":"圖形計算結果不支持 r3>r4。","4":"r3 並不小於 r5。","5":"尺度變化不改變相關係數。" }
    },
    "86M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`設 \(f(x)=x^5+6x^4-4x^3+25x^2+30x+20\)，求 \(f(-7)\)。`,
      solution: [String.raw`以秦九韶法代入 −7：
      \[
      (((((-7)+6)(-7)-4)(-7)+25)(-7)+30)(-7)+20=6。
      \]
      所以 \(f(-7)=6\)。`]
    },
    "86M-14": {
      verified: true, sourcePage: 4,
      stem: String.raw`求平面 \(2x-y+2z=6\) 與 \(3x-4z=2\) 的銳夾角，取最接近的整數度數。`,
      solution: [String.raw`兩平面法向量為 \(n_1=(2,-1,2)、n_2=(3,0,-4)\)。銳夾角 θ 滿足
      \[
      \cos\theta=\frac{|n_1\cdot n_2|}{|n_1||n_2|}
      =\frac{|6-8|}{3\cdot5}=\frac2{15}。
      \]
      所以 \(\theta\approx82.34^\circ\)，取整數為 \(82^\circ\)。`]
    },
    "86M-15": {
      verified: true, sourcePage: 4,
      stem: String.raw`四邊形 ABCD 中，\(\angle A=120^\circ、AB=1、AD=2\)，且 \(\overrightarrow{AC}=3\overrightarrow{AB}+2\overrightarrow{AD}\)。求 AC。`,
      solution: [String.raw`令 \(u=\overrightarrow{AB}、v=\overrightarrow{AD}\)，則 \(|u|=1、|v|=2、u\cdot v=2\cos120^\circ=-1\)。因此
      \[
      |3u+2v|^2=9|u|^2+4|v|^2+12u\cdot v
      =9+16-12=13。
      \]
      故 \(AC=\sqrt{13}\)。`]
    },
    "86M-16": {
      verified: true, sourcePage: 4,
      stem: "三直線 y=0、3x−2y+3=0、x+y−4=0 圍成三角形，求外接圓直徑。",
      solution: [String.raw`三頂點為 \((-1,0)、(4,0)、(1,3)\)，三邊長分別為 \(5、\sqrt{13}、3\sqrt2\)，面積為 \(15/2\)。外接圓直徑
      \[
      2R=\frac{abc}{2\Delta}
      =\frac{5\sqrt{13}\cdot3\sqrt2}{15}
      =\sqrt{26}。
      \]`]
    },
    "86M-17": {
      verified: true, sourcePage: 4,
      stem: "圓內接四邊形邊長依序為 AB=1、BC=2、CD=3、DA=4，求對角線 BD。",
      solution: [String.raw`設 \(\angle A=\alpha\)，則 \(\angle C=180^\circ-\alpha\)。對兩個三角形使用餘弦定理：
      \[
      BD^2=1^2+4^2-8\cos\alpha=17-8c，
      \]
      \[
      BD^2=2^2+3^2-12\cos(180^\circ-\alpha)=13+12c。
      \]
      相等得 \(c=1/5\)，所以 \(BD^2=77/5\)，即 \(BD=\sqrt{77/5}\)。`]
    },
    "86M-18": {
      verified: true, sourcePage: 5,
      stem: String.raw`將 \(3^{100}\) 寫成科學記號 \(a\times10^m\)，其中 \(1\le a<10\)。求 a 的整數部分。`,
      solution: [String.raw`取常用對數：
      \[
      \log_{10}3^{100}=100\log_{10}3\approx47.71。
      \]
      因此 \(3^{100}=10^{0.71}\times10^{47}\)，而 \(10^{0.71}\approx5.1\)，所以 a 的整數部分為 5。`]
    },
    "86M-19": {
      verified: true, sourcePage: 5,
      stem: "甲路線遲到率 1/10、乙路線遲到率 1/5；不遲到則隔天走同一路，遲到則換路。第一天走甲，求第三天也走甲的機率。",
      solution: [String.raw`第三天走甲有兩條路徑：
      \[
      A\to A\to A:\ \frac9{10}\cdot\frac9{10}=\frac{81}{100}，
      \]
      \[
      A\to B\to A:\ \frac1{10}\cdot\frac15=\frac2{100}。
      \]
      相加得 \(\frac{83}{100}\)。`]
    },
    "86M-20": {
      verified: true, sourcePage: 5,
      stem: "先選定 1～6 的號碼 n，再擲三顆公平骰子；三顆、兩顆、一顆為 n 分別贏 3、2、1 元，沒有 n 則輸 1 元。求一次遊戲期望值。",
      solution: [String.raw`出現 n 的顆數服從 \(B(3,1/6)\)，各情形結果數為 1、15、75、125。因此期望值為
      \[
      \frac{3(1)+2(15)+1(75)-1(125)}{216}
      =-\frac{17}{216}\text{ 元}。
      \]`]
    }
  });
})();
