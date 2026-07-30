(() => {
  Object.assign(window.MATH_CONTENT, {
    "90M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`設
      \[
      a=\left(\frac12\right)^{1/2},\quad
      b=\left(\frac13\right)^{1/3},\quad
      c=\left(\frac14\right)^{1/4}。
      \]
      比較 \(a、b、c\) 的大小。`,
      options: { "1":String.raw`\(a>b>c\)`, "2":String.raw`\(a<b<c\)`, "3":String.raw`\(a=c>b\)`, "4":String.raw`\(a=c<b\)`, "5":String.raw`\(a=b=c\)` },
      solution: [String.raw`因
      \[
      c=\left(2^{-2}\right)^{1/4}=2^{-1/2}=a。
      \]
      比較平方可得 \(a^2=1/2\)，而
      \[
      b^2=3^{-2/3}<\frac12
      \]
      （等價於 \(2^3<3^2\)），所以 \(a=c>b\)。`],
      optionAnalysis: { "1":"a 與 c 其實相等。","2":"不僅次序不符，也忽略 a=c。","3":"c 可化為 2 的負二分之一次方，且 b 較小。","4":"b 並不大於 a、c。","5":"b 與另外兩數不相等。" }
    },
    "90M-2": {
      verified: true, sourcePage: 1,
      stem: "原圖為一拋物線的部分圖形，A、B、C、D、E 五點中有一點是焦點。判斷哪一點是焦點。",
      options: { "1":"A", "2":"B", "3":"C", "4":"D", "5":"E" },
      solution: ["拋物線的焦點位在對稱軸上、頂點的內側。由圖形量測開口寬度與頂點到候選點的距離，可知符合「曲線上各點到焦點與準線等距」者為 C 點。"],
      optionAnalysis: { "1":"A 位於頂點外側，不在拋物線開口方向。","2":"B 接近頂點，焦距過短。","3":"C 位於對稱軸上，量測所得焦距與曲線開口吻合。","4":"D 對應的焦距過長。","5":"E 距頂點更遠，不符合圖形曲率。" }
    },
    "90M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`令 X 表示每位高中生平均每天研讀數學的時數，\(W=7(24-X)\) 表示平均每週花在研讀數學以外的時間；Y 表示數學學科能力測驗成績。若 X、Y 的相關係數為 \(R_{XY}\)，W、Y 的相關係數為 \(R_{WY}\)，求兩者關係。`,
      options: { "1":String.raw`\(R_{WY}=7(24-R_{XY})\)`, "2":String.raw`\(R_{WY}=7R_{XY}\)`, "3":String.raw`\(R_{WY}=-7R_{XY}\)`, "4":String.raw`\(R_{WY}=R_{XY}\)`, "5":String.raw`\(R_{WY}=-R_{XY}\)` },
      solution: [String.raw`W 是 X 的負斜率線性轉換：
      \[
      W=168-7X。
      \]
      平移與正倍數不改變相關係數，乘上負數則使符號反轉，因此
      \[
      R_{WY}=-R_{XY}。
      \]`],
      optionAnalysis: { "1":"相關係數不能直接代入原線性式。","2":"相關係數不會因尺度乘 7。","3":"負號正確，但絕對值不會乘 7。","4":"忽略 W 與 X 的方向相反。","5":"負斜率線性轉換使相關係數變號。" }
    },
    "90M-4": {
      verified: true, sourcePage: 2,
      stem: String.raw`若
      \[
      \sin x=\frac35,\qquad \frac{\pi}{2}<x<\pi，
      \]
      判斷正確的三角函數值。`,
      options: { "1":String.raw`\(\cos x=\frac45\)`, "2":String.raw`\(\tan x=\frac34\)`, "3":String.raw`\(\cot x=-\frac43\)`, "4":String.raw`\(\sec x=-\frac54\)`, "5":String.raw`\(\csc x=\frac53\)` },
      solution: [String.raw`x 在第二象限，所以餘弦為負。由 \(3\text{-}4\text{-}5\) 關係得
      \[
      \cos x=-\frac45,\quad
      \tan x=-\frac34。
      \]
      因此
      \[
      \cot x=-\frac43,\quad
      \sec x=-\frac54,\quad
      \csc x=\frac53，
      \]
      正確的是（3）（4）（5）。`],
      optionAnalysis: { "1":"第二象限的餘弦應為負。","2":"第二象限的正切應為負。","3":"是 tan x 的倒數，值為 −4/3。","4":"是 cos x 的倒數，值為 −5/4。","5":"是 sin x 的倒數，值為 5/3。" }
    },
    "90M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`實數 \(a,b,c\) 所成二次函數
      \[
      f(x)=ax^2+bx+c
      \]
      的圖形通過 \((0,-1)\)，且與 x 軸相切。判斷必然正確的敘述。`,
      options: { "1":String.raw`\(a<0\)`, "2":String.raw`\(b>0\)`, "3":String.raw`\(c=-1\)`, "4":String.raw`\(b^2+4ac=0\)`, "5":String.raw`\(a+b+c\le0\)` },
      solution: [String.raw`通過 \((0,-1)\) 得 \(c=-1\)。與 x 軸相切表示判別式為零：
      \[
      b^2-4ac=b^2+4a=0，
      \]
      所以 \(a=-b^2/4<0\)。又
      \[
      f(1)=a+b-1=-\frac{(b-2)^2}{4}\le0。
      \]
      故（1）（3）（5）正確。`],
      optionAnalysis: { "1":"由 b²+4a=0 且二次項不為零，得 a<0。","2":"b 可正、可負或為 0。","3":"代入 x=0 立即得到 c=−1。","4":"相切條件是 b²−4ac=0，不是加號。","5":"f(1)=−(b−2)²/4≤0。" }
    },
    "90M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`正整數 \(a,b,q,r\) 滿足 \(a=bq+r\)，以 \((m,n)\) 表示 m、n 的最大公因數。判斷正確關係。`,
      options: { "1":String.raw`\((a,b)=(b,r)\)`, "2":String.raw`\((a,b)=(q,r)\)`, "3":String.raw`\((a,q)=(b,r)\)`, "4":String.raw`\((a,q)=(q,r)\)`, "5":String.raw`\((a,r)=(b,q)\)` },
      solution: [String.raw`由輾轉相除法，
      \[
      (a,b)=(b,a-bq)=(b,r)，
      \]
      故（1）成立。另一方面 \(a=bq+r\) 對 q 取餘得 \(a\equiv r\pmod q\)，因此
      \[
      (a,q)=(r,q)=(q,r)，
      \]
      故（4）成立。`],
      optionAnalysis: { "1":"這正是輾轉相除法的基本性質。","2":"q 與原兩數的最大公因數沒有此固定關係。","3":"左側等於 (q,r)，不一定等於 (b,r)。","4":"a 與 r 對 q 同餘。","5":"兩側沒有由帶餘除法導出的等價關係。" }
    },
    "90M-7": {
      verified: true, sourcePage: 3,
      stem: "古代足球踢進一球得 16 分，犯規後罰踢進一球得 6 分。下列哪些總分可能出現在計分板上？",
      options: { "1":"26", "2":"28", "3":"82", "4":"103", "5":"284" },
      solution: [String.raw`總分須可寫成 \(16m+6n\)，其中 \(m,n\) 為非負整數，所以總分必為偶數。逐項檢查：
      \[
      28=16+2\cdot6,\quad
      82=4\cdot16+3\cdot6,\quad
      284=14\cdot16+10\cdot6。
      \]
      26 無法由 16 與 6 的非負整數倍組成，103 為奇數。故答案為（2）（3）（5）。`],
      optionAnalysis: { "1":"扣掉一次 16 後剩 10，不能由 6 的倍數組成。","2":"16+12=28。","3":"64+18=82。","4":"16m+6n 必為偶數。","5":"例如 14 球加 10 次罰踢可得 284。" }
    },
    "90M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`坐標平面上有
      \[
      A(150,200),\ B(146,203),\ C(-4,3),\ O(0,0)。
      \]
      判斷四邊形 ABCO 的性質。`,
      options: { "1":"ABCO 是平行四邊形", "2":"ABCO 是長方形", "3":"兩對角線互相垂直", "4":"對角線 AC 長度大於 251", "5":"面積為 1250" },
      solution: [String.raw`有
      \[
      \overrightarrow{AB}=(-4,3)=\overrightarrow{OC},\qquad
      \overrightarrow{BC}=(-150,-200)=\overrightarrow{AO}，
      \]
      所以是平行四邊形。且
      \[
      \overrightarrow{AB}\cdot\overrightarrow{BC}=600-600=0，
      \]
      故為長方形。兩邊長分別為 5 與 250，面積為 \(5\cdot250=1250\)。`],
      optionAnalysis: { "1":"兩組對邊向量分別相等。","2":"相鄰邊內積為 0。","3":"一般長方形的對角線不必垂直，本題也不垂直。","4":"AC²=62525，所以 AC 約 250.05，小於 251。","5":"相鄰邊長 5、250，面積 1250。" }
    },
    "90M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`判斷哪些直線與雙曲線
      \[
      \frac{x^2}{25}-\frac{y^2}{4}=1
      \]
      不相交。`,
      options: { "1":String.raw`\(5y=2x\)`, "2":String.raw`\(5y=3x\)`, "3":String.raw`\(5y=2x+1\)`, "4":String.raw`\(5y=-2x\)`, "5":String.raw`\(y=100\)` },
      solution: [String.raw`雙曲線漸近線為 \(y=\pm\frac25x\)，所以兩條漸近線（1）（4）與雙曲線不相交。將（2）的 \(y=\frac35x\) 代入，得
      \[
      \left(\frac1{25}-\frac9{100}\right)x^2=1，
      \]
      左側係數為負，不可能等於 1，因此（2）也不相交。（3）平移後會交曲線一次；（5）則交於兩點。`],
      optionAnalysis: { "1":"是雙曲線的一條漸近線。","2":"代入後得到負數乘 x²=1，無實解。","3":"與漸近線平行但有位移，會與一支相交。","4":"是另一條漸近線。","5":"水平線 y=100 與左右兩支各有交點。" }
    },
    "90M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`複數 z 滿足 \(z^6=1\) 且 \(z\ne1\)。判斷必然正確的敘述。`,
      options: { "1":String.raw`\(|z|=1\)`, "2":String.raw`\(z^2=1\)`, "3":String.raw`\(z^3=1\) 或 \(z^3=-1\)`, "4":String.raw`\(|z^4|=1\)`, "5":String.raw`\(1+z+z^2+z^3+z^4+z^5=0\)` },
      solution: [String.raw`由 \(|z|^6=1\) 得 \(|z|=1\)，所以 \(|z^4|=1\)。又
      \[
      (z^3)^2=1，
      \]
      故 \(z^3=\pm1\)。因 \(z\ne1\)，等比級數公式給出
      \[
      1+z+\cdots+z^5=\frac{z^6-1}{z-1}=0。
      \]
      正確的是（1）（3）（4）（5）。`],
      optionAnalysis: { "1":"六次單位根都在單位圓上。","2":"例如原始六次單位根不滿足 z²=1。","3":"z³ 的平方為 1。","4":"|z⁴|=|z|⁴=1。","5":"利用 z≠1 的等比級數公式可得 0。" }
    },
    "90M-11": {
      verified: true, sourcePage: 4,
      stem: "B4 長方形紙張對折剪開後成為 B5，且 B5 與 B4 相似。已知 B4 長邊為 36.4 公分，求 B4 短邊長（小數點後第二位四捨五入）。",
      solution: [String.raw`設短邊為 x。對折後的 B5 邊長為 \(x、18.2\)，並旋轉對應於原紙張，因此
      \[
      \frac{36.4}{x}=\frac{x}{18.2}。
      \]
      得 \(x^2=36.4\cdot18.2\)，所以 \(x\approx25.738\)，依題意取 25.7 公分。`]
    },
    "90M-12": {
      verified: true, sourcePage: 4,
      stem: "抽樣男性 600 人、女性 400 人；男性有 36% 滿意市長施政，女性有 46% 滿意。求滿意者占全體樣本的百分比。",
      solution: [String.raw`以樣本人數加權：
      \[
      \frac{600\cdot0.36+400\cdot0.46}{1000}
      =\frac{216+184}{1000}=0.40。
      \]
      所以滿意者占 40%。`]
    },
    "90M-13": {
      verified: true, sourcePage: 4,
      stem: "從 1、2、3、4、5、6、7、8、9 中任取兩相異數，求兩數乘積為完全立方數的機率。",
      solution: [String.raw`符合的無序數對只有
      \[
      (1,8)、(2,4)、(3,9)，
      \]
      乘積分別為 8、8、27，共 3 組。全部數對有 \(\binom92=36\) 組，所以機率為
      \[
      \frac3{36}=\frac1{12}。
      \]`]
    },
    "90M-14": {
      verified: true, sourcePage: 4,
      stem: String.raw`多項式 \(f(x)\) 除以 \(x^2-5x+4\) 的餘式為 \(x+2\)，除以 \(x^2-5x+6\) 的餘式為 \(3x+4\)。求 \(f(x)\) 除以 \(x^2-4x+3\) 的餘式。`,
      solution: [String.raw`三個除式分別分解為
      \[
      (x-1)(x-4)、(x-2)(x-3)、(x-1)(x-3)。
      \]
      前兩個條件給出 \(f(1)=3、f(3)=13\)。設所求一次餘式為 \(r(x)\)，則 \(r(1)=3、r(3)=13\)，故斜率為 5，得到
      \[
      r(x)=5x-2。
      \]`]
    },
    "90M-15": {
      verified: true, sourcePage: 5,
      stem: "兩條道路延長後於 C 成 60°，A、B 分別在兩道路上且 CA=CB=450 公尺；以 A、B 為切點開闢相切圓弧。求圓弧長（公尺以下四捨五入，取 √3≈1.732、π≈3.142）。",
      solution: [String.raw`圓心到兩切點的半徑分別垂直兩道路，因此圓心角
      \[
      \angle AOB=360^\circ-90^\circ-90^\circ-60^\circ=120^\circ。
      \]
      又三角形 ACB 為正三角形，所以 \(AB=450\)。由弦長公式
      \[
      450=2R\sin60^\circ=R\sqrt3，
      \]
      得 \(R=150\sqrt3\)。圓弧長為
      \[
      \frac{120^\circ}{360^\circ}\cdot2\pi R=100\pi\sqrt3\approx544，
      \]
      即 544 公尺。`]
    },
    "90M-16": {
      verified: true, sourcePage: 5,
      stem: "四角錐底面為邊長 2 的正方形，四個側面都是腰長 4 的等腰三角形。求四角錐的高度。",
      solution: [String.raw`頂點在正方形中心的正上方。底面中心到任一頂點的距離為正方形對角線的一半，即 \(\sqrt2\)。以側稜 4 為斜邊：
      \[
      h^2+(\sqrt2)^2=4^2，
      \]
      所以 \(h^2=14\)，高度為 \(\sqrt{14}\)。`]
    },
    "90M-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`x 軸上有觀測站 \(A(2,0)、B(-4,0)\)。目標 C 在 x 軸上方，且
      \[
      \tan\angle BAC=\frac89,\qquad
      \tan\angle ABC=\frac83。
      \]
      求砲台 \(D(\frac52,-8)\) 到 C 的距離。`,
      solution: [String.raw`由角度方向，AC、BC 的直線方程分別為
      \[
      y=-\frac89(x-2),\qquad y=\frac83(x+4)。
      \]
      聯立得 \(C=(-\frac52,4)\)。因此
      \[
      DC=\sqrt{\left(-\frac52-\frac52\right)^2+(4+8)^2}
      =\sqrt{5^2+12^2}=13。
      \]`]
    },
    "90M-18": {
      verified: true, sourcePage: 6,
      stem: "連接正四面體各面的邊中點，可分出四個小正四面體與一個正八面體。若原正四面體體積為 12，求中央正八面體體積。",
      solution: [String.raw`每個角落的小正四面體邊長為原來的一半，所以體積為原來的
      \[
      \left(\frac12\right)^3=\frac18。
      \]
      四個小正四面體體積合計為原體積的 \(4/8=1/2\)，其餘一半就是正八面體。因此體積為
      \[
      12\cdot\frac12=6。
      \]`]
    },
    "90M-19": {
      verified: true, sourcePage: 6,
      stem: "產品中不良品占 5%、良品占 95%；良品被誤驗為不良品的機率為 0.20，不良品被誤驗為良品的機率為 0.16。已知產品被驗為良品，求它實際為不良品的機率（小數點後第三位四捨五入）。",
      solution: [String.raw`不良品且被驗為良品的機率為 \(0.05\cdot0.16=0.008\)；被驗為良品的總機率為
      \[
      0.05\cdot0.16+0.95\cdot0.80=0.768。
      \]
      所求條件機率為
      \[
      \frac{0.008}{0.768}\approx0.0104167，
      \]
      依題意取 0.01。`]
    },
    "90M-20": {
      verified: true, sourcePage: 6,
      stem: "甲、乙、丙、丁、戊、己、庚、辛、壬九人分成三隊，每隊三人，且甲、乙不同隊。求組隊方法數。",
      solution: [String.raw`九人分成三個不標隊名的三人組，共有
      \[
      \frac{9!}{(3!)^3\,3!}=280
      \]
      種。若甲、乙同隊，先選同隊的第三人有 7 種，剩下六人分成兩隊有
      \[
      \frac{\binom63}{2}=10
      \]
      種，共 \(7\cdot10=70\) 種。因此甲、乙不同隊有
      \[
      280-70=210
      \]
      種。`]
    }
  });
})();
