(() => {
  Object.assign(window.MATH_CONTENT, {
    "110M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`設
      \[
      A=\begin{bmatrix}1&2\\0&3\end{bmatrix},\qquad
      A^4=\begin{bmatrix}a&b\\c&d\end{bmatrix}。
      \]
      求 \(a+b+c+d\)。`,
      options: { "1": "158", "2": "162", "3": "166", "4": "170", "5": "174" },
      solution: [
        String.raw`上三角矩陣冪次的對角元素為 \(1^4、3^4\)，右上元素為
        \[
        2(1^3+1^2\cdot3+1\cdot3^2+3^3)=80。
        \]`,
        String.raw`故 \(A^4=\begin{bmatrix}1&80\\0&81\end{bmatrix}\)，元素總和為 162。`
      ],
      optionAnalysis: {
        "1": "右上元素的等比和計算不足。",
        "2": "四個元素為 1、80、0、81，總和 162。",
        "3": "把矩陣乘法誤當成逐元素四次方。",
        "4": "未正確處理上三角矩陣的非對角元素。",
        "5": "不符合直接乘方結果。"
      }
    },
    "110M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`五項實數數列 \(a_1,\ldots,a_5\) 每項都大於 1，且每相鄰兩項中，一項是另一項的 2 倍。若 \(a_1=\log_{10}36\)，則 \(a_5\) 有幾種可能值？`,
      options: { "1": "3", "2": "4", "3": "5", "4": "7", "5": "8" },
      solution: [
        String.raw`每一步使數值乘 2 或除 2。因 \(1<\log36<2\)，任何時刻只要比 \(a_1\) 多除一次 2，就會小於 1，不合題意。`,
        "四步中可行路徑的最終淨乘方指數為 0、2、4，因此 \(a_5\) 有 3 種可能值。"
      ],
      optionAnalysis: {
        "1": "可行終值為 \(a_1、4a_1、16a_1\)，共 3 種。",
        "2": "把路徑數誤當成不同終值數。",
        "3": "未排除中途降到 1 以下的路徑。",
        "4": "重複計入相同終值。",
        "5": "把部分操作順序當成不同數值。"
      }
    },
    "110M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`銳角三角形 \(ABC\) 的外接圓為 \(\Gamma\)。圓外點 \(P\) 所引兩切線分別切於 \(B、C\)，且 \(\angle BPC=\theta\)。求 \(\cos A\)。`,
      options: {
        "1": String.raw`\(\sin2\theta\)`, "2": String.raw`\(\frac{\sin\theta}{2}\)`,
        "3": String.raw`\(\sin\frac\theta2\)`, "4": String.raw`\(\frac{\cos\theta}{2}\)`,
        "5": String.raw`\(\cos\frac\theta2\)`
      },
      solution: [
        String.raw`兩切線夾角與圓心角互補：
        \[
        \angle BOC=180^\circ-\theta。
        \]`,
        String.raw`圓周角 \(A=\frac12\angle BOC=90^\circ-\frac\theta2\)，所以
        \[
        \cos A=\sin\frac\theta2。
        \]`
      ],
      optionAnalysis: {
        "1": "誤用倍角。",
        "2": "正弦半角不是正弦值除以 2。",
        "3": "由切線夾角與圓周角關係可得。",
        "4": "餘弦值除以 2 沒有對應幾何關係。",
        "5": "互餘角轉換後應是正弦半角。"
      }
    },
    "110M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`非零平面向量 \(\vec a,\vec b\) 所成三角形中，以 \(2\vec a+\vec b\) 與 \(\vec a+2\vec b\) 為兩邊的面積為 6。求以 \(3\vec a+\vec b\) 與 \(\vec a+3\vec b\) 為兩邊的三角形面積。`,
      options: { "1": "8", "2": "9", "3": "12", "4": "13.5", "5": "16" },
      solution: [
        String.raw`第一組向量外積為
        \[
        (2\vec a+\vec b)\times(\vec a+2\vec b)=3(\vec a\times\vec b)。
        \]
        故 \(\frac12\cdot3|\vec a\times\vec b|=6\)，得 \(|\vec a\times\vec b|=4\)。`,
        String.raw`第二組外積為 \(8(\vec a\times\vec b)\)，面積
        \[
        \frac12\cdot8\cdot4=16。
        \]`
      ],
      optionAnalysis: {
        "1": "只取了外積係數，漏乘基本平行四邊形面積。",
        "2": "把係數誤算為 9。",
        "3": "沿用第一組的係數 3。",
        "4": "未利用外積的雙線性展開。",
        "5": "外積係數 8，三角形面積為 16。"
      }
    },
    "110M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`實係數三次多項式 \(f(x)\) 滿足 \((x+1)f(x)\) 除以 \(x^3+2\) 的餘式為 \(x+2\)，且 \(f(0)=4\)。求 \(f(2)\)。`,
      options: { "1": "8", "2": "10", "3": "15", "4": "18", "5": "20" },
      solution: [
        String.raw`設 \(f(x)=Ax^3+Bx^2+Cx+4\)。由
        \[
        (x+1)f(x)-(x+2)
        \]
        可被 \(x^3+2\) 整除，比較係數得
        \[
        A+B=1,\quad B+C=0,\quad C+3=2A。
        \]`,
        String.raw`解得 \(A=2、B=-1、C=1\)，所以
        \[
        f(2)=2(8)-4+2+4=18。
        \]`
      ],
      optionAnalysis: {
        "1": "只代入部分低次項。",
        "2": "商與餘式的係數比較不完整。",
        "3": "漏掉常數項或二次項。",
        "4": "由多項式恆等式解得 f(2)=18。",
        "5": "一次項與常數項符號有誤。"
      }
    },
    "110M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`正六邊形 \(ABCDEF\) 邊長為 3，且 \(A=(3,0)、D=(-3,0)\)。橢圓
      \[
      \frac{x^2}{16}+\frac{y^2}{7}=1
      \]
      與此六邊形有幾個交點？`,
      options: { "1": "0", "2": "2", "3": "4", "4": "6", "5": "8" },
      solution: [
        "A、D 位於橢圓內；其餘四個頂點 \((\pm3/2,\pm3\sqrt3/2)\) 位於橢圓外。",
        "四條斜邊各由內到外，分別有 1 個交點；上、下兩條水平邊的中點在橢圓內而兩端在外，各有 2 個交點。總數 \(4+2+2=8\)。"
      ],
      optionAnalysis: {
        "1": "正六邊形邊線會穿越橢圓。",
        "2": "只計入一組對稱交點。",
        "3": "漏掉上下水平邊的交點。",
        "4": "每條水平邊各有兩個交點。",
        "5": "四條斜邊各一個、兩條水平邊各兩個，共 8 個。"
      }
    },
    "110M-7": {
      verified: true, sourcePage: 2,
      stem: "實驗記錄把實際數字 6、8、9 看成 6、8、9、其他的機率。三列依序為 (0.4,0.3,0.2,0.1)、(0.3,0.4,0.1,0.2)、(0.2,0.2,0.5,0.1)。選出正確敘述。",
      options: {
        "1": "實際為 8 時，至少一半會看成 8", "2": "實際為 6 時，六成會看成不是 6",
        "3": "6、8、9 中，9 被誤認的機率最低", "4": "看成 6 時，實際為 6 的機率不到一半",
        "5": "看成 9 時，實際為 9 的機率超過 2/3"
      },
      solution: [
        "實際為 6 的正確認出率 0.4，所以誤認率 0.6；實際為 9 的誤認率 0.5，低於 6、8 的 0.6，故（2）、（3）正確。",
        String.raw`三張卡各被同樣多受試者觀看。看成 6 時實際為 6 的條件機率為
        \[
        \frac{0.4}{0.4+0.3+0.2}=\frac49<\frac12，
        \]
        故（4）正確。`
      ],
      optionAnalysis: {
        "1": "實際 8 被認成 8 的機率只有 0.4。",
        "2": "1-0.4=0.6。",
        "3": "9 的誤認率為 0.5，三者最低。",
        "4": "貝氏條件機率為 4/9。",
        "5": "條件機率為 \(0.5/(0.2+0.1+0.5)=5/8\)，未超過 2/3。"
      }
    },
    "110M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`圓 \(\Gamma\) 以原點為圓心，且通過 \(A=(3,4)\)。圓上相異點 \(B、C\) 滿足
      \[
      \overrightarrow{BC}=\overrightarrow{OA}。
      \]
      選出正確敘述。`,
      options: {
        "1": "直線 OA 與圓的另一交點是 (-4,-3)", "2": "直線 BC 斜率為 3/4",
        "3": String.raw`\(\angle AOC=60^\circ\)`, "4": String.raw`\([ABC]=25\sqrt3/2\)`,
        "5": "B、C 在同一象限"
      },
      solution: [
        String.raw`圓半徑為 5，弦 \(BC=|\overrightarrow{OA}|=5\)，故其圓心角為 \(60^\circ\)。又 \(C=B+A\)，由 \(|B|=|C|=5\) 得 \(A\cdot C=25/2\)，所以 \(\angle AOC=60^\circ\)。`,
        "解得的兩組 B、C 分別同在第二象限或同在第四象限，故（5）也正確。"
      ],
      optionAnalysis: {
        "1": "另一交點是 (-3,-4)。",
        "2": "BC 與 OA 平行，斜率為 4/3。",
        "3": "由內積可得夾角 60°。",
        "4": "三角形面積為 \(25\sqrt3/4\)，少一半。",
        "5": "兩組可能解中 B、C 都位於同一象限。"
      }
    },
    "110M-9": {
      verified: true, sourcePage: 3,
      stem: "兩投票所有效票為 x、y。第一所甲乙得票率 40%、60%；第二所甲乙得票率 55%、45%。總票高者當選。選出能決定當選人的條件。",
      options: {
        "1": "只知道 x+y", "2": "x:y 小於 1:2", "3": "x>y",
        "4": "甲在第一所得票數多於第二所", "5": "乙在第二所得票數多於第一所"
      },
      solution: [
        String.raw`甲勝乙等價於
        \[
        0.4x+0.55y>0.6x+0.45y
        \Longleftrightarrow y>2x。
        \]`,
        "因此 x:y<1:2 可確定甲勝；x>y 可確定乙勝；若 \(0.4x>0.55y\)，更可推出 x 足夠大而確定乙勝。故（2）、（3）、（4）正確。"
      ],
      optionAnalysis: {
        "1": "總票數固定仍可改變 x、y 比例而改變勝負。",
        "2": "等價於 y>2x，甲勝。",
        "3": "必有 y<2x，乙勝。",
        "4": "此條件給 x>1.375y，必為乙勝。",
        "5": "只給 y>4x/3，可能落在勝負分界兩側。"
      }
    },
    "110M-10": {
      verified: true, sourcePage: 4,
      stem: "三角形 ABC 已知 AB=4、AC=6。再知道哪些條件即可唯一確定三角形的形狀與大小？",
      options: { "1": "cos A", "2": "cos B", "3": "cos C", "4": "三角形面積", "5": "外接圓半徑" },
      solution: [
        "知道 cos A 是兩邊與夾角（SAS），唯一確定。",
        "知道 cos B 時，已知 B 的對邊 AC=6 大於另一已知邊 AB=4；正弦定理的另一候選角不可能組成三角形，因此也唯一。其餘條件都可能有兩個不同形狀。"
      ],
      optionAnalysis: {
        "1": "兩邊及夾角可唯一決定。",
        "2": "此 SSA 配置因較大已知邊對應 B，排除歧義。",
        "3": "較小邊對應已知 C，可能出現 SSA 兩解。",
        "4": "同一正弦值可對應互補的 A。",
        "5": "正弦定理可能留下角的互補歧義。"
      }
    },
    "110M-11": {
      verified: true, sourcePage: 4,
      stem: "梯形 ABCD 上底 AB=10、下底 CD=15，且腰 AD=BC+1。選出正確敘述。",
      options: {
        "1": String.raw`\(\angle A>\angle B\)`, "2": String.raw`\(\angle B+\angle D<180^\circ\)`,
        "3": String.raw`\(\overrightarrow{BA}\cdot\overrightarrow{BC}<0\)`, "4": "BC 可能為 2",
        "5": String.raw`\(\overrightarrow{CB}\cdot\overrightarrow{CD}<30\)`
      },
      solution: [
        "設 D=(0,0)、C=(15,0)、A=(x,h)、B=(x+10,h)。由 AD=BC+1 可得 x>3，並可比較兩腰方向。",
        "因此 A 端內角較大，且 \(\angle B+\angle D<180^\circ\)。又 \(\overrightarrow{CB}\cdot\overrightarrow{CD}=15(5-x)<30\)。故（1）、（2）、（5）正確。"
      ],
      optionAnalysis: {
        "1": "較長腰 AD 對應較大的上底角 A。",
        "2": "由 x>3 的幾何位置可得此角和小於 180°。",
        "3": "內積符號會隨 x 是否超過 5 改變。",
        "4": "若 BC=2，必要的水平投影會使高度為 0，無法形成梯形。",
        "5": "由 x>3 得 \(15(5-x)<30\)。"
      }
    },
    "110M-12": {
      verified: true, sourcePage: 4,
      stem: "2 黑、2 白、3 紅共 7 球排一列。A 表示兩黑相鄰，B 表示兩黑不相鄰，C 表示任兩紅都不相鄰。選出正確敘述。",
      options: {
        "1": String.raw`\(P(A)>P(B)\)`, "2": String.raw`\(P(C)=2/7\)`,
        "3": String.raw`\(2P(C|A)+5P(C|B)<2\)`, "4": String.raw`\(P(C|A)>0.2\)`,
        "5": String.raw`\(P(C|B)>0.3\)`
      },
      solution: [
        String.raw`共有 \(7!/(2!2!3!)=210\) 種。A 有 60 種，所以 B 有 150 種。C 可先排 4 顆非紅球再選 5 個空隙中的 3 個，共 \(6\binom53=60\) 種，故 \(P(C)=2/7\)。`,
        "C∩A 有 12 種，所以 \(P(C|A)=12/60=0.2\)；C∩B 有 48 種，所以 \(P(C|B)=48/150=0.32\)。故（2）、（5）正確。"
      ],
      optionAnalysis: {
        "1": "P(A)=2/7，小於 P(B)=5/7。",
        "2": "C 有 60/210=2/7。",
        "3": "左式 \(=2(0.2)+5(0.32)=2\)，不是小於 2。",
        "4": "條件機率恰為 0.2。",
        "5": "條件機率為 0.32，大於 0.3。"
      }
    },
    "110M-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`設 \(f(x)=x^3+ax^2+bx+c\)，其中 \(a,b,c\) 都是有理數。選出正確敘述。`,
      options: {
        "1": String.raw`\(y=f(x)\) 與 \(y=x^2+100\) 可能沒有交點`,
        "2": String.raw`若 \(f(0)f(1)<0<f(0)f(2)\)，則 f 有三相異實根`,
        "3": String.raw`若 \(1+3i\) 是根，則 f 有一個有理根`,
        "4": String.raw`可使 \(f(1),f(2),f(3),f(4)\) 成等差`,
        "5": String.raw`可使 \(f(1),f(2),f(3),f(4)\) 成等比`
      },
      solution: [
        "選項（2）的符號條件保證 (0,1)、(1,2) 各有一根；再配合首項係數為正的三次函數兩端行為，可得第三個相異實根。",
        "若有根 \(1+3i\)，共軛 \(1-3i\) 也是根；根和為有理數，第三根必為有理數，故（3）正確。",
        String.raw`取四個值成等比 \(6,12,24,48\)，其三階差為 6，恰可由首項係數 1 的有理係數三次式插值得到，故（5）正確。`
      ],
      optionAnalysis: {
        "1": "兩圖相減仍為實係數三次式，必有實根，故必相交。",
        "2": "兩個指定區間各一根，第三根由端行為保證。",
        "3": "共軛根成對，剩餘根由有理根和得到。",
        "4": "首項係數 1 的三次式三階差固定為 6，不可能四值等差。",
        "5": "例如指定 6、12、24、48 可構造。"
      }
    },
    "110M-14": {
      verified: true, sourcePage: 5,
      stem: "機器貓每 8 秒為一週期：先以每秒 4 單位移動 6 秒，再休息 2 秒。從原點正向出發，何時抵達坐標 116？",
      solution: [
        "每週期移動 24 單位。4 個完整週期用 32 秒並到達 96。",
        "剩餘 20 單位需移動 5 秒，所以開始後 37 秒抵達。"
      ]
    },
    "110M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`直線
      \[
      L_1:\frac x2=\frac y{-3}=\frac z{-5}
      \]
      在平面 E 上。直線 \(L_2:(x,y,z)=(1,1,1)+t(0,2,3)\) 與 E 不相交。求 E。`,
      solution: [
        String.raw`E 同時包含 \(L_1\) 的方向 \((2,-3,-5)\)，並平行 \(L_2\) 的方向 \((0,2,3)\)。兩方向外積可取法向量
        \[
        (1,-6,4)。
        \]`,
        "L₁ 通過原點，所以 \(E:x-6y+4z=0\)。"
      ]
    },
    "110M-16": {
      verified: true, sourcePage: 5,
      stem: "從 1～9 任取三個相異數，求三數乘積為完全平方數的機率。",
      solution: [
        String.raw`全部組合有 \(\binom93=84\) 種。符合者為
        \[
        (1,2,8),(1,4,9),(2,3,6),(2,4,8),(2,8,9),(3,6,8)，
        \]
        共 6 種。`,
        String.raw`故機率為 \(6/84=1/14\)。`
      ]
    },
    "110M-17": {
      verified: true, sourcePage: 6,
      stem: String.raw`邊長 4、中心 \((1,1)\)、各邊平行坐標軸的正方形 \(\Gamma\)，與 \(y=a2^x\) 的圖形相交。求實數 \(a\) 的最大可能範圍。`,
      solution: [
        String.raw`正方形範圍為 \(-1\le x\le3、-1\le y\le3\)。因 \(2^x>0\)，
        \[
        a=\frac{y}{2^x}。
        \]`,
        "最大值取 y=3、x=-1，得 6；最小值取 y=-1、x=-1，得 -2。且中間各值皆可達，所以 \(-2\le a\le6\)。"
      ]
    },
    "110M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`將
      \[
      \left(\sqrt[3]{49}\right)^{100}=a\times10^n,\qquad1\le a<10
      \]
      寫成科學記號。若 \(m\) 是 a 的整數部分，求 \((m,n)\)。`,
      solution: [
        String.raw`取常用對數：
        \[
        \log\left(\left(\sqrt[3]{49}\right)^{100}\right)
        =\frac{200}{3}\log7
        \approx\frac{200}{3}(0.8451)=56.34。
        \]`,
        "所以 n=56，而 \(a=10^{0.34}\) 介於 2 與 3，整數部分 m=2。故 \((m,n)=(2,56)\)。"
      ]
    },
    "110M-19": {
      verified: true, sourcePage: 6,
      stem: "機器人每次前進 1 公尺，轉向依序重複「逆時針 45°、順時針 90°」。路徑形成封閉區域，求其面積。",
      solution: [
        "依序寫出 16 段單位向量後回到起點；各頂點坐標只含整數與 \(\sqrt2/2\)。",
        String.raw`把 16 個頂點依路徑順序代入鞋帶公式
        \[
        \frac12\left|\sum x_iy_{i+1}-y_ix_{i+1}\right|
        \]
        化簡得封閉區域面積
        \[
        8+4\sqrt2。
        \]`
      ]
    },
    "110M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`四面體 \(ABCD\) 中，
      \[
      AB=AC=AD=4\sqrt6,\quad BD=CD=8,\quad\cos\angle BAC=\frac13。
      \]
      求 D 到平面 ABC 的距離。`,
      solution: [
        String.raw`令 A 為原點，\(\vec b=\overrightarrow{AB}、\vec c=\overrightarrow{AC}、\vec d=\overrightarrow{AD}\)。則
        \[
        |\vec b|^2=|\vec c|^2=|\vec d|^2=96,\quad
        \vec b\cdot\vec c=32。
        \]`,
        String.raw`由 \(BD=CD=8\) 得 \(\vec d\cdot\vec b=\vec d\cdot\vec c=64\)。故 d 在平面 ABC 的投影為 \((\vec b+\vec c)/2\)，其長度平方為 64。`,
        String.raw`所求高度平方 \(=96-64=32\)，所以距離為 \(4\sqrt2\)。`
      ]
    }
  });
})();
