(() => {
  Object.assign(window.MATH_CONTENT, {
    "103M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`下列哪一個選項等於 \(\log\left(2^{(3^5)}\right)\)？`,
      options: { "1": String.raw`\(5\log(2^3)\)`, "2": String.raw`\(3\times5\log2\)`, "3": String.raw`\(5\log2\times\log3\)`, "4": String.raw`\(5(\log2+\log3)\)`, "5": String.raw`\(3^5\log2\)` },
      solution: [String.raw`由冪次的對數律，
      \[
      \log\left(2^{(3^5)}\right)=3^5\log2。
      \]`],
      optionAnalysis: { "1": "此式等於 15log2。", "2": "此式也只等於 15log2。", "3": "對數律沒有把指數改成 log3。", "4": "這是 5log6。", "5": "指數 3⁵ 可直接移到對數前。" }
    },
    "103M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`空間中 \(A(5,0,12)、B(-5,0,12)\)，點 P 在 xy 平面且 \(PA=PB=13\)。哪一點可能是 P？`,
      options: { "1": String.raw`\((5,0,0)\)`, "2": String.raw`\((5,5,0)\)`, "3": String.raw`\((0,12,0)\)`, "4": String.raw`\((0,0,0)\)`, "5": String.raw`\((0,0,24)\)` },
      solution: [String.raw`與 A、B 等距迫使 P 在垂直平分面 \(x=0\)，又 P 在 xy 平面，所以 \(P=(0,y,0)\)。`, String.raw`由 \(PA^2=25+y^2+144=169\)，得 \(y=0\)，故 \(P=(0,0,0)\)。`],
      optionAnalysis: { "1": "不在 A、B 的垂直平分面。", "2": "x 坐標不為 0。", "3": "距離大於 13。", "4": "到 A、B 的距離皆為 13。", "5": "不在 xy 平面。" }
    },
    "103M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`以 \((\pm1,\pm1)\) 為頂點的正方形邊界，與圓 \(x^2+y^2+2x+2y+1=0\) 有幾個交點？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: [String.raw`圓可寫成 \((x+1)^2+(y+1)^2=1\)，圓心是正方形左下頂點 \((-1,-1)\)，半徑為 1。`, String.raw`圓與正方形邊界分別交於 \((-1,0)\) 與 \((0,-1)\)，共有 2 個交點。`],
      optionAnalysis: { "1": "圓同時穿過相鄰兩邊。", "2": "兩交點為 (-1,0)、(0,-1)。", "3": "圓的其餘部分在正方形外。", "4": "不會碰到另外兩邊。", "5": "圓確實穿過正方形相鄰邊。" }
    },
    "103M-4": {
      verified: true, sourcePage: 2,
      stem: String.raw`滿足絕對值不等式 \(|4x-12|\le2x\) 的實數 x 所成區間，其長度為何？`,
      options: { "1": "1", "2": "2", "3": "3", "4": "4", "5": "6" },
      solution: [String.raw`右側須非負，且
      \[
      -2x\le4x-12\le2x。
      \]
      左半得 \(x\ge2\)，右半得 \(x\le6\)，解集為 \([2,6]\)，長度是 4。`],
      optionAnalysis: { "1": "只取了部分區間。", "2": "上、下界相差不是 2。", "3": "未正確同時解兩側不等式。", "4": "6-2=4。", "5": "把上界 6 誤當成長度。" }
    },
    "103M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`設 \((1+\sqrt2)^6=a+b\sqrt2\)，其中 \(a,b\) 為整數。哪一式等於 b？`,
      options: { "1": String.raw`\(\binom60+2\binom62+2^2\binom64+2^3\binom66\)`, "2": String.raw`\(\binom61+2\binom63+2^2\binom65\)`, "3": "二項展開全部項的係數和", "4": String.raw`\(2\binom61+2^2\binom63+2^3\binom65\)`, "5": String.raw`\(\binom60+2^2\binom62+2^4\binom64+2^6\binom66\)` },
      solution: [String.raw`只有 \((\sqrt2)^k\) 中 k 為奇數的項會含 \(\sqrt2\)。抽出一個 \(\sqrt2\) 後，
      \[
      b=\binom61+2\binom63+2^2\binom65。
      \]`],
      optionAnalysis: { "1": "這是偶次項，屬於 a。", "2": "正確收集 k=1、3、5 的項。", "3": "混合了有理與根式部分。", "4": "每一項多乘了一個 2。", "5": "仍是偶次項的錯誤次方。" }
    },
    "103M-6": {
      verified: true, sourcePage: 2,
      stem: "某病第一類占 70%，每次用藥成功率 70%且各次獨立；第二類占 30%，此藥完全無效。未知類型且第一次療程失敗時，第二次療程成功的條件機率最接近何者？",
      options: { "1": "0.25", "2": "0.3", "3": "0.35", "4": "0.4", "5": "0.45" },
      solution: [String.raw`第一次失敗的機率為 \(0.7(0.3)+0.3=0.51\)，失敗後仍屬第一類的機率為 \(0.21/0.51=7/17\)。`, String.raw`第二次成功還須乘上 0.7，故機率為 \(\frac7{17}\times0.7\approx0.288\)，最接近 0.3。`],
      optionAnalysis: { "1": "低估失敗後仍屬第一類的比例。", "2": "精確計算約為 0.288。", "3": "直接用原先類型比例計算會偏高。", "4": "未充分更新第一次失敗的資訊。", "5": "把第二類也視為可能成功。" }
    },
    "103M-7": {
      verified: true, sourcePage: 3,
      stem: "x、y 坐標皆為整數的點稱為格子點。請選出圖形上存在格子點的選項。",
      options: { "1": String.raw`\(y=x^2\)`, "2": String.raw`\(3y=9x+1\)`, "3": String.raw`\(y^2=-x-2\)`, "4": String.raw`\(x^2+y^2=3\)`, "5": String.raw`\(y=\log_9x+\frac12\)` },
      solution: [String.raw`（1）可取 \((0,0)\)；（3）可取 \((-2,0)\)；（5）可取 \(x=3\)，此時 \(y=1\)。`, "（2）整數 x 時 y 會多出 1/3；（4）兩個整數平方不可能和為 3。"],
      optionAnalysis: { "1": "(0,0) 是格子點。", "2": "y=3x+1/3，不可能為整數。", "3": "(-2,0) 符合。", "4": "整數平方模 4 只能是 0 或 1，無法相加為 3。", "5": "取 x=3 可得 y=1。" }
    },
    "103M-8": {
      verified: true, sourcePage: 3,
      stem: "關於下列五個根式不等式，請選出其中正確的選項。",
      options: { "1": String.raw`\(\sqrt{13}>3.5\)`, "2": String.raw`\(\sqrt{13}<3.6\)`, "3": String.raw`\(\sqrt{13}-\sqrt3>\sqrt{10}\)`, "4": String.raw`\(\sqrt{13}+\sqrt3>\sqrt{16}\)`, "5": String.raw`\(\frac1{\sqrt{13}-\sqrt3}>0.6\)` },
      solution: [String.raw`因 \(3.5^2=12.25<13\)，（1）正確；而 \(3.6^2=12.96<13\)，（2）錯。`, String.raw`近似值 \(\sqrt{13}\approx3.606、\sqrt3\approx1.732\)，可判定（3）錯、（4）對、（5）左式約 \(0.534<0.6\)。`],
      optionAnalysis: { "1": "平方比較可知成立。", "2": "√13 其實略大於 3.6。", "3": "左式約 1.874，小於 √10。", "4": "左式約 5.338，大於 4。", "5": "分母約 1.874，倒數約 0.534。" }
    },
    "103M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`物體由 \((-3,6)\) 出發，沿固定向量 \(\vec v\) 的方向持續前進。選出可以進入第一象限的向量。`,
      options: { "1": String.raw`\((1,-2)\)`, "2": String.raw`\((1,-1)\)`, "3": String.raw`\((0.001,0)\)`, "4": String.raw`\((0.001,1)\)`, "5": String.raw`\((-0.001,1)\)` },
      solution: [String.raw`位置為 \((-3,6)+t\vec v\)，需存在 \(t>0\) 使兩坐標皆正。（2）可取 \(3<t<6\)；（3）取 \(t>3000\)；（4）取 \(t>3000\)。`, "（1）在 x 轉正前 y 已不正；（5）的 x 坐標持續減少。"],
      optionAnalysis: { "1": "x>0 要 t>3，但此時 y<0。", "2": "例如 t=4 時位於第一象限。", "3": "雖很慢，持續足夠久仍能使 x>0。", "4": "兩坐標最終都為正。", "5": "x 分量為負，永遠無法越過 y 軸。" }
    },
    "103M-10": {
      verified: true, sourcePage: 4,
      stem: String.raw`實係數二次多項式 f 滿足 \(f(1)>0、f(2)<0、f(3)>0\)。令 \(g(x)=f(x)+(x-2)(x-3)\)，選出正確敘述。`,
      options: { "1": "f 的圖形開口向下", "2": "g 的圖形開口向下", "3": String.raw`\(g(1)>f(1)\)`, "4": "g(x)=0 在 1 與 2 間恰有一個實根", "5": String.raw`若 \(\alpha\) 為 f=0 的最大實根，則 \(g(\alpha)>0\)` },
      solution: ["f 在 (1,2)、(2,3) 各有一根，因此開口向上；g 的二次項係數也為正。", String.raw`\(g(1)=f(1)+2>f(1)\)，且 \(g(1)>0、g(2)=f(2)<0\)。g 為二次式，另一根位於 (2,3)，故 (1,2) 恰有一根。`],
      optionAnalysis: { "1": "三點符號迫使 f 開口向上。", "2": "g 的首項係數更大，仍向上。", "3": "代入 x=1 多出 2。", "4": "端點異號且二次式另一根在 (2,3)。", "5": "最大根 α 在 (2,3)，故 (α-2)(α-3)<0。" }
    },
    "103M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`等差數列首項 \(a_1=1\)。請選出必然正確的敘述。`,
      options: { "1": String.raw`\(a_{100}>0\Rightarrow a_{1000}>0\)`, "2": String.raw`\(a_{100}<0\Rightarrow a_{1000}<0\)`, "3": String.raw`\(a_{1000}>0\Rightarrow a_{100}>0\)`, "4": String.raw`\(a_{1000}<0\Rightarrow a_{100}<0\)`, "5": String.raw`\(a_{1000}-a_{10}=10(a_{100}-a_1)\)` },
      solution: [String.raw`設公差為 d，則 \(a_n=1+(n-1)d\)。（2）給出 \(d<-1/99\)，故第 1000 項必負；（3）給出 \(d>-1/999\)，故第 100 項必正。`, String.raw`且 \(a_{1000}-a_{10}=990d=10(99d)=10(a_{100}-a_1)\)。`],
      optionAnalysis: { "1": "負公差可使第 100 項仍正而第 1000 項已負。", "2": "到第 100 項已負，後續項在負公差下更小。", "3": "第 1000 項仍正可保證較早的第 100 項正。", "4": "第 1000 項負時，第 100 項仍可能正。", "5": "兩側都等於 990d。" }
    },
    "103M-12": {
      verified: true, sourcePage: 4,
      stem: "失業率表列：35～44 歲 12.66%、35～39 歲 9.80%、40～44 歲 13.17%、45～49 歲 7.08%。依表選出必然正確的敘述。",
      options: { "1": "四個範圍中 40～44 歲失業率最高", "2": "40～44 歲勞動力人數多於 45～49 歲", "3": "40～49 歲失業率等於 13.17% 與 7.08% 的平均", "4": "35～39 歲勞動力人數少於 40～44 歲", "5": "40～44 歲失業率降低會使 45～49 歲失業率升高" },
      solution: ["直接比較四個百分比可知（1）正確。35～44 歲的 12.66% 是兩子群的加權平均，且比中點更靠近 13.17%，表示 40～44 歲權重較大，故（4）正確。", "不同年齡層勞動力人數未知，不能用簡單平均，也不存在一組失業率變動必然帶動另一組的關係。"],
      optionAnalysis: { "1": "13.17% 是表中最大值。", "2": "表中沒有足夠資料比較這兩組人數。", "3": "合併失業率應按勞動力人數加權。", "4": "加權平均更靠近 13.17%，所以該組權重較大。", "5": "兩組統計可各自變動，無必然反向關係。" }
    },
    "103M-13": {
      verified: true, sourcePage: 5,
      stem: "圓 O 半徑 24，OC=26，OC 交圓於 A；由 C 作切線 CD，B 為 A 到 OD 的垂足。求 AB。",
      solution: [String.raw`直角三角形 OCD 中，\(OD=24、OC=26\)，故 \(CD=10\)。取 \(O=(0,0)、D=(24,0)、C=(24,10)\)。`, String.raw`A 在 OC 上且 \(OA/OC=24/26=12/13\)，所以 A 的 y 坐標為 \(120/13\)。B 是投影到 OD，故 \(AB=120/13\)。`]
    },
    "103M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`直線 \(y=ax+b\) 同時與 \(y=x^2\) 及 \(y=(x-2)^2+12\) 各恰交於一點，求 a、b。`,
      solution: [String.raw`與 \(y=x^2\) 相切時，\(x^2-ax-b=0\) 判別式為 0，得 \(b=-a^2/4\)。`, String.raw`第二拋物線寫成 \(x^2-4x+16\)，相切條件得 \(b=16-(a+4)^2/4\)。聯立可得 \(a=6、b=-9\)。`]
    },
    "103M-15": {
      verified: true, sourcePage: 5,
      stem: "小鎮 A 距一直道路 6 公里，與道路上的小鎮 B 相距 12 公里。在道路上建一超市，使其與 A、B 等距，求此距離。",
      solution: [String.raw`A 在道路上的垂足與 B 相距 \(\sqrt{12^2-6^2}=6\sqrt3\)。設超市距 B 為 x，則
      \[
      x^2=(x-6\sqrt3)^2+6^2。
      \]
      解得 \(x=4\sqrt3\) 公里。`]
    },
    "103M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`空間中 \(A(2,0,0)、B(3,4,2)、C(-2,4,0)、D(-1,3,1)\)。P 在直線 CD 上變動，求 \(\overrightarrow{PA}\cdot\overrightarrow{PB}\) 的最小值。`,
      solution: [String.raw`令 \(P=C+t(D-C)=(-2+t,4-t,t)\)。代入內積可得
      \[
      \overrightarrow{PA}\cdot\overrightarrow{PB}=3t^2-15t+20。
      \]`, String.raw`二次式在 \(t=5/2\) 取最小值 \(20-\frac{225}{12}=\frac54\)。`]
    },
    "103M-17": {
      verified: true, sourcePage: 6,
      stem: String.raw`單位向量 \(\vec u、\vec v\) 的長度皆為 1。若 \(\vec u+\vec v\) 與 \(\vec u\) 的夾角為 \(75^\circ\)，求 \(\vec u\cdot\vec v\)。`,
      solution: [String.raw`設 \(c=\vec u\cdot\vec v\)，則
      \[
      \cos75^\circ=\frac{1+c}{\sqrt{2+2c}}=\sqrt{\frac{1+c}{2}}。
      \]
      所以 \(c=2\cos^2 75^\circ-1=\cos150^\circ=-\frac{\sqrt3}{2}\)。`]
    },
    "103M-18": {
      verified: true, sourcePage: 6,
      stem: "題圖的房間地面由 12 個正方形組成，每塊長方形骨牌覆蓋兩個相鄰正方形。用 6 塊骨牌鋪滿共有幾種方法？",
      solution: ["每一步固定尚未覆蓋且位置最靠左上的方格，分別嘗試向右或向下放置骨牌；若相鄰格不存在或已占用便剪枝。", "依官方題圖的 12 格形狀完整遞迴枚舉，合法鋪法共 11 種。"]
    },
    "103M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`已知 \(\begin{bmatrix}a&b\\c&d\end{bmatrix}\) 是轉移矩陣，且行列式為 \(5/8\)。求 \(a+d\)。`,
      solution: [String.raw`轉移矩陣各欄和為 1，故 \(c=1-a、d=1-b\)。其行列式
      \[
      ad-bc=a-b=\frac58。
      \]`, String.raw`因此 \(a+d=a+1-b=1+\frac58=\frac{13}{8}\)。`]
    },
    "103M-20": {
      verified: true, sourcePage: 6,
      stem: "正三角形 ABC 邊長為 1，題圖三個指定角皆為 15°，三條線所成正三角形 DEF 的邊長為何？",
      solution: [String.raw`利用正三角形的 \(60^\circ\) 角與三個 \(15^\circ\) 條件，對分割出的全等三角形套用正弦定理，可得
      \[
      DE=2\sin15^\circ。
      \]`, String.raw`由 \(\sin15^\circ=\frac{\sqrt6-\sqrt2}{4}\)，所以
      \[
      DE=\frac{\sqrt6-\sqrt2}{2}。
      \]`]
    }
  });
})();
