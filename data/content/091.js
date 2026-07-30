(() => {
  Object.assign(window.MATH_CONTENT, {
    "91M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`坐標平面上的點 \(P=(x,y)\) 滿足
      \[
      (x-1)^2+(y-2)^2+(x-3)^2+(y-4)^2=(3-1)^2+(4-2)^2。
      \]
      判斷 P 所在位置。`,
      options: { "1":"第一象限", "2":"第二象限", "3":"第三象限", "4":"第四象限", "5":"x 軸或 y 軸上" },
      solution: [String.raw`兩固定點為 \(A=(1,2)、B=(3,4)\)，中點 \(M=(2,3)\)，且 \(AB^2=8\)。利用
      \[
      PA^2+PB^2=2PM^2+\frac{AB^2}{2}
      \]
      得 \(2PM^2+4=8\)，所以 P 在以 \((2,3)\) 為圓心、半徑 \(\sqrt2\) 的圓上。此圓的 x、y 坐標都恆為正，故 P 位於第一象限。`],
      optionAnalysis: { "1":"圓心 (2,3)、半徑 √2，整個圓都在第一象限。","2":"x 坐標最小仍為 2−√2>0。","3":"兩坐標不可能同為負。","4":"y 坐標最小仍為 3−√2>0。","5":"圓與兩坐標軸都不相交。" }
    },
    "91M-2": {
      verified: true, sourcePage: 1,
      stem: "10 位身高 170 公分的男生手拉手，剛好環抱巨樹一圈。估計樹幹直徑最接近多少公尺？",
      options: { "1":"3 公尺", "2":"5 公尺", "3":"7 公尺", "4":"9 公尺", "5":"11 公尺" },
      solution: [String.raw`以身高約等於臂展估計，每人約 1.7 公尺，圓周長約
      \[
      10\cdot1.7=17\text{ 公尺}。
      \]
      所以直徑約為
      \[
      \frac{17}{\pi}\approx5.4\text{ 公尺}，
      \]
      最接近 5 公尺。`],
      optionAnalysis: { "1":"對應圓周長僅約 9.4 公尺。","2":"估計直徑約 5.4 公尺，最接近 5。","3":"會高估環抱圓周。","4":"所需臂展總長遠超過 17 公尺。","5":"約為正確估計的兩倍。" }
    },
    "91M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`依原圖方格位置，哪一向量與 \(\overrightarrow{PO}、\overrightarrow{QO}\) 的和等於零向量？`,
      options: { "1":String.raw`\(\overrightarrow{AO}\)`, "2":String.raw`\(\overrightarrow{BO}\)`, "3":String.raw`\(\overrightarrow{CO}\)`, "4":String.raw`\(\overrightarrow{DO}\)`, "5":String.raw`\(\overrightarrow{EO}\)` },
      solution: [String.raw`由方格數出分量，可得 \(\overrightarrow{PO}+\overrightarrow{QO}\) 恰與 \(\overrightarrow{CO}\) 大小相等、方向相反。因此
      \[
      \overrightarrow{CO}+\overrightarrow{PO}+\overrightarrow{QO}=\vec0。
      \]`],
      optionAnalysis: { "1":"AO 的水平與垂直分量都不符。","2":"BO 無法抵消 PO+QO。","3":"CO 恰是 PO+QO 的反向量。","4":"DO 的垂直分量過大。","5":"EO 的方向不符。" }
    },
    "91M-4": {
      verified: true, sourcePage: 2,
      stem: "某校 1000 位學生成績呈常態分布，平均數 65.24、標準差 5.24。估計成績低於 60 分的人數。",
      options: { "1":"約 80 人", "2":"約 160 人", "3":"約 240 人", "4":"約 320 人", "5":"約 400 人" },
      solution: [String.raw`因
      \[
      60=65.24-5.24
      \]
      恰為平均數以下一個標準差。常態分布約有 68% 落在平均數正負一個標準差內，所以低於 \(M-S\) 的比例約為
      \[
      \frac{1-0.68}{2}=0.16。
      \]
      人數約 \(1000\cdot0.16=160\) 人。`],
      optionAnalysis: { "1":"約是低於兩個標準差的尾端估計。","2":"低於平均數一個標準差約占 16%。","3":"高估左尾比例。","4":"把中央區間外的 32% 全算在左側。","5":"接近低於平均數的比例，不是低於 M−S。" }
    },
    "91M-5": {
      verified: true, sourcePage: 2,
      stem: "原圖曲線開口向下、只有一個最高點，應選用哪個函數的部分圖形描述最恰當？",
      options: { "1":String.raw`\((x-2)^2-2\)`, "2":String.raw`\(2\sin x+2\)`, "3":String.raw`\(2\cos x\)`, "4":String.raw`\(-0.5(x-2)^2+4\)`, "5":String.raw`\(3-2^x\)` },
      solution: ["圖形呈開口向下的拋物線，最高點約在 (2,4)，所以應用負二次項且頂點式為 \(-0.5(x-2)^2+4\)，即（4）。"],
      optionAnalysis: { "1":"開口向上，方向相反。","2":"正弦函數會週期振盪。","3":"餘弦函數也會週期重複。","4":"開口向下且頂點位置吻合。","5":"指數函數單調下降，沒有圖示的對稱最高點。" }
    },
    "91M-6": {
      verified: true, sourcePage: 2,
      stem: "橢圓長軸在 x 軸、短軸在 y 軸，長軸與短軸全長分別為 4、2。過中心且與 x 軸夾 45° 的直線交橢圓於第一象限 P，求 OP。",
      options: { "1":"1.5", "2":String.raw`\(\sqrt{1.6}\)`, "3":String.raw`\(\sqrt2\)`, "4":String.raw`\(\sqrt{2.5}\)`, "5":String.raw`\(\sqrt{3.2}\)` },
      solution: [String.raw`橢圓方程為
      \[
      \frac{x^2}{4}+y^2=1。
      \]
      45° 直線上 \(y=x\)，代入得 \(\frac54x^2=1\)，所以 \(x^2=4/5\)。因此
      \[
      OP^2=x^2+y^2=2x^2=\frac85=1.6，
      \]
      故 \(OP=\sqrt{1.6}\)。`],
      optionAnalysis: { "1":"平方後為 2.25，與代入結果不符。","2":"OP²=1.6。","3":"高估距離。","4":"未依橢圓半軸縮放。","5":"把 1.6 誤加倍。" }
    },
    "91M-7": {
      verified: true, sourcePage: 3,
      stem: String.raw`實數 \(a,b,c\) 滿足
      \[
      abc>0,\quad ab+bc+ca<0,\quad a+b+c>0,\quad a>b>c。
      \]
      選出必然正確的敘述。`,
      options: { "1":String.raw`\(a>0\)`, "2":String.raw`\(b>0\)`, "3":String.raw`\(c>0\)`, "4":String.raw`\(|a|>|b|\)`, "5":String.raw`\(a^2>c^2\)` },
      solution: ["乘積為正而兩兩乘積和為負，不可能三數全正，因此必為一正兩負。配合 a>b>c，得 a>0>b>c，故（1）正確。", String.raw`又 \(a+b+c>0\) 表示 \(a>-(b+c)=|b|+|c|\)，所以 \(a>|b|\) 且 \(a>|c|\)。故（4）成立，並有 \(a^2>c^2\)，所以（5）成立。`],
      optionAnalysis: { "1":"唯一正數必是最大的 a。","2":"b、c 都是負數。","3":"c 為最小且是負數。","4":"a 大於 |b|+|c|，當然大於 |b|。","5":"a>|c|，平方後仍大於。" }
    },
    "91M-8": {
      verified: true, sourcePage: 3,
      stem: "機器狗依「前進 3 步、後退 2 步」循環，每秒一步，從原點面向正方向出發。以 P(n) 表示第 n 秒位置，判斷正確敘述。",
      options: { "1":String.raw`\(P(3)=3\)`, "2":String.raw`\(P(5)=1\)`, "3":String.raw`\(P(10)=2\)`, "4":String.raw`\(P(101)=21\)`, "5":String.raw`\(P(103)<P(104)\)` },
      solution: ["每 5 秒淨前進 1 單位。因此 P(3)=3、P(5)=1、P(10)=2。100 秒完成 20 個循環，位置為 20；第 101 秒再前進一步，所以 P(101)=21。", "第 103 秒完成循環中的第三次前進，位置 23；第 104 秒後退到 22，所以 P(103)>P(104)。故（1）（2）（3）（4）正確。"],
      optionAnalysis: { "1":"前三秒連續前進到 3。","2":"完整循環淨位移為 1。","3":"兩個循環淨位移為 2。","4":"20 個循環後再前進一步。","5":"第 104 秒正在後退，位置反而較小。" }
    },
    "91M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`判斷哪些選項與方程組
      \[
      \begin{cases}2x+y+3z=0\\4x+3y+6z=0\end{cases}
      \]
      有相同解集合。`,
      options: {
        "1":String.raw`\(y=0\)`,
        "2":String.raw`\(\begin{cases}2x+3z=0\\y=0\end{cases}\)`,
        "3":String.raw`\(x=y=0\)`,
        "4":String.raw`\(\begin{cases}x+\frac12y+\frac32z=0\\4x+3y+6z=0\end{cases}\)`,
        "5":String.raw`\(\begin{cases}6x+4y+9z=0\\2x+y+3z=0\end{cases}\)`
      },
      solution: ["以第二式減去第一式的兩倍，得 y=0；代回第一式得 2x+3z=0，所以（2）等價。", "（4）的第一式正是原第一式除以 2；（5）的第一式是原兩式相加，且保留原第一式，因此都可用可逆的列運算還原原方程組。故（2）（4）（5）正確。"],
      optionAnalysis: { "1":"只給 y=0，缺少 2x+3z=0。","2":"是消去後的等價方程組。","3":"只留下零解的一部分，不是完整解集。","4":"只把第一式同除以 2。","5":"以兩式相加取代第二式，是可逆列運算。" }
    },
    "91M-10": {
      verified: true, sourcePage: 3,
      stem: "觀察指數函數與直線、拋物線圖形，選出必然正確的敘述。",
      options: { "1":String.raw`\(10^x=x\) 有實數解`, "2":String.raw`\(10^x=x^2\) 有實數解`, "3":String.raw`對所有實數 x，\(10^x>x\)`, "4":String.raw`當 \(x>0\) 時，\(10^x>x^2\)`, "5":String.raw`\(10^x=-x\) 有實數解` },
      solution: ["對 x≤0，10ˣ>0≥x；對 x>0，指數函數也始終在 y=x 上方，故（1）無解而（3）成立。對 x>0，10ˣ>x²，故（4）成立。", "比較連續函數：10ˣ−x² 在 x=−1 時為負、x=0 時為正，所以（2）有負實根；10ˣ+x 在 x=−1 時為負、x=0 時為正，所以（5）也有實根。"],
      optionAnalysis: { "1":"10ˣ 的圖形始終在 y=x 上方。","2":"在 −1 與 0 之間有交點。","3":"負 x 時顯然成立，正 x 時指數成長保持在直線上方。","4":"正半軸上 10ˣ 高於 x²。","5":"在 −1 與 0 之間，10ˣ 與 −x 相交。" }
    },
    "91M-11": {
      verified: true, sourcePage: 4,
      stem: "甲每月存 1000 元，乙每隔一個月存 2000 元；兩人一年本金同為 12000 元，月利率 0.5% 按月複利，期末本利和分別為 A、B。令 r=1005/1000，判斷正確敘述。",
      options: {
        "1":String.raw`\(B>A\)`,
        "2":String.raw`\(A=1000\sum_{k=1}^{12}r^k\)`,
        "3":String.raw`\(B=2000\sum_{k=1}^{6}r^{2k}\)`,
        "4":String.raw`\(A<12000r^{12}\)`,
        "5":String.raw`\(B<12000r^{12}\)`
      },
      solution: ["甲的 12 筆存款分別計息 12、11、…、1 個月，故（2）。乙的 6 筆存款分別計息 12、10、…、2 個月，故（3）。每兩個月比較，乙把兩筆本金都提早在第一個月存入，所以 B>A，故（1）。", "兩人的每筆本金計息都不超過 12 個月，且並非全部都計息 12 個月，因此本利和都嚴格小於把全部 12000 元計息 12 個月的金額。故（4）（5）成立，五項全正確。"],
      optionAnalysis: { "1":"乙在每兩月週期中較早投入全部本金，利息較多。","2":"甲各筆計息月數為 1 到 12。","3":"乙各筆計息月數為 2、4、…、12。","4":"只有第一筆計息滿 12 個月。","5":"乙也不是所有本金都計息 12 個月。" }
    },
    "91M-12": {
      verified: true, sourcePage: 4,
      stem: "在三角形 ABC 中，下列哪些關於 sinA、sinB、sinC 的條件有可能成立？",
      options: {
        "1":String.raw`\(\sin A=\sin B=\sin C=\frac{\sqrt3}{2}\)`,
        "2":String.raw`\(\sin A,\sin B,\sin C\) 均小於 \(\frac12\)`,
        "3":String.raw`\(\sin A,\sin B,\sin C\) 均大於 \(\frac{\sqrt3}{2}\)`,
        "4":String.raw`\(\sin A=\sin B=\sin C=\frac12\)`,
        "5":String.raw`\(\sin A=\sin B=\frac12,\ \sin C=\frac{\sqrt3}{2}\)`
      },
      solution: ["（1）可取 A=B=C=60°。（2）可取 160°、10°、10°，三個正弦都小於 1/2。（5）可取 A=B=30°、C=120°。", "若三個正弦都大於 √3/2，三角都必大於 60°，角和會超過 180°，故（3）不可能。（4）中每角只能是 30° 或 150°，無法三角合計 180°。故答案為（1）（2）（5）。"],
      optionAnalysis: { "1":"正三角形即可成立。","2":"160°、10°、10° 是反例證明可行。","3":"三角都大於 60°，角和超過 180°。","4":"30°、150° 的任何三角組合都無法合計 180°。","5":"30°、30°、120° 符合。" }
    },
    "91M-13": {
      verified: true, sourcePage: 5,
      stem: "窗外圓弧形花台中央弓高 72 公分、弦長 168 公分，求該圓弧所屬圓的半徑。",
      solution: [String.raw`半弦長為 84。設半徑為 R，圓心到弦的距離為 \(R-72\)。由直角三角形
      \[
      R^2=(R-72)^2+84^2。
      \]
      化簡得 \(144R=72^2+84^2=12240\)，所以 \(R=85\) 公分。`]
    },
    "91M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`求 \(2^{20}-1\) 與 \(2^{19}+1\) 的最大公因數。`,
      solution: [String.raw`以輾轉相除概念，
      \[
      (2^{20}-1)-2(2^{19}+1)=-3，
      \]
      所以公因數只能整除 3。又 \(2\equiv-1\pmod3\)，可知兩數都能被 3 整除，因此最大公因數為 3。`]
    },
    "91M-15": {
      verified: true, sourcePage: 5,
      stem: "某公司 86 年營業額 6 億元，87、88、89 三年的成長率相同，89 年營業額為 48 億元。求 89 年成長率。",
      solution: [String.raw`設每年成長倍數為 r，則
      \[
      6r^3=48\Rightarrow r^3=8\Rightarrow r=2。
      \]
      營業額變為前一年的 2 倍，成長率為 \((2-1)\times100\%=100\%\)。`]
    },
    "91M-16": {
      verified: true, sourcePage: 5,
      stem: "圓周平均分布 60 個洞，從 A 洞開始打樁，此後每隔 9 個間隔再打一樁。回到 A 洞前，共打幾支不同木樁？",
      solution: [String.raw`在模 60 的洞號上每次增加 9。回到起點所需步數為
      \[
      \frac{60}{\gcd(60,9)}=\frac{60}{3}=20。
      \]
      因此回到 A 前共經過並打樁於 20 個不同洞。`]
    },
    "91M-17": {
      verified: true, sourcePage: 6,
      stem: "128 人網球單淘汰賽，第 k 輪淘汰者各得 2^(k−1) 萬元，冠軍得 128 萬元。求全部獎金總額。",
      solution: [String.raw`第 k 輪淘汰 \(128/2^k\) 人，每人得 \(2^{k-1}\) 萬元，所以每輪淘汰者獎金總額都是
      \[
      \frac{128}{2^k}\cdot2^{k-1}=64\text{ 萬元}。
      \]
      共有 7 輪，淘汰者共得 \(7\cdot64=448\) 萬元；再加冠軍 128 萬元，總額為 576 萬元。`]
    },
    "91M-18": {
      verified: true, sourcePage: 6,
      stem: "隔河測山高：從 A 看山的方位為東偏北 60°、山頂仰角 45°；向東走 600 公尺到 B 後，山的方位為西偏北 60°。求山高。",
      solution: [String.raw`兩條水平視線分別與東向、西向成 60°，故山腳、A、B 在水平面形成邊長 600 的正三角形。A 到山腳的水平距離為 600 公尺。`, String.raw`在 A 觀測山頂仰角為 45°，所以
      \[
      \tan45^\circ=\frac{\text{山高}}{600}=1，
      \]
      得山高 600 公尺。`]
    },
    "91M-19": {
      verified: true, sourcePage: 6,
      stem: "九人身高為 160、163、166、170、172、174、176、178、180 公分，母體平均 171。隨機抽 3 人，求樣本平均也等於 171 的機率。",
      solution: [String.raw`三人總身高須為 \(3\cdot171=513\)。符合的三組為
      \[
      (163,170,180),\ (163,172,178),\ (163,174,176)，
      \]
      共 3 組。全部抽法有 \(\binom93=84\) 組，所以機率
      \[
      \frac3{84}=\frac1{28}。
      \]`]
    },
    "91M-20": {
      verified: true, sourcePage: 6,
      stem: "正立方體被平面截成四邊形 ABCD，B、D 分別為兩條豎稜中點，A 在稜 EF 上且 EA:AF=1:2。求 cos∠DAB。",
      solution: [String.raw`令立方體邊長為 1，取
      \[
      F=(0,0,0),\ E=(0,0,1),\ A=(0,0,\tfrac23),
      \]
      並令兩相鄰豎稜中點為
      \[
      B=(1,0,\tfrac12),\quad D=(0,1,\tfrac12)。
      \]
      則
      \[
      \overrightarrow{AB}=(1,0,-\tfrac16),\quad
      \overrightarrow{AD}=(0,1,-\tfrac16)。
      \]
      因此
      \[
      \cos\angle DAB=
      \frac{\overrightarrow{AD}\cdot\overrightarrow{AB}}{|AD||AB|}
      =\frac{1/36}{(\sqrt{37}/6)^2}=\frac1{37}。
      \]`]
    }
  });
})();
