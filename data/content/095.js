(() => {
  Object.assign(window.MATH_CONTENT, {
    "95M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`整係數二次方程 \(ax^2+bx+c=0\) 有一根 \(4+3i\)。將兩根與原點畫在複數平面，求三點所成三角形面積。`,
      options: { "1": "5", "2": "6", "3": "12", "4": "16", "5": "24" },
      solution: [String.raw`實係數方程的另一根是 \(4-3i\)，兩點坐標為 \((4,3),(4,-3)\)。以長 6 的垂直線段為底，原點到直線 \(x=4\) 的高為 4，所以面積
      \[
      \frac12\cdot6\cdot4=12。
      \]`],
      optionAnalysis: { "1":"不是底乘高的一半。","2":"只取了兩複根的距離。","3":"底 6、高 4，面積為 12。","4":"誤以實部與虛部乘積直接作面積。","5":"漏除以 2。" }
    },
    "95M-2": {
      verified: true, sourcePage: 1,
      stem: "在 4×4 棋盤的 16 個格子中，隨機任取兩個不同格子。求兩格不在同行（是否同列不拘）的機率。",
      options: { "1": String.raw`\(\frac1{20}\)`, "2": String.raw`\(\frac14\)`, "3": String.raw`\(\frac34\)`, "4": String.raw`\(\frac35\)`, "5": String.raw`\(\frac45\)` },
      solution: [String.raw`全部取法有 \(\binom{16}{2}=120\) 種。同一行有 4 行，每行 \(\binom42=6\) 對，共 24 對。因此
      \[
      P(\text{不同行})=1-\frac{24}{120}=\frac45。
      \]`],
      optionAnalysis: { "1":"同一特定格的比例不是所求。","2":"是同行機率，不是不同行。","3":"若獨立抽列可能誤得此值。","4":"未排除不放回的配對結構。","5":"120 對中有 96 對不同行。" }
    },
    "95M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`三個直角三角形依原圖堆疊：\(\angle AOB=15^\circ、\angle BOC=15^\circ、\angle COD=30^\circ\)，且 \(AB\perp OA、BC\perp OB、CD\perp OC、OD=8\)。求 AB。`,
      options: { "1":"1", "2":String.raw`\(\sqrt6-\sqrt2\)`, "3":String.raw`\(\sqrt7-1\)`, "4":String.raw`\(\sqrt3\)`, "5":"2" },
      solution: [String.raw`逐層投影：
      \[
      OC=8\cos30^\circ,\qquad OB=OC\cos15^\circ。
      \]
      最內層 \(AB=OB\sin15^\circ\)，故
      \[
      AB=8\cos30^\circ\cos15^\circ\sin15^\circ
      =8\frac{\sqrt3}{2}\frac{\sin30^\circ}{2}
      =\sqrt3。
      \]`],
      optionAnalysis: { "1":"低估三層投影所得高度。","2":"是其他特殊角組合，非此乘積。","3":"不符合投影關係。","4":"利用二倍角化簡得到 √3。","5":"高估 AB。" }
    },
    "95M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`下列哪個數值最接近 \(\sqrt2\)？`,
      options: {
        "1":String.raw`\(\sqrt3\cos44^\circ+\sin44^\circ\)`,
        "2":String.raw`\(\sqrt3\cos54^\circ+\sin54^\circ\)`,
        "3":String.raw`\(\sqrt3\cos64^\circ+\sin64^\circ\)`,
        "4":String.raw`\(\sqrt3\cos74^\circ+\sin74^\circ\)`,
        "5":String.raw`\(\sqrt3\cos84^\circ+\sin84^\circ\)`
      },
      solution: [String.raw`利用
      \[
      \sqrt3\cos\theta+\sin\theta=2\cos(\theta-30^\circ)。
      \]
      而 \(\sqrt2=2\cos45^\circ\)，故 \(\theta\) 應最接近 \(75^\circ\)。五個角中 \(74^\circ\) 最近。`],
      optionAnalysis: { "1":"對應 cos14°，太大。","2":"對應 cos24°，太大。","3":"對應 cos34°，仍偏大。","4":"對應 cos44°，最接近 cos45°。","5":"對應 cos54°，偏小。" }
    },
    "95M-5": {
      verified: true, sourcePage: 2,
      stem: "細菌 A 每 2 小時變 2 倍，B 每 3 小時變 3 倍，初始數量相同。約幾小時後 B 數量除以 A 數量最接近 10？",
      options: { "1":"24 小時", "2":"48 小時", "3":"69 小時", "4":"96 小時", "5":"117 小時" },
      solution: [String.raw`經 t 小時比值為 \(3^{t/3}/2^{t/2}\)。令其為 10，取常用對數：
      \[
      t\left(\frac{\log3}{3}-\frac{\log2}{2}\right)=1。
      \]
      代入 \(\log3\approx0.4771、\log2\approx0.3010\)，得 \(t\approx117.2\)，最接近 117 小時。`],
      optionAnalysis: { "1":"比值尚未接近 10。","2":"成長差累積不足。","3":"仍低於所需時間。","4":"接近但尚非最佳近似。","5":"對數估計約 117.2 小時。" }
    },
    "95M-6": {
      verified: true, sourcePage: 2,
      stem: "正整數 a、b、c 滿足 gcd(a,b)=25，且 3、4、14 都是 b、c 的公因數。選出正確敘述。",
      options: {
        "1":"c 一定可被 56 整除","2":String.raw`\(b\ge2100\)`,
        "3":"若 a≤100，則 a=25","4":"gcd(a,b,c) 是 25 的因數",
        "5":String.raw`\(\operatorname{lcm}(a,b,c)\ge25\cdot3\cdot4\cdot14\)`
      },
      solution: [String.raw`因 \(84=\operatorname{lcm}(3,4,14)\) 整除 b、c，而 25 整除 b，所以 \(\operatorname{lcm}(25,84)=2100\mid b\)，故（2）。三數公因數必整除 gcd(a,b)=25，故（4）。`, "a 是 25 的倍數；若 a≤100 而含 2 或 3 等額外因數，會與必被 2100 整除的 b 產生大於 25 的公因數，因此只能 a=25，故（3）。84 不必被 56 整除；最小公倍數下界是 2100，不是 4200。"],
      optionAnalysis: { "1":"c 只保證被 84 整除，84 不被 56 整除。","2":"b 同時被 25、84 整除，至少 2100。","3":"其餘 25 的倍數會和 b 多出共同因數。","4":"三數公因數必整除前兩數 gcd。","5":"正確必要下界為 lcm(25,84)=2100。" }
    },
    "95M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`考慮滿足
      \[
      \sqrt{(x-2)^2+y^2}+\sqrt{(x-2)^2+(y+4)^2}=10
      \]
      的點所成圖形，選出正確敘述。`,
      options: { "1":"圖形為橢圓","2":"圖形為雙曲線","3":"中心在 (2,-2)","4":String.raw`對稱於 \(x=2\)`, "5":"有一頂點 (2,3)" },
      solution: [String.raw`兩根式是到焦點 \((2,0),(2,-4)\) 的距離，距離和固定 10，所以是橢圓。中心為焦點中點 \((2,-2)\)，長軸垂直且 \(a=5\)，頂點為 \((2,3),(2,-7)\)，並對稱於 \(x=2\)。`],
      optionAnalysis: { "1":"到兩焦點距離和固定，為橢圓。","2":"雙曲線是距離差固定。","3":"焦點中點即中心。","4":"垂直長軸也是對稱軸。","5":"中心向上 5 得頂點 (2,3)。" }
    },
    "95M-8": {
      verified: true, sourcePage: 2,
      stem: String.raw`實數 \(a_1,a_2,a_3,a_4\) 為等差數列，\(0<a_1<2、a_3=4\)，定義 \(b_n=2^{a_n}\)。選出正確敘述。`,
      options: { "1":"b₁～b₄ 為等比數列","2":String.raw`\(b_1<b_2\)`, "3":String.raw`\(b_2>4\)`, "4":String.raw`\(b_4>32\)`, "5":String.raw`\(b_2b_4=256\)` },
      solution: [String.raw`等差指數經固定底數指數化後形成等比數列。公差 \(d=(4-a_1)/2\) 介於 1、2，所以數列遞增；\(a_2=(a_1+4)/2>2\)，故 \(b_2>4\)；\(a_4=4+d>5\)，故 \(b_4>32\)。`, String.raw`等差數列有 \(a_2+a_4=2a_3=8\)，所以 \(b_2b_4=2^8=256\)。五項全正確。`],
      optionAnalysis: { "1":"相鄰 b 的比為固定的 2^d。","2":"公差 d>0，故遞增。","3":"a₂>2。","4":"a₄>5。","5":"指數和為 8，乘積為 256。" }
    },
    "95M-9": {
      verified: true, sourcePage: 3,
      stem: "三次多項式 f 的三次項係數為 3、一次項係數為 2。甲誤把三次項係數看成 2，乙誤把一次項係數看成 −2，兩人除以一次式 g 所得餘式相同。求可能的 g。",
      options: { "1":String.raw`\(x\)`, "2":String.raw`\(x-1\)`, "3":String.raw`\(x-2\)`, "4":String.raw`\(x+1\)`, "5":String.raw`\(x+2\)` },
      solution: [String.raw`設 \(g=x-r\)。甲所見多項式為 \(f-x^3\)，乙所見為 \(f-4x\)。餘式相同表示
      \[
      f(r)-r^3=f(r)-4r，
      \]
      故 \(r(r-2)(r+2)=0\)。所以 \(r=0,2,-2\)，對應（1）（3）（5）。`],
      optionAnalysis: { "1":"r=0 符合。","2":"r=1 不滿足 r³=4r。","3":"r=2 符合。","4":"r=-1 不符合。","5":"r=-2 符合。" }
    },
    "95M-10": {
      verified: true, sourcePage: 3,
      stem: "100 名婦女體重直方圖的平均數為 55、標準差 12.5；同參數常態曲線為 N。圖中六組相對次數依序為 20%、33%、24%、12%、6%、5%。選出正確敘述。",
      options: {
        "1":"N 中 55 公斤以上約 50%","2":"N 中 80 公斤以上約 2.5%",
        "3":"樣本中位數大於 55","4":"樣本第一四分位數大於 45",
        "5":"樣本超過 80 公斤的比例大於或等於 5%"
      },
      solution: ["常態分布以平均數對稱，故（1）。80=55+2(12.5)，常態分布在平均數加兩標準差以上約占 2.5%，故（2）。", "依直方圖累積比例，第一組僅 20%，第一四分位數落在下一組且大於 45，故（4）。超過 80 公斤的圖示比例至少包含後段 6% 與 5%，故（5）。中位數所在組跨越 55，不能推出必大於 55。"],
      optionAnalysis: { "1":"常態曲線左右對稱。","2":"兩標準差外單側約 2.5%。","3":"分組資料不足以保證中位數大於 55。","4":"45 以下累積不足 25%。","5":"圖中 80 公斤以上至少占 11%。" }
    },
    "95M-11": {
      verified: true, sourcePage: 4,
      stem: "把 n 分解為最接近的因數對 p×q（p≤q），定義 F(n)=p/q。選出正確敘述。",
      options: { "1":String.raw`\(F(4)=1\)`, "2":String.raw`\(F(24)=3/8\)`, "3":String.raw`\(F(27)=1/3\)`, "4":"質數 n 有 F(n)=1/n", "5":"完全平方數 n 有 F(n)=1" },
      solution: ["4 的最佳分解為 2×2；24 為 4×6，所以 F(24)=2/3；27 為 3×9。質數只有 1×n；完全平方數最佳因數對為 √n×√n。故（1）（3）（4）（5）正確。"],
      optionAnalysis: { "1":"2/2=1。","2":"最佳分解是 4×6，不是 3×8。","3":"3/9=1/3。","4":"質數只能分解成 1×n。","5":"兩因數皆為 √n。" }
    },
    "95M-12": {
      verified: true, sourcePage: 4,
      stem: "1000 個兩孩家庭樣本中：（男男）261、（男女）249、（女男）255、（女女）235。估計男、女性別比為多少比 100？",
      solution: [String.raw`男孩數 \(=2(261)+249+255=1026\)，女孩數 \(=249+255+2(235)=974\)。故
      \[
      \frac{1026}{974}\times100\approx105.34，
      \]
      四捨五入得 \(105:100\)。`]
    },
    "95M-13": {
      verified: true, sourcePage: 5,
      stem: "正立方體邊長任取為 1。M 在 AB 上且 BM=2AM，N 為 BC 中點；O 為 A 正下方的頂點。求 cos∠MON。",
      solution: [String.raw`取 \(O=(0,0,0)、A=(0,0,1)、B=(1,0,1)、C=(1,1,1)\)，則
      \[
      M=(1/3,0,1),\quad N=(1,1/2,1)。
      \]
      由內積
      \[
      \cos\angle MON=\frac{OM\cdot ON}{|OM||ON|}
      =\frac{4/3}{(\sqrt{10}/3)(3/2)}
      =\frac{4\sqrt{10}}{15}。
      \]`]
    },
    "95M-14": {
      verified: true, sourcePage: 5,
      stem: "三點為 (−6,−2)、(2,−1)、(1,2)。若第四點與它們形成菱形，求第四點坐標。",
      solution: ["由距離可知從 (−6,−2) 到另外兩點的距離同為 √65，因此該點為菱形一頂點。第四點為兩相鄰頂點和減共同頂點：\((2,-1)+(1,2)-(-6,-2)=(9,3)\)。"]
    },
    "95M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`圓內接四邊形 ABCD 中，\(\angle DBC=30^\circ、\angle ABD=45^\circ、CD=6\)，求 AD。`,
      solution: [String.raw`弦 CD 對圓周角 30°，由正弦定理 \(CD=2R\sin30^\circ\) 得外接圓半徑 \(R=6\)。弦 AD 對圓周角 45°，故
      \[
      AD=2R\sin45^\circ=12\frac{\sqrt2}{2}=6\sqrt2=\sqrt{72}。
      \]`]
    },
    "95M-16": {
      verified: true, sourcePage: 5,
      stem: "八款鞋價格依序為 670、670、700、700、700、800、800、800。買一送一規定贈鞋價格必須低於購鞋價格，求兩款搭配方法數。",
      solution: ["買 700 元款有 3 種，贈 670 元款有 2 種，共 6 種；買 800 元款有 3 種，可贈五款較低價鞋，共 15 種。總計 \(6+15=21\) 種。"]
    },
    "95M-17": {
      verified: true, sourcePage: 6,
      stem: "9 個頻道分配給 3 個新聞台、4 個綜藝台、2 個體育台；同類型頻道相鄰，且前兩頻道保留給體育台。求分配方式。",
      solution: [String.raw`兩體育台在前兩頻道可排 \(2!\) 種。後面新聞與綜藝兩區塊次序有 \(2!\) 種，區塊內分別有 \(3!、4!\) 種。因此
      \[
      2!\cdot2!\cdot3!\cdot4!=576。
      \]`]
    },
    "95M-18": {
      verified: true, sourcePage: 6,
      stem: "第 n 個黑白地磚圖形有 3 列、2n+1 行，中列交錯放置 n 塊黑磚，其餘為白磚。求第 95 個圖形的白磚數。",
      solution: [String.raw`總磚數為 \(3(2n+1)\)，黑磚 n 塊，故白磚
      \[
      3(2n+1)-n=5n+3。
      \]
      代入 \(n=95\) 得 \(475+3=478\)。`]
    },
    "95M-19": {
      verified: true, sourcePage: 6,
      stem: "三角形 ABC 中 D 在 BC 上，AB=7、AC=13、BD=7、CD=8，求 AD。",
      solution: [String.raw`\(BC=15\)。由 Stewart 定理：
      \[
      13^2(7)+7^2(8)=15(AD^2+7\cdot8)。
      \]
      左式為 1575，故 \(AD^2+56=105\)，得到 \(AD=7\)。`]
    },
    "95M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`矩形頂點 \(A(0,0)、B(10,0)、C(10,6)、D(0,6)\)。直線 \(y=m(x-7)+4\) 將矩形分成等面積兩塊，求 m。`,
      solution: [String.raw`矩形是中心對稱圖形，任何通過中心 \((5,3)\) 的直線都將面積平分。代入題給直線：
      \[
      3=m(5-7)+4，
      \]
      所以 \(-2m=-1\)，得 \(m=1/2\)。`]
    }
  });
})();
