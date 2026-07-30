(() => {
  Object.assign(window.MATH_CONTENT, {
    "87M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`當 \(0<x<2\pi\) 時，直線 \(y=1-x\) 與函數 \(y=\tan x\) 的圖形共有幾個交點？`,
      options: { "1":"0", "2":"1", "3":"2", "4":"3", "5":"4" },
      solution: [String.raw`交點等價於
      \[
      \tan x+x-1=0。
      \]
      在 \((0,\pi/2)、(\pi/2,3\pi/2)、(3\pi/2,2\pi)\) 三個連續區間內，此函數導數為 \(\sec^2x+1>0\)，且每個區間的兩端函數值分別跨過 0，因此各有唯一一根，共 3 個交點。`],
      optionAnalysis: { "1":"第一個正切分支就已有交點。","2":"忽略正切函數的週期與漸近線。","3":"第三個區間仍有一個交點。","4":"三個連續分支各有且只有一個交點。","5":"每個分支單調遞增，不會出現兩個交點。" }
    },
    "87M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`若 \(1-i\) 是方程式
      \[
      x^2+ax+3-i=0
      \]
      的一根，求 a。`,
      options: { "1":"−3", "2":"−2", "3":String.raw`\(-1-i\)`, "4":"2", "5":"3" },
      solution: [String.raw`代入 \(x=1-i\)，且 \((1-i)^2=-2i\)，得
      \[
      -2i+a(1-i)+3-i=0。
      \]
      實部為 \(a+3=0\)，虛部為 \(-a-3=0\)，兩者都給出 \(a=-3\)。`],
      optionAnalysis: { "1":"代入後實部與虛部同時為 0。","2":"代入後實部不為 0。","3":"題目所求係數由方程得到實數 −3。","4":"代入不成立。","5":"符號相反。" }
    },
    "87M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`事件 A、B 的機率分別為 \(\frac12、\frac13\)。若 p 表示 A 或 B 發生的機率，判斷 p 的範圍。`,
      options: { "1":String.raw`\(p\le\frac16\)`, "2":String.raw`\(\frac16<p\le\frac13\)`, "3":String.raw`\(\frac13<p<\frac12\)`, "4":String.raw`\(\frac12\le p\le\frac56\)`, "5":String.raw`\(p>\frac56\)` },
      solution: [String.raw`由
      \[
      p=P(A\cup B)=P(A)+P(B)-P(A\cap B)
      \]
      且 \(0\le P(A\cap B)\le\min(\frac12,\frac13)=\frac13\)，可得
      \[
      \frac12\le p\le\frac12+\frac13=\frac56。
      \]`],
      optionAnalysis: { "1":"聯集機率至少不小於 P(A)=1/2。","2":"整段都低於必要下界。","3":"上端仍不能小於 1/2。","4":"正是聯集機率的一般上下界。","5":"5/6 是兩事件互斥時的最大值。" }
    },
    "87M-4": {
      verified: true, sourcePage: 1,
      stem: "ABCDEF 為正六邊形。比較原題所列五個以向量 AB 為第一因子的內積，選出最大者。",
      options: { "1":String.raw`\(\overrightarrow{AB}\cdot\overrightarrow{AB}\)`, "2":String.raw`\(\overrightarrow{AB}\cdot\overrightarrow{AC}\)`, "3":String.raw`\(\overrightarrow{AB}\cdot\overrightarrow{AD}\)`, "4":String.raw`\(\overrightarrow{AB}\cdot\overrightarrow{AE}\)`, "5":String.raw`\(\overrightarrow{AB}\cdot\overrightarrow{AF}\)` },
      solution: [String.raw`設正六邊形邊長為 1，可取
      \[
      \overrightarrow{AB}=(-\tfrac12,\tfrac{\sqrt3}{2}),\quad
      \overrightarrow{AC}=(-\tfrac32,\tfrac{\sqrt3}{2})。
      \]
      因此 \(\overrightarrow{AB}\cdot\overrightarrow{AC}=3/2\)。其餘四個內積依序為 \(1、1、0、-1/2\)，故最大的是（2）。`],
      optionAnalysis: { "1":"值為邊長平方 1。","2":"值為 3/2，是五者最大。","3":"值為 1。","4":"兩部分抵消，值為 0。","5":"夾角為鈍角，內積為負。" }
    },
    "87M-5": {
      verified: true, sourcePage: 2,
      stem: "在 513、226、216、154、145 五數中，判斷哪些數可以和其中某一數相加成為完全平方數。",
      options: { "1":"513", "2":"226", "3":"216", "4":"154", "5":"145" },
      solution: [String.raw`直接找出完全平方數的配對：
      \[
      513+216=729=27^2,\qquad
      216+145=361=19^2。
      \]
      因此 513、216、145 都能和題列某數相加成平方數；逐一檢查 226、154 與五數的和均不是平方數。`],
      optionAnalysis: { "1":"可與 216 相加成 27²。","2":"與題列五數的各個和都不是平方數。","3":"可與 513 或 145 配對。","4":"沒有符合的配對。","5":"可與 216 相加成 19²。" }
    },
    "87M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`三條不共點直線
      \[
      ax-4y=1,\quad(a+1)x+3y=2,\quad x-2y=3
      \]
      在哪些 a 值下會圍成直角三角形？`,
      options: { "1":"−8", "2":"−4", "3":"1", "4":"3", "5":"5" },
      solution: [String.raw`三線斜率為
      \[
      m_1=\frac a4,\quad m_2=-\frac{a+1}{3},\quad m_3=\frac12。
      \]
      任兩線垂直需斜率乘積為 −1。由 \(m_1m_2=-1\) 得 \(a=-4、3\)；由 \(m_1m_3=-1\) 得 \(a=-8\)；由 \(m_2m_3=-1\) 得 \(a=5\)。故答案為（1）（2）（4）（5）。`],
      optionAnalysis: { "1":"第一、第三線垂直。","2":"第一、第二線垂直。","3":"沒有任何一對斜率乘積為 −1。","4":"第一、第二線垂直。","5":"第二、第三線垂直。" }
    },
    "87M-7": {
      verified: true, sourcePage: 2,
      stem: "判斷原題所列 50° 與 230° 的三角函數不等式。",
      options: { "1":String.raw`\(\sin50^\circ<\cos50^\circ\)`, "2":String.raw`\(\tan50^\circ<\cot50^\circ\)`, "3":String.raw`\(\tan50^\circ<\sec50^\circ\)`, "4":String.raw`\(\sin230^\circ<\cos230^\circ\)`, "5":String.raw`\(\tan230^\circ<\cot230^\circ\)` },
      solution: [String.raw`因 \(50^\circ>45^\circ\)，故 \(\sin50^\circ>\cos50^\circ\)、\(\tan50^\circ>1>\cot50^\circ\)。又
      \[
      \frac{\tan50^\circ}{\sec50^\circ}=\sin50^\circ<1，
      \]
      所以（3）成立。230°=180°+50°，故 \(\sin230^\circ=-\sin50^\circ<-\cos50^\circ=\cos230^\circ\)，（4）也成立。`],
      optionAnalysis: { "1":"50° 時正弦大於餘弦。","2":"tan50°>1，而 cot50°<1。","3":"tan/sec=sin<1。","4":"第三象限兩者為負，且正弦絕對值較大。","5":"tan230°=tan50°，仍大於 cot230°。" }
    },
    "87M-8": {
      verified: true, sourcePage: 2,
      stem: String.raw`空間中給定 \(A(1,2,3)、B(2,5,3)、C(2,6,4)\)，哪些點可與 A、B、C 構成平行四邊形？`,
      options: { "1":String.raw`\((-1,-5,-2)\)`, "2":String.raw`\((1,1,2)\)`, "3":String.raw`\((1,3,4)\)`, "4":String.raw`\((3,7,6)\)`, "5":String.raw`\((3,9,4)\)` },
      solution: [String.raw`三點可分別作為共同頂點，因此第四點共有三種：
      \[
      A+B-C=(1,1,2),\quad
      A+C-B=(1,3,4),\quad
      B+C-A=(3,9,4)。
      \]
      故答案為（2）（3）（5）。`],
      optionAnalysis: { "1":"不符合任一種向量加減組合。","2":"等於 A+B−C。","3":"等於 A+C−B。","4":"不是三個可能的第四點之一。","5":"等於 B+C−A。" }
    },
    "87M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`二次函數 \(f(x)=a(x-1)^2+b\) 滿足 \(f(4)>0、f(5)<0\)。判斷哪些函數值必為正。`,
      options: { "1":String.raw`\(f(0)>0\)`, "2":String.raw`\(f(-1)>0\)`, "3":String.raw`\(f(-2)>0\)`, "4":String.raw`\(f(-3)>0\)`, "5":String.raw`\(f(-4)>0\)` },
      solution: [String.raw`由
      \[
      f(5)-f(4)=7a<0
      \]
      得 \(a<0\)，函數值會隨 \(|x-1|\) 增大而降低。因 \(f(-2)=f(4)>0\)，距對稱軸更近的 \(x=0、-1\) 也必為正；而 \(f(-3)=f(5)<0\)，\(f(-4)\) 更小。故答案為（1）（2）（3）。`],
      optionAnalysis: { "1":"距對稱軸比 x=4 更近，值更大。","2":"同理比 f(4) 大。","3":"由對稱性等於 f(4)>0。","4":"由對稱性等於 f(5)<0。","5":"距對稱軸更遠，值小於 f(5)。" }
    },
    "87M-10": {
      verified: true, sourcePage: 3,
      stem: "原圖顯示池塘布袋蓮面積與月份呈指數關係，且 0、1、2、3、4 月的面積依序為 1、2、4、8、16 平方公尺。判斷正確敘述。",
      options: { "1":"指數函數底數為 2", "2":"第 5 個月面積超過 30 m²", "3":"由 4 m² 增至 12 m² 只需 1.5 個月", "4":String.raw`面積達 \(2、3、6\) m² 的時間 \(t_1、t_2、t_3\) 滿足 \(t_1+t_2=t_3\)`, "5":"第 1～3 月平均蔓延速度等於第 2～4 月" },
      solution: [String.raw`圖形為 \(A(t)=2^t\)，故（1）成立；\(A(5)=32>30\)，故（2）成立。由 4 增到 12 是乘 3，需 \(\log_2 3\approx1.585\) 月，不是 1.5 月。`, String.raw`又 \(t_1=1、t_2=\log_2 3、t_3=\log_2 6=1+\log_2 3\)，故（4）成立。兩段平均速度分別為 \((8-2)/2=3\) 與 \((16-4)/2=6\)，不相等。`],
      optionAnalysis: { "1":"面積每月加倍。","2":"第 5 月為 32 m²。","3":"實際需約 1.585 月。","4":"利用對數的乘法轉加法性質成立。","5":"指數成長使後一時段平均速度較大。" }
    },
    "87M-11": {
      verified: true, sourcePage: 3,
      stem: "三位數中，百位數與個位數之差的絕對值為 2，共有多少個？",
      solution: [String.raw`百位與個位的有序配對共有 15 組：
      \[
      (1,3),(2,0),(2,4),\ldots,(8,6),(9,7)。
      \]
      十位數可任取 0～9，共 10 種，所以三位數共有
      \[
      15\cdot10=150
      \]
      個。`]
    },
    "87M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`實數 a、b 滿足
      \[
      \frac a2+\frac b{2^2}+\frac a{2^3}+\frac b{2^4}+\cdots=3，
      \]
      求 \(2a+b\)。`,
      solution: [String.raw`奇數次冪與偶數次冪分別求和：
      \[
      a\frac{1/2}{1-1/4}+b\frac{1/4}{1-1/4}
      =\frac{2a+b}{3}=3。
      \]
      因此 \(2a+b=9\)。`]
    },
    "87M-13": {
      verified: true, sourcePage: 4,
      stem: "三條生產線同開需 10 小時；乙、丙同開需 15 小時；甲開 15 小時再由丙開 30 小時可完成。求乙單獨完成所需時間。",
      solution: [String.raw`以全部工作為 1，速率分別為 \(r_A、r_B、r_C\)。由
      \[
      r_A+r_B+r_C=\frac1{10},\qquad r_B+r_C=\frac1{15}
      \]
      得 \(r_A=1/30\)。再由 \(15r_A+30r_C=1\) 得 \(r_C=1/60\)，故
      \[
      r_B=\frac1{15}-\frac1{60}=\frac1{20}。
      \]
      乙單獨需 20 小時。`]
    },
    "87M-14": {
      verified: true, sourcePage: 4,
      stem: "長方體的 12 條稜中，互為歪斜線的稜線共有幾對？",
      solution: ["固定一條稜，與它相交的稜有 4 條、平行的其他稜有 3 條，剩下 4 條與它歪斜。因此按每條稜計數為 12×4，再除以每對重複計算的 2，得到 24 對。"]
    },
    "87M-15": {
      verified: true, sourcePage: 4,
      stem: "邊長 8 的正三角形撞球檯中，BP=√2。球由 P 平行 BA 射出，依原圖反射後回到 P，求路徑長。",
      solution: ["把球每次碰壁的反射改成將正三角形沿該邊鏡射，折線路徑就展開成一直線。依原圖反射順序展開後，起點 P 與終點的鏡像相距三個邊長，因此總路徑長為 3×8=24。"]
    },
    "87M-16": {
      verified: true, sourcePage: 4,
      stem: String.raw`等比數列滿足 \(a_1=1、a_4=2-\sqrt5\)，且 \(a_{n+2}=a_{n+1}+a_n\)。求公比。`,
      solution: [String.raw`設公比為 r。代入遞迴式得
      \[
      r^2=r+1，
      \]
      所以 \(r=(1\pm\sqrt5)/2\)。又 \(a_4=r^3=2-\sqrt5<0\)，故須取負根
      \[
      r=\frac{1-\sqrt5}{2}。
      \]`]
    },
    "87M-17": {
      verified: true, sourcePage: 5,
      stem: "A、B 位於河口兩岸；C、D 在通往 A 的直路上，CA=50、DA=200 公尺，且 ∠ACB=60°、∠ADB=30°。求 AB。",
      solution: [String.raw`取 \(A=(0,0)、C=(50,0)、D=(200,0)\)。由兩個測角方向，CB、DB 斜率分別為 \(-\sqrt3、-1/\sqrt3\)。聯立得 \(B=(-25,75\sqrt3)\)。因此
      \[
      AB=\sqrt{(-25)^2+(75\sqrt3)^2}
      =\sqrt{17500}=50\sqrt7。
      \]`]
    },
    "87M-18": {
      verified: true, sourcePage: 5,
      stem: String.raw`若 \((x+1)f(x)\) 除以 \(x^2+x+1\) 的餘式為 \(5x+3\)，求 \(f(x)\) 除以同一多項式的餘式。`,
      solution: [String.raw`設所求餘式為 \(ux+v\)。模 \(x^2+x+1\) 時有 \(x^2\equiv-x-1\)，所以
      \[
      (x+1)(ux+v)\equiv vx+(v-u)。
      \]
      與 \(5x+3\) 比較得 \(v=5、v-u=3\)，故 \(u=2\)，餘式為
      \[
      2x+5。
      \]`]
    },
    "87M-19": {
      verified: true, sourcePage: 5,
      stem: "圓 O 半徑為 6，F=(4,0)，Q 在圓上；P 為 FQ 的中垂線與 OQ 的交點。求 P 的軌跡方程式。",
      solution: [String.raw`P 在 FQ 的中垂線上，所以 \(PF=PQ\)；P 又在 OQ 上且 \(OQ=6\)，因此
      \[
      PO+PF=PO+PQ=6。
      \]
      軌跡是焦點 O、F 的橢圓。中心為 \((2,0)\)，\(a=3、c=2、b^2=9-4=5\)，故
      \[
      \frac{(x-2)^2}{9}+\frac{y^2}{5}=1。
      \]`]
    },
    "87M-20": {
      verified: true, sourcePage: 5,
      stem: "依題表的民國 70、76 年食品價格與 70 年用量，以拉氏指數計算民國 76 年主要食品費用比 70 年高出的百分率。",
      solution: [String.raw`以 70 年用量加權，76 年費用總和為
      \[
      \sum p_{76}q_{70}=1384.2，
      \]
      70 年費用總和為
      \[
      \sum p_{70}q_{70}=661.5。
      \]
      拉氏指數約為 \(1384.2/661.5\times100\%=209.25\%\)，所以比基期高出約
      \[
      209.25\%-100\%\approx109\%。
      \]`]
    }
  });
})();
