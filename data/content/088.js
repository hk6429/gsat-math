(() => {
  Object.assign(window.MATH_CONTENT, {
    "88M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`求 \(2^{100}\) 除以 10 的餘數。`,
      options: { "1":"0", "2":"2", "3":"4", "4":"6", "5":"8" },
      solution: [String.raw`2 的正整數次方個位數依序循環：
      \[
      2、4、8、6。
      \]
      週期為 4，而 \(100\equiv0\pmod4\)，所以 \(2^{100}\) 的個位數為 6，餘數也是 6。`],
      optionAnalysis: { "1":"2 的正整數次方不會以 0 結尾。","2":"指數除以 4 餘 1 時才以 2 結尾。","3":"指數除以 4 餘 2 時才以 4 結尾。","4":"100 是 4 的倍數，對應循環中的 6。","5":"指數除以 4 餘 3 時才以 8 結尾。" }
    },
    "88M-2": {
      verified: true, sourcePage: 1,
      stem: "比較下列五個以分數或負數為指數的數值，選出其中最小者。",
      options: {
        "1":String.raw`\(2^{1/3}\)`,
        "2":String.raw`\(\left(\frac18\right)^{-2}\)`,
        "3":String.raw`\(2^{-1/4}\)`,
        "4":String.raw`\(\left(\frac12\right)^{1/2}\)`,
        "5":String.raw`\(8^{-1/3}\)`
      },
      solution: [String.raw`各數化簡或估算：
      \[
      2^{1/3}>1,\quad
      \left(\frac18\right)^{-2}=64,\quad
      2^{-1/4}\approx0.841,\quad
      2^{-1/2}\approx0.707,\quad
      8^{-1/3}=\frac12。
      \]
      最小的是 \(8^{-1/3}\)。`],
      optionAnalysis: { "1":"大於 1。","2":"負指數取倒數後等於 64。","3":"約為 0.841。","4":"約為 0.707。","5":"等於 1/2，是五者最小。" }
    },
    "88M-3": {
      verified: true, sourcePage: 1,
      stem: "正立方體中，A、B、C 分別為原圖所示三條稜的中點。通過 A、B、C 的平面與立方體表面相截，判斷截痕形狀。",
      options: { "1":"直角三角形", "2":"非直角的三角形", "3":"正方形", "4":"非正方形的長方形", "5":"六邊形" },
      solution: ["依立方體相對稜的平行關係延伸截面，可知截面還會通過第四條稜上的對應點，形成四邊形。其相鄰邊分別位於互相垂直的立方體面上，所以四角皆為直角；兩組鄰邊長不相等，因此是非正方形的長方形。"],
      optionAnalysis: { "1":"截面會再交第四條稜，不是三角形。","2":"同樣漏掉第四個交點。","3":"相鄰兩邊長不相等。","4":"四角為直角，但兩組邊長不同。","5":"此平面只與四條稜相交。" }
    },
    "88M-4": {
      verified: true, sourcePage: 2,
      stem: "三角形 ABC 中，A、B、C 所對邊長分別為 a、b、c，AH 為 A 到 BC 的高。選出可表示 AH 的式子。",
      options: { "1":String.raw`\(b\sin B\)`, "2":String.raw`\(c\sin C\)`, "3":String.raw`\(b\sin C\)`, "4":String.raw`\(c\sin B\)`, "5":String.raw`\(a\sin A\)` },
      solution: [String.raw`在直角三角形 ACH 中，斜邊 \(AC=b\)，所以
      \[
      AH=b\sin C。
      \]
      在直角三角形 ABH 中，斜邊 \(AB=c\)，所以
      \[
      AH=c\sin B。
      \]
      故（3）（4）正確。`],
      optionAnalysis: { "1":"b 是 AC，不是以 B 為銳角時的斜邊。","2":"c 是 AB，不是以 C 為銳角時的斜邊。","3":"在 ACH 中等於斜邊 b 乘 sinC。","4":"在 ABH 中等於斜邊 c 乘 sinB。","5":"a 是底邊 BC，不能直接乘 sinA 得高。" }
    },
    "88M-5": {
      verified: true, sourcePage: 2,
      stem: "比較題目所列的循環小數、有限小數與分數，判斷正確敘述。",
      options: {
        "1":String.raw`\(0.\overline{343}\) 不是有理數`,
        "2":String.raw`\(0.\overline{34}>\frac13\)`,
        "3":String.raw`\(0.\overline{34}>0.\overline{343}\)`,
        "4":String.raw`\(0.\overline{34}<0.35\)`,
        "5":String.raw`\(0.\overline{34}=0.3\overline{43}\)`
      },
      solution: [String.raw`循環小數都是有理數，故（1）錯。數值比較：
      \[
      0.\overline{34}=0.343434\ldots,\quad
      \frac13=0.333\ldots,\quad
      0.\overline{343}=0.343343\ldots。
      \]
      因此（2）（3）（4）正確；而 \(0.3\overline{43}=0.343434\ldots\)，故（5）也正確。`],
      optionAnalysis: { "1":"任何循環小數都可化為分數。","2":"0.343434… 大於 0.333…。","3":"前六位比較為 343434>343343。","4":"0.343434… 小於 0.35。","5":"兩者展開後都是 0.343434…。"}
    },
    "88M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`三次方程式
      \[
      x^3+x^2-2x-1=0
      \]
      在哪些相鄰整數之間有根？`,
      options: { "1":"−2 與 −1", "2":"−1 與 0", "3":"0 與 1", "4":"1 與 2", "5":"2 與 3" },
      solution: [String.raw`令 \(f(x)=x^3+x^2-2x-1\)。計算
      \[
      f(-2)=-1,\ f(-1)=1,\ f(0)=-1,\ f(1)=-1,\ f(2)=7。
      \]
      由連續性，符號在 \((-2,-1)、(-1,0)、(1,2)\) 間改變，故這三區間各有根。答案為（1）（2）（4）。`],
      optionAnalysis: { "1":"端點函數值由負變正。","2":"端點函數值由正變負。","3":"兩端都是負值，且此三次式的三根已落在其他三區間。","4":"端點函數值由負變正。","5":"2 之後沒有再出現第四個實根。" }
    },
    "88M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`橢圓 \(\Gamma\) 滿足
      \[
      \sqrt{(x-1)^2+(y-2)^2}+
      \sqrt{(x+1)^2+(y+2)^2}=6。
      \]
      判斷正確敘述。`,
      options: { "1":String.raw`\((0,0)\) 是中心`, "2":String.raw`\((1,2)、(-1,-2)\) 是焦點`, "3":"短軸長為 4", "4":String.raw`關於直線 \(x=y\) 對稱`, "5":"關於兩焦點的連線對稱" },
      solution: [String.raw`距離和定義給出兩焦點 \((1,2)、(-1,-2)\)，中心為其中點 \((0,0)\)。有
      \[
      2a=6\Rightarrow a=3,\qquad c=\sqrt{1^2+2^2}=\sqrt5，
      \]
      所以 \(b=\sqrt{a^2-c^2}=2\)，短軸長 \(2b=4\)。橢圓關於焦點連線與其垂直平分線對稱，但焦點連線斜率為 2，不是 \(x=y\)。`],
      optionAnalysis: { "1":"中心是兩焦點的中點。","2":"兩根式正是到這兩點的距離。","3":"b=2，所以短軸全長為 4。","4":"焦點不在 x=y 上。","5":"焦點連線是橢圓的長軸。" }
    },
    "88M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`設
      \[
      D=\begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}。
      \]
      判斷哪些行列式與 D 相等。`,
      options: {
        "1":String.raw`\(\begin{vmatrix}a_1&a_2&a_3\\c_1&c_2&c_3\\b_1&b_2&b_3\end{vmatrix}\)`,
        "2":String.raw`\(\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix}\)`,
        "3":String.raw`\(\begin{vmatrix}a_1&a_2&a_3\\b_1-c_1&b_2-c_2&b_3-c_3\\c_1&c_2&c_3\end{vmatrix}\)`,
        "4":String.raw`\(\begin{vmatrix}a_1&a_2&a_3\\b_1c_1&b_2c_2&b_3c_3\\c_1&c_2&c_3\end{vmatrix}\)`,
        "5":String.raw`\(\begin{vmatrix}a_3&a_2&a_1\\b_3&b_2&b_1\\c_3&c_2&c_1\end{vmatrix}\)`
      },
      solution: ["（2）是原矩陣的轉置，行列式值不變。（3）是把第二列改為「第二列減第三列」，行列式值也不變。", "（1）交換兩列會變號；（5）交換第一、第三欄也會變號；（4）不是合法的線性列運算。故答案為（2）（3）。"],
      optionAnalysis: { "1":"交換第二、第三列，值變成 −D。","2":"轉置矩陣與原矩陣行列式相同。","3":"某列減去另一列的倍數不改變行列式。","4":"逐項相乘不是保值的列運算。","5":"交換第一、第三欄，值變成 −D。" }
    },
    "88M-9": {
      verified: true, sourcePage: 3,
      stem: "原資料為 2.43、2.46、2.41、2.45、2.44、2.48、2.46、2.47、2.45；各乘 100 再減 240，得到 3、6、1、5、4、8、6、7、5。判斷統計量敘述。",
      options: { "1":"新資料平均數為 5", "2":"新資料標準差為 2", "3":"原資料平均數為 2.45", "4":"原資料標準差為 0.2", "5":"原資料中位數為 2.45" },
      solution: [String.raw`新資料總和為 45，平均數為 5；相對平均數的平方離差和為 36，所以
      \[
      S=\sqrt{\frac{36}{9}}=2。
      \]
      由新值 \(y=100x-240\)，原平均數為 \((5+240)/100=2.45\)，原標準差為 \(2/100=0.02\)。排序後第五筆為 2.45，故中位數也是 2.45。`],
      optionAnalysis: { "1":"45÷9=5。","2":"變異數為 4，標準差為 2。","3":"線性轉換回原尺度得 2.45。","4":"應為 0.02，不是 0.2。","5":"排序後中央值為 2.45。" }
    },
    "88M-10": {
      verified: true, sourcePage: 3,
      stem: "依原圖正立方體 ABCD-EFGH，判斷空間向量關係。",
      options: { "1":String.raw`\(\overrightarrow{EA}\cdot\overrightarrow{EG}=0\)`, "2":String.raw`\(\overrightarrow{ED}\cdot\overrightarrow{EF}=0\)`, "3":String.raw`\(\overrightarrow{EF}+\overrightarrow{EH}=\overrightarrow{AC}\)`, "4":String.raw`\(\overrightarrow{EC}\cdot\overrightarrow{AG}=0\)`, "5":String.raw`\(\overrightarrow{EF}+\overrightarrow{EA}+\overrightarrow{EH}=\overrightarrow{EC}\)` },
      solution: ["取立方體三條互相垂直的稜向量為右、後、下。EA 是下向，EG 是右加後，故內積為 0；ED 是後加下，EF 是右向，內積也為 0。", "EF+EH 是右加後，等於底面的 AC；EF+EA+EH 是右、下、後之和，等於 EC。EC 與 AG 分別是右+後−上與右+後+上，內積不為 0。故（1）（2）（3）（5）正確。"],
      optionAnalysis: { "1":"垂直稜方向與頂面對角線正交。","2":"右向稜垂直於後、下兩方向。","3":"同為右向加後向的位移。","4":"兩條體對角方向的內積不為 0。","5":"三條稜向量相加即為體對角線。" }
    },
    "88M-11": {
      verified: true, sourcePage: 4,
      stem: "面積為 36 的正三角形截去三個角，使剩餘圖形成為正六邊形，求此正六邊形面積。",
      solution: [String.raw`要使六邊形六邊等長，原正三角形每邊須三等分。三個截去的小正三角形邊長都是原來的 \(1/3\)，每個面積為原來的 \(1/9\)。所以六邊形面積為
      \[
      36\left(1-\frac3{9}\right)=24。
      \]`]
    },
    "88M-12": {
      verified: true, sourcePage: 4,
      stem: "本金 100 元，年利率 6%，每半年複利一次。求五年期滿本利和（元以下四捨五入）。",
      solution: [String.raw`每半年利率為 3%，五年共有 10 期，所以
      \[
      100(1.03)^{10}\approx134.39。
      \]
      元以下四捨五入得 134 元。`]
    },
    "88M-13": {
      verified: true, sourcePage: 4,
      stem: "以椰子樹為原點，三件珠寶分別埋在 (12,0)、(4,a)、(a,−8)，已知 a>0 且三點共線，求 a。",
      solution: [String.raw`三點共線，前兩點斜率等於後兩點斜率：
      \[
      \frac{a}{4-12}=\frac{-8-a}{a-4}。
      \]
      化簡得 \(a(a-4)=8(a+8)\)，即
      \[
      a^2-12a-64=0=(a-16)(a+4)。
      \]
      因 \(a>0\)，所以 \(a=16\)。`]
    },
    "88M-14": {
      verified: true, sourcePage: 4,
      stem: String.raw`設 \(0<\theta<\frac{\pi}{4}\)，且 \(2+\sqrt3\) 是
      \[
      x^2-(\tan\theta+\cot\theta)x+1=0
      \]
      的一根，求 \(\tan\theta\)。`,
      solution: [String.raw`兩根乘積為 1，所以另一根為
      \[
      \frac1{2+\sqrt3}=2-\sqrt3。
      \]
      方程式的兩根正是 \(\tan\theta\) 與 \(\cot\theta\)。因 \(0<\theta<\pi/4\)，故 \(\tan\theta<1\)，所以
      \[
      \tan\theta=2-\sqrt3。
      \]`]
    },
    "88M-15": {
      verified: true, sourcePage: 4,
      stem: "半徑 50 公分的輪子在地上滾動 200 公分，求輪子繞軸轉動角度（度以下四捨五入）。",
      solution: [String.raw`無滑動滾動的弧長等於移動距離，所以弧度數為
      \[
      \theta=\frac{200}{50}=4。
      \]
      換算成角度：
      \[
      4\cdot\frac{180^\circ}{\pi}\approx229.2^\circ，
      \]
      取整數為 \(229^\circ\)。`]
    },
    "88M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`三角形 ABC 中，\(\angle C=60^\circ、AC=3000、BC=2000\) 公尺，求 \(\angle A\)（度以下四捨五入）。`,
      solution: [String.raw`先以餘弦定理求 \(AB=c\)：
      \[
      c^2=3000^2+2000^2-2(3000)(2000)\cos60^\circ=7{,}000{,}000，
      \]
      故 \(c=1000\sqrt7\)。再用正弦定理：
      \[
      \sin A=\frac{2000\sin60^\circ}{1000\sqrt7}=\sqrt{\frac37}\approx0.6547。
      \]
      查表得 \(A\approx40.9^\circ\)，取整數為 \(41^\circ\)。`]
    },
    "88M-17": {
      verified: true, sourcePage: 5,
      stem: "袋中有三球，兩球標 1 元、一球標 5 元。任取兩球即可得到兩球金額總和，求所得金額期望值。",
      solution: [String.raw`三組無序取法等可能。其中一組抽到兩個 1 元球，得 2 元；另兩組各抽到 1 元與 5 元球，得 6 元。所以期望值為
      \[
      \frac{2+6+6}{3}=\frac{14}{3}\text{ 元}。
      \]`]
    },
    "88M-18": {
      verified: true, sourcePage: 5,
      stem: "以 2×1 白色壁磚與 4×1 咖啡色壁磚貼滿 12×1 牆面，求不同圖案數。",
      solution: [String.raw`令 \(f(n)\) 為貼滿長 n 的方法數。最左端可放長 2 或長 4 的磚，因此
      \[
      f(n)=f(n-2)+f(n-4)，\quad f(0)=1,\ f(2)=1。
      \]
      依序得 \(f(4)=2、f(6)=3、f(8)=5、f(10)=8、f(12)=13\)。`]
    },
    "88M-19": {
      verified: true, sourcePage: 5,
      stem: "擲 3 顆公平骰子，求恰好有兩顆點數相同的機率。",
      solution: [String.raw`先選重複的點數有 6 種，再選不同的點數有 5 種，最後選不同點數出現在哪一顆骰子有 3 種，所以有
      \[
      6\cdot5\cdot3=90
      \]
      種。全部結果有 \(6^3\) 種，故機率為
      \[
      \frac{90}{6^3}=\frac5{12}。
      \]`]
    },
    "88M-20": {
      verified: true, sourcePage: 5,
      stem: String.raw`空間中連接 \(P(2,1,3)\) 與 \(Q(4,5,5)\) 的線段，其垂直平分面方程式為何？`,
      solution: [String.raw`中點為
      \[
      M=(3,3,4)，
      \]
      而 \(\overrightarrow{PQ}=(2,4,2)\)，可簡化為法向量 \((1,2,1)\)。通過 M 的平面為
      \[
      (x-3)+2(y-3)+(z-4)=0，
      \]
      即
      \[
      x+2y+z=13。
      \]`]
    }
  });
})();
