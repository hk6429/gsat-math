(() => {
  Object.assign(window.MATH_CONTENT, {
    "92M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`有多少個正整數 \(n\)，使
      \[
      \frac1n+\frac2n+\cdots+\frac{10}{n}
      \]
      為整數？`,
      options: { "1":"1 個", "2":"2 個", "3":"3 個", "4":"4 個", "5":"5 個" },
      solution: [String.raw`原式為
      \[
      \frac{1+2+\cdots+10}{n}=\frac{55}{n}。
      \]
      要成為整數，正整數 n 必須是 55 的正因數。因 \(55=5\cdot11\)，其正因數為 \(1,5,11,55\)，共 4 個。`],
      optionAnalysis: { "1":"漏列 55 的其他正因數。","2":"只列質因數 5、11，漏掉 1、55。","3":"仍少一個正因數。","4":"正因數 1、5、11、55 共四個。","5":"55 沒有第五個正因數。" }
    },
    "92M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`若 \(f(x)=x^3-2x^2-x+5\)，求 \(g(x)=f(f(x))\) 除以 \(x-2\) 的餘式。`,
      options: { "1":"3", "2":"5", "3":"7", "4":"9", "5":"11" },
      solution: [String.raw`由餘式定理，所求餘式為 \(g(2)=f(f(2))\)。先算
      \[
      f(2)=8-8-2+5=3，
      \]
      再算
      \[
      f(3)=27-18-3+5=11。
      \]`],
      optionAnalysis: { "1":"只是中間值 f(2)。","2":"誤取常數項。","3":"不符合兩次代入結果。","4":"複合計算有誤。","5":"f(f(2))=f(3)=11。" }
    },
    "92M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`若 \((4+3i)(\cos\theta+i\sin\theta)\) 是小於 0 的實數，判斷 \(\theta\) 是第幾象限角。`,
      options: { "1":"第一象限角", "2":"第二象限角", "3":"第三象限角", "4":"第四象限角", "5":"條件不足，無法判斷" },
      solution: [String.raw`複數 \(4+3i\) 的輻角 \(\alpha\) 在第一象限。乘積為負實數表示兩輻角相加等於 \(\pi\pmod{2\pi}\)，所以
      \[
      \theta=\pi-\alpha\pmod{2\pi}，
      \]
      其終邊位於第二象限。`],
      optionAnalysis: { "1":"與第一象限角相加仍不會指向負實軸。","2":"π 減去第一象限角落在第二象限。","3":"輻角和會超過負實軸方向。","4":"不能使乘積輻角為 π。","5":"4+3i 的輻角象限已足以判斷。" }
    },
    "92M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`三角形 \(ABC\) 中，點 \(P\) 滿足
      \[
      \overrightarrow{AP}=\frac15\overrightarrow{AB}+\frac25\overrightarrow{AC}。
      \]
      求 \(\frac{[\triangle ABP]}{[\triangle ABC]}\)。`,
      options: { "1":String.raw`\(\frac15\)`, "2":String.raw`\(\frac14\)`, "3":String.raw`\(\frac25\)`, "4":String.raw`\(\frac12\)`, "5":String.raw`\(\frac23\)` },
      solution: [String.raw`以 AB 為共同底邊時，P 相對直線 AB 的高度只來自 \(\frac25\overrightarrow{AC}\) 的垂直分量，因此
      \[
      \frac{[\triangle ABP]}{[\triangle ABC]}=\frac25。
      \]`],
      optionAnalysis: { "1":"把 AB 方向的係數誤當面積比。","2":"不是兩係數相乘。","3":"AC 方向係數決定相對 AB 的高度比。","4":"高估 P 的高度。","5":"把兩個向量係數相加。" }
    },
    "92M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`訊息發布後 t 小時內，聽到訊息的人口百分比為 \(100(1-2^{-kt})\%\)，其中 \(k>0\)。若 3 小時內已有 70% 聽到，最快達到 99% 所需的時間 \(T\) 最接近何者？`,
      options: { "1":String.raw`\(5\frac12\) 小時`, "2":"7 小時", "3":"9 小時", "4":String.raw`\(11\frac12\) 小時`, "5":"13 小時" },
      solution: [String.raw`由 3 小時達 70% 得 \(2^{-3k}=0.3\)；達 99% 時 \(2^{-kT}=0.01\)。兩式取對數相除：
      \[
      \frac{T}{3}=\frac{\log0.01}{\log0.3}\approx3.824，
      \]
      所以 \(T\approx11.47\) 小時，最接近 \(11\frac12\) 小時。`],
      optionAnalysis: { "1":"只約為所需時間的一半。","2":"尚未達 99%。","3":"指數衰減的剩餘未聞比例仍高於 1%。","4":"計算約 11.47 小時。","5":"比最快所需時間多約 1.5 小時。" }
    },
    "92M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`如原圖，兩直線
      \[
      L_1:x+ay+b=0,\qquad L_2:x+cy+d=0
      \]
      均為正斜率，\(L_1\) 較陡；\(L_1\) 的 y 截距為負，\(L_2\) 的 y 截距為正。選出正確敘述。`,
      options: { "1":String.raw`\(a>0\)`, "2":String.raw`\(b>0\)`, "3":String.raw`\(c>0\)`, "4":String.raw`\(d>0\)`, "5":String.raw`\(a>c\)` },
      solution: [String.raw`兩直線斜率分別是 \(-1/a、-1/c\)。圖中兩斜率為正，故 \(a,c<0\)。y 截距分別是 \(-b/a、-d/c\)；因分母為負，其截距與 b、d 同號，所以 \(b<0、d>0\)。`, String.raw`又 \(L_1\) 較陡，\(-1/a>-1/c\)。在 \(a,c<0\) 下可得 \(a>c\)。故（4）（5）正確。`],
      optionAnalysis: { "1":"正斜率要求 a<0。","2":"L₁ 的 y 截距為負，因此 b<0。","3":"正斜率要求 c<0。","4":"L₂ 的 y 截距為正，因此 d>0。","5":"L₁ 較陡且 a、c 皆負，故 a>c。" }
    },
    "92M-7": {
      verified: true, sourcePage: 3,
      stem: String.raw`平行六面體 \(ABCD\text{-}EFGH\) 中，\(J\) 為面 \(BCGF\) 的中心。若
      \[
      \overrightarrow{AJ}=a\overrightarrow{AB}+b\overrightarrow{AD}+c\overrightarrow{AE}，
      \]
      判斷正確敘述。`,
      options: { "1":String.raw`\(\frac13<b<\frac23\)`, "2":String.raw`\(a+b+c=2\)`, "3":String.raw`\(a=1\)`, "4":String.raw`\(a=2c\)`, "5":String.raw`\(a=b\)` },
      solution: [String.raw`面 \(BCGF\) 的四點向量為
      \[
      B=\overrightarrow{AB},\ C=\overrightarrow{AB}+\overrightarrow{AD},\
      F=\overrightarrow{AB}+\overrightarrow{AE},\
      G=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AE}。
      \]
      中心 J 為四點平均，故
      \[
      \overrightarrow{AJ}=\overrightarrow{AB}+\frac12\overrightarrow{AD}+\frac12\overrightarrow{AE}。
      \]
      因此 \(a=1、b=c=1/2\)，（1）（2）（3）（4）成立。`],
      optionAnalysis: { "1":"b=1/2，介於 1/3 與 2/3。","2":"1+1/2+1/2=2。","3":"AB 方向係數為 1。","4":"2c=1=a。","5":"a=1、b=1/2，不相等。" }
    },
    "92M-8": {
      verified: true, sourcePage: 3,
      stem: "下列各選項中的數哪些為正？請選出所有符合者。",
      options: { "1":String.raw`\(\sqrt2-\sqrt[3]2\)`, "2":String.raw`\(\log_2 3-1\)`, "3":String.raw`\(\log_3 2-1\)`, "4":String.raw`\(\log_{\frac12}3\)`, "5":String.raw`\(\log_{\frac13}\frac12\)` },
      solution: ["因 √2>∛2，故（1）為正。因 3>2，log₂3>1，故（2）為正；因 2<3，log₃2<1，故（3）為負。", "底數 1/2 介於 0、1，真數 3>1，所以（4）為負。（5）的底數與真數都介於 0、1，對數為正。故答案為（1）（2）（5）。"],
      optionAnalysis: { "1":"同為 2 的正冪，1/2 次方大於 1/3 次方。","2":"log₂3>log₂2=1。","3":"log₃2<log₃3=1。","4":"底數小於 1，真數大於 1，值為負。","5":"ln(1/2) 與 ln(1/3) 都為負，商為正。" }
    },
    "92M-9": {
      verified: true, sourcePage: 3,
      stem: "下列哪些函數的最小正週期為 π？請選出所有符合者。",
      options: { "1":String.raw`\(\sin x+\cos x\)`, "2":String.raw`\(\sin x-\cos x\)`, "3":String.raw`\(|\sin x+\cos x|\)`, "4":String.raw`\(|\sin x-\cos x|\)`, "5":String.raw`\(|\sin x|+|\cos x|\)` },
      solution: [String.raw`（1）（2）都可化為振幅乘 \(\sin(x+\phi)\)，最小正週期是 \(2\pi\)。加上絕對值後，函數在平移 \(\pi\) 時只改變整體符號，絕對值不變，所以（3）（4）的最小正週期為 \(\pi\)。`, String.raw`（5）平移 \(\pi/2\) 時正弦與餘弦的絕對值互換，函數已不變，因此最小正週期為 \(\pi/2\)，不是 \(\pi\)。`],
      optionAnalysis: { "1":"最小正週期為 2π。","2":"最小正週期為 2π。","3":"平移 π 後括號內變號，絕對值不變。","4":"同理最小正週期為 π。","5":"最小正週期更短，為 π/2。" }
    },
    "92M-10": {
      verified: true, sourcePage: 4,
      stem: String.raw`非空集合 \(S\) 中的點 \((x,y)\) 皆滿足命題：「若 \(x>0\)，則 \(y>0\)。」選出必然成立的敘述。`,
      options: { "1":String.raw`若 \(x\le0\)，則 \(y\le0\)`, "2":String.raw`若 \(y\le0\)，則 \(x\le0\)`, "3":String.raw`若 \(y>0\)，則 \(x>0\)`, "4":String.raw`若 \(x>1\)，則 \(y>0\)`, "5":String.raw`若 \(y<0\)，則 \(x\le0\)` },
      solution: ["原命題的逆否命題是「若 y≤0，則 x≤0」，故（2）成立。（4）中 x>1 可推出 x>0，再由原命題得 y>0。（5）中 y<0 可推出 y≤0，再用逆否命題得 x≤0。故（2）（4）（5）成立。"],
      optionAnalysis: { "1":"這是原命題的逆命題變形，不必然成立。","2":"是原命題的逆否命題。","3":"是原命題的逆命題，不必然成立。","4":"x>1 蘊含 x>0。","5":"y<0 蘊含 y≤0，再套用逆否命題。" }
    },
    "92M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`坐標空間中有
      \[
      \pi_a:x-4y+az=10,\quad E_1:x-2y+z=5,\quad E_2:2x-5y+4z=-3，
      \]
      其中 a 為實數。判斷哪些敘述正確。`,
      options: {
        "1":"存在 a 使 πₐ 與 E₁ 平行",
        "2":"存在 a 使 πₐ 與 E₁ 垂直",
        "3":"存在 a 使三平面交於一點",
        "4":"存在 a 使三平面交於一直線",
        "5":"存在 a 使三平面沒有共同交點"
      },
      solution: [String.raw`法向量分別為
      \[
      n_a=(1,-4,a),\ n_1=(1,-2,1),\ n_2=(2,-5,4)。
      \]
      \(n_a\) 不可能與 \(n_1\) 成比例，故（1）錯；取 \(a=-9\) 時 \(n_a\cdot n_1=0\)，故（2）對。三法向量行列式為 \(5-a\)，取任一 \(a\ne5\) 即有唯一交點，故（3）對。`, String.raw`當 \(a=5\) 時 \(n_a=-3n_1+2n_2\)，但常數 \(10\ne-3(5)+2(-3)=-21\)，所以三式不相容、沒有共同點。故（5）對而（4）錯。`],
      optionAnalysis: { "1":"前兩法向量的前兩分量比例已不一致。","2":"a=−9 時法向量內積為 0。","3":"a≠5 時行列式非零，唯一交點存在。","4":"唯一法向量相依的 a=5 會造成不相容，不是共同直線。","5":"a=5 時法向量關係與常數關係矛盾。" }
    },
    "92M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`數列 \(a_1,\ldots,a_{50}\) 的每項都取自 \(-1,0,1\)，且
      \[
      \sum a_i=9,\qquad \sum(a_i+1)^2=107。
      \]
      問其中有幾項為 0。`,
      solution: [String.raw`設取值 1、0、−1 的項數分別為 \(x,y,z\)。則
      \[
      x+y+z=50,\quad x-z=9,\quad4x+y=107。
      \]
      由 \(z=x-9、y=59-2x\)，代入第三式得 \(59+2x=107\)，所以 \(x=24、y=11、z=15\)。故有 11 項為 0。`]
    },
    "92M-13": {
      verified: true, sourcePage: 5,
      stem: "四位數密碼由兩個 3、一個 8、一個 9 組成。將這四個數字隨意排列並只猜一次，成功機率是多少？",
      solution: [String.raw`不同排列數為
      \[
      \frac{4!}{2!}=12。
      \]
      只有其中一個排列是正確密碼，所以成功機率為 \(\frac1{12}\)。`]
    },
    "92M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`\(A=(1,0)、B=(b,0)\)，其中 \(b>1\)。若拋物線 \(y^2=4x\) 上有一點 \(P\)，使 \(\triangle ABP\) 為正三角形，求 b。`,
      solution: [String.raw`正三角形第三點可寫成
      \[
      P=\left(\frac{1+b}{2},\frac{\sqrt3}{2}(b-1)\right)。
      \]
      代入 \(y^2=4x\)：
      \[
      \frac34(b-1)^2=2(1+b)
      \Rightarrow 3b^2-14b-5=0。
      \]
      解得 \(b=5\) 或 \(-1/3\)，由 \(b>1\) 得 \(b=5\)。`]
    },
    "92M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`第一象限的點 \(P\) 在雙曲線
      \[
      \frac{x^2}{9}-\frac{y^2}{16}=1
      \]
      上。兩焦點為 \(F_1,F_2\)，且 \(PF_1:PF_2=1:3\)，求 \(\triangle F_1PF_2\) 周長。`,
      solution: [String.raw`雙曲線有 \(a=3、b=4、c=5\)，故焦距 \(F_1F_2=10\)，兩焦半徑之差為 \(2a=6\)。設兩焦半徑為 \(d、3d\)，則
      \[
      3d-d=6\Rightarrow d=3。
      \]
      三邊為 3、9、10，周長為 \(22\)。`]
    },
    "92M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`通過 \(O=(0,0,0)、N=(0,0,1)、P=(\frac14,\frac{\sqrt{11}}4,-\frac12)\) 的平面與單位球面 \(x^2+y^2+z^2=1\) 相交成圓 C，求 C 上劣弧 \(\widehat{NP}\) 的弧長。`,
      solution: [String.raw`截平面通過球心 O，所以 C 是半徑 1 的大圓。N、P 都是單位向量，且
      \[
      \overrightarrow{ON}\cdot\overrightarrow{OP}=-\frac12。
      \]
      因此兩向量夾角為 \(\arccos(-1/2)=2\pi/3\)。半徑為 1，故劣弧長為 \(\frac{2\pi}{3}\)。`]
    },
    "92M-17": {
      verified: true, sourcePage: 6,
      stem: String.raw`整數 k 使方程 \(kx^2+7x+1=0\) 有兩個相異實根，且兩根乘積介於 \(\frac5{71}\) 與 \(\frac6{71}\) 之間。求 k。`,
      solution: [String.raw`根的乘積為 \(1/k\)，所以
      \[
      \frac5{71}<\frac1k<\frac6{71}
      \Rightarrow \frac{71}{6}<k<\frac{71}{5}。
      \]
      候選整數為 12、13、14。又兩相異實根要求判別式
      \[
      49-4k>0，
      \]
      只有 \(k=12\) 符合。`]
    },
    "92M-18": {
      verified: true, sourcePage: 6,
      stem: "拋物線形拱門以過最高點的鉛垂線為對稱軸。底部寬 6 公尺，距底部 3/2 公尺高處寬 5 公尺，求拱門高度。",
      solution: [String.raw`以中央鉛垂線為 y 軸、底部為 \(y=0\)，設拋物線為 \(y=H-ax^2\)。底部半寬 3，故 \(H=9a\)。在 \(y=3/2\) 時半寬 \(5/2\)，所以
      \[
      \frac32=H-\frac{25}{4}a=9a-\frac{25}{4}a=\frac{11}{4}a。
      \]
      得 \(a=6/11\)，故 \(H=9a=\frac{54}{11}\) 公尺。`]
    },
    "92M-19": {
      verified: true, sourcePage: 6,
      stem: "25 題五選一測驗，答對得 4 分、答錯倒扣 1 分。學生確定答對 16 題；另 6 題排除兩個錯誤選項後從剩下三個猜；最後 3 題從五個選項亂猜。求總分期望值。",
      solution: [String.raw`確定答對部分得 \(16\cdot4=64\) 分。三選一猜題每題期望值
      \[
      \frac13(4)+\frac23(-1)=\frac23，
      \]
      六題共 4 分。五選一亂猜每題期望值
      \[
      \frac15(4)+\frac45(-1)=0。
      \]
      總期望值為 \(64+4=68\) 分。`]
    },
    "92M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`台北一月平均氣溫為攝氏 16 度，標準差為攝氏 3.5 度。以 \(y=\frac95x+32\) 換算為華氏，求華氏平均數與標準差。`,
      solution: [String.raw`線性轉換的平均數依同式轉換：
      \[
      \bar y=\frac95(16)+32=60.8。
      \]
      加上常數不影響標準差，乘 \(\frac95\) 則標準差同倍放大：
      \[
      S_y=\frac95(3.5)=6.3。
      \]
      因此平均為華氏 60.8 度，標準差為華氏 6.3 度。`]
    }
  });
})();
