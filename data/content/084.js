(() => {
  Object.assign(window.MATH_CONTENT, {
    "84M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`圖 1 中 \(A、B、C、D、E\) 為坐標平面上的五個點。將各點坐標 \((x,y)\) 代入 \(x-y=k\)，哪一點所得的 \(k\) 值最大？`,
      options: { "1":"A", "2":"B", "3":"C", "4":"D", "5":"E" },
      solution: [String.raw`式 \(k=x-y\) 的等值線為 \(y=x-k\)。等值線平行移動時，越往右下方的點具有越大的 \(x-y\)；由原圖比較五點的位置，E 點的 \(x-y\) 最大。`],
      optionAnalysis: { "1":"A 點的 x−y 小於 E 點。","2":"B 點較偏左上，x−y 不是最大。","3":"C 點的 x−y 仍小於 E 點。","4":"D 點相對 E 點較偏左上。","5":"E 點在 x−y 增大的方向上最外側。" }
    },
    "84M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`若將 \(\dfrac1{4369}+\dfrac1{5911}\) 化為最簡分數，則其分母為何？`,
      options: { "1":"100487", "2":"100489", "3":"10280", "4":"25825159", "5":"25825161" },
      solution: [String.raw`因 \(4369=17\cdot257\)、\(5911=23\cdot257\)，所以
      \[
      \frac1{4369}+\frac1{5911}
      =\frac{23+17}{17\cdot23\cdot257}
      =\frac{40}{100487}。
      \]
      40 與 100487 互質，最簡分數的分母為 100487。`],
      optionAnalysis: { "1":"通分後分母為17×23×257，且不能再約分。","2":"不是兩分母最小公倍數。","3":"這是兩個原分母的和，不能直接作通分分母。","4":"是直接相乘的數值，尚未約去公因數257。","5":"不是兩分母的乘積或最小公倍數。" }
    },
    "84M-3": {
      verified: true, sourcePage: 1,
      stem: "依圖 2 的長方形垛疊法，最底層長邊有 10 個橘子、短邊有 5 個，則此長方形垛最多有幾個橘子？",
      options: { "1":"110", "2":"120", "3":"130", "4":"140", "5":"150" },
      solution: [String.raw`每往上一層，長、短邊都各少 1 個，因此總數為
      \[
      10\cdot5+9\cdot4+8\cdot3+7\cdot2+6\cdot1
      =50+36+24+14+6=130。
      \]`],
      optionAnalysis: { "1":"漏計了部分上層橘子。","2":"各層長、短邊數的乘積加總有誤。","3":"五層依序為50、36、24、14、6，合計130。","4":"多計了不存在的橘子。","5":"不能只用底層數量乘固定層數。" }
    },
    "84M-4": {
      verified: true, sourcePage: 2,
      stem: String.raw`下列哪一個平面與球面
      \[
      x^2+y^2+z^2-2x+4y+2z-19=0
      \]
      相交所得圓的面積最大？`,
      options: { "1":String.raw`\(x+y+z=0\)`, "2":String.raw`\(z=-1\)`, "3":String.raw`\(y=1\)`, "4":String.raw`\(x=2\)`, "5":String.raw`\(x=2y\)` },
      solution: [String.raw`配方得球心為 \((1,-2,-1)\)。平面截球所得圓的半徑，在平面通過球心時最大。五個平面中只有 \(z=-1\) 通過球心，所以其截圓面積最大。`],
      optionAnalysis: { "1":"球心代入得−2，不在此平面。","2":"球心的 z 坐標是−1，平面通過球心。","3":"球心的 y 坐標不是1。","4":"球心的 x 坐標不是2。","5":"球心不滿足1=2(−2)。" }
    },
    "84M-5": {
      verified: true, sourcePage: 2,
      stem: "自用小汽車牌照前兩位為大寫英文字母，後四位為數字。最後一位不用 4，且排除 0000，共有多少種牌照號碼？",
      options: { "1":String.raw`\(26\cdot25(4320-1)\)`, "2":String.raw`\(26\cdot25\cdot4320-1\)`, "3":String.raw`\(26\cdot25(5040-1)\)`, "4":String.raw`\(26^2(9000-1)\)`, "5":String.raw`\(26^2\cdot9000-1\)` },
      solution: [String.raw`兩個英文字母都可重複選取，共 \(26^2\) 種。數字的前三位各有 10 種，末位除 4 外有 9 種，共 9000 種；再排除 0000，故總數為
      \[
      26^2(9000-1)。
      \]`],
      optionAnalysis: { "1":"誤以為兩個字母不能重複，且數字計數也錯。","2":"字母與數字的限制均未正確處理。","3":"仍錯把字母視為不重複抽取。","4":"26²種字母組合乘上排除0000後的8999種數字。","5":"排除0000須對每一組字母都排除一次，不能只在總數減1。" }
    },
    "84M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`市場調查得到單價 \(x=(8,9,10,11,12)\)，需求量 \(y=(11,12,10,8,9)\)。\(x\) 與 \(y\) 的相關係數最接近哪一個值？`,
      options: { "1":String.raw`\(\frac45\)`, "2":String.raw`\(\frac25\)`, "3":"0", "4":String.raw`\(-\frac25\)`, "5":String.raw`\(-\frac45\)` },
      solution: [String.raw`\(\bar x=\bar y=10\)。兩組離均差分別為
      \[
      (-2,-1,0,1,2),\qquad(1,2,0,-2,-1)。
      \]
      內積為 −8，兩組平方和都為 10，因此
      \[
      r=\frac{-8}{\sqrt{10\cdot10}}=-\frac45。
      \]`],
      optionAnalysis: { "1":"資料呈負相關，不可能為正。","2":"相關方向錯誤。","3":"價量變化具有明顯反向趨勢。","4":"低估了負相關的強度。","5":"依離均差內積計算得到−4/5。" }
    },
    "84M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`設 \(m\) 為實數。若二次函數
      \[
      y=mx^2+10x+m+6
      \]
      的圖形恆在直線 \(y=2\) 的上方，求 \(m\) 的範圍。`,
      options: { "1":String.raw`\(m>0\)`, "2":String.raw`\(m>-2+\sqrt{29}\)`, "3":String.raw`\(0<m<-2+\sqrt{29}\)`, "4":String.raw`\(-2-\sqrt{29}<m<-2+\sqrt{29}\)`, "5":String.raw`\(m>-2+\sqrt{29}\) 或 \(m<-2-\sqrt{29}\)` },
      solution: [String.raw`需使
      \[
      mx^2+10x+m+4>0
      \]
      對所有實數 \(x\) 成立，故 \(m>0\) 且判別式小於 0：
      \[
      100-4m(m+4)<0
      \Longleftrightarrow m^2+4m-25>0。
      \]
      配合 \(m>0\)，得到 \(m>-2+\sqrt{29}\)。`],
      optionAnalysis: { "1":"只要求開口向上，尚未保證最低點高於2。","2":"同時滿足開口向上與判別式小於0。","3":"此區間的判別式為正，會穿越y=2。","4":"包含m≤0，不可能恆在直線上方。","5":"負的那一段開口向下，不符合全域在上方。" }
    },
    "84M-8": {
      verified: true, sourcePage: 3,
      stem: "下列五組函數中，哪些組的兩個函數圖形互相對稱於 y 軸？",
      options: {
        "1":String.raw`\(y=(\frac12)^{3x}\) 與 \(y=2^{3x}\)`,
        "2":String.raw`\(y=2^{3x}\) 與 \(y=3^{2x}\)`,
        "3":String.raw`\(y=x^2\) 與 \(y=-x^2\)`,
        "4":String.raw`\(y=\log x\) 與 \(y=\log(-x)\)`,
        "5":String.raw`\(y=\cos x\) 與 \(y=\sin(x-\frac\pi2)\)`
      },
      solution: [String.raw`關於 y 軸對稱表示第二函數應為第一函數的 \(f(-x)\)。
      \[
      \left(\frac12\right)^{3(-x)}=2^{3x},
      \]
      所以（1）成立；而 \(\log(-x)\) 正是 \(\log x\) 將 \(x\) 換成 \(-x\)，所以（4）成立。其餘不符合。`],
      optionAnalysis: { "1":"把x換成−x即由前式得到後式。","2":"底數與指數結構不同，不是f(−x)。","3":"y=x²本身關於y軸對稱，鏡射後不是−x²。","4":"定義域與圖形正好互為y軸鏡射。","5":"sin(x−π/2)=−cos x，是關於x軸的反射。" }
    },
    "84M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`\(\cos74^\circ-\cos14^\circ\) 等於下列哪些式子？`,
      options: { "1":String.raw`\(\cos60^\circ\)`, "2":String.raw`\(2\sin30^\circ\sin44^\circ\)`, "3":String.raw`\(2\cos30^\circ\cos44^\circ\)`, "4":String.raw`\(\sin16^\circ-\sin76^\circ\)`, "5":String.raw`\(\sin164^\circ+\cos166^\circ\)` },
      solution: [String.raw`由餘函數關係，
      \[
      \sin16^\circ=\cos74^\circ,\qquad \sin76^\circ=\cos14^\circ，
      \]
      故（4）成立。又 \(\sin164^\circ=\sin16^\circ=\cos74^\circ\)，且 \(\cos166^\circ=-\cos14^\circ\)，所以（5）也成立。`],
      optionAnalysis: { "1":"固定為1/2，與原式不等。","2":"原式以和差化積為−2sin44°sin30°，符號相反。","3":"積化和後不是原來的餘弦差。","4":"利用sin(90°−θ)=cosθ逐項改寫。","5":"利用補角公式可化回cos74°−cos14°。" }
    },
    "84M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`等軸雙曲線 \(\Gamma\) 的一條漸近線為 \(x-y=0\)，中心為 \((1,1)\)，且通過 \((3,0)\)。哪些敘述正確？`,
      options: { "1":"Γ 的兩條漸近線互相垂直", "2":String.raw`\(x+y=0\) 是另一條漸近線`, "3":String.raw`Γ 的貫軸在直線 \(y=1\) 上`, "4":String.raw`\((1,\sqrt3-1)\) 是一個頂點`, "5":String.raw`\((1,\sqrt6-1)\) 是一個焦點` },
      solution: [String.raw`等軸雙曲線的兩條漸近線互相垂直，所以（1）正確。另一條漸近線須通過中心且斜率為 −1，方程式為 \(x+y=2\)，不是 \(x+y=0\)。

      以中心平移後可寫成
      \[
      (x-1)^2-(y-1)^2=3，
      \]
      因此貫軸為 \(y=1\)，（3）正確；頂點與焦點均位於此水平線上，故（4）（5）不正確。`],
      optionAnalysis: { "1":"等軸雙曲線的兩漸近線必互相垂直。","2":"另一漸近線應通過中心(1,1)，故為x+y=2。","3":"標準式的正項在(x−1)²，貫軸水平。","4":"此點與中心同x坐標，位於縱向而非貫軸。","5":"焦點應在水平貫軸y=1上。" }
    },
    "84M-11": {
      verified: true, sourcePage: 4,
      stem: "圖 3 中 ABCD 為正四面體，M 為 CD 的中點。下列哪些敘述正確？",
      options: { "1":"直線 CD 與平面 ABM 垂直", "2":"向量 AB 與向量 CD 垂直", "3":String.raw`\(\angle AMB>\angle ADB\)`, "4":"平面 ACD 與平面 BCD 的銳二面角大於 60°", "5":String.raw`\(\overline{BA}=\overline{BM}\)` },
      solution: [String.raw`正四面體的兩組對邊互相垂直，故 \(AB\perp CD\)；又 \(AM\perp CD\)，所以 \(CD\perp\) 平面 ABM，（1）（2）正確。

      設邊長為 1，則 \(AM=BM=\sqrt3/2\)。在三角形 AMB 中
      \[
      \cos\angle AMB=\frac{AM^2+BM^2-AB^2}{2AM\cdot BM}=\frac13，
      \]
      故 \(\angle AMB>60^\circ=\angle ADB\)，（3）正確。正四面體銳二面角亦為 \(\arccos(1/3)>60^\circ\)，（4）正確；而 \(BM=\sqrt3/2\ne BA=1\)，（5）錯。`],
      optionAnalysis: { "1":"CD同時垂直平面內相交的AB與AM。","2":"正四面體的相對兩邊互相垂直。","3":"cos∠AMB=1/3<1/2，所以角度大於60°。","4":"正四面體銳二面角為arccos(1/3)，大於60°。","5":"BM是正三角形高，長為邊長的√3/2。" }
    },
    "84M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`已知兩拋物線
      \[
      x=y^2+3y-2,\qquad y=x^2+kx+19
      \]
      有兩個交點在直線 \(x+y=3\) 上，求 \(k\)。`,
      solution: [String.raw`由 \(x=3-y\) 代入第一式：
      \[
      3-y=y^2+3y-2
      \Longleftrightarrow y^2+4y-5=0，
      \]
      得交點 \((x,y)=(2,1)、(8,-5)\)。將 \((2,1)\) 代入第二式：
      \[
      1=2^2+2k+19，
      \]
      所以 \(k=-11\)。`]
    },
    "84M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`已知
      \[
      P(x)=\sum_{i=0}^{10}(i+1)x^i,\qquad
      Q(x)=\sum_{i=0}^{5}(2i+1)x^{2i}。
      \]
      求 \(P(x)Q(x)\) 中 \(x^9\) 的係數。`,
      solution: [String.raw`要組成 \(x^9\)，Q 的次方可為 \(0、2、4、6、8\)。相應係數乘積為
      \[
      1\cdot10+3\cdot8+5\cdot6+7\cdot4+9\cdot2
      =10+24+30+28+18=110。
      \]`]
    },
    "84M-14": {
      verified: true, sourcePage: 4,
      stem: String.raw`林先生射中靶的機率為 \(\frac25\)，陳小姐射中的機率為 \(\frac12\)，且兩人是否射中互不影響。兩人各射一次，求只有陳小姐射中的機率。`,
      solution: [String.raw`林先生未射中的機率為 \(1-\frac25=\frac35\)。只有陳小姐射中表示林先生未中且陳小姐射中，因此
      \[
      \frac35\cdot\frac12=\frac3{10}。
      \]`]
    },
    "84M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`設 \(n\) 為自然數，滿足 \(10^{n-1}>9^n\) 的 \(n\) 值中，最小值為何？`,
      solution: [String.raw`不等式等價於
      \[
      \left(\frac{10}{9}\right)^n>10。
      \]
      取常用對數得
      \[
      n>\frac{1}{1-\log10 9}\approx21.85。
      \]
      因 \(n\) 是自然數，最小值為 \(22\)。`]
    },
    "84M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`四條直線
      \[
      L_1:x-y=1,\quad L_2:x+y=4,\quad L_3:8x+y=-10,\quad L_4:x=2
      \]
      圍出一個四邊形。求其較短的對角線長度。`,
      solution: [String.raw`依序求相鄰直線交點，可得四個頂點
      \[
      \left(\frac52,\frac32\right),(2,2),(2,-26),(-1,-2)。
      \]
      兩條對角線中，連接 \((2,2)\) 與 \((-1,-2)\) 的長度為
      \[
      \sqrt{(2+1)^2+(2+2)^2}=\sqrt{3^2+4^2}=5，
      \]
      另一條明顯較長，故答案為 5。`]
    },
    "84M-17": {
      verified: true, sourcePage: 5,
      stem: "岸上同一測點先測得汽艇在正前方偏左 50°、距離 200 公尺；一分鐘後測得在正前方偏右 70°、距離 300 公尺。求汽艇一分鐘內行駛的距離。",
      solution: [String.raw`兩次視線的夾角為 \(50^\circ+70^\circ=120^\circ\)。由餘弦定理，
      \[
      d^2=200^2+300^2-2(200)(300)\cos120^\circ
      =190000，
      \]
      所以 \(d=100\sqrt{19}\) 公尺。`]
    },
    "84M-18": {
      verified: true, sourcePage: 5,
      stem: "某鎮人口逐年成等比數列，十年前有 25 萬人，現在有 30 萬人。依相同比率，二十年後人口約有多少萬人？求到小數點後一位。",
      solution: [String.raw`每十年的成長倍率為
      \[
      \frac{30}{25}=1.2。
      \]
      二十年包含兩個十年期，所以人口為
      \[
      30(1.2)^2=43.2
      \]
      萬人。`]
    },
    "84M-19": {
      verified: true, sourcePage: 5,
      stem: String.raw`設
      \[
      f(x)=(\sin x+\cos x)^2+4(\sin x+\cos x)，
      \]
      求 \(f(x)\) 的最小值。`,
      solution: [String.raw`令 \(t=\sin x+\cos x\)，則 \(-\sqrt2\le t\le\sqrt2\)，且
      \[
      f=t^2+4t=(t+2)^2-4。
      \]
      此式在區間上隨 \(t\) 遞增，所以最小值在 \(t=-\sqrt2\) 時取得：
      \[
      f_{\min}=2-4\sqrt2。
      \]`]
    },
    "84M-20": {
      verified: true, sourcePage: 5,
      stem: String.raw`以 \(xy\) 平面為鏡面，光線通過 \(P(1,2,1)\) 射向 \(O(0,0,0)\)，反射後通過 \(R\)。若 \(\overline{OR}=2\overline{PO}\)，求 \(R\) 的坐標。`,
      solution: [String.raw`入射方向 \(\overrightarrow{PO}=(-1,-2,-1)\)。經 \(xy\) 平面反射後，x、y 分量不變而 z 分量反號，故反射方向為 \((-1,-2,1)\)。又
      \[
      \lVert(-1,-2,1)\rVert=\overline{PO}，
      \]
      且 \(\overline{OR}=2\overline{PO}\)，所以
      \[
      \overrightarrow{OR}=2(-1,-2,1)=(-2,-4,2)。
      \]
      因 O 是原點，\(R=(-2,-4,2)\)。`]
    }
  });
})();
