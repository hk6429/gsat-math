(() => {
  Object.assign(window.MATH_CONTENT, {
    "111A-1": {
      verified: true, sourcePage: 1,
      stem: "某冰淇淋店最少需準備 n 桶不同口味，才能使任選兩球不同口味的組合超過 100 種。若顧客從這 n 桶任選兩球，且可選同一口味，共有幾種方法？",
      options: { "1": "101", "2": "105", "3": "115", "4": "120", "5": "225" },
      solution: [
        String.raw`先求最小 \(n\)：\(\binom n2>100\)。因 \(\binom{14}2=91、\binom{15}2=105\)，故 \(n=15\)。`,
        String.raw`允許兩球同口味，等同從 15 種口味可重複選 2 種：
        \[
        \binom{15+2-1}{2}=\binom{16}{2}=120。
        \]`
      ],
      optionAnalysis: {
        "1": "只取「超過 100」的最小整數，未依口味組合計數。",
        "2": "這是 15 種口味選兩種不同口味的數量，漏掉同口味。",
        "3": "未正確使用可重複組合公式。",
        "4": String.raw`\(\binom{16}{2}=120\)，包含 15 種同口味組合。`,
        "5": "把兩球先後次序算入，且未排除重複。"
      }
    },
    "111A-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`計算 \(\log_a b\) 時誤把順序按成 \(\log_b a\)，結果為正確值的 \(\frac94\) 倍，其中 \(a,b>1\)。求 \(a、b\) 的關係。`,
      options: {
        "1": String.raw`\(a^2=b^3\)`, "2": String.raw`\(a^3=b^2\)`,
        "3": String.raw`\(a^4=b^9\)`, "4": String.raw`\(2a=3b\)`,
        "5": String.raw`\(3a=2b\)`
      },
      solution: [
        String.raw`令 \(x=\log_a b>0\)，則 \(\log_ba=1/x\)。題意給
        \[
        \frac1x=\frac94x\Rightarrow x=\frac23。
        \]`,
        String.raw`所以 \(b=a^{2/3}\)，等價於 \(a^2=b^3\)。`
      ],
      optionAnalysis: {
        "1": String.raw`由 \(\log_ab=2/3\) 正好得到 \(a^2=b^3\)。`,
        "2": "對應 \(\log_ab=3/2\)，把倒數關係顛倒。",
        "3": "對應的指數比例不符合 \(2/3\)。",
        "4": "對數關係要轉為冪次，不是底數的線性關係。",
        "5": "同樣誤把對數比例寫成數值比例。"
      }
    },
    "111A-3": {
      verified: true, sourcePage: 1,
      stem: "將官方散布圖中的二維數據垂直投影到一條通過原點的直線。投影到哪條直線時，一維投影數據的變異數最小？",
      options: {
        "1": String.raw`\(y=2x\)`, "2": String.raw`\(y=-2x\)`,
        "3": String.raw`\(y=-x\)`, "4": String.raw`\(y=x/2\)`,
        "5": String.raw`\(y=-x/2\)`
      },
      solution: [
        "散布點沿著正斜率約為 2 的方向延伸，該方向的變異最大；與此主方向垂直的投影軸會得到最小變異。",
        String.raw`斜率 2 的垂線斜率為 \(-1/2\)，所以選 \(y=-x/2\)。`
      ],
      optionAnalysis: {
        "1": "接近資料延伸的主方向，投影變異反而最大。",
        "2": "與主方向並不垂直。",
        "3": "方向角與資料主方向的垂線仍有差距。",
        "4": "仍是正斜率，會保留大量主方向差異。",
        "5": "與斜率約 2 的資料主方向垂直，投影變異最小。"
      }
    },
    "111A-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`等差數列 \(\{a_n\}\) 的首項 \(a_1\) 與公差 \(d\) 都為正，且 \(\log a_1、\log a_3、\log a_6\) 依序成等差數列。求此對數等差數列的公差。`,
      options: {
        "1": String.raw`\(\log d\)`, "2": String.raw`\(\log\frac23\)`,
        "3": String.raw`\(\log\frac32\)`, "4": String.raw`\(\log(2d)\)`,
        "5": String.raw`\(\log(3d)\)`
      },
      solution: [
        String.raw`對數成等差給
        \[
        a_3^2=a_1a_6。
        \]
        設 \(a_1=a\)，代入 \((a+2d)^2=a(a+5d)\)，得 \(a=4d\)。`,
        String.raw`因此 \(a_1=4d、a_3=6d\)，公差為
        \[
        \log a_3-\log a_1=\log\frac32。
        \]`
      ],
      optionAnalysis: {
        "1": "對數公差是相鄰原數值的比值取對數，不是原等差公差。",
        "2": "把 \(a_3/a_1\) 顛倒。",
        "3": String.raw`由 \(a_3/a_1=6d/4d=3/2\) 得此答案。`,
        "4": "公差 d 在比值中會約去。",
        "5": "同樣未利用三個對數成等差的條件。"
      }
    },
    "111A-5": {
      verified: true, sourcePage: 2,
      stem: "某地 30% 人口染病。快篩將染病者判陽性的機率為 80%，將未染病者判陰性的機率為 60%。令 P 為單次陰性者中染病的機率，P′ 為連續三次皆陰性者中染病的機率。求 P/P′ 最接近何值。",
      options: { "1": "7", "2": "8", "3": "9", "4": "10", "5": "11" },
      solution: [
        String.raw`由貝氏定理
        \[
        P=\frac{0.3(0.2)}{0.3(0.2)+0.7(0.6)}=\frac18。
        \]`,
        String.raw`假設各次採檢獨立，
        \[
        P'=\frac{0.3(0.2)^3}{0.3(0.2)^3+0.7(0.6)^3}=\frac1{64}。
        \]
        所以 \(P/P'=8\)。`
      ],
      optionAnalysis: {
        "1": "未完整納入未染病者連續三次陰性的機率。",
        "2": String.raw`\((1/8)/(1/64)=8\)。`,
        "3": "不是把三次結果直接乘上 3。",
        "4": "混用陽性率 80% 與陰性率 60%。",
        "5": "不符合貝氏定理的分母加權。"
      }
    },
    "111A-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`斜率皆為正的兩直線 \(L_1、L_2\) 有一條夾角平分線斜率為 \(11/9\)。直線 \(L\) 通過 \((2,1/3)\)，且與 \(L_1、L_2\) 圍成正三角形。求 \(L\) 方程式。`,
      options: {
        "1": String.raw`\(11x-9y=19\)`, "2": String.raw`\(9x+11y=25\)`,
        "3": String.raw`\(11x+9y=25\)`, "4": String.raw`\(27x-33y=43\)`,
        "5": String.raw`\(27x+33y=65\)`
      },
      solution: [
        "正三角形中，頂角平分線同時垂直於對邊 \(L\)。因此 \(L\) 的斜率為 \(-9/11\)。",
        String.raw`通過 \((2,1/3)\)：
        \[
        y-\frac13=-\frac9{11}(x-2)
        \Rightarrow27x+33y=65。
        \]`
      ],
      optionAnalysis: {
        "1": "斜率為正 \(11/9\)，是平分線方向。",
        "2": "斜率雖為 \(-9/11\)，但不通過指定點。",
        "3": "斜率為 \(-11/9\)，取錯負倒數。",
        "4": "斜率為正，且常數不符。",
        "5": "斜率 \(-9/11\) 且通過指定點。"
      }
    },
    "111A-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`整數 \(n\) 滿足
      \[
      |5n-21|\ge |7n|。
      \]
      選出必然正確的敘述。`,
      options: {
        "1": String.raw` \(|5n-7n|\ge21\)`,
        "2": String.raw`\(-1\le\frac{7n}{5n-21}\le1\)`,
        "3": String.raw`\(7n\le5n-21\)`,
        "4": String.raw`\((5n-21)^2\ge49n^2\)`,
        "5": "符合的整數 n 有無窮多個"
      },
      solution: [
        String.raw`因整數 \(n\) 不會使 \(5n-21=0\)，兩邊除以 \(|5n-21|\) 得
        \[
        \left|\frac{7n}{5n-21}\right|\le1，
        \]
        即選項（2）。兩個絕對值皆非負，平方後也得到選項（4）。`
      ],
      optionAnalysis: {
        "1": "不能把原不等式內的 21 直接用反三角不等式移到另一側。",
        "2": "等價於 \(|7n/(5n-21)|\le1\)。",
        "3": "絕對值不等式不能直接去掉兩側絕對值。",
        "4": "兩側皆非負，平方後不等號保持。",
        "5": "平方解得 \(-10.5\le n\le1.75\)，只有有限個整數。"
      }
    },
    "111A-8": {
      verified: true, sourcePage: 2,
      stem: String.raw`三角形頂點為 \(A(0,2)、B(1,0)、C(4,1)\)。選出正確敘述。`,
      options: {
        "1": "AC 是最長邊", "2": String.raw`\(\sin A<\sin C\)`,
        "3": "是銳角三角形", "4": String.raw`\(\sin B=\frac{7\sqrt2}{10}\)`,
        "5": "外接圓半徑小於 2"
      },
      solution: [
        String.raw`三邊平方為
        \[
        AB^2=5,\quad BC^2=10,\quad AC^2=17，
        \]
        所以 AC 最長，且 \(17>5+10\)，是鈍角三角形。`,
        String.raw`面積為 \(7/2\)，故
        \[
        \sin B=\frac{2[ABC]}{AB\cdot BC}
        =\frac7{\sqrt5\sqrt{10}}=\frac{7\sqrt2}{10}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`\(AC^2=17\) 最大。`,
        "2": "A 的對邊 BC 比 C 的對邊 AB 長，所以 \(\sin A>\sin C\)。",
        "3": String.raw`\(AC^2>AB^2+BC^2\)，為鈍角。`,
        "4": "由面積公式可得此精確值。",
        "5": "由正弦定理算得外接圓半徑略大於 2。"
      }
    },
    "111A-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`三角形內點 \(P\) 滿足 \(\overrightarrow{AP}=a\overrightarrow{AB}+b\overrightarrow{AC}\)，其中 \(a\ne b\)。另
      \[
      \overrightarrow{AQ}=b\overrightarrow{AB}+a\overrightarrow{AC},\quad
      \overrightarrow{AR}=a\overrightarrow{AB}+(b-0.05)\overrightarrow{AC}。
      \]
      選出正確敘述。`,
      options: {
        "1": "Q、R 都在三角形內", "2": String.raw`\(AP=AQ\)`,
        "3": String.raw`\([ABP]=[ACQ]\)`, "4": String.raw`\([BCP]=[BCQ]\)`,
        "5": String.raw`\([ABP]>[ABR]\)`
      },
      solution: [
        "P 在內部給 \(a>0、b>0、a+b<1\)。交換 a、b 後 Q 仍在內部，但 R 的係數 \(b-0.05\) 不一定為正。",
        String.raw`以 \([ABC]\) 為基準，
        \[
        [ABP]=b[ABC]=[ACQ]，
        \]
        且 P、Q 對 BC 的面積係數同為 \(1-a-b\)，故（3）、（4）正確。`
      ],
      optionAnalysis: {
        "1": "若 \(b<0.05\)，R 不在三角形內。",
        "2": "交換兩個係數不保證向量長度相同。",
        "3": "兩面積的相對係數都為 b。",
        "4": "P、Q 到 BC 的仿射係數都為 \(1-a-b\)。",
        "5": "若 \(b-0.05<0\)，面積須取絕對值，不一定較小。"
      }
    },
    "111A-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`\(f(x)=ax^3+bx^2+cx+3\)，令 \(g(x)=f(-x)-3\)。已知 \(y=g(x)\) 的對稱中心為 \((1,0)\)，且 \(g(-1)<0\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(g(x)=0\) 有三相異整數根`, "2": String.raw`\(a<0\)`,
        "3": String.raw`\(f\) 的對稱中心為 \((-1,-3)\)`, "4": String.raw`\(f(100)<0\)`,
        "5": String.raw`\(f\) 在 \(x=-1\) 附近近似斜率為 \(a\) 的直線`
      },
      solution: [
        String.raw`把三次函數以 \(x=1\) 為中心展開，可得 \(b=3a、c=2a\)，所以
        \[
        g(x)=-ax(x-1)(x-2)。
        \]`,
        String.raw`又 \(g(-1)=6a<0\)，故 \(a<0\)。三根為 \(0、1、2\)，且 \(f\) 的最高次項係數為負，所以 \(f(100)<0\)。`
      ],
      optionAnalysis: {
        "1": "因式分解後根為 0、1、2。",
        "2": String.raw`由 \(g(-1)=6a<0\) 得 \(a<0\)。`,
        "3": "正確中心為 \((-1,3)\)，常數平移方向錯誤。",
        "4": "最高次係數 a 為負，正向大數時函數為負。",
        "5": String.raw`實際切線斜率 \(f'(-1)=-a\)，不是 \(a\)。`
      }
    },
    "111A-11": {
      verified: true, sourcePage: 3,
      stem: "直三角柱中，ABC 為直角三角形，∠ACB=90°、AC=5、BC=6，ADEB 與 ADFC 為矩形。選出正確敘述。",
      options: {
        "1": "沿平面 ACE 切下會得到兩個四面體", "2": "平面 ADEB 與 ADFC 的銳二面角大於 45°",
        "3": String.raw`\(\angle CEB<\angle AEB\)`, "4": String.raw`\(\tan\angle AEC<\sin\angle CEB\)`,
        "5": String.raw`\(\angle CEB<\angle AEC\)`
      },
      solution: [
        String.raw`兩矩形沿 AD 的二面角等於 \(\angle BAC\)，且
        \[
        \tan\angle BAC=\frac{BC}{AC}=\frac65>1，
        \]
        所以銳二面角大於 \(45^\circ\)。`,
        String.raw`設柱高為 \(h\)，可算得
        \[
        \cos\angle CEB=\frac h{\sqrt{h^2+36}}>
        \frac h{\sqrt{h^2+61}}=\cos\angle AEB，
        \]
        故（3）正確；又
        \[
        \tan\angle AEC=\frac5{\sqrt{h^2+36}}<
        \frac6{\sqrt{h^2+36}}=\sin\angle CEB，
        \]
        故（4）正確。`
      ],
      optionAnalysis: {
        "1": "切面後的兩塊並非都只有四個頂點。",
        "2": String.raw`因 \(\tan\) 值為 \(6/5>1\)，角度大於 45°。`,
        "3": "比較餘弦可知 CEB 較小。",
        "4": "兩式分母相同，分子 5 小於 6。",
        "5": "兩角大小還受柱高影響，不能必然成立。"
      }
    },
    "111A-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`\(f,g\) 為實係數多項式，\(g\) 是首項係數為正的二次式。已知 \(g(x)^2\) 除以 \(f(x)\) 的餘式為 \(g(x)\)，且 \(f\) 無實根。哪些數值不可能是 \(y=g(x)\) 頂點的 y 坐標？`,
      options: {
        "1": String.raw`\(\frac{\sqrt2}{2}\)`, "2": "1", "3": String.raw`\(\sqrt2\)`,
        "4": "2", "5": String.raw`\(\pi\)`
      },
      solution: [
        String.raw`條件等價於 \(f\mid g(g-1)\)。因餘式 \(g\) 的次數為 2，必有 \(\deg f>2\)；又 \(f\) 無實根，所以 \(g、g-1\) 都不能有實根。`,
        "g 開口向上，因此其最小值（頂點 y 坐標）必須嚴格大於 1。故小於或等於 1 的選項（1）、（2）不可能。"
      ],
      optionAnalysis: {
        "1": String.raw`\(\sqrt2/2<1\)，使 \(g-1\) 有實根。`,
        "2": "頂點等於 1 時，\(g-1\) 有重實根。",
        "3": String.raw`\(\sqrt2>1\)，可構造使兩個二次因子皆無實根。`,
        "4": "大於 1，可能。",
        "5": "大於 1，可能。"
      }
    },
    "111A-13": {
      verified: true, sourcePage: 4,
      stem: "每次十連抽需 1500 枚代幣；前 9 抽中金卡率各 2%，第 10 抽為 10%。持有 23000 枚代幣並持續十連抽至不能再抽。求金卡張數期望值。",
      solution: [
        String.raw`可進行 \(\lfloor23000/1500\rfloor=15\) 次十連抽。每次期望金卡數為
        \[
        9(0.02)+0.10=0.28。
        \]`,
        String.raw`總期望為 \(15(0.28)=4.2\) 張。`
      ]
    },
    "111A-14": {
      verified: true, sourcePage: 4,
      stem: String.raw`含參數 \(a\) 的三元一次方程組恰有一解，且高斯消去後增廣矩陣可化為
      \[
      \begin{bmatrix}1&2&b&7\\0&b&5&-5\\0&0&b&0\end{bmatrix}。
      \]
      依官方題本原方程組，求 \(a、b\)。`,
      solution: [
        String.raw`因方程組恰有一解，階梯形中的 \(b\ne0\)。由階梯形依序回代：
        \[
        z=0,\qquad y=-\frac5b,\qquad x=7+\frac{10}{b}。
        \]`,
        String.raw`代入原方程組第二式
        \[
        x+ay+\frac83z=7
        \]
        得 \((10-5a)/b=0\)，所以 \(a=2\)。`,
        String.raw`再代入第三式 \(3x+8y+az=1\)，得
        \[
        21-\frac{10}{b}=1，
        \]
        所以 \(b=\frac12\)。`
      ]
    },
    "111A-15": {
      verified: true, sourcePage: 5,
      stem: "三角形土地 ABC 的 BC=16。原方案開闢與 BC 平行、寬 h 的道路後，土地剩原面積 9/16。改以通過 B、與 BC 夾角 30° 的平行道路，路寬仍為 h，只徵收三角形 BCE。求剩餘三角形 ABE 面積。",
      solution: [
        String.raw`原方案剩下的相似三角形面積比為 \(9/16\)，線性比為 \(3/4\)，故道路寬 \(h\) 是原高的 \(1/4\)。`,
        String.raw`新方案中 \(h=BC\sin30^\circ=16\cdot\frac12=8\)，所以原高為 32，原土地面積 \(=16\cdot32/2=256\)。`,
        String.raw`被徵收的 \(\triangle BCE\) 面積為 \(16\cdot8/2=64\)，剩餘 \(256-64=192\)。`
      ]
    },
    "111A-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`平面 \(x-y+2z=3\) 上有直線
      \[
      L:\frac x2-1=y+1=-2z
      \]
      與另一相異直線 \(L'\)。直線 L 也在平面 E 上，且 \(L'\) 在 E 上的正射影與 L 重合。求 E。`,
      solution: [
        String.raw`由條件可知 E 含 L，其法向量還須使原平面中的另一方向投影到 L。解垂直與共面條件得 E 的法向量可取
        \[
        (1,-3,-2)。
        \]`,
        String.raw`L 通過 \((2,-1,0)\)，代入得常數 \(2+3=5\)，所以
        \[
        E:x-3y-2z=5。
        \]`
      ]
    },
    "111A-17": {
      verified: true, sourcePage: 5,
      stem: "平行六面體某底面三頂點為 (-1,2,1)、(-4,1,3)、(2,0,-3)。另一面一頂點在 xy 平面上且距原點為 1。求最大體積。",
      solution: [
        String.raw`取底面兩邊向量外積，得面積向量
        \[
        \mathbf n=(8,-6,9)。
        \]
        三個底面點都滿足 \(\mathbf n\cdot X=-11\)。`,
        String.raw`另一面頂點 \(Q=(x,y,0)\) 滿足 \(x^2+y^2=1\)。體積為
        \[
        |\mathbf n\cdot Q+11|=|8x-6y+11|。
        \]
        由柯西不等式，\(8x-6y\) 最大為 10，故最大體積為 21。`
      ]
    },
    "111A-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`環狀區域介於半徑 \(\sqrt3\) 與 2 的同心圓之間。長 1 的掃描棒黑端從 \(A=(\sqrt3,0)\) 出發、白端在外圓 B。求 B 坐標。`,
      options: {
        "1": String.raw`\((0,2)\)`, "2": String.raw`\((1,\sqrt3)\)`,
        "3": String.raw`\((\sqrt2,\sqrt2)\)`, "4": String.raw`\((\sqrt3,1)\)`,
        "5": String.raw`\((2,0)\)`
      },
      solution: [
        String.raw`B 同時滿足 \(OB=2、AB=1\)。選項（4）
        \[
        B=(\sqrt3,1)
        \]
        有 \(OB^2=3+1=4\)，且 \(AB=1\)，符合。`
      ],
      optionAnalysis: {
        "1": "到 A 的距離不是 1。",
        "2": "雖在外圓上，但與 A 的距離不為 1。",
        "3": "在外圓上，但不滿足棒長。",
        "4": "同時滿足 OB=2 與 AB=1。",
        "5": "與 A 的距離為 \(2-\sqrt3\)，不是 1。"
      }
    },
    "111A-19": {
      verified: true, sourcePage: 6,
      stem: "掃描棒兩端分別沿上半部內、外圓逆時針移動，直到白端到 \(B'=(-2,0)\)。求停止時黑端 A′ 的極坐標及 \(\cos\angle OA'B'\)。",
      solution: [
        String.raw`三角形 \(OA'B'\) 的三邊為 \(OA'=\sqrt3、OB'=2、A'B'=1\)，且
        \[
        (\sqrt3)^2+1^2=2^2，
        \]
        所以 \(\angle OA'B'=90^\circ\)，其餘弦為 0。`,
        String.raw`由幾何關係 \(\angle B'OA'=\pi/6\)，而 \(B'\) 的極角為 \(\pi\)，故 A′ 極角為 \(5\pi/6\)。極坐標為
        \[
        \left(\sqrt3,\frac{5\pi}{6}\right)。
        \]`
      ]
    },
    "111A-20": {
      verified: true, sourcePage: 6,
      stem: "承第 19 題，令 Ω 為掃描棒在第一象限掃過的區域，R 為完整掃描區域。分別求兩者面積。",
      solution: [
        String.raw`依官方圖形作扇形與直角三角形的面積加減，第一象限部分為
        \[
        |\Omega|=\frac{3\sqrt3}{2}-\frac{\pi}{12}。
        \]`,
        String.raw`完整掃描區域也可視為圓心角 \(5\pi/6\) 的兩同心扇形之差：
        \[
        |R|=\frac12\cdot\frac{5\pi}{6}\left(2^2-(\sqrt3)^2\right)
        =\frac{5\pi}{12}。
        \]`
      ]
    },

    "111B-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`有多少個整數 \(x\) 滿足
      \[
      2|x|+x<10？
      \]`,
      options: { "1": "13 個", "2": "14 個", "3": "15 個", "4": "16 個", "5": "無窮多個" },
      solution: [
        String.raw`若 \(x\ge0\)，則 \(3x<10\)，整數解為 \(0,1,2,3\)，共 4 個。`,
        String.raw`若 \(x<0\)，則 \(-x<10\)，即 \(-10<x<0\)，整數解為 \(-9,\ldots,-1\)，共 9 個。合計 13 個。`
      ],
      optionAnalysis: {
        "1": "兩種符號情況分別 4 個與 9 個，共 13 個。",
        "2": "可能把端點 x=-10 誤列入；原式是嚴格小於。",
        "3": "未正確拆解絕對值。",
        "4": "把正、負端點都錯列入。",
        "5": "負數範圍仍受 \(-x<10\) 限制。"
      }
    },
    "111B-2": {
      verified: true, sourcePage: 1,
      stem: "閃燈依藍 5 秒、白 2 秒、紅 6 秒、白 2 秒循環。啟動後第 99～101 秒之間亮什麼顏色？",
      options: { "1": "皆為藍", "2": "皆為白", "3": "皆為紅", "4": "先藍再白", "5": "先白再紅" },
      solution: [
        "一循環共 15 秒。99～101 秒除以 15 的餘數落在 9～11 秒。",
        "每循環第 7～13 秒為紅燈，因此整段皆為紅燈。"
      ],
      optionAnalysis: {
        "1": "藍燈在每循環前 5 秒。",
        "2": "白燈在第 5～7 與 13～15 秒。",
        "3": "餘數 9～11 全落在紅燈區間。",
        "4": "此時間段沒有跨越藍、白切換點。",
        "5": "此時間段沒有跨越白、紅切換點。"
      }
    },
    "111B-3": {
      verified: true, sourcePage: 1,
      stem: "8 棟大廈排成一列，選 3 棟設基地台且任兩棟不得相鄰。在 3 號大廈不設基地台的條件下，共有幾種？",
      options: { "1": "12", "2": "13", "3": "20", "4": "30", "5": "35" },
      solution: [
        String.raw`8 棟中任選 3 棟且不相鄰共有
        \[
        \binom{8-3+1}{3}=\binom63=20。
        \]`,
        "其中包含 3 號的合法組合有 7 種，故不含 3 號的有 \(20-7=13\) 種。"
      ],
      optionAnalysis: {
        "1": "漏算部分位於 4～8 號的合法組合。",
        "2": "由全部 20 種扣除含 3 號的 7 種。",
        "3": "這是尚未排除 3 號的總數。",
        "4": "未套用不相鄰限制。",
        "5": "接近單純 \(\binom73\)，未排除相鄰。"
      }
    },
    "111B-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知
      \[
      \overrightarrow{PQ}=(\log\tfrac15,-10^{-5}),\qquad
      P=(\log\tfrac12,2^{-5})。
      \]
      判斷 Q 所在象限。`,
      options: { "1": "第一象限", "2": "第二象限", "3": "第三象限", "4": "第四象限", "5": "坐標軸上" },
      solution: [
        String.raw`Q 的 x 坐標為
        \[
        \log\frac12+\log\frac15=\log\frac1{10}<0。
        \]`,
        String.raw`y 坐標為 \(2^{-5}-10^{-5}>0\)，所以 Q 在第二象限。`
      ],
      optionAnalysis: {
        "1": "Q 的 x 坐標為負。",
        "2": "x 負、y 正，位於第二象限。",
        "3": "Q 的 y 坐標仍為正。",
        "4": "x、y 的符號都不符第四象限。",
        "5": "兩個坐標皆非 0。"
      }
    },
    "111B-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`設
      \[
      A=\begin{bmatrix}1&1\\1&-1\end{bmatrix},\qquad
      A^7-3A=\begin{bmatrix}a&b\\c&d\end{bmatrix}。
      \]
      求 \(a+b+c+d\)。`,
      options: { "1": "-8", "2": "-5", "3": "5", "4": "8", "5": "10" },
      solution: [
        String.raw`直接算得 \(A^2=2I\)，所以
        \[
        A^7=A(A^2)^3=8A。
        \]
        因此 \(A^7-3A=5A\)。`,
        String.raw`四元素和為 \(5(1+1+1-1)=10\)。`
      ],
      optionAnalysis: {
        "1": "冪次化簡或符號錯誤。",
        "2": "忽略 A 中三個正元素。",
        "3": "只取矩陣倍數 5，未求元素總和。",
        "4": "這是 A⁷ 的倍數關係，不是所求總和。",
        "5": String.raw`\(5A\) 的四元素和為 10。`
      }
    },
    "111B-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`半徑 \(r\) 的球形地球上，質點從甲地沿經線向北到北極，弧長為 \(\frac7{12}\pi r\)。甲地最可能在哪裡？`,
      options: {
        "1": "東經 75°、北緯 15°", "2": "東經 30°、南緯 75°",
        "3": "東經 75°、南緯 15°", "4": "西經 30°、北緯 75°",
        "5": "西經 15°、南緯 30°"
      },
      solution: [
        String.raw`弧長對應圓心角
        \[
        \frac{(7/12)\pi r}{r}=\frac{7\pi}{12}=105^\circ。
        \]`,
        "從北極向南 105° 到達南緯 15°；經度不影響此段經線長。只有選項（3）符合。"
      ],
      optionAnalysis: {
        "1": "北緯 15° 到北極只有 75°。",
        "2": "南緯 75° 到北極為 165°。",
        "3": "南緯 15° 到北極正好 105°。",
        "4": "北緯 75° 到北極只有 15°。",
        "5": "南緯 30° 到北極為 120°。"
      }
    },
    "111B-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`單點透視保持四點交比
      \[
      K=\frac{P_1P_4\cdot P_2P_3}{P_1P_3\cdot P_2P_4}。
      \]
      空間直線上四點等距，哪組畫紙坐標可能是其透視像？`,
      options: { "1": "1,2,4,8", "2": "3,4,6,9", "3": "1,5,8,9", "4": "1,2,4,9", "5": "1,7,9,10" },
      solution: [
        String.raw`等距四點可設為 \(0,1,2,3\)，其
        \[
        K=\frac{3\cdot1}{2\cdot2}=\frac34。
        \]`,
        String.raw`選項（5）的 \(K\) 為
        \[
        \frac{(10-1)(9-7)}{(9-1)(10-7)}
        =\frac{9\cdot2}{8\cdot3}=\frac34。
        \]`
      ],
      optionAnalysis: {
        "1": "代入交比不等於 3/4。",
        "2": "代入交比不等於 3/4。",
        "3": "雖維持次序，但交比不符。",
        "4": "最後一點位置使交比不符。",
        "5": "交比正好為 3/4。"
      }
    },
    "111B-8": {
      verified: true, sourcePage: 3,
      stem: "從原點沿 (1,a) 方向發射射線，a>0。三個半徑 1 的圓盤圓心為 (2,2)、(4,6)、(8,1)。選出正確敘述。",
      options: {
        "1": "射線在斜率 a 的過原點直線上", "2": String.raw`\(a=3/2\) 時擊中圓心 \((4,6)\) 的圓盤`,
        "3": "一道射線可擊中三個圓盤", "4": "至少需三道射線才能擊中三圓盤",
        "5": String.raw`若擊中圓心 \((8,1)\) 的圓盤，則 \(a\le16/63\)`
      },
      solution: [
        String.raw`方向 \((1,a)\) 給直線 \(y=ax\)，故（1）正確。當 \(a=3/2\) 時直線通過 \((4,6)\)，故（2）正確。`,
        String.raw`若擊中 \((8,1)\) 圓盤，點線距離須不超過 1：
        \[
        \frac{|8a-1|}{\sqrt{a^2+1}}\le1。
        \]
        化簡得 \(0<a\le16/63\)，故（5）正確。`
      ],
      optionAnalysis: {
        "1": "方向向量直接給斜率 a。",
        "2": String.raw`直線 \(y=3x/2\) 通過該圓心。`,
        "3": "三圓盤可接受的斜率區間沒有共同交集。",
        "4": "可用兩道適當射線涵蓋三個圓盤。",
        "5": "由圓心到射線所在直線的距離條件可得上界。"
      }
    },
    "111B-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(f(x)=2x^3-3x+1\)。選出圖形 \(y=f(x)\) 的正確敘述。`,
      options: {
        "1": "通過 (1,0)", "2": "與 x 軸只有一交點", "3": "(1,0) 是對稱中心",
        "4": "對稱中心附近近似直線 y=3x-3", "5": String.raw`\(y=3x^3-6x^2+2x\) 可由其平移得到`
      },
      solution: [
        String.raw`\(f(1)=2-3+1=0\)，故（1）正確。又
        \[
        f(x)=(x-1)(2x^2+2x-1)，
        \]
        後者判別式大於 0，所以共有三個實根。`,
        "三次函數的對稱中心是反曲點 (0,1)，其附近切線斜率為 \(f'(0)=-3\)。平移不會改變最高次係數 2，故其餘敘述皆錯。"
      ],
      optionAnalysis: {
        "1": "直接代入得 f(1)=0。",
        "2": "因式分解後可見另有兩個實根。",
        "3": "對稱中心是 (0,1)。",
        "4": "中心切線為 y=-3x+1。",
        "5": "平移不改變三次項係數，不能由 2 變成 3。"
      }
    },
    "111B-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`甲、乙班原分數為 \(x_1,x_2\)，調整後
      \[
      y_1=0.8x_1+20,\qquad y_2=0.75x_2+25。
      \]
      兩班調整後平均皆 60，標準差分別 16、15。選出正確敘述。`,
      options: {
        "1": "甲班每人調整後皆不低於原分數", "2": "甲班原平均高於乙班",
        "3": "甲班原標準差高於乙班", "4": "若甲生調整後高於乙生，則甲生原分也較高",
        "5": "若甲班調整後不及格人數較多，則原分不及格人數也必較多"
      },
      solution: [
        String.raw`原平均為
        \[
        \bar x_1=\frac{60-20}{0.8}=50,\qquad
        \bar x_2=\frac{60-25}{0.75}=\frac{140}{3}，
        \]
        故（2）正確。原標準差都為 20。`,
        String.raw`甲班 \(y_1-x_1=20-0.2x_1\ge0\)（分數不超過 100），故（1）正確。若 \(y_1>y_2\) 而 \(x_1\le x_2\)，則
        \[
        0.8x_1-0.75x_2\le0.05x_2\le5，
        \]
        與嚴格大於 5 矛盾，故（4）正確。`
      ],
      optionAnalysis: {
        "1": "原分至多 100，調整差 \(20-0.2x\ge0\)。",
        "2": "原平均 50 大於 \(140/3\)。",
        "3": "兩班原標準差都為 20。",
        "4": "由滿分上限與兩條調整式可證原分順序相同。",
        "5": "兩班調整後 60 分對應的原分門檻不同，不能推出原本 60 分門檻的人數關係。"
      }
    },
    "111B-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`依官方坐標圖，向量 \(\vec v\) 滿足
      \[
      \vec v\cdot\overrightarrow{OA}>0,\qquad
      \vec v\cdot\overrightarrow{OB}>0。
      \]
      \(\vec v\) 與哪些向量的內積一定小於 0？`,
      options: {
        "1": String.raw`\(\overrightarrow{OC}\)`, "2": String.raw`\(\overrightarrow{OD}\)`,
        "3": String.raw`\(\overrightarrow{OE}\)`, "4": String.raw`\(\overrightarrow{OF}\)`,
        "5": String.raw`\(\overrightarrow{OG}\)`
      },
      solution: [
        "兩個正內積條件把 v 限制在由 OA、OB 所決定的兩個開半平面交集。",
        String.raw`從官方圖的方向關係可見，\(-\overrightarrow{OD}\) 與 \(-\overrightarrow{OE}\) 都位在 \(\overrightarrow{OA},\overrightarrow{OB}\) 的正錐內，因此對所有符合條件的 v，
        \[
        \vec v\cdot\overrightarrow{OD}<0,\qquad
        \vec v\cdot\overrightarrow{OE}<0。
        \]`
      ],
      optionAnalysis: {
        "1": "可選符合條件的 v，使其與 OC 內積為正。",
        "2": "OD 的反向位於 OA、OB 正錐內，故一定為負。",
        "3": "OE 的反向位於 OA、OB 正錐內，故一定為負。",
        "4": "OF 太靠近負 y 方向，仍可找到反例 v。",
        "5": "OG 位於第四象限，與可行 v 的內積不固定。"
      }
    },
    "111B-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`二次方程式 \(at^2+bt+c=0\) 的兩根都在 1 與 3 之間。哪些代換後方程式的兩根必在 4 與 5 之間？`,
      options: {
        "1": String.raw`a(x-2)^2+b(x-2)+c=0`,
        "2": String.raw`a(x+2)^2+b(x+2)+c=0`,
        "3": String.raw`a(2x-7)^2+b(2x-7)+c=0`,
        "4": String.raw`a(\frac{x+7}{2})^2+b(\frac{x+7}{2})+c=0`,
        "5": String.raw`a(3x-11)^2+b(3x-11)+c=0`
      },
      solution: [
        String.raw`令原根 \(t\in(1,3)\)。選項（3）有 \(t=2x-7\)，故
        \[
        x=\frac{t+7}{2}\in(4,5)。
        \]`,
        String.raw`選項（5）有 \(t=3x-11\)，故
        \[
        x=\frac{t+11}{3}\in\left(4,\frac{14}{3}\right)\subset(4,5)。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`\(x=t+2\in(3,5)\)，不保證大於 4。`,
        "2": String.raw`\(x=t-2\in(-1,1)\)。`,
        "3": String.raw`映到完整區間 \((4,5)\)。`,
        "4": String.raw`\(x=2t-7\in(-5,-1)\)。`,
        "5": String.raw`映到 \((4,14/3)\)，必在 4 與 5 間。`
      }
    },
    "111B-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`正實數 \(x,y\) 滿足
      \[
      x^{-1/3}y^2=1,\qquad 2\log y=1。
      \]
      求 \((x-y^2)/10\)。`,
      solution: [
        String.raw`由 \(2\log y=1\) 得 \(y=\sqrt{10}\)，故 \(y^2=10\)。`,
        String.raw`第一式給 \(x^{1/3}=y^2=10\)，所以 \(x=1000\)。因此
        \[
        \frac{x-y^2}{10}=\frac{1000-10}{10}=99。
        \]`
      ]
    },
    "111B-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`半徑為 7 的圓上有 A、B 兩點，且 \(\overline{AB}=8\)。求 \(\overrightarrow{OA}\cdot\overrightarrow{OB}\)。`,
      solution: [
        String.raw`由
        \[
        |\overrightarrow{OA}-\overrightarrow{OB}|^2
        =OA^2+OB^2-2\overrightarrow{OA}\cdot\overrightarrow{OB}
        \]
        得
        \[
        64=49+49-2\overrightarrow{OA}\cdot\overrightarrow{OB}。
        \]`,
        "所以內積為 17。"
      ]
    },
    "111B-15": {
      verified: true, sourcePage: 5,
      stem: "失蹤輕航機有 70% 會被找到；被找到者 60% 裝有定位器，未被找到者 90% 未裝定位器。已知某失蹤機裝有定位器，求被找到機率。",
      solution: [
        String.raw`以 \(F\) 表示找到、\(T\) 表示裝定位器：
        \[
        P(F\cap T)=0.7(0.6)=0.42,\quad
        P(F^c\cap T)=0.3(0.1)=0.03。
        \]`,
        String.raw`所以
        \[
        P(F\mid T)=\frac{0.42}{0.42+0.03}=\frac{14}{15}。
        \]`
      ]
    },
    "111B-16": {
      verified: true, sourcePage: 5,
      stem: "袋中藍、綠、黃球共 10 顆。抽兩球皆藍機率為 1/15，皆綠機率為 2/9。求兩球異色機率。",
      solution: [
        String.raw`總球對數 \(\binom{10}{2}=45\)。由
        \[
        \binom B2=3,\qquad \binom G2=10
        \]
        得藍球 3 顆、綠球 5 顆，故黃球 2 顆。`,
        String.raw`同色機率為
        \[
        \frac{\binom32+\binom52+\binom22}{45}=\frac{14}{45}。
        \]
        異色機率 \(=1-\frac{14}{45}=\frac{31}{45}\)。`
      ]
    },
    "111B-17": {
      verified: true, sourcePage: 5,
      stem: "三女三男與老師共七人排一列。老師站正中間，三位男生不全在老師同側；另有一女一男不想相鄰。求排列數。",
      solution: [
        String.raw`老師固定後，六位學生共有 \(6!=720\) 種。三男全在同一側有
        \[
        2\cdot3!\cdot3!=72
        \]
        種，故先剩 648 種。`,
        String.raw`指定一女一男相鄰時，只能在老師同一側的四組相鄰位置，排列數
        \[
        4\cdot2\cdot4!=192。
        \]
        這些情況不會出現三男全在同側，故答案 \(648-192=456\)。`
      ]
    },
    "111B-18": {
      verified: true, sourcePage: 6,
      stem: "某摩天大樓傾斜度為 18°，換算成弧度為何？",
      options: {
        "1": String.raw`\(\pi/36\)`, "2": String.raw`\(\pi/18\)`,
        "3": String.raw`\(\pi/20\)`, "4": String.raw`\(\pi/10\)`,
        "5": String.raw`\(\pi/8\)`
      },
      solution: [
        String.raw`角度轉弧度：
        \[
        18^\circ\cdot\frac{\pi}{180^\circ}=\frac{\pi}{10}。
        \]`
      ],
      optionAnalysis: {
        "1": "相當於 5°。",
        "2": "相當於 10°。",
        "3": "相當於 9°。",
        "4": "18° 正好是 \(\pi/10\)。",
        "5": "相當於 22.5°。"
      }
    },
    "111B-19": {
      verified: true, sourcePage: 6,
      stem: "虎丘塔、護珠塔、比薩斜塔的塔高分別為 48、19、57 公尺，偏移距離分別為 2.3、2.3、4 公尺，傾斜度為 θ₁、θ₂、θ₃。比較三角大小。",
      solution: [
        String.raw`偏移距離 \(=\) 塔高乘傾斜角正弦，所以
        \[
        \sin\theta_1=\frac{2.3}{48},\quad
        \sin\theta_2=\frac{2.3}{19},\quad
        \sin\theta_3=\frac4{57}。
        \]`,
        String.raw`比較得
        \[
        \frac{2.3}{48}<\frac4{57}<\frac{2.3}{19}。
        \]
        正弦在 \(0^\circ\) 到 \(90^\circ\) 嚴格遞增，故 \(\theta_1<\theta_3<\theta_2\)。`
      ]
    },
    "111B-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`兩座塔高相等，傾斜度 \(\alpha、\beta\) 滿足
      \[
      \sin\alpha=\frac15,\qquad\sin\beta=\frac7{25}。
      \]
      偏移距離相差 20 公尺。求兩塔頂到地面的垂直距離之差。`,
      solution: [
        String.raw`設塔高為 \(x\)。由
        \[
        x\left(\frac7{25}-\frac15\right)=20
        \]
        得 \(x=250\)。`,
        String.raw`兩垂直高度為
        \[
        250\cos\alpha=100\sqrt6,\qquad
        250\cos\beta=240。
        \]
        所以相差
        \[
        100\sqrt6-240\approx4.9\text{ 公尺}。
        \]`
      ]
    }
  });
})();
