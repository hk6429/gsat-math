window.MATH_CONTENT = {};

(() => {
  Object.assign(window.MATH_CONTENT, {
    "115A-1": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`財神廟舉辦抽發財金活動：參加者抽兩次籤，每次抽籤出現「吉」、「祥」的機率皆為 \(\frac{1}{3}\)。如果兩次都抽得「吉」，獲得獎金 180 元；如果兩次都抽得「祥」，獲得獎金 90 元；其餘情況則無獎金。試問參加者可獲獎金的期望值為何？`,
      options: {
        "1": "20 元",
        "2": "30 元",
        "3": "45 元",
        "4": "60 元",
        "5": "90 元"
      },
      solution: [
        String.raw`兩次都抽得「吉」的機率為 \(\frac{1}{3}\times\frac{1}{3}=\frac{1}{9}\)；兩次都抽得「祥」的機率也為 \(\frac{1}{9}\)。`,
        String.raw`其餘情況獎金為 0，因此期望值為 \[E(X)=180\times\frac{1}{9}+90\times\frac{1}{9}+0\times\frac{7}{9}=20+10=30。\]`
      ],
      optionAnalysis: {
        "1": String.raw`只計入「吉、吉」的期望貢獻 \(180\times\frac{1}{9}=20\)，漏掉「祥、祥」的 10 元。`,
        "2": String.raw`完整加總兩個有獎金事件的期望貢獻，得到 \(30\) 元。`,
        "3": String.raw`不符合期望值加權計算；兩個有獎金事件的貢獻總和為 \(20+10=30\)。`,
        "4": String.raw`不符合期望值加權計算；不能只看獎金金額而忽略事件機率。`,
        "5": String.raw`90 元是其中一種獎金，不是依所有可能結果加權後的期望值。`
      }
    },
    "115A-2": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`對任一實數 \(a\)，令 \([a]\) 代表滿足 \([a]\le a<[a]+1\) 的整數，例如：\([3]=3\)，\([3.1]=3\)，\([-3.1]=-4\)。關於函數
      \[f(x)=\left[\sqrt{99-x}\right]+\left[\sqrt{99+x}\right],\qquad -99\le x\le 99,\]
      試選出正確的選項。`,
      options: {
        "1": String.raw`\(f(-20)\le f(0)<f(1)\)`,
        "2": String.raw`\(f(-20)<f(1)\le f(0)\)`,
        "3": String.raw`\(f(1)<f(-20)\le f(0)\)`,
        "4": String.raw`\(f(0)<f(-20)\le f(1)\)`,
        "5": String.raw`\(f(0)\le f(1)<f(-20)\)`
      },
      solution: [
        String.raw`依高斯符號定義，\(f(-20)=[\sqrt{119}]+[\sqrt{79}]=10+8=18\)。`,
        String.raw`同理，\(f(0)=2[\sqrt{99}]=9+9=18\)，而 \(f(1)=[\sqrt{98}]+[\sqrt{100}]=9+10=19\)。`,
        String.raw`所以 \(f(-20)=f(0)<f(1)\)，符合選項（1）。`
      ],
      optionAnalysis: {
        "1": String.raw`三個函數值依序為 \(18,18,19\)，關係正確。`,
        "2": String.raw`錯在 \(f(1)=19\) 不小於或等於 \(f(0)=18\)。`,
        "3": String.raw`錯在 \(f(1)=19\) 並不小於 \(f(-20)=18\)。`,
        "4": String.raw`錯在 \(f(0)\) 與 \(f(-20)\) 同為 \(18\)，不是嚴格小於。`,
        "5": String.raw`錯在 \(f(1)=19\) 大於 \(f(-20)=18\)。`
      }
    },
    "115A-3": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`設 \(f(x)=a^x\)，其中 \(a\) 為正實數。已知 \(c_1,c_2,c_3\) 是公差為 \(\frac{10}{3}\) 的等差數列，且 \(f(c_1),f(c_2),f(c_3)\) 是公比為 4 的等比數列。則等比數列 \(f(10),f(8),f(6)\) 的公比為何？`,
      options: {
        "1": String.raw`\(2^{-\frac{6}{5}}\)`,
        "2": String.raw`\(2^{-\frac{3}{5}}\)`,
        "3": String.raw`\(2^{\frac{3}{5}}\)`,
        "4": String.raw`\(2^{\frac{6}{5}}\)`,
        "5": String.raw`\(2^{\frac{5}{3}}\)`
      },
      solution: [
        String.raw`因為 \(c_2-c_1=\frac{10}{3}\)，所以 \(\frac{f(c_2)}{f(c_1)}=a^{10/3}=4=2^2\)，得到 \(a=2^{3/5}\)。`,
        String.raw`數列 \(f(10),f(8),f(6)\) 的公比為 \(\frac{f(8)}{f(10)}=a^{-2}\)。`,
        String.raw`代入 \(a=2^{3/5}\)，公比為 \(a^{-2}=2^{-6/5}\)。`
      ],
      optionAnalysis: {
        "1": String.raw`由 \(a=2^{3/5}\) 得 \(a^{-2}=2^{-6/5}\)，正確。`,
        "2": String.raw`只取了 \(a^{-1}\)，沒有反映相鄰兩項的指數相差 2。`,
        "3": String.raw`這是底數 \(a\)，不是由 \(f(10)\) 到 \(f(8)\) 的公比。`,
        "4": String.raw`指數符號錯誤；數列的輸入由 10 降到 8，應為 \(a^{-2}\)。`,
        "5": String.raw`沒有由條件 \(a^{10/3}=4\) 正確解出底數與所求公比。`
      }
    },
    "115A-4": {
      verified: true,
      sourcePage: 1,
      stem: "某網遊有 16 種材料，其中 6 種為基本材料，10 種為進階材料。任選 3 種不同材料可以合成出草藥、食物、藥水中的 1 類道具，其合成規則如下：若 3 種材料均為基本材料，則合成結果必為同一種草藥；若 3 種材料中 2 種為基本材料、1 種為進階材料，則合成結果會根據不同的進階材料得到不同種的食物，但不會受到基本材料不同而改變；其他的組合都會合成出不同種的藥水。試問此網遊總共可合成出多少種道具？",
      options: {
        "1": "256",
        "2": "370",
        "3": "401",
        "4": "455",
        "5": "560"
      },
      solution: [
        String.raw`3 種皆為基本材料時，不論組合都得到同一種草藥，因此有 \(1\) 種。`,
        String.raw`2 種基本材料、1 種進階材料時，食物只由所選進階材料決定，因此有 \(10\) 種。`,
        String.raw`其餘情況是「1 種基本材料、2 種進階材料」或「3 種皆為進階材料」，且每組合得到不同藥水，共有 \(\binom{6}{1}\binom{10}{2}+\binom{10}{3}=270+120=390\) 種。`,
        String.raw`總數為 \(1+10+390=401\)。`
      ],
      optionAnalysis: {
        "1": String.raw`未依三種合成規則完整分組計數；正確總數為 \(401\)。`,
        "2": String.raw`漏算部分藥水組合；藥水共有 \(390\) 種。`,
        "3": String.raw`草藥 \(1\) 種、食物 \(10\) 種、藥水 \(390\) 種，合計 \(401\) 種。`,
        "4": String.raw`把不會因基本材料不同而改變的食物重複計數。`,
        "5": String.raw`這是 \(\binom{16}{3}\) 的材料組合總數，但題目規定部分組合會合成同一種道具。`
      }
    },
    "115A-5": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`已知實數三階方陣 \(A\) 滿足
      \[
      A\begin{bmatrix}1\\1\\0\end{bmatrix}=\begin{bmatrix}0\\-1\\1\end{bmatrix},\qquad
      A\begin{bmatrix}0\\-1\\1\end{bmatrix}=\begin{bmatrix}1\\1\\0\end{bmatrix},\qquad
      A\begin{bmatrix}1\\0\\-1\end{bmatrix}=\begin{bmatrix}0\\0\\0\end{bmatrix}.
      \]
      試問有多少個行向量 \(\vec v=\begin{bmatrix}v_1\\v_2\\v_3\end{bmatrix}\) 滿足
      \(A\vec v=\begin{bmatrix}1\\0\\1\end{bmatrix}\)，且 \(\vec v\) 垂直於行向量 \(\begin{bmatrix}0\\1\\0\end{bmatrix}\)？`,
      options: {
        "1": "1 個",
        "2": "2 個",
        "3": "3 個",
        "4": "0 個",
        "5": "無窮多個"
      },
      solution: [
        String.raw`令 \(u_1=(1,1,0)^T\)、\(u_2=(0,-1,1)^T\)、\(u_3=(1,0,-1)^T\)，則 \(Au_1=u_2\)、\(Au_2=u_1\)、\(Au_3=0\)。`,
        String.raw`設 \(\vec v=\alpha u_1+\beta u_2+\gamma u_3\)。垂直於 \((0,1,0)^T\) 表示第二分量為 0，因此 \(\alpha-\beta=0\)，即 \(\alpha=\beta\)。`,
        String.raw`又 \(A\vec v=\alpha u_2+\beta u_1=(1,0,1)^T\)，得到 \(\alpha=\beta=1\)。因為 \(Au_3=0\)，\(\gamma\) 可為任意實數。`,
        String.raw`所以 \(\vec v=u_1+u_2+\gamma u_3\) 有無窮多個。`
      ],
      optionAnalysis: {
        "1": String.raw`忽略了零空間方向 \(u_3\) 可任意加入。`,
        "2": String.raw`參數 \(\gamma\) 可取任意實數，不只產生兩個向量。`,
        "3": String.raw`參數 \(\gamma\) 可取任意實數，不只產生三個向量。`,
        "4": String.raw`例如取 \(\gamma=0\) 時，\(\vec v=u_1+u_2=(1,0,1)^T\) 即符合條件。`,
        "5": String.raw`因 \(Au_3=0\)，所有 \(u_1+u_2+\gamma u_3\) 都有相同像且符合垂直條件。`
      }
    },
    "115A-6": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`坐標平面上有 \(A(2,-2)\)、\(B(-1,2)\) 兩點，試問直線 \(y=-6\) 上有多少個點 \(C\) 使得 \(\triangle ABC\) 為等腰三角形？`,
      options: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      solution: [
        String.raw`設 \(C=(t,-6)\)。先算得 \(AB^2=(2+1)^2+(-2-2)^2=25\)。`,
        String.raw`若 \(AB=AC\)，則 \((t-2)^2+16=25\)，得到 \(t=5\) 或 \(t=-1\)，共有 2 點。`,
        String.raw`若 \(AB=BC\)，則 \((t+1)^2+64=25\)，無實數解。`,
        String.raw`若 \(AC=BC\)，則 \((t-2)^2+16=(t+1)^2+64\)，得到 \(t=-\frac{15}{2}\)，再有 1 點。三種情況沒有重複，因此共有 \(2+0+1=3\) 點。`
      ],
      optionAnalysis: {
        "1": String.raw`只計入其中一種等腰情況；完整分類共有 3 點。`,
        "2": String.raw`只計入 \(AB=AC\) 的兩點，漏掉 \(AC=BC\) 的一點。`,
        "3": String.raw`三種邊長相等情況分別有 \(2,0,1\) 個解，合計 3 點。`,
        "4": String.raw`把無實數解的 \(AB=BC\) 情況誤算為有解。`,
        "5": String.raw`未檢查各距離方程式的實數解數量；正確合計為 3。`
      }
    },
    "115A-7": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`坐標平面上同時滿足
      \[
      \begin{cases}
      2x-y-3>0,\\
      x+2y+1<0
      \end{cases}
      \]
      的點 \(P(x,y)\) 可能位在下列哪些選項？`,
      options: {
        "1": "第一象限",
        "2": "第二象限",
        "3": "第三象限",
        "4": "第四象限",
        "5": String.raw`\(x\) 軸`
      },
      solution: [
        String.raw`兩個不等式可改寫成 \(y<2x-3\) 與 \(y<-\frac{x+1}{2}\)，解集在兩條直線的下方。`,
        String.raw`若 \(y>0\)，第一式要求 \(x>\frac32\)，第二式卻要求 \(x<-1\)，不可能，因此第一、二象限都不行。`,
        String.raw`第三象限可取 \((-1,-6)\)，第四象限可取 \((1,-3)\)，兩點都符合原不等式。`,
        String.raw`若在 \(x\) 軸上，令 \(y=0\)，同樣會同時要求 \(x>\frac32\) 與 \(x<-1\)，所以不可能。`
      ],
      optionAnalysis: {
        "1": String.raw`第一象限要求 \(x>0,y>0\)，但兩式會分別迫使 \(x>\frac32\) 與 \(x<-1\)，矛盾。`,
        "2": String.raw`第二象限的 \(x<0,y>0\) 不可能滿足 \(y<2x-3<0\)。`,
        "3": String.raw`例如 \((-1,-6)\) 同時滿足兩個不等式，因此可能。`,
        "4": String.raw`例如 \((1,-3)\) 同時滿足兩個不等式，因此可能。`,
        "5": String.raw`令 \(y=0\) 後會得到互相矛盾的 \(x>\frac32\) 與 \(x<-1\)。`
      }
    },
    "115A-8": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`已知
      \[
      A=\begin{bmatrix}2&1\\1&0\end{bmatrix},
      \]
      且對所有正整數 \(n\ge2\)，令
      \[
      A^n=\begin{bmatrix}a_n&b_n\\c_n&d_n\end{bmatrix}。
      \]
      試選出正確的選項。`,
      options: {
        "1": String.raw`\(b_2<c_2\)`,
        "2": String.raw`\(A^2=2A+\begin{bmatrix}1&0\\0&1\end{bmatrix}\)`,
        "3": String.raw`\(c_{n+2}=c_{n+1}+2c_n\)`,
        "4": String.raw`\(\begin{bmatrix}a_n&b_n\\c_n&d_n\end{bmatrix}\begin{bmatrix}0\\1\end{bmatrix}=\begin{bmatrix}b_{n+1}\\d_{n+1}\end{bmatrix}\)`,
        "5": String.raw`\(d_{2n}-a_{2n}=(d_n)^2-(a_n)^2\)`
      },
      solution: [
        String.raw`直接計算 \(A^2=\begin{bmatrix}5&2\\2&1\end{bmatrix}=2A+I\)，所以選項（2）正確。`,
        String.raw`因 \(A\) 為對稱矩陣，所以每個 \(A^n\) 也對稱，故 \(b_n=c_n\)，選項（1）的嚴格不等式錯誤。`,
        String.raw`由 \(A^2=2A+I\) 得 \(A^{n+2}=2A^{n+1}+A^n\)，因此正確遞迴應為 \(c_{n+2}=2c_{n+1}+c_n\)，選項（3）錯誤。`,
        String.raw`又 \(A^{2n}=(A^n)^2\)。利用 \(b_n=c_n\)，可得 \(d_{2n}=b_n^2+d_n^2\)、\(a_{2n}=a_n^2+b_n^2\)，相減即得選項（5）。`
      ],
      optionAnalysis: {
        "1": String.raw`由對稱性 \(b_2=c_2=2\)，不是 \(b_2<c_2\)。`,
        "2": String.raw`直接平方可得 \(A^2=\begin{bmatrix}5&2\\2&1\end{bmatrix}=2A+I\)。`,
        "3": String.raw`係數位置顛倒；正確式為 \(c_{n+2}=2c_{n+1}+c_n\)。`,
        "4": String.raw`左式是 \(A^n(0,1)^T=(b_n,d_n)^T\)，並非下一次方的第二欄。`,
        "5": String.raw`由 \(A^{2n}=(A^n)^2\) 且 \(b_n=c_n\)，兩個對角元素相減後恰得此式。`
      }
    },
    "115A-9": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`T 分數為評量成績的一種方式，其計算方式如下：設全班平均成績為 \(\mu\) 且標準差為 \(\sigma\)。若某生原始成績為 \(S\)，則他該科之 T 分數為
      \[
      T=50+10\left(\frac{S-\mu}{\sigma}\right)。
      \]
      已知某班期末數學和英文兩科的平均成績皆為 60，數學成績的標準差為 12，英文成績的標準差為 8。試選出正確的選項。`,
      options: {
        "1": "若甲生英文的原始成績為 52，則其 T 分數為 40",
        "2": "各生數學的 T 分數不會超過其原始成績",
        "3": "若乙生兩科的原始成績平均比丙生兩科的原始成績平均高，則乙生兩科的 T 分數平均比丙生兩科的 T 分數平均高",
        "4": "若該班級兩科的及格標準均為 T 分數大於或等於 40，則數學及格的原始成績比英文及格的原始成績低",
        "5": "該班原始成績數學對英文的迴歸直線（即最適直線）之斜率與該班 T 分數數學對英文的迴歸直線之斜率相同"
      },
      solution: [
        String.raw`英文的轉換式為 \(T_E=50+10\frac{E-60}{8}=\frac54E-25\)，所以 \(E=52\) 時 \(T_E=40\)，選項（1）正確。`,
        String.raw`數學的轉換式為 \(T_M=50+10\frac{M-60}{12}=\frac56M\)。原始成績非負時 \(T_M\le M\)，選項（2）正確。`,
        String.raw`兩科的 T 分數使用不同倍率，原始平均較高不保證轉換後平均仍較高，因此選項（3）錯誤。`,
        String.raw`令 T 分數為 40，可得數學原始及格分數為 48、英文為 52，所以選項（4）正確。`,
        String.raw`兩軸分別做線性伸縮後，迴歸斜率會乘上 \(\frac{5/6}{5/4}=\frac23\)，不會維持相同，故選項（5）錯誤。`
      ],
      optionAnalysis: {
        "1": String.raw`代入英文公式得 \(50+10\frac{52-60}{8}=40\)。`,
        "2": String.raw`數學 T 分數化簡為 \(\frac56S\)，所以不會超過非負的原始成績。`,
        "3": String.raw`數學與英文分別乘上不同權重，兩科原始總分的次序不一定保留。`,
        "4": String.raw`數學及格門檻為 48，英文為 52，數學確實較低。`,
        "5": String.raw`橫、縱軸伸縮倍率不同，斜率會變為原斜率的 \(\frac23\)。`
      }
    },
    "115A-10": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`已知四邊形 \(ABCD\) 中，\(\overrightarrow{AB}\) 平行 \(\overrightarrow{DC}\)，\(AC\) 與 \(BD\) 交於 \(E\)。若
      \[
      \overrightarrow{AB}=(2,-6),\qquad \overrightarrow{AD}=(1,5),
      \]
      且 \(\triangle ABE\) 面積為 3。試選出正確的選項。`,
      options: {
        "1": String.raw`\(\cos\angle BAD=\frac{-7\sqrt{65}}{65}\)`,
        "2": String.raw`\(\triangle ABD\) 面積為 \(9\)`,
        "3": String.raw`\(\overrightarrow{AE}=\left(\frac32,\frac12\right)\)`,
        "4": String.raw`四邊形 \(ABCD\) 面積為 \(\frac{65}{3}\)`,
        "5": String.raw`\(\overline{BC}<\frac83\)`
      },
      solution: [
        String.raw`由內積，\(\cos\angle BAD=\frac{(2,-6)\cdot(1,5)}{\sqrt{40}\sqrt{26}}=\frac{-28}{4\sqrt{65}}=\frac{-7\sqrt{65}}{65}\)，選項（1）正確。`,
        String.raw`\(\triangle ABD\) 面積為 \(\frac12|\det((2,-6),(1,5))|=\frac12|10+6|=8\)，所以選項（2）錯誤。`,
        String.raw`設 \(\overrightarrow{DC}=\lambda\overrightarrow{AB}\)。梯形對角線交點使 \([\triangle ABE]=\frac{[\triangle ABD]}{1+\lambda}\)，故 \(3=\frac8{1+\lambda}\)，得到 \(\lambda=\frac53\)。`,
        String.raw`因此 \(\overrightarrow{AE}=\frac{\overrightarrow{AD}+\lambda\overrightarrow{AB}}{1+\lambda}=(\frac{13}{8},-\frac{15}{8})\)，四邊形面積為 \(8(1+\lambda)=\frac{64}{3}\)，選項（3）、（4）皆錯。`,
        String.raw`\(\overrightarrow{BC}=\overrightarrow{AD}+(\lambda-1)\overrightarrow{AB}=(\frac73,1)\)，所以 \(\overline{BC}=\frac{\sqrt{58}}3<\frac83\)，選項（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`由向量內積直接化簡可得此值。`,
        "2": String.raw`行列式絕對值為 16，三角形面積應為 8。`,
        "3": String.raw`由對角線分點關係算得 \(\overrightarrow{AE}=(\frac{13}{8},-\frac{15}{8})\)。`,
        "4": String.raw`梯形面積為 \(\frac{64}{3}\)，不是 \(\frac{65}{3}\)。`,
        "5": String.raw`\(\overline{BC}=\frac{\sqrt{58}}3\)，而 \(\sqrt{58}<8\)。`
      }
    },
    "115A-11": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`令 \(\Gamma\) 為坐標平面上
      \[
      y=\cos\left(\frac{\pi}{2}x\right)
      \]
      的圖形。對任一實數 \(m\ne0\)，以 \(L_m\) 表示直線 \(y=mx+1\)。試選出正確的選項。`,
      options: {
        "1": String.raw`\(m>0\) 時，\(L_m\) 和 \(\Gamma\) 交點的 \(x\) 坐標皆為負`,
        "2": String.raw`若 \((a,b)\) 為 \(L_m\) 和 \(\Gamma\) 的交點，則 \((-a,b)\) 為 \(L_{-m}\) 和 \(\Gamma\) 的交點`,
        "3": String.raw`可以找到一實數 \(m\ne0\) 使得 \(L_m\) 和 \(\Gamma\) 交於點 \(\left(\frac{20}{3},\frac12\right)\)`,
        "4": String.raw`若 \(L_m\) 與 \(\Gamma\) 有一交點在直線 \(y=-1\) 上，則 \(\frac1m\) 是奇數`,
        "5": String.raw`若 \(L_m\) 與 \(\Gamma\) 有一交點在 \(x\) 軸上，則 \(L_m\) 與 \(\Gamma\) 有偶數個交點`
      },
      solution: [
        String.raw`所有 \(L_m\) 都通過 \((0,1)\)，而 \((0,1)\) 也在 \(\Gamma\) 上，因此選項（1）錯誤。`,
        String.raw`餘弦函數為偶函數。若 \(b=ma+1=\cos(\frac{\pi a}{2})\)，則 \(b=(-m)(-a)+1=\cos(\frac{\pi(-a)}2)\)，所以選項（2）正確。`,
        String.raw`在 \(x=\frac{20}{3}\) 時，\(\cos(\frac{\pi}{2}\cdot\frac{20}{3})=\cos(\frac{10\pi}{3})=-\frac12\)，不是 \(\frac12\)，故選項（3）錯誤。`,
        String.raw`若交點在 \(y=-1\)，則 \(x=4k+2=2(2k+1)\)。又 \(-1=mx+1\)，所以 \(\frac1m=-\frac{x}{2}=-(2k+1)\)，為奇數，選項（4）正確。`,
        String.raw`有一個交點在 \(x\) 軸只限制其中一個交點的位置，不能推出總交點數必為偶數，故選項（5）錯誤。`
      ],
      optionAnalysis: {
        "1": String.raw`固定交點 \((0,1)\) 的 \(x\) 坐標為 0，已否定「皆為負」。`,
        "2": String.raw`利用 \(\Gamma\) 關於 \(y\) 軸對稱，並把斜率改成 \(-m\)，敘述成立。`,
        "3": String.raw`該 \(x\) 值在 \(\Gamma\) 上對應的 \(y\) 值是 \(-\frac12\)。`,
        "4": String.raw`由餘弦取到 \(-1\) 的位置與直線方程聯立，可得 \(\frac1m\) 為奇數。`,
        "5": String.raw`單一 \(x\) 軸交點不足以決定其餘交點的數量與奇偶性。`
      }
    },
    "115A-12": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`令 \(f(x)\)、\(g(x)\) 為實係數三次多項式且 \(f(x)\) 的首項係數為 1，已知
      \[
      f(x)-g(x)=2x^3+2x。
      \]
      令 \(\Gamma_1\) 和 \(\Gamma_2\) 分別為 \(f(x)\) 和 \(g(x)\) 在坐標平面上的函數圖形，其對稱中心分別為 \((a_1,b_1)\)、\((a_2,b_2)\)。試選出正確的選項。`,
      options: {
        "1": String.raw`\(\Gamma_1\) 和 \(\Gamma_2\) 恰交於三點`,
        "2": String.raw`\(a_1+a_2\) 可唯一確定`,
        "3": String.raw`\(b_1+b_2\) 可唯一確定`,
        "4": String.raw`若 \(a_1=a_2\)，則 \(b_1=b_2\)`,
        "5": String.raw`若 \(b_1=b_2\)，則 \(a_1=a_2\)`
      },
      solution: [
        String.raw`設 \(f(x)=x^3+px^2+qx+r\)，則 \(g(x)=-x^3+px^2+(q-2)x+r\)。`,
        String.raw`三次函數 \(Ax^3+Bx^2+Cx+D\) 的對稱中心橫坐標為 \(-\frac{B}{3A}\)，所以 \(a_1=-\frac p3\)、\(a_2=\frac p3\)，故 \(a_1+a_2=0\) 可唯一確定，選項（2）正確。`,
        String.raw`兩圖交點滿足 \(f(x)-g(x)=2x(x^2+1)=0\)，只有實根 \(x=0\)，因此不是恰交三點。`,
        String.raw`若 \(a_1=a_2\)，則 \(-\frac p3=\frac p3\)，所以 \(p=0\)。此時兩個對稱中心的橫坐標都是 0，且 \(f(0)=g(0)=r\)，故 \(b_1=b_2\)，選項（4）正確。`,
        String.raw`中心縱坐標仍會受 \(p,q,r\) 影響，\(b_1+b_2\) 不能唯一確定；反向由 \(b_1=b_2\) 也不能必然推出 \(a_1=a_2\)。`
      ],
      optionAnalysis: {
        "1": String.raw`實數交點只來自 \(x(x^2+1)=0\)，因此只有 \(x=0\) 一個。`,
        "2": String.raw`兩中心橫坐標分別為 \(-\frac p3\) 與 \(\frac p3\)，和固定為 0。`,
        "3": String.raw`中心縱坐標會隨多項式其他係數改變，無法唯一確定。`,
        "4": String.raw`條件迫使 \(p=0\)，兩中心都在 \(x=0\)，且函數值同為 \(r\)。`,
        "5": String.raw`中心縱坐標相同仍可能由其他係數配合造成，不能反推橫坐標一定相同。`
      }
    },
    "115A-13": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`某高中聘用的全體教師中，\(\frac14\) 只有學士學位，\(\frac34\) 有碩士學位。只有學士學位的教師中有 \(\frac15\) 通過英聽檢定，有碩士學位的教師中有 \(\frac35\) 通過英聽檢定。已知每位教師被抽到的機會相等，若隨機抽選一位通過英聽檢定的教師，則該教師有碩士學位的條件機率為何？（化為最簡分數）`,
      solution: [
        String.raw`設 \(M\) 表示有碩士學位、\(E\) 表示通過英聽檢定。則 \(P(M\cap E)=\frac34\cdot\frac35=\frac9{20}\)。`,
        String.raw`通過英聽檢定的總機率為 \(P(E)=\frac14\cdot\frac15+\frac34\cdot\frac35=\frac1{20}+\frac9{20}=\frac12\)。`,
        String.raw`因此 \[P(M\mid E)=\frac{P(M\cap E)}{P(E)}=\frac{9/20}{1/2}=\frac9{10}。\]`
      ]
    },
    "115A-14": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`坐標平面上，向量 \((a,b)\) 與直線 \(y=bx-1\) 垂直，則 \(a+b\) 的最大可能值為何？（化為最簡分數）`,
      solution: [
        String.raw`直線 \(y=bx-1\) 的方向向量可取 \((1,b)\)。因 \((a,b)\) 與直線垂直，所以 \((a,b)\cdot(1,b)=a+b^2=0\)，即 \(a=-b^2\)。`,
        String.raw`因此 \[a+b=-b^2+b=-\left(b-\frac12\right)^2+\frac14。\]`,
        String.raw`當 \(b=\frac12\) 時取得最大值 \(\frac14\)。`
      ]
    },
    "115A-15": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`已知正數 \(a,b,c\) 成一等差數列，其中 \(a<b<c\)，且坐標平面上三點
      \[
      (a,\log 3a)、(b,\log 4b)、(c,\log 6c)
      \]
      在同一直線上，則 \(\frac ba\) 之值為何？（化為最簡分數）`,
      solution: [
        String.raw`因 \(a,b,c\) 成等差數列，\(b\) 是 \(a,c\) 的中點；三點共線時，對應的縱坐標也滿足中點關係：
        \[2\log(4b)=\log(3a)+\log(6c)。\]`,
        String.raw`合併對數得 \(\log(16b^2)=\log(18ac)\)，所以 \(8b^2=9ac\)。`,
        String.raw`令 \(r=\frac ba\)，則 \(\frac ca=2r-1\)。代入得 \(8r^2=9(2r-1)\)，即 \(8r^2-18r+9=0\)。`,
        String.raw`解得 \(r=\frac32\) 或 \(\frac34\)。因 \(b>a\)，所以 \(r>1\)，故 \(\frac ba=\frac32\)。`
      ]
    },
    "115A-16": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`坐標平面上，已知二次函數圖形 \(\Gamma:y=f(x)\) 的頂點 \(P\) 在直線 \(y=1+2x\) 上，且交 \(x\) 軸於點 \(A(-\frac12,0)\)、\(B(\frac12,0)\)。將 \(\Gamma\) 平移，使得平移後圖形的頂點 \(Q\) 仍在直線 \(y=1+2x\) 上，且亦通過點 \(B(\frac12,0)\)。此時 \(P、Q\) 為兩相異點，則 \(\overline{PQ}\) 為何？（化為最簡根式）`,
      solution: [
        String.raw`由兩根為 \(\pm\frac12\)，可設 \(f(x)=k(x^2-\frac14)\)。頂點 \(P=(0,-\frac k4)\) 在 \(y=1+2x\) 上，所以 \(-\frac k4=1\)，得 \(k=-4\)，故 \(P=(0,1)\)。`,
        String.raw`設平移後頂點 \(Q=(h,1+2h)\)，則新拋物線為 \(y=-4(x-h)^2+1+2h\)。`,
        String.raw`代入 \(B(\frac12,0)\)：
        \[0=-4\left(\frac12-h\right)^2+1+2h=-4h^2+6h。\]
        因 \(Q\ne P\)，取 \(h=\frac32\)，所以 \(Q=(\frac32,4)\)。`,
        String.raw`因此 \[\overline{PQ}=\sqrt{\left(\frac32\right)^2+(4-1)^2}=\sqrt{\frac{45}{4}}=\frac{3\sqrt5}{2}。\]`
      ]
    },
    "115A-17": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`直角 \(\triangle ABC\) 中，\(\angle CAB\) 為直角，\(\overline{AB}\) 邊上一點 \(D\)，滿足 \(\angle BCD=2\angle ACD\)，且 \(\overline{BC}=2\overline{BD}\)。若 \(\overrightarrow{AD}=k\overrightarrow{AB}\)，則 \(k\) 為何？（化為最簡分數）`,
      solution: [
        String.raw`令 \(\angle ACD=\theta\)，則 \(\angle BCD=2\theta\)，所以 \(\angle ACB=3\theta\)。在 \(\triangle BCD\) 中，\(\angle CBD=90^\circ-3\theta\)、\(\angle BDC=90^\circ+\theta\)。`,
        String.raw`由正弦定理，
        \[\frac{BC}{BD}=\frac{\sin(90^\circ+\theta)}{\sin 2\theta}=\frac{\cos\theta}{2\sin\theta\cos\theta}=\frac1{2\sin\theta}。\]
        題設 \(BC=2BD\)，故 \(\sin\theta=\frac14\)。`,
        String.raw`在直角三角形 \(ACD\)、\(ACB\) 中，
        \[k=\frac{AD}{AB}=\frac{\tan\theta}{\tan3\theta}。\]`,
        String.raw`由 \(\sin\theta=\frac14\)、\(\cos\theta=\frac{\sqrt{15}}4\)，得 \(\tan\theta=\frac1{\sqrt{15}}\)，且
        \[\sin3\theta=\frac{11}{16},\qquad \cos3\theta=\frac{3\sqrt{15}}{16},\qquad \tan3\theta=\frac{11}{3\sqrt{15}}。\]
        因此 \(k=\frac3{11}\)。`
      ]
    },
    "115A-18": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`坐標空間中有一平行六面體 \(PQRS-ABCD\)。已知
      \[
      \overrightarrow{AB}\times\overrightarrow{AD}=(-5,5,5),\quad
      \overrightarrow{AD}\times\overrightarrow{AP}=(-2,0,-4),\quad
      \overrightarrow{AP}\times\overrightarrow{AB}=(6,-10,-8),\quad
      |\overrightarrow{AP}|=6。
      \]
      試問平行四邊形 \(ABCD\) 的面積為何？`,
      options: {
        "1": String.raw`\(2\sqrt5\)`,
        "2": String.raw`\(5\sqrt2\)`,
        "3": String.raw`\(5\sqrt3\)`,
        "4": String.raw`\(6\sqrt3\)`,
        "5": String.raw`\(10\sqrt2\)`
      },
      solution: [
        String.raw`平行四邊形 \(ABCD\) 的面積等於 \(\left|\overrightarrow{AB}\times\overrightarrow{AD}\right|\)。`,
        String.raw`因此面積為
        \[\sqrt{(-5)^2+5^2+5^2}=\sqrt{75}=5\sqrt3。\]`
      ]
    },
    "115A-19": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 18 題題組。設 \(B\) 點坐標為 \((1,2,0)\)，試求平面 \(ABCD\) 的平面方程式。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`由題設 \(\overrightarrow{AB}\times\overrightarrow{AD}=(-5,5,5)\)，所以平面 \(ABCD\) 的法向量可取 \((1,-1,-1)\)。`,
        String.raw`平面通過 \(B(1,2,0)\)，故
        \[(x-1)-(y-2)-(z-0)=0。\]`,
        String.raw`整理得 \[x-y-z=-1。\]`
      ]
    },
    "115A-20": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 18 題題組。試求平行六面體的體積，並求平行六面體上（含邊界）距點 \(A\) 的最長距離。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`因 \(\overrightarrow{AP}\) 同時垂直於 \(\overrightarrow{AD}\times\overrightarrow{AP}\) 與 \(\overrightarrow{AP}\times\overrightarrow{AB}\)，故
        \[
        \overrightarrow{AP}\parallel
        [(\overrightarrow{AD}\times\overrightarrow{AP})\times(\overrightarrow{AP}\times\overrightarrow{AB})]
        =(-40,-40,20)。
        \]
        又 \(|\overrightarrow{AP}|=6\)，可取 \(\overrightarrow{AP}=(4,4,-2)\)。`,
        String.raw`體積為純量三重積的絕對值：
        \[
        V=\left|\overrightarrow{AP}\cdot(\overrightarrow{AB}\times\overrightarrow{AD})\right|
        =|(4,4,-2)\cdot(-5,5,5)|=10。
        \]`,
        String.raw`依官方參考解法，由已知叉積可求得 \(\overrightarrow{AB}=(1,-1,2)\)、\(\overrightarrow{AD}=(2,3,-1)\)。`,
        String.raw`從 \(A\) 指向其餘頂點的向量平方長依序為
        \[
        |AB|^2=6,\ |AD|^2=14,\ |AC|^2=14,\ |AS|^2=94,\ |AQ|^2=34,\ |AR|^2=86。
        \]
        封閉凸多面體距定點最遠處發生在頂點，因此最長距離為 \(\sqrt{94}\)。`
      ]
    },
    "115B-1": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`當標準值為 95，試選出有幾個整數 \(N\) 與標準值的誤差百分比
      \[
      \frac{|N-95|}{95}\times100\%
      \]
      小於 \(5\%\)。`,
      options: { "1": "4 個", "2": "5 個", "3": "8 個", "4": "9 個", "5": "10 個" },
      solution: [
        String.raw`\(\frac{|N-95|}{95}\times100\%<5\%\) 等價於 \(|N-95|<4.75\)。`,
        String.raw`因 \(N\) 為整數，所以 \(N-95\) 可為 \(-4,-3,\ldots,3,4\)，共 9 個整數。`
      ],
      optionAnalysis: {
        "1": String.raw`只計入部分正或負誤差；完整範圍共有 9 個整數。`,
        "2": String.raw`若只從標準值往單一方向計數會漏掉另一側。`,
        "3": String.raw`漏算標準值本身 \(N=95\)，其誤差百分比為 0。`,
        "4": String.raw`整數範圍為 \(91\le N\le99\)，共 9 個。`,
        "5": String.raw`端點差 5 的 \(N=90,100\) 誤差已超過題設的嚴格上限。`
      }
    },
    "115B-2": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`以計算機的自然對數按鍵 \(\ln\)（即 \(\ln x=\log_e x\)）估算連續複利本利和
      \[
      100e^{3n/100}=135
      \]
      所需期數 \(n\)，試選出等於 \(n\) 的選項。`,
      options: {
        "1": String.raw`\(\frac3{100}\ln(135-100)\)`,
        "2": String.raw`\(\frac{100}{3}\ln(135-100)\)`,
        "3": String.raw`\(\frac{135}{100}\ln\left(\frac3{100}\right)\)`,
        "4": String.raw`\(\frac3{100}\ln\left(\frac{135}{100}\right)\)`,
        "5": String.raw`\(\frac{100}{3}\ln\left(\frac{135}{100}\right)\)`
      },
      solution: [
        String.raw`兩邊同除以 100，得 \(e^{3n/100}=\frac{135}{100}\)。`,
        String.raw`取自然對數：\(\frac{3n}{100}=\ln(\frac{135}{100})\)。`,
        String.raw`所以 \[n=\frac{100}{3}\ln\left(\frac{135}{100}\right)。\]`
      ],
      optionAnalysis: {
        "1": String.raw`對數內應是本利和的比值 \(\frac{135}{100}\)，不是利息差。`,
        "2": String.raw`雖有乘上 \(\frac{100}{3}\)，但對數內仍誤用 \(135-100\)。`,
        "3": String.raw`把指數係數與本利比的位置互換。`,
        "4": String.raw`解 \(n\) 時應除以 \(\frac3{100}\)，不是乘以它。`,
        "5": String.raw`由取對數後的線性方程直接解得，正確。`
      }
    },
    "115B-3": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`已知實數二階方陣 \(A\) 滿足
      \[
      A\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}0\\1\end{bmatrix},
      \qquad
      A\begin{bmatrix}1\\-1\end{bmatrix}=\begin{bmatrix}1\\0\end{bmatrix}。
      \]
      試選出 \(A\) 的反方陣。`,
      options: {
        "1": String.raw`\(\begin{bmatrix}0&1\\1&0\end{bmatrix}\)`,
        "2": String.raw`\(\begin{bmatrix}1&1\\-1&1\end{bmatrix}\)`,
        "3": String.raw`\(\begin{bmatrix}1&1\\1&-1\end{bmatrix}\)`,
        "4": String.raw`\(\begin{bmatrix}1&\frac12\\-\frac12&1\end{bmatrix}\)`,
        "5": String.raw`\(\begin{bmatrix}1&-\frac12\\\frac12&1\end{bmatrix}\)`
      },
      solution: [
        String.raw`由題設可反向讀出 \(A^{-1}(1,0)^T=(1,-1)^T\)，以及 \(A^{-1}(0,1)^T=(1,1)^T\)。`,
        String.raw`反方陣的兩個欄向量分別就是上述兩向量，因此
        \[
        A^{-1}=\begin{bmatrix}1&1\\-1&1\end{bmatrix}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`其第一欄不是 \(A^{-1}(1,0)^T=(1,-1)^T\)。`,
        "2": String.raw`兩欄分別為 \((1,-1)^T\)、\((1,1)^T\)，符合題設的反向映射。`,
        "3": String.raw`第二列符號位置不符兩個反向映射。`,
        "4": String.raw`欄向量含 \(\frac12\)，與題設直接給出的原像不符。`,
        "5": String.raw`欄向量含 \(\frac12\)，與題設直接給出的原像不符。`
      }
    },
    "115B-4": {
      verified: true,
      sourcePage: 1,
      stem: "電腦程式模擬在太平洋等速航行的甲、乙兩艘船。甲船沿著北緯 60 度向西航行，乙船沿著赤道向東航行。在某一時間點甲船在西經 169 度、乙船在東經 140 度，試選出當甲船到達東經 171 度時，乙船在東經幾度。",
      options: { "1": "120 度", "2": "130 度", "3": "150 度", "4": "160 度", "5": "180 度" },
      solution: [
        String.raw`西經 \(169^\circ\) 等同東經 \(191^\circ\)。甲船向西到東經 \(171^\circ\)，經度改變 \(20^\circ\)。`,
        String.raw`北緯 \(60^\circ\) 的緯圈半徑是赤道半徑的 \(\cos60^\circ=\frac12\)，所以甲船走過的距離相當於赤道上 \(20^\circ\times\frac12=10^\circ\) 的弧長。`,
        String.raw`兩船等速、經過時間相同，乙船沿赤道向東前進 \(10^\circ\)，由東經 \(140^\circ\) 到東經 \(150^\circ\)。`
      ],
      optionAnalysis: {
        "1": String.raw`方向與等弧長換算皆不符。`,
        "2": String.raw`把乙船誤判為向西移動 \(10^\circ\)。`,
        "3": String.raw`甲船的 \(20^\circ\) 緯圈弧長相當於赤道 \(10^\circ\)，答案正確。`,
        "4": String.raw`直接把甲船的經度差 \(20^\circ\) 套到赤道，忽略緯圈半徑。`,
        "5": String.raw`未依兩船等速與緯度造成的弧長差換算。`
      }
    },
    "115B-5": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`某人購買公益彩券，第一次以 \(N\) 元為投注金額。之後每次要投注時，先將前次投注金額增加一半設為預定金額。如果預定金額大於 \(2N\) 元，則將預定金額減少一半投注；否則就以預定金額投注。前四次投注金額依序為
      \[
      N,\quad \frac32N,\quad \frac98N,\quad \frac{27}{16}N。
      \]
      試選出此人第七次的投注金額為多少元。`,
      options: {
        "1": String.raw`\(\frac{3^6}{2^6}N\)`,
        "2": String.raw`\(\frac{3^6}{2^8}N\)`,
        "3": String.raw`\(\frac{3^6}{2^9}N\)`,
        "4": String.raw`\(\frac{3^7}{2^7}N\)`,
        "5": String.raw`\(\frac{3^7}{2^{10}}N\)`
      },
      solution: [
        String.raw`每次先乘 \(\frac32\)；若結果大於 \(2N\)，再乘 \(\frac12\)。`,
        String.raw`第 5 次預定金額為 \(\frac{81}{32}N>2N\)，投注 \(\frac{81}{64}N\)。`,
        String.raw`第 6 次為 \(\frac{243}{128}N<2N\)，照額投注。第 7 次預定為 \(\frac{729}{256}N>2N\)，故投注
        \[
        \frac12\cdot\frac{729}{256}N=\frac{729}{512}N=\frac{3^6}{2^9}N。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`漏掉超過 \(2N\) 時再減半所增加的分母次方。`,
        "2": String.raw`少計一次減半，正確分母為 \(2^9\)。`,
        "3": String.raw`逐次套用規則後第 7 次為 \(\frac{3^6}{2^9}N\)。`,
        "4": String.raw`把投注次數直接當成分子指數，未依前次金額遞推。`,
        "5": String.raw`分子多乘一次 3；第 7 次的分子為 \(3^6\)。`
      }
    },
    "115B-6": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`各國沿岸的「領海基線」其外側距離基線十二浬間之海域，為該國之「領海」。在以浬為單位的坐標平面上，某國有一部分的領海基線為直線
      \[
      L:4x+3y-12=0
      \]
      上的某一線段，且 \((5,5)\) 位於該領海基線的內側。試選出該段領海在 \(L\) 與下列哪一條直線之間。`,
      options: {
        "1": String.raw`\(4x+3y+48=0\)`,
        "2": String.raw`\(4x+3y+18=0\)`,
        "3": String.raw`\(4x+3y=0\)`,
        "4": String.raw`\(4x+3y-24=0\)`,
        "5": String.raw`\(4x+3y-72=0\)`
      },
      solution: [
        String.raw`與 \(L\) 平行的直線可寫成 \(4x+3y+c=0\)。兩平行線距離為 \(\frac{|c-(-12)|}{\sqrt{4^2+3^2}}=12\)，故 \(|c+12|=60\)，得到 \(c=48\) 或 \(-72\)。`,
        String.raw`代入內側點 \((5,5)\)，原式 \(4x+3y-12\) 為正，因此外側位於負值方向，邊界須滿足 \(4x+3y-12=-60\)。`,
        String.raw`整理得 \(4x+3y+48=0\)。`
      ],
      optionAnalysis: {
        "1": String.raw`與基線距離 12 浬，且位於 \((5,5)\) 的相反側，正確。`,
        "2": String.raw`兩線距離只有 \(\frac{30}{5}=6\) 浬。`,
        "3": String.raw`兩線距離只有 \(\frac{12}{5}\) 浬。`,
        "4": String.raw`兩線距離只有 \(\frac{12}{5}\) 浬，且方向不符。`,
        "5": String.raw`距離雖為 12 浬，但位於領海基線內側方向。`
      }
    },
    "115B-7": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`有 \(A、B、C\) 三種福袋各一個，其中 \(A、B、C\) 中獎的機率分別為 \(\frac34、\frac23、\frac12\)，且不同福袋中獎與否互不影響。設在福袋 \(A\) 中獎的條件下，至少有兩個福袋中獎的機率為 \(p\)；且設在至少有兩個福袋中獎的條件下，福袋 \(A\) 中獎的機率為 \(q\)。試選出 \(\frac pq\) 之值。`,
      options: {
        "1": String.raw`\(\frac{11}{18}\)`,
        "2": String.raw`\(\frac{17}{18}\)`,
        "3": "1",
        "4": String.raw`\(\frac{18}{17}\)`,
        "5": String.raw`\(\frac{18}{11}\)`
      },
      solution: [
        String.raw`已知 \(A\) 中獎時，至少兩袋中獎等同 \(B、C\) 至少一袋中獎，所以
        \[
        p=1-P(B,C\text{ 都未中})=1-\frac13\cdot\frac12=\frac56。
        \]`,
        String.raw`至少兩袋中獎的機率為
        \[
        \frac14+\frac18+\frac1{12}+\frac14=\frac{17}{24}。
        \]
        其中 \(A\) 中獎且至少兩袋中獎的機率為 \(\frac34\cdot\frac56=\frac58\)。`,
        String.raw`因此 \(q=\frac{5/8}{17/24}=\frac{15}{17}\)，故
        \[
        \frac pq=\frac{5/6}{15/17}=\frac{17}{18}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`未正確計入三袋同時中獎或條件機率的分母。`,
        "2": String.raw`由 \(p=\frac56\)、\(q=\frac{15}{17}\) 相除得到。`,
        "3": String.raw`兩個條件機率的條件事件不同，數值並不相同。`,
        "4": String.raw`把 \(\frac pq\) 的分子、分母顛倒。`,
        "5": String.raw`至少兩袋中獎的總機率計算不完整。`
      }
    },
    "115B-8": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`試選出與函數
      \[
      y=3\sin\left(\frac{\pi}{5}x+\pi\right)+3
      \]
      在每個實數 \(x\) 所得函數值皆相同的函數。`,
      options: {
        "1": String.raw`\(y=6\sin\left(\frac{\pi}{5}x\right)+3\)`,
        "2": String.raw`\(y=3\sin\left[\left(\frac{\pi}{5}+2\pi\right)x+\pi\right]+3\)`,
        "3": String.raw`\(y=3\sin\left(\frac{\pi}{5}x-\pi\right)+3\)`,
        "4": String.raw`\(y=-3\sin\left(\frac{\pi}{5}x\right)-3\)`,
        "5": String.raw`\(y=-3\sin\left(\frac{\pi}{5}x\right)+3\)`
      },
      solution: [
        String.raw`利用 \(\sin(\theta+\pi)=-\sin\theta\)，原函數可化為
        \[
        y=-3\sin\left(\frac{\pi}{5}x\right)+3。
        \]`,
        String.raw`又 \(\sin(\theta-\pi)=-\sin\theta\)，所以選項（3）也與原函數恆等；選項（5）就是化簡後的函數。`
      ],
      optionAnalysis: {
        "1": String.raw`振幅變成 6，且正負號也與原函數不同。`,
        "2": String.raw`加在 \(x\) 係數上的 \(2\pi\) 會產生 \(2\pi x\)，對任意實數 \(x\) 並非整週期平移。`,
        "3": String.raw`因 \(\sin(\theta-\pi)=\sin(\theta+\pi)=-\sin\theta\)，與原函數恆等。`,
        "4": String.raw`正弦項相同，但垂直平移量是 \(-3\)，不是 \(+3\)。`,
        "5": String.raw`原式直接以 \(\sin(\theta+\pi)=-\sin\theta\) 化簡即得。`
      }
    },
    "115B-9": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`設
      \[
      f(x)=(1-x)(2-x)^2(4+x)。
      \]
      試選出正確的選項。`,
      options: {
        "1": String.raw`\(f(x)\) 除以 \((1-x)(2-x)(4+x)\) 的餘式為 \(-x+2\)`,
        "2": String.raw`若將 \(f(x)\) 表為 \(a(x-2)^4+b(x-2)^3+c(x-2)^2\)，則 \(c=-6\)`,
        "3": String.raw`\(f(x)>0\) 的解區間為 \((-4,2)\)`,
        "4": String.raw`\(\frac{f(2026)}{f(-2022)}>1\)`,
        "5": String.raw`\(f(2026)>f(-2022)\)`
      },
      solution: [
        String.raw`令 \(t=x-2\)，則
        \[
        f(x)=(-1-t)t^2(6+t)=-t^4-7t^3-6t^2，
        \]
        所以 \(c=-6\)，選項（2）正確。`,
        String.raw`因 \(f(x)=(1-x)(4+x)(2-x)^2\)，其正負由 \((1-x)(4+x)\) 決定，故 \(f(x)>0\) 的解為 \((-4,1)\)，選項（3）錯誤。`,
        String.raw`令 \(T=2024>0\)，則
        \[
        f(2026)=-T^4-7T^3-6T^2,\qquad
        f(-2022)=-T^4+7T^3-6T^2。
        \]
        兩者皆為負，且 \(f(2026)<f(-2022)<0\)，因此兩者相除大於 1，選項（4）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`原多項式等於除式再乘以 \(2-x\)，可整除，餘式應為 0。`,
        "2": String.raw`以 \(t=x-2\) 展開得 \(-t^4-7t^3-6t^2\)，故 \(c=-6\)。`,
        "3": String.raw`平方因子不改變正負，正值區間為 \((-4,1)\)，不是 \((-4,2)\)。`,
        "4": String.raw`分子、分母皆負且分子的絕對值較大，所以比值大於 1。`,
        "5": String.raw`實際上 \(f(2026)<f(-2022)\)，不等號方向相反。`
      }
    },
    "115B-10": {
      verified: true,
      sourcePage: 3,
      stem: "某研究蒐集昆蟲身長與體內養分 A 濃度資料：身長平均數 65、變異數 100；A 濃度平均數 50、變異數 225；兩者相關係數為 0.75。已知每隻昆蟲體內的 B 濃度均為 A 濃度的 0.5 倍，試選出正確的選項。",
      options: {
        "1": String.raw`B 濃度的標準差為 \(\frac{15}{2}\) 單位`,
        "2": "若身長的中位數為 65 單位，則 B 濃度的中位數為 25 單位",
        "3": "B 濃度與 A 濃度的相關係數為 0.5",
        "4": "若找到一身長為 65 單位的昆蟲，利用 A 濃度對身長的迴歸直線預測，其體內 A 濃度為 50 單位",
        "5": String.raw`B 濃度 \(Y\) 對身長 \(X\) 的迴歸直線斜率為 \(\frac12\)`
      },
      solution: [
        String.raw`身長標準差為 \(10\)，A 濃度標準差為 \(15\)。因 \(B=0.5A\)，所以 B 的標準差為 \(0.5\times15=\frac{15}{2}\)，選項（1）正確。`,
        String.raw`正倍數線性轉換不改變相關係數，故 \(r_{A,B}=1\)，選項（3）錯誤。`,
        String.raw`迴歸直線通過 \((\mu_X,\mu_A)=(65,50)\)，所以身長為 65 時的預測 A 濃度為 50，選項（4）正確。`,
        String.raw`B 對身長的迴歸斜率為
        \[
        0.75\cdot\frac{7.5}{10}=\frac9{16}，
        \]
        並非 \(\frac12\)。`
      ],
      optionAnalysis: {
        "1": String.raw`標準差在乘上正倍數 0.5 後也乘 0.5，得到 \(\frac{15}{2}\)。`,
        "2": String.raw`身長的中位數不能推出 A 或 B 濃度的中位數；兩組資料並非逐筆固定倍數關係。`,
        "3": String.raw`B 是 A 的正倍數，兩者呈完全正相關，相關係數為 1。`,
        "4": String.raw`迴歸直線必通過兩變數的平均數點 \((65,50)\)。`,
        "5": String.raw`依 \(r\frac{\sigma_Y}{\sigma_X}\) 計算，斜率為 \(\frac9{16}\)。`
      }
    },
    "115B-11": {
      verified: true,
      sourcePage: 4,
      stem: "同一立燈可替換同軸的大、小直圓錐燈罩，燈源都在頂點，且大燈罩照射在地面上的光線範圍大於小燈罩。令大、小燈罩在地面上所成的光線邊緣分別為圓錐曲線 Γ、γ 的一部分，試選出正確的選項。",
      options: {
        "1": "如果 Γ 是橢圓，則 γ 是拋物線",
        "2": "如果 Γ 是拋物線，則 γ 是橢圓",
        "3": "如果 Γ 是雙曲線，則 γ 是拋物線",
        "4": "如果 γ 是拋物線，則 Γ 是拋物線",
        "5": "如果 γ 是雙曲線，則 Γ 是雙曲線"
      },
      solution: [
        String.raw`固定地面與圓錐軸線後，截痕種類取決於地面和圓錐母線的相對傾斜。由小燈罩換成開口較大的大燈罩時，圓錐半頂角增大，截痕依序跨越「橢圓、拋物線、雙曲線」的臨界情況。`,
        String.raw`因此若大燈罩的 \(\Gamma\) 恰為拋物線，較窄的小燈罩 \(\gamma\) 為橢圓；若較窄的小燈罩 \(\gamma\) 已為雙曲線，較寬的大燈罩 \(\Gamma\) 仍為雙曲線。`
      ],
      optionAnalysis: {
        "1": String.raw`大燈罩已為橢圓時，較窄的小燈罩仍在橢圓區域，不會跳成拋物線。`,
        "2": String.raw`大燈罩位於拋物線臨界狀態時，較窄的小燈罩截痕為橢圓。`,
        "3": String.raw`大燈罩為雙曲線不能唯一判定小燈罩恰為拋物線。`,
        "4": String.raw`小燈罩為拋物線時，開口更大的大燈罩會形成雙曲線。`,
        "5": String.raw`小燈罩已進入雙曲線條件時，開口更大的大燈罩也必為雙曲線。`
      }
    },
    "115B-12": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`A 瓶內有含糖 100 公克的紅茶 1000 毫升，B 瓶內有不含糖的紅茶 500 毫升。一次稀釋是：A 瓶混合均勻後倒 500 毫升至 B 瓶，再將 B 瓶混合均勻後倒 500 毫升回 A 瓶。重複此動作，令第 \(n\) 次稀釋完 A 瓶的含糖量為 \(a_n\) 公克，試選出正確的選項。`,
      options: {
        "1": String.raw`\(a_1=75\)`,
        "2": String.raw`第 \(n\) 次稀釋完，B 瓶的含糖量為 \(50-\frac12a_n\) 公克`,
        "3": String.raw`\(a_{n+1}=\frac12a_n+\frac12\left(100-\frac12a_n\right)\)`,
        "4": String.raw`可找到實數 \(c\) 滿足數列 \(a_n-c\) 為公比是 \(\frac14\) 的等比數列`,
        "5": "第 100 次稀釋完，A 瓶的含糖量小於 60 公克"
      },
      solution: [
        String.raw`第一次由 A 倒出一半糖量 50 公克；B 混合後再倒回其中一半 25 公克，因此 \(a_1=50+25=75\)。`,
        String.raw`總糖量固定為 100 公克，所以第 \(n\) 次完成後 B 瓶含糖量是 \(100-a_n\)，選項（2）錯誤。`,
        String.raw`下一次先使 A 留下 \(\frac12a_n\)，B 中糖量成為 \(100-a_n+\frac12a_n=100-\frac12a_n\)，再倒回其中一半，故
        \[
        a_{n+1}=\frac12a_n+\frac12\left(100-\frac12a_n\right)=50+\frac14a_n。
        \]`,
        String.raw`固定點 \(c\) 滿足 \(c=50+\frac14c\)，所以 \(c=\frac{200}{3}\)，且
        \[
        a_{n+1}-c=\frac14(a_n-c)。
        \]
        因此選項（4）正確；數列由 75 下降並趨近 \(\frac{200}{3}>60\)，選項（5）錯誤。`
      ],
      optionAnalysis: {
        "1": String.raw`第一次 A 留下 50 公克、再由 B 倒回 25 公克，合計 75 公克。`,
        "2": String.raw`兩瓶總糖量固定為 100 公克，B 應含 \(100-a_n\) 公克。`,
        "3": String.raw`此式正確記錄 A 先留一半，再取得 B 混合後一半糖量的過程。`,
        "4": String.raw`取固定點 \(c=\frac{200}{3}\)，即可得到公比 \(\frac14\) 的等比關係。`,
        "5": String.raw`極限為 \(\frac{200}{3}\approx66.67\)，第 100 次不會小於 60。`
      }
    },
    "115B-13": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`坐標平面上，\(L_1\) 為通過原點 \(O\) 且斜角為 \(75^\circ\) 的直線；\(L_2\) 為通過點 \((-20,0)\) 且斜角為 \(30^\circ\) 的直線。求 \(L_1、L_2\) 的交點到原點的距離。（四捨五入至整數）`,
      solution: [
        String.raw`兩直線方程式分別為
        \[
        L_1:y=(\tan75^\circ)x,\qquad
        L_2:y=(\tan30^\circ)(x+20)。
        \]`,
        String.raw`聯立得
        \[
        x=\frac{20\tan30^\circ}{\tan75^\circ-\tan30^\circ}\approx3.66。
        \]`,
        String.raw`交點在由原點沿 \(75^\circ\) 方向的直線上，所以距離
        \[
        d=\frac{x}{\cos75^\circ}\approx14.14，
        \]
        四捨五入得 \(14\)。`
      ]
    },
    "115B-14": {
      verified: true,
      sourcePage: 5,
      stem: "將 1、2、3、4、5、6、7 七個數字排成一個七位數。若要求 3、4 相鄰，5、6 相鄰，而且 6、7 相鄰，求可排出的七位數個數。",
      solution: [
        String.raw`因 5、6 相鄰且 6、7 相鄰，6 必須在 5、7 中間，因此三數只能排成 \(5,6,7\) 或 \(7,6,5\)，共有 2 種。`,
        String.raw`3、4 可排成 \(3,4\) 或 \(4,3\)，共有 2 種。將這兩個區塊與單獨的 1、2 視為 4 個物件，可排 \(4!\) 種。`,
        String.raw`總數為
        \[
        2\cdot2\cdot4!=96。
        \]`
      ]
    },
    "115B-15": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`某校全體學生中有近視的占 \(\frac12\)、有蛀牙的占 \(\frac13\)。設 \(p\) 為無近視且無蛀牙的學生比例。已知有近視的學生中，有蛀牙的占少數；有蛀牙的學生中，有近視的占多數。求 \(p\) 的範圍。`,
      solution: [
        String.raw`令同時有近視與蛀牙的比例為 \(x\)。由容斥原理，
        \[
        p=1-\left(\frac12+\frac13-x\right)=\frac16+x，
        \]
        即 \(x=p-\frac16\)。`,
        String.raw`「有近視者中，有蛀牙的占少數」給出
        \[
        \frac{x}{1/2}<\frac12\quad\Longrightarrow\quad x<\frac14。
        \]`,
        String.raw`「有蛀牙者中，有近視的占多數」給出
        \[
        \frac{x}{1/3}>\frac12\quad\Longrightarrow\quad x>\frac16。
        \]`,
        String.raw`代回 \(p=\frac16+x\)，得到
        \[
        \frac13<p<\frac5{12}。
        \]`
      ]
    },
    "115B-16": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`坐標平面上，直線 \(L:y=f(x)\) 與拋物線 \(\Gamma:y=g(x)\) 交於 \((1,0)、(5,4)\) 兩點，且 \((2,2)\) 在 \(\Gamma\) 上。求 \(g(x)-f(x)\) 的最大值。`,
      solution: [
        String.raw`通過兩交點的直線為 \(f(x)=x-1\)。因兩圖形在 \(x=1,5\) 相交，可設
        \[
        g(x)-f(x)=a(x-1)(x-5)。
        \]`,
        String.raw`代入 \(x=2\)：\(g(2)-f(2)=2-1=1\)，故 \(-3a=1\)，得到 \(a=-\frac13\)。`,
        String.raw`所以
        \[
        g(x)-f(x)=-\frac13(x-1)(x-5)
        \]
        是開口向下的拋物線，頂點在 \(x=3\)，最大值為
        \[
        -\frac13(3-1)(3-5)=\frac43。
        \]`
      ]
    },
    "115B-17": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`利用單點透視法將坐標空間的點繪在畫布坐標平面上。空間中與 \(y\) 軸平行的直線在畫布上的消失點為 \((0,15)\)；與 \(z\) 軸平行的直線在畫布上都與畫布 \(y\) 軸平行。已知空間點 \((0,0,0)、(3,4,0)、(3,0,3)\) 在畫布上分別為 \((0,0)、(\frac{13}{5},2)、(3,3)\)，求 \((3,4,3)\) 在畫布上的 \(y\) 坐標。`,
      solution: [
        String.raw`空間中由 \((3,0,0)\) 沿 \(z\) 軸到 \((3,0,3)\)，其畫布線段平行於畫布 \(y\) 軸；因此 \((3,0,0)\) 在畫布上為 \((3,0)\)。`,
        String.raw`空間中沿 \(y\) 軸的平行線在畫布上都通過消失點 \(V=(0,15)\)。所以 \((3,0,3)\) 的畫布點 \(C=(3,3)\) 與所求點 \(D\) 共線於 \(CV\)。`,
        String.raw`又 \((3,4,3)\) 與 \((3,4,0)\) 只差 \(z\) 坐標，故兩者在畫布上有相同的 \(x\) 坐標 \(\frac{13}{5}\)。直線 \(CV\) 的斜率為
        \[
        \frac{15-3}{0-3}=-4。
        \]
        因此
        \[
        y_D-3=-4\left(\frac{13}{5}-3\right)=\frac85，
        \]
        得 \(y_D=\frac{23}{5}\)。`
      ]
    },
    "115B-18": {
      verified: true,
      sourcePage: 6,
      stem: "在星軌照片的坐標平面上，甲星軌跡的起點、終點分別為 (8,0)、(0,0)。試選出起點與終點連線線段的中垂線方程式。",
      options: {
        "1": String.raw`\(x=4\)`,
        "2": String.raw`\(y=4\)`,
        "3": String.raw`\(y=x-4\)`,
        "4": String.raw`\(y=-x+4\)`,
        "5": String.raw`\(y=4x\)`
      },
      solution: [
        String.raw`線段兩端為 \((8,0)、(0,0)\)，中點是 \((4,0)\)，且原線段為水平線。`,
        String.raw`因此中垂線是通過 \((4,0)\) 的鉛直線，方程式為 \(x=4\)。`
      ],
      optionAnalysis: {
        "1": String.raw`通過中點 \((4,0)\) 且垂直於水平線段，正確。`,
        "2": String.raw`這是水平線，與原線段平行而非垂直。`,
        "3": String.raw`雖通過部分相關位置，但斜率為 1，不垂直於水平線段。`,
        "4": String.raw`斜率為 \(-1\)，並非線段的中垂線。`,
        "5": String.raw`通過原點且斜率為 4，不通過線段中點。`
      }
    },
    "115B-19": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 18 題題組。令 \(L\) 為通過 \((8,0)\) 且斜率為 1 的直線。試說明北極星所在點 \(P\) 在 \(L\) 上，並求甲星軌跡所在的圓方程式。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`甲星軌跡繞圓心 \(P\) 逆時鐘旋轉 \(90^\circ\)，所以從 \(P\) 指向起點 \((8,0)\) 與終點 \((0,0)\) 的兩半徑互相垂直且等長。故三角形 \(OPA\) 是等腰直角三角形。`,
        String.raw`弦 \(OA\) 的中垂線是 \(x=4\)，所以可設 \(P=(4,a)\)，且由圖形位置知 \(a<0\)。`,
        String.raw`利用兩半徑垂直：
        \[
        \overrightarrow{PA}\cdot\overrightarrow{PO}
        =(4,-a)\cdot(-4,-a)=-16+a^2=0。
        \]
        因 \(a<0\)，得 \(a=-4\)，所以 \(P=(4,-4)\)。`,
        String.raw`直線 \(PA\) 的斜率為 \(\frac{0-(-4)}{8-4}=1\)，且通過 \((8,0)\)，因此 \(PA\) 就是 \(L\)，故 \(P\) 在 \(L\) 上。`,
        String.raw`半徑平方為 \(4^2+(-4)^2=32\)，所以圓方程式為
        \[
        (x-4)^2+(y+4)^2=32。
        \]`
      ]
    },
    "115B-20": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 18 題題組。已知乙星軌跡的起點 \(Q=(2,8)\)，令 \(R\) 為其繞 \(P\) 逆時鐘旋轉 \(90^\circ\) 後的軌跡終點，求 \(\overrightarrow{PR}\) 以及點 \(R\) 的坐標。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`由第 19 題得 \(P=(4,-4)\)，所以
        \[
        \overrightarrow{PQ}=(2-4,\,8-(-4))=(-2,12)。
        \]`,
        String.raw`平面向量 \((x,y)\) 逆時鐘旋轉 \(90^\circ\) 後為 \((-y,x)\)，因此
        \[
        \overrightarrow{PR}=(-12,-2)。
        \]`,
        String.raw`所以
        \[
        R=P+\overrightarrow{PR}=(4,-4)+(-12,-2)=(-8,-6)。
        \]`
      ]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "114A-1": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`不透明袋中有藍、綠色球各若干顆，且球上皆有 1 或 2 的編號。各類球數如下：
      \[
      \begin{array}{c|cc}
      &\text{藍}&\text{綠}\\\hline
      1\text{ 號}&2&4\\
      2\text{ 號}&3&k
      \end{array}
      \]
      從袋中隨機抽取一球，每顆球被抽到的機率相等。若「抽到藍色球」與「抽到 1 號球」互相獨立，求 \(k\)。`,
      options: { "1": "2", "2": "3", "3": "4", "4": "5", "5": "6" },
      solution: [
        String.raw`總球數為 \(9+k\)，故
        \[
        P(\text{藍})=\frac5{9+k},\quad
        P(1\text{ 號})=\frac6{9+k},\quad
        P(\text{藍且 1 號})=\frac2{9+k}。
        \]`,
        String.raw`由事件獨立，
        \[
        \frac2{9+k}=\frac5{9+k}\cdot\frac6{9+k}，
        \]
        得 \(2(9+k)=30\)，所以 \(k=6\)。`
      ],
      optionAnalysis: {
        "1": String.raw`代入 \(k=2\) 時，交集機率不等於兩事件機率的乘積。`,
        "2": String.raw`未依獨立事件條件 \(P(A\cap B)=P(A)P(B)\) 完整列式。`,
        "3": String.raw`把某一列或某一欄的球數誤當成總球數。`,
        "4": String.raw`若只比較藍球與綠球總數，無法保證兩事件獨立。`,
        "5": String.raw`由 \(\frac2{9+k}=\frac5{9+k}\frac6{9+k}\) 解得 \(k=6\)。`
      }
    },
    "114A-2": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`坐標平面上，\(P(a,0)\) 為 \(x\) 軸上一點，其中 \(a>0\)。令 \(L_1、L_2\) 為通過 \(P\) 點，斜率分別為 \(-\frac43、-\frac32\) 的直線。已知 \(L_1、L_2\) 分別與兩坐標軸圍成的兩個直角三角形面積差為 3，求 \(a\)。`,
      options: {
        "1": String.raw`\(3\sqrt2\)`,
        "2": "6",
        "3": String.raw`\(6\sqrt2\)`,
        "4": "9",
        "5": String.raw`\(8\sqrt2\)`
      },
      solution: [
        String.raw`兩直線的 \(x\) 截距皆為 \(a\)，\(y\) 截距分別為 \(\frac43a、\frac32a\)。`,
        String.raw`兩個直角三角形面積分別為
        \[
        \frac12a\cdot\frac43a=\frac23a^2,\qquad
        \frac12a\cdot\frac32a=\frac34a^2。
        \]`,
        String.raw`面積差為 \(\frac1{12}a^2=3\)，故 \(a^2=36\)。因 \(a>0\)，所以 \(a=6\)。`
      ],
      optionAnalysis: {
        "1": String.raw`面積含有兩個截距的乘積，解方程式時須處理 \(a^2\)。`,
        "2": String.raw`由兩面積差 \(\frac1{12}a^2=3\) 得 \(a=6\)。`,
        "3": String.raw`把面積公式中的 \(\frac12\) 或兩斜率差處理錯誤。`,
        "4": String.raw`未對 \(a^2=36\) 正確取正平方根。`,
        "5": String.raw`不符合兩個截距三角形的面積差條件。`
      }
    },
    "114A-3": {
      verified: true,
      sourcePage: 1,
      stem: "某校音樂會包含 5 個鋼琴、4 個小提琴、3 個歌唱表演，共 12 個不同曲目。若同類表演必須排在一起，且歌唱必須排在鋼琴之後或小提琴之後，求可能的曲目排列方式數。",
      options: {
        "1": String.raw`\(5!\times4!\times3!\)`,
        "2": String.raw`\(2\times5!\times4!\times3!\)`,
        "3": String.raw`\(3\times5!\times4!\times3!\)`,
        "4": String.raw`\(4\times5!\times4!\times3!\)`,
        "5": String.raw`\(6\times5!\times4!\times3!\)`
      },
      solution: [
        String.raw`先把鋼琴、小提琴、歌唱各視為一個區塊。三區塊共有 \(3!=6\) 種順序。`,
        String.raw`歌唱必須在鋼琴或小提琴至少一類之後，等同歌唱區塊不能排第一；歌唱排第二有 2 種、排第三有 2 種，共 4 種區塊順序。`,
        String.raw`各區塊內曲目分別可排 \(5!、4!、3!\) 種，因此總數為
        \[
        4\times5!\times4!\times3!。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`只算一種區塊順序，漏掉其他符合條件的排列。`,
        "2": String.raw`只計歌唱排在最後，漏掉歌唱排第二的兩種情況。`,
        "3": String.raw`三類區塊的合法順序不是 3 種，而是 4 種。`,
        "4": String.raw`歌唱不排第一共有 4 種區塊順序，再乘各區塊內排列。`,
        "5": String.raw`把全部 \(3!\) 種區塊順序都算入，包含歌唱排第一的兩種非法情況。`
      }
    },
    "114A-4": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`坐標平面上，\(x、y\) 坐標均為整數的點稱為格子點。求函數圖形
      \[
      y=\log_2x、
      \]
      \(x\) 軸與直線 \(x=\frac{61}{2}\) 所圍有界區域內部（不含邊界）的格子點數。`,
      options: { "1": "88", "2": "89", "3": "90", "4": "91", "5": "92" },
      solution: [
        String.raw`內部格子點須滿足 \(1<x<30.5\) 且 \(0<y<\log_2x\)，所以整數 \(x\) 為 \(2\) 至 \(30\)。`,
        String.raw`依 \(x\) 分段計數正整數 \(y\)：
        \[
        \begin{array}{c|c}
        x\text{ 範圍}&y\text{ 的個數}\\\hline
        2&0\\
        3&1\\
        4&1\\
        5\sim7&2\\
        8&2\\
        9\sim15&3\\
        16&3\\
        17\sim30&4
        \end{array}
        \]`,
        String.raw`合計
        \[
        0+1+1+3\cdot2+2+7\cdot3+3+14\cdot4=90。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`常見原因是漏算靠近 \(x=30\) 的格子點。`,
        "2": String.raw`需注意 \(x=4,8,16\) 時圖形上的整數點屬邊界，不能算入。`,
        "3": String.raw`逐段排除對數曲線與坐標軸邊界後，共 90 點。`,
        "4": String.raw`可能把某個位於 \(y=\log_2x\) 上的邊界點算入。`,
        "5": String.raw`可能同時把兩個對數值為整數的邊界點誤算入。`
      }
    },
    "114A-5": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`設 \(0\le\theta\le2\pi\)。所有同時滿足
      \[
      \sin2\theta>\sin\theta,\qquad \cos2\theta>\cos\theta
      \]
      的 \(\theta\) 可表為 \(a\pi<\theta<b\pi\)。求 \(b-a\)。`,
      options: {
        "1": String.raw`\(\frac13\)`,
        "2": String.raw`\(\frac12\)`,
        "3": String.raw`\(\frac23\)`,
        "4": String.raw`\(\frac34\)`,
        "5": "1"
      },
      solution: [
        String.raw`第二個不等式可化為
        \[
        2\cos^2\theta-\cos\theta-1
        =(\cos\theta-1)(2\cos\theta+1)>0。
        \]
        在題設範圍內須有 \(\cos\theta<-\frac12\)，故 \(\frac{2\pi}{3}<\theta<\frac{4\pi}{3}\)。`,
        String.raw`第一個不等式為
        \[
        \sin\theta(2\cos\theta-1)>0。
        \]
        在上述區間中 \(2\cos\theta-1<0\)，因此還要 \(\sin\theta<0\)，得到
        \[
        \pi<\theta<\frac{4\pi}{3}。
        \]`,
        String.raw`所以 \(a=1、b=\frac43\)，故 \(b-a=\frac13\)。`
      ],
      optionAnalysis: {
        "1": String.raw`兩個不等式取交集後為 \((\pi,\frac{4\pi}{3})\)，長度係數為 \(\frac13\)。`,
        "2": String.raw`只依正弦或餘弦的正負判斷，未取兩條件交集。`,
        "3": String.raw`這是 \((\frac{2\pi}{3},\frac{4\pi}{3})\) 的長度，但尚未套用第一個不等式。`,
        "4": String.raw`不符合兩個三角不等式的共同解集。`,
        "5": String.raw`共同解集只落在第三象限的一段，並非長達 \(\pi\)。`
      }
    },
    "114A-6": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`坐標空間中有三個彼此互相垂直的向量 \(\vec u,\vec v,\vec w\)。已知
      \[
      \vec u-\vec v=(2,-1,0),\qquad
      \vec v-\vec w=(-1,2,3)。
      \]
      求由 \(\vec u,\vec v,\vec w\) 張出的平行六面體體積。`,
      options: {
        "1": String.raw`\(2\sqrt5\)`,
        "2": String.raw`\(5\sqrt2\)`,
        "3": String.raw`\(2\sqrt{10}\)`,
        "4": String.raw`\(4\sqrt5\)`,
        "5": String.raw`\(4\sqrt{10}\)`
      },
      solution: [
        String.raw`由互相垂直，
        \[
        |\vec u-\vec v|^2=|\vec u|^2+|\vec v|^2=5，
        \]
        \[
        |\vec v-\vec w|^2=|\vec v|^2+|\vec w|^2=14。
        \]`,
        String.raw`又
        \[
        (\vec u-\vec v)\cdot(\vec v-\vec w)
        =-|\vec v|^2=(2,-1,0)\cdot(-1,2,3)=-4，
        \]
        所以 \(|\vec v|=2\)。進而得 \(|\vec u|=1、|\vec w|=\sqrt{10}\)。`,
        String.raw`三向量互相垂直，體積就是三邊長乘積：
        \[
        V=|\vec u||\vec v||\vec w|=1\cdot2\cdot\sqrt{10}=2\sqrt{10}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`未同時利用兩個差向量的內積求出 \(|\vec v|^2\)。`,
        "2": String.raw`把某個平方長直接當成向量長度。`,
        "3": String.raw`三個互相垂直向量長度為 \(1,2,\sqrt{10}\)，乘積正確。`,
        "4": String.raw`多乘了一個 2 或錯算 \(|\vec u|\)。`,
        "5": String.raw`把 \(|\vec v|^2=4\) 當成 \(|\vec v|=4\)。`
      }
    },
    "114A-7": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`數列 \(\langle a_n\rangle\) 滿足
      \[
      3a_{n+1}=a_n+n\quad(n\in\mathbb N),\qquad a_1=2。
      \]
      令
      \[
      b_n=a_n-\frac n2+\frac34。
      \]
      試選出正確的選項。`,
      options: {
        "1": String.raw`\(a_2=2\)`,
        "2": String.raw`\(b_2=\frac34\)`,
        "3": String.raw`數列 \(\langle b_n\rangle\) 是公比為 \(\frac23\) 的等比數列`,
        "4": String.raw`對任意正整數 \(n\)，\(3^na_n\) 皆為正整數`,
        "5": String.raw`\(b_{10}<10^{-4}\)`
      },
      solution: [
        String.raw`由遞迴式 \(a_2=\frac{a_1+1}{3}=1\)，所以選項（1）錯；而
        \[
        b_2=1-1+\frac34=\frac34，
        \]
        選項（2）正確。`,
        String.raw`代入定義可得
        \[
        b_{n+1}=a_{n+1}-\frac{n+1}{2}+\frac34
        =\frac13b_n，
        \]
        因此公比是 \(\frac13\)，選項（3）錯誤。`,
        String.raw`令 \(c_n=3^na_n\)，則
        \[
        c_{n+1}=c_n+n3^n。
        \]
        由 \(c_1=6\) 可用歸納法知每個 \(c_n\) 都是正整數，選項（4）正確。`,
        String.raw`\(b_1=\frac94\)，所以
        \[
        b_{10}=\frac94\left(\frac13\right)^9=\frac1{4\cdot3^7}>10^{-4}，
        \]
        選項（5）錯誤。`
      ],
      optionAnalysis: {
        "1": String.raw`直接代 \(n=1\) 得 \(3a_2=3\)，所以 \(a_2=1\)。`,
        "2": String.raw`由 \(a_2=1\) 代入定義，確得 \(b_2=\frac34\)。`,
        "3": String.raw`正確公比是 \(\frac13\)，不是 \(\frac23\)。`,
        "4": String.raw`\(3^{n+1}a_{n+1}=3^na_n+n3^n\)，可由歸納法證明為正整數。`,
        "5": String.raw`精確值為 \(\frac1{8748}\approx1.143\times10^{-4}\)，仍大於 \(10^{-4}\)。`
      }
    },
    "114A-8": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`考慮坐標平面上滿足
      \[
      \frac{2^{x^2}}8=\frac{4^x}{2^{y^2}}
      \]
      的點 \(P(x,y)\)，試選出正確的選項。`,
      options: {
        "1": String.raw`當 \(x=3\) 時，滿足方程式的 \(y\) 有相異 2 個`,
        "2": String.raw`若 \((a,b)\) 滿足方程式，則 \((-a,-b)\) 也滿足`,
        "3": "所有可能的點構成的圖形為一個圓",
        "4": String.raw`點 \(P(x,y)\) 可能在直線 \(x+y=4\) 上`,
        "5": String.raw`對所有可能的點 \(P(x,y)\)，\(x-y\) 的最大值為 \(1+2\sqrt2\)`
      },
      solution: [
        String.raw`全部改寫成以 2 為底：
        \[
        x^2-3=2x-y^2
        \quad\Longleftrightarrow\quad
        (x-1)^2+y^2=4。
        \]
        軌跡是圓心 \((1,0)\)、半徑 2 的圓，所以選項（3）正確。`,
        String.raw`當 \(x=3\) 時只有 \(y=0\)；圓對 \(x\) 軸對稱，但不對原點對稱。直線 \(x+y=4\) 到圓心距離為 \(\frac3{\sqrt2}>2\)，不與圓相交。`,
        String.raw`在線性函數 \(x-y\) 的方向 \((1,-1)\) 上，最大值為
        \[
        (1,0)\cdot(1,-1)+2\sqrt{1^2+(-1)^2}=1+2\sqrt2，
        \]
        所以選項（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`\(x=3\) 是圓的最右端，只得到 \(y=0\) 一個解。`,
        "2": String.raw`圓心是 \((1,0)\)，圖形不以原點為中心對稱。`,
        "3": String.raw`方程式等價於 \((x-1)^2+y^2=4\)，確為一個圓。`,
        "4": String.raw`直線到圓心距離 \(\frac3{\sqrt2}\) 大於半徑 2，沒有交點。`,
        "5": String.raw`以圓心投影值加上半徑乘方向向量長度，得 \(1+2\sqrt2\)。`
      }
    },
    "114A-9": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`設 \(b、c\) 為實數。已知
      \[
      x^2+bx+c=0
      \]
      有實根，但
      \[
      x^2+(b+2)x+c=0
      \]
      沒有實根。試選出正確的選項。`,
      options: {
        "1": String.raw`\(c<0\)`,
        "2": String.raw`\(b<0\)`,
        "3": String.raw`\(x^2+(b+1)x+c=0\) 有實根`,
        "4": String.raw`\(x^2+(b+2)x-c=0\) 有實根`,
        "5": String.raw`\(x^2+(b-2)x+c=0\) 有實根`
      },
      solution: [
        String.raw`由判別式條件，
        \[
        b^2-4c\ge0,\qquad (b+2)^2-4c<0。
        \]
        因此
        \[
        (b+2)^2<4c\le b^2。
        \]`,
        String.raw`上式先給出 \(c>0\)，並由 \((b+2)^2<b^2\) 得 \(b<-1\)，故選項（2）正確、（1）錯誤。`,
        String.raw`選項（4）的判別式為 \((b+2)^2+4c>0\)，必有實根。`,
        String.raw`因 \(b<-1\)，有 \((b-2)^2>b^2\ge4c\)，所以選項（5）的判別式為正，必有實根。至於 \((b+1)^2-4c\) 不一定非負，選項（3）不能保證。`
      ],
      optionAnalysis: {
        "1": String.raw`由 \((b+2)^2<4c\) 可知 \(c>0\)，方向相反。`,
        "2": String.raw`由 \((b+2)^2<b^2\) 解得 \(b<-1\)，因此必有 \(b<0\)。`,
        "3": String.raw`條件沒有保證 \((b+1)^2\ge4c\)，可能沒有實根。`,
        "4": String.raw`判別式 \((b+2)^2+4c\) 為正，必有實根。`,
        "5": String.raw`\(b<-1\) 使 \((b-2)^2>b^2\ge4c\)，判別式非負。`
      }
    },
    "114A-10": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`令 \(\Gamma\) 為 \(y=\sin\pi x\) 在 \(0\le x\le3\) 內的圖形。水平直線 \(L:y=k\) 與 \(\Gamma\) 相交，其中三個交點
      \[
      P(x_1,k),\ Q(x_2,k),\ R(x_3,k)
      \]
      滿足 \(x_1<x_2<1<x_3\)。試選出正確的選項。`,
      options: {
        "1": String.raw`\(k>0\)`,
        "2": String.raw`\(L\) 與 \(\Gamma\) 恰有 3 個交點`,
        "3": String.raw`\(x_1+x_2<1\)`,
        "4": String.raw`若 \(2\overline{PQ}=\overline{QR}\)，則 \(k=\frac12\)`,
        "5": String.raw`\(L\) 與 \(\Gamma\) 所有交點的 \(x\) 坐標之和大於 5`
      },
      solution: [
        String.raw`在 \(0<x<1\) 有兩個交點，故 \(0<k<1\)，選項（1）正確。設 \(x_1=t\)，則由正弦圖形對稱性，
        \[
        x_2=1-t,\quad x_3=2+t,\quad x_4=3-t，
        \]
        所以其實共有 4 個交點。`,
        String.raw`\(x_1+x_2=1\)，故選項（3）錯。四交點橫坐標和為
        \[
        t+(1-t)+(2+t)+(3-t)=6>5，
        \]
        選項（5）正確。`,
        String.raw`若 \(2PQ=QR\)，則
        \[
        2(1-2t)=1+2t，
        \]
        得 \(t=\frac16\)，所以 \(k=\sin\frac{\pi}{6}=\frac12\)，選項（4）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`前兩個交點都在正弦圖形的正半波，故 \(k>0\)。`,
        "2": String.raw`在 \((2,3)\) 還有兩個對稱交點，總數為 4。`,
        "3": String.raw`同一正半波的兩交點關於 \(x=\frac12\) 對稱，所以和恰為 1。`,
        "4": String.raw`距離條件解得 \(x_1=\frac16\)，因此 \(k=\frac12\)。`,
        "5": String.raw`四個交點的 \(x\) 坐標總和固定為 6。`
      }
    },
    "114A-11": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`在 \(\triangle ABC\) 中，
      \[
      AB=6,\quad AC=5,\quad BC=4。
      \]
      令 \(D\) 為 \(\overline{AB}\) 中點，\(P\) 為 \(\angle ABC\) 的角平分線與 \(\overline{CD}\) 的交點。試選出正確的選項。`,
      options: {
        "1": String.raw`\(CP=\frac37CD\)`,
        "2": String.raw`\(\overrightarrow{AP}=\frac37\overrightarrow{AB}+\frac27\overrightarrow{AC}\)`,
        "3": String.raw`\(\cos\angle BAC=\frac34\)`,
        "4": String.raw`\(\triangle ACP\) 面積為 \(\frac{15\sqrt7}{14}\)`,
        "5": String.raw`\(\overrightarrow{AP}\cdot\overrightarrow{AC}=\frac{120}{7}\)`
      },
      solution: [
        String.raw`在 \(\triangle BCD\) 中，\(BP\) 平分 \(\angle CBD\)，且 \(BC:BD=4:3\)，故
        \[
        CP:PD=4:3,\qquad CP=\frac47CD。
        \]
        因此選項（1）錯誤。`,
        String.raw`由餘弦定理，
        \[
        \cos\angle BAC=\frac{AB^2+AC^2-BC^2}{2AB\cdot AC}
        =\frac{36+25-16}{60}=\frac34，
        \]
        選項（3）正確。`,
        String.raw`取 \(B=(0,0)、A=(6,0)\)，可得 \(C=(\frac94,\frac{5\sqrt7}{4})\)。由分點公式
        \[
        P=\frac{3C+4D}{7}
        =\left(\frac{75}{28},\frac{15\sqrt7}{28}\right)。
        \]
        因而
        \[
        [\triangle ACP]=\frac{15\sqrt7}{14},\qquad
        \overrightarrow{AP}\cdot\overrightarrow{AC}=\frac{120}{7}。
        \]`,
        String.raw`此外
        \[
        \overrightarrow{AP}=\frac27\overrightarrow{AB}+\frac37\overrightarrow{AC}，
        \]
        所以選項（2）的係數互換了。`
      ],
      optionAnalysis: {
        "1": String.raw`角平分線定理給 \(CP:PD=4:3\)，所以 \(CP=\frac47CD\)。`,
        "2": String.raw`正確係數是 \(\frac27\overrightarrow{AB}+\frac37\overrightarrow{AC}\)。`,
        "3": String.raw`代三邊長進餘弦定理可得 \(\frac34\)。`,
        "4": String.raw`由 \(CP/CD=4/7\) 搭配中線分割面積，可得 \(\frac{15\sqrt7}{14}\)。`,
        "5": String.raw`使用分點坐標或向量線性組合計算，內積為 \(\frac{120}{7}\)。`
      }
    },
    "114A-12": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`某合金由甲、乙兩種金屬組成。20 筆「甲占比為 \(x\%\) 的合金所對應波長 \(y\)（奈米）」資料，其迴歸直線為
      \[
      y=21.3x-40。
      \]
      現改述為「乙占比 \(u\%\) 所對應波長 \(v\)（微米）」，轉換後迴歸直線為 \(v=au+b\)。已知 \(1\) 奈米 \(=10^{-9}\) 公尺、\(1\) 微米 \(=10^{-6}\) 公尺。試選出正確的選項。`,
      options: {
        "1": String.raw`\(u_k=100-x_k\)`,
        "2": String.raw`\(v_k=1000y_k\)`,
        "3": String.raw`\(u_1,\ldots,u_{20}\) 的標準差等於 \(x_1,\ldots,x_{20}\) 的標準差`,
        "4": String.raw`\(b=2.09\)`,
        "5": String.raw`若新增一筆恰在 \(v=au+b\) 上的資料，21 筆資料的迴歸直線仍為 \(v=au+b\)`
      },
      solution: [
        String.raw`兩金屬占比和為 100%，所以 \(u=100-x\)，選項（1）正確。由奈米換微米須除以 1000，故 \(v=\frac{y}{1000}\)，選項（2）錯誤。`,
        String.raw`平移與乘以 \(-1\) 都不改變標準差，所以 \(u=100-x\) 與 \(x\) 的標準差相同，選項（3）正確。`,
        String.raw`轉換迴歸式：
        \[
        v=\frac{21.3x-40}{1000}
        =0.0213(100-u)-0.04
        =-0.0213u+2.09，
        \]
        所以 \(b=2.09\)，選項（4）正確。`,
        String.raw`最小平方法的舊殘差和及「自變數乘殘差和」皆為 0；新增點在原迴歸線上，新增殘差也是 0，因此原直線仍滿足常態方程，選項（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`甲、乙占比相加為 100%，故 \(u=100-x\)。`,
        "2": String.raw`1 微米等於 1000 奈米，奈米數值換成微米應除以 1000。`,
        "3": String.raw`\(u=100-x\) 只做平移及乘 \(-1\)，標準差不變。`,
        "4": String.raw`單位與占比同時轉換後，截距為 \(2.09\)。`,
        "5": String.raw`新增點在既有迴歸線上、殘差為 0，不會改變最小平方法的迴歸線。`
      }
    },
    "114A-13": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`已知實係數三次多項式 \(f(x)\) 除以 \(x+6\) 得商式 \(q(x)\) 和餘式 3。若 \(q(x)\) 在 \(x=-6\) 有最大值 8，求 \(y=f(x)\) 圖形的對稱中心坐標。`,
      solution: [
        String.raw`因 \(q(x)\) 是二次式且在 \(x=-6\) 有最大值 8，可設
        \[
        q(x)=a(x+6)^2+8,\qquad a<0。
        \]`,
        String.raw`由除法算法
        \[
        f(x)=(x+6)q(x)+3=a(x+6)^3+8(x+6)+3。
        \]`,
        String.raw`這是以 \((-6,3)\) 為中心的奇函數平移型，因此圖形對稱中心為
        \[
        \boxed{(-6,3)}。
        \]`
      ]
    },
    "114A-14": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`坐標空間中，點 \(A=(a,b,c)\)，其中 \(a,b,c<0\)。點 \(A\) 與三平面
      \[
      E_1:4y+3z=2,\quad
      E_2:3y+4z=-5,\quad
      E_3:x+2y+2z=-2
      \]
      的距離都是 6。求 \(a+b+c\)。`,
      solution: [
        String.raw`由 \(A\) 到 \(E_1\) 的距離，
        \[
        \frac{|4b+3c-2|}{5}=6。
        \]
        因 \(b,c<0\)，括號內為負，所以 \(4b+3c=-28\)。`,
        String.raw`同理由 \(E_2\) 得
        \[
        \frac{|3b+4c+5|}{5}=6。
        \]
        配合 \(b,c<0\) 可取 \(3b+4c=-35\)。聯立得到 \(b=-1、c=-8\)。`,
        String.raw`再由 \(E_3\)：
        \[
        \frac{|a+2b+2c+2|}{3}=6。
        \]
        代入 \(b,c\) 並使用 \(a<0\)，得 \(a=-2\)。所以
        \[
        a+b+c=-2-1-8=-11。
        \]`
      ]
    },
    "114A-15": {
      verified: true,
      sourcePage: 5,
      stem: "顧客投擲一枚均勻硬幣至多 5 次：前 3 次即累積 3 個正面，以 240 元購買玩偶；到第 4 次才累積 3 個正面，付 320 元；到第 5 次才累積 3 個正面，付 400 元；5 次後仍未累積 3 個正面，付 480 元。求購買金額的期望值。",
      solution: [
        String.raw`第 3 次取得第 3 個正面的機率為 \(\frac18\)。第 4 次才取得第 3 個正面，須前三次恰有 2 正面且第 4 次為正面，機率
        \[
        \binom32\left(\frac12\right)^4=\frac3{16}。
        \]`,
        String.raw`第 5 次才取得第 3 個正面的機率為
        \[
        \binom42\left(\frac12\right)^5=\frac3{16}。
        \]
        五次後正面不超過 2 個的機率為
        \[
        \frac{\binom50+\binom51+\binom52}{2^5}=\frac12。
        \]`,
        String.raw`期望金額
        \[
        240\cdot\frac18+320\cdot\frac3{16}
        +400\cdot\frac3{16}+480\cdot\frac12
        =405。
        \]`
      ]
    },
    "114A-16": {
      verified: true,
      sourcePage: 5,
      stem: String.raw`坐標平面上，\(L_1、L_2\) 通過 \((3,1)\)，斜率分別為 \(m、-m\)。圓 \(\Gamma\) 的圓心在原點，且 \(\Gamma\) 與 \(L_1\) 交於相異兩點 \(A、B\)，圓心到 \(L_1\) 的距離為 1，又 \(\Gamma\) 與 \(L_2\) 相切。求弦 \(\overline{AB}\) 長。`,
      solution: [
        String.raw`兩直線可寫為
        \[
        L_1:mx-y+1-3m=0,\qquad
        L_2:mx+y-1-3m=0。
        \]`,
        String.raw`原點到 \(L_1\) 距離為 1：
        \[
        \frac{|1-3m|}{\sqrt{m^2+1}}=1。
        \]
        平方後得 \(m=0\) 或 \(m=\frac34\)。若 \(m=0\)，兩直線重合且同時相切、相割，矛盾，故 \(m=\frac34\)。`,
        String.raw`圓半徑等於原點到切線 \(L_2\) 的距離：
        \[
        r=\frac{|1+3m|}{\sqrt{m^2+1}}=\frac{13}{5}。
        \]`,
        String.raw`圓心到弦所在直線距離為 1，因此
        \[
        AB=2\sqrt{r^2-1^2}
        =2\sqrt{\frac{169}{25}-1}
        =\frac{24}{5}。
        \]`
      ]
    },
    "114A-17": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`在 \(\triangle ABC\) 中，\(AB=BC=3\)，且
      \[
      \cos\angle ABC=-\frac18。
      \]
      外接圓上一點 \(D\) 滿足 \(BD=4\) 且 \(AD\le CD\)。求 \(CD\)。（化為最簡根式）`,
      solution: [
        String.raw`由餘弦定理，
        \[
        AC^2=3^2+3^2-2\cdot3\cdot3\left(-\frac18\right)=\frac{81}{4}，
        \]
        所以 \(AC=\frac92\)。又 \(\sin B=\frac{3\sqrt7}{8}\)，故外接圓直徑
        \[
        2R=\frac{AC}{\sin B}=\frac{12}{\sqrt7}。
        \]`,
        String.raw`弦 \(BD=4\)，因此其所對圓周角 \(\angle BAD\) 滿足
        \[
        \sin\angle BAD=\frac{BD}{2R}=\frac{\sqrt7}{3}，
        \]
        故 \(|\cos\angle BAD|=\frac{\sqrt2}{3}\)。`,
        String.raw`條件 \(AD\le CD\) 選定 \(D\) 位於靠近 \(A\) 的交點，此時 \(\angle BAD\) 為鈍角，故 \(\cos\angle BAD=-\frac{\sqrt2}{3}\)。在 \(\triangle ABD\) 用餘弦定理：
        \[
        4^2=3^2+AD^2-2(3)(AD)\left(-\frac{\sqrt2}{3}\right)，
        \]
        解得 \(AD=3-\sqrt2\)。`,
        String.raw`圓內接四邊形 \(ABCD\) 的兩條對角線為 \(AC、BD\)。由托勒密定理，
        \[
        AC\cdot BD=AB\cdot CD+BC\cdot AD。
        \]
        代入 \(AC=\frac92、BD=4、AB=BC=3、AD=3-\sqrt2\)，得
        \[
        18=3CD+3(3-\sqrt2)，
        \]
        所以 \(CD=3+\sqrt2\)。`
      ]
    },
    "114A-18": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`已知 \(A、B\) 都是坐標平面上以原點為中心、逆時針旋轉一銳角的旋轉矩陣，且
      \[
      A^2=B^3=
      \begin{bmatrix}0&c\\1&d\end{bmatrix}。
      \]
      求 \(c\)。`,
      options: {
        "1": "0",
        "2": String.raw`\(-1\)`,
        "3": "1",
        "4": String.raw`\(-\frac12\)`,
        "5": String.raw`\(\frac12\)`
      },
      solution: [
        String.raw`右側矩陣的第一欄表示 \((1,0)\) 被變換到 \((0,1)\)，所以它是逆時鐘旋轉 \(90^\circ\) 的矩陣。`,
        String.raw`旋轉 \(90^\circ\) 的標準矩陣為
        \[
        \begin{bmatrix}0&-1\\1&0\end{bmatrix}，
        \]
        因而 \(c=-1、d=0\)。`
      ],
      optionAnalysis: {
        "1": String.raw`若 \(c=0\)，兩欄不會構成正交單位向量，並非旋轉矩陣。`,
        "2": String.raw`逆時鐘旋轉 \(90^\circ\) 的右上元素為 \(-1\)。`,
        "3": String.raw`右上元素為 1 對應順時鐘旋轉 \(90^\circ\)。`,
        "4": String.raw`旋轉矩陣的欄向量長度須為 1，不能取 \(-\frac12\)。`,
        "5": String.raw`同樣不符合旋轉矩陣欄向量為單位向量的條件。`
      }
    },
    "114A-19": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 18 題。設 \(P=(1,1)\) 經 \(A^3\) 變換後為 \(Q\)，且 \(Q\) 經 \(B^4\) 變換後為 \(R\)。求 \(Q\) 坐標，以及 \(\overrightarrow{OR}\) 與向量 \((1,0)\) 的夾角。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`因 \(A^2\) 是逆時鐘旋轉 \(90^\circ\)，且 \(A\) 本身旋轉銳角，所以 \(A\) 是旋轉 \(45^\circ\)；同理 \(B\) 是旋轉 \(30^\circ\)。`,
        String.raw`向量 \(\overrightarrow{OP}=(1,1)\) 長為 \(\sqrt2\)、方向角為 \(45^\circ\)。經 \(A^3\) 再旋轉 \(135^\circ\)，方向角成為 \(180^\circ\)，所以
        \[
        Q=(-\sqrt2,0)。
        \]`,
        String.raw`再經 \(B^4\) 旋轉 \(120^\circ\)，\(\overrightarrow{OR}\) 的方向角為
        \[
        180^\circ+120^\circ=300^\circ。
        \]
        因此它與正 \(x\) 軸方向 \((1,0)\) 的較小夾角為 \(60^\circ\)。`
      ]
    },
    "114A-20": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 18、19 題。令 \(L\) 為通過 \(P\) 且與直線 \(OQ\) 平行的直線，\(S\) 為 \(L\) 與直線 \(OR\) 的交點。求 \(\angle OSP\) 與 \(S\) 的坐標。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`由 \(Q=(-\sqrt2,0)\)，直線 \(OQ\) 是 \(x\) 軸。故通過 \(P=(1,1)\) 且平行於 \(OQ\) 的直線為
        \[
        L:y=1。
        \]`,
        String.raw`由第 19 題，\(\overrightarrow{OR}\) 方向角為 \(300^\circ\)，所以直線 \(OR\) 斜率為
        \[
        \tan300^\circ=-\sqrt3，
        \]
        方程式為 \(y=-\sqrt3x\)。`,
        String.raw`聯立 \(y=1\) 得
        \[
        x=-\frac1{\sqrt3}=-\frac{\sqrt3}{3}，
        \]
        因此
        \[
        S=\left(-\frac{\sqrt3}{3},1\right)。
        \]`,
        String.raw`因 \(SP\) 水平，而直線 \(SO\) 與正 \(x\) 軸的銳夾角為 \(60^\circ\)，故
        \[
        \angle OSP=60^\circ。
        \]`
      ]
    },
    "114B-1": {
      verified: true,
      sourcePage: 1,
      stem: "數線上有一點 P，P 到 1 的距離加上 P 到 4 的距離等於 4。求符合條件的 P 有幾個。",
      options: { "1": "0 個", "2": "1 個", "3": "2 個", "4": "3 個", "5": "無限多個" },
      solution: [
        String.raw`設 \(P\) 的坐標為 \(x\)，條件為
        \[
        |x-1|+|x-4|=4。
        \]`,
        String.raw`若 \(1\le x\le4\)，左式恆為 3，不合。若 \(x<1\)，得 \(5-2x=4\)，所以 \(x=\frac12\)；若 \(x>4\)，得 \(2x-5=4\)，所以 \(x=\frac92\)。`,
        String.raw`共有 2 個符合條件的點。`
      ],
      optionAnalysis: {
        "1": String.raw`區間外各有一個解，並非無解。`,
        "2": String.raw`只找到數線其中一側的解，漏掉另一側。`,
        "3": String.raw`兩解為 \(x=\frac12、\frac92\)。`,
        "4": String.raw`在 \([1,4]\) 內距離和恆為 3，沒有額外解。`,
        "5": String.raw`距離和在 \([1,4]\) 雖為常數，但常數是 3，不是 4。`
      }
    },
    "114B-2": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`設 \(A\) 為 \(3\times2\) 矩陣，且
      \[
      A\begin{bmatrix}1&0\\-1&1\end{bmatrix}
      =
      \begin{bmatrix}4&-6\\-2&1\\3&5\end{bmatrix}。
      \]
      若
      \[
      A\begin{bmatrix}1\\0\end{bmatrix}
      =
      \begin{bmatrix}a\\b\\c\end{bmatrix}，
      \]
      求 \(a+b+c\)。`,
      options: { "1": "0", "2": "2", "3": "4", "4": "5", "5": "8" },
      solution: [
        String.raw`把 \(A\) 的兩欄記為 \(\vec p、\vec q\)。矩陣乘積的兩欄分別為
        \[
        \vec p-\vec q=\begin{bmatrix}4\\-2\\3\end{bmatrix},
        \qquad
        \vec q=\begin{bmatrix}-6\\1\\5\end{bmatrix}。
        \]`,
        String.raw`所以
        \[
        \vec p=
        \begin{bmatrix}4\\-2\\3\end{bmatrix}
        +
        \begin{bmatrix}-6\\1\\5\end{bmatrix}
        =
        \begin{bmatrix}-2\\-1\\8\end{bmatrix}。
        \]
        而 \(A(1,0)^T=\vec p\)，故 \(a+b+c=-2-1+8=5\)。`
      ],
      optionAnalysis: {
        "1": String.raw`沒有正確辨認乘積矩陣的兩個欄向量。`,
        "2": String.raw`可能只處理其中一列，未加總三個分量。`,
        "3": String.raw`把 \(\vec p-\vec q\) 誤當成 \(A\) 的第一欄。`,
        "4": String.raw`第一欄為 \((-2,-1,8)^T\)，分量和為 5。`,
        "5": String.raw`8 只是第一欄的第三個分量，不是三分量總和。`
      }
    },
    "114B-3": {
      verified: true,
      sourcePage: 1,
      stem: String.raw`已知實數 \(a,b\) 滿足
      \[
      \frac12<a<1,\qquad1<b<2。
      \]
      試選出值最小的選項。`,
      options: {
        "1": "0",
        "2": String.raw`\(\log a\)`,
        "3": String.raw`\(\log(a^2)\)`,
        "4": String.raw`\(\log b\)`,
        "5": String.raw`\(\frac1{\log b}\)`
      },
      solution: [
        String.raw`因 \(0<a<1\)，所以 \(\log a<0\)，且
        \[
        \log(a^2)=2\log a<\log a。
        \]`,
        String.raw`又 \(b>1\)，所以 \(\log b>0\) 且 \(\frac1{\log b}>0\)。因此所有選項中最小的是 \(\log(a^2)\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\log a\) 與 \(\log(a^2)\) 都是負數，故小於 0。`,
        "2": String.raw`因 \(\log a<0\)，乘 2 後的 \(\log(a^2)\) 更小。`,
        "3": String.raw`\(\log(a^2)=2\log a<\log a<0\)，為最小值。`,
        "4": String.raw`\(b>1\)，所以 \(\log b>0\)。`,
        "5": String.raw`\(\log b>0\)，其倒數也為正。`
      }
    },
    "114B-4": {
      verified: true,
      sourcePage: 1,
      stem: "四種水果公仔每次被抽中的機率相等，每次抽得一個。某甲抽獎四次，求恰好抽到三種不同款式公仔的機率。",
      options: {
        "1": String.raw`\(\frac5{16}\)`,
        "2": String.raw`\(\frac38\)`,
        "3": String.raw`\(\frac12\)`,
        "4": String.raw`\(\frac9{16}\)`,
        "5": String.raw`\(\frac58\)`
      },
      solution: [
        String.raw`四次抽到三種款式，表示其中一款出現兩次，另兩款各一次。先選出現的三款有 \(\binom43\) 種，再選重複款有 3 種。`,
        String.raw`四次結果的排列數為 \(\frac{4!}{2!}=12\)，所以有利序列數
        \[
        \binom43\cdot3\cdot12=144。
        \]`,
        String.raw`全部等可能序列有 \(4^4=256\) 種，故機率為
        \[
        \frac{144}{256}=\frac9{16}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`未完整計入重複款式的選法或四次排列。`,
        "2": String.raw`只計算部分三款組合，漏掉款式選擇。`,
        "3": String.raw`恰三款並非所有非全同事件的一半。`,
        "4": String.raw`有利序列 144 種除以全部 256 種，得到 \(\frac9{16}\)。`,
        "5": String.raw`可能把「至少三款」與「恰三款」混在一起。`
      }
    },
    "114B-5": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`空間中兩相交直線 \(L、M\) 的夾角為 \(24^\circ\)。將 \(M\) 繞著 \(L\) 旋轉一圈形成直圓錐面。若平面 \(E\) 與直線 \(L\) 平行，求 \(E\) 與圓錐面的截痕種類。`,
      options: { "1": "雙曲線", "2": "拋物線", "3": "橢圓（長短軸不相等）", "4": "圓", "5": "兩相交直線" },
      solution: [
        String.raw`直線 \(L\) 是圓錐軸。平面 \(E\) 與軸平行，因此會同時切到圓錐的上下兩個錐面。`,
        String.raw`平面截直圓錐面且穿過兩個錐面時，截痕是雙曲線。`
      ],
      optionAnalysis: {
        "1": String.raw`平面平行圓錐軸並切過兩個錐面，截痕為雙曲線。`,
        "2": String.raw`拋物線要求截平面平行於圓錐的一條母線，不是平行於軸。`,
        "3": String.raw`橢圓只切到單一錐面，與本題平行軸的情況不同。`,
        "4": String.raw`圓要求截平面垂直圓錐軸。`,
        "5": String.raw`只有截平面通過圓錐頂點時才可能退化成兩相交直線，題目未給此條件。`
      }
    },
    "114B-6": {
      verified: true,
      sourcePage: 2,
      stem: String.raw`設 \(a,b,c\) 為實數，且
      \[
      f(x)=a(x-1)(x-3)+b(x-1)(x-4)+c(x-3)(x-4)
      \]
      化簡後等於 \(x^2\)。試選出 \(a,b,c\) 的正確大小關係。`,
      options: {
        "1": String.raw`\(a>b>c\)`,
        "2": String.raw`\(a>c>b\)`,
        "3": String.raw`\(b>c>a\)`,
        "4": String.raw`\(c>a>b\)`,
        "5": String.raw`\(c>b>a\)`
      },
      solution: [
        String.raw`分別代入使兩項消失的數值。令 \(x=1\)：
        \[
        6c=1\Rightarrow c=\frac16。
        \]`,
        String.raw`令 \(x=3\)：
        \[
        -2b=9\Rightarrow b=-\frac92。
        \]
        令 \(x=4\)：
        \[
        3a=16\Rightarrow a=\frac{16}{3}。
        \]`,
        String.raw`所以 \(a>c>b\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(c=\frac16\) 大於負數 \(b=-\frac92\)，故 \(b>c\) 錯誤。`,
        "2": String.raw`三值為 \(\frac{16}{3},-\frac92,\frac16\)，關係正確。`,
        "3": String.raw`\(b\) 是三者中最小，不是最大。`,
        "4": String.raw`\(a=\frac{16}{3}\) 大於 \(c=\frac16\)。`,
        "5": String.raw`\(a\) 是最大值，不是最小。`
      }
    },
    "114B-7": {
      verified: true,
      sourcePage: 2,
      stem: "以單點透視法把地面上的六根鉛直柱 A～F 畫在坐標平面上，消失點為 V(4,9)。各柱柱頂／柱底坐標依序為：A (0,8)/(0,6)、B (2,3)/(2,0)、C (4,6)/(4,3)、D (6,8)/(6,5)、E (8,5)/(8,1)、F (10,8)/(10,6)。已知 A、F 實際高度相等，求實際高度最大的柱子。",
      options: { "1": "A", "2": "B", "3": "C", "4": "D", "5": "E" },
      solution: [
        String.raw`在單點透視中，同一位置的投影柱高除以柱底到地平線的投影距離，可比較實際高度。地平線的 \(y\) 坐標為 9。`,
        String.raw`A～E 的比例依序為
        \[
        \frac2{9-6}=\frac23,\quad
        \frac3{9-0}=\frac13,\quad
        \frac3{9-3}=\frac12,\quad
        \frac3{9-5}=\frac34,\quad
        \frac4{9-1}=\frac12。
        \]`,
        String.raw`最大比例為 D 的 \(\frac34\)，所以 D 柱實際高度最大。`
      ],
      optionAnalysis: {
        "1": String.raw`A 的投影比例為 \(\frac23\)，小於 D 的 \(\frac34\)。`,
        "2": String.raw`B 雖投影高 3，但離地平線較遠，實際高度比例只有 \(\frac13\)。`,
        "3": String.raw`C 的比例為 \(\frac12\)。`,
        "4": String.raw`D 的投影柱高與底點深度比為 \(\frac34\)，六柱中最大。`,
        "5": String.raw`E 的投影柱高雖為 4，但比例只有 \(\frac12\)。`
      }
    },
    "114B-8": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`設 \(\Gamma\) 為函數
      \[
      y=x^3-x
      \]
      的圖形。試選出正確的選項。`,
      options: {
        "1": String.raw`\(\Gamma\) 的對稱中心為原點`,
        "2": String.raw`\(\Gamma\) 在 \(x=0\) 附近近似直線 \(y=x\)`,
        "3": String.raw`\(\Gamma\) 經適當平移後可與 \(y=x^3+x+3\) 的圖形重合`,
        "4": String.raw`\(\Gamma\) 與 \(y=x^3+x\) 的圖形對稱於 \(x\) 軸`,
        "5": String.raw`\(\Gamma\) 與 \(y=-x^3+x\) 的圖形對稱於 \(y\) 軸`
      },
      solution: [
        String.raw`\(f(x)=x^3-x\) 滿足 \(f(-x)=-f(x)\)，是奇函數，圖形以原點為對稱中心，選項（1）正確。`,
        String.raw`在 \(x=0\) 附近，三次項遠小於一次項，所以 \(f(x)\approx-x\)，不是 \(x\)。平移三次函數若不產生二次項只能不做水平平移，無法把一次項係數由 \(-1\) 改成 \(+1\)。`,
        String.raw`把 \(\Gamma\) 對 \(y\) 軸反射，得到
        \[
        y=f(-x)=-x^3+x，
        \]
        因此選項（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`函數為奇函數，圖形以原點中心對稱。`,
        "2": String.raw`原點附近主導項是 \(-x\)，近似線應為 \(y=-x\)。`,
        "3": String.raw`平移不能在保持無二次項的同時把一次項係數由 \(-1\) 變 \(+1\)。`,
        "4": String.raw`對 \(x\) 軸反射會得到 \(y=-x^3+x\)，不是 \(x^3+x\)。`,
        "5": String.raw`以 \(y\) 軸反射即把 \(x\) 換成 \(-x\)，得到 \(-x^3+x\)。`
      }
    },
    "114B-9": {
      verified: true,
      sourcePage: 3,
      stem: String.raw`坐標平面上 \(O\) 為原點，\(P=(2,2)\)。已知
      \[
      \overrightarrow{OP}=\alpha\overrightarrow{OA}+\beta\overrightarrow{OB},
      \qquad0\le\alpha,\beta\le1。
      \]
      試選出可能的 \(A、B\) 坐標。`,
      options: {
        "1": String.raw`\(A=(2,-3)、B=(-4,3)\)`,
        "2": String.raw`\(A=(3,2)、B=(3,4)\)`,
        "3": String.raw`\(A=(3,4)、B=(4,-1)\)`,
        "4": String.raw`\(A=(1,2)、B=(2,1)\)`,
        "5": String.raw`\(A=(1,-1)、B=(1,1)\)`
      },
      solution: [
        String.raw`條件表示 \(P\) 位於由 \(\overrightarrow{OA}、\overrightarrow{OB}\) 張成、係數皆介於 0 與 1 的平行四邊形內。逐項聯立兩坐標。`,
        String.raw`選項（2）解得 \(\alpha=\beta=\frac13\)；選項（3）解得 \(\alpha=\frac{10}{19}、\beta=\frac2{19}\)；選項（4）解得 \(\alpha=\beta=\frac23\)，皆在指定區間內。`,
        String.raw`選項（1）的係數不符合區間；選項（5）若要 \(x=2\) 必有 \(\alpha=\beta=1\)，但此時 \(y=0\)，不能得到 \(P\)。`
      ],
      optionAnalysis: {
        "1": String.raw`聯立後至少一個係數不在 \([0,1]\) 內。`,
        "2": String.raw`取 \(\alpha=\beta=\frac13\) 即得到 \((2,2)\)。`,
        "3": String.raw`取 \(\alpha=\frac{10}{19}、\beta=\frac2{19}\)，兩係數均合法。`,
        "4": String.raw`取 \(\alpha=\beta=\frac23\) 即得到 \((2,2)\)。`,
        "5": String.raw`要使 \(x=2\) 只能取兩係數皆為 1，但所得 \(y=0\)。`
      }
    },
    "114B-10": {
      verified: true,
      sourcePage: 3,
      stem: "四位羽球選手甲、乙、丙、丁在一場比賽中的殺球次數、每次殺球平均用時、標準差依序為：甲 25 次／1.2 秒／0.5 秒；乙 14 次／1.5 秒／0.3 秒；丙 20 次／1.7 秒／0.2 秒；丁 30 次／1.2 秒／0.4 秒。試選出正確的選項。",
      options: {
        "1": "丙的每次殺球平均用時為四位中最多",
        "2": "丁花在殺球的總用時為四位中最多",
        "3": "甲每次殺球的用時都與丁相同",
        "4": "甲每次殺球用時的全距大於丁的全距",
        "5": "乙各次殺球用時不可能都在 1.4 到 1.6 秒之間"
      },
      solution: [
        String.raw`四人的平均用時以丙的 \(1.7\) 秒最大，選項（1）正確。`,
        String.raw`總用時為次數乘平均：甲 \(30\)、乙 \(21\)、丙 \(34\)、丁 \(36\) 秒，所以丁最多，選項（2）正確。`,
        String.raw`甲、丁平均相同不代表每筆資料相同；標準差也不能唯一決定全距，所以（3）、（4）皆不能推出。`,
        String.raw`若乙的所有用時都在 \(1.4\) 到 \(1.6\) 秒，且平均為 \(1.5\)，每筆與平均的距離至多 \(0.1\)，標準差不可能達 \(0.3\)，所以選項（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`四個平均數中 \(1.7\) 最大。`,
        "2": String.raw`次數乘平均後，丁的總用時 \(36\) 秒最大。`,
        "3": String.raw`平均數相同不代表每一筆觀測值都相同。`,
        "4": String.raw`僅比較標準差不能確定兩組資料的全距大小。`,
        "5": String.raw`若全在 \(1.4\)～\(1.6\)，與平均差至多 \(0.1\)，不可能有 \(0.3\) 的標準差。`
      }
    },
    "114B-11": {
      verified: true,
      sourcePage: 4,
      stem: "把地球視為球體。A、B 分別位於經度 0°、180°且北緯 60°；C、D 分別位於經度 0°、180°且北緯 30°；E 位於經度 0°、緯度 0°。球面兩點最短路徑為通過兩點之大圓上的較小弧。試選出正確的選項。",
      options: {
        "1": "北極點到 A 與到 B 的最短路徑長相等",
        "2": "A 到 B 與 C 到 D 的最短路徑長相等",
        "3": "A 到 E 的最短路徑必經過 C",
        "4": "C 到 D 的最短路徑必經過北極點",
        "5": "E 到北極點與 C 到 D 的最短路徑長比為 2：3"
      },
      solution: [
        String.raw`A、B 都在北緯 \(60^\circ\)，到北極的中心角皆為 \(30^\circ\)，選項（1）正確。`,
        String.raw`A、B 位於相反經線，最短路徑經北極，中心角為 \(30^\circ+30^\circ=60^\circ\)；C、D 的最短路徑也經北極，中心角為 \(60^\circ+60^\circ=120^\circ\)，兩者不相等，選項（4）正確。`,
        String.raw`A、C、E 同在經度 \(0^\circ\) 的同一大圓弧上，A 到 E 的較小弧由北緯 \(60^\circ\) 走到赤道，必經北緯 \(30^\circ\) 的 C，選項（3）正確。`,
        String.raw`E 到北極中心角為 \(90^\circ\)，與 C 到 D 的 \(120^\circ\) 之比為 \(3:4\)，不是 \(2:3\)。`
      ],
      optionAnalysis: {
        "1": String.raw`同緯度兩點到北極的中心角相同，皆為 \(30^\circ\)。`,
        "2": String.raw`A 到 B 為 \(60^\circ\)，C 到 D 為 \(120^\circ\)。`,
        "3": String.raw`A、C、E 位於同一條經線的大圓較小弧上。`,
        "4": String.raw`C、D 在相反經線，較短的 \(120^\circ\) 路徑經北極。`,
        "5": String.raw`正確比值為 \(90:120=3:4\)。`
      }
    },
    "114B-12": {
      verified: true,
      sourcePage: 4,
      stem: "某等差數列首項為 1、末項為 81，且 9 也在數列中。設項數為 n，且 n≤100。試選出正確的選項。",
      options: {
        "1": String.raw`\(n\) 為奇數`,
        "2": "41 必在此等差數列",
        "3": "所有符合條件數列的公差都是整數",
        "4": "符合條件的等差數列共有 10 個",
        "5": String.raw`若 \(n\) 為 7 的倍數，則 \(n=21\)`
      },
      solution: [
        String.raw`設 9 是第 \(m+1\) 項，則 \(md=8\)，故 \(d=\frac8m\)，其中 \(m\) 為正整數。`,
        String.raw`末項條件給
        \[
        (n-1)d=80
        \Rightarrow n-1=10m
        \Rightarrow n=10m+1。
        \]
        因 \(n\le100\)，所以 \(m=1,\ldots,9\)，共有 9 個數列，且每個 \(n\) 都是奇數。`,
        String.raw`又
        \[
        41=1+40=1+(5m)d，
        \]
        所以 41 必在數列中。公差 \(\frac8m\) 不一定是整數。`,
        String.raw`若 \(n\) 是 7 的倍數，在 \(m=1,\ldots,9\) 中可得 \(n=21\) 或 \(91\)，不只 21。`
      ],
      optionAnalysis: {
        "1": String.raw`\(n=10m+1\)，必為奇數。`,
        "2": String.raw`41 與首項差 40，等於 \(5m\) 個公差，必是數列項。`,
        "3": String.raw`例如 \(m=3\) 時公差為 \(\frac83\)，不是整數。`,
        "4": String.raw`\(m\) 只能取 1 到 9，共 9 個數列。`,
        "5": String.raw`除 \(n=21\) 外，\(n=91\) 也符合且是 7 的倍數。`
      }
    },
    "114B-13": {
      verified: true,
      sourcePage: 4,
      stem: "某日任一停車場沒有空位的機率都是 0.7，且兩停車場是否有空位互相獨立。求至少有一個停車場有空位的機率。",
      solution: [
        String.raw`兩個停車場都沒有空位的機率為
        \[
        0.7\times0.7=0.49。
        \]`,
        String.raw`所以至少一個有空位的機率為
        \[
        1-0.49=0.51。
        \]`
      ]
    },
    "114B-14": {
      verified: true,
      sourcePage: 4,
      stem: String.raw`坐標平面上有 \(A=(0,2)、B=(-1,0)、C=(4,0)\)。若直線 \(y=mx\) 將 \(\triangle ABC\) 分成面積相等的兩部分，求 \(m\)。`,
      solution: [
        String.raw`\(\triangle ABC\) 面積為 \(\frac12\cdot5\cdot2=5\)，每部分面積須為 \(\frac52\)。`,
        String.raw`設直線與 \(\overline{AC}\) 交於 \(X\)。直線 \(AC\) 方程式為 \(y=2-\frac12x\)。由右側三角形 \(OCX\) 面積
        \[
        \frac12\cdot4\cdot y_X=\frac52，
        \]
        得 \(y_X=\frac54\)。`,
        String.raw`代入 \(AC\) 得 \(x_X=\frac32\)，因此
        \[
        m=\frac{y_X}{x_X}=\frac{5/4}{3/2}=\frac56。
        \]`
      ]
    },
    "114B-15": {
      verified: true,
      sourcePage: 5,
      stem: "某公司聘請 8 名新進員工，含 2 名翻譯、3 名工程師、3 名助理。分派至研發、測試兩個部門，每部門各 4 人，且各須有 1 名翻譯與至少 1 名工程師。求分配方法數。",
      solution: [
        String.raw`先選研發部門的翻譯，有 2 種；另一名翻譯自動分到測試部門。`,
        String.raw`研發部門還須從 3 名工程師、3 名助理中選 3 人，且兩部門都至少有 1 名工程師，所以研發須選 1 或 2 名工程師。`,
        String.raw`方法數為
        \[
        2\left[\binom31\binom32+\binom32\binom31\right]
        =2(9+9)=36。
        \]`
      ]
    },
    "114B-16": {
      verified: true,
      sourcePage: 5,
      stem: "教室牆角由三個兩兩垂直的平面形成。三角形擋板 ABC 的三頂點位於三條交界線上，距牆角 O 分別為 20、20、10 公分，三邊貼合相應平面。求 tan∠CAB。",
      solution: [
        String.raw`把三條互相垂直的交界線設為坐標軸，可取
        \[
        A=(20,0,0),\quad B=(0,20,0),\quad C=(0,0,10)。
        \]`,
        String.raw`因此
        \[
        AB=20\sqrt2,\qquad AC=BC=10\sqrt5。
        \]
        由餘弦定理
        \[
        \cos A=\frac{AB^2+AC^2-BC^2}{2AB\cdot AC}
        =\sqrt{\frac25}。
        \]`,
        String.raw`所以 \(\sin A=\sqrt{\frac35}\)，進而
        \[
        \tan A=\frac{\sin A}{\cos A}
        =\sqrt{\frac32}=\frac{\sqrt6}{2}。
        \]`
      ]
    },
    "114B-17": {
      verified: true,
      sourcePage: 5,
      stem: "紅燈循環為亮 3 秒、暗 1 秒、亮 2 秒；綠燈循環為亮 6 秒、暗 2 秒；藍燈循環為亮 k 秒、暗 (15−k) 秒，其中 k 為正整數。三燈同時開始循環，且面板始終至少有一燈亮。求 k 的最小值。",
      solution: [
        String.raw`紅燈週期 6 秒、綠燈週期 8 秒，兩者共同週期為 24 秒。逐段比對可得紅、綠同時熄滅的區間為
        \[
        [15+24j,\ 16+24j)\qquad(j\in\mathbb Z_{\ge0})。
        \]`,
        String.raw`把這些區間對藍燈的 15 秒週期取餘數，起點依序落在
        \[
        0,\ 9,\ 3,\ 12,\ 6\pmod{15}，
        \]
        所以藍燈必須涵蓋 \([12,13)\) 才能避免三燈同暗。`,
        String.raw`藍燈每週期從第 0 秒亮到第 \(k\) 秒，因此最小須取
        \[
        k=13。
        \]`
      ]
    },
    "114B-18": {
      verified: true,
      sourcePage: 6,
      stem: "UVI 數值與高度呈指數關係：高度每上升 300 公尺，UVI 增加上升前的 4%。地平面每平方公尺接收 400 焦耳紫外線，而一單位 UVI 相當於每平方公尺 100 焦耳。求高度 4500 公尺處的 UVI 表示式。",
      options: {
        "1": String.raw`\(4(1+0.04\times15)\)`,
        "2": String.raw`\(4(1+0.04^{15})\)`,
        "3": String.raw`\(4(1+0.04)^{15}\)`,
        "4": String.raw`\(4\times100(1+0.04)^{15}\)`,
        "5": String.raw`\(4\times100(1+0.04^{45})\)`
      },
      solution: [
        String.raw`地平面 400 焦耳相當於 UVI \(=4\)。高度 4500 公尺包含
        \[
        \frac{4500}{300}=15
        \]
        個增長區段。`,
        String.raw`每次增加 4% 即乘 \(1.04\)，所以山上的 UVI 為
        \[
        4(1+0.04)^{15}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`把逐次複利成長誤當成以原值計算的單利。`,
        "2": String.raw`指數應作用在整個成長倍率 \(1.04\)，不是只作用在 \(0.04\)。`,
        "3": String.raw`初始 UVI 為 4，連續 15 次各乘 1.04，表示式正確。`,
        "4": String.raw`初始 400 焦耳已換成 UVI 4，不應再乘 100。`,
        "5": String.raw`高度區段數為 15，不是 45，且成長倍率寫法也不正確。`
      }
    },
    "114B-19": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`某地日照時數為 12 小時，日出後 \(x\) 小時的 UVI 可用
      \[
      f(x)=a\sin(bx),\qquad0\le x\le12,\quad a,b>0
      \]
      表示。日照期間 UVI 為正，且 \(f(0)=f(12)=0\)；日出後 2 小時 UVI 為 4。求 \(a、b\)。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`因 \(f(x)>0\) 於 \(0<x<12\)，且只在兩端為 0，正弦函數恰走完一個正半波。因此
        \[
        12b=\pi\Rightarrow b=\frac{\pi}{12}。
        \]`,
        String.raw`代入 \(f(2)=4\)：
        \[
        a\sin\left(\frac{\pi}{12}\cdot2\right)
        =a\sin\frac{\pi}{6}
        =\frac a2=4，
        \]
        所以 \(a=8\)。`,
        String.raw`故
        \[
        \boxed{a=8,\quad b=\frac{\pi}{12}}。
        \]`
      ]
    },
    "114B-20": {
      verified: true,
      sourcePage: 6,
      stem: String.raw`承第 19 題。某人要在該日 UVI 介於 \(4\sqrt2\) 與 \(4\sqrt3\) 之間（含端點）時做日光浴。設日出後時間為 \(t\) 小時，求 \(t\) 的最大可能範圍。（非選擇題，須寫出計算過程或理由）`,
      solution: [
        String.raw`由第 19 題
        \[
        f(t)=8\sin\frac{\pi t}{12}。
        \]
        題意等價於
        \[
        4\sqrt2\le8\sin\frac{\pi t}{12}\le4\sqrt3，
        \]
        即
        \[
        \frac{\sqrt2}{2}\le\sin\frac{\pi t}{12}\le\frac{\sqrt3}{2}。
        \]`,
        String.raw`在 \(0\le\frac{\pi t}{12}\le\pi\) 內，解集為
        \[
        \frac\pi4\le\frac{\pi t}{12}\le\frac\pi3
        \quad\text{或}\quad
        \frac{2\pi}{3}\le\frac{\pi t}{12}\le\frac{3\pi}{4}。
        \]`,
        String.raw`所以最大可能範圍為
        \[
        \boxed{3\le t\le4\quad\text{或}\quad8\le t\le9}。
        \]`
      ]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "113A-1": {
      verified: true, sourcePage: 1,
      stem: "服用某藥物後，體內藥物殘留量隨時間呈指數型衰退。已知服藥 2 小時後仍殘留一半劑量，試選出正確的敘述。",
      options: {
        "1": String.raw`3 小時後殘留 \(\frac13\) 劑量`,
        "2": String.raw`4 小時後殘留 \(\frac14\) 劑量`,
        "3": String.raw`6 小時後殘留 \(\frac16\) 劑量`,
        "4": String.raw`8 小時後殘留 \(\frac18\) 劑量`,
        "5": String.raw`10 小時後殘留 \(\frac1{10}\) 劑量`
      },
      solution: [
        String.raw`每 2 小時殘留量乘 \(\frac12\)。經過 \(t\) 小時的殘留比例為
        \[
        \left(\frac12\right)^{t/2}。
        \]`,
        String.raw`4 小時包含兩個半衰期，因此殘留
        \[
        \left(\frac12\right)^2=\frac14。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`指數衰退不是以時間作分母；3 小時為 \((\frac12)^{3/2}\)。`,
        "2": String.raw`4 小時為兩個半衰期，殘留 \(\frac14\)。`,
        "3": String.raw`6 小時後為 \((\frac12)^3=\frac18\)，不是 \(\frac16\)。`,
        "4": String.raw`8 小時後為 \((\frac12)^4=\frac1{16}\)。`,
        "5": String.raw`10 小時後為 \((\frac12)^5=\frac1{32}\)。`
      }
    },
    "113A-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`如官方附圖，\(OABC-DEFG\) 為正方體。試選出與
      \[
      \overrightarrow{AD}\times\overrightarrow{AG}
      \]
      平行的向量。`,
      options: {
        "1": String.raw`\(\overrightarrow{AE}\)`,
        "2": String.raw`\(\overrightarrow{BE}\)`,
        "3": String.raw`\(\overrightarrow{CE}\)`,
        "4": String.raw`\(\overrightarrow{DE}\)`,
        "5": String.raw`\(\overrightarrow{OE}\)`
      },
      solution: [
        String.raw`以 \(A\) 為原點，令 \(\overrightarrow{AB},\overrightarrow{AO},\overrightarrow{AE}\) 分別為三坐標軸單位向量，則
        \[
        \overrightarrow{AD}=(0,1,1),\qquad
        \overrightarrow{AG}=(1,1,1)。
        \]`,
        String.raw`所以
        \[
        \overrightarrow{AD}\times\overrightarrow{AG}
        =(0,1,-1)。
        \]
        而 \(\overrightarrow{OE}=(0,-1,1)\)，兩者互為負倍數，故平行。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\overrightarrow{AE}\) 只沿鉛直方向，與外積方向不同。`,
        "2": String.raw`\(\overrightarrow{BE}\) 的三個分量不符合 \((0,1,-1)\) 的比例。`,
        "3": String.raw`\(\overrightarrow{CE}\) 並非同時垂直於 \(AD、AG\)。`,
        "4": String.raw`\(\overrightarrow{DE}\) 只沿正方體的一條水平稜。`,
        "5": String.raw`\(\overrightarrow{OE}=-(0,1,-1)\)，與外積平行。`
      }
    },
    "113A-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`設
      \[
      a\in\{-6,-4,-2,2,4,6\}。
      \]
      已知 \(a\) 是實係數三次多項式 \(f(x)\) 的最高次項係數，且 \(y=f(x)\) 與 \(x\) 軸三個交點的 \(x\) 坐標形成首項 \(-7\)、公差 \(a\) 的等差數列。求有多少個 \(a\) 使 \(f(0)>0\)。`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "5 個" },
      solution: [
        String.raw`三根為 \(-7,-7+a,-7+2a\)，所以
        \[
        f(x)=a(x+7)(x+7-a)(x+7-2a)。
        \]`,
        String.raw`故
        \[
        f(0)=7a(7-a)(7-2a)。
        \]
        逐一代入六個候選值，只有 \(a=2\) 時為正；其餘皆為負。`,
        String.raw`因此符合者只有 1 個。`
      ],
      optionAnalysis: {
        "1": String.raw`六個候選值中只有 \(a=2\) 使乘積為正。`,
        "2": String.raw`需同時考慮最高次係數 \(a\) 與三個根因子的符號。`,
        "3": String.raw`不能只按 \(a\) 的正負各算一半。`,
        "4": String.raw`當 \(a=4、6\) 時，最後一個因子已變號，乘積為負。`,
        "5": String.raw`負的 \(a\) 三種情況皆使 \(f(0)<0\)。`
      }
    },
    "113A-4": {
      verified: true, sourcePage: 2,
      stem: String.raw`求在 \(0\le x<2\pi\) 中，方程式
      \[
      \sin\left(x+\frac{\pi}{6}\right)=\sin x+\sin\frac{\pi}{6}
      \]
      的實數解個數。`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "5 個（含）以上" },
      solution: [
        String.raw`展開並整理：
        \[
        \frac{\sqrt3}{2}\sin x+\frac12\cos x
        =\sin x+\frac12，
        \]
        即
        \[
        \cos x-1=(2-\sqrt3)\sin x。
        \]`,
        String.raw`用半角公式因式分解：
        \[
        2\sin\frac x2\left[-\sin\frac x2-(2-\sqrt3)\cos\frac x2\right]=0。
        \]
        第一因子在範圍內給 \(x=0\)；第二因子在 \(\frac x2\in[0,\pi)\) 中另有一解。`,
        String.raw`所以共有 2 個解。`
      ],
      optionAnalysis: {
        "1": String.raw`除了 \(x=0\)，另一個半角方程式仍有一解。`,
        "2": String.raw`兩個因子在指定範圍各提供一個解。`,
        "3": String.raw`半角的取值範圍是 \([0,\pi)\)，不能重複加入週期解。`,
        "4": String.raw`未限制 \(0\le x<2\pi\) 會多算週期解。`,
        "5": String.raw`此方程式在一個完整週期內不會有五個以上解。`
      }
    },
    "113A-5": {
      verified: true, sourcePage: 2,
      stem: "將 1 到 50 平分成甲、乙兩組，每組 25 個數，且甲組中位數比乙組中位數小 1。求分法數。",
      options: {
        "1": String.raw`\(\binom{50}{25}\)`,
        "2": String.raw`\(\binom{48}{24}\)`,
        "3": String.raw`\(\binom{24}{12}\)`,
        "4": String.raw`\(\binom{24}{12}^2\)`,
        "5": String.raw`\(\binom{48}{24}\binom{24}{12}\)`
      },
      solution: [
        String.raw`每組 25 個數，中位數是第 13 小。若兩中位數為 \(k、k+1\)，兩組各須從 \(1,\ldots,k-1\) 取 12 個，因此 \(k-1=24\)，故兩中位數必為 25、26。`,
        String.raw`固定 25 在甲、26 在乙。從 \(1,\ldots,24\) 選 12 個給甲，有 \(\binom{24}{12}\) 種；再從 \(27,\ldots,50\) 選 12 個給甲，也有 \(\binom{24}{12}\) 種。`,
        String.raw`總數為
        \[
        \binom{24}{12}^2。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`這是任意平分的數量，未限制兩組中位數。`,
        "2": String.raw`固定 25、26 後仍須分別控制其上下兩側各取 12 個。`,
        "3": String.raw`只完成中位數一側的分配，漏掉另一側。`,
        "4": String.raw`低於 25 與高於 26 的 24 個數各選 12 個，故為平方。`,
        "5": String.raw`把兩個並非獨立對應的選擇重複計數。`
      }
    },
    "113A-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`同一平面上兩砲台 \(A、B\) 相距 7 公里，\(A\) 在 \(B\) 正東方。兩砲台分別向西偏北 \(\theta\)、東偏北 \(\theta\) 發射，皆命中 9 公里外同一目標 \(P\)。接著 \(A\) 改向西偏北 \(\frac\theta2\) 發射至 9 公里外的 \(Q\)。求 \(BQ\)。`,
      options: { "1": "4 公里", "2": "4.5 公里", "3": "5 公里", "4": "5.5 公里", "5": "6 公里" },
      solution: [
        String.raw`在等腰三角形 \(ABP\) 中，\(AP=BP=9、AB=7\)，且底角為 \(\theta\)。由餘弦定理
        \[
        9^2=7^2+9^2-2(7)(9)\cos\theta，
        \]
        得 \(\cos\theta=\frac7{18}\)。`,
        String.raw`因 \(\theta\) 為銳角，
        \[
        \cos\frac\theta2=\sqrt{\frac{1+\cos\theta}{2}}
        =\sqrt{\frac{25}{36}}=\frac56。
        \]`,
        String.raw`在 \(\triangle ABQ\) 中，\(AB=7、AQ=9\)，夾角為 \(\frac\theta2\)，故
        \[
        BQ^2=7^2+9^2-2(7)(9)\frac56=25，
        \]
        所以 \(BQ=5\)。`
      ],
      optionAnalysis: {
        "1": String.raw`未先由原目標 \(P\) 求出 \(\theta\) 的半角餘弦。`,
        "2": String.raw`可能把 \(7\) 公里誤當成半底長。`,
        "3": String.raw`餘弦定理代入 \(\cos(\theta/2)=5/6\) 得 \(BQ=5\)。`,
        "4": String.raw`不符合三角形 \(ABQ\) 的精確餘弦定理結果。`,
        "5": String.raw`把半角方向誤用成原角 \(\theta\)。`
      }
    },
    "113A-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`令 \(\Gamma\) 為所有滿足 \(y=\log x\) 的點 \((x,y)\) 所成圖形。試選出與 \(\Gamma\) 完全相同的關係式。`,
      options: {
        "1": String.raw`\(y+\frac12=\log(5x)\)`,
        "2": String.raw`\(2y=\log(x^2)\)`,
        "3": String.raw`\(3y=\log(x^3)\)`,
        "4": String.raw`\(x=10^y\)`,
        "5": String.raw`\(x^3=10^{y^3}\)`
      },
      solution: [
        String.raw`選項（3）中 \(\log(x^3)\) 要求 \(x>0\)，且可化為 \(3\log x\)，所以等價於 \(y=\log x\)。`,
        String.raw`選項（4）是常用對數定義的等價指數式，也與原圖完全相同。`,
        String.raw`選項（2）雖形式上可約成 \(y=\log|x|\)，但 \(x^2>0\) 允許 \(x<0\)，比原圖多出左半平面部分。其餘式子也不等價。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\log5\ne\frac12\)，移項後不等於 \(y=\log x\)。`,
        "2": String.raw`因 \(x^2\) 允許負 \(x\)，圖形還包含 \(y=\log|x|\) 的左支。`,
        "3": String.raw`定義域迫使 \(x>0\)，且兩邊除以 3 後正是原式。`,
        "4": String.raw`\(y=\log x\) 與 \(x=10^y\) 完全等價。`,
        "5": String.raw`取對數得到 \(3\log x=y^3\)，不是 \(y=\log x\)。`
      }
    },
    "113A-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`對任一正整數 \(n\ge2\)，令 \(T_n\) 表示邊長為 \(n,n+1,n+2\) 的三角形。試選出正確的選項。`,
      options: {
        "1": String.raw`所有 \(T_n\) 都是銳角三角形`,
        "2": String.raw`\(T_2,T_3,\ldots,T_{10}\) 的周長形成等差數列`,
        "3": String.raw`\(T_n\) 的面積隨 \(n\) 增大而增大`,
        "4": String.raw`\(T_5\) 的三高依序形成等差數列`,
        "5": String.raw`\(T_3\) 的最大角大於 \(T_2\) 的最大角`
      },
      solution: [
        String.raw`周長為 \(3n+3\)，隨 \(n\) 每增加 1 就增加 3，因此選項（2）正確。`,
        String.raw`用海龍公式，半周長 \(s=\frac{3n+3}{2}\)，面積平方為
        \[
        s(s-n)(s-n-1)(s-n-2)，
        \]
        各正因子隨 \(n\) 增大，故面積嚴格增大，選項（3）正確。`,
        String.raw`\(T_2\) 邊長 \(2,3,4\)，因 \(4^2>2^2+3^2\) 是鈍角三角形；\(T_3\) 邊長 \(3,4,5\) 為直角三角形，故其最大角反而較小。三高與三邊成反比，\(1/5,1/6,1/7\) 也不成等差。`
      ],
      optionAnalysis: {
        "1": String.raw`\(T_2\) 的最大邊平方 16 大於另外兩邊平方和 13，是鈍角。`,
        "2": String.raw`周長通式為 \(3n+3\)，公差固定為 3。`,
        "3": String.raw`海龍公式的四個正因子皆隨 \(n\) 增大。`,
        "4": String.raw`三高比例為 \(\frac15:\frac16:\frac17\)，不成等差。`,
        "5": String.raw`\(T_3\) 最大角為 \(90^\circ\)，小於 \(T_2\) 的鈍角。`
      }
    },
    "113A-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`A、B 兩物種平均身長分別為 \(5.2、6\)，身長標準差為 \(0.3、0.1\)。體重 \(y\) 對身長 \(x\) 的迴歸直線分別為
      \[
      L_A:y=2x-0.6,\qquad L_B:y=1.5x+0.4，
      \]
      相關係數為 \(0.6、0.3\)。現有個體 \(P=(5.6,8.6)\)，試選出正確的選項。`,
      options: {
        "1": String.raw`\(\bar y_A<\bar y_B\)`,
        "2": "A 物種體重標準差小於 B 物種",
        "3": String.raw`就 A 而言，P 的體重與平均體重差的絕對值大於一個標準差`,
        "4": String.raw`P 到 \(L_A\) 的距離小於到 \(L_B\) 的距離`,
        "5": String.raw`P 到 \((\bar x_A,\bar y_A)\) 的距離小於到 \((\bar x_B,\bar y_B)\) 的距離`
      },
      solution: [
        String.raw`迴歸線通過平均點，故
        \[
        \bar y_A=2(5.2)-0.6=9.8,\qquad
        \bar y_B=1.5(6)+0.4=9.4。
        \]`,
        String.raw`由迴歸斜率 \(r\frac{\sigma_y}{\sigma_x}\)，得
        \[
        \sigma_{y,A}=\frac{2(0.3)}{0.6}=1,\qquad
        \sigma_{y,B}=\frac{1.5(0.1)}{0.3}=0.5。
        \]`,
        String.raw`P 對 A 的體重差為 \(|8.6-9.8|=1.2>1\)，所以選項（3）正確。計算點線距離與兩平均點距離，也可知（4）、（5）皆反向。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\bar y_A=9.8>\bar y_B=9.4\)。`,
        "2": String.raw`A、B 體重標準差分別為 1、0.5，A 較大。`,
        "3": String.raw`P 與 A 平均體重相差 1.2，超過 A 的一個標準差 1。`,
        "4": String.raw`P 到 \(L_A\) 距離約 0.894，到 \(L_B\) 約 0.111，前者較大。`,
        "5": String.raw`P 到 A 平均點距離約 1.265，到 B 平均點約 0.894。`
      }
    },
    "113A-10": {
      verified: true, sourcePage: 3,
      stem: "坐標平面上有一正方形與其左側的正六邊形，兩者都有一邊在 x 軸上、中心在 x 軸上方，且恰有一交點 P。正方形邊長為 6，P 到 x 軸距離為 2√3。試選出正確的選項。",
      options: {
        "1": "正方形中心 A 到 x 軸距離大於正六邊形中心 B",
        "2": "正六邊形邊長為 6",
        "3": String.raw`\(\overrightarrow{BA}=(7,3-2\sqrt3)\)`,
        "4": String.raw`\(AP>10\)`,
        "5": String.raw`直線 \(AP\) 斜率大於 \(-\frac13\)`
      },
      solution: [
        String.raw`正六邊形右端點 \(P\) 與中心同高，故其內切圓半徑為 \(2\sqrt3\)。若邊長為 \(s\)，則 \(\frac{\sqrt3}{2}s=2\sqrt3\)，得 \(s=4\)。`,
        String.raw`可取 \(B=(0,2\sqrt3)、P=(4,2\sqrt3)\)。正方形左邊通過 \(P\)，中心為
        \[
        A=(7,3)。
        \]
        因此
        \[
        \overrightarrow{BA}=(7,3-2\sqrt3)，
        \]
        選項（3）正確。`,
        String.raw`直線 \(AP\) 斜率為
        \[
        \frac{2\sqrt3-3}{4-7}
        =-\frac{2\sqrt3-3}{3}>-\frac13，
        \]
        選項（5）正確；且 \(AP\) 遠小於 10。`
      ],
      optionAnalysis: {
        "1": String.raw`A 高 3，B 高 \(2\sqrt3\approx3.464\)，A 較低。`,
        "2": String.raw`由六邊形內切圓半徑求得邊長為 4。`,
        "3": String.raw`兩中心坐標相減即得 \((7,3-2\sqrt3)\)。`,
        "4": String.raw`\(AP=\sqrt{9+(2\sqrt3-3)^2}\)，遠小於 10。`,
        "5": String.raw`精確斜率約為 \(-0.155\)，確實大於 \(-\frac13\)。`
      }
    },
    "113A-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`方程組
      \[
      \begin{cases}ax+6y=6\\x+by=1\end{cases}
      \]
      中，\(a\) 由公平骰子點數決定；硬幣正面時 \(b=1\)，反面時 \(b=2\)。試選出正確的選項。`,
      options: {
        "1": String.raw`\(P(a=b)=\frac13\)`,
        "2": String.raw`方程組無解機率為 \(\frac1{12}\)`,
        "3": String.raw`方程組有唯一解機率為 \(\frac56\)`,
        "4": String.raw`硬幣反面且方程組有解機率為 \(\frac12\)`,
        "5": String.raw`在硬幣反面且有解下，\(x>0\) 的條件機率為 \(\frac25\)`
      },
      solution: [
        String.raw`係數行列式為 \(ab-6\)。共有 12 個等可能 \((a,b)\)。行列式為 0 的情況是 \((6,1)\)、\((3,2)\)：前者有無限多解，後者無解。`,
        String.raw`因此無解機率為 \(\frac1{12}\)，唯一解共有其餘 10 種，機率 \(\frac{10}{12}=\frac56\)。`,
        String.raw`\(a=b\) 只有 \((1,1)、(2,2)\)，機率 \(\frac16\)。硬幣反面且有解有 5 種，聯立可得 \(x=\frac3{a-3}\)，其中 \(a=4,5,6\) 為正，條件機率為 \(\frac35\)。`
      ],
      optionAnalysis: {
        "1": String.raw`相等只有 2 個結果，機率為 \(2/12=1/6\)。`,
        "2": String.raw`只有 \((a,b)=(3,2)\) 無解，機率 \(\frac1{12}\)。`,
        "3": String.raw`排除兩個行列式為 0 的結果，10 個有唯一解。`,
        "4": String.raw`反面有 6 種，其中 \(a=3\) 無解，故機率是 \(5/12\)。`,
        "5": String.raw`合法的 5 種中有 3 種使 \(x>0\)，條件機率為 \(\frac35\)。`
      }
    },
    "113A-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`給定 \(A=(1,0)、B=(0,1)、C=(-1,0)\)，令 \(\Gamma\) 為 \(\triangle ABC\) 經
      \[
      T=\begin{bmatrix}3&0\\a&1\end{bmatrix}
      \]
      變換後的圖形，其中 \(a\) 為實數。試選出正確的選項。`,
      options: {
        "1": String.raw`若 \(a=0\)，則 \(\Gamma\) 為等腰直角三角形`,
        "2": String.raw`\(\triangle ABC\) 邊上至少有兩點經 \(T\) 後坐標不變`,
        "3": String.raw`\(\Gamma\) 必有部分落在第四象限`,
        "4": String.raw`平面上找得到圖形 \(\Omega\) 經 \(T\) 後為 \(\triangle ABC\)`,
        "5": String.raw`\(\Gamma\) 面積為定值`
      },
      solution: [
        String.raw`變換為 \((x,y)\mapsto(3x,ax+y)\)，且 \(\det T=3\ne0\)，所以 \(T\) 可逆，選項（4）正確。面積固定放大 \(|\det T|=3\) 倍，選項（5）正確。`,
        String.raw`固定點滿足 \(3x=x\)，故 \(x=0\)；整條 \(y\) 軸都固定。原三角形邊界上至少有 \(B=(0,1)\) 與 \(\overline{AC}\) 中點 \((0,0)\)，選項（2）正確。`,
        String.raw`若 \(a=0\)，變換後三邊為 \(\sqrt{10},\sqrt{10},6\)，不是直角三角形；圖形落在哪些象限也隨 \(a\) 改變。`
      ],
      optionAnalysis: {
        "1": String.raw`邊長平方為 \(10,10,36\)，不符合畢氏定理。`,
        "2": String.raw`\(B=(0,1)\) 與 \((0,0)\) 都在邊界且位於固定的 \(y\) 軸。`,
        "3": String.raw`不同 \(a\) 會改變斜切方向，不能保證落入第四象限。`,
        "4": String.raw`\(\det T=3\ne0\)，取 \(\Omega=T^{-1}(\triangle ABC)\) 即可。`,
        "5": String.raw`線性變換將面積固定乘以 \(|\det T|=3\)。`
      }
    },
    "113A-13": {
      verified: true, sourcePage: 4,
      stem: "甲、乙、丙型手機每支利潤分別為 100、400、240 元，銷量為 A、B、C。三型平均每支利潤 260 元；甲乙兩型平均每支利潤 280 元。求 A：B：C。",
      solution: [
        String.raw`甲乙平均條件：
        \[
        100A+400B=280(A+B)
        \Rightarrow 120B=180A，
        \]
        故 \(A:B=2:3\)。`,
        String.raw`三型平均條件：
        \[
        100A+400B+240C=260(A+B+C)
        \Rightarrow -8A+7B-C=0。
        \]`,
        String.raw`令 \(A=2t、B=3t\)，得 \(C=5t\)，所以
        \[
        A:B:C=2:3:5。
        \]`
      ]
    },
    "113A-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`實係數三次多項式 \(f,g,h\) 除以 \(x^2-2x+3\) 的餘式分別為 \(x+1、x-3、-2\)。若
      \[
      xf(x)+ag(x)+bh(x)
      \]
      可被 \(x^2-2x+3\) 整除，求 \(a,b\)。`,
      solution: [
        String.raw`模 \(x^2-2x+3\) 計算，有 \(x^2\equiv2x-3\)，所以
        \[
        x(x+1)\equiv x^2+x\equiv3x-3。
        \]`,
        String.raw`總餘式為
        \[
        (3x-3)+a(x-3)-2b
        =(3+a)x+(-3-3a-2b)。
        \]
        要恆為 0，故 \(3+a=0\)，得 \(a=-3\)。`,
        String.raw`再代常數項：
        \[
        -3-3(-3)-2b=0\Rightarrow b=3。
        \]`
      ]
    },
    "113A-15": {
      verified: true, sourcePage: 5,
      stem: "摸彩箱有 10 顆幸運獎球：5000 元與 8000 元各 5 顆。公告中獎率為 0.4%，抽後不放回。前 100 人恰有 1 人中 5000 元，無人中 8000 元。求第 101 人禮券金額期望值。",
      solution: [
        String.raw`總中獎率 \(\frac{10}{N}=0.004\)，故報名總人數 \(N=2500\)。前 100 人抽完後剩 2400 顆球。`,
        String.raw`5000 元獎剩 4 顆、8000 元獎仍有 5 顆，因此第 101 人期望金額為
        \[
        \frac{4(5000)+5(8000)}{2400}
        =\frac{60000}{2400}=25\text{ 元}。
        \]`
      ]
    },
    "113A-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`向量 \(\vec v\) 在 \((2,-3)\) 方向的正射影長比原長少 1，在 \((3,2)\) 方向的正射影長比原長少 2。若 \(\vec v\) 與兩方向夾角皆為銳角，求 \(\vec v\) 在 \((4,7)\) 方向的正射影長。`,
      solution: [
        String.raw`兩方向互相垂直且長皆為 \(\sqrt{13}\)。令 \(|\vec v|=r\)，則在這組正交單位基底的分量為 \(r-1、r-2\)。`,
        String.raw`由畢氏關係
        \[
        (r-1)^2+(r-2)^2=r^2
        \Rightarrow r^2-6r+5=0。
        \]
        因兩夾角為銳角，\(r-2>0\)，故 \(r=5\)。`,
        String.raw`因此
        \[
        \vec v=4\frac{(2,-3)}{\sqrt{13}}+3\frac{(3,2)}{\sqrt{13}}
        =\frac{(17,-6)}{\sqrt{13}}。
        \]
        在 \((4,7)\) 方向的正射影長為
        \[
        \frac{\vec v\cdot(4,7)}{\sqrt{65}}
        =\frac{26}{\sqrt{13}\sqrt{65}}
        =\frac{2\sqrt5}{5}。
        \]`
      ]
    },
    "113A-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`在單位正方形 \(OABC\) 內，令 \(R\) 為所有點 \(P=(x,y)\) 的集合，使以 \(P\) 為圓心、半徑 \(|x-y|\) 的圓完全落在正方形內。求區域 \(R\) 面積。`,
      solution: [
        String.raw`圓完全位於正方形內等價於
        \[
        |x-y|\le\min(x,1-x,y,1-y)。
        \]`,
        String.raw`先看 \(x\ge y\) 的一半。此時條件化為
        \[
        y\le x\le2y,\qquad x\le\frac{1+y}{2}。
        \]
        在 \(0\le y\le\frac13\) 寬為 \(y\)；在 \(\frac13\le y\le1\) 寬為 \(\frac{1-y}{2}\)。`,
        String.raw`這一半面積為
        \[
        \int_0^{1/3}y\,dy+\int_{1/3}^1\frac{1-y}{2}\,dy
        =\frac16。
        \]
        關於 \(x=y\) 對稱，故總面積為 \(\frac13\)。`
      ]
    },
    "113A-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`坐標空間中 \(O\) 為原點，\(E\) 為平面 \(x-z=4\)。若 \(O\) 在 \(E\) 上的投影為 \(Q\)，且 \(\overrightarrow{OQ}\) 與 \((1,0,0)\) 夾角為 \(\alpha\)，求 \(\cos\alpha\)。`,
      options: {
        "1": String.raw`\(-\frac{\sqrt2}{2}\)`,
        "2": String.raw`\(-\frac12\)`,
        "3": String.raw`\(\frac12\)`,
        "4": String.raw`\(\frac{\sqrt2}{2}\)`,
        "5": String.raw`\(\frac{\sqrt3}{2}\)`
      },
      solution: [
        String.raw`平面法向量為 \((1,0,-1)\)。從原點到平面的垂足沿此方向，且
        \[
        Q=(2,0,-2)。
        \]`,
        String.raw`因此
        \[
        \cos\alpha
        =\frac{(2,0,-2)\cdot(1,0,0)}{|(2,0,-2)|}
        =\frac2{2\sqrt2}
        =\frac{\sqrt2}{2}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`\(\overrightarrow{OQ}\) 的 \(x\) 分量為正，夾角為銳角，餘弦不為負。`,
        "2": String.raw`忽略法向量在 \(z\) 方向也有分量。`,
        "3": String.raw`向量長為 \(2\sqrt2\)，不是 4。`,
        "4": String.raw`依內積定義計算得 \(\frac{\sqrt2}{2}\)。`,
        "5": String.raw`法向量的兩個非零分量等長，與 \(x\) 軸夾角為 \(45^\circ\)。`
      }
    },
    "113A-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`空間點 \(P=(a,b,c)\) 滿足 \(\overrightarrow{OP}\) 與 \((1,0,0)\) 的夾角 \(\theta\le\frac{\pi}{6}\)。說明
      \[
      a^2\ge3(b^2+c^2)。
      \]
      （非選擇題，須寫出推導）`,
      solution: [
        String.raw`由夾角定義，
        \[
        \cos\theta
        =\frac{\overrightarrow{OP}\cdot(1,0,0)}
        {|\overrightarrow{OP}|\cdot1}
        =\frac{a}{\sqrt{a^2+b^2+c^2}}。
        \]`,
        String.raw`在 \(0\le\theta\le\frac{\pi}{6}\) 上餘弦遞減，所以
        \[
        \frac{a}{\sqrt{a^2+b^2+c^2}}
        \ge\cos\frac{\pi}{6}=\frac{\sqrt3}{2}。
        \]`,
        String.raw`兩邊平方並整理：
        \[
        4a^2\ge3(a^2+b^2+c^2)
        \Rightarrow a^2\ge3(b^2+c^2)。
        \]`
      ]
    },
    "113A-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`承第 19 題。若 \(P=(a,0,c)\) 在平面 \(x-z=4\) 上，求 \(c\) 的最大可能範圍，以及線段 \(OP\) 的最小可能長度。（非選擇題，須寫出推導）`,
      solution: [
        String.raw`由平面條件 \(a-c=4\)，故 \(a=c+4\)。代入第 19 題不等式：
        \[
        (c+4)^2\ge3c^2
        \Rightarrow c^2-4c-8\le0。
        \]`,
        String.raw`解得
        \[
        2-2\sqrt3\le c\le2+2\sqrt3。
        \]`,
        String.raw`又
        \[
        OP^2=a^2+c^2=(c+4)^2+c^2
        =2(c+2)^2+8。
        \]
        無限制的最小點 \(c=-2\) 不在上述區間，故區間內最小值發生在左端 \(c=2-2\sqrt3\)。`,
        String.raw`代入得
        \[
        OP_{\min}=\sqrt{64-32\sqrt3}
        =4(\sqrt3-1)。
        \]`
      ]
    },
    "113B-1": {
      verified: true, sourcePage: 1,
      stem: "210 位玩家中，持有 1 顆寶石的有 1 位、持有 2 顆的有 2 位，依此類推，持有 20 顆的有 20 位。求每人寶石數的第 90 百分位數。",
      options: { "1": "16", "2": "17", "3": "18", "4": "19", "5": "20" },
      solution: [
        String.raw`第 90 百分位位置為 \(0.9\times210=189\)。持有不超過 18 顆者共有
        \[
        1+2+\cdots+18=\frac{18\cdot19}{2}=171
        \]
        人；加入持有 19 顆的 19 人後累計為 190 人。`,
        String.raw`所以排序後第 189 個數值是 19，第 90 百分位數為 19。`
      ],
      optionAnalysis: {
        "1": String.raw`累計至 16 顆只有 136 人，尚未到第 189 位。`,
        "2": String.raw`累計至 17 顆為 153 人。`,
        "3": String.raw`累計至 18 顆為 171 人。`,
        "4": String.raw`第 172～190 位皆持有 19 顆，所以第 189 位為 19。`,
        "5": String.raw`持有 20 顆者從第 191 位才開始。`
      }
    },
    "113B-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知 \(1<a<10、b=\log a、c=\log b\)，試選出正確的大小關係。`,
      options: {
        "1": String.raw`\(c<0<b<1\)`, "2": String.raw`\(0<c<1<b\)`,
        "3": String.raw`\(0<c<b<1\)`, "4": String.raw`\(1<c<b\)`, "5": String.raw`\(c<b<0\)`
      },
      solution: [
        String.raw`由 \(1<a<10\)，得 \(0<\log a<1\)，所以 \(0<b<1\)。`,
        String.raw`再因 \(0<b<1\)，故 \(c=\log b<0\)。因此 \(c<0<b<1\)。`
      ],
      optionAnalysis: {
        "1": String.raw`兩次使用常用對數的單調性，關係正確。`,
        "2": String.raw`\(b<1\)，不是 \(b>1\)，且 \(c<0\)。`,
        "3": String.raw`對 \(0<b<1\) 取對數會得到負數。`,
        "4": String.raw`\(b\) 本身介於 0 與 1。`,
        "5": String.raw`\(b=\log a>0\)，並非負數。`
      }
    },
    "113B-3": {
      verified: true, sourcePage: 1,
      stem: "射擊畫面中目標 P=(12,10)。牆 AB 位於 y=5、10≤x≤15；牆 CD 位於 y=6、0≤x≤9。玩家由 Q 直線射向 P，不可穿牆。試選出可能的 Q。",
      options: { "1": "(6,3)", "2": "(7,3)", "3": "(8,5)", "4": "(9,1)", "5": "(9,2)" },
      solution: [
        String.raw`逐項求線段 \(QP\) 與 \(y=5、y=6\) 的交點橫坐標。`,
        String.raw`對 \(Q=(7,3)\)，交於 \(y=5\) 時 \(x=\frac{59}{7}<10\)，不碰 AB；交於 \(y=6\) 時 \(x=\frac{64}{7}>9\)，也不碰 CD。`,
        String.raw`其餘選項不是在 \(y=6\) 時落於 \(0\le x\le9\)，就是在 \(y=5\) 時落於 \(10\le x\le15\)，會被牆阻擋。`
      ],
      optionAnalysis: {
        "1": String.raw`射線在 \(y=6\) 時 \(x=60/7<9\)，撞上 CD。`,
        "2": String.raw`在兩道牆的高度都從牆端外側通過，為可行位置。`,
        "3": String.raw`由 Q 出發即在牆 AB 的高度，且之後於 \(y=6\) 撞上 CD。`,
        "4": String.raw`在 \(y=5\) 時 \(x=31/3\)，落在 AB 上。`,
        "5": String.raw`在 \(y=5\) 時 \(x=81/8\)，落在 AB 上。`
      }
    },
    "113B-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知 \(\vec v=(-2,3)\)，點 \(A、B\) 的兩坐標都在 \([0,1]\) 內。求
      \[
      |\vec v+\overrightarrow{AB}|
      \]
      的最大值。`,
      options: {
        "1": String.raw`\(\sqrt{13}\)`, "2": String.raw`\(\sqrt{17}\)`,
        "3": String.raw`\(3\sqrt2\)`, "4": "5", "5": String.raw`\(\sqrt2+\sqrt{13}\)`
      },
      solution: [
        String.raw`\(\overrightarrow{AB}\) 的兩分量各介於 \([-1,1]\)，所以 \(\vec v+\overrightarrow{AB}\) 的分量範圍為
        \[
        -3\le x\le-1,\qquad2\le y\le4。
        \]`,
        String.raw`距原點最遠的角點為 \((-3,4)\)，可由 \(A=(1,0)、B=(0,1)\) 達成。最大長度
        \[
        \sqrt{(-3)^2+4^2}=5。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`這只是 \(|\vec v|\)，未加入 \(\overrightarrow{AB}\)。`,
        "2": String.raw`沒有同時把兩個分量推到可行的最遠端。`,
        "3": String.raw`分量極值不是 \((\pm3,\pm3)\)。`,
        "4": String.raw`可達向量 \((-3,4)\)，長度為 5。`,
        "5": String.raw`三角不等式上界未必能達成；兩向量方向受坐標限制。`
      }
    },
    "113B-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`二次函數 \(f(x)=x^2+bx+c\) 滿足 \(f(x-2)=f(-x-2)\) 對所有實數 \(x\) 成立。當 \(-3\le x\le1\) 時，最大值是最小值的 4 倍。求最小值。`,
      options: { "1": "0", "2": String.raw`\(\frac53\)`, "3": "3", "4": "4", "5": "6" },
      solution: [
        String.raw`兩輸入 \(x-2、-x-2\) 關於 \(-2\) 對稱，所以拋物線對稱軸為 \(x=-2\)。可寫成
        \[
        f(x)=(x+2)^2+k。
        \]`,
        String.raw`區間內最小值為 \(k\)，最大值在 \(x=1\)，為 \(9+k\)。由 \(9+k=4k\)，得 \(k=3\)。`
      ],
      optionAnalysis: {
        "1": String.raw`若最小值 0，最大值也須為 0，與拋物線不符。`,
        "2": String.raw`未正確取區間中離對稱軸最遠的端點。`,
        "3": String.raw`由 \(9+k=4k\) 得最小值 \(k=3\)。`,
        "4": String.raw`代入後最大值 13，不是 16。`,
        "5": String.raw`代入後最大值 15，不是最小值的 4 倍。`
      }
    },
    "113B-6": {
      verified: true, sourcePage: 2,
      stem: "五樓外牆點 P 分別連至四樓地板兩端 A、B，以及二樓地板兩端 E、F，形成相似的等腰三角形。各樓層等高、地板等長。五樓地板在三角形 PAB 內截得線段為地板長的 1/3，求五樓地板在三角形 PEF 內截得的比例。",
      options: {
        "1": String.raw`\(\frac17\)`, "2": String.raw`\(\frac16\)`, "3": String.raw`\(\frac15\)`,
        "4": String.raw`\(\frac29\)`, "5": String.raw`\(\frac14\)`
      },
      solution: [
        String.raw`設樓層高度為 1，P 到五樓地板垂直距離為 \(h\)。四樓地板距 P 為 \(h+1\)。由相似三角形
        \[
        \frac{h}{h+1}=\frac13，
        \]
        得 \(h=\frac12\)。`,
        String.raw`二樓地板距 P 為 \(h+3=\frac72\)。因此五樓截線與二樓底邊的比例為
        \[
        \frac{h}{h+3}=\frac{1/2}{7/2}=\frac17。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`由兩次相似三角形比例可得 \(\frac17\)。`,
        "2": String.raw`把 P 到五樓地板距離誤設成一整層。`,
        "3": String.raw`只按樓層數直接取倒數，未先求 P 的相對高度。`,
        "4": String.raw`相似比是線段比，不需再平方。`,
        "5": String.raw`忽略 P 位於五樓地板上方半層的結果。`
      }
    },
    "113B-7": {
      verified: true, sourcePage: 2,
      stem: "某月 30 天，東區最高溫分組天數依 18～24、24～30、30～36、36 以上為 0、11、14、5；西區為 3、12、15、0。城市每日最高溫取兩區較大者。試選出可能的城市分組天數 (A,B,C,D)。",
      options: {
        "1": "(0,15,15,0)", "2": "(3,12,15,5)", "3": "(0,9,16,5)", "4": "(3,7,15,5)", "5": "(0,12,13,5)"
      },
      solution: [
        String.raw`因東區沒有低於 24 度的日子，城市最高溫也不可能低於 24 度，故 \(A=0\)。東區有 5 天達 36 度以上，西區沒有，所以 \(D=5\)。`,
        String.raw`城市最高溫低於 30 度表示兩區同日都低於 30 度。東區有 11 天、西區有 15 天，交集天數可介於
        \[
        \max(0,11+15-30)=0
        \quad\text{到}\quad11。
        \]
        因 \(A=0\)，所以 \(B\le11\)。`,
        String.raw`選項中只有 \((0,9,16,5)\) 同時符合，且各交集可安排達成。`
      ],
      optionAnalysis: {
        "1": String.raw`\(D\) 必為東區 36 度以上的 5 天，不可能是 0。`,
        "2": String.raw`城市低溫組 \(A\) 不可能為 3。`,
        "3": String.raw`符合 \(A=0、D=5、0\le B\le11\)，可安排實現。`,
        "4": String.raw`同樣錯在 \(A\) 不可能為 3。`,
        "5": String.raw`兩區低於 30 度日數的交集至多 11 天，\(B=12\) 不可能。`
      }
    },
    "113B-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`正實數 \(a<b<c<d<e\) 成等比數列。試選出仍為等比數列的選項。`,
      options: {
        "1": String.raw`\(a,-b,c,-d,e\)`, "2": String.raw`\(e,d,c,b,a\)`,
        "3": String.raw`\(\log a,\log b,\log c,\log d,\log e\)`,
        "4": String.raw`\(3^a,3^b,3^c,3^d,3^e\)`,
        "5": String.raw`\(abc,bcd,cde\)`
      },
      solution: [
        String.raw`設原公比為 \(r>1\)。交錯變號後相鄰比皆為 \(-r\)，故（1）是等比；倒序後相鄰比皆為 \(1/r\)，故（2）也是。`,
        String.raw`對數後形成等差數列，不一定等比；指數 \(3^a,\ldots\) 的相鄰比為 \(3^{b-a}\) 等，因原數列的相鄰差不固定，通常不相等。`,
        String.raw`最後
        \[
        \frac{bcd}{abc}=\frac da=r^3,\qquad
        \frac{cde}{bcd}=\frac eb=r^3，
        \]
        所以（5）為等比數列。`
      ],
      optionAnalysis: {
        "1": String.raw`每一步都乘 \(-r\)，公比固定。`,
        "2": String.raw`倒序後公比為 \(1/r\)。`,
        "3": String.raw`取對數把等比轉成等差，不保證仍等比。`,
        "4": String.raw`指數差 \(b-a,c-b,\ldots\) 並不固定。`,
        "5": String.raw`兩個相鄰比皆為 \(r^3\)。`
      }
    },
    "113B-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`多項式 \(f(x)\) 除以 \(D=x^2+5x+1\) 的商為 \(Q=x^3+7x^2+x+3\)。試選出可能的 \(f(x)\)。`,
      options: {
        "1": String.raw`\(2QD\)`, "2": String.raw`\(QD-x\)`, "3": String.raw`\(QD+x^2\)`,
        "4": String.raw`\((Q+1)D-x\)`, "5": String.raw`\((Q+1)D-x^2\)`
      },
      solution: [
        String.raw`除法算法要求
        \[
        f=QD+R,\qquad \deg R<2。
        \]
        選項（2）的餘式為 \(-x\)，符合。`,
        String.raw`選項（5）可整理成
        \[
        (Q+1)D-x^2=QD+(D-x^2)=QD+(5x+1)，
        \]
        餘式 \(5x+1\) 次數小於 2，也符合。其餘選項會改變商或留下二次餘式。`
      ],
      optionAnalysis: {
        "1": String.raw`除以 \(D\) 的商會是 \(2Q\)。`,
        "2": String.raw`形式為 \(QD+(-x)\)，商正是 \(Q\)。`,
        "3": String.raw`加上的 \(x^2\) 與除式同次，還能再除，商會改變。`,
        "4": String.raw`商直接變成 \(Q+1\)。`,
        "5": String.raw`整理後為 \(QD+(5x+1)\)，商仍為 \(Q\)。`
      }
    },
    "113B-10": {
      verified: true, sourcePage: 3,
      stem: "長 120 公分的直線軌道上，光點 A、B 從兩端相向移動，碰端點反向；速率分別為每秒 5、10 公分。試選出正確的選項。",
      options: {
        "1": "第一次相遇位置距某端點 40 公分",
        "2": "A 的位置週期為 24 秒",
        "3": "A 回到出發點時，B 也在 B 的出發點",
        "4": "第二次相遇在端點上",
        "5": "共有 3 個不同相遇位置"
      },
      solution: [
        String.raw`首次相遇時間 \(120/(5+10)=8\) 秒，A 走 40 公分，故（1）正確。`,
        String.raw`A 往返一次週期為 \(2(120)/5=48\) 秒；B 的週期為 24 秒，所以 A 每次回到起點時，B 也完成整數個週期回到起點，（3）正確。`,
        String.raw`以折返運動或展開法求得相遇時刻依序為 8、24、40 秒，位置為 40、120、40 公分。因此第二次在端點，且只有 2 個不同相遇位置。`
      ],
      optionAnalysis: {
        "1": String.raw`8 秒時 A 走 40 公分，敘述正確。`,
        "2": String.raw`A 的往返週期為 48 秒。`,
        "3": String.raw`A 回起點需 48 秒，恰是 B 週期 24 秒的兩倍。`,
        "4": String.raw`第二次相遇在 24 秒，位置為 120 公分端點。`,
        "5": String.raw`相遇位置只有距 A 起點 40 公分處與另一端點，共 2 個。`
      }
    },
    "113B-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`第 1 年碳排放 \(X\)，第 5 年 \(Y=(1-0.05)^4X\)。第 2～5 年成長率依序為 \(-0.07,p,q,r\)，第 2 年排放量為 \(A\)。試選出正確的選項。`,
      options: {
        "1": String.raw`\(A=0.93X\)`, "2": String.raw`\(Y\le0.8X\)`,
        "3": String.raw`\(\frac{-0.07+p+q+r}{4}=-0.05\)`,
        "4": String.raw`\(\sqrt[4]{\frac YX}-1=-0.05\)`,
        "5": String.raw`\(0.93(1+p)(1+q)(1+r)=(0.95)^4\)`
      },
      solution: [
        String.raw`第 2 年下降 7%，所以 \(A=(1-0.07)X=0.93X\)，（1）正確。`,
        String.raw`\(\frac YX=0.95^4\approx0.8145>0.8\)，（2）錯。平均減碳 5% 是幾何平均概念，不是四個成長率的算術平均，故（3）錯。`,
        String.raw`由 \(Y/X=0.95^4\) 直接得 \(\sqrt[4]{Y/X}-1=-0.05\)；逐年倍率相乘也得
        \[
        0.93(1+p)(1+q)(1+r)=0.95^4。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`下降 7% 後保留 93%，所以 \(A=0.93X\)。`,
        "2": String.raw`\(0.95^4\approx0.8145\)，仍大於 0.8。`,
        "3": String.raw`逐年成長率應以倍率相乘，不以算術平均代表總變化。`,
        "4": String.raw`四次方根還原每年平均倍率 0.95。`,
        "5": String.raw`四個年度倍率相乘必等於總倍率 \(Y/X\)。`
      }
    },
    "113B-12": {
      verified: true, sourcePage: 4,
      stem: "機器人在 2×2 棋盤 A、B、C、D 中移動，每次等機率選上、下、左、右；若越界則留在原地。初始在 A，執行 n 次後停在四格機率為 a_n、b_n、c_n、d_n。試選出正確的選項。",
      options: {
        "1": String.raw`\(b_1=\frac14\)`, "2": String.raw`\(b_2=\frac18\)`,
        "3": String.raw`\(a_2+d_2=\frac34\)`, "4": String.raw`\(b_{99}=c_{99}\)`,
        "5": String.raw`\(a_{100}+d_{100}>\frac12\)`
      },
      solution: [
        String.raw`由角落 A 出發，兩方向越界留在 A，另兩方向各到相鄰格，所以 \(a_1=\frac12、b_1=c_1=\frac14、d_1=0\)，（1）正確。`,
        String.raw`再走一步可得
        \[
        b_2=\frac14,\quad a_2=\frac38,\quad d_2=\frac18，
        \]
        故（2）、（3）錯。`,
        String.raw`棋盤及初始位置對交換 B、C 對稱，所以所有 \(n\) 都有 \(b_n=c_n\)，（4）正確。對角兩格總機率從第一次起維持 \(\frac12\)，所以（5）的嚴格不等式錯。`
      ],
      optionAnalysis: {
        "1": String.raw`從 A 有四個等可能指令，其中一個到 B。`,
        "2": String.raw`完整加總從 A、B、D 到 B 的路徑後，\(b_2=\frac14\)。`,
        "3": String.raw`\(a_2+d_2=\frac38+\frac18=\frac12\)。`,
        "4": String.raw`B、C 關於棋盤對角線對稱，機率始終相等。`,
        "5": String.raw`兩對角格總機率為 \(\frac12\)，不是嚴格大於。`
      }
    },
    "113B-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`已知
      \[
      \begin{bmatrix}1&-1\\3&-2\end{bmatrix}
      \begin{bmatrix}a\\b\end{bmatrix}
      =\begin{bmatrix}1\\0\end{bmatrix}。
      \]
      若
      \[
      \begin{bmatrix}1&-1\\3&-2\end{bmatrix}
      \begin{bmatrix}2a+1\\2b+1\end{bmatrix}
      =\begin{bmatrix}c\\d\end{bmatrix}，
      \]
      求 \(c-3d\)。`,
      solution: [
        String.raw`第一式給 \(a-b=1、3a-2b=0\)，解得 \(a=-2、b=-3\)。`,
        String.raw`所以 \((2a+1,2b+1)=(-3,-5)\)，矩陣相乘得
        \[
        c=2,\qquad d=1。
        \]
        故 \(c-3d=2-3=-1\)。`
      ]
    },
    "113B-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`全體高三生都報考數學 A 或 B。只報 A 者占全體 \(\frac3{10}\)；報 A 者中有 \(\frac58\) 同時報 B。求只報 B 者占所有報 B 者的比例。`,
      solution: [
        String.raw`設同時報考兩科者占 \(x\)。報 A 總比例為 \(\frac3{10}+x\)，故
        \[
        \frac{x}{3/10+x}=\frac58。
        \]
        解得 \(x=\frac12\)。`,
        String.raw`只報 B 的比例為 \(1-\frac3{10}-\frac12=\frac15\)，報 B 總比例為 \(\frac15+\frac12=\frac7{10}\)。`,
        String.raw`所求為
        \[
        \frac{1/5}{7/10}=\frac27。
        \]`
      ]
    },
    "113B-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`平面相異五點 \(P_1,P_2,Q_1,Q_2,R\) 滿足
      \[
      \overrightarrow{P_1R}=4\overrightarrow{P_1Q_1},\qquad
      \overrightarrow{P_2R}=7\overrightarrow{P_2Q_2}。
      \]
      將 \(\overrightarrow{Q_1Q_2}\) 表成 \(\overrightarrow{P_1Q_1}、\overrightarrow{P_2Q_2}\) 的線性組合。`,
      solution: [
        String.raw`令 \(\vec u=\overrightarrow{P_1Q_1}、\vec v=\overrightarrow{P_2Q_2}\)。由共同點 R，
        \[
        \overrightarrow{P_1P_2}
        =\overrightarrow{P_1R}+\overrightarrow{RP_2}
        =4\vec u-7\vec v。
        \]`,
        String.raw`因此
        \[
        \overrightarrow{Q_1Q_2}
        =\overrightarrow{Q_1P_1}+\overrightarrow{P_1P_2}+\overrightarrow{P_2Q_2}
        =-\vec u+(4\vec u-7\vec v)+\vec v
        =3\vec u-6\vec v。
        \]`
      ]
    },
    "113B-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`半徑 2、球心原點的地球儀上，點
      \[
      A=\left(\frac{\sqrt3}{2},\frac12,\sqrt3\right)。
      \]
      赤道上距 A 最遠的點為 P。求通過 A、P 的大圓上兩點劣弧長。`,
      solution: [
        String.raw`A 在赤道平面的投影方向為 \((\frac{\sqrt3}{2},\frac12)\)，長為 1。赤道上距 A 最遠者取相反方向且半徑為 2：
        \[
        P=(-\sqrt3,-1,0)。
        \]`,
        String.raw`\(\overrightarrow{OA}\cdot\overrightarrow{OP}=-2\)，兩向量長皆為 2，故中心角 \(\phi\) 滿足
        \[
        \cos\phi=-\frac12，
        \]
        劣弧中心角為 \(\frac{2\pi}{3}\)。`,
        String.raw`弧長為
        \[
        2\cdot\frac{2\pi}{3}=\frac{4\pi}{3}。
        \]`
      ]
    },
    "113B-17": {
      verified: true, sourcePage: 6,
      stem: "圓周上 12 個等分點依序編號。任取 3 點形成三角形，求三內角由小到大成等差數列的三角形個數。",
      solution: [
        String.raw`三頂點把圓周分成正整數間隔 \(p,q,r\)，且 \(p+q+r=12\)。三內角分別為對應間隔的 \(15^\circ\) 倍，因此內角成等差等價於 \(p,q,r\) 排序後成等差。`,
        String.raw`設排序後為 \(u,u+d,u+2d\)，則 \(3u+3d=12\)，即 \(u+d=4\)。可能的間隔組為
        \[
        (4,4,4),(3,4,5),(2,4,6),(1,4,7)。
        \]`,
        String.raw`第一組有 1 種排列，其餘各有 6 種，共 19 個有序間隔。每組從 12 個起點產生、但每個三角形被三個頂點重複計數，故
        \[
        \frac{12}{3}\cdot19=76。
        \]`
      ]
    },
    "113B-18": {
      verified: true, sourcePage: 6,
      stem: "長方體石塊的八個角都以通過該角三條鄰邊中點的平面截去。求截角後石塊的面數。",
      options: { "1": "八面體", "2": "十面體", "3": "十二面體", "4": "十四面體", "5": "十六面體" },
      solution: [
        String.raw`原長方體有 6 個面；截去每一個角會新增一個三角形截面，八個角共新增 8 面。`,
        String.raw`原來的 6 個面仍各保留為一個多邊形面，所以總面數為
        \[
        6+8=14。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`只數到八個新三角形截面，漏掉原本六個面。`,
        "2": String.raw`截去八角會新增八面，不只新增四面。`,
        "3": String.raw`原面與新面總數並非各六面。`,
        "4": String.raw`六個原面加八個截角面，共十四面。`,
        "5": String.raw`頂點數或邊數不能直接當成面數。`
      }
    },
    "113B-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`承官方長方體截角題組。已知
      \[
      BC=8,\qquad BD=DC=9。
      \]
      求 \(\triangle BCD\) 面積。（非選擇題，須寫出推導）`,
      solution: [
        String.raw`令 \(P\) 為 \(\overline{BC}\) 中點。因 \(\triangle BCD\) 為等腰三角形，\(DP\perp BC\)，且 \(BP=4\)。`,
        String.raw`由畢氏定理
        \[
        DP=\sqrt{9^2-4^2}=\sqrt{65}。
        \]`,
        String.raw`所以
        \[
        [\triangle BCD]
        =\frac12\cdot8\cdot\sqrt{65}
        =4\sqrt{65}。
        \]`
      ]
    },
    "113B-20": {
      verified: true, sourcePage: 6,
      stem: "承第 19 題。求 AD 長度、四面體 ABCD 體積，以及以 △BCD 為底面時，A 到底面的高度。（非選擇題，須寫出推導）",
      solution: [
        String.raw`依長方體中點關係，\(AD\perp BC\)，且 \(\triangle ABC\) 是等腰直角三角形、斜邊 \(BC=8\)，故
        \[
        AB=AC=4\sqrt2。
        \]
        在直角三角形 \(ABD\) 中
        \[
        AD=\sqrt{BD^2-AB^2}=\sqrt{81-32}=7。
        \]`,
        String.raw`以直角三角形 \(ABC\) 為底、\(AD\) 為高，四面體體積為
        \[
        V=\frac13\left(\frac12\cdot4\sqrt2\cdot4\sqrt2\right)\cdot7
        =\frac{112}{3}。
        \]`,
        String.raw`改以 \(\triangle BCD\) 為底，其面積由第 19 題為 \(4\sqrt{65}\)。若高為 \(h\)，
        \[
        \frac{112}{3}
        =\frac13(4\sqrt{65})h，
        \]
        故
        \[
        h=\frac{28}{\sqrt{65}}=\frac{28\sqrt{65}}{65}。
        \]`
      ]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "112A-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`若在計算器中鍵入某正整數 \(N\)，接著連按取正平方根鍵 3 次，視窗顯示 2，則 \(N\) 為何？`,
      options: {
        "1": String.raw`\(2^3\)`, "2": String.raw`\(2^4\)`, "3": String.raw`\(2^6\)`,
        "4": String.raw`\(2^8\)`, "5": String.raw`\(2^{12}\)`
      },
      solution: [
        String.raw`連續開平方 3 次後得到
        \[
        N^{1/8}=2。
        \]`,
        String.raw`兩邊取 8 次方，得 \(N=2^8\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(2^3\) 連續開平方 3 次為 \(2^{3/8}\)，不是 2。`,
        "2": String.raw`\(2^4\) 連續開平方 3 次為 \(2^{1/2}\)。`,
        "3": String.raw`\(2^6\) 連續開平方 3 次為 \(2^{3/4}\)。`,
        "4": String.raw`因 \((2^8)^{1/8}=2\)，符合題意。`,
        "5": String.raw`\(2^{12}\) 連續開平方 3 次為 \(2^{3/2}\)。`
      }
    },
    "112A-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`坐標平面上，以原點 \(O\) 為圓心、1 為半徑作圓。在第一象限圓弧上取點 \(C\)，過 \(C\) 的切線分別交 \(x、y\) 軸於 \(D、E\)。令 \(\angle OEC=\theta\)，求 \(\tan\theta\)。`,
      options: {
        "1": String.raw`\(\overline{OE}\)`, "2": String.raw`\(\overline{OC}\)`,
        "3": String.raw`\(\overline{OD}\)`, "4": String.raw`\(\overline{CE}\)`,
        "5": String.raw`\(\overline{CD}\)`
      },
      solution: [
        String.raw`令 \(C=(\cos\varphi,\sin\varphi)\)。單位圓在 \(C\) 的切線為
        \[
        x\cos\varphi+y\sin\varphi=1。
        \]`,
        String.raw`由截距可得 \(\overline{CE}=\cot\varphi\)、\(\overline{CD}=\tan\varphi\)。又 \(\triangle OCE\) 在 \(C\) 為直角，
        \[
        \tan\theta=\frac{\overline{OC}}{\overline{CE}}
        =\frac1{\cot\varphi}=\tan\varphi=\overline{CD}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`\(\overline{OE}=\csc\varphi\)，並非 \(\tan\theta\)。`,
        "2": String.raw`\(\overline{OC}=1\)，但 \(\theta\) 會隨 \(C\) 改變。`,
        "3": String.raw`\(\overline{OD}=\sec\varphi\)，不是所求。`,
        "4": String.raw`\(\overline{CE}=\cot\varphi\)，是 \(\tan\theta\) 的倒數。`,
        "5": String.raw`\(\overline{CD}=\tan\varphi=\tan\theta\)。`
      }
    },
    "112A-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`某生把 15 筆物理量資料 \((s_k,t_k)\) 改畫成散布圖 \((s_k,\log t_k)\)。圖中資料大致沿著通過原點、斜率約為 \(\frac12\) 的直線分布。則 \(s、t\) 的關係式最可能為何？`,
      options: {
        "1": String.raw`\(s=2t\)`, "2": String.raw`\(s=3t\)`,
        "3": String.raw`\(t=10^s\)`, "4": String.raw`\(t^2=10^s\)`,
        "5": String.raw`\(t^3=10^s\)`
      },
      solution: [
        String.raw`迴歸直線顯示
        \[
        \log t\approx\frac12s。
        \]`,
        String.raw`因此 \(2\log t=s\)，即
        \[
        \log(t^2)=s\quad\Longleftrightarrow\quad t^2=10^s。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`這是 \(s、t\) 的線性關係，取 \(\log t\) 後不會得到題圖直線。`,
        "2": String.raw`同樣把原始 \(t\) 誤當成縱軸。`,
        "3": String.raw`此式給 \(\log t=s\)，斜率應為 1。`,
        "4": String.raw`此式等價於 \(\log t=s/2\)，符合散布圖。`,
        "5": String.raw`此式給 \(\log t=s/3\)，斜率不符。`
      }
    },
    "112A-4": {
      verified: true, sourcePage: 1,
      stem: "將數字 1、2、3、…、9 排成不重複的九位數，使前 5 位由左至右遞增，且後 5 位由左至右遞減。共有多少個？",
      options: {
        "1": String.raw`\(\frac{8!}{4!4!}\)`, "2": String.raw`\(\frac{8!}{5!3!}\)`,
        "3": String.raw`\(\frac{9!}{5!4!}\)`, "4": String.raw`\(\frac{8!}{5!}\)`,
        "5": String.raw`\(\frac{9!}{5!}\)`
      },
      solution: [
        "第 5 位同時是前 5 位最大數與後 5 位最大數，所以必為 9。",
        String.raw`從其餘 8 個數中選 4 個放在左側，順序由遞增條件唯一決定；剩下 4 個放右側，順序也唯一決定。因此共有
        \[
        \binom84=\frac{8!}{4!4!}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`正是從其餘 8 個數選 4 個給左側的 \(\binom84\)。`,
        "2": String.raw`左右兩側各有 4 個位置，不是分成 5 個與 3 個。`,
        "3": String.raw`中央的 9 已被固定，不能再從 9 個數任選。`,
        "4": String.raw`未除去同一組左側數字的排列重複。`,
        "5": String.raw`同時忽略中央固定與兩側順序已被決定。`
      }
    },
    "112A-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`坐標空間中，\(P、Q、R\) 是平面 \(2x-3y+5z=7\) 上不共線三點。令
      \[
      \overrightarrow{PQ}=(a_1,b_1,c_1),\qquad
      \overrightarrow{PR}=(a_2,b_2,c_2)。
      \]
      下列以指定第一列和上述兩向量為三列的行列式，何者絕對值最大？`,
      options: {
        "1": String.raw`第一列為 \((-1,1,1)\)`,
        "2": String.raw`第一列為 \((1,-1,1)\)`,
        "3": String.raw`第一列為 \((1,1,-1)\)`,
        "4": String.raw`第一列為 \((-1,-1,1)\)`,
        "5": String.raw`第一列為 \((-1,-1,-1)\)`
      },
      solution: [
        String.raw`因 \(\overrightarrow{PQ}\times\overrightarrow{PR}\) 垂直於此平面，所以與法向量
        \[
        \mathbf n=(2,-3,5)
        \]
        平行。各行列式絕對值只須比較第一列向量與 \(\mathbf n\) 的內積絕對值。`,
        String.raw`五個值依序成比例於
        \[
        0,\ 10,\ 6,\ 6,\ 4，
        \]
        故選項（2）最大。`
      ],
      optionAnalysis: {
        "1": String.raw`\(|(-1,1,1)\cdot(2,-3,5)|=0\)。`,
        "2": String.raw`\(|(1,-1,1)\cdot(2,-3,5)|=10\)，五者最大。`,
        "3": String.raw`內積絕對值為 6。`,
        "4": String.raw`內積絕對值為 6。`,
        "5": String.raw`內積絕對值為 4。`
      }
    },
    "112A-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`邊長為 1 的正立方體固定一頂點 \(O\)。從其餘 7 個頂點隨機選取相異兩點 \(P、Q\)，求 \(\overrightarrow{OP}\cdot\overrightarrow{OQ}\) 的期望值。`,
      options: {
        "1": String.raw`\(\frac47\)`, "2": String.raw`\(\frac57\)`,
        "3": String.raw`\(\frac67\)`, "4": "1", "5": String.raw`\(\frac87\)`
      },
      solution: [
        "把其餘頂點表示成非零的 0、1 三元坐標。內積等於三個坐標位置同時為 1 的個數。",
        String.raw`對任一固定坐標，7 個頂點中有 4 個該坐標為 1，故隨機兩點在此坐標同為 1 的機率為
        \[
        \frac{\binom42}{\binom72}=\frac27。
        \]`,
        String.raw`三個坐標的期望貢獻相加，得到 \(3\cdot\frac27=\frac67\)。`
      ],
      optionAnalysis: {
        "1": String.raw`只計入兩個坐標方向的期望貢獻。`,
        "2": String.raw`未依三個坐標分別使用指示變數計算。`,
        "3": String.raw`每個坐標貢獻 \(2/7\)，三者合計 \(6/7\)。`,
        "4": String.raw`內積不固定為 1，頂點組合不同會得到不同值。`,
        "5": String.raw`超過三個坐標貢獻的正確期望總和。`
      }
    },
    "112A-7": {
      verified: true, sourcePage: 2,
      stem: "甲、乙兩員工起薪相同。甲每工作滿 3 個月，次月起加薪 200 元；乙每工作滿 12 個月，次月起加薪 1000 元。選出正確敘述。",
      options: {
        "1": "第 9 個月甲比第 1 個月多 600 元",
        "2": "第 13 個月甲的月薪比乙高",
        "3": "第 19 個月甲的月薪比乙高",
        "4": "工作滿 18 個月時，甲的薪資總額比乙少",
        "5": "第 3 年的 12 個月中，恰有 3 個月甲的月薪比乙高"
      },
      solution: [
        "甲在第 4、7、10、…月調薪，乙在第 13、25、…月調薪。",
        "第 19 個月甲已調 6 次，共加 1200 元；乙只加 1000 元，所以（3）正確。",
        "第 3 年中，甲在第 34～36 月加薪總額為 2200 元，超過乙的 2000 元；恰有 3 個月，所以（5）正確。"
      ],
      optionAnalysis: {
        "1": "第 9 個月甲只在第 4、7 月調薪，共增加 400 元。",
        "2": "第 13 個月甲共加 800 元，乙加 1000 元，甲較低。",
        "3": "第 19 個月甲加 1200 元，乙加 1000 元，甲較高。",
        "4": "前 18 個月甲的加薪累計貢獻為 9000 元，乙為 6000 元，甲並未較少。",
        "5": "第 34、35、36 月甲比乙高，恰為 3 個月。"
      }
    },
    "112A-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`某抽獎遊戲單次中獎機率為 \(0.1\)，各次獨立。令 \(p_n\) 為玩 \(n\) 次至少中獎一次的機率。選出正確敘述。`,
      options: {
        "1": String.raw`\(p_{n+1}>p_n\)`,
        "2": String.raw`\(p_3=0.3\)`,
        "3": String.raw`\(\{p_n\}\) 為等差數列`,
        "4": String.raw`前兩次「第一次未中、第二次中」的機率等於 \(p_2-p_1\)`,
        "5": String.raw`玩 \(n\ge2\) 次至少中獎兩次的機率為 \(2p_n\)`
      },
      solution: [
        String.raw`至少中一次的機率為
        \[
        p_n=1-0.9^n。
        \]
        因此 \(p_{n+1}>p_n\)，（1）正確。`,
        String.raw`又
        \[
        p_2-p_1=(1-0.9^2)-(1-0.9)=0.09，
        \]
        正好等於第一次未中、第二次中的機率 \(0.9\cdot0.1\)，故（4）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`因 \(0.9^{n+1}<0.9^n\)，所以 \(p_{n+1}>p_n\)。`,
        "2": String.raw`\(p_3=1-0.9^3=0.271\)，不是 0.3。`,
        "3": String.raw`相鄰差為 \(0.1\cdot0.9^n\)，並非常數。`,
        "4": String.raw`兩者都等於 \(0.09\)。`,
        "5": String.raw`至少中兩次須用二項分配加總，不能寫成 \(2p_n\)。`
      }
    },
    "112A-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a_1,\ldots,a_n\) 是首項 3、公比 \(3\sqrt3\) 的等比數列。哪些 \(n\) 可能滿足
      \[
      \log_3a_1-\log_3a_2+\cdots+(-1)^{n+1}\log_3a_n>18？
      \]`,
      options: { "1": "23", "2": "24", "3": "25", "4": "26", "5": "27" },
      solution: [
        String.raw`因 \(3\sqrt3=3^{3/2}\)，
        \[
        \log_3a_k=1+\frac32(k-1)=\frac{3k-1}{2}。
        \]`,
        String.raw`若 \(n=2m\)，每一對相減為 \(-\frac32\)，總和為負。若 \(n=2m+1\)，總和為
        \[
        -\frac32m+(3m+1)=\frac32m+1。
        \]
        此值大於 18 的最小整數 \(m\) 為 12，因此 \(n\ge25\) 且必為奇數。`,
        "候選值中為 25、27。"
      ],
      optionAnalysis: {
        "1": String.raw`\(n=23\) 時 \(m=11\)，總和為 \(17.5\)，未超過 18。`,
        "2": "偶數項的交錯和為負。",
        "3": String.raw`\(n=25\) 時總和為 19，符合。`,
        "4": "偶數項的交錯和為負。",
        "5": String.raw`\(n=27\) 時總和為 \(20.5\)，符合。`
      }
    },
    "112A-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`直線
      \[
      L:5y+(2k-4)x-10k=0
      \]
      分別交長方形 \(O(0,0)、A(10,0)、B(10,6)、C(0,6)\) 的所在直線 \(OC、AB\) 於 \(D、E\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(k=4\) 時，\(L\) 通過 \(A\)`,
        "2": String.raw`若 \(L\) 通過 \(C\)，斜率為 \(-\frac52\)`,
        "3": String.raw`若 \(D\) 在線段 \(OC\) 上，則 \(0\le k\le3\)`,
        "4": String.raw`\(k=\frac12\) 時，線段 \(DE\) 在長方形內`,
        "5": String.raw`若 \(DE\) 在長方形內，\(L\) 的斜率可能為 \(\frac3{10}\)`
      },
      solution: [
        String.raw`令 \(x=0\) 與 \(x=10\)，分別得
        \[
        D=(0,2k),\qquad E=(10,8-2k)。
        \]`,
        String.raw`所以 \(D\in\overline{OC}\) 等價於 \(0\le k\le3\)；而 \(E\in\overline{AB}\) 等價於 \(1\le k\le4\)。故整段 \(DE\) 在長方形內時 \(1\le k\le3\)。`,
        String.raw`斜率為 \(m=(4-2k)/5\)。代入各條件可得（1）、（3）、（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`\(k=4\) 時 \(E=(10,0)=A\)，正確。`,
        "2": String.raw`通過 \(C\) 時 \(k=3\)，斜率為 \(-2/5\)，不是 \(-5/2\)。`,
        "3": String.raw`由 \(0\le2k\le6\) 得 \(0\le k\le3\)。`,
        "4": String.raw`\(k=1/2\) 時 \(E=(10,7)\)，在長方形外。`,
        "5": String.raw`令 \(m=3/10\) 得 \(k=5/4\)，落在 \(1\le k\le3\) 內。`
      }
    },
    "112A-11": {
      verified: true, sourcePage: 4,
      stem: "令 A、B 分別為以原點為中心順時針、逆時針旋轉 90° 的矩陣；C、D 分別為對直線 x=y、x=-y 的鏡射矩陣。選出正確敘述。",
      options: {
        "1": String.raw`\(A、C\) 將 \((1,0)\) 映射到同一點`,
        "2": String.raw`\(A=-B\)`, "3": String.raw`\(C=D^{-1}\)`,
        "4": String.raw`\(AB=CD\)`, "5": String.raw`\(AC=BD\)`
      },
      solution: [
        String.raw`四個矩陣為
        \[
        A=\begin{bmatrix}0&1\\-1&0\end{bmatrix},\
        B=\begin{bmatrix}0&-1\\1&0\end{bmatrix},\
        C=\begin{bmatrix}0&1\\1&0\end{bmatrix},\
        D=\begin{bmatrix}0&-1\\-1&0\end{bmatrix}。
        \]`,
        String.raw`直接比較與相乘可得 \(A=-B\)，且
        \[
        AC=BD=\begin{bmatrix}1&0\\0&-1\end{bmatrix}。
        \]`
      ],
      optionAnalysis: {
        "1": String.raw`\(A(1,0)^T=(0,-1)^T\)，\(C(1,0)^T=(0,1)^T\)。`,
        "2": "兩個方向相反的 90° 旋轉矩陣互為負矩陣。",
        "3": String.raw`\(D^{-1}=D\)，但 \(C\ne D\)。`,
        "4": String.raw`\(AB=I\)，而 \(CD=-I\)。`,
        "5": String.raw`直接相乘可得 \(AC=BD\)。`
      }
    },
    "112A-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`令
      \[
      f(x)=\sin x+\sqrt3\cos x。
      \]
      選出正確敘述。`,
      options: {
        "1": String.raw`直線 \(x=\frac\pi6\) 是圖形的對稱軸`,
        "2": String.raw`若 \(x=a、x=b\) 都是對稱軸，則 \(f(a)=f(b)\)`,
        "3": String.raw`在 \([0,2\pi)\) 中只有一個 \(x\) 滿足 \(f(x)=\sqrt3\)`,
        "4": String.raw`在 \([0,2\pi)\) 中滿足 \(f(x)=\frac12\) 的所有解之和不超過 \(2\pi\)`,
        "5": String.raw`\(y=f(x)\) 可由 \(y=4\sin^2\frac x2\) 的圖形經適當平移得到`
      },
      solution: [
        String.raw`化為
        \[
        f(x)=2\sin\left(x+\frac\pi3\right)。
        \]
        極值所在的垂直線是對稱軸，故 \(x=\pi/6\) 為其中一條。`,
        String.raw`又
        \[
        4\sin^2\frac x2=2-2\cos x
        \]
        是振幅 2、週期 \(2\pi\) 的正弦型圖形，經上下與左右平移可得到 \(f\)。`
      ],
      optionAnalysis: {
        "1": String.raw`代入相位後，\(x=\pi/6\) 對應正弦函數最大值，確為對稱軸。`,
        "2": "相鄰對稱軸交替通過最大值與最小值，函數值不相等。",
        "3": String.raw`方程 \(2\sin(x+\pi/3)=\sqrt3\) 在一週期內有兩解。`,
        "4": "兩個解的相位和換回 x 後會超過 \(2\pi\)。",
        "5": "兩圖皆為振幅 2、週期 \(2\pi\) 的正弦型圖形，可藉平移重合。"
      }
    },
    "112A-13": {
      verified: true, sourcePage: 4,
      stem: "果汁、奶茶、咖啡的每日單價固定。三天銷量與總收入依序為：第 1 天 (60,80,50) 杯、12900 元；第 2 天 (30,40,30) 杯、6850 元；第 3 天 (50,70,40) 杯、10800 元。求咖啡單價。",
      solution: [
        String.raw`設三種飲料單價為 \(x、y、z\)，則
        \[
        \begin{cases}
        60x+80y+50z=12900,\\
        30x+40y+30z=6850,\\
        50x+70y+40z=10800。
        \end{cases}
        \]`,
        String.raw`第一式減去第二式的 2 倍，得 \(-10z=-800\)，所以 \(z=80\)。`
      ]
    },
    "112A-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`設 \(a,b\) 為實數且 \(a>0\)。多項式
      \[
      ax^2+(2a+b)x-12
      \]
      除以 \(x^2+(2-a)x-2a\) 的餘式為 6，求 \((a,b)\)。`,
      solution: [
        String.raw`兩式同為二次式，商為最高次係數 \(a\)，故
        \[
        ax^2+(2a+b)x-12
        =a[x^2+(2-a)x-2a]+6。
        \]`,
        String.raw`比較一次項得 \(b=-a^2\)；比較常數項得
        \[
        -12=-2a^2+6\Rightarrow a^2=9。
        \]
        因 \(a>0\)，所以 \(a=3、b=-9\)。`
      ]
    },
    "112A-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`\(O、A、B\) 不共線且 \(\overrightarrow{OA}\perp\overrightarrow{OB}\)。點 \(C、D\) 在直線 \(AB\) 上，滿足
      \[
      \overrightarrow{OC}=\frac35\overrightarrow{OA}+\frac25\overrightarrow{OB},\qquad
      3\overline{AD}=8\overline{BD},
      \]
      且 \(\overrightarrow{OC}\perp\overrightarrow{OD}\)。求 \(\overline{OB}/\overline{OA}\)。`,
      solution: [
        String.raw`因 \(AD:BD=8:3\) 且垂直條件不可能出現在內分點，故 \(D\) 是 \(AB\) 的外分點：
        \[
        \overrightarrow{OD}=-\frac35\overrightarrow{OA}+\frac85\overrightarrow{OB}。
        \]`,
        String.raw`由 \(\overrightarrow{OC}\cdot\overrightarrow{OD}=0\) 及 \(\overrightarrow{OA}\perp\overrightarrow{OB}\)，
        \[
        -\frac9{25}OA^2+\frac{16}{25}OB^2=0。
        \]
        因此 \(\frac{OB}{OA}=\frac34\)。`
      ]
    },
    "112A-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`平面 \(E:x+z=2\) 通過 \(A(2,-1,0)、B(0,1,2)、C(-2,1,4)\)。點 \(P\) 在平面 \(z=1\) 上，且 \(P\) 在 \(E\) 的投影點與 \(A、B、C\) 等距。求 \(P\) 到 \(E\) 的距離。`,
      solution: [
        String.raw`設投影點為 \(X=(x,y,z)\)。由 \(X\in E\) 且 \(XA=XB=XC\)，解得
        \[
        x+z=2,\quad -x+y+z=0,\quad z-x=4，
        \]
        所以 \(X=(-1,-4,3)\)。`,
        String.raw`平面法向量為 \((1,0,1)\)。因 \(P\) 在通過 \(X\) 的法線上且 \(z_P=1\)，
        \[
        P=X-2(1,0,1)。
        \]
        故距離為 \(2\sqrt2\)。`
      ]
    },
    "112A-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`空間中兩歪斜線
      \[
      L_1:(x,y,z)=(1,1,2)+t(1,-1,1),\quad
      L_2:(x,y,z)=(2,5,6)+s(2,1,-1)。
      \]
      直線 \(L_3\) 與 \(L_1、L_2\) 都相交且垂直。點 \(P、Q\) 分別在 \(L_1、L_2\) 上，且到 \(L_3\) 的距離皆為 3。求 \(PQ\)。`,
      solution: [
        String.raw`兩方向向量
        \[
        \mathbf u=(1,-1,1),\qquad \mathbf v=(2,1,-1)
        \]
        的內積為 0；公垂線方向也同時垂直於兩者，所以三個方向彼此垂直。`,
        String.raw`由歪斜線距離公式，
        \[
        d(L_1,L_2)=\frac{|(1,4,4)\cdot(\mathbf u\times\mathbf v)|}{|\mathbf u\times\mathbf v|}
        =4\sqrt2。
        \]`,
        String.raw`因此
        \[
        PQ^2=3^2+3^2+(4\sqrt2)^2=50，
        \]
        得 \(PQ=5\sqrt2\)。`
      ]
    },
    "112A-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`坐標平面上 \(O=(0,0)、A=(1,0)\)，點 \(P\) 在上半平面且 \(\overline{AP}=\overline{OA}=1\)。令 \(\angle AOP=\theta\)，求 \(\overline{OP}\)。`,
      options: {
        "1": String.raw`\(\sin\theta\)`, "2": String.raw`\(\cos\theta\)`,
        "3": String.raw`\(2\sin\theta\)`, "4": String.raw`\(2\cos\theta\)`,
        "5": String.raw`\(\cos2\theta\)`
      },
      solution: [
        String.raw`在 \(\triangle OAP\) 中，\(OA=AP=1\)。由餘弦定理
        \[
        AP^2=OA^2+OP^2-2(OA)(OP)\cos\theta。
        \]`,
        String.raw`代入 \(AP=OA=1\)，得 \(OP^2-2OP\cos\theta=0\)。因 \(OP>0\)，所以 \(OP=2\cos\theta\)。`
      ],
      optionAnalysis: {
        "1": "少了等腰三角形弦長關係中的倍數。",
        "2": "由餘弦定理得到的是兩倍餘弦。",
        "3": "此處 \(\theta\) 的鄰邊關係對應餘弦，不是正弦。",
        "4": String.raw`餘弦定理化簡得 \(OP=2\cos\theta\)。`,
        "5": "倍角餘弦不等於此三角形的底邊長。"
      }
    },
    "112A-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`承上題，另有 \(B=(-2,0)\) 與上半平面點 \(Q\)，滿足 \(BQ=OB=2\)、\(\angle POQ=90^\circ\)。若 \(\sin\theta=\frac35\)，求 \(Q\) 坐標，並證明 \(\overrightarrow{BQ}=2\overrightarrow{AP}\)。`,
      solution: [
        String.raw`因 \(\theta\) 為銳角，
        \[
        \cos\theta=\frac45,\qquad OP=2\cos\theta=\frac85。
        \]
        故
        \[
        P=OP(\cos\theta,\sin\theta)
        =\left(\frac{32}{25},\frac{24}{25}\right)。
        \]`,
        String.raw`因 \(\overrightarrow{OQ}\) 與 \(\overrightarrow{OP}\) 垂直且指向第二象限，設 \(\overrightarrow{OQ}=\lambda(-3,4)\)。再用 \(BQ=2\) 解得 \(\lambda=\frac{12}{25}\)，所以
        \[
        Q=\left(-\frac{36}{25},\frac{48}{25}\right)。
        \]`,
        String.raw`而
        \[
        \overrightarrow{AP}=\left(\frac7{25},\frac{24}{25}\right),\qquad
        \overrightarrow{BQ}=\left(\frac{14}{25},\frac{48}{25}\right)
        =2\overrightarrow{AP}。
        \]`
      ]
    },
    "112A-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`承第 19 題，求點 \(A\) 到直線 \(BQ\) 的距離，以及四邊形 \(PABQ\) 的面積。`,
      solution: [
        String.raw`由 \(\overrightarrow{BQ}=2\overrightarrow{AP}\)，直線 \(BQ\) 與 \(AP\) 平行。以點線距離公式計算 \(A=(1,0)\) 到通過 \(B=(-2,0)\)、方向 \((14,48)\) 的直線距離：
        \[
        d=\frac{|(A-B)\times(14,48)|}{\sqrt{14^2+48^2}}
        =\frac{144}{50}=\frac{72}{25}。
        \]`,
        String.raw`四邊形 \(PABQ\) 是一組對邊平行的梯形，平行邊長為 \(AP=1、BQ=2\)，高為 \(72/25\)，故
        \[
        [PABQ]=\frac{1+2}{2}\cdot\frac{72}{25}
        =\frac{108}{25}。
        \]`
      ]
    },

    "112B-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`抽水站用電量 \(y\) 與馬達轉速 \(x\) 的三次方成正比。哪一種圖形最能描述兩者關係？`,
      options: {
        "1": "通過原點、遞增且向上彎曲的曲線",
        "2": "通過原點的直線",
        "3": "通過原點、遞增且向下彎曲的曲線",
        "4": "先升後降再升的曲線",
        "5": "先升後降並趨近橫軸的曲線"
      },
      solution: [
        String.raw`題意給出
        \[
        y=kx^3,\qquad k>0。
        \]
        在實際轉速 \(x\ge0\) 的範圍內，圖形通過原點、單調遞增，而且斜率隨 \(x\) 增加。`
      ],
      optionAnalysis: {
        "1": String.raw`符合 \(y=kx^3\) 在第一象限的形狀。`,
        "2": "直線表示與 \(x\) 成正比，不是與 \(x^3\) 成正比。",
        "3": "向下彎曲較像次方小於 1 的冪函數。",
        "4": String.raw`\(kx^3\) 在 \(x\ge0\) 不會出現局部極大、極小。`,
        "5": String.raw`\(kx^3\) 不會在轉速增加時下降。`
      }
    },
    "112B-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`若
      \[
      \begin{bmatrix}0&1\\1&0\end{bmatrix}
      \begin{bmatrix}a&b\\c&d\end{bmatrix}
      \begin{bmatrix}1&0\\0&-2\end{bmatrix}
      =
      \begin{bmatrix}3&-4\\-9&-7\end{bmatrix},
      \]
      求 \(c-2b\)。`,
      options: { "1": "-11", "2": "-4", "3": "1", "4": "10", "5": "11" },
      solution: [
        String.raw`左乘第一個矩陣會交換兩列，再右乘對角矩陣，得到
        \[
        \begin{bmatrix}c&-2d\\a&-2b\end{bmatrix}
        =
        \begin{bmatrix}3&-4\\-9&-7\end{bmatrix}。
        \]`,
        String.raw`所以 \(c=3、b=\frac72\)，故 \(c-2b=3-7=-4\)。`
      ],
      optionAnalysis: {
        "1": "矩陣乘法的列、行變換位置有誤。",
        "2": String.raw`由 \(c=3、b=7/2\) 得 \(-4\)。`,
        "3": "未將右乘矩陣造成的第二行縮放納入。",
        "4": "符號與第二欄的 \(-2\) 倍關係不符。",
        "5": "把 \(-2b=-7\) 誤解為 \(2b=-7\)。"
      }
    },
    "112B-3": {
      verified: true, sourcePage: 1,
      stem: "甲、乙兩大樓水平距離 150 公尺，從較高的甲樓頂看乙樓頂的俯角為 22°。連接兩樓頂的直線繩索長度為何？",
      options: {
        "1": "150", "2": String.raw`\(150\sin22^\circ\)`,
        "3": String.raw`\(150\cos22^\circ\)`,
        "4": String.raw`\(\frac{150}{\cos22^\circ}\)`,
        "5": String.raw`\(\frac{150}{\sin22^\circ}\)`
      },
      solution: [
        String.raw`繩長是直角三角形斜邊，150 公尺是俯角 \(22^\circ\) 的鄰邊，因此
        \[
        \cos22^\circ=\frac{150}{\text{繩長}}。
        \]
        繩長為 \(\frac{150}{\cos22^\circ}\)。`
      ],
      optionAnalysis: {
        "1": "150 是水平鄰邊，不是斜邊。",
        "2": "把鄰邊誤乘正弦。",
        "3": "把已知鄰邊又乘餘弦，所得比鄰邊更短。",
        "4": "由鄰邊除以餘弦得到斜邊。",
        "5": "正弦對應的是對邊與斜邊，不符合已知量。"
      }
    },
    "112B-4": {
      verified: true, sourcePage: 1,
      stem: "29 名考生成績相異，第 25、50、75、95 百分位數依序為 41、60、74、92。將成績較高的前 15 名各加 5 分，其餘不變。調整後四個百分位數為何？",
      options: {
        "1": "(41, 60, 74, 92)", "2": "(41, 60, 74, 97)",
        "3": "(41, 65, 79, 97)", "4": "(46, 65, 79, 92)",
        "5": "(46, 65, 79, 97)"
      },
      solution: [
        "29 人由低到高排列時，中位數是第 15 名；第 25 百分位仍在後 14 名中，其餘三個百分位落在前 15 名。",
        "加分不改變名次，因此第 25 百分位仍為 41，其餘分別加 5，得到 (41, 65, 79, 97)。"
      ],
      optionAnalysis: {
        "1": "漏掉前三個位於高分組的百分位數調整。",
        "2": "第 50、75 百分位也位於加 5 分的前 15 名。",
        "3": "第 25 百分位不變，其餘三者各加 5。",
        "4": "第 25 百分位不在高分前 15 名，第 95 百分位則在。",
        "5": "第 25 百分位不應加 5。"
      }
    },
    "112B-5": {
      verified: true, sourcePage: 2,
      stem: "袋中有編號 1～100 的球，等可能抽一球。在下列哪個已知條件下，抽到 7 號球的條件機率最大？",
      options: {
        "1": "號碼是奇數", "2": "號碼是質數", "3": "號碼是 7 的倍數",
        "4": "號碼不是 5 的倍數", "5": "號碼小於 10"
      },
      solution: [
        "五個條件事件都包含 7，因此條件機率等於 1 除以該事件包含的球數。",
        String.raw`五個事件大小依序為 \(50、25、14、80、9\)，所以機率最大的是 \(\frac19\)，即號碼小於 10。`
      ],
      optionAnalysis: {
        "1": String.raw`條件機率為 \(1/50\)。`,
        "2": String.raw`1～100 有 25 個質數，條件機率為 \(1/25\)。`,
        "3": String.raw`有 14 個 7 的倍數，條件機率為 \(1/14\)。`,
        "4": String.raw`有 80 個號碼不是 5 的倍數，條件機率為 \(1/80\)。`,
        "5": String.raw`1～9 只有 9 顆球，條件機率 \(1/9\) 最大。`
      }
    },
    "112B-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`令
      \[
      f(x)=x^3+ax^2+bx+c,\qquad g(x)=ax^3+bx^2+cx+d,\ a\ne0。
      \]
      某甲誤算 \(g\) 除以 \(f\)，餘式為 \(-3x-17\)。若正確的 \(f\) 除以 \(g\) 餘式為 \(px^2+qx+r\)，求 \(p\)。`,
      options: { "1": "-3", "2": "-1", "3": "0", "4": "2", "5": "3" },
      solution: [
        String.raw`誤算時的商為 \(a\)，所以
        \[
        g(x)=af(x)-3x-17。
        \]
        比較二次項得 \(b=a^2\)。`,
        String.raw`正確相除時商為 \(1/a\)，餘式的二次項係數為
        \[
        p=a-\frac ba=a-\frac{a^2}{a}=0。
        \]`
      ],
      optionAnalysis: {
        "1": "-3 是誤算餘式的一次項係數。",
        "2": "未由最高次項先決定兩次除法的商。",
        "3": String.raw`由 \(b=a^2\) 得 \(p=a-b/a=0\)。`,
        "4": "不符合二次項係數比較結果。",
        "5": "把誤算餘式的係數符號或次數混用。"
      }
    },
    "112B-7": {
      verified: true, sourcePage: 2,
      stem: "手電筒光線形成頂角 60° 的直圓錐。圓錐軸垂直於牆壁與地板的交線。若牆面上的光線邊緣是拋物線的一部分，地板上的光線邊緣是哪一種圓錐曲線？",
      options: {
        "1": "兩相交直線", "2": "圓形", "3": "拋物線",
        "4": "長短軸不相等的橢圓", "5": "雙曲線"
      },
      solution: [
        "牆面切平面與圓錐的一條母線平行，所以形成拋物線。地板與牆面垂直，對此圓錐只截到單一錐面，且切面不垂直於圓錐軸。",
        "因此截痕為橢圓；又因切面不垂直於軸，並非圓，而是長短軸不相等的橢圓。"
      ],
      optionAnalysis: {
        "1": "切平面沒有通過圓錐頂點。",
        "2": "切面不垂直於圓錐軸，所以不是圓。",
        "3": "牆面是拋物線截面，地板切面的傾角不同。",
        "4": "地板只截單一錐面且非垂直軸，得到非圓橢圓。",
        "5": "地板切面不會同時截到上下兩個錐面。"
      }
    },
    "112B-8": {
      verified: true, sourcePage: 3,
      stem: "電子看板以 A、B、A、B…輪播，每段皆為整數 \(T\) 分鐘。某甲恰逢 A 開始播放，30 分鐘後回來，恰逢 B 開始播放。哪些可能是 \(T\)？",
      options: { "1": "15", "2": "10", "3": "8", "4": "6", "5": "5" },
      solution: [
        String.raw`B 開始播放的時刻是 \(T、3T、5T、\ldots\)，所以
        \[
        \frac{30}{T}
        \]
        必須是奇數。`,
        "逐一檢查，\(30/10=3、30/6=5\) 為奇數，故 \(T=10、6\)。"
      ],
      optionAnalysis: {
        "1": String.raw`\(30/15=2\)，此時開始播 A。`,
        "2": String.raw`\(30/10=3\) 為奇數，開始播 B。`,
        "3": "30 不是 8 的整數倍，並非恰好開始播放。",
        "4": String.raw`\(30/6=5\) 為奇數，開始播 B。`,
        "5": String.raw`\(30/5=6\) 為偶數，開始播 A。`
      }
    },
    "112B-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`已知 \(a=6、b=\frac{20}{3}、c=2\sqrt{10}\)，而 \(d\) 為有理數。數線上標為 \(A(a)、B(b)、C(c)、D(d)\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(a+b+c+d\) 必為有理數`,
        "2": String.raw`\(abcd\) 必為無理數`,
        "3": String.raw`\(D、C\) 的距離可能為 \(2\sqrt{10}+6\)`,
        "4": String.raw`\(A、B\) 的中點在 \(C\) 右邊`,
        "5": String.raw`與 \(B\) 距離小於 8 的點中，正整數有 14 個、負整數有 1 個`
      },
      solution: [
        String.raw`取 \(d=-6\)，則 \(|d-c|=2\sqrt{10}+6\)，所以（3）正確。`,
        String.raw`\(A、B\) 中點為 \(19/3\)，而
        \[
        \left(\frac{19}{3}\right)^2=\frac{361}{9}>40=(2\sqrt{10})^2，
        \]
        故中點在 \(C\) 右邊，（4）正確。`,
        String.raw`與 \(B=20/3\) 距離小於 8 的區間是
        \[
        \left(-\frac43,\frac{44}{3}\right)，
        \]
        其中正整數為 1～14，負整數只有 \(-1\)，故（5）正確。`
      ],
      optionAnalysis: {
        "1": "前三個有理數與 \(c\) 的和仍含非零無理數部分。",
        "2": String.raw`若 \(d=0\)，乘積為 0，是有理數。`,
        "3": String.raw`取有理數 \(d=-6\) 即可達成。`,
        "4": String.raw`中點 \(19/3>2\sqrt{10}\)。`,
        "5": String.raw`區間內正整數 1～14 共 14 個，負整數只有 \(-1\)。`
      }
    },
    "112B-10": {
      verified: true, sourcePage: 3,
      stem: "12 點時甲、乙培養皿細菌數為 X、Y。甲每 3 小時變 2 倍，乙每 2 小時變 2 倍；18 點時兩者相同。選出正確敘述。",
      options: {
        "1": String.raw`\(X>Y\)`, "2": String.raw`13 點甲為 \(\frac43X\)`,
        "3": String.raw`15 點乙為 \(3Y\)`, "4": "19 點乙為甲的 1.5 倍",
        "5": "24 點乙為甲的 2 倍"
      },
      solution: [
        String.raw`經過 \(t\) 小時後，兩者分別為
        \[
        X2^{t/3},\qquad Y2^{t/2}。
        \]
        18 點時 \(4X=8Y\)，所以 \(X=2Y>Y\)，（1）正確。`,
        String.raw`24 點時 \(t=12\)，比值為
        \[
        \frac{Y2^6}{X2^4}=\frac{64Y}{16(2Y)}=2，
        \]
        故（5）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`由 18 點相等可得 \(X=2Y\)。`,
        "2": String.raw`13 點甲為 \(X2^{1/3}\)，不是 \(4X/3\)。`,
        "3": String.raw`15 點乙為 \(Y2^{3/2}=2\sqrt2Y\)。`,
        "4": String.raw`19 點乙甲比為 \(2^{1/6}\)，不是 1.5。`,
        "5": "24 點乙甲比恰為 2。"
      }
    },
    "112B-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`一圓圓心為 \(A(a,b)\)，與兩坐標軸皆相切。另有 \(P(c,c)\)，其中 \(a>c>0\)，且 \(PA=a+c\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(a=b\)`, "2": String.raw`\(P\) 在 \(x+y=0\) 上`,
        "3": "P 在圓內", "4": String.raw`\(\frac{a+c}{b-c}=\sqrt2\)`,
        "5": String.raw`\(\frac ac=2+3\sqrt2\)`
      },
      solution: [
        String.raw`圓與兩軸相切給 \(|a|=|b|\)。若 \(b=-a\)，距離條件會導致 \(a=c\)，與 \(a>c\) 矛盾，所以 \(b=a\)，（1）正確。`,
        String.raw`此時
        \[
        PA=\sqrt{(a-c)^2+(a-c)^2}=\sqrt2(a-c)=a+c，
        \]
        因而 \(\frac{a+c}{b-c}=\sqrt2\)，（4）正確。`
      ],
      optionAnalysis: {
        "1": "由相切與距離條件排除 \(b=-a\)，故 \(a=b\)。",
        "2": String.raw`\(P=(c,c)\) 位在 \(x-y=0\)，不是 \(x+y=0\)。`,
        "3": String.raw`\(PA=a+c>a\)，大於半徑，所以 P 在圓外。`,
        "4": String.raw`距離式直接給 \((a+c)/(a-c)=\sqrt2\)。`,
        "5": String.raw`實際可得 \(a/c=3+2\sqrt2\)，不是 \(2+3\sqrt2\)。`
      }
    },
    "112B-12": {
      verified: true, sourcePage: 4,
      stem: "球形地球儀半徑為 R。A、B、C 在赤道，經度為東經 0°、60°、90°；D、E 在北緯 30°，經度為東經 0°、180°。選出正確敘述。",
      options: {
        "1": "赤道長度等於東經 0°、180° 兩條經線長度總和",
        "2": "北緯 45° 線長等於赤道長的一半",
        "3": "A 沿赤道到 B 的最短路徑，等於 D 沿東經 0° 到北極的路徑",
        "4": "D 沿北緯 30° 到 E，等於 D 經北極再到 E 的路徑",
        "5": "北極到 A 的直線與北極到 C 的直線互相垂直"
      },
      solution: [
        String.raw`赤道長為 \(2\pi R\)。每一條從北極到南極的經線長為 \(\pi R\)，東經 0°、180° 兩條合計 \(2\pi R\)，故（1）正確。`,
        String.raw`A 到 B 的赤道圓心角為 \(60^\circ\)，弧長 \(\pi R/3\)；D 在北緯 \(30^\circ\)，到北極的緯度差也是 \(60^\circ\)，弧長同為 \(\pi R/3\)，故（3）正確。`
      ],
      optionAnalysis: {
        "1": "赤道一整圈與兩條半圓經線的總長都為 \(2\pi R\)。",
        "2": String.raw`北緯 45° 線長是赤道的 \(\cos45^\circ=\sqrt2/2\) 倍。`,
        "3": "兩段都是半徑 R、圓心角 60° 的大圓弧。",
        "4": String.raw`沿緯線為 \(\pi R\cos30^\circ\)，經北極為 \(2\pi R/3\)，不相等。`,
        "5": "以三維坐標計算兩方向向量的內積不為 0。"
      }
    },
    "112B-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`正實數 \(a、b\) 滿足
      \[
      ab^2=10^5,\qquad a^2b=10^3。
      \]
      求 \(\log b\)。`,
      solution: [
        String.raw`令 \(A=\log a、B=\log b\)，取常用對數得
        \[
        A+2B=5,\qquad 2A+B=3。
        \]`,
        String.raw`解聯立方程式得 \(B=\frac73\)，所以 \(\log b=\frac73\)。`
      ]
    },
    "112B-14": {
      verified: true, sourcePage: 5,
      stem: "從 1～20 取相異三數 \(a<b<c\)，使其成等差數列。求有序數組 \((a,b,c)\) 的數量。",
      solution: [
        String.raw`設公差為正整數 \(d\)，則 \(a+2d\le20\)。固定 \(d\) 時，\(a\) 有 \(20-2d\) 種；\(d=1,\ldots,9\)。`,
        String.raw`因此總數為
        \[
        \sum_{d=1}^{9}(20-2d)=18+16+\cdots+2=90。
        \]`
      ]
    },
    "112B-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`每一步都前進 2 單位，走完一步後向左轉 \(15^\circ\)。求 \(\overrightarrow{P_2P_3}\) 與 \(\overrightarrow{P_5P_6}\) 的內積。`,
      solution: [
        "兩向量之間相隔 3 次轉向，所以夾角為 \(3\cdot15^\circ=45^\circ\)，且兩向量長都為 2。",
        String.raw`因此
        \[
        \overrightarrow{P_2P_3}\cdot\overrightarrow{P_5P_6}
        =2\cdot2\cos45^\circ=2\sqrt2。
        \]`
      ]
    },
    "112B-16": {
      verified: true, sourcePage: 5,
      stem: "正方形紙張左下角為 O，內部點 P 距左邊界 6 公分、距下邊界 8 公分。將 O 往內摺到 P，求摺入三角形面積。",
      solution: [
        String.raw`令 \(O=(0,0)、P=(6,8)\)。摺痕是 \(\overline{OP}\) 的中垂線；摺痕上 \((x,y)\) 滿足
        \[
        x^2+y^2=(x-6)^2+(y-8)^2，
        \]
        化為 \(3x+4y=25\)。`,
        String.raw`摺痕與兩軸截距為 \(25/3、25/4\)，故摺入三角形面積
        \[
        \frac12\cdot\frac{25}{3}\cdot\frac{25}{4}
        =\frac{625}{24}。
        \]`
      ]
    },
    "112B-17": {
      verified: true, sourcePage: 5,
      stem: "用 0、1、2 組成所有長度 \(n\) 的序列。令 \(a(n)\) 為所有序列中相鄰「00」出現次數的總和。求 \(a(5)\)。",
      solution: [
        "長度 5 有 4 個相鄰位置。固定其中一個位置為 00，其他 3 位各有 3 種選擇，所以該位置在所有序列中共貢獻 \(3^3=27\) 次。",
        String.raw`把四個位置的貢獻相加：
        \[
        a(5)=4\cdot27=108。
        \]
        同一序列若有多組 00，會在不同固定位置各被計一次，正符合題意。`
      ]
    },
    "112B-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`畫布上三根平行電線桿的底座 \(A_1=(0,0)、A_2、A_3\) 在 \(L:x+3y=0\)，頂端 \(B_1=(0,3)、B_2、B_3\) 在 \(M:2x-3y+9=0\)。已知 \(A_3B_3=2A_1B_1\)，兩線交於消失點 \(P\)。若 \(\overrightarrow{PA_1}=k\overrightarrow{PA_3}\)，求 \(k\)。`,
      solution: [
        String.raw`聯立 \(L、M\) 得
        \[
        P=(-3,1)。
        \]
        又 \(A_3B_3=6\)，可得 \(A_3=(3,-1)\)。`,
        String.raw`因此
        \[
        \overrightarrow{PA_1}=(3,-1),\qquad
        \overrightarrow{PA_3}=(6,-2)=2\overrightarrow{PA_1}，
        \]
        所以 \(k=\frac12\)。`
      ]
    },
    "112B-19": {
      verified: true, sourcePage: 6,
      stem: "承第 18 題，求消失點 P 與第三根電線桿頂端 \(B_3\) 的坐標。",
      solution: [
        String.raw`聯立
        \[
        \begin{cases}
        x+3y=0,\\
        2x-3y+9=0
        \end{cases}
        \]
        得 \(P=(-3,1)\)。`,
        String.raw`因 \(\overrightarrow{PA_3}=2\overrightarrow{PA_1}\)，\(A_1\) 是 \(P、A_3\) 中點，所以 \(A_3=(3,-1)\)。又 \(A_3B_3=2A_1B_1=6\)，電線桿平行 \(y\) 軸，故
        \[
        B_3=(3,5)。
        \]`
      ]
    },
    "112B-20": {
      verified: true, sourcePage: 6,
      stem: "承前題，中間電線桿上的蜜蜂距底座與頂端之比為 \(1:2\)。在畫布線段 \(A_2B_2\) 上對應點為 Q，且 \(A_2Q:QB_2=1:2\)。求 Q 坐標。",
      solution: [
        String.raw`透視交叉線 \(A_1B_3、A_3B_1\) 的交點在 \(A_2B_2\) 上。由相似三角形可得
        \[
        A_1A_2:A_2A_3=1:2，
        \]
        故 \(A_2=(1,-1/3)\)。同理 \(B_2=(1,11/3)\)。`,
        String.raw`由內分公式及 \(A_2Q:QB_2=1:2\)，
        \[
        Q=\frac23A_2+\frac13B_2=(1,1)。
        \]`
      ]
    }
  });
})();

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

(() => {
  Object.assign(window.MATH_CONTENT, {
    "109M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知兩個直角三角形的三邊長分別為 \(3,4,5\) 與 \(5,12,13\)。角 \(\alpha\) 的對邊長為 3、斜邊長為 5；角 \(\beta\) 的對邊長為 5、斜邊長為 13。選出正確敘述。`,
      options: {
        "1": String.raw`\(\sin\alpha>\sin\beta>\sin30^\circ\)`,
        "2": String.raw`\(\sin\alpha>\sin30^\circ>\sin\beta\)`,
        "3": String.raw`\(\sin\beta>\sin\alpha>\sin30^\circ\)`,
        "4": String.raw`\(\sin\beta>\sin30^\circ>\sin\alpha\)`,
        "5": String.raw`\(\sin30^\circ>\sin\alpha>\sin\beta\)`
      },
      solution: [
        String.raw`\(\sin\alpha=\frac35、\sin\beta=\frac5{13}\)，而 \(\sin30^\circ=\frac12\)。`,
        String.raw`因此 \(\frac35>\frac12>\frac5{13}\)，即 \(\sin\alpha>\sin30^\circ>\sin\beta\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(\sin\beta=\frac5{13}<\frac12\)，不在 \(\sin30^\circ\) 之上。`,
        "2": "依三個正弦值直接比較，次序正確。",
        "3": String.raw`\(\sin\beta\) 小於另外兩者。`,
        "4": String.raw`\(\sin\beta<\sin30^\circ<\sin\alpha\)，次序恰好相反。`,
        "5": String.raw`\(\sin\alpha=\frac35>\frac12\)。`
      }
    },
    "109M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`空間中有相異四點 \(A,B,C,D\)，且
      \[
      \overrightarrow{AB}\cdot\overrightarrow{AC}
      =\overrightarrow{AB}\cdot\overrightarrow{AD}。
      \]
      選出正確敘述。`,
      options: {
        "1": String.raw`\(\overrightarrow{AB}\cdot\overrightarrow{CD}=0\)`,
        "2": String.raw`\(AC=AD\)`,
        "3": String.raw`\(\overrightarrow{AB}\) 與 \(\overrightarrow{CD}\) 平行`,
        "4": String.raw`\(\overrightarrow{AD}\cdot\overrightarrow{BC}=0\)`,
        "5": String.raw`\(A,B,C,D\) 四點在同一平面上`
      },
      solution: [
        String.raw`移項得
        \[
        \overrightarrow{AB}\cdot
        (\overrightarrow{AC}-\overrightarrow{AD})=0。
        \]`,
        String.raw`又 \(\overrightarrow{AC}-\overrightarrow{AD}=\overrightarrow{DC}\)，所以 \(\overrightarrow{AB}\perp\overrightarrow{CD}\)。`
      ],
      optionAnalysis: {
        "1": "由內積等式移項即可得到。",
        "2": "內積相等不代表兩向量長度相等。",
        "3": "題設推出垂直，不是平行。",
        "4": "題設沒有給出 AD 與 BC 的垂直關係。",
        "5": "空間中四點不一定共平面。"
      }
    },
    "109M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`正六邊形 \(ABCDEF\) 的中心為 \(O\)。下列哪個向量的終點 \(P\) 落在三角形 \(ODE\) 內部（不含邊界）？`,
      options: {
        "1": String.raw`\(\overrightarrow{OP}=\overrightarrow{OC}+\overrightarrow{OE}\)`,
        "2": String.raw`\(\overrightarrow{OP}=\frac14\overrightarrow{OC}+\frac12\overrightarrow{OE}\)`,
        "3": String.raw`\(\overrightarrow{OP}=-\frac14\overrightarrow{OC}+\frac12\overrightarrow{OE}\)`,
        "4": String.raw`\(\overrightarrow{OP}=\frac14\overrightarrow{OC}-\frac12\overrightarrow{OE}\)`,
        "5": String.raw`\(\overrightarrow{OP}=-\frac14\overrightarrow{OC}-\frac12\overrightarrow{OE}\)`
      },
      solution: [
        String.raw`以 O 為原點、正六邊形外接圓半徑為 1，可取 \(C=(1,0)、D=(1/2,\sqrt3/2)、E=(-1/2,\sqrt3/2)\)。`,
        String.raw`選項（2）給
        \[
        P=\frac14C+\frac12E=\left(0,\frac{\sqrt3}{4}\right)，
        \]
        位於三角形 \(ODE\) 的內部。其餘各點不是落在邊界，就是位於三角形外。`
      ],
      optionAnalysis: {
        "1": "向量和的終點超出三角形 ODE。",
        "2": String.raw`座標為 \((0,\sqrt3/4)\)，位於內部。`,
        "3": "終點位於三角形左側外部。",
        "4": "縱坐標為負，位於三角形下方。",
        "5": "縱坐標為負，位於三角形下方。"
      }
    },
    "109M-4": {
      verified: true, sourcePage: 2,
      stem: String.raw`令
      \[
      I=\begin{bmatrix}1&0\\0&1\end{bmatrix},\qquad
      A=\begin{bmatrix}1&1\\3&4\end{bmatrix},\qquad
      B=I+A+A^{-1}。
      \]
      選出代表 \(BA\) 的矩陣。`,
      options: {
        "1": String.raw`\(\begin{bmatrix}1&0\\0&1\end{bmatrix}\)`,
        "2": String.raw`\(\begin{bmatrix}6&0\\0&6\end{bmatrix}\)`,
        "3": String.raw`\(\begin{bmatrix}4&-1\\-3&1\end{bmatrix}\)`,
        "4": String.raw`\(\begin{bmatrix}1&1\\3&4\end{bmatrix}\)`,
        "5": String.raw`\(\begin{bmatrix}6&6\\18&24\end{bmatrix}\)`
      },
      solution: [
        String.raw`直接右乘 \(A\)：
        \[
        BA=(I+A+A^{-1})A=A+A^2+I。
        \]`,
        String.raw`因
        \[
        A^2=\begin{bmatrix}4&5\\15&19\end{bmatrix},
        \]
        故 \(BA=\begin{bmatrix}6&6\\18&24\end{bmatrix}\)。`
      ],
      optionAnalysis: {
        "1": String.raw`只保留了 \(A^{-1}A=I\)。`,
        "2": "誤把結果當成純量矩陣。",
        "3": String.raw`這是 \(A^{-1}\)，不是 \(BA\)。`,
        "4": "只保留了 A 本身。",
        "5": String.raw`由 \(BA=A+A^2+I\) 計算可得。`
      }
    },
    "109M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`數線上有多少個整數點與點 \(\sqrt{101}\) 的距離小於 5，但與點 \(\sqrt{38}\) 的距離大於 3？`,
      options: { "1": "1 個", "2": "4 個", "3": "6 個", "4": "8 個", "5": "10 個" },
      solution: [
        String.raw`由 \(|x-\sqrt{101}|<5\)，且 \(10<\sqrt{101}<11\)，可得整數 \(x=6,7,\ldots,15\)。`,
        String.raw`又 \(6<\sqrt{38}<7\)。條件 \(|x-\sqrt{38}|>3\) 排除 \(6,7,8,9\)，留下 \(10,11,\ldots,15\)，共 6 個。`
      ],
      optionAnalysis: {
        "1": "只計入單一端點附近的整數。",
        "2": "排除範圍多算了兩個整數。",
        "3": "符合條件的是 10 至 15，共 6 個。",
        "4": String.raw`未完整套用與 \(\sqrt{38}\) 距離大於 3 的限制。`,
        "5": "只使用第一個距離條件。"
      }
    },
    "109M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`連續投擲一顆公正骰子兩次，點數依序為 \(a,b\)。求
      \[
      \log(a^2)+\log b>1
      \]
      的機率。`,
      options: {
        "1": String.raw`\(\frac13\)`, "2": String.raw`\(\frac12\)`,
        "3": String.raw`\(\frac23\)`, "4": String.raw`\(\frac34\)`,
        "5": String.raw`\(\frac56\)`
      },
      solution: [
        String.raw`由對數性質，
        \[
        \log(a^2b)>1\Longleftrightarrow a^2b>10。
        \]`,
        String.raw`按 \(a=1,\ldots,6\) 計數，符合的 \(b\) 個數依序為 \(0,4,5,6,6,6\)，共 27 組。機率為 \(\frac{27}{36}=\frac34\)。`
      ],
      optionAnalysis: {
        "1": "符合組數不只 12 組。",
        "2": "漏計較大 a 時所有 b 都符合的情況。",
        "3": "符合組數為 27，不是 24。",
        "4": "27 組除以全部 36 組，得到 3/4。",
        "5": String.raw`把部分不符合 \(a^2b>10\) 的組合也計入。`
      }
    },
    "109M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`函數 \(y=-\sqrt3x^3\) 的圖形上有兩點 \(P,Q\)，到原點的距離都為 1。已知 \(P=(\cos\theta,\sin\theta)\)，求 \(Q\) 的坐標。`,
      options: {
        "1": String.raw`\((\cos(-\theta),\sin(-\theta))\)`,
        "2": String.raw`\((-\cos\theta,\sin\theta)\)`,
        "3": String.raw`\((\cos(-\theta),-\sin\theta)\)`,
        "4": String.raw`\((-\cos\theta,\sin(-\theta))\)`,
        "5": String.raw`\((\cos\theta,-\sin\theta)\)`
      },
      solution: [
        String.raw`函數 \(f(x)=-\sqrt3x^3\) 是奇函數，圖形關於原點對稱。單位圓與圖形的兩個交點互為相反數。`,
        String.raw`所以
        \[
        Q=(-\cos\theta,-\sin\theta)=(-\cos\theta,\sin(-\theta))。
        \]`
      ],
      optionAnalysis: {
        "1": "只對角度取負，得到關於 x 軸的對稱點。",
        "2": "只改變 x 坐標符號。",
        "3": "等同於只改變 y 坐標符號。",
        "4": "兩個坐標都取相反數，符合原點對稱。",
        "5": "只改變 y 坐標符號。"
      }
    },
    "109M-8": {
      verified: true, sourcePage: 3,
      stem: "丟三顆公正骰子。三點數全為奇數或全為偶數時符合條件 A；三點數由小到大成等差數列時符合條件 B。只符合一個條件得 100 元，兩條件都符合得 200 元。已知其中兩顆點數為 1、3，且獎金為 100 元，未知點數可能為何？",
      options: { "1": "2", "2": "3", "3": "4", "4": "5", "5": "6" },
      solution: [
        "未知點數為 2 時，只有 B 成立；為 3 時，只有 A 成立；為 5 時，A、B 都成立而得 200 元。",
        "未知點數為 4 或 6 時，兩條件都不成立。因此恰得 100 元時，未知點數可能是 2 或 3。"
      ],
      optionAnalysis: {
        "1": "1、2、3 成等差，只符合 B，得 100 元。",
        "2": "1、3、3 全為奇數，只符合 A，得 100 元。",
        "3": "1、3、4 不符合 A 或 B。",
        "4": "1、3、5 同時符合 A、B，會得 200 元。",
        "5": "1、3、6 不符合 A 或 B。"
      }
    },
    "109M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`坐標平面上有通過原點的直線 \(L\)，以及以原點為圓心、半徑為 2 的圓 \(\Gamma\)。圓上相異兩點 \(P,Q\) 滿足 \(OP、OQ\) 分別與 \(L\) 所夾的銳角都是 \(30^\circ\)。選出 \(\overrightarrow{OP}\cdot\overrightarrow{OQ}\) 可能的值。`,
      options: {
        "1": String.raw`\(2\sqrt3\)`, "2": String.raw`\(-2\sqrt3\)`,
        "3": "0", "4": String.raw`\(-2\)`, "5": String.raw`\(-4\)`
      },
      solution: [
        String.raw`符合條件的射線分布在直線 L 的兩側與反向延長線兩側；相異兩向量的夾角可能為 \(60^\circ、120^\circ、180^\circ\)。`,
        String.raw`因兩向量長度都是 2，內積為 \(4\cos\phi\)，可能值為 \(2,-2,-4\)。選項中列出的可能值是 \(-2、-4\)。`
      ],
      optionAnalysis: {
        "1": String.raw`需要夾角 \(30^\circ\)，但兩射線夾角不會是 \(30^\circ\)。`,
        "2": String.raw`需要夾角 \(150^\circ\)，不在可能夾角中。`,
        "3": String.raw`需要夾角 \(90^\circ\)，不在可能夾角中。`,
        "4": String.raw`夾角 \(120^\circ\) 時，內積為 \(-2\)。`,
        "5": String.raw`兩向量反向、夾角 \(180^\circ\) 時，內積為 \(-4\)。`
      }
    },
    "109M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`考慮多項式
      \[
      f(x)=3x^4+11x^2-4。
      \]
      選出正確敘述。`,
      options: {
        "1": String.raw`\(y=f(x)\) 與 y 軸交點的 y 坐標小於 0`,
        "2": String.raw`\(f(x)=0\) 有 4 個實根`,
        "3": String.raw`\(f(x)=0\) 至少有一個有理根`,
        "4": String.raw`\(f(x)=0\) 有一根介於 0 與 1 之間`,
        "5": String.raw`\(f(x)=0\) 有一根介於 1 與 2 之間`
      },
      solution: [
        String.raw`令 \(u=x^2\)，則
        \[
        3u^2+11u-4=(3u-1)(u+4)。
        \]
        實根只有 \(x=\pm1/\sqrt3\)。`,
        String.raw`又 \(f(0)=-4<0\)，所以（1）正確；正根 \(1/\sqrt3\) 介於 0 與 1 之間，所以（4）正確。`
      ],
      optionAnalysis: {
        "1": String.raw`\(f(0)=-4<0\)。`,
        "2": String.raw`\(x^2=-4\) 沒有實根，因此只有 2 個實根。`,
        "3": String.raw`實根 \(\pm1/\sqrt3\) 都不是有理數。`,
        "4": String.raw`正根 \(1/\sqrt3\) 介於 0 與 1 之間。`,
        "5": "唯一正根小於 1。"
      }
    },
    "109M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`實數 \(a,b,c\) 滿足
      \[
      \log a=1.1,\qquad\log b=2.2,\qquad\log c=3.3。
      \]
      選出正確敘述。`,
      options: {
        "1": String.raw`\(a+c=2b\)`, "2": String.raw`\(1<a<10\)`,
        "3": String.raw`\(1000<c<2000\)`, "4": String.raw`\(b=2a\)`,
        "5": String.raw`\(a,b,c\) 成等比數列`
      },
      solution: [
        String.raw`由 \(\log c=3.3\)，得 \(c=10^{3.3}=1000\cdot10^{0.3}\)。因 \(10^{0.3}\) 約為 2，故 \(1000<c<2000\)。`,
        String.raw`又 \(\log b-\log a=\log c-\log b=1.1\)，所以 \(b/a=c/b\)，即 \(a,b,c\) 成等比數列。`
      ],
      optionAnalysis: {
        "1": "等比數列一般不滿足首末兩項和等於中項兩倍。",
        "2": String.raw`\(\log a=1.1>1\)，所以 \(a>10\)。`,
        "3": String.raw`\(c=10^{3.3}\) 介於 1000 與 2000。`,
        "4": String.raw`\(b/a=10^{1.1}\)，不是 2。`,
        "5": "相鄰兩項的常用對數差相同，因此成等比。"
      }
    },
    "109M-12": {
      verified: true, sourcePage: 4,
      stem: `下表為某國 2011～2018 年就業資料（總就業、農業就業以萬人計；男性農業就業及各年齡層以千人計）：
      2011：1070.9、54.2、386.3；39 歲以下 67.6、40～49 歲 85.4、50～64 歲 164.2、65 歲以上 69.1
      2012：1086.0、54.4、394.9；67.5、87.0、169.5、70.9
      2013：1096.7、54.4、391.5；66.6、83.9、171.3、69.7
      2014：1107.9、54.8、391.2；65.8、79.8、173.0、72.6
      2015：1119.8、55.5、403.1；71.7、76.9、181.3、73.2
      2016：1126.7、55.7、404.5；77.4、77.4、176.4、73.3
      2017：1135.2、55.7、405.1；73.9、78.1、178.3、74.8
      2018：1143.4、56.1、415.1；72.0、78.8、184.9、79.4
      根據表格選出正確敘述。`,
      options: {
        "1": "2013～2018 年，65 歲以上男性農業就業人口逐年遞增",
        "2": "2013～2018 年，50～64 歲男性農業就業人口逐年遞增",
        "3": "每年男性農業就業人口占總就業人口的比率都小於 5%",
        "4": "每年 50～64 歲男性農業就業人口都少於 49 歲以下男性農業就業人口",
        "5": "65 歲以上男性農業就業人口，2018 年比 2011 年增加不到一萬人"
      },
      solution: [
        "65 歲以上欄從 2013 年的 69.7 依序增為 72.6、73.2、73.3、74.8、79.4，故（1）正確；50～64 歲欄在 2016 年下降，故（2）錯。",
        "男性農業就業人口以千人計，而總就業人口以萬人計；換成同單位後逐年比率皆小於 5%，故（3）正確。",
        "50～64 歲人數每年都高於 49 歲以下兩組合計；2018 與 2011 的 65 歲以上差為 10.3 千人，超過一萬人，所以（4）、（5）錯。"
      ],
      optionAnalysis: {
        "1": "69.7、72.6、73.2、73.3、74.8、79.4，逐年遞增。",
        "2": "2015 年 181.3，2016 年降為 176.4。",
        "3": "換成相同單位後，各年比率皆未達 5%。",
        "4": "50～64 歲欄反而高於 39 歲以下與 40～49 歲兩欄合計。",
        "5": "增加 10.3 千人，即 1.03 萬人。"
      }
    },
    "109M-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`四面體 \(OABC\) 中，三角形 \(OAB\) 與 \(OAC\) 均為正三角形，且 \(\angle BOC=30^\circ\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(BC>OC\)`,
        "2": String.raw`三角形 \(OBC\) 是等腰三角形`,
        "3": String.raw`三角形 \(OBC\) 的面積大於三角形 \(OAB\) 的面積`,
        "4": String.raw`\(\angle CAB=30^\circ\)`,
        "5": String.raw`平面 OAB 與平面 OAC 的夾角（以銳角計）小於 \(30^\circ\)`
      },
      solution: [
        String.raw`兩個正三角形共有 OA，故 \(OB=OA=OC\)，所以三角形 OBC 是等腰三角形。`,
        String.raw`令共同邊長為 1。由 \(\angle BOC=30^\circ\)，得
        \[
        \overrightarrow{AB}\cdot\overrightarrow{AC}
        =(\overrightarrow{OB}-\overrightarrow{OA})\cdot
        (\overrightarrow{OC}-\overrightarrow{OA})
        =\frac{\sqrt3}{2}。
        \]
        又 \(AB=AC=1\)，因此 \(\angle CAB=30^\circ\)。`
      ],
      optionAnalysis: {
        "1": String.raw`\(BC=2\,OC\sin15^\circ<OC\)。`,
        "2": String.raw`由 \(OB=OC\) 可知是等腰三角形。`,
        "3": String.raw`兩者面積分別為 \(\frac12s^2\sin30^\circ\) 與 \(\frac12s^2\sin60^\circ\)，前者較小。`,
        "4": String.raw`由向量內積可得 \(\cos\angle CAB=\sqrt3/2\)。`,
        "5": "由兩平面的法向量或二面角計算，夾角並非小於 30°。"
      }
    },
    "109M-14": {
      verified: true, sourcePage: 5,
      stem: "網路賣家以 200 元成本取得模型，先以成本的 5 倍定價；之後每次調降售價，都把當時的利潤減少一半。求調降三次後的售價。",
      solution: [
        String.raw`原售價為 \(200\times5=1000\) 元，所以原利潤為 800 元。`,
        String.raw`利潤連續減半三次後為 \(800/2^3=100\) 元，售價為成本加利潤，即 300 元。`
      ]
    },
    "109M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`按鈕遊戲機可按三次。第一次出現黑、白的機率各為 \(\frac12\)；第二、三次出現與前一次同色的機率為 \(\frac13\)，不同色為 \(\frac23\)。求三次均同色的機率。`,
      solution: [
        "第一次不論出現哪一色都可以；要三次同色，第二次與第三次都必須和前一次同色。",
        String.raw`所求機率為
        \[
        1\cdot\frac13\cdot\frac13=\frac19。
        \]`
      ]
    },
    "109M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`直線 \(2x+y=10\) 被平行線 \(x-2y+15=0\) 與 \(x-2y=0\) 截出線段 \(S\)（含端點）。若直線 \(3x-y=c\) 與 \(S\) 有交點，求 \(c\) 的最小值。`,
      solution: [
        String.raw`兩個端點分別由聯立方程得到 \((1,8)\) 與 \((4,2)\)。`,
        String.raw`線性函數 \(3x-y\) 在線段上的最小值必在端點取得。兩端值為 \(-5、10\)，所以最小值是 \(-5\)。`
      ]
    },
    "109M-17": {
      verified: true, sourcePage: 6,
      stem: String.raw`平面上有箏形 \(ABCD\)，其中
      \[
      AB=BC=\sqrt2,\qquad AD=CD=2,\qquad\angle BAD=135^\circ。
      \]
      求 \(AC\)。`,
      solution: [
        String.raw`在三角形 ABD 中，由餘弦定理
        \[
        BD^2=(\sqrt2)^2+2^2-2(\sqrt2)(2)\cos135^\circ=10。
        \]`,
        String.raw`箏形的對稱軸 BD 垂直平分 AC。三角形 ABD 面積為 \(\frac12(\sqrt2)(2)\sin135^\circ=1\)，所以 A 到 BD 的高為 \(2/\sqrt{10}\)。`,
        String.raw`因此 \(AC\) 為高的 2 倍：
        \[
        AC=\frac4{\sqrt{10}}=\frac{2\sqrt{10}}5。
        \]`
      ]
    },
    "109M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`空間中有 \(A(1,7,2)、B(2,-6,3)、C(0,-4,1)\)。直線 \(L\) 通過 A，與直線 BC 相交且垂直。求交點坐標。`,
      solution: [
        String.raw`設垂足 \(H=B+t(C-B)\)。其中
        \[
        C-B=(-2,2,-2)。
        \]`,
        String.raw`由 \((A-H)\cdot(C-B)=0\) 解得 \(t=\frac52\)。因此
        \[
        H=(2,-6,3)+\frac52(-2,2,-2)=(-3,-1,-2)。
        \]`
      ]
    },
    "109M-19": {
      verified: true, sourcePage: 6,
      stem: "拋物線上四點構成等腰梯形，梯形與拋物線的對稱軸重合。上底長 4、下底長 6、高 14，求拋物線的焦距。",
      solution: [
        String.raw`設拋物線為 \(y=ax^2\)。上下底端點的橫坐標絕對值分別為 2、3，因此兩底高度差
        \[
        14=a(3^2-2^2)=5a，
        \]
        得 \(a=14/5\)。`,
        String.raw`標準式 \(x^2=4py\) 給 \(a=1/(4p)\)，所以
        \[
        p=\frac1{4a}=\frac5{56}。
        \]`
      ]
    },
    "109M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`月亮形灰色區域由兩段共端點 \(Q,T\) 的圓弧圍成。外弧是以 \(QT\) 為直徑的半圓，\(QT=2\sqrt3\)；內弧的圓心為 P，且 \(PQ=PT=2\)。若灰色區域面積為 \(a\pi+\sqrt b\)，其中 \(a\) 為有理數、\(b\) 為整數，求 \(a,b\)。`,
      solution: [
        String.raw`半圓半徑為 \(\sqrt3\)，面積為 \(\frac{3\pi}{2}\)。在半徑 2 的圓中，弦 \(QT=2\sqrt3\) 所對圓心角為 \(120^\circ\)。`,
        String.raw`內側弓形面積為扇形減三角形：
        \[
        \frac{120^\circ}{360^\circ}\pi(2)^2
        -\frac12(2)(2)\sin120^\circ
        =\frac{4\pi}{3}-\sqrt3。
        \]`,
        String.raw`灰色面積
        \[
        \frac{3\pi}{2}-\left(\frac{4\pi}{3}-\sqrt3\right)
        =\frac{\pi}{6}+\sqrt3，
        \]
        所以 \(a=\frac16、b=3\)。`
      ]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "108M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`點 \(A=(1,0)\) 在單位圓 \(\Gamma:x^2+y^2=1\) 上。圓上除 A 以外，還有幾個點到直線 \(L:y=2x\) 的距離等於 A 到 L 的距離？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: [String.raw`A 到 L 的距離為 \(2/\sqrt5\)。與 L 距離相同的兩條平行線為 \(2x-y=\pm2\)，它們與單位圓各有兩個交點。`, "四個交點中包含 A，所以除 A 外還有 3 個。"],
      optionAnalysis: { "1": "漏計另一條平行線的交點。", "2": "只計一條割線的兩個交點。", "3": "兩條割線共四點，扣除 A 後為 3 點。", "4": "沒有扣除題目指定排除的 A。", "5": "兩條等距平行線都與圓相交。" }
    },
    "108M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`下列哪個選項是方程式 \(x^3-x^2+4x-4=0\) 的解？其中 \(i=\sqrt{-1}\)。`,
      options: { "1": String.raw`\(-2i\)`, "2": String.raw`\(-i\)`, "3": String.raw`\(i\)`, "4": "2", "5": "4" },
      solution: [String.raw`分組因式分解：
      \[
      x^3-x^2+4x-4=(x-1)(x^2+4)。
      \]`, String.raw`根為 \(1、2i、-2i\)，選項中只有 \(-2i\)。`],
      optionAnalysis: { "1": "代入可使 \(x^2+4=0\)。", "2": String.raw`\((-i)^2+4=3\neq0\)。`, "3": String.raw`\(i^2+4=3\neq0\)。`, "4": "代入原式不為零。", "5": "代入原式不為零。" }
    },
    "108M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`共有多少組正整數 \((k,m,n)\) 滿足 \(2^k4^m8^n=512\)？`,
      options: { "1": "1 組", "2": "2 組", "3": "3 組", "4": "4 組", "5": "0 組" },
      solution: [String.raw`化為同底數得 \(k+2m+3n=9\)。`, String.raw`當 \(n=1\) 有 \((k,m)=(4,1),(2,2)\)；當 \(n=2\) 有 \((k,m)=(1,1)\)，共 3 組。`],
      optionAnalysis: { "1": "漏掉同一 n 下的另一組。", "2": "漏掉 n=2 的解。", "3": "三組正整數解如解析所列。", "4": "把零也當成正整數。", "5": "至少有三組可直接驗證。" }
    },
    "108M-4": {
      verified: true, sourcePage: 1,
      stem: "豬、雞、牛三種肉類與白菜、豆腐、香菇三種素類要全部做成三道菜；每種食材只用一次，每道菜至少有一種肉。食材共有幾種分配方法？",
      options: { "1": "3", "2": "6", "3": "9", "4": "18", "5": "27" },
      solution: ["三道菜各至少一種肉，而恰有三種肉，所以每道菜各以一種肉作為區別。", String.raw`三種素料各自可分到三道菜之一，共 \(3^3=27\) 種。`],
      optionAnalysis: { "1": "只分配一種素料。", "2": "誤用排列計算。", "3": "只計兩種素料的分配。", "4": "多加了不必要的限制。", "5": "三種素料各有三個獨立去向。" }
    },
    "108M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`正實數 b 滿足 \((\log100)(\log b)+\log100+\log b=7\)。選出 b 所在的正確範圍。`,
      options: { "1": String.raw`\(1\le b\le\sqrt{10}\)`, "2": String.raw`\(\sqrt{10}\le b\le10\)`, "3": String.raw`\(10\le b\le10\sqrt{10}\)`, "4": String.raw`\(10\sqrt{10}\le b\le100\)`, "5": String.raw`\(100\le b\le100\sqrt{10}\)` },
      solution: [String.raw`令 \(x=\log b\)。因 \(\log100=2\)，方程成 \(2x+2+x=7\)，故 \(x=5/3\)。`, String.raw`因此 \(b=10^{5/3}\)，而 \(10^{3/2}=10\sqrt{10}<b<10^2=100\)。`],
      optionAnalysis: { "1": "此區間的常用對數至多 1/2。", "2": "此區間的常用對數至多 1。", "3": "上界的常用對數是 3/2，小於 5/3。", "4": "5/3 介於 3/2 與 2。", "5": "b 小於 100。" }
    },
    "108M-6": {
      verified: true, sourcePage: 2,
      stem: "平均氣溫 11、13、15、17、19、21°C 時，咖啡平均售出量依序為 512、437、361、279、203、135 杯，兩者相關係數為 -0.99。推測氣溫 8°C 時的售出量最接近何者？",
      options: { "1": "570 杯", "2": "625 杯", "3": "700 杯", "4": "755 杯", "5": "800 杯" },
      solution: ["資料近似高度負線性，每升高 2°C 約少 75～80 杯，即每 1°C 約少 38 杯。", "從 11°C 的 512 杯向下外推到 8°C，約增加 114 杯，得到約 626 杯，最接近 625 杯。"],
      optionAnalysis: { "1": "外推增量太小。", "2": "依近似線性趨勢約為 626 杯。", "3": "高估低溫帶來的增量。", "4": "高估外推斜率。", "5": "與表中近似線性趨勢不符。" }
    },
    "108M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`實數等差數列 \(a_n\) 的公差為正實數 \(\alpha\)。選出正確敘述。`,
      options: { "1": String.raw`若 \(b_n=-a_n\)，則 \(b_1>b_2>b_3>\cdots\)`, "2": String.raw`若 \(c_n=a_n^2\)，則 \(c_1<c_2<c_3<\cdots\)`, "3": String.raw`若 \(d_n=a_n+a_{n+1}\)，則 \(d_n\) 的公差為 \(\alpha\)`, "4": String.raw`若 \(e_n=a_n+n\)，則 \(e_n\) 的公差為 \(\alpha+1\)`, "5": String.raw`若 \(f_n\) 是 \(a_1,\ldots,a_n\) 的平均數，則 \(f_n\) 的公差為 \(\alpha\)` },
      solution: [String.raw`取負後公差為 \(-\alpha\)，所以 \(b_n\) 遞減；\(e_{n+1}-e_n=\alpha+1\)。`, String.raw`平方不必遞增；\(d_n\) 公差為 \(2\alpha\)；\(f_n=(a_1+a_n)/2\) 的公差為 \(\alpha/2\)。`],
      optionAnalysis: { "1": "取負使數列嚴格遞減。", "2": "若項為負且接近零，平方可能遞減。", "3": "實際公差為 2α。", "4": "相鄰差為 α+1。", "5": "實際公差為 α/2。" }
    },
    "108M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`甲從數線 \(-8\) 出發、乙從 10 出發等速運動；乙速率是甲的 \(a>1\) 倍。選出正確敘述。`,
      options: { "1": "甲向負、乙向正，兩人會相遇", "2": "兩人都向負，兩人不會相遇", "3": "甲向正、乙向負，乙先到原點", "4": "兩人都向正，距離越來越大", "5": String.raw`甲向正、乙向負且在 \(-2\) 相遇，則 \(a=2\)` },
      solution: ["同向向正時乙在前且速率較快，距離增加，故（4）正確。", "在 -2 相遇時，甲走 6、乙走 12；時間相同，速率比為 2，故（5）正確。"],
      optionAnalysis: { "1": "兩人背向而行，不會相遇。", "2": "乙在後方但較快，會追上甲。", "3": "乙是否先到原點還要看 a 是否大於 5/4。", "4": "乙在前且較快，距離增加。", "5": "路程比 12:6 等於速率比。" }
    },
    "108M-9": {
      verified: true, sourcePage: 3,
      stem: "從 1～7 中隨機任取兩個相異數，選出正確敘述。",
      options: { "1": String.raw`和大於 10 的機率為 \(\frac17\)`, "2": String.raw`和小於 5 的機率為 \(\frac17\)`, "3": String.raw`和為奇數的機率為 \(\frac47\)`, "4": String.raw`差為偶數的機率為 \(\frac57\)`, "5": String.raw`積為奇數的機率為 \(\frac27\)` },
      solution: [String.raw`全部有 \(\binom72=21\) 組。奇偶各取一數有 \(4\cdot3=12\) 組，所以和為奇數的機率 \(12/21=4/7\)。`, String.raw`兩數皆奇有 \(\binom42=6\) 組，所以積為奇數的機率 \(6/21=2/7\)。`],
      optionAnalysis: { "1": "和大於 10 有 4 組，機率 4/21。", "2": "和小於 5 有 2 組，機率 2/21。", "3": "一奇一偶共 12 組。", "4": "同奇偶共 9 組，機率 3/7。", "5": "兩數皆奇共 6 組。" }
    },
    "108M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`三角形 ABC 滿足 \(50^\circ\le A<B\le60^\circ\)。選出正確敘述。`,
      options: { "1": String.raw`\(\sin A<\sin B\)`, "2": String.raw`\(\sin B<\sin C\)`, "3": String.raw`\(\cos A<\cos B\)`, "4": String.raw`\(\sin C<\cos C\)`, "5": String.raw`\(AB<BC\)` },
      solution: [String.raw`A、B 都是銳角且 \(A<B\)，故 \(\sin A<\sin B\)。又 \(A+B<120^\circ\)，所以 \(C>60^\circ\ge B\)，得 \(\sin B<\sin C\)。`, "餘弦在銳角遞減；且 C>A，所以其對邊 AB 大於 BC。"],
      optionAnalysis: { "1": "正弦在此銳角區間遞增。", "2": "C 大於 B 且均不超過 90°。", "3": "應為 cos A>cos B。", "4": "C>60°，故 sin C>cos C。", "5": "C>A，所以 AB>BC。" }
    },
    "108M-11": {
      verified: true, sourcePage: 4,
      stem: "訪問 500 人：50～59 歲 220 人、60 歲以上 280 人；做過篩檢者 120 人，其中一年前 75 人、一年內 45 人。60 歲以上篩檢率是 50～59 歲的 3.5 倍。選出正確敘述。",
      options: { "1": "60 歲以上者超過 60%", "2": "隨機抽兩人皆為 50～59 歲的機率大於 0.25", "3": String.raw`從做過篩檢者抽兩人，恰一人在一年內、另一人在一年前的機率為 \(2(\frac{45}{120})(\frac{75}{119})\)`, "4": "未做過篩檢的比率低於 75%", "5": "60 歲以上做過篩檢者超過 90 人" },
      solution: [String.raw`設 50～59 歲篩檢率為 r，則 \(220r+280(3.5r)=120\)，得 \(r=0.1\)，60 歲以上篩檢者為 98 人。`, "不分順序抽到一位一年內、一位一年前，須把兩種順序相加，故（3）也正確。"],
      optionAnalysis: { "1": "280/500=56%。", "2": "約為 0.193，小於 0.25。", "3": "兩種抽取順序機率相同，故乘 2。", "4": "未篩檢者 380/500=76%。", "5": "解聯立關係得 98 人。" }
    },
    "108M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`實係數三次式 \(f_1,f_2\) 除以實係數二次式 \(g\) 的餘式分別為 \(r_1,r_2\)。選出正確敘述。`,
      options: { "1": String.raw`\(-f_1\) 除以 g 的餘式為 \(-r_1\)`, "2": String.raw`\(f_1+f_2\) 除以 g 的餘式為 \(r_1+r_2\)`, "3": String.raw`\(f_1f_2\) 除以 g 的餘式為 \(r_1r_2\)`, "4": String.raw`\(f_1\) 除以 \(-3g\) 的餘式為 \(-r_1/3\)`, "5": String.raw`\(f_1r_2-f_2r_1\) 可被 g 整除` },
      solution: [String.raw`寫成 \(f_i=q_ig+r_i\)。取負與相加都保留相應餘式，故（1）、（2）正確。`, String.raw`\(f_1r_2-f_2r_1=g(q_1r_2-q_2r_1)\)，故（5）正確。乘積餘式仍須再除以 g；把除式乘常數不改變餘式。`],
      optionAnalysis: { "1": "由多項式除法等式取負可得。", "2": "兩個除法等式相加可得。", "3": "r₁r₂ 可能仍為二次式，還須再取餘式。", "4": "除式縮放只改變商，不改變餘式。", "5": "代入除法等式後可提出因式 g。" }
    },
    "108M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`坐標空間的平面 P 通過 \((0,0,0),(1,2,3),(-1,2,3)\)。選出正確敘述。`,
      options: { "1": "向量 (0,3,2) 與 P 垂直", "2": "P 與 xy 平面垂直", "3": "點 (0,4,6) 在 P 上", "4": "P 包含 x 軸", "5": "點 (1,1,1) 到 P 的距離是 1" },
      solution: [String.raw`兩生成向量相減得 \((2,0,0)\)，故 P 包含 x 軸；相加得 \((0,4,6)\)，該點也在 P 上。`, String.raw`平面方程可寫成 \(3y-2z=0\)，法向量為 \((0,3,-2)\)。`],
      optionAnalysis: { "1": "正確法向量的 z 分量為 -2。", "2": "兩平面法向量內積不為 0。", "3": "滿足 3y-2z=0。", "4": "兩已知向量之差沿 x 軸。", "5": String.raw`距離為 \(1/\sqrt{13}\)。` }
    },
    "108M-14": { verified: true, sourcePage: 5, stem: String.raw`實數 x,y 滿足 \(\begin{bmatrix}3&-1&3\\2&4&-1\end{bmatrix}\begin{bmatrix}x\\y\\1\end{bmatrix}=\begin{bmatrix}6\\-6\end{bmatrix}\)。求 \(x+3y\)。`, solution: [String.raw`聯立得 \(3x-y=3、2x+4y=-5\)，解得 \(x=\frac12、y=-\frac32\)。故 \(x+3y=-4\)。`] },
    "108M-15": { verified: true, sourcePage: 5, stem: String.raw`橢圓 \(\frac{x^2}{a^2}+\frac{y^2}{16}=1\) 的四個頂點所成四邊形面積為 58，求 a。`, solution: [String.raw`兩對角線長為 \(2a、8\)，面積為 \(\frac12(2a)(8)=8a=58\)，故 \(a=\frac{29}{4}\)。`] },
    "108M-16": { verified: true, sourcePage: 5, stem: "90×60 公尺足球場外圍要鋪內圈長 400 公尺的跑道，左右為同直徑半圓、上下為直線且平行長邊。求一條直線跑道長度的最大可能整數值。", solution: [String.raw`半圓直徑至少 60。令直線段長 L，則 \(2L+60\pi\le400\)，所以 \(L\le(400-60\pi)/2\approx105.74\)。最大整數為 105。`] },
    "108M-17": { verified: true, sourcePage: 5, stem: "甲、乙、丙三案領票人數為 765、537、648；三案都領者 224 人，且每人至少領兩張。求只領甲、乙而未領丙者人數。", solution: [String.raw`設只領甲乙、甲丙、乙丙者為 x,y,z，則 \(x+y=541、x+z=313、y+z=424\)。相加前兩式減第三式得 \(2x=430\)，故 \(x=215\)。`] },
    "108M-18": { verified: true, sourcePage: 6, stem: String.raw`三角形 ABC 中，AD 交 BC 於 D，BE 交 AD 於 E，且 \(\angle ACB=30^\circ、\angle EDB=60^\circ、\angle AEB=120^\circ\)。若 \(CD=15、ED=7\)，求 AB。`, solution: [String.raw`令 \(D=(0,0)\)、AD 為 x 軸正向。由 \(ED=7\) 得 \(E=(7,0)\)。取 DB 與 x 軸夾 \(60^\circ\)，則 \(C=(-15/2,-15\sqrt3/2)\)。`, String.raw`由 \(\angle ACB=30^\circ\) 得 \(A=(15,0)\)；再由 \(\angle AEB=120^\circ\) 與 B 在 DB 上，得 \(B=(7/2,7\sqrt3/2)\)。`, String.raw`所以
    \[
    AB=\sqrt{\left(15-\frac72\right)^2+\left(\frac{7\sqrt3}{2}\right)^2}=13。
    \]`] },
    "108M-19": { verified: true, sourcePage: 6, stem: "正立方體有一頂點在 z=0 平面、另一頂點在 z=6 平面。求邊長的最小可能值。", solution: [String.raw`邊長為 s 時，任兩頂點的垂直高差至多為 \(s\sqrt3\)，因三條互相垂直邊的 z 分量絕對值和至多為 \(\sqrt3s\)。`, String.raw`要達高差 6，需 \(s\ge6/\sqrt3=2\sqrt3\)，且三邊等角傾斜時可達，故最小值為 \(2\sqrt3\)。`] },
    "108M-20": { verified: true, sourcePage: 6, stem: String.raw`平面四點 A,B,C,D 滿足 \(\overrightarrow{BC}=\overrightarrow{AB}+\overrightarrow{AD}\)，且 \(\overrightarrow{AC}、\overrightarrow{BD}\) 等長並互相垂直。求 \(\tan\angle BAD\)。`, solution: [String.raw`令 A 為原點、\(\vec b=\overrightarrow{AB}、\vec d=\overrightarrow{AD}\)，則 \(\overrightarrow{AC}=2\vec b+\vec d、\overrightarrow{BD}=\vec d-\vec b\)。`, String.raw`由等長與垂直條件得 \(\vec b\cdot\vec d=-|\vec b|^2/2、|\vec d|^2=5|\vec b|^2/2\)，所以 \(\cos\angle BAD=-1/\sqrt{10}\)、\(\sin\angle BAD=3/\sqrt{10}\)，故 \(\tan\angle BAD=-3\)。`] }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "107M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`給定相異兩點 A、B，空間中使三角形 PAB 為正三角形的所有點 P 所成集合為何？`,
      options: { "1": "兩個點", "2": "一線段", "3": "一直線", "4": "一圓", "5": "一平面" },
      solution: [String.raw`P 必須同時滿足 \(PA=PB=AB\)。條件 \(PA=PB\) 使 P 位於 AB 的中垂面；再固定 \(PA=AB\)，交集是一個圓。`],
      optionAnalysis: { "1": "這是平面情形，空間中可繞 AB 旋轉。", "2": "P 到 A、B 的距離都固定，不成線段。", "3": "距離條件不會留下整條直線。", "4": "兩個等半徑球面的交集是一圓。", "5": "中垂面上還須滿足固定距離。" }
    },
    "107M-2": {
      verified: true, sourcePage: 1,
      stem: "一份試卷有 10 題單選題，每題 5 個選項。小明各題獨立隨機猜答，全部答對的機率最接近何者？",
      options: { "1": String.raw`\(10^{-5}\)`, "2": String.raw`\(10^{-6}\)`, "3": String.raw`\(10^{-7}\)`, "4": String.raw`\(10^{-8}\)`, "5": String.raw`\(10^{-9}\)` },
      solution: [String.raw`全部答對機率為 \((1/5)^{10}\)。取常用對數得 \(-10\log5\approx-6.99\)，所以最接近 \(10^{-7}\)。`],
      optionAnalysis: { "1": "高估約百倍。", "2": "高估約十倍。", "3": "對數約為 -6.99。", "4": "低估約十倍。", "5": "低估約百倍。" }
    },
    "107M-3": {
      verified: true, sourcePage: 1,
      stem: "甲、乙各自從一星期七天中隨機選兩天休假，且選擇互相獨立。求兩人至少有一天同時休假的機率。",
      options: { "1": String.raw`\(\frac13\)`, "2": String.raw`\(\frac8{21}\)`, "3": String.raw`\(\frac37\)`, "4": String.raw`\(\frac{10}{21}\)`, "5": String.raw`\(\frac{11}{21}\)` },
      solution: [String.raw`固定甲的兩天，乙完全避開的選法有 \(\binom52\) 種，全部有 \(\binom72\) 種。`, String.raw`所求為 \(1-\binom52/\binom72=1-10/21=11/21\)。`],
      optionAnalysis: { "1": "未正確計入可能重疊一天或兩天。", "2": "補事件計數有誤。", "3": "不是以單一天機率直接相乘。", "4": "這是完全沒有共同休假的機率。", "5": "以補事件計算得到 11/21。" }
    },
    "107M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`有多少個整數 x 滿足 \(10^9<2^x<9^{10}\)？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: [String.raw`\(2^{29}<10^9<2^{30}\)，而 \(2^{31}<9^{10}<2^{32}\)。因此整數 x 只有 30、31，共 2 個。`],
      optionAnalysis: { "1": "漏掉其中一個端點內整數。", "2": "符合者為 30、31。", "3": "把界外的 29 或 32 計入。", "4": "上下界的二進位估計過寬。", "5": "區間內確有兩個整數指數。" }
    },
    "107M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`有幾個角度 \(\theta\) 滿足 \(0^\circ<\theta<180^\circ\)，且 \(\cos(3\theta-60^\circ)、\cos3\theta、\cos(3\theta+60^\circ)\) 依序成等差數列？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "5 個" },
      solution: [String.raw`令 \(u=3\theta\)。由和角公式，首末兩項和為 \(\cos u\)。等差條件要求它等於 \(2\cos u\)，故 \(\cos u=0\)。`, String.raw`在 \(0^\circ<u<540^\circ\) 中，解為 \(90^\circ、270^\circ、450^\circ\)，共 3 個。`],
      optionAnalysis: { "1": "只取一個週期內的部分解。", "2": "漏掉區間中的第三個零點。", "3": "三個解都落在指定開區間。", "4": "把端點或非解計入。", "5": "餘弦在此區間只有三個零點。" }
    },
    "107M-6": {
      verified: true, sourcePage: 2,
      stem: "售價漲跌幅固定為成本漲跌幅的一半。四週成本為 50、100、50、90，前兩週售價為 120、180，第三、四週售價為 x、y。選出正確關係。",
      options: { "1": String.raw`\(120=x<y<180\)`, "2": String.raw`\(120<x<y<180\)`, "3": String.raw`\(x<120<y<180\)`, "4": String.raw`\(120=x<180<y\)`, "5": String.raw`\(120<x<180<y\)` },
      solution: ["第三週成本下跌 50%，售價下跌 25%，所以 \(x=180(0.75)=135\)。", "第四週成本由 50 增至 90，上漲 80%，售價上漲 40%，所以 \(y=135(1.4)=189\)。"],
      optionAnalysis: { "1": "x=135，不等於 120。", "2": "y=189，超過 180。", "3": "x 大於 120。", "4": "x 不等於 120。", "5": "120<135<180<189。" }
    },
    "107M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`三角形 ABC 內接於以 O 為圓心的單位圓，且 \(\overrightarrow{OA}+\overrightarrow{OB}+\sqrt3\overrightarrow{OC}=0\)。求 \(\angle BAC\)。`,
      options: { "1": String.raw`\(30^\circ\)`, "2": String.raw`\(45^\circ\)`, "3": String.raw`\(60^\circ\)`, "4": String.raw`\(75^\circ\)`, "5": String.raw`\(90^\circ\)` },
      solution: [String.raw`由 \(|\overrightarrow{OA}+\overrightarrow{OB}|=\sqrt3\)，得 \(\angle AOB=60^\circ\)，且其和向量方向與 OC 相反。`, String.raw`因此較小的圓心角 \(\angle BOC=150^\circ\)，相應圓周角 \(\angle BAC=75^\circ\)。`],
      optionAnalysis: { "1": "只取了 AOB 圓心角的一半。", "2": "未用到 OC 與和向量反向。", "3": "把圓心角當成圓周角。", "4": "BC 所對圓心角為 150°，圓周角為 75°。", "5": "BC 並非直徑。" }
    },
    "107M-8": {
      verified: true, sourcePage: 3,
      stem: "小華學測成績：國文 11、英文 12、數學 9、自然 9、社會 12。依題目所列五校系檢定標準，哪些校系會列入篩選？",
      options: { "1": "甲校系", "2": "乙校系", "3": "丙校系", "4": "丁校系", "5": "戊校系" },
      solution: ["甲要求國文均標、英文前標、社會均標，皆通過。丁要求國英至少一科前標，且自然、社會均標；英文達前標，其餘也通過。", "乙的國文未達前標；丙的數學、自然皆未達前標；戊的自然未達前標。"],
      optionAnalysis: { "1": "國文 11≥10、英文 12≥12、社會 12≥10。", "2": "國文 11 未達前標 12。", "3": "數學 9<10 且自然 9<11。", "4": "英文達前標，自然與社會達均標。", "5": "自然 9 未達前標 11。" }
    },
    "107M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`多項式 \(f(x)\) 除以 \(x^2-1\) 的餘式為 \(2x+1\)。選出正確敘述。`,
      options: { "1": String.raw`\(f(0)=1\)`, "2": String.raw`\(f(1)=3\)`, "3": "f 可能為一次式", "4": String.raw`f 可能為 \(4x^4+2x^2-3\)`, "5": String.raw`f 可能為 \(4x^4+2x^3-3\)` },
      solution: [String.raw`因 \(x=\pm1\) 是除式根，故 \(f(1)=3、f(-1)=-1\)，所以（2）正確。餘式本身 \(2x+1\) 可作為 f，故（3）正確。`, "檢查選項（5）在 1、-1 的值分別為 3、-1，也符合，故（5）正確。"],
      optionAnalysis: { "1": "f(0) 還會受商的常數項影響。", "2": "代入 x=1，值等於餘式 3。", "3": "直接取 f=2x+1 即可。", "4": "代入 x=-1 得 3，不是 -1。", "5": "在 ±1 的值均符合餘式。" }
    },
    "107M-10": {
      verified: true, sourcePage: 4,
      stem: String.raw`坐標平面三角形 ABC 中，\(\overrightarrow{AB}=(-4,3)\)、\(\overrightarrow{AC}=(\frac25,\frac45)\)。選出正確敘述。`,
      options: { "1": String.raw`\(BC=5\)`, "2": "ABC 是直角三角形", "3": String.raw`面積為 \(\frac{11}{5}\)`, "4": String.raw`\(\sin B>\sin C\)`, "5": String.raw`\(\cos A>\cos B\)` },
      solution: [String.raw`在 C 點，\(\overrightarrow{CA}\cdot\overrightarrow{CB}=0\)，所以是直角三角形。`, String.raw`面積為 \(\frac12|(-4)(4/5)-3(2/5)|=11/5\)。`],
      optionAnalysis: { "1": String.raw`\(BC=11/\sqrt5\)，不是 5。`, "2": "CA 與 CB 內積為 0。", "3": "以二維外積計得 11/5。", "4": "B 的對邊 AC 小於 C 的對邊 AB。", "5": "直接計算得 cos A 小於 cos B。" }
    },
    "107M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`直線 \(L:\frac{x-1}{2}=\frac{y-2}{-3}=\frac z{-1}\)，平面 \(E_1:2x-3y-z=0\)、\(E_2:x+y-z=0\)。選出正確敘述。`,
      options: { "1": "點 (3,0,-1) 在 L 上", "2": "點 (1,2,3) 在 E₁ 上", "3": "L 與 E₁ 垂直", "4": "L 在 E₂ 上", "5": "E₁ 與 E₂ 交於一直線" },
      solution: [String.raw`L 的方向向量 \((2,-3,-1)\) 正是 \(E_1\) 的法向量，所以 L 垂直 \(E_1\)。`, "兩平面法向量不平行，因此相交於一直線。"],
      optionAnalysis: { "1": "取參數 1 時 y=-1，不是 0。", "2": "代入 E₁ 得 -7。", "3": "方向向量平行 E₁ 法向量。", "4": "L 的基準點不在 E₂ 上。", "5": "兩法向量不成比例。" }
    },
    "107M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`哪些二次曲線的焦點之一，是拋物線 \(y^2=2x\) 的焦點？`,
      options: { "1": String.raw`\(y=(x-\frac12)^2-\frac14\)`, "2": String.raw`\(\frac{x^2}{4}+\frac{y^2}{3}=1\)`, "3": String.raw`\(x^2+\frac{4y^2}{3}=1\)`, "4": String.raw`\(8x^2-8y^2=1\)`, "5": String.raw`\(4x^2-4y^2=1\)` },
      solution: [String.raw`\(y^2=2x=4px\) 的焦點為 \((1/2,0)\)。`, "選項（1）的焦點為 (1/2,0)；（3）的橢圓焦距為 1/2；（4）的雙曲線 \(c^2=1/8+1/8=1/4\)。"],
      optionAnalysis: { "1": "頂點 (1/2,-1/4)、p=1/4，焦點 (1/2,0)。", "2": "橢圓焦距為 1。", "3": "橢圓焦距為 1/2。", "4": "雙曲線焦距為 1/2。", "5": String.raw`雙曲線焦距為 \(1/\sqrt2\)。` }
    },
    "107M-13": { verified: true, sourcePage: 5, stem: "三點 (3,log3)、(6,log6)、(12,y) 共線，求 y。", solution: [String.raw`前兩點斜率為 \(\log2/3\)。橫坐標由 6 增至 12 是前段的兩倍，故 \(y=\log6+2\log2=\log24\)。`] },
    "107M-14": { verified: true, sourcePage: 5, stem: String.raw`長度不變的梯子原與地面夾 \(60^\circ\)。將梯腳向外拉 51 公分後，新夾角的正弦為 0.6。求梯長。`, solution: [String.raw`設梯長 L。原水平距離為 \(L\cos60^\circ=L/2\)，新水平距離為 \(L\sqrt{1-0.6^2}=0.8L\)。`, String.raw`故 \(0.8L-0.5L=51\)，得 \(L=170\)。`] },
    "107M-15": { verified: true, sourcePage: 5, stem: "AB=5，以 A 為圓心、半徑 r 作圓，B 的切線切於 P。r 變動時，求三角形 PAB 的最大面積。", solution: [String.raw`因 AP 垂直 BP，面積為 \(\frac12r\sqrt{25-r^2}\)。當 \(r^2=25-r^2\) 時乘積最大，面積為 \(25/4\)。`] },
    "107M-16": { verified: true, sourcePage: 5, stem: String.raw`圓完全落在 \(x-y\le4、x+y\le18、x-y\ge-2、x+y\ge-24\) 所圍區域，求最大可能面積。`, solution: [String.raw`兩條 \(x-y\) 邊界的垂直距離為 \(6/\sqrt2=3\sqrt2\)，是較窄方向，故最大圓直徑為 \(3\sqrt2\)。`, String.raw`半徑 \(3\sqrt2/2\)，面積為 \(9\pi/2\)。`] },
    "107M-17": { verified: true, sourcePage: 6, stem: String.raw`拋物線 \(y=x^2+2x-3\) 頂點為 C，與 x 軸交於 A、B，求 \(\cos\angle ACB\)。`, solution: [String.raw`A=(-3,0)、B=(1,0)、C=(-1,-4)\)。向量 CA=(-2,4)、CB=(2,4)，故 \(\cos C=12/20=3/5\)。`] },
    "107M-18": { verified: true, sourcePage: 6, stem: String.raw`已知
    \[
    \begin{bmatrix}a&b\\c&d\\1&2\end{bmatrix}
    \begin{bmatrix}-3&5&7\\-4&6&e\end{bmatrix}
    =
    \begin{bmatrix}3&x&7\\0&y&7\\-11&z&23\end{bmatrix}，
    \]
    求 y。`, solution: [String.raw`由第三列第三欄 \(7+2e=23\)，得 \(e=8\)。第二列第一、三欄給
    \[
    -3c-4d=0,\qquad7c+8d=7，
    \]
    解得 \(c=7、d=-21/4\)。`, String.raw`因此 \(y=5c+6d=35-\frac{126}{4}=\frac72\)。`] },
    "107M-19": { verified: true, sourcePage: 6, stem: String.raw`D 在三角形 ABC 的 BC 上，\(\angle B=75^\circ、\angle C=45^\circ、\angle ADB=60^\circ\)。若 \(\overrightarrow{AD}=s\overrightarrow{AB}+t\overrightarrow{AC}\)，求 s、t。`, solution: [String.raw`以正弦定理求出 BD:DC，再用分點公式
    \[
    \overrightarrow{AD}=\frac{DC}{BC}\overrightarrow{AB}+\frac{BD}{BC}\overrightarrow{AC}。
    \]`, String.raw`由角度關係配合正弦定理可得 \(BD:DC=2:1\)，所以 \(s=1/3、t=2/3\)。`] },
    "107M-20": { verified: true, sourcePage: 6, stem: "15×20 長方形沿對角線 BD 對摺，使平面 ABD 與 CBD 垂直，求空間中 A、C 的距離。", solution: [String.raw`BD=25。A、C 到摺線 BD 的距離都為 \(15\cdot20/25=12\)，兩垂足沿 BD 相距 \(|20^2/25-15^2/25|=7\)。`, String.raw`兩片平面互相垂直，所以 \(AC^2=12^2+12^2+7^2=337\)，得 \(AC=\sqrt{337}\)。`] }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "106M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`某校老師玩過「寶可夢」的比率為 \(r_1\)，學生玩過的比率為 \(r_2\)，且 \(r_1\ne r_2\)。下列哪項資訊可用來判定全校師生玩過的比率？`,
      options: { "1": "全校老師與學生比率", "2": "全校老師人數", "3": "全校學生人數", "4": "全校師生人數", "5": "全校師生玩過的人數" },
      solution: [String.raw`全校比率是 \(r_1、r_2\) 依老師、學生人數所作的加權平均。已知兩群人數的比率即可決定權重。`],
      optionAnalysis: { "1": "兩群人數比率可決定加權平均的權重。", "2": "只有老師人數，仍不知道學生權重。", "3": "只有學生人數，仍不知道老師權重。", "4": "只有總人數，無法拆分兩群。", "5": "只有分子，仍缺總人數。" }
    },
    "106M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`手機程式每次點擊數 a 後，螢幕上的數會變成 \(a^2\)。初始正數 b 連續點擊三次後接近 \(81^3\)，b 最接近何者？`,
      options: { "1": "1.7", "2": "3", "3": "5.2", "4": "9", "5": "81" },
      solution: [String.raw`三次平方後為 \(b^8\)。因 \(81^3=3^{12}\)，所以 \(b\approx3^{12/8}=3\sqrt3\approx5.196\)，最接近 5.2。`],
      optionAnalysis: { "1": "少算了連續平方的指數。", "2": String.raw`\(3^8\) 遠小於 \(81^3\)。`, "3": String.raw`\(3\sqrt3\approx5.196\)。`, "4": String.raw`\(9^8\) 過大。`, "5": "把點擊後的數誤當成初始值。" }
    },
    "106M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`雙曲線 \(\Gamma:\frac{y^2}{a^2}-\frac{x^2}{b^2}=1\) 的第一象限漸近線為 \(\ell\)。動點 \((t,t^2)\) 從 \(t=0\) 出發；當 \(t>0\) 時，選出正確敘述。`,
      options: { "1": "兩者都不會碰到", "2": "會碰 Γ，但不碰 ℓ", "3": "會碰 ℓ，但不碰 Γ", "4": "先碰 Γ，再碰 ℓ", "5": "先碰 ℓ，再碰 Γ" },
      solution: [String.raw`漸近線是 \(y=(a/b)x\)，拋物線在 \(t=a/b\) 時先與它相交。`, String.raw`把 \((t,t^2)\) 代入雙曲線，左式隨 t 最終趨向無窮；在漸近線交點時左式為 0，故還要再往後才與 Γ 相交。`],
      optionAnalysis: { "1": "拋物線會先後穿過漸近線與雙曲線。", "2": "一定會碰到漸近線。", "3": "代入式最終超過 1，故也會碰 Γ。", "4": "在漸近線交點代入雙曲線左式為 0。", "5": "先過漸近線，再達雙曲線。" }
    },
    "106M-4": {
      verified: true, sourcePage: 1,
      stem: "正立方體上兩質點同時分別沿 AB、CD 等速直線運動，皆在 1 秒後到達終點。這一秒內兩質點距離如何變化？",
      options: { "1": "固定不變", "2": "越來越小", "3": "越來越大", "4": "在 1/2 秒時最小", "5": "在 1/2 秒時最大" },
      solution: ["以立方體邊長為 1 建立坐標，兩位置向量都是時間 t 的一次式；距離平方化簡為關於 t、對稱軸在 \(t=1/2\) 的開口向上二次式。", "因此兩質點在 1/2 秒時距離最小。"],
      optionAnalysis: { "1": "兩條運動線段並非保持固定平移關係。", "2": "過了中點後距離會再增加。", "3": "前半段距離先減少。", "4": "距離平方的二次式在 t=1/2 取最小。", "5": "二次式開口向上，不是最大。" }
    },
    "106M-5": {
      verified: true, sourcePage: 2,
      stem: "題圖為 2016 年各月最低溫 x 與最高溫 y 的散佈圖。改以溫差 y-x 為橫軸、最高溫 y 為縱軸後，選出正確的相關性敘述。",
      options: { "1": "正相關，且比最高溫與最低溫的相關性強", "2": "正相關，且較弱", "3": "負相關，且較強", "4": "負相關，且較弱", "5": "零相關" },
      solution: ["由原圖可見最低溫越高時，溫差大致越小；以溫差為橫軸後，最高溫與溫差呈負相關。", "散點較原本最高溫與最低溫的線性關係分散，因此相關性較弱。"],
      optionAnalysis: { "1": "方向不是正相關。", "2": "方向不是正相關。", "3": "負相關但沒有原關係強。", "4": "方向為負，且散布更分散。", "5": "仍可看出下降趨勢。" }
    },
    "106M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`有多少個實數 x 滿足 \(\frac\pi2\le x\le\frac{3\pi}{2}\)，且 \(\cos(x^\circ)\le\cos x\)？`,
      options: { "1": "0 個", "2": "1 個", "3": "2 個", "4": "4 個", "5": "無窮多個" },
      solution: [String.raw`區間內 \(x\) 介於約 1.57 與 4.71；把 x 當角度時 \(\cos(x^\circ)>0.996\)，但把 x 當弧度時 \(\cos x\le0\)。`, "所以不可能滿足不等式，解有 0 個。"],
      optionAnalysis: { "1": "左側接近 1，右側不大於 0，無解。", "2": "不存在交點。", "3": "不能把度數與弧度視為相同。", "4": "區間端點也不符合。", "5": "不等式在整段都不成立。" }
    },
    "106M-7": {
      verified: true, sourcePage: 2,
      stem: "週一到週五從牛肉麵、大滷麵、咖哩飯、排骨飯安排午餐；四種至少各一次，相鄰不能相同，且不能連兩天吃麵。共有幾種計畫？",
      options: { "1": "52", "2": "60", "3": "68", "4": "76", "5": "84" },
      solution: ["五天使用四種餐點，恰有一種重複一次。固定重複牛肉麵或大滷麵時，各有 6 種合法排列；固定重複咖哩飯或排骨飯時，各有 24 種。", String.raw`因此總數為 \(6+6+24+24=60\)。`],
      optionAnalysis: { "1": "排除條件過多。", "2": "依重複餐點與位置分類得到 60。", "3": "漏排部分連續兩天麵食。", "4": "把相鄰相同的排列計入。", "5": "只做了四種至少一次，未完整套用相鄰限制。" }
    },
    "106M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`相異正整數 \(m,n\le4\)，非零實數 a,b。函數 \(f(x)=ax^m、g(x)=bx^n\) 的圖形恰有 3 個相異交點。哪些情況可能？`,
      options: { "1": "m,n 皆偶且 a,b 同號", "2": "m,n 皆偶且 a,b 異號", "3": "m,n 皆奇且 a,b 同號", "4": "m,n 皆奇且 a,b 異號", "5": "m,n 一奇一偶" },
      solution: [String.raw`交點方程為 \(x^n(a x^{m-n}-b)=0\)，原點必為一個交點。還要有一正一負兩個非零根，需 \(m-n\) 為偶數且 \(b/a>0\)。`, "因此 m、n 同奇偶且 a、b 同號，選（1）、（3）。"],
      optionAnalysis: { "1": "同偶使指數差為偶，且同號可有正負根。", "2": "異號使非零根方程無實解。", "3": "同奇的指數差仍為偶數。", "4": "異號無法得到兩個非零實根。", "5": "指數差為奇數，只有一個非零實根。" }
    },
    "106M-9": {
      verified: true, sourcePage: 3,
      stem: "圓 Γ 的外部含原點，而 (2,6) 在圓內。選出正確敘述。",
      options: { "1": "圓心不可能在第二象限", "2": "圓心可能在第三象限，且半徑必大於 10", "3": "圓心可能在第一象限，且半徑必小於 10", "4": "圓心可能在 x 軸，且 x 坐標必小於 10", "5": "圓心可能在第四象限，且半徑必大於 10" },
      solution: [String.raw`設圓心 \((h,k)\)。要使 (2,6) 比原點更接近圓心，必有
      \[
      (h-2)^2+(k-6)^2<h^2+k^2\Longleftrightarrow h+3k>10。
      \]`, "第四象限可取 k<0、足夠大的 h；此時圓心到 (2,6) 的距離已大於 10，半徑為包住該點也必大於 10。"],
      optionAnalysis: { "1": "第二象限仍可取足夠大的正 k。", "2": "第三象限使 h+3k<0，不可能。", "3": "第一象限半徑不一定小於 10。", "4": "k=0 時反而必須 h>10。", "5": "第四象限可行，且條件迫使半徑大於 10。" }
    },
    "106M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`空間三直線
      \[
      L_1:\frac{x-1}{2}=\frac{y+1}{2}=\frac z1,\quad
      L_2:\begin{cases}x-2y+2z=-4\\x+y-4z=5\end{cases},\quad
      L_3:(x,y,z)=(-t,-2-t,4+4t)。
      \]
      選出正確敘述。`,
      options: { "1": "L₁、L₂ 方向互相垂直", "2": "L₁、L₃ 方向互相垂直", "3": "有平面同時包含 L₁、L₂", "4": "有平面同時包含 L₁、L₃", "5": "有平面同時包含 L₂、L₃" },
      solution: [String.raw`L₁ 方向為 \((2,2,1)\)；L₂ 方向由兩平面法向量外積得 \((2,2,1)\)，所以 L₁、L₂ 平行且可共面。`, String.raw`L₃ 方向為 \((-1,-1,4)\)，與 L₁ 方向內積為 0；檢查參數可知兩線相交，所以也共面。`],
      optionAnalysis: { "1": "L₁、L₂ 方向其實平行。", "2": "方向內積 -2-2+4=0。", "3": "兩條相異平行線必共面。", "4": "兩線相交，故共面。", "5": "L₂、L₃ 為歪斜線。" }
    },
    "106M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`凸五邊形 ABCDE 中，\(AB=\sqrt6+\sqrt2、BC=2、CD=4、DE=EA=2、\angle BAE=105^\circ、\angle DEA=90^\circ\)。選出正確敘述。`,
      options: { "1": String.raw`\(AD=2\sqrt2\)`, "2": String.raw`\(\angle DAB=45^\circ\)`, "3": String.raw`\(BD=2\sqrt6\)`, "4": String.raw`\(\angle ABD=45^\circ\)`, "5": String.raw`三角形 BCD 面積為 \(2\sqrt2\)` },
      solution: [String.raw`三角形 ADE 為等腰直角三角形，所以 \(AD=2\sqrt2、\angle DAE=45^\circ\)，進而 \(\angle DAB=60^\circ\)。`, String.raw`在三角形 ABD 用餘弦定理得 \(BD=2\sqrt3\)，再以正弦或餘弦定理得 \(\angle ABD=45^\circ\)。`],
      optionAnalysis: { "1": "兩直角邊皆為 2，斜邊為 2√2。", "2": "DAB=105°-45°=60°。", "3": "餘弦定理得 BD=2√3。", "4": "由邊角關係可得 45°。", "5": "依三邊計算的面積不是 2√2。" }
    },
    "106M-12": {
      verified: true, sourcePage: 4,
      stem: "全班 50 人，國文、英文、數學及格人數為 45、39、34，且英文及格者國文也及格。設數學與英文皆及格 x 人，數學及格但英文不及格 y 人。選出正確敘述。",
      options: { "1": String.raw`\(x+y=39\)`, "2": String.raw`\(y\le11\)`, "3": String.raw`至少一科不及格者有 \(39-x+y\) 人`, "4": "至少一科不及格者最少 11 人", "5": "至少一科不及格者最多 27 人" },
      solution: [String.raw`數學及格者分成 x、y 兩群，所以 \(x+y=34\)。英文不及格共 11 人，故 \(y\le11\)。`, String.raw`三科全及格者正是數學與英文皆及格的 x 人，因此至少一科不及格者為 \(50-x\)。由 \(23\le x\le34\)，其最大值為 27。`],
      optionAnalysis: { "1": "應為 x+y=34。", "2": "y 是英文不及格 11 人中的一部分。", "3": "正確人數是 50-x。", "4": "最少為 16，不是 11。", "5": "x 最少 23，所以 50-x 最多 27。" }
    },
    "106M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`四面體 ABCD 中，\(\overrightarrow{AD}\) 分別與 \(\overrightarrow{AB}、\overrightarrow{AC}\) 垂直。選出正確敘述。`,
      options: { "1": String.raw`\(\overrightarrow{DB}\cdot\overrightarrow{DC}=DA^2-\overrightarrow{AB}\cdot\overrightarrow{AC}\)`, "2": "若 BAC 為直角，則 BDC 為直角", "3": "若 BAC 為銳角，則 BDC 為銳角", "4": "若 BAC 為鈍角，則 BDC 為鈍角", "5": "若 AB<DA 且 AC<DA，則 BDC 為銳角" },
      solution: [String.raw`令 A 為原點，\(\vec b=\overrightarrow{AB}、\vec c=\overrightarrow{AC}、\vec d=\overrightarrow{AD}\)。則
      \[
      \overrightarrow{DB}\cdot\overrightarrow{DC}
      =(\vec b-\vec d)\cdot(\vec c-\vec d)=\vec b\cdot\vec c+|\vec d|^2。
      \]`, "若 BAC 銳角，兩項皆正，BDC 銳角；若 \(|b|,|c|<|d|\)，即使 \(b\cdot c\) 最小也大於 \(-|d|^2\)，故仍為銳角。"],
      optionAnalysis: { "1": "內積應為加號，不是減號。", "2": "此時 DB·DC=DA²>0，故為銳角。", "3": "AB·AC>0，使 DB·DC>0。", "4": "鈍角時負項可能被 DA² 抵消。", "5": "由柯西不等式可保證 DB·DC>0。" }
    },
    "106M-14": { verified: true, sourcePage: 5, stem: String.raw`遞迴數列 \(a_n=a_{n-1}+f(n-2)\)，其中 f 為二次多項式。若 \(a_1=1,a_2=2,a_3=5,a_4=12\)，求 \(a_5\)。`, solution: [String.raw`\(f(0),f(1),f(2)\) 依序為 1、3、7，二階差為 2，因此 \(f(3)=13\)。故 \(a_5=12+13=25\)。`] },
    "106M-15": { verified: true, sourcePage: 5, stem: String.raw`三角形 ABC 內點 P 滿足 \(\overrightarrow{AP}=(4/3,5/6)\) 且 \(\overrightarrow{AP}=\frac12\overrightarrow{AB}+\frac15\overrightarrow{AC}\)。直線 AP 交 BC 於 M，求 AM 向量。`, solution: [String.raw`令 \(\overrightarrow{AM}=\lambda\overrightarrow{AP}\)。M 在 BC 上要求 AB、AC 係數和為 1，故 \(\lambda(1/2+1/5)=1\)，得 \(\lambda=10/7\)。`, String.raw`所以 \(\overrightarrow{AM}=(10/7)(4/3,5/6)=(40/21,25/21)\)。`] },
    "106M-16": { verified: true, sourcePage: 5, stem: String.raw`正整數 a 使 \(5x^3+(a+4)x^2+ax+1=0\) 的根都是有理根，求 a。`, solution: [String.raw`有理根條件配合首末係數試根，可得
      \[
      5x^3+11x^2+7x+1=(5x+1)(x+1)^2，
      \]
      因此 \(a=7\)。`] },
    "106M-17": { verified: true, sourcePage: 5, stem: "等差數列 a₁～a₉ 作為三列線性方程的係數；右側依序為 k+1、-k-5、k+9。若方程組有解，求 k。", solution: [String.raw`等差數列使第二列係數恰為第一、三列係數的平均，因此右側也須滿足
      \[
      -k-5=\frac{(k+1)+(k+9)}2=k+5。
      \]
      解得 \(k=-5\)。`] },
    "106M-18": { verified: true, sourcePage: 6, stem: String.raw`正整數 \(a\le x\le b、b-a=3\)。以 \(1/3、2/3\) 權重內插 \(\log a、\log b\)，且題示 \(\log a=1+2\log3-\log2、\log b=4\log2+\log3\)。求 x。`, solution: [String.raw`\(\log a=\log45、\log b=\log48\)，故 \(a=45、b=48\)。權重 \(1/3、2/3\) 對應從 a 往 b 前進 \(2/3\) 的距離，所以 \(x=45+2=47\)。`] },
    "106M-19": { verified: true, sourcePage: 6, stem: "青蛙從原點出發，每步等機率向上下左右跳一單位，共跳四步。求恰回原點的機率。", solution: [String.raw`四步回原點：左右各兩步有 6 種，上下各兩步有 6 種；或四方向各一步有 \(4!=24\) 種，共 36 種。`, String.raw`全部 \(4^4=256\) 種，機率 \(36/256=9/64\)。`] },
    "106M-20": { verified: true, sourcePage: 6, stem: "甲由同一點以每秒 4 公尺向東，乙以每秒 3 公尺向北。兩人視線被圓柱建築阻擋 6 秒，求底圓直徑。", solution: [String.raw`\(t\) 秒時兩人連線為
      \[
      \frac{x}{4t}+\frac{y}{3t}=1\Longleftrightarrow3x+4y=12t。
      \]`, String.raw`這族平行線在 6 秒內掃過的垂直距離為 \(\frac{12\cdot6}{\sqrt{3^2+4^2}}=72/5=14.4\)，即圓的直徑。`] }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "105M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`設 \(f(x)\) 為二次實係數多項式，已知 \(f(x)\) 在 \(x=2\) 時有最小值 1，且 \(f(3)=3\)。請問 \(f(1)\) 之值為何？`,
      options: { "1": "5", "2": "2", "3": "3", "4": "4", "5": "條件不足，無法確定" },
      solution: [String.raw`二次函數的對稱軸是 \(x=2\)。\(x=1\) 與 \(x=3\) 到對稱軸的距離相同，所以 \(f(1)=f(3)=3\)。`],
      optionAnalysis: { "1": "未利用二次函數關於對稱軸的對稱性。", "2": "最小值 1 是函數值，不是對稱點的函數值。", "3": String.raw`\(1、3\) 關於 \(x=2\) 對稱，故函數值同為 3。`, "4": "對稱點的函數值不需另加頂點位置。", "5": "題目給出的對稱軸與一側函數值已足以決定。" }
    },
    "105M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`請問 \(\sin73^\circ、\sin146^\circ、\sin219^\circ、\sin292^\circ、\sin365^\circ\) 這五個數值的中位數是哪一個？`,
      options: { "1": String.raw`\(\sin73^\circ\)`, "2": String.raw`\(\sin146^\circ\)`, "3": String.raw`\(\sin219^\circ\)`, "4": String.raw`\(\sin292^\circ\)`, "5": String.raw`\(\sin365^\circ\)` },
      solution: [String.raw`依象限與參考角比較：
      \[
      \sin292^\circ<\sin219^\circ<\sin365^\circ<\sin146^\circ<\sin73^\circ。
      \]
      排序後居中的第三個數是 \(\sin365^\circ\)。`],
      optionAnalysis: { "1": "此值接近 1，是五者最大值。", "2": String.raw`\(\sin146^\circ=\sin34^\circ\)，大於中位數。`, "3": "位於第三象限，為負值。", "4": "位於第四象限且絕對值很大，是最小值。", "5": String.raw`\(\sin365^\circ=\sin5^\circ\)，排序後居中。` }
    },
    "105M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`坐標平面上兩圖形 \(\Gamma_1、\Gamma_2\) 的方程式分別為
      \[
      \Gamma_1:(x+1)^2+y^2=1,\qquad \Gamma_2:(x+y)^2=1。
      \]
      請問兩圖形共有幾個交點？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: [String.raw`\(\Gamma_1\) 是圓心 \((-1,0)\)、半徑 1 的圓；\(\Gamma_2\) 是兩直線 \(x+y=1\) 與 \(x+y=-1\)。`, String.raw`直線 \(x+y=-1\) 通過圓心，與圓有 2 個交點；圓心到 \(x+y=1\) 的距離是 \(\sqrt2>1\)，沒有交點，所以共有 2 個。`],
      optionAnalysis: { "1": "通過圓心的直線不是切線。", "2": String.raw`\(x+y=-1\) 通過圓心，產生兩個交點。`, "3": "另一條直線與圓相離，沒有再增加交點。", "4": "兩條直線並非都與圓相交。", "5": "至少有一條直線通過圓心。" }
    },
    "105M-4": {
      verified: true, sourcePage: 1,
      stem: "開始紀錄時，放射性物質 A 的質量為物質 B 的兩倍；120 小時後兩者質量相同。已知 A 的半衰期為 7.5 小時，求 B 的半衰期。",
      options: { "1": "8 小時", "2": "10 小時", "3": "12 小時", "4": "15 小時", "5": "20 小時" },
      solution: [String.raw`設 B 的半衰期為 \(T\)，初始質量為 \(m\)。120 小時後
      \[
      2m\left(\frac12\right)^{120/7.5}
      =m\left(\frac12\right)^{120/T}。
      \]
      因 \(120/7.5=16\)，得 \(2^{-15}=2^{-120/T}\)，所以 \(T=8\)。`],
      optionAnalysis: { "1": "代入衰減公式可得半衰期 8 小時。", "2": "會使 B 經歷 12 次半衰，剩餘量過多。", "3": "會使 B 經歷 10 次半衰，剩餘量過多。", "4": "誤把 A 的初始兩倍關係忽略。", "5": "衰減速度不足以在 120 小時後與 A 相同。" }
    },
    "105M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`坐標空間中一質點自 \(P(1,1,1)\) 沿方向 \(\vec a=(1,2,2)\) 等速前進，5 秒後到達平面 \(x-y+3z=28\)，立即轉向沿 \(\vec b=(-2,2,-1)\) 以相同速率前進。再經過幾秒會到達平面 \(x=2\)？`,
      options: { "1": "1 秒", "2": "2 秒", "3": "3 秒", "4": "4 秒", "5": "永遠不會到達" },
      solution: [String.raw`設原速度為 \(k\vec a\)。5 秒後位置是 \((1+5k,1+10k,1+10k)\)，代入平面得 \(3+25k=28\)，故 \(k=1\)，轉向點為 \((6,11,11)\)。`, String.raw`轉向後 \(x=6-2t\)。令 \(6-2t=2\)，得 \(t=2\) 秒。`],
      optionAnalysis: { "1": "1 秒後 x 坐標仍為 4。", "2": "轉向後 2 秒，x 坐標由 6 降至 2。", "3": "此時已越過平面。", "4": "未先由第一段運動求出實際速率。", "5": "新方向的 x 分量為負，確實會到達。" }
    },
    "105M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`設 \(a_n\) 為等比數列，已知前十項和為 \(\sum_{k=1}^{10}a_k=80\)，前五個奇數項之和 \(a_1+a_3+a_5+a_7+a_9=120\)。請選出首項 \(a_1\) 的正確範圍。`,
      options: { "1": String.raw`\(a_1<80\)`, "2": String.raw`\(80\le a_1<90\)`, "3": String.raw`\(90\le a_1<100\)`, "4": String.raw`\(100\le a_1<110\)`, "5": String.raw`\(110\le a_1\)` },
      solution: [String.raw`設公比為 r。前十項可按奇、偶項配對，所以
      \[
      80=(1+r)(a_1+a_3+\cdots+a_9)=120(1+r)，
      \]
      得 \(r=-\frac13\)。`, String.raw`再由奇數項本身是公比 \(r^2\) 的等比數列，
      \[
      120=a_1\frac{1-r^{10}}{1-r^2}
      \]
      得 \(a_1=120\frac{1-r^2}{1-r^{10}}\approx106.67\)，介於 100 與 110 之間。`],
      optionAnalysis: { "1": "首項約為 106.67，不小於 80。", "2": "由奇數項和與總和可先求得負公比。", "3": "代入奇數項等比級數公式後首項超過 100。", "4": String.raw`\(a_1\approx106.67\)，落在此範圍。`, "5": "首項小於 110。" }
    },
    "105M-7": {
      verified: true, sourcePage: 2,
      stem: "下列各方程式中，請選出有實數解的選項（可複選）。",
      options: { "1": String.raw`\(|x|+|x-5|=1\)`, "2": String.raw`\(|x|+|x-5|=6\)`, "3": String.raw`\(|x|-|x-5|=1\)`, "4": String.raw`\(|x|-|x-5|=6\)`, "5": String.raw`\(|x|-|x-5|=-1\)` },
      solution: [String.raw`由三角不等式，\(|x|+|x-5|\ge5\)，所以等於 1 無解、等於 6 有解。`, String.raw`函數 \(|x|-|x-5|\) 的值域為 \([-5,5]\)，所以等於 1 與 \(-1\) 有解，等於 6 無解。故選（2）（3）（5）。`],
      optionAnalysis: { "1": "左式最小值為 5。", "2": "6 大於最小值 5，存在實數解。", "3": "1 在值域 [-5,5] 內。", "4": "6 超出值域上界 5。", "5": "-1 在值域 [-5,5] 內。" }
    },
    "105M-8": {
      verified: true, sourcePage: 3,
      stem: "依題示甲、乙兩商場的奇異果與蘋果各種袋裝價格，選出正確敘述。",
      options: {
        "1": "在甲商場買一袋 3 顆裝蘋果的金額，低於買三袋 1 顆裝蘋果",
        "2": "乙商場奇異果一袋裝越多顆，每顆單價越低",
        "3": "只買奇異果，在甲商場花 500 元最多可買到 30 顆",
        "4": "買 12 顆奇異果和 4 顆蘋果，甲商場的最低金額低於乙商場",
        "5": "無論買多少顆蘋果，甲商場的最低金額都低於乙商場"
      },
      solution: [String.raw`（1）\(130<3\times45=135\)；（2）乙商場奇異果單價依序為 \(18、50/3、65/4、95/6\)，逐次下降。`, String.raw`（3）甲可用 480 元買 6 袋 5 顆裝，再用 20 元買 1 顆，共 31 顆；（4）甲的最低價為 \(200+175=375\) 元，乙為 \(190+190=380\) 元；（5）例如買 10 顆蘋果，乙的 10 顆裝 420 元比甲的最低組合便宜。`],
      optionAnalysis: { "1": "130 元確實低於 135 元。", "2": "逐一除以顆數後，單價嚴格遞減。", "3": "500 元可買到 31 顆，不只 30 顆。", "4": "甲 375 元，低於乙 380 元。", "5": "買 10 顆蘋果即可得到反例。" }
    },
    "105M-9": {
      verified: true, sourcePage: 3,
      stem: "下列各直線中，請選出和 z 軸互為歪斜線的選項。",
      options: {
        "1": String.raw`\(L_1:\begin{cases}x=0\\z=0\end{cases}\)`,
        "2": String.raw`\(L_2:\begin{cases}y=0\\x+z=1\end{cases}\)`,
        "3": String.raw`\(L_3:\begin{cases}z=0\\x+y=1\end{cases}\)`,
        "4": String.raw`\(L_4:\begin{cases}x=1\\y=1\end{cases}\)`,
        "5": String.raw`\(L_5:\begin{cases}y=1\\z=1\end{cases}\)`
      },
      solution: ["歪斜線須既不相交也不平行。（1）在原點與 z 軸相交；（2）在 \((0,0,1)\) 相交；（4）與 z 軸平行。", "（3）的方向不平行 z 軸且無交點；（5）亦不平行 z 軸且無交點，所以選（3）（5）。"],
      optionAnalysis: { "1": "此線是 y 軸，與 z 軸交於原點。", "2": String.raw`與 z 軸交於 \((0,0,1)\)。`, "3": "不相交也不平行，是歪斜線。", "4": "方向與 z 軸相同，兩線平行。", "5": "不相交也不平行，是歪斜線。" }
    },
    "105M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a、b、c\) 皆為正整數，考慮多項式
      \[
      f(x)=x^4+ax^3+bx^2+cx+2。
      \]
      請選出正確選項。`,
      options: { "1": String.raw`\(f(x)=0\) 無正根`, "2": String.raw`\(f(x)=0\) 一定有實根`, "3": String.raw`\(f(x)=0\) 一定有虛根`, "4": String.raw`\(f(1)+f(-1)\) 是偶數`, "5": String.raw`若 \(a+c>b+3\)，則有一根介於 \(-1\) 與 0 之間` },
      solution: [String.raw`當 \(x>0\) 時各項皆正，故無正根。（4）
      \[
      f(1)+f(-1)=6+2b
      \]
      為偶數。`, String.raw`若 \(a+c>b+3\)，則 \(f(-1)=b+3-a-c<0\)，而 \(f(0)=2>0\)，由介值定理知 \((-1,0)\) 內有根。`],
      optionAnalysis: { "1": "正 x 代入後每一項皆正，不可能為 0。", "2": "係數條件不能保證一定有實根。", "3": String.raw`例如 \((x+1)^3(x+2)\) 的係數均符合條件且四根皆為實數。`, "4": String.raw`相加後奇次項消去，留下 \(6+2b\)。`, "5": String.raw`\(f(-1)<0<f(0)\)，故區間內至少有一根。` }
    },
    "105M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`某班 41 人，原始成績皆不超過 59 分。原始成績 x 經
      \[
      40\log_{10}\left(\frac{x+1}{10}\right)+60
      \]
      調整後四捨五入至整數。請選出正確敘述。`,
      options: { "1": "原始 9 分者，新成績為 60 分", "2": "原始成績超過 20 分者，新成績超過 70 分", "3": "調整後全距比原始全距大", "4": "原始中位數所屬學生的新成績仍是新成績中位數", "5": "原始平均數所屬學生的新成績仍等於新成績平均數" },
      solution: [String.raw`調分函數嚴格遞增，因此保留大小次序與中位數。（1）代 \(x=9\) 得 60；（2）\(x\ge21\) 時新成績至少約 73.7，四捨五入後超過 70。`, "此函數不是線性函數，不能保證全距變大，也不保留平均數。故選（1）（2）（4）。"],
      optionAnalysis: { "1": String.raw`\(\log_{10}1=0\)，新成績為 60。`, "2": "整數成績超過 20 即至少 21，調整後超過 70。", "3": "對數函數在此範圍會壓縮高分端差距，不能保證。", "4": "嚴格遞增轉換保留第 21 名的位置。", "5": "非線性轉換一般不保留算術平均數。" }
    },
    "105M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`在 \(\triangle ABC\) 中，已知 \(\angle A=20^\circ、AB=5、BC=4\)。請選出可以確定的量。`,
      options: { "1": String.raw`\(\cos B\)`, "2": String.raw`\(\sin C\)`, "3": "三角形面積", "4": "內切圓半徑", "5": "外接圓半徑" },
      solution: [String.raw`依通常記號，\(a=BC=4、c=AB=5\)。由正弦定理
      \[
      \frac{\sin C}{5}=\frac{\sin20^\circ}{4},
      \]
      所以 \(\sin C\) 可確定；外接圓半徑 \(R=\frac{a}{2\sin A}=\frac{2}{\sin20^\circ}\) 也可確定。`, "這是 SSA 情形，可能形成兩個不同三角形，因此其餘量不一定唯一。"],
      optionAnalysis: { "1": "SSA 可能有兩個三角形，B 不唯一。", "2": "由正弦定理可直接確定。", "3": "夾角與高度可能不同，面積不唯一。", "4": "周長與面積不唯一，內切圓半徑也不唯一。", "5": "由已知對邊與其對角即可確定外接圓半徑。" }
    },
    "105M-13": {
      verified: true, sourcePage: 4,
      stem: "甲、乙、丙、丁四位男生各騎一台機車，A、B、C、D 四位女生依序抽鑰匙。只有 B 認得甲的鑰匙且絕對不選，其餘可選鑰匙機會均等。請選出正確敘述。",
      options: { "1": "A 抽到甲的機率大於 C 抽到甲的機率", "2": "C 抽到甲的機率大於 D 抽到甲的機率", "3": "A 抽到乙的機率大於 B 抽到乙的機率", "4": "B 抽到丙的機率大於 C 抽到丙的機率", "5": "C 抽到甲的機率大於 C 抽到乙的機率" },
      solution: [String.raw`依序枚舉條件機率可得
      \[
      P(A甲)=\frac14,\quad P(C甲)=P(D甲)=\frac38，
      \]
      \[
      P(A乙)=\frac14,\quad P(B乙)=P(B丙)=\frac13，
      \]
      且 \(P(C丙)=P(C乙)=\frac5{24}\)。`, String.raw`因此（4）\(\frac13>\frac5{24}\)，（5）\(\frac38>\frac5{24}\)，其餘皆不成立。`],
      optionAnalysis: { "1": String.raw`\(\frac14<\frac38\)。`, "2": "兩者機率同為 3/8。", "3": String.raw`\(\frac14<\frac13\)。`, "4": String.raw`\(\frac13>\frac5{24}\)。`, "5": String.raw`\(\frac38>\frac5{24}\)。` }
    },
    "105M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`考慮元素只能是 0 或 1 的 \(2\times3\) 矩陣，要求兩列不同，且每列不能全為 0。這樣的矩陣共有多少個？`,
      solution: [String.raw`一列共有 \(2^3-1=7\) 種非零列向量。第一列有 7 種，第二列須與第一列不同，有 6 種，所以共有 \(7\times6=42\) 個。`]
    },
    "105M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`坐標平面上 \(\vec u=(1,2)、\vec v=(3,4)\)。令 \(\Omega\) 為滿足
      \[
      \overrightarrow{OP}=x\vec u+y\vec v,\qquad \frac12\le x\le1,\quad -3\le y\le\frac12
      \]
      的所有點 P 所成區域，求 \(\Omega\) 的面積。`,
      solution: [String.raw`係數區域的邊長分別為 \(\frac12\) 與 \(\frac72\)，而
      \[
      |\det(\vec u,\vec v)|=|1\cdot4-2\cdot3|=2。
      \]
      線性轉換後面積為 \(\frac12\cdot\frac72\cdot2=\frac72\)。`]
    },
    "105M-16": {
      verified: true, sourcePage: 5,
      stem: "從橢圓的兩焦點分別作垂直於長軸的直線，交橢圓於四點。連此四點得到邊長為 2 的正方形，求橢圓的長軸長。",
      solution: [String.raw`設半長軸、半短軸、焦距為 \(a、b、c\)。四點坐標為 \((\pm c,\pm b^2/a)\)。正方形邊長 2 給出
      \[
      c=1,\qquad \frac{b^2}{a}=1。
      \]
      又 \(c^2=a^2-b^2\)，故 \(1=a^2-a\)，得 \(a=\frac{1+\sqrt5}{2}\)。長軸長為 \(2a=1+\sqrt5\)。`]
    },
    "105M-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`線性方程組
      \[
      \begin{cases}
      x+2y+3z=0\\
      2x+y+3z=6\\
      x-y=6\\
      x-2y-z=8
      \end{cases}
      \]
      經高斯消去後，簡化增廣矩陣前兩列為 \([1,0,a,b]\)、\([0,1,c,d]\)。求 \(a、b、c、d\)。`,
      solution: [String.raw`列運算可得簡化列梯形矩陣
      \[
      \begin{bmatrix}
      1&0&1&4\\
      0&1&1&-2\\
      0&0&0&0\\
      0&0&0&0
      \end{bmatrix}。
      \]
      因此 \(a=1、b=4、c=1、d=-2\)。`]
    },
    "105M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`設 a 為實數。第一象限內滿足
      \[
      \begin{cases}
      x-3y\le a\\
      x+2y\le14
      \end{cases}
      \]
      的區域面積為 \(\frac{213}{5}\)，求 a。`,
      solution: [String.raw`只考慮 \(x+2y\le14\) 時，第一象限三角形面積為 49。直線 \(x-3y=a\) 截去靠近 x 軸的三角形，其底為 \(14-a\)，高為 \(\frac{14-a}{5}\)。`, String.raw`所以
      \[
      49-\frac{(14-a)^2}{10}=\frac{213}{5}。
      \]
      得 \((14-a)^2=64\)。依題示區域型態須 \(a<14\)，故 \(a=6\)。`]
    },
    "105M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`投擲一枚公平骰子三次，點數依序為 \(a,b,c\)。在 b 為奇數的條件下，求
      \[
      \begin{vmatrix}a&b\\b&c\end{vmatrix}>0
      \]
      的機率。`,
      solution: [String.raw`條件樣本共有 \(6\times3\times6=108\) 種。行列式大於 0 等價於 \(ac>b^2\)。`, String.raw`分別固定 \(b=1、3、5\) 枚舉 \(1\le a,c\le6\)，符合的有 \(35、19、3\) 種，共 57 種。因此機率為
      \[
      \frac{57}{108}=\frac{19}{36}。
      \]`]
    },
    "105M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`長方體 \(ABCD-EFGH\) 中，平面 BDG 上一點 P 滿足
      \[
      \overrightarrow{AP}=\frac13\overrightarrow{AB}+2\overrightarrow{AD}+a\overrightarrow{AE}。
      \]
      求實數 a。`,
      solution: [String.raw`以 \(\overrightarrow{AB}、\overrightarrow{AD}、\overrightarrow{AE}\) 為坐標基底，則
      \[
      B=(1,0,0),\quad D=(0,1,0),\quad G=(1,1,1)。
      \]
      平面 BDG 的方程為 \(x+y-z=1\)。`, String.raw`點 \(P=(\frac13,2,a)\) 在此平面上，故
      \[
      \frac13+2-a=1,
      \]
      得 \(a=\frac43\)。`]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "104M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`連續五週記錄某植物高度，得到 \(a_1=1、a_2=2、a_3=6、a_4=15、a_5=31\)。哪一個式子符合此數列？`,
      options: { "1": String.raw`\(a_{t+1}=3a_t-1\)`, "2": String.raw`\(a_t=t!\)`, "3": String.raw`\(a_{t+1}=a_t+t^2\)`, "4": String.raw`\(a_t=2^t-1\)`, "5": String.raw`\(a_{t+1}=ta_t+1\)` },
      solution: [String.raw`相鄰兩項的差依序為 \(1、4、9、16\)，正好是 \(t^2\)。所以 \(a_{t+1}=a_t+t^2\)。`],
      optionAnalysis: { "1": "代入第二項後即不符合。", "2": "第四項應為 24，與 15 不符。", "3": "各次增量依序為 1²、2²、3²、4²。", "4": "第三項會是 7，不是 6。", "5": "第三項會是 5，不是 6。" }
    },
    "104M-2": {
      verified: true, sourcePage: 1,
      stem: "第 1 天得 1 元，此後每天所得為前一天的兩倍，持續至第 30 天。這 30 天所得總額最接近何者？",
      options: { "1": "10,000 元", "2": "1,000,000 元", "3": "100,000,000 元", "4": "1,000,000,000 元", "5": "1,000,000,000,000 元" },
      solution: [String.raw`總額為等比級數
      \[
      1+2+\cdots+2^{29}=2^{30}-1。
      \]
      因 \(2^{10}\approx10^3\)，所以 \(2^{30}\approx10^9\)，最接近十億元。`],
      optionAnalysis: { "1": "只相當於約 14 天的量級。", "2": "約是 2²⁰ 的量級。", "3": "仍比 2³⁰ 小約十倍。", "4": "2³⁰ 約為 10.7 億。", "5": "比正確量級大約一千倍。" }
    },
    "104M-3": {
      verified: true, sourcePage: 1,
      stem: "配件 A、B 單獨故障機率為 0.1、0.15；機器只有兩者都故障才停止。比較 B 串接在 A 後、A 串接在 B 後，以及兩者獨立並列時的停機機率。",
      options: { "1": String.raw`\(p_1>p_2>p_3\)`, "2": String.raw`\(p_2>p_1>p_3\)`, "3": String.raw`\(p_3>p_2>p_1\)`, "4": String.raw`\(p_3>p_1>p_2\)`, "5": String.raw`\(p_1=p_2>p_3\)` },
      solution: [String.raw`B 串接在 A 後時，A 故障即帶動 B 故障，所以 \(p_1=0.1\)；A 串接在 B 後時，\(p_2=0.15\)。`, String.raw`獨立並列時 \(p_3=0.1\times0.15=0.015\)，因此 \(p_2>p_1>p_3\)。`],
      optionAnalysis: { "1": "兩種串接的前置配件故障率不同。", "2": "0.15>0.1>0.015。", "3": "獨立同時故障的機率最小。", "4": "p₃ 不會最大。", "5": "p₁ 與 p₂ 不相等。" }
    },
    "104M-4": {
      verified: true, sourcePage: 2,
      stem: "題圖的正八邊形 ABCDEFGH 為線性規劃可行域。目標函數 \(ax+by+3\) 的最大值只在 B 點取得；改為 \(3-bx-ay\) 時，最大值在哪一點？",
      options: { "1": "A", "2": "B", "3": "C", "4": "D", "5": "E" },
      solution: ["原目標函數的等高線法向量為 \((a,b)\)，且其方向落在頂點 B 的外法向量錐內。", String.raw`新法向量 \((-b,-a)\) 是依題圖將原方向旋轉、對映後所得，落在頂點 A 的外法向量錐內，因此最大值只會在 A 點取得。`],
      optionAnalysis: { "1": "依正八邊形的法向量方向判定，新目標在 A 取最大。", "2": "目標函數的 x、y 係數已交換並變號。", "3": "法向量並未落在 C 的外法向量錐。", "4": "此方向不是 D 的支撐方向。", "5": "E 位於相反側。" }
    },
    "104M-5": {
      verified: true, sourcePage: 2,
      stem: "小明 10 公里路跑的逐公里紀錄如下：時間為 5:00、4:50、4:50、4:55、4:40、4:41、4:35、4:35、4:40、4:34；平均心率為 161、162、165、162、171、170、173、181、171、188；步數為 990、1000、1005、995、1015、1005、1050、1050、1050、1100。選出正確敘述。",
      options: { "1": "由每公里平均心率可知最高心率為 188", "2": "此次路跑每步平均距離小於 1 公尺", "3": "每公里時間與平均心率為正相關", "4": "每公里步數與平均心率為正相關", "5": "每公里時間與步數為負相關" },
      solution: ["每公里平均心率不能推知瞬間最高心率。總步數為 10,260，故每步平均距離約 \(10000/10260<1\) 公尺。", "由資料趨勢可見，心率與步數大致同升，為正相關；完成時間愈短時步數大致愈多，兩者為負相關。"],
      optionAnalysis: { "1": "188 只是某公里的平均心率。", "2": "總步數超過 10,000 步，平均每步小於 1 公尺。", "3": "時間愈短時心率大致愈高，方向為負。", "4": "步數與心率整體同向變動。", "5": "時間與步數整體反向變動。" }
    },
    "104M-6": {
      verified: true, sourcePage: 3,
      stem: "設 \(f(x)\) 是首項係數為 1 的實係數二次多項式，選出正確敘述。",
      options: { "1": String.raw`若 \(f(2)=0\)，則 \(x-2\) 可整除 \(f(x)\)`, "2": String.raw`若 \(f(2)=0\)，則 f 為整係數多項式`, "3": String.raw`若 \(f(2)=0\)，則 \(f(-2)=0\)`, "4": String.raw`若 \(f(2i)=0\)，則 \(f(-2i)=0\)`, "5": String.raw`若 \(f(2i)=0\)，則 f 為整係數多項式` },
      solution: ["由因式定理，（1）正確。實係數多項式的非實根成共軛對，所以若 \(2i\) 是根，\(-2i\) 也是根。", String.raw`此時首一二次式只能是 \((x-2i)(x+2i)=x^2+4\)，確為整係數多項式。故選（1）（4）（5）。`],
      optionAnalysis: { "1": "因式定理直接成立。", "2": "另一根仍可能是任意實數，係數未必為整數。", "3": "實根不必成正負對。", "4": "實係數保證非實根成共軛對。", "5": "首一二次式被唯一決定為 x²+4。" }
    },
    "104M-7": {
      verified: true, sourcePage: 3,
      stem: String.raw`函數 \(y=2^x\) 上四點 A、B、C、D 的 x 坐標依序為 \(-1、0、1、2\)。請選出正確敘述。`,
      options: { "1": "B 在直線 AC 下方", "2": "AB、BC、CD 中以 CD 斜率最大", "3": "四點中 B 最靠近 x 軸", "4": String.raw`直線 \(y=2x\) 與 \(y=2^x\) 有兩個交點`, "5": "A、C 對稱於 y 軸" },
      solution: [String.raw`四點為 \(A(-1,\frac12)、B(0,1)、C(1,2)、D(2,4)\)。AC 在 \(x=0\) 時高度為 \(5/4\)，所以 B 在其下方；三段斜率為 \(\frac12、1、2\)。`, String.raw`方程 \(2^x=2x\) 有 \(x=1、2\) 兩解。最靠近 x 軸的是 A，且 A、C 的 y 坐標不同。`],
      optionAnalysis: { "1": "B 的高度 1 小於 AC 在 x=0 的高度 5/4。", "2": "三段斜率隨 x 增加而增大。", "3": "A 的 y 坐標 1/2 最小。", "4": "x=1、2 都是交點。", "5": "關於 y 軸對稱還須 y 坐標相同。" }
    },
    "104M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`坐標平面上一雙曲線的漸近線為 \(x-y=0\) 與 \(x+y=0\)。請選出正確性質。`,
      options: { "1": String.raw`方程可寫成 \(\frac{x^2}{r^2}-\frac{y^2}{r^2}=\pm1\)，\(r\ne0\)`, "2": "貫軸長等於共軛軸長", "3": "第一象限點 (a,b) 只要 a>1000 就必有 a-b<1", "4": "第一象限兩點若 a<a′，則 b<b′", "5": "同時對稱於 x 軸與 y 軸" },
      solution: [String.raw`漸近線斜率為 \(\pm1\)，故可寫成 \(x^2-y^2=\pm r^2\)，半貫軸與半共軛軸相等，且圖形對稱於兩坐標軸。`, "在第一象限同一分支上，x 增加時 y 也增加；但 r 的大小未限定，單憑 a>1000 不能保證 a-b<1。"],
      optionAnalysis: { "1": "兩種開口方向分別對應等號右側 ±1。", "2": "兩軸半徑相等，故軸長相等。", "3": "差值還受未限定的 r 影響。", "4": "第一象限分支嚴格遞增。", "5": "方程只含 x²、y²，對兩軸皆對稱。" }
    },
    "104M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`題圖中以 M 為圓心、半徑 8，AE 為直徑，圓上 A、B、C、D、E 的相鄰弦等長。若 \(\overrightarrow{MD}=8(\cos(\theta+90^\circ),\sin(\theta+90^\circ))\)，選出正確敘述。`,
      options: { "1": String.raw`\(\overrightarrow{MA}=8(\cos\theta,\sin\theta)\)`, "2": String.raw`\(\overrightarrow{MC}=8(\cos(\theta+45^\circ),\sin(\theta+45^\circ))\)`, "3": String.raw`\(\overrightarrow{MA}\cdot\overrightarrow{MA}=8\)`, "4": String.raw`\(\overrightarrow{MB}\cdot\overrightarrow{MD}=0\)`, "5": String.raw`\(\overrightarrow{BD}=8(\cos\theta+\cos(\theta+90^\circ),\sin\theta+\sin(\theta+90^\circ))\)` },
      solution: ["半圓被四條等弦分成四段相等圓心角，每段為 45°。因此 C 的方向角比 D 少 45°，即為 θ+45°；B 與 D 相差 90°，兩向量垂直。", "向量 MA 的長度平方是 64，不是 8；BD 應由位置向量相減，不是相加。"],
      optionAnalysis: { "1": "依題圖角度次序，MA 的方向角不是 θ。", "2": "C 比 D 少一個 45° 圓心角。", "3": "向量與自身內積是長度平方 64。", "4": "B、D 相隔兩段圓弧，圓心角 90°。", "5": "BD=MD-MB，應是向量相減。" }
    },
    "104M-10": {
      verified: true, sourcePage: 4,
      stem: "全班 45 人，35 人有手機、24 人有平板。令 A 為兩者都有、B 為只有手機、C 為只有平板、D 為兩者皆無的人數，選出恆成立的不等式。",
      options: { "1": String.raw`\(A>B\)`, "2": String.raw`\(A>C\)`, "3": String.raw`\(B>C\)`, "4": String.raw`\(B>D\)`, "5": String.raw`\(C>D\)` },
      solution: [String.raw`以 A 表示交集人數，則
      \[
      B=35-A,\quad C=24-A,\quad D=A-14，
      \]
      且 \(14\le A\le24\)。`, String.raw`因此 \(A>C\)、\(B-C=11>0\)，且 \(B-D=49-2A\ge1>0\)。其餘不一定成立。`],
      optionAnalysis: { "1": "A 在範圍較小時可能不大於 B。", "2": "A≥14，而 C≤10，恆成立。", "3": "B-C 固定為 11。", "4": "A≤24，使 B-D≥1。", "5": "A 較大時 D 可能不小於 C。" }
    },
    "104M-11": {
      verified: true, sourcePage: 4,
      stem: "在平地 A 點測得山頂 P 仰角 13°，向山前進 37 公丈至 B 點後測得仰角 15°。已知 tan13°≈0.231、tan15°≈0.268，估算山高。",
      solution: [String.raw`設 B 到山腳水平距離為 x、山高為 h，則
      \[
      h=0.268x=0.231(x+37)。
      \]
      解得 \(x\approx230.92\)，故 \(h\approx61.89\)，四捨五入為 62 公丈。`]
    },
    "104M-12": {
      verified: true, sourcePage: 4,
      stem: "袋中有 3 白 3 紅球，五人依序各取一球且不放回。在甲、乙取出不同色球的條件下，戊取得紅球的機率為何？",
      solution: ["甲、乙取出不同色後，袋中必剩 2 顆紅球與 2 顆白球。丙、丁、戊在剩餘四球中的位置對稱，因此戊取紅球的機率為 \(2/4=1/2\)。"]
    },
    "104M-13": {
      verified: true, sourcePage: 4,
      stem: "陽台最多放 8 盆玫瑰、百合、菊花與向日葵，可以不擺滿，但每種至少一盆。共有多少種購買方法？",
      solution: [String.raw`令四種盆栽數量各先扣 1，得到四個非負整數，總和至多為 4。加入一個「未使用空位」變數後，化為五個非負整數總和為 4。`, String.raw`方法數為
      \[
      \binom{4+5-1}{5-1}=\binom84=70。
      \]`]
    },
    "104M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`平面 \(x-y+z=0\) 與三平面 \(x=2、x-y=-2、x+y=2\) 的交線，在前一平面上圍成三角形。求此三角形周長。`,
      solution: [String.raw`三頂點是三組邊界平面兩兩相交後再代入 \(x-y+z=0\)，得
      \[
      (2,4,2)、(2,0,-2)、(0,2,2)。
      \]`, String.raw`三邊長分別為 \(4\sqrt2、2\sqrt6、2\sqrt2\)，所以周長為 \(6\sqrt2+2\sqrt6\)。`]
    },
    "104M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`直線 \(L_1:x+2y=0、L_2:3x-5y=0\)。從 \(Q_1\in L_1\) 測得 \(\overrightarrow{Q_1P}=(-7,9)\)，從 \(Q_2\in L_2\) 測得 \(\overrightarrow{Q_2P}=(-6,-8)\)。求 P 坐標。`,
      solution: [String.raw`設 \(P=(x,y)\)。則 \(Q_1=(x+7,y-9)\)，代入 \(L_1\) 得 \(x+2y=11\)；\(Q_2=(x+6,y+8)\)，代入 \(L_2\) 得 \(3x-5y=22\)。`, String.raw`聯立解得 \(P=(9,1)\)。`]
    },
    "104M-16": {
      verified: true, sourcePage: 5,
      stem: "貸款 300 萬元、年利率 3%，三年期滿一次還清。若由每年複利改為單利，三年期滿可少繳多少元？",
      solution: [String.raw`複利本利和為 \(3{,}000{,}000(1.03)^3\)，單利本利和為 \(3{,}000{,}000(1+3\times0.03)\)。`, String.raw`兩者差額為
      \[
      3{,}000{,}000(1.092727-1.09)=8{,}181\text{ 元}。
      \]`]
    },
    "104M-17": {
      verified: true, sourcePage: 5,
      stem: "A、B、C 三據點起初各 36 人。每次把 A 的 1/6 分別調往 B、C；B 的 1/6、1/3 分別調往 A、C；C 的 1/6 分別調往 A、B。相同調動做兩次後，C 有幾人？",
      solution: [String.raw`一次調動可寫成
      \[
      \begin{bmatrix}A'\\B'\\C'\end{bmatrix}
      =
      \begin{bmatrix}2/3&1/6&1/6\\1/6&1/2&1/6\\1/6&1/3&2/3\end{bmatrix}
      \begin{bmatrix}A\\B\\C\end{bmatrix}。
      \]`, "由 \((36,36,36)\) 依此矩陣連乘兩次，得到 C 據點為 44 人。"]
    },
    "104M-18": {
      verified: true, sourcePage: 6,
      stem: "一底面為正方形的四角錐，其展開圖如官方題圖，兩側面的三角形邊長為 3、4、5。求角錐體積。",
      solution: [String.raw`正方形底邊為 4。令底面中心為原點、左右頂點的 x 坐標為 \(\mp2\)，錐頂投影為 \((t,0)\)，錐高為 h。由錐頂到左側兩頂點為 3、到右側兩頂點為 5，
      \[
      h^2+(t+2)^2+2^2=3^2,\qquad h^2+(t-2)^2+2^2=5^2。
      \]
      相減得 \(t=-2\)，再代回得 \(h=\sqrt5\)。`, String.raw`因此體積為
      \[
      V=\frac13\times16\sqrt5=\frac{16\sqrt5}{3}。
      \]`]
    },
    "104M-19": {
      verified: true, sourcePage: 6,
      stem: "正四角錐每個斜面的坡度皆為 \(2/5\)。求相鄰斜面夾角餘弦值的絕對值。",
      solution: [String.raw`可把半底邊取為 5、錐高取為 2。兩相鄰斜面的法向量可分別取為
      \[
      \vec n_1=(2,0,5),\qquad \vec n_2=(0,2,5)。
      \]`, String.raw`故夾角餘弦絕對值為
      \[
      \frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}
      =\frac{25}{29}。
      \]`]
    },
    "104M-20": {
      verified: true, sourcePage: 6,
      stem: "汽車迴轉題圖中，軸距 AB 為 2.85 公尺，方向盤轉至極限時輪子方向偏 28°；已知 sin28°≈0.4695，求迴轉半徑 BC。",
      solution: [String.raw`由輪胎行進方向分別垂直於 AC、BC，依題圖得到直角三角形關係
      \[
      \sin28^\circ=\frac{AB}{BC}。
      \]`, String.raw`所以
      \[
      BC=\frac{2.85}{0.4695}\approx6.07，
      \]
      四捨五入到小數第一位為 6.1 公尺。`]
    }
  });
})();

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

(() => {
  Object.assign(window.MATH_CONTENT, {
    "102M-1": {
      verified: true, sourcePage: 1,
      stem: "參選模範生須同時符合「國文或英文至少 70 分」與「數學及格」。小文國文 65 分且不具資格，哪一推論必然正確？",
      options: { "1": "英文未達 70 分", "2": "數學不及格", "3": "英文至少 70 分但數學不及格", "4": "英文未達 70 分且數學不及格", "5": "英文未達 70 分或數學不及格" },
      solution: [String.raw`資格條件是 \((國文\ge70\ \text{或}\ 英文\ge70)\) 且數學及格。已知國文不足且整體條件不成立，依德摩根律只能確定「英文不足 70 或數學不及格」。`],
      optionAnalysis: { "1": "數學不及格時，英文仍可能達 70。", "2": "英文不足 70 時，數學仍可能及格。", "3": "只是其中一種可能。", "4": "不必兩個條件同時失敗。", "5": "正是資格條件否定後的必然結論。" }
    },
    "102M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`令 \(a=2.6^{10}-2.6^9、b=2.6^{11}-2.6^{10}、c=\frac{2.6^{11}-2.6^9}{2}\)，比較 a、b、c。`,
      options: { "1": String.raw`\(a>b>c\)`, "2": String.raw`\(a>c>b\)`, "3": String.raw`\(b>a>c\)`, "4": String.raw`\(b>c>a\)`, "5": String.raw`\(c>b>a\)` },
      solution: [String.raw`提出 \(2.6^9\)：
      \[
      a=1.6(2.6^9),\quad b=4.16(2.6^9),\quad c=2.88(2.6^9)。
      \]
      因共同因數為正，故 \(b>c>a\)。`],
      optionAnalysis: { "1": "b 其實是 a 的 2.6 倍。", "2": "a 是三者最小。", "3": "c 大於 a。", "4": "比較提出共同因數後的係數即可。", "5": "b 大於 c。" }
    },
    "102M-3": {
      verified: true, sourcePage: 1,
      stem: "袋中有 3 白 2 黑球，甲、乙、丙依序各抽一球且不放回。在甲、乙同色的條件下，丙抽到白球的機率為何？",
      options: { "1": String.raw`\(\frac13\)`, "2": String.raw`\(\frac5{12}\)`, "3": String.raw`\(\frac12\)`, "4": String.raw`\(\frac35\)`, "5": String.raw`\(\frac23\)` },
      solution: [String.raw`前兩球皆白的機率為 \(3/10\)，皆黑為 \(1/10\)，在同色條件下兩情形權重為 \(3/4、1/4\)。`, String.raw`前者剩餘白球比例 \(1/3\)，後者剩下全為白球，故
      \[
      \frac34\cdot\frac13+\frac14\cdot1=\frac12。
      \]`],
      optionAnalysis: { "1": "只算了前兩球皆白的後續比例。", "2": "條件情形的權重並非相等。", "3": "依兩種同色情形加權得 1/2。", "4": "這是抽球前的白球比例。", "5": "高估前兩球皆黑的條件權重。" }
    },
    "102M-4": {
      verified: true, sourcePage: 2,
      stem: "五組資料的 x 均為 2、3、5，y 依序為：(1) 1、13、1；(2) 3、10、2；(3) 5、7、3；(4) 9、1、5；(5) 7、4、4。各組迴歸直線相同且皆負相關，選出相關係數最小者。",
      options: { "1": "y=1、13、1", "2": "y=3、10、2", "3": "y=5、7、3", "4": "y=9、1、5", "5": "y=7、4、4" },
      solution: ["各組迴歸斜率相同，而相關係數 \(r\) 與斜率的關係為 \(斜率=r\,s_y/s_x\)。x 的標準差固定，所以在負斜率下，y 的標準差愈小，r 愈負。", "逐組比較 y 的離散程度，第（5）組最集中，因此相關係數最小。"],
      optionAnalysis: { "1": "y 的離散程度最大，相關絕對值反而較小。", "2": "離散程度仍大於第（5）組。", "3": "不如第（5）組集中。", "4": "資料起伏較大。", "5": "同斜率下最小的 y 標準差對應最負的 r。" }
    },
    "102M-5": {
      verified: true, sourcePage: 2,
      stem: "將 24 顆雞蛋分到紅、黃、綠三籃，每籃至少一顆，且黃、綠兩籃都裝奇數顆。共有幾種分法？",
      options: { "1": "55", "2": "66", "3": "132", "4": "198", "5": "253" },
      solution: [String.raw`令黃、綠籃分別有 \(2i+1、2j+1\) 顆，其中 \(i,j\ge0\)。紅籃有 \(22-2i-2j\) 顆且至少 1 顆，故 \(i+j\le10\)。`, String.raw`非負整數對的數目為 \(1+2+\cdots+11=66\)。`],
      optionAnalysis: { "1": "漏掉一層合法的整數解。", "2": "i+j≤10 的非負整數解共有 66 組。", "3": "把黃、綠互換重複加倍。", "4": "未正確處理奇數限制。", "5": "接近無奇偶限制的分法數。" }
    },
    "102M-6": {
      verified: true, sourcePage: 2,
      stem: "熱氣球等速垂直上升，10:00 仰角 30°，10:10 仰角 34°。依題附三角函數表，估計 10:30 的仰角。",
      options: { "1": "39°", "2": "40°", "3": "41°", "4": "42°", "5": "43°" },
      solution: [String.raw`設水平距離為 d。高度與 \(\tan\theta\) 成正比。每 10 分鐘高度增量為
      \[
      d(\tan34^\circ-\tan30^\circ)=d(0.675-0.577)=0.098d。
      \]`, String.raw`10:30 時 \(\tan\theta=0.577+3(0.098)=0.871\)，最接近表中的 \(\tan41^\circ=0.869\)。`],
      optionAnalysis: { "1": "tan39°=0.810，偏低。", "2": "tan40°=0.839，仍偏低。", "3": "tan41°=0.869，最接近 0.871。", "4": "tan42°=0.900，偏高。", "5": "tan43°=0.933，更高。" }
    },
    "102M-7": {
      verified: true, sourcePage: 3,
      stem: String.raw`令 \(M=\begin{bmatrix}1&1\\0&2\end{bmatrix}\)，且 \(M^n=\begin{bmatrix}a_n&b_n\\c_n&d_n\end{bmatrix}\)。選出正確敘述。`,
      options: { "1": String.raw`\(a_2=1\)`, "2": String.raw`\(a_1,a_2,a_3\) 為等比數列`, "3": String.raw`\(d_1,d_2,d_3\) 為等比數列`, "4": String.raw`\(b_1,b_2,b_3\) 為等差數列`, "5": String.raw`\(c_1,c_2,c_3\) 為等差數列` },
      solution: [String.raw`可歸納得
      \[
      M^n=\begin{bmatrix}1&2^n-1\\0&2^n\end{bmatrix}。
      \]
      因此 \(a_n\equiv1、d_n=2^n、c_n\equiv0\)；而 \(b_1,b_2,b_3=1,3,7\) 不成等差。`],
      optionAnalysis: { "1": "a₂=1。", "2": "常數 1 數列是公比 1 的等比數列。", "3": "dₙ 是公比 2 的等比數列。", "4": "1、3、7 的相鄰差不相等。", "5": "常數 0 數列是公差 0 的等差數列。" }
    },
    "102M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a>1>b>0\)，選出必然正確的不等式。`,
      options: { "1": String.raw`\((-a)^7>(-a)^9\)`, "2": String.raw`\(b^{-9}>b^{-7}\)`, "3": String.raw`\(\log_{10}\frac1a>\log_{10}\frac1b\)`, "4": String.raw`\(\log_a1>\log_b1\)`, "5": String.raw`\(\log_ab\ge\log_ba\)` },
      solution: ["a>1 時 a⁹>a⁷，乘負號後不等號反向，故（1）成立。0<b<1 時負指數次方隨指數絕對值增加而增大，故（2）成立。", "1/a<1<1/b，所以（3）錯；兩個以 1 為真數的對數皆為 0；（5）無法由條件固定大小。"],
      optionAnalysis: { "1": "-a⁷ 大於更負的 -a⁹。", "2": "1/b⁹ 大於 1/b⁷。", "3": "左側為負、右側為正。", "4": "兩側都等於 0。", "5": "取不同 a、b 可改變兩側大小。" }
    },
    "102M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`a<b<c。開口向上的 f 之零點為 a、b，開口向上的 g 之零點為 b、c。選出 \(y=f(x)+g(x)\) 圖形可能的情況。`,
      options: { "1": "水平直線", "2": "與 x 軸交一點的直線", "3": "與 x 軸無交點的拋物線", "4": "與 x 軸僅交一點的拋物線", "5": "與 x 軸交兩點的拋物線" },
      solution: [String.raw`寫成 \(f=A(x-a)(x-b)、g=B(x-b)(x-c)\)，其中 \(A,B>0\)。則
      \[
      f+g=(x-b)\{A(x-a)+B(x-c)\}。
      \]`, "圖形必為開口向上的拋物線且有零點 b；括號內的另一根可能等於 b，也可能不等於 b，所以可能相切一點或相交兩點。"],
      optionAnalysis: { "1": "二次項係數 A+B>0。", "2": "不會退化為直線。", "3": "x=b 必為零點。", "4": "兩根重合於 b 時成立。", "5": "另一根與 b 不同時成立。" }
    },
    "102M-10": {
      verified: true, sourcePage: 4,
      stem: String.raw`給定 \(Q_1(1,0)、Q_2(-1,0)\)。選出圖形上至少有一點 P 滿足 \(\overrightarrow{PQ_1}\cdot\overrightarrow{PQ_2}<0\) 的選項。`,
      options: { "1": String.raw`\(y=\frac12\)`, "2": String.raw`\(y=x^2+1\)`, "3": String.raw`\(-x^2+2y^2=1\)`, "4": String.raw`\(4x^2+y^2=1\)`, "5": String.raw`\(\frac{x^2}{2}-\frac{y^2}{2}=1\)` },
      solution: [String.raw`若 \(P=(x,y)\)，則
      \[
      \overrightarrow{PQ_1}\cdot\overrightarrow{PQ_2}=x^2+y^2-1。
      \]
      條件等價於 P 在單位圓內。`, "（1）可取 (0,1/2)；（3）可取 (0,1/√2)；（4）可取 (1/2,0)。其餘圖形與單位圓內部無交集。"],
      optionAnalysis: { "1": "(0,1/2) 在單位圓內。", "2": "最小距離也等於 1，不符合嚴格小於。", "3": "(0,1/√2) 符合。", "4": "(1/2,0) 符合。", "5": "此雙曲線上 x²+y² 至少為 2。" }
    },
    "102M-11": {
      verified: true, sourcePage: 4,
      stem: "F₁、F₂ 為橢圓兩焦點。以 F₁ 為中心作任意方向的正方形 S，S 可能有幾個頂點落在橢圓上？",
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: ["改變正方形的邊長與旋轉角，可構造沒有頂點、恰一個頂點或一對頂點落在橢圓上的情形。", "若有三個以上頂點在橢圓上，正方形關於焦點的中心對稱關係會迫使橢圓也以焦點為中心，與非圓橢圓的兩焦點性質矛盾。因此可能數為 0、1、2。"],
      optionAnalysis: { "1": "可調整邊長讓單一射線交點命中。", "2": "可藉旋轉與邊長讓一對頂點命中。", "3": "三點條件會導致不可能的對稱。", "4": "四頂點同在橢圓會使焦點成為橢圓中心。", "5": "取足夠小或足夠大的正方形即可無頂點命中。" }
    },
    "102M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`實數等比數列 \(a_n\) 公比為 \(-0.8\)；實數等差數列 \(b_n\) 首項為 10。已知 \(a_9>b_9、a_{10}>b_{10}\)，選出正確敘述。`,
      options: { "1": String.raw`\(a_9a_{10}<0\)`, "2": String.raw`\(b_{10}>0\)`, "3": String.raw`\(b_9>b_{10}\)`, "4": String.raw`\(a_9>a_{10}\)`, "5": String.raw`\(a_8>b_8\)` },
      solution: ["相鄰兩個非零等比項因公比為負而異號，故（1）成立。又無論 a₉、a₁₀ 哪個為負，對應的 b 項更小；配合 b₁=10 可推出等差公差為負。", "進一步由第 9 或第 10 項已降到負值可知 \(b_9>b_{10}\)。其餘選項無法固定。"],
      optionAnalysis: { "1": "相鄰項公比為負，乘積為負。", "2": "條件可能迫使 b₁₀ 為負。", "3": "等差公差必為負。", "4": "a₉ 的正負未固定。", "5": "已知不等式不能向前一項直接保留。" }
    },
    "102M-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`整數 k 滿足 \(\frac{k}{3}<\sqrt{31}<\frac{k+1}{3}\)，求 k。`,
      solution: [String.raw`同乘 3 得 \(k<3\sqrt{31}<k+1\)。因 \(3\sqrt{31}\approx16.70\)，所以 \(k=16\)。`]
    },
    "102M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`實數 a、b 滿足 \((a+bi)(2+6i)=-80\)，其中 \(i^2=-1\)。求 \((a,b)\)。`,
      solution: [String.raw`比較實部與虛部：
      \[
      2a-6b=-80,\qquad6a+2b=0。
      \]
      由 \(b=-3a\) 代入得 \(20a=-80\)，所以 \((a,b)=(-4,12)\)。`]
    },
    "102M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`平面上 \(A(a,3)、B(16,b)、C(19,12)\) 共線，C 不在 A、B 之間且 \(AC:BC=3:1\)。求 \(a+b\)。`,
      solution: [String.raw`依外分位置，B 在 A、C 之間，且 \(\overrightarrow{AC}=3\overrightarrow{BC}\)，所以 \(A=3B-2C\)。`, String.raw`因此 \(A=(10,3b-24)\)。由 y 坐標 \(3=3b-24\) 得 \(b=9、a=10\)，故 \(a+b=19\)。`]
    },
    "102M-16": {
      verified: true, sourcePage: 5,
      stem: "100 公斤香蕉三天售完，單價依序為每公斤 40、36、32 元，總收入 3720 元。若第三天售 t 公斤，第二天售出量可寫成 at+b，求 a、b。",
      solution: [String.raw`設前三天銷量為 \(x,y,t\)。由 \(x+y+t=100\) 與 \(40x+36y+32t=3720\)，扣除每公斤 32 元的基準收入得
      \[
      8x+4y=520\Longleftrightarrow2x+y=130。
      \]`, String.raw`聯立可得 \(x=t+30、y=70-2t\)，所以 \(a=-2、b=70\)。`]
    },
    "102M-17": {
      verified: true, sourcePage: 5,
      stem: String.raw`一圓被兩平行線 \(x-y=1\) 與 \(x-y=5\) 所截的弦長皆為 14，求圓面積。`,
      solution: ["等長平行弦到圓心距離相等，所以圓心位於中線 x-y=3。它到任一弦所在直線的距離為 \(2/\sqrt2=\sqrt2\)。", String.raw`半弦長為 7，故 \(r^2=7^2+(\sqrt2)^2=51\)，圓面積為 \(51\pi\)。`]
    },
    "102M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`平面向量 \(|\vec A|=1、|\vec B|=2\)，夾角 \(60^\circ\)。令 \(\vec u=\vec A+\vec B、\vec v=x\vec A+y\vec B\)，且 \(6\le x+y\le8、-2\le x-y\le0\)。求 \(\vec u\cdot\vec v\) 最大值。`,
      solution: [String.raw`因 \(\vec A\cdot\vec B=1\)，
      \[
      \vec u\cdot\vec v=2x+5y。
      \]
      令 \(s=x+y、d=x-y\)，則此式為 \((7s-3d)/2\)。`, String.raw`在 \(6\le s\le8、-2\le d\le0\) 中，取 \(s=8、d=-2\) 最大，值為 \((56+6)/2=31\)。`]
    },
    "102M-19": {
      verified: true, sourcePage: 6,
      stem: "銳角三角形 ABC 的外接圓半徑為 8；圓心到 AB 的距離為 2，到 BC 的距離為 7。求 AC。",
      solution: [String.raw`半徑 R 的圓中，圓心到弦距離為 d 時，弦長為 \(2\sqrt{R^2-d^2}\)。故
      \[
      AB=4\sqrt{15},\qquad BC=2\sqrt{15}。
      \]`, "再由兩弦所對圓心角與三角形為銳角的條件選定相應弧，配合餘弦定理可得 \(AC=4\sqrt{15}\)。"]
    },
    "102M-20": {
      verified: true, sourcePage: 6,
      stem: "邊長 6 的正立方體中，P 在 CG 上且 CP:PG=1:5，R 為 EH 中點，Q 在 AD 上。若通過 P、Q、R 的平面與直線 AG 不相交，求 Q 的 y 坐標。",
      solution: [String.raw`依題示坐標得 \(P=(6,6,1)、R=(0,3,6)、Q=(0,q,0)\)。平面 PQR 不與 AG 相交，故須與方向 \((1,1,1)\) 平行。`, String.raw`令三向量的混合積為 0：
      \[
      \det\begin{bmatrix}6&6-q&1\\0&3-q&6\\1&1&1\end{bmatrix}=15-11q=0。
      \]
      因此 \(q=\frac{15}{11}\)。`]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "101M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`計算 \(\sqrt{\frac1{5^2}+\frac1{4^2}+1}\)，其值等於哪一個小數？`,
      options: { "1": "1.01", "2": "1.05", "3": "1.1", "4": "1.15", "5": "1.21" },
      solution: [String.raw`\[
      \sqrt{\frac1{25}+\frac1{16}+1}
      =\sqrt{\frac{16+25+400}{400}}
      =\frac{21}{20}=1.05。
      \]`],
      optionAnalysis: { "1": "根號內的分數不能直接相加小數位。", "2": "精確值為 21/20。", "3": "高估兩個分數的貢獻。", "4": "未先通分計算。", "5": "這是本卷選填題另一題的數值，與本式無關。" }
    },
    "101M-2": {
      verified: true, sourcePage: 1,
      stem: "用邊長 1 公分的正立方體堆成十層階梯：最下層 10 塊、第二層 9 塊，依序至最上層 1 塊。求立體總表面積。",
      options: { "1": "75 平方公分", "2": "90 平方公分", "3": "110 平方公分", "4": "130 平方公分", "5": "150 平方公分" },
      solution: ["前、後兩個階梯面各含 \(1+2+\cdots+10=55\) 個單位面，共 110。", "上、下兩面各 10；左、右及各階差合計再提供 20 個單位面，因此總表面積為 \(110+20+20=150\)。"],
      optionAnalysis: { "1": "只計入部分外露面。", "2": "漏算前後階梯面的若干單位格。", "3": "只算了前、後兩面。", "4": "仍漏算一組外露面。", "5": "逐方向計算外露單位面得到 150。" }
    },
    "101M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`依題附常用對數表，估計 \(10^{3.032}\) 最接近哪一個整數？`,
      options: { "1": "101", "2": "201", "3": "1007", "4": "1076", "5": "2012" },
      solution: [String.raw`由表中 \(\log 1.07=0.0294、\log1.08=0.0334\)，可知 \(10^{0.032}\) 約為 1.076。`, String.raw`因此 \(10^{3.032}=1000\times10^{0.032}\approx1076\)。`],
      optionAnalysis: { "1": "少了一個 10 的次方量級。", "2": "尾數估計不符對數表。", "3": "把 0.032 的影響估得太小。", "4": "由 1.07 與 1.08 的對數內插可得。", "5": "約大了近一倍。" }
    },
    "101M-4": {
      verified: true, sourcePage: 2,
      stem: "甲、乙兩校人數相同且成績近似常態分布。甲平均 60、標準差 10；乙平均 65、標準差 5。粗線代表甲、細線代表乙，選出正確分布圖。",
      options: { "1": "圖（1）", "2": "圖（2）", "3": "圖（3）", "4": "圖（4）", "5": "圖（5）" },
      solution: ["甲的平均較低，所以粗線中心在 60、位於細線中心 65 的左側；甲的標準差較大，所以粗線較寬且峰較低。", "兩校人數相同使兩曲線下面積相同。符合三項條件的是圖（1）。"],
      optionAnalysis: { "1": "中心、寬窄與曲線面積皆符合。", "2": "曲線中心或寬窄配置錯誤。", "3": "未呈現甲校較大的標準差。", "4": "平均數左右關係不符。", "5": "曲線高度與寬度沒有同時符合相同面積。" }
    },
    "101M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`正實數 x、y 滿足 \(\log_{10}x=2.8、\log_{10}y=5.6\)。估計 \(\log_{10}(x^2+y)\)。`,
      options: { "1": "2.8", "2": "5.6", "3": "5.9", "4": "8.4", "5": "11.2" },
      solution: [String.raw`因 \(\log y=2\log x\)，所以 \(y=x^2=10^{5.6}\)。因此
      \[
      \log(x^2+y)=\log(2\times10^{5.6})=5.6+\log2\approx5.901。
      \]`],
      optionAnalysis: { "1": "只取了 log x。", "2": "漏掉兩個相等項相加所產生的 log2。", "3": "5.6+0.301 約為 5.9。", "4": "把對數值直接錯誤相加。", "5": "誤把 log(x²+y) 當成兩倍 log y。" }
    },
    "101M-6": {
      verified: true, sourcePage: 3,
      stem: "從編號 0～9 的十顆球放回抽取兩次。兩球編號差的絕對值為多少時，出現機率最大？",
      options: { "1": "0", "2": "1", "3": "4", "4": "5", "5": "9" },
      solution: ["差為 0 的有 10 個有序結果；差為 \(k>0\) 時有 \(2(10-k)\) 個有序結果。", "當 k=1 時共有 18 個，是所有差值中最多，因此機率最大。"],
      optionAnalysis: { "1": "只有兩次編號相同的 10 種。", "2": "相鄰編號共有 18 個有序結果。", "3": "只有 12 個有序結果。", "4": "只有 10 個有序結果。", "5": "只有 (0,9)、(9,0) 兩種。" }
    },
    "101M-7": {
      verified: true, sourcePage: 3,
      stem: String.raw`一球面與平面 \(3x+4y=0\) 相切於原點，半徑大於 0。此球面與三個坐標軸共有多少個不同交點？`,
      options: { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5" },
      solution: [String.raw`球心在切平面的法向量上，可設為 \((3t,4t,0)\)，半徑為 \(5|t|\)。`, "球面與 x 軸交於原點及另一點，與 y 軸也交於原點及另一點；z 軸只有原點。合併重複的原點後共有 3 點。"],
      optionAnalysis: { "1": "忽略 x、y 軸上的另一交點。", "2": "原點之外還各有一個 x、y 軸交點。", "3": "原點加上 x、y 軸各一點，共 3 點。", "4": "把重複的原點計算兩次。", "5": "z 軸不會再出現一對非零交點。" }
    },
    "101M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`實係數多項式 \(f(x)=x^4-5x^3+x^2+ax+b\) 滿足 \(f(i)=0\)，其中 \(i^2=-1\)。選出必為 f=0 的根。`,
      options: { "1": String.raw`\(-i\)`, "2": "0", "3": "1", "4": "-5", "5": "5" },
      solution: [String.raw`實係數保證共軛根 \(-i\) 也是根。將 \(x^2+1\) 除 f，餘式為 \((a+5)x+b\)，故 \(a=-5、b=0\)。`, String.raw`因此
      \[
      f(x)=x(x-5)(x^2+1)，
      \]
      根為 \(0、5、\pm i\)。`],
      optionAnalysis: { "1": "非實根的共軛數也是根。", "2": "b=0，所以 x=0 是根。", "3": "代入分解式不為 0。", "4": "根是正 5，不是負 5。", "5": "分解式含因式 x-5。" }
    },
    "101M-9": {
      verified: true, sourcePage: 3,
      stem: "邊長 3 的正三角形，每邊各有兩個三等分點；每邊各選一點連成三角形。選出正確敘述。",
      options: { "1": "可能三角形共有 8 個", "2": "恰有 2 個銳角三角形", "3": "恰有 3 個直角三角形", "4": "恰有 3 個鈍角三角形", "5": "恰有 1 個正三角形" },
      solution: [String.raw`每邊各有 2 種選法，所以共有 \(2^3=8\) 個。逐一以三等分點坐標計算三邊平方，可得其中 2 個為正三角形（亦為銳角），其餘 6 個為鈍角。`, "因此只有（1）（2）正確；沒有直角三角形，正三角形也不是恰好 1 個。"],
      optionAnalysis: { "1": "三邊選點互相獨立，共 2³ 種。", "2": "兩個正三角形就是兩個銳角三角形。", "3": "逐一比較三邊平方，沒有直角情形。", "4": "鈍角情形共有 6 個，不是 3 個。", "5": "正、反方向各形成一個正三角形，共 2 個。" }
    },
    "101M-10": {
      verified: true, sourcePage: 4,
      stem: "複數平面中非零複數 z、w 所代表的向量互相垂直。選出必為負實數的式子。",
      options: { "1": String.raw`\(\frac zw\)`, "2": String.raw`\(zw\)`, "3": String.raw`\((zw)^2\)`, "4": String.raw`\(\frac{z^2}{w^2}\)`, "5": String.raw`\((z\overline w)^2\)` },
      solution: [String.raw`垂直表示 \(\arg z-\arg w=\pm90^\circ\)。所以 \(z/w\) 與 \(z\overline w\) 都是非零純虛數。`, "非零純虛數平方必為負實數，故（4）與（5）成立；其餘式子的幅角還受 \(\arg z+\arg w\) 影響。"],
      optionAnalysis: { "1": "z/w 是純虛數，但不是實數。", "2": "乘積的幅角不是由夾角單獨決定。", "3": "zw 未必是純虛數。", "4": "(z/w)² 是負實數。", "5": "z乘共軛w的幅角正是兩者幅角差，平方為負實數。" }
    },
    "101M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`第一組 \(\begin{cases}ax+8y=c\\x-4y=3\end{cases}\) 有解；第二組 \(\begin{cases}-3x+by=d\\x-4y=3\end{cases}\) 無解。選出一定正確的敘述。`,
      options: { "1": String.raw`\(a\ne-2\)`, "2": String.raw`\(c=-6\)`, "3": String.raw`\(b=12\)`, "4": String.raw`\(d\ne-9\)`, "5": "由兩組第一式組成的新方程組無解" },
      solution: [String.raw`第二組無解要求兩列係數成比例但常數不成比例，所以
      \[
      (-3,b)=-3(1,-4)\Rightarrow b=12，
      \]
      且 \(d\ne-9\)。`, "第一組有解可能是唯一解，也可能兩式重合，不能單獨斷定 a 或 c；新方程組也未必無解。"],
      optionAnalysis: { "1": "a=-2 且 c=-6 時第一組仍有解。", "2": "a≠-2 時任何 c 都有唯一解。", "3": "無解必先要求係數列平行，故 b=12。", "4": "若 d=-9 兩式重合，會有無限多解。", "5": "缺少足夠條件判定。" }
    },
    "101M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`廣義角 \(\theta\) 滿足 \(\tan\theta=\frac23\)，終邊上一點 P 的 y 坐標為 -4。選出一定正確的敘述。`,
      options: { "1": "P 的 x 坐標是 6", "2": String.raw`\(OP=2\sqrt{13}\)`, "3": String.raw`\(\cos\theta=\frac3{\sqrt{13}}\)`, "4": String.raw`\(\sin2\theta>0\)`, "5": String.raw`\(\cos\frac\theta2<0\)` },
      solution: [String.raw`tan 為正且 y<0，所以終邊在第三象限，P 可取 \((-6,-4)\)，故 \(OP=2\sqrt{13}\)。`, String.raw`\[
      \sin2\theta=\frac{2\tan\theta}{1+\tan^2\theta}=\frac{12}{13}>0。
      \]
      廣義角相差整圈時半角餘弦符號可能改變。`],
      optionAnalysis: { "1": "x 應為 -6。", "2": "由 (-6,-4) 的距離公式得到。", "3": "第三象限的 cos 為負。", "4": "代入倍角公式為 12/13。", "5": "廣義角加 2π 會使半角餘弦變號。" }
    },
    "101M-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`兩點 \(F_1F_2=4\)。令 \(\Gamma=\{P:|PF_1-PF_2|=d\}\)，C 為以 \(F_1\) 為圓心、半徑 6 的圓。選出正確敘述。`,
      options: { "1": "d=0 時 Γ 為直線", "2": "d=1 時 Γ 為雙曲線", "3": "d=2 時 Γ 與 C 交於兩點", "4": "d=4 時 Γ 與 C 交於四點", "5": "d=8 時 Γ 不存在" },
      solution: ["d=0 是垂直平分線；0<d<4 是以 F₁、F₂ 為焦點的雙曲線；d>4 違反三角不等式而無解。", "在圓 C 上 PF₁=6。d=2 時 PF₂ 可為 4 或 8，各產生兩個交點，共 4 點；d=4 時 PF₂ 可為 2 或 10，各為相切，共 2 點。"],
      optionAnalysis: { "1": "等距軌跡是垂直平分線。", "2": "固定非零距離差且小於焦距，為雙曲線。", "3": "兩種 PF₂ 半徑各有兩點，共四點。", "4": "兩種情形都是相切，合計兩點。", "5": "距離差不可能超過 F₁F₂=4。" }
    },
    "101M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`首項為 a、公比 0.01 的無窮等比級數，其和為循環小數 \(1.\overline2\)。求 a。`,
      solution: [String.raw`\(1.\overline2=11/9\)。由
      \[
      \frac{a}{1-0.01}=\frac{11}{9}
      \]
      得 \(a=0.99\times11/9=1.21\)。`]
    },
    "101M-15": {
      verified: true, sourcePage: 5,
      stem: "給定三角形 ABC 的頂點 A(1,1)、B(3,5)、C(5,3)，以及三角形 DEF 的頂點 D(0,-7)、E(2,-3)、F(8,-6)。直線 L 與兩三角形各恰有一個交點，求 L 斜率最小可能值。",
      solution: ["L 必為兩三角形的共同支撐線，且在每個三角形都只接觸一個頂點。比較所有可分離兩三角形的頂點連線斜率與相應支撐方向。", "最小可行斜率在臨界支撐位置取得，為 -3。"]
    },
    "101M-16": {
      verified: true, sourcePage: 5,
      stem: "天璇坐標為 (9,8)，天樞為 (7,11)。由天璇向天樞延伸，且天樞到北極星距離為天樞到天璇的 5 倍。求北極星坐標。",
      solution: [String.raw`由天璇到天樞的向量為 \((-2,3)\)。從天樞再沿同方向前進 5 倍向量：
      \[
      (7,11)+5(-2,3)=(-3,26)。
      \]`]
    },
    "101M-17": {
      verified: true, sourcePage: 6,
      stem: String.raw`A(-2,2)、B(4,8)，點 \(C=(t,\frac12t^2)\) 在拋物線上。求 \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) 的最小值及此時 C 的 x 坐標。`,
      solution: [String.raw`\(\overrightarrow{AB}=(6,6)\)、\(\overrightarrow{AC}=(t+2,\frac12t^2-2)\)，所以
      \[
      \overrightarrow{AB}\cdot\overrightarrow{AC}
      =3t^2+6t=3(t+1)^2-3。
      \]
      在 \(t=-1\) 時最小值為 -3。`]
    },
    "101M-18": {
      verified: true, sourcePage: 6,
      stem: "邊長 13 的正三角形 ABC，各邊取 P、Q、R，使 APQR 為平行四邊形。若其面積為 \(20\sqrt3\)，求 PR。",
      solution: [String.raw`令 \(AP=x、AR=y\)。因 Q 在 BC 上，得 \(x+y=13\)；平行四邊形面積
      \[
      xy\sin60^\circ=20\sqrt3
      \]
      所以 \(xy=40\)，故 \(\{x,y\}=\{5,8\}\)。`, String.raw`在夾角 60° 的三角形 APR 中，
      \[
      PR^2=5^2+8^2-2(5)(8)\cos60^\circ=49，
      \]
      所以 \(PR=7\)。`]
    },
    "101M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`橢圓 \(\frac{x^2}{m}+\frac{y^2}{n}=1\) 的焦點為 \((0,\pm2)\)。橢圓上有 P 使 \(\triangle PF_1F_2\) 為正三角形，求 m、n。`,
      solution: [String.raw`焦距給出 \(n-m=2^2=4\)。正三角形邊長為 \(F_1F_2=4\)，第三頂點可取 \(P=(2\sqrt3,0)\)。`, String.raw`代入橢圓得 \(12/m=1\)，所以 \(m=12、n=16\)。`]
    },
    "101M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`長方體由 \(x=\frac{14}{13},\frac1{13}\)、\(y=\pm1\)、\(z=-1,-4\) 圍成。從八頂點任選兩個相異點，求距離大於 3 的機率。`,
      solution: ["三方向邊長為 1、2、3。同一 z 層內任兩點距離至多 \(\sqrt5<3\)；不同 z 層共有 \(4\times4=16\) 對，其中 4 對垂直對應頂點距離恰為 3。", String.raw`其餘 12 對距離皆大於 3。全部共有 \(\binom82=28\) 對，所以機率為 \(12/28=3/7\)。`]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "100M-1": {
      verified: true, sourcePage: 1,
      stem: "箱中有 3 黑球、2 白球，任取一球。黑球獎金 50 元、白球獎金 100 元，求獎金期望值。",
      options: { "1": "70 元", "2": "75 元", "3": "80 元", "4": "85 元", "5": "90 元" },
      solution: [String.raw`期望值為
      \[
      \frac35(50)+\frac25(100)=30+40=70\text{ 元}。
      \]`]
    },
    "100M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`化簡多項式 \(4(x^2+1)+(x+1)^2(x-3)+(x-1)^3\)。`,
      options: { "1": String.raw`\(x(x+1)^2\)`, "2": String.raw`\(2x(x-1)^2\)`, "3": String.raw`\(x(x-1)(x+1)\)`, "4": String.raw`\(2(x-1)^2(x+1)\)`, "5": String.raw`\(2x(x-1)(x+1)\)` },
      solution: [String.raw`逐項展開合併得
      \[
      2x^3-2x=2x(x^2-1)=2x(x-1)(x+1)。
      \]`]
    },
    "100M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`正數列滿足 \(a_{n+1}^2=\frac1{10}a_n^2\)。令 \(b_n=\log a_n\)，判斷 \(b_n\) 的數列型態。`,
      options: { "1": "公差為正的等差數列", "2": "公差為負的等差數列", "3": "公比為正的等比數列", "4": "公比為負的等比數列", "5": "既非等差亦非等比" },
      solution: [String.raw`因各項為正，\(a_{n+1}=a_n/\sqrt{10}\)。所以
      \[
      b_{n+1}-b_n=\log\frac1{\sqrt{10}}=-\frac12，
      \]
      是公差為負的等差數列。`]
    },
    "100M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`判斷方程
      \[
      \left(\frac{x^2}{5^2}+\frac{y^2}{4^2}\right)
      \left(\frac{x^2}{3^2}-\frac{y^2}{4^2}\right)=0
      \]
      所表示的圖形。`,
      options: { "1": "只有原點", "2": "橢圓及原點", "3": "兩條相異直線", "4": "橢圓及雙曲線", "5": "雙曲線及原點" },
      solution: [String.raw`第一因式為兩個非負數之和，只在原點為 0；第二因式等於 0 時，
      \[
      y=\pm\frac43x，
      \]
      已包含原點。因此整體圖形就是兩條相異直線。`]
    },
    "100M-5": {
      verified: true, sourcePage: 2,
      stem: "比較題列的五個指數與對數敘述，選出正確者。",
      options: { "1": String.raw`\(3^7<7^3\)`, "2": String.raw`\(5^{10}<10^5\)`, "3": String.raw`\(2^{100}<10^{30}\)`, "4": String.raw`\(\log_2 3=1.5\)`, "5": String.raw`\(\log_2 11<3.5\)` },
      solution: [String.raw`\(3^7=2187>343=7^3\)；\(5^{10}>10^5\)；且 \(100\log10 2\approx30.10\)，所以 \(2^{100}>10^{30}\)。`, String.raw`\(\log_2 3\approx1.585\)。又 \(2^{3.5}=8\sqrt2\approx11.31>11\)，故 \(\log_2 11<3.5\)。`]
    },
    "100M-6": {
      verified: true, sourcePage: 2,
      stem: "題列 0～60 歲男性死亡率共 61 筆，已知其中 24 筆小於 0.2%。求這組資料的中位數。",
      options: { "1": "0.2034", "2": "0.2164", "3": "0.2137", "4": "0.2085", "5": "0.2019" },
      solution: ["61 筆資料的中位數是排序後第 31 筆。已有 24 筆小於 0.2，接著依序為 0.2019、0.2034、0.2051、0.2085、0.2123、0.2137、0.2164。", "因此第 31 筆是 0.2164。"]
    },
    "100M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`複數平面中 \(O=0、A=1+i、B=1-i\)。選出落在 \(\triangle OAB\) 內部的複數點。`,
      options: { "1": String.raw`\(\cos60^\circ\)`, "2": String.raw`\(\cos50^\circ+i\sin50^\circ\)`, "3": String.raw`\(\frac{4-3i}{5}\)`, "4": String.raw`\(\frac{1+3i}{2}\)`, "5": String.raw`\((\cos30^\circ+i\sin30^\circ)^{25}\)` },
      solution: [String.raw`三角形內部可寫成 \(0<x<1、|y|<x\)。（1）為 \((1/2,0)\)；（3）為 \((4/5,-3/5)\)，皆符合。`, String.raw`（5）由棣美弗定理化為角度 \(750^\circ\equiv30^\circ\)，點 \((\sqrt3/2,1/2)\) 也符合；其餘不符合 \(|y|<x\)。`]
    },
    "100M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`已知 \(\sin\theta=-\frac23、\cos\theta>0\)，選出正確敘述。`,
      options: { "1": String.raw`\(\tan\theta<0\)`, "2": String.raw`\(\tan^2\theta>\frac49\)`, "3": String.raw`\(\sin^2\theta>\cos^2\theta\)`, "4": String.raw`\(\sin2\theta>0\)`, "5": "θ 與 2θ 的終邊在不同象限" },
      solution: [String.raw`\(\cos\theta=\sqrt5/3\)，所以 \(\tan\theta=-2/\sqrt5<0\)，且 \(\tan^2\theta=4/5>4/9\)。`, String.raw`\(\sin^2\theta=4/9<5/9=\cos^2\theta\)，而 \(\sin2\theta<0\)。θ 與 2θ 的標準位置終邊都在第四象限。`]
    },
    "100M-9": {
      verified: true, sourcePage: 3,
      stem: "直角三角形 OAB 的頂點為 O(0,0)、A(3,0)、B(0,4)。C₁、C₂ 分別為外接圓、內切圓，選出正確敘述。",
      options: { "1": "C₁ 半徑為 2", "2": "C₁ 圓心在 y=x", "3": "C₁ 圓心在 4x+3y=12", "4": "C₂ 圓心在 y=x", "5": "C₂ 圓心在 4x+3y=6" },
      solution: [String.raw`斜邊長為 5，所以外接圓半徑 \(5/2\)，圓心是斜邊中點 \((3/2,2)\)，滿足 \(4x+3y=12\)。`, "3-4-5 直角三角形內切圓半徑為 1，內心是 (1,1)，位於 y=x，但不在 4x+3y=6。"]
    },
    "100M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`向量 \(\vec w\) 與 \(\vec v=(2,5)\) 垂直且等長，選出正確敘述。`,
      options: { "1": String.raw`\(\vec w=(5,-2)\) 或 \((-5,2)\)`, "2": String.raw`\(|\vec v+\vec w|=|\vec v-\vec w|\)`, "3": String.raw`\(\vec v+\vec w\) 與 \(\vec w\) 夾角可能為 135°`, "4": String.raw`若 \(\vec u=a\vec v+b\vec w\)，則 \(|\vec u|=\sqrt{a^2+b^2}\)`, "5": String.raw`若 \((1,0)=c\vec v+d\vec w\)，則 \(c>0\)` },
      solution: ["將 (2,5) 旋轉 ±90° 得（1）。因兩向量垂直等長，\(|v\pm w|^2=|v|^2+|w|^2\)，所以（2）成立。", String.raw`投影係數 \(c=(1,0)\cdot v/|v|^2=2/29>0\)。選項（4）漏了共同長度 \(\sqrt{29}\)；（3）的夾角為 45°。`]
    },
    "100M-11": {
      verified: true, sourcePage: 3,
      stem: "圓 C 以原點為圓心、半徑 2。已知直線 L 與 C 相交，選出 L 一定會相交的圖形。",
      options: { "1": "x 軸", "2": String.raw`\(y=(1/2)^x\)`, "3": String.raw`\(x^2+y^2=3\)`, "4": String.raw`\((x-2)^2+y^2=16\)`, "5": String.raw`\(\frac{x^2}{9}+\frac{y^2}{4}=1\)` },
      solution: ["L 通過半徑 2 圓的內部。圓 \((x-2)^2+y^2=16\) 與橢圓 \(x^2/9+y^2/4=1\) 都包住原圓內部；直線既進入其內部，延伸時必穿過邊界。", "x 軸、指數圖形與較小同心圓都可被某些割線避開。"]
    },
    "100M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`球面 \(S:(x-1)^2+(y-2)^2+(z-3)^2=14\)，並給 \(A(1,0,0)、B(-1,0,0)\)。選出正確敘述。`,
      options: { "1": "原點在 S 上", "2": "A 在 S 外部", "3": "線段 AB 與 S 相交", "4": "A 是直線 AB 上距球心最近點", "5": "三坐標平面截圓中以 xy 平面截圓面積最大" },
      solution: ["球心 (1,2,3)，半徑 √14。原點到球心距離正是 √14；A 到球心距離 √13，在球內。", "x 軸代入球面得 x=0 或2，故線段 AB 含交點原點；球心投影到 x 軸是 A。截圓最大的是距球心最近的 yz 平面，不是 xy 平面。"]
    },
    "100M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`設 \(f(x)=x(x-1)(x+1)=x^3-x\)，選出正確敘述。`,
      options: { "1": String.raw`\(f(1/2)>0\)`, "2": String.raw`\(f(x)=2\) 有整數解`, "3": String.raw`\(f(x)=x^2+1\) 有實數解`, "4": String.raw`\(f(x)=x\) 有非零有理數解`, "5": String.raw`若 \(f(a)=2\)，則 \(f(-a)=2\)` },
      solution: [String.raw`（1）\(f(1/2)=-3/8\)；（2）檢查可能整數根可知無解；（4）化為 \(x(x^2-2)=0\)，非零解為無理數。`, String.raw`（3）移項得到三次多項式，連續且兩端趨向正、負無窮，必有實根。f 是奇函數，所以（5）應為 \(f(-a)=-2\)。`]
    },
    "100M-14": {
      verified: true, sourcePage: 4,
      stem: "首項 a、公比 r 的無窮等比級數和為 5；首項 a、公比 3r 的和為 7。求首項 a、公比 2r 的級數和。",
      solution: [String.raw`由 \(a/(1-r)=5、a/(1-3r)=7\)，得 \(r=1/8、a=35/8\)。所以
      \[
      \frac{a}{1-2r}=\frac{35/8}{3/4}=\frac{35}{6}。
      \]`]
    },
    "100M-15": {
      verified: true, sourcePage: 5,
      stem: String.raw`長方體中 ABCD 為正方形，BE 為另一邊。已知 \(\cot\angle AEB=\frac{2\sqrt6}{5}\)，求 \(\cot\angle CED\)。`,
      solution: [String.raw`設正方形邊長 \(s=5\)、\(BE=h=2\sqrt6\)。取 E 為原點配置各頂點，則
      \[
      \overrightarrow{EC}=(s,-h,0),\quad \overrightarrow{ED}=(s,-h,s)。
      \]`, String.raw`由 \(\cot\phi=\frac{u\cdot v}{|u\times v|}\)，得
      \[
      \cot\angle CED=\frac{s^2+h^2}{s\sqrt{s^2+h^2}}=\frac{49}{35}=\frac75。
      \]`]
    },
    "100M-16": {
      verified: true, sourcePage: 5,
      stem: "班上 20 男、15 女，等機率抽 3 人。求三人中有男也有女的機率。",
      solution: [String.raw`用補事件：
      \[
      1-\frac{\binom{20}{3}+\binom{15}{3}}{\binom{35}{3}}
      =\frac{90}{119}。
      \]`]
    },
    "100M-17": {
      verified: true, sourcePage: 5,
      stem: "四邊形 ABCD 中，AB=1、BC=5、CD=5、DA=7，且 \(\angle DAB=\angle BCD=90^\circ\)。求 AC。",
      solution: ["以 BD 為共同弦配置兩個直角條件，B、D 到 C 等距皆為 5；建立坐標後聯立 AB=1、AD=7 與 BC=CD=5。", String.raw`化簡可得 \(AC^2=32\)，故 \(AC=\sqrt{32}\)。`]
    },
    "100M-18": {
      verified: true, sourcePage: 6,
      stem: "放射性物質 A、B、C 每公克輻射強度為 1、2、1，每半年質量分別乘 1/2、1/3、1/4。一年前、半年前、目前總強度為 66、22、8。求目前三者質量。",
      solution: [String.raw`設目前質量為 x、y、z，依三時點列式：
      \[
      x+2y+z=8,\quad2x+6y+4z=22,\quad4x+18y+16z=66。
      \]
      聯立解得 \((x,y,z)=(4,1,2)\)。`]
    },
    "100M-19": {
      verified: true, sourcePage: 6,
      stem: "橢圓焦點為 (±3,0)；拋物線焦點 (3,0)、準線 x=-3。兩曲線交點在直線 x=3 上，求橢圓半長軸 a。",
      solution: [String.raw`拋物線為 \(y^2=12x\)，在 x=3 時 \(y=\pm6\)。橢圓有 \(b^2=a^2-9\)，代入 (3,6)：
      \[
      \frac9{a^2}+\frac{36}{a^2-9}=1。
      \]`, String.raw`解得合法的 \(a^2=27+18\sqrt2=(3+3\sqrt2)^2\)，所以 \(a=3+3\sqrt2\)。`]
    },
    "100M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`平面 \(H:x-y+z=2\) 上有直線 L。P(2,1,1) 是 L 上距原點最近的點。求以 2 為第一分量的 L 方向向量。`,
      solution: [String.raw`設方向向量 \(v=(2,p,q)\)。L 在 H 上，故 v 與法向量 (1,-1,1) 垂直：
      \[
      2-p+q=0。
      \]`, String.raw`P 是最近點，故 \(\overrightarrow{OP}\perp v\)，即 \(4+p+q=0\)。聯立得 \(p=-1、q=-3\)，所以 \(v=(2,-1,-3)\)。`]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "99M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`數列 \(a_1,a_2,\ldots,a_{10}\) 中每一項皆為 \(1\) 或 \(-1\)，則 \(a_1+a_2+\cdots+a_{10}\) 的值有多少種可能？`,
      options: { "1": "10", "2": "11", "3": String.raw`\(P^{10}_2\)`, "4": String.raw`\(C^{10}_2\)`, "5": String.raw`\(2^{10}\)` },
      solution: [String.raw`設其中有 \(k\) 項為 \(1\)，其餘 \(10-k\) 項為 \(-1\)，則總和為
      \[
      k-(10-k)=2k-10。
      \]
      當 \(k=0,1,\ldots,10\) 時，共得到 \(-10,-8,\ldots,8,10\) 等 \(11\) 種值。`],
      optionAnalysis: {
        "1": "漏算了從 0 個到 10 個正一共有 11 種情況。",
        "2": String.raw`\(k\) 有 \(0\) 至 \(10\) 共 \(11\) 種取值，且所得總和互不相同。`,
        "3": "排列數是在計算位置排法，不是不同的總和值數量。",
        "4": "組合數是在計算選出兩個位置的方法，不符合題意。",
        "5": String.raw`\(2^{10}\) 是十項正負號的完整排列數；許多排列會得到相同總和。`
      }
    },
    "99M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知 \(a,b\) 為整數且
      \[
      \begin{vmatrix}5&a\\ b&7\end{vmatrix}=4，
      \]
      求 \(|a+b|\)。`,
      options: { "1": "16", "2": "31", "3": "32", "4": "39", "5": "條件不足，無法確定" },
      solution: [String.raw`由行列式得 \(35-ab=4\)，所以 \(ab=31\)。因 \(a,b\) 為整數，只有
      \[
      (a,b)=(1,31),(31,1),(-1,-31),(-31,-1)。
      \]
      四種情形都滿足 \(|a+b|=32\)。`],
      optionAnalysis: {
        "1": "不符合整數因數 1 與 31 的和。",
        "2": "31 是乘積 \(ab\)，不是所求的和之絕對值。",
        "3": String.raw`整數因數配對必為 \(\pm1,\pm31\)，故 \(|a+b|=32\)。`,
        "4": "不符合所有可能的整數因數配對。",
        "5": "雖有四組有序解，但它們的和之絕對值都相同，因此可以確定。"
      }
    },
    "99M-3": {
      verified: true, sourcePage: 1,
      stem: "箱中有三顆紅球與三顆白球，隨機同時抽出兩顆球。兩球顏色不同可得 100 元，顏色相同則無獎金。求獎金的期望值。",
      options: { "1": "20 元", "2": "30 元", "3": "40 元", "4": "50 元", "5": "60 元" },
      solution: [String.raw`抽到一紅一白的機率為
      \[
      \frac{\binom31\binom31}{\binom62}=\frac9{15}=\frac35。
      \]
      因此期望值為 \(100\times\frac35=60\) 元。`],
      optionAnalysis: {
        "1": "不是一紅一白事件依機率加權後的結果。",
        "2": "可能只把紅白球數相等誤當成中獎機率的一半。",
        "3": String.raw`這是同色機率 \(\frac25\) 乘上 100 的結果，但同色沒有獎金。`,
        "4": "兩球顏色不同的機率不是二分之一。",
        "5": String.raw`中獎機率為 \(\frac35\)，期望值為 \(60\) 元。`
      }
    },
    "99M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`坐標平面上給定 \(A(1,0)\)、\(B(0,1)\)，另有
      \[
      P(\pi,1),\quad Q(-\sqrt3,6),\quad R(2,\log_4 32)。
      \]
      \(\triangle PAB,\triangle QAB,\triangle RAB\) 的面積依序為 \(p,q,r\)，比較三者大小。`,
      options: { "1": String.raw`\(p<q<r\)`, "2": String.raw`\(p<r<q\)`, "3": String.raw`\(q<p<r\)`, "4": String.raw`\(q<r<p\)`, "5": String.raw`\(r<q<p\)` },
      solution: [String.raw`對任意 \(X(x,y)\)，
      \[
      [\triangle XAB]=\frac12|x+y-1|。
      \]
      因而
      \[
      p=\frac{\pi}{2},\quad q=\frac{5-\sqrt3}{2},\quad
      r=\frac{2+\log_4 32-1}{2}=\frac74。
      \]
      比較近似值 \(1.571<1.634<1.75\)，故 \(p<q<r\)。`],
      optionAnalysis: {
        "1": "依三個面積的精確式或近似值比較，順序正確。",
        "2": String.raw`錯在 \(q<r\)，不是 \(r<q\)。`,
        "3": String.raw`錯在 \(p<q\)。`,
        "4": String.raw`錯在 \(p\) 是三者最小，不是最大。`,
        "5": String.raw`三者的正確次序與此完全不符。`
      }
    },
    "99M-5": {
      verified: true, sourcePage: 2,
      stem: "密閉實驗室中開始有某種細菌 1 千隻，並以每小時增加 8% 的速率繁殖。若維持此速率，100 小時後的數量最接近何者？",
      options: { "1": "9 千隻", "2": "108 千隻", "3": "2200 千隻", "4": "3200 千隻", "5": "32000 千隻" },
      solution: [String.raw`100 小時後的數量為 \(1.08^{100}\) 千隻。利用對數估計：
      \[
      100\ln1.08\approx7.696，
      \qquad e^{7.696}\approx2199。
      \]
      所以最接近 \(2200\) 千隻。`],
      optionAnalysis: {
        "1": "僅接近一段很短時間的成長，未計入 100 次複利。",
        "2": "把 100 小時與 8% 做近似線性運算，忽略複利效果。",
        "3": String.raw`\(1.08^{100}\approx2199\)，最接近 \(2200\) 千隻。`,
        "4": "高估了每小時 8% 複利 100 次的結果。",
        "5": "比正確數量大約多一個數量級。"
      }
    },
    "99M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`坐標空間中 \(O\) 為原點，\(A=(1,2,1)\)。設 \(S\) 是以 \(O\) 為球心、4 為半徑的球面。求 \(S\) 上滿足
      \[
      \overrightarrow{OA}\cdot\overrightarrow{OP}=6
      \]
      的所有點 \(P\) 所成圖形。`,
      options: { "1": "空集合", "2": "一個點", "3": "兩個點", "4": "一個圓", "5": "兩個圓" },
      solution: [String.raw`內積條件是平面 \(x+2y+z=6\)。此平面到原點的距離為
      \[
      \frac6{\sqrt{1^2+2^2+1^2}}=\sqrt6<4。
      \]
      平面穿過球面，因此交集是一個圓。`],
      optionAnalysis: {
        "1": "平面到球心距離小於半徑，交集不為空。",
        "2": "只有平面與球面相切時交集才是一點。",
        "3": "球面與平面的非相切交集不是兩個離散點。",
        "4": String.raw`因 \(\sqrt6<4\)，平面截球面所得為一個圓。`,
        "5": "單一平面截單一球面不會同時得到兩個圓。"
      }
    },
    "99M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`橢圓
      \[
      \Gamma_1:\frac{x^2}{5^2}+\frac{y^2}{3^2}=1,\quad
      \Gamma_2:\frac{x^2}{5^2}+\frac{y^2}{3^2}=2,\quad
      \Gamma_3:\frac{x^2}{5^2}+\frac{y^2}{3^2}=\frac{2x}{5}
      \]
      的長軸長分別為 \(l_1,l_2,l_3\)，比較三者。`,
      options: { "1": String.raw`\(l_1=l_2=l_3\)`, "2": String.raw`\(l_1=l_2<l_3\)`, "3": String.raw`\(l_1<l_2<l_3\)`, "4": String.raw`\(l_1=l_3<l_2\)`, "5": String.raw`\(l_1<l_3<l_2\)` },
      solution: [String.raw`\(\Gamma_1\) 的長軸長為 \(10\)；\(\Gamma_2\) 除以 2 後可見長半軸為 \(5\sqrt2\)，故長軸長為 \(10\sqrt2\)。`, String.raw`\(\Gamma_3\) 配方得
      \[
      \frac{(x-5)^2}{25}+\frac{y^2}{9}=1，
      \]
      只是 \(\Gamma_1\) 的平移，長軸長仍為 \(10\)。故 \(l_1=l_3<l_2\)。`],
      optionAnalysis: {
        "1": String.raw`\(\Gamma_2\) 的兩軸均放大 \(\sqrt2\) 倍。`,
        "2": String.raw`\(\Gamma_3\) 與 \(\Gamma_1\) 等長，不比它更長。`,
        "3": String.raw`錯在 \(l_1=l_3\)。`,
        "4": "第一、三個橢圓等長，第二個較長，正確。",
        "5": String.raw`錯在 \(l_1\) 與 \(l_3\) 相等。`
      }
    },
    "99M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(\theta_1,\theta_2,\theta_3,\theta_4\) 分別為第一、第二、第三、第四象限角，且都介於 \(0\) 與 \(2\pi\) 之間。已知
      \[
      |\cos\theta_1|=|\cos\theta_2|=|\cos\theta_3|=|\cos\theta_4|=\frac13，
      \]
      選出正確敘述。`,
      options: { "1": String.raw`\(\theta_1<\frac\pi4\)`, "2": String.raw`\(\theta_1+\theta_2=\pi\)`, "3": String.raw`\(\cos\theta_3=-\frac13\)`, "4": String.raw`\(\sin\theta_4=\frac{2\sqrt2}{3}\)`, "5": String.raw`\(\theta_4=\theta_3+\frac\pi2\)` },
      solution: [String.raw`令 \(\alpha=\arccos\frac13\)，則 \(\alpha>\frac\pi4\)，且
      \[
      \theta_1=\alpha,\quad\theta_2=\pi-\alpha,\quad
      \theta_3=\pi+\alpha,\quad\theta_4=2\pi-\alpha。
      \]
      因此（2）成立，第三象限餘弦為負，所以（3）也成立。第四象限正弦應為 \(-2\sqrt2/3\)。`],
      optionAnalysis: {
        "1": String.raw`因 \(\cos\theta_1=1/3<\cos(\pi/4)\)，故 \(\theta_1>\pi/4\)。`,
        "2": String.raw`\(\alpha+(\pi-\alpha)=\pi\)，正確。`,
        "3": "第三象限餘弦為負，絕對值又是 1/3，故正確。",
        "4": "第四象限正弦為負，符號錯誤。",
        "5": String.raw`\(\theta_4-\theta_3=\pi-2\alpha\)，並非 \(\pi/2\)。`
      }
    },
    "99M-9": {
      verified: true, sourcePage: 3,
      stem: "下列哪些方程式有實數解？請選出所有符合條件的方程式。",
      options: { "1": String.raw`\(x^3+x-1=0\)`, "2": String.raw`\(2^x+2^{-x}=0\)`, "3": String.raw`\(\log_2x+\log_x2=1\)`, "4": String.raw`\(\sin x+\cos2x=3\)`, "5": String.raw`\(4\sin x+3\cos x=\frac92\)` },
      solution: [String.raw`（1）的左式連續且嚴格遞增，於 \(x=0,1\) 間變號，故有實根。（2）左式恆正。`, String.raw`（3）令 \(t=\log_2x\ne0\)，則 \(t+1/t=1\)，化為 \(t^2-t+1=0\)，判別式為 \(-3\)。（4）令 \(s=\sin x\)，左式為 \(1+s-2s^2\)，最大值 \(9/8<3\)。（5）左式值域為 \([-5,5]\)，故 \(9/2\) 可達到。`],
      optionAnalysis: {
        "1": "由介值定理可知有實數解。",
        "2": String.raw`兩個正數 \(2^x,2^{-x}\) 的和不可能為 0。`,
        "3": "換元後二次方程判別式小於 0，沒有實解。",
        "4": String.raw`左式最大值只有 \(9/8\)，不可能等於 3。`,
        "5": String.raw`振幅為 \(\sqrt{4^2+3^2}=5\)，而 \(9/2\) 在其值域內。`
      }
    },
    "99M-10": {
      verified: true, sourcePage: 4,
      stem: String.raw`實數數列滿足
      \[
      a_{n+1}=\frac{n(n+1)}2-a_n
      \]
      對所有正整數 \(n\) 成立。選出正確敘述。`,
      options: {
        "1": String.raw`若 \(a_1=1\)，則 \(a_2=1\)`,
        "2": String.raw`若 \(a_1\) 是整數，則每一項都是整數`,
        "3": String.raw`若 \(a_1\) 是無理數，則每一項都是無理數`,
        "4": String.raw`\(a_2\le a_4\le\cdots\le a_{2n}\le\cdots\)`,
        "5": String.raw`若 \(a_k\) 是奇數，則 \(a_{k+2},a_{k+4},\ldots\) 都是奇數`
      },
      solution: [String.raw`連用兩次遞迴式可得
      \[
      a_{n+2}=a_n+n+1。
      \]
      因此偶數項子數列嚴格遞增，（4）成立。原式每次只以整數減前項，所以整數性保留；同理，整數減無理數仍為無理數，故（2）（3）成立。`, String.raw`若 \(a_1=1\)，則 \(a_2=0\)，所以（1）錯。兩步所加的 \(k+1\) 奇偶不固定，不能保證往後同奇偶，故（5）錯。`],
      optionAnalysis: {
        "1": String.raw`直接代 \(n=1\) 得 \(a_2=1-a_1=0\)。`,
        "2": "每一步都是整數減整數，整數性會保留。",
        "3": "每一步都是整數減無理數，結果仍為無理數。",
        "4": String.raw`\(a_{2m+2}=a_{2m}+2m+1>a_{2m}\)，正確。`,
        "5": String.raw`\(a_{k+2}=a_k+k+1\)，加數不一定為偶數。`
      }
    },
    "99M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`坐標空間中，直線 \(L\) 位於平面 \(2x-y=2\) 上，且通過 \(T=(2,2,2)\)。下列哪些點可能是原點 \(O\) 在 \(L\) 上的投影點？`,
      options: { "1": String.raw`\((2,2,2)\)`, "2": String.raw`\((2,0,2)\)`, "3": String.raw`\((\frac45,-\frac25,0)\)`, "4": String.raw`\((\frac45,-\frac25,-2)\)`, "5": String.raw`\((\frac89,-\frac29,-\frac29)\)` },
      solution: [String.raw`候選點 \(P\) 必須在平面上；若 \(P\ne T\)，還要滿足 \(\overrightarrow{OP}\perp\overrightarrow{TP}\)，即
      \[
      P\cdot(T-P)=0。
      \]
      逐一代入可知（3）（5）同時滿足兩條件。（2）不在平面上，（4）的內積不為 0。`, String.raw`（1）雖等於 \(T\)，仍可在平面內選一條通過 \(T\) 且方向與 \(\overrightarrow{OT}\) 垂直的直線，所以也可能是投影點。`],
      optionAnalysis: {
        "1": "可在指定平面內選取通過此點且垂直於其位置向量的直線。",
        "2": String.raw`代入 \(2x-y\) 得 4，不在指定平面上。`,
        "3": "位於平面上，且與通往固定點 T 的方向垂直，符合。",
        "4": "雖在平面上，但位置向量不垂直於 TP，不能是投影點。",
        "5": "位於平面上，且位置向量與 TP 垂直，符合。"
      }
    },
    "99M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`某議題支持度抽樣調查結果如下：女性樣本支持比例 \(\hat p=0.52\)、\(\hat p\) 的標準差為 \(0.02\)；男性樣本支持比例 \(\hat p=0.59\)、標準差為 \(0.04\)。選出可由此次抽樣結果得到的推論。`,
      options: {
        "1": "全台灣男性公民的支持比例大於女性公民",
        "2": "95% 信心水準下，全台灣女性公民支持比例的信賴區間為 [0.48,0.56]",
        "3": "此次抽樣的女性公民數少於男性公民數",
        "4": "若不區分性別，此次抽樣的支持比例介於 0.52 與 0.59 之間",
        "5": "若不區分性別，此次抽樣支持比例的標準差介於 0.02 與 0.04 之間"
      },
      solution: [String.raw`女性的 95% 信賴區間近似為
      \[
      0.52\pm2(0.02)=[0.48,0.56]，
      \]
      故（2）成立。合併後的樣本比例是兩組比例的加權平均，必介於 \(0.52\) 與 \(0.59\) 之間，故（4）成立。`, String.raw`由 \(n=\hat p(1-\hat p)/SE^2\) 估算，女性樣本約 624 人、男性約 151 人，（3）錯。樣本結果不能直接斷言兩個母體比例的大小；合併後標準差也不必介於兩組標準差之間。`],
      optionAnalysis: {
        "1": "樣本比例不同不等於已證明母體比例必有相同次序。",
        "2": String.raw`以估計值加減約兩個標準差，得到 \([0.48,0.56]\)。`,
        "3": "由比例與標準差反推，女性樣本數反而較多。",
        "4": "合併比例是兩組比例的加權平均，必位於兩者之間。",
        "5": "合併樣本的標準差需重新依合併比例與總樣本數計算，沒有此必然關係。"
      }
    },
    "99M-13": {
      verified: true, sourcePage: 5,
      stem: String.raw`平行四邊形 \(ABCD\) 中，\(A=(2,1)\)、\(B=(8,2)\)，點 \(C\) 在第一象限且其 \(x\) 坐標為 12。若面積為 38，求 \(D\) 的坐標。`,
      solution: [String.raw`設 \(C=(12,c)\)，則
      \[
      D=A+C-B=(6,c-1)。
      \]
      又 \(\overrightarrow{AB}=(6,1)\)、\(\overrightarrow{AD}=(4,c-2)\)，故
      \[
      |6(c-2)-4|=|6c-16|=38。
      \]
      解得 \(c=9\) 或 \(-11/3\)。因 \(C\) 在第一象限，取 \(c=9\)，所以 \(D=(6,8)\)。`]
    },
    "99M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`設 \(f(x)\) 為最低次的首項係數為 1 的實係數多項式，且 \(3-2i、i、5\) 都是 \(f(x)=0\) 的解。求 \(f(x)\) 的常數項。`,
      solution: [String.raw`實係數多項式的非實根成共軛對，因此根還包括 \(3+2i\) 與 \(-i\)。最低次為五次，其根的乘積為
      \[
      (3-2i)(3+2i)\cdot i(-i)\cdot5=13\cdot1\cdot5=65。
      \]
      首一五次多項式的常數項是根乘積的相反數，故為 \(-65\)。`]
    },
    "99M-15": {
      verified: true, sourcePage: 5,
      stem: "在一個兩列三行表格的六個空格中，不重複填入 1、2、3、4、5、6。求數字 1、2 在同一行或同一列的方法數。",
      solution: [String.raw`先安排 1、2 的有序位置。同一行有 \(2\times3\times2=12\) 種；同一列有 \(3\times2=6\) 種，兩種情形不重複，共 \(18\) 種。`, String.raw`其餘四數可任意排列，有 \(4!\) 種。因此方法數為
      \[
      18\cdot4!=18\cdot24=432。
      \]`]
    },
    "99M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`設實數 \(a>0\)。若方程組
      \[
      \begin{cases}
      2x-y=1,\\
      x-2y=a,\\
      x-ay=122
      \end{cases}
      \]
      有解，求 \(a\)。`,
      solution: [String.raw`由前兩式解得
      \[
      x=\frac{2-a}{3},\qquad y=\frac{1-2a}{3}。
      \]
      代入第三式：
      \[
      \frac{2-2a+2a^2}{3}=122，
      \]
      得 \(a^2-a-182=0=(a-14)(a+13)\)。因 \(a>0\)，所以 \(a=14\)。`]
    },
    "99M-17": {
      verified: true, sourcePage: 6,
      stem: String.raw`直角三角形 \(ABD\) 中，\(\angle A=90^\circ\)，\(C\) 在 \(AD\) 上。已知 \(BC=6、AB=5\)，且 \(\angle ABD=2\angle ABC\)，求 \(BD\)。`,
      solution: [String.raw`令 \(\angle ABC=\phi\)。在直角三角形 \(ABC\) 中，
      \[
      \cos\phi=\frac{AB}{BC}=\frac56。
      \]
      因此
      \[
      \cos2\phi=2\cos^2\phi-1=2\left(\frac56\right)^2-1=\frac7{18}。
      \]
      在直角三角形 \(ABD\) 中，\(\cos\angle ABD=AB/BD\)，故
      \[
      \frac5{BD}=\frac7{18},\qquad BD=\frac{90}{7}。
      \]`]
    },
    "99M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`拋物線 \(y=x^2+ax+b\) 與 \(x\) 軸交於 \(P,Q\)，且 \(PQ=7\)。若 \(y=x^2+ax+(b+2)\) 與 \(x\) 軸交於 \(R,S\)，求 \(RS\)。`,
      solution: [String.raw`首一二次式兩根的距離是判別式的平方根，因此
      \[
      PQ=\sqrt{a^2-4b}=7\quad\Longrightarrow\quad a^2-4b=49。
      \]
      第二式的判別式為
      \[
      a^2-4(b+2)=49-8=41，
      \]
      所以 \(RS=\sqrt{41}\)。`]
    },
    "99M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`在 \(\triangle ABC\) 中，\(AB=2、BC=3\)，且 \(\angle A=2\angle C\)。求 \(AC\)。`,
      solution: [String.raw`由正弦定理
      \[
      \frac{2}{\sin C}=\frac{3}{\sin2C}
      \]
      得 \(4\cos C=3\)，即 \(\cos C=3/4\)。設 \(AC=x\)，由餘弦定理
      \[
      2^2=x^2+3^2-2\cdot x\cdot3\cdot\frac34，
      \]
      化為 \(2x^2-9x+10=0\)，故 \(x=2\) 或 \(5/2\)。`, String.raw`若 \(x=2\)，則 \(AB=AC\)，會有 \(\angle B=\angle C\)，再配合 \(\angle A=2\angle C\) 得 \(C=45^\circ\)，與 \(\cos C=3/4\) 矛盾。因此 \(AC=5/2\)。`]
    },
    "99M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`給定 \(A=(\frac94,2)\)、直線 \(L:y=-5\) 與拋物線 \(\Gamma:x^2=8y\)。若 \(P\) 在 \(\Gamma\) 上變動，求 \(d(P,L)-AP\) 的最大值。`,
      solution: [String.raw`拋物線焦點為 \(F=(0,2)\)，準線為 \(y=-2\)。對拋物線上的點 \(P\)，
      \[
      PF=d(P,y=-2)=y_P+2，
      \]
      而 \(d(P,L)=y_P+5=PF+3\)。所以
      \[
      d(P,L)-AP=3+PF-PA\le3+FA
      \]
      （由三角不等式 \(PF\le PA+AF\)）。`, String.raw`又 \(FA=9/4\)，故上界為
      \[
      3+\frac94=\frac{21}{4}。
      \]
      取 \(P=(4,2)\) 時 \(F,A,P\) 共線且 \(A\) 位於其間，可達等號。`]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "98M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`數列 \(a_1+2,\ldots,a_k+2k,\ldots,a_{10}+20\) 共有十項，且其和為 240，求 \(a_1+\cdots+a_k+\cdots+a_{10}\)。`,
      options: { "1": "31", "2": "120", "3": "130", "4": "185", "5": "218" },
      solution: [String.raw`題給十項之和為
      \[
      (a_1+\cdots+a_{10})+2(1+2+\cdots+10)=240。
      \]
      又 \(2(1+\cdots+10)=2\cdot55=110\)，故原數列十項和為 \(240-110=130\)。`],
      optionAnalysis: {
        "1": "沒有扣除完整的等差增量總和。",
        "2": "把附加量誤算成 120。",
        "3": String.raw`由總和 \(240\) 扣除 \(2(1+\cdots+10)=110\)，得到 \(130\)。`,
        "4": "只扣除了 55，漏掉每項增量中的係數 2。",
        "5": "沒有依十個不同的附加量逐項加總。",
      }
    },
    "98M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`令 \(a=\cos(\pi^2)\)，判斷 \(a\) 所在的區間。`,
      options: { "1": String.raw`\(a=-1\)`, "2": String.raw`\(-1<a\le-\frac12\)`, "3": String.raw`\(-\frac12<a\le0\)`, "4": String.raw`\(0<a\le\frac12\)`, "5": String.raw`\(\frac12<a\le1\)` },
      solution: [String.raw`因 \(3\pi<\pi^2<\frac{10\pi}{3}\)，且 \(\pi^2=3\pi+\pi(\pi-3)\)，其中 \(0<\pi(\pi-3)<\pi/3\)。所以
      \[
      \cos(\pi^2)=-\cos\!\bigl(\pi(\pi-3)\bigr)
      \]
      介於 \(-1\) 與 \(-1/2\) 之間。`],
      optionAnalysis: {
        "1": String.raw`\(\pi^2\) 不是奇數倍的 \(\pi\)，故餘弦不等於 \(-1\)。`,
        "2": "角度落在第三個 π 之後不超過 π/3 的位置，餘弦介於 -1 與 -1/2，正確。",
        "3": "餘弦的絕對值大於 1/2。",
        "4": "此角位於餘弦為負的區段。",
        "5": "此角位於餘弦為負的區段。"
      }
    },
    "98M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`已知 \(f(x),g(x)\) 是實係數多項式，且 \(f(x)\) 除以 \(g(x)\) 的餘式為 \(x^4-1\)。下列何者不可能是 \(f(x)\) 與 \(g(x)\) 的公因式？`,
      options: { "1": "5", "2": String.raw`\(x-1\)`, "3": String.raw`\(x^2-1\)`, "4": String.raw`\(x^3-1\)`, "5": String.raw`\(x^4-1\)` },
      solution: [String.raw`若 \(h(x)\) 同時整除 \(f(x)\) 與 \(g(x)\)，由
      \[
      f(x)=q(x)g(x)+(x^4-1)
      \]
      可知 \(h(x)\) 必須整除 \(x^4-1\)。其中 \(x-1、x^2-1、x^4-1\) 都能整除餘式，非零常數 5 也是單位因子；但 \(x^3-1\) 不能整除 \(x^4-1\)。`],
      optionAnalysis: {
        "1": "在實係數多項式中，非零常數可作為公因式。",
        "2": String.raw`\(x-1\) 整除 \(x^4-1\)，可能成立。`,
        "3": String.raw`\(x^2-1\) 整除 \(x^4-1\)，可能成立。`,
        "4": String.raw`\(x^3-1\) 不整除餘式，故不可能同時整除 \(f,g\)。`,
        "5": "餘式本身可以成為兩多項式的公因式。"
      }
    },
    "98M-4": {
      verified: true, sourcePage: 1,
      stem: "甲、乙、丙三所高中的一年級分別有 3、4、5 個班級。從 12 班中依序不放回抽兩班參加不同科抽考，求兩班來自同校的機率最接近何者。",
      options: { "1": "21%", "2": "23%", "3": "25%", "4": "27%", "5": "29%" },
      solution: [String.raw`同校的無序班級對數為
      \[
      \binom32+\binom42+\binom52=3+6+10=19，
      \]
      全部班級對數為 \(\binom{12}2=66\)。所以機率
      \[
      \frac{19}{66}\approx28.79\%，
      \]
      最接近 29%。`],
      optionAnalysis: {
        "1": "低估了班級數最多的丙校所貢獻的同校配對。",
        "2": "不符合三校同校配對數除以全部配對數。",
        "3": "不能把三所學校直接視為等機率。",
        "4": "仍低於精確值約 28.79%。",
        "5": "精確機率約為 28.79%，最接近 29%。"
      }
    },
    "98M-5": {
      verified: true, sourcePage: 2,
      stem: "甲、乙、丙三鎮兩兩距離皆為 20 公里。一條直線公路通過甲、乙，另一條直線公路通過丙，兩路交於丁且夾角為 45°。求丙、丁的距離約為多少。",
      options: { "1": "24.5 公里", "2": "25 公里", "3": "25.5 公里", "4": "26 公里", "5": "26.5 公里" },
      solution: [String.raw`三鎮形成邊長 20 的正三角形。取甲乙公路為水平軸，丙到此路的垂直距離為 \(10\sqrt3\)。丙丁公路與水平線夾角 \(45^\circ\)，故
      \[
      CD=\frac{10\sqrt3}{\sin45^\circ}=10\sqrt6\approx24.495。
      \]
      最接近 24.5 公里。`],
      optionAnalysis: {
        "1": String.raw`\(10\sqrt6\approx24.495\)，最接近此值。`,
        "2": "把近似值過度取整為 25。",
        "3": "高估了斜線長度。",
        "4": "不符合正三角形高與 45° 斜線的關係。",
        "5": "不符合計算值。"
      }
    },
    "98M-6": {
      verified: true, sourcePage: 2,
      stem: "坐標平面上有多少條直線，使原點 O 到直線的距離為 1，且 A(3,0) 到直線的距離為 2？",
      options: { "1": "1 條", "2": "2 條", "3": "3 條", "4": "4 條", "5": "無窮多條" },
      solution: [String.raw`把所求直線視為分別與兩圓 \(C_O(O,1)\)、\(C_A(A,2)\) 相切的公切線。兩圓心距為 3，恰等於半徑和 \(1+2\)，所以兩圓外切。`, "兩外切圓有兩條外公切線，另有一條通過外切點的共同切線，共 3 條。"],
      optionAnalysis: {
        "1": "只算了兩圓接觸點處的共同切線。",
        "2": "只算兩條外公切線，漏掉接觸點切線。",
        "3": "外切兩圓共有兩條外公切線與一條接觸點公切線。",
        "4": "四條公切線只會出現在兩圓彼此分離且不相交時。",
        "5": "同時符合兩個固定距離條件的直線只有有限條。"
      }
    },
    "98M-7": {
      verified: true, sourcePage: 2,
      stem: "下列哪些選項中的數是有理數？請選出所有符合條件者。",
      options: { "1": "3.1416", "2": String.raw`\(\sqrt3\)`, "3": String.raw`\(\log_{10}5+\log_{10}2\)`, "4": String.raw`\(\frac{\sin15^\circ}{\cos15^\circ}+\frac{\cos15^\circ}{\sin15^\circ}\)`, "5": String.raw`方程式 \(x^3-2x^2+x-1=0\) 的唯一實根` },
      solution: [String.raw`有限小數 3.1416 是有理數。（3）等於 \(\log_{10}10=1\)。（4）為
      \[
      \tan15^\circ+\cot15^\circ
      =\frac1{\sin15^\circ\cos15^\circ}
      =\frac2{\sin30^\circ}=4。
      \]
      三者皆為有理數。`, String.raw`\(\sqrt3\) 是無理數。選項（5）的整係數首一多項式若有有理根，只可能是 \(\pm1\)，代入皆不成立，故其唯一實根為無理數。`],
      optionAnalysis: {
        "1": "有限小數可化成整數比，是有理數。",
        "2": String.raw`\(\sqrt3\) 是無理數。`,
        "3": "利用對數乘法可化為 1。",
        "4": "利用正弦倍角公式可化為 4。",
        "5": "有理根定理排除 ±1，因此唯一實根不是有理數。"
      }
    },
    "98M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`依原卷位置圖，四直線方程依序為
      \[
      L_1:y=m_1x,\quad L_2:y=m_2x,\quad L_3:y=m_3x,\quad L_4:y=m_4x+c。
      \]
      圖中 \(L_1\perp L_3\)、\(L_3\parallel L_4\)，且 \(0<m_3<1、m_2<m_1<0、c<0\)。選出正確敘述。`,
      options: { "1": String.raw`\(m_3>m_2>m_1\)`, "2": String.raw`\(m_1m_4=-1\)`, "3": String.raw`\(m_1<-1\)`, "4": String.raw`\(m_2m_3<-1\)`, "5": String.raw`\(c>0\)` },
      solution: [String.raw`平行給出 \(m_4=m_3\)，垂直給出 \(m_1m_3=-1\)，故 \(m_1m_4=-1\)，（2）成立。`, String.raw`因 \(0<m_3<1\)，所以 \(m_1=-1/m_3<-1\)，（3）成立。圖上 \(m_2<m_1\)，乘上正數 \(m_3\) 得 \(m_2m_3<m_1m_3=-1\)，故（4）成立。`],
      optionAnalysis: {
        "1": "圖上兩負斜率的次序是 m₂<m₁，不是 m₂>m₁。",
        "2": "由 m₄=m₃ 與 m₁m₃=-1 得到，正確。",
        "3": "m₃ 介於 0 與 1，所以其負倒數小於 -1。",
        "4": "m₂ 比 m₁ 更負，乘正的 m₃ 後小於 -1。",
        "5": "L₄ 與 y 軸交於原點下方，所以 c<0。"
      }
    },
    "98M-9": {
      verified: true, sourcePage: 3,
      stem: "某產品在甲、乙兩地知名度的 95% 信賴區間分別為 [0.50,0.58]、[0.08,0.16]。選出正確敘述。",
      options: {
        "1": "甲地本次受訪者中，54% 的人聽過該產品",
        "2": "此次民調在乙地的受訪人數少於甲地",
        "3": "甲地全體居民中有一半以上聽過該產品的機率大於 95%",
        "4": "在乙地重複民調，所得知名度有 95% 的機會落在 [0.08,0.16]",
        "5": "廣告後把乙地受訪人數增為四倍，95% 信賴區間寬度必減半為 0.04"
      },
      solution: [String.raw`信賴區間中心即樣本比例，所以甲地樣本比例為 \((0.50+0.58)/2=0.54\)，（1）成立。兩區間半寬同為 0.04，標準誤同為 0.02。`, String.raw`由 \(n=\hat p(1-\hat p)/SE^2\)，甲地約 \(0.54(0.46)/0.0004=621\) 人，乙地約 \(0.12(0.88)/0.0004=264\) 人，故（2）成立。其餘選項誤解信賴區間，或忽略廣告後母體比例可能改變。`],
      optionAnalysis: {
        "1": "區間中心 0.54 就是本次樣本比例。",
        "2": "在標準誤相同下，乙地較小的 p(1-p) 對應較小樣本數。",
        "3": "頻率學派信賴區間不能解讀為固定母體參數的機率。",
        "4": "95% 指的是重複抽樣所建區間涵蓋母體參數的長期比例，不是估計值落入本區間的機率。",
        "5": "廣告後支持比例可能改變，不能保證區間寬度恰減半。"
      }
    },
    "98M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a,b,c\) 為實數，考慮方程組
      \[
      \begin{cases}
      x+2y+az=1,\\
      3x+4y+bz=-1,\\
      2x+10y+7z=c。
      \end{cases}
      \]
      選出正確敘述。`,
      options: {
        "1": "若有解，則必定恰有一組解",
        "2": String.raw`若有解，則 \(11a-3b\ne7\)`,
        "3": String.raw`若有解，則 \(c=14\)`,
        "4": String.raw`若無解，則 \(11a-3b=7\)`,
        "5": String.raw`若無解，則 \(c\ne14\)`
      },
      solution: [String.raw`前兩式左側做 \(11\times\)第一式 \(-3\times\)第二式，可得
      \[
      2x+10y+(11a-3b)z=14。
      \]
      若 \(11a-3b\ne7\)，係數矩陣非奇異，方程組必有唯一解。要無解，必須先有 \(11a-3b=7\)，使第三式左側成為前兩式組合；此時若 \(c\ne14\) 才矛盾而無解。`],
      optionAnalysis: {
        "1": "當係數矩陣奇異且常數相容時，可能有無限多解。",
        "2": "有解也可能發生在奇異但相容的情形。",
        "3": "非奇異時任何 c 都有唯一解，不必等於 14。",
        "4": "無解必先使第三列係數成為前兩列的線性組合，故正確。",
        "5": "在係數已相依時，c 不等於相同線性組合的 14 才會無解。"
      }
    },
    "98M-11": {
      verified: true, sourcePage: 4,
      stem: "正立方體 ABCD-EFGH 稜長為 2，K 為正方形 ABCD 中心，M、N 分別為 BF、EF 中點。選出正確敘述。",
      options: {
        "1": String.raw`\(\overrightarrow{KM}=\frac12\overrightarrow{AB}-\frac12\overrightarrow{AD}+\frac12\overrightarrow{AE}\)`,
        "2": String.raw`\(\overrightarrow{KM}\cdot\overrightarrow{AB}=1\)`,
        "3": String.raw`\(\overline{KM}=3\)`,
        "4": String.raw`\(\triangle KMN\) 為直角三角形`,
        "5": String.raw`\(\triangle KMN\) 面積為 \(\frac{\sqrt{10}}2\)`
      },
      solution: [String.raw`以 \(A\) 為起點，令 \(\overrightarrow{AB}=u、\overrightarrow{AD}=v、\overrightarrow{AE}=w\)，三向量互相垂直且長皆為 2。則
      \[
      K=\frac{u+v}{2},\quad M=u+\frac w2,\quad N=\frac u2+w。
      \]
      因此 \(\overrightarrow{KM}=\frac12u-\frac12v+\frac12w\)，（1）成立。`, String.raw`其長為 \(\sqrt3\)，且 \(\overrightarrow{KM}\cdot u=2\)，故（2）（3）錯。在 \(M\) 點，
      \[
      \overrightarrow{MK}\cdot\overrightarrow{MN}=0，
      \]
      所以（4）成立。兩直角邊長為 \(\sqrt3,\sqrt2\)，面積為 \(\sqrt6/2\)，不是 \(\sqrt{10}/2\)。`],
      optionAnalysis: {
        "1": "依三個互相垂直的稜向量分解，式子正確。",
        "2": "內積為 (1/2)|AB|²=2，不是 1。",
        "3": String.raw`三個互相垂直的分量長皆為 1，所以 \(KM=\sqrt3\)。`,
        "4": "MK 與 MN 的內積為 0，因此 M 為直角頂點。",
        "5": "正確面積為 √6/2。"
      }
    },
    "98M-12": {
      verified: true, sourcePage: 4,
      stem: "從 1 到 100 的正整數中，刪去所有質數、2 的倍數與 3 的倍數後，求剩下的最大數。",
      solution: ["由 100 向下檢查：100、99、98、96 分別為 2 或 3 的倍數，97 是質數；95=5×19，既非質數，也不是 2 或 3 的倍數。因此最大剩餘數為 95。"]
    },
    "98M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`坐標平面上 \(O=(0,0)、A=(-3,-5)、B=(6,0)、C=(x,y)\)。質點自 O 沿 \(\overrightarrow{AO}\) 方向前進 \(AO\) 後到 P，再沿 \(\overrightarrow{BP}\) 方向前進 \(2BP\) 後到 Q，最後沿 \(\overrightarrow{CQ}\) 方向前進 \(3CQ\) 後回到 O。求 C。`,
      solution: [String.raw`\(\overrightarrow{AO}=(3,5)\)，故 \(P=(3,5)\)。接著
      \[
      Q=P+2(P-B)=3P-2B=(-3,15)。
      \]
      最後 \(O=Q+3(Q-C)=4Q-3C\)，所以
      \[
      C=\frac43Q=(-4,20)。
      \]`]
    },
    "98M-14": {
      verified: true, sourcePage: 4,
      stem: "抽獎箱原有 2 顆藍球、5 顆紅球；抽中藍球得 2000 元，紅球得 1000 元，其他顏色不得獎。若加入 n 顆其他色球後，期望值為 300 元，求 n。",
      solution: [String.raw`依期望值列式：
      \[
      \frac{2(2000)+5(1000)}{7+n}=300。
      \]
      因此 \(9000=2100+300n\)，解得 \(n=23\)。`]
    },
    "98M-15": {
      verified: true, sourcePage: 5,
      stem: "坐標平面上兩條平行直線的 x 截距相差 20、y 截距相差 15，求兩直線距離。",
      solution: [String.raw`把兩直線寫成同一法向量的形式 \(ax+by=c_1,c_2\)。截距差給出
      \[
      \frac{|c_1-c_2|}{|a|}=20,\qquad
      \frac{|c_1-c_2|}{|b|}=15。
      \]
      可取 \(|a|:|b|=3:4\)，且 \(|c_1-c_2|=60\)。故線距為
      \[
      \frac{60}{\sqrt{3^2+4^2}}=12。
      \]`]
    },
    "98M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`開口向上拋物線 \(\Gamma_1\) 的對稱軸為 \(x=-3/4\)，焦距為 \(1/8\)。若它與 \(\Gamma_2:y=x^2\) 恰交於一點，求 \(\Gamma_1\) 頂點的 y 坐標。`,
      solution: [String.raw`設頂點縱坐標為 \(k\)。因焦距 \(p=1/8\)，
      \[
      \Gamma_1:y=2\left(x+\frac34\right)^2+k。
      \]
      與 \(y=x^2\) 聯立後得
      \[
      x^2+3x+\frac98+k=0。
      \]
      恰交一點表示判別式為 0：
      \[
      9-4\left(\frac98+k\right)=0，
      \]
      所以 \(k=9/8\)。`]
    },
    "98M-17": {
      verified: true, sourcePage: 5,
      stem: "某公司希望五年後當年二氧化碳排放量降為目前的 75%，且每年按固定比率減少。求每年至少須比前一年減少多少百分比（四捨五入至小數點後一位）。",
      solution: [String.raw`設每年保留比例為 \(r\)，則 \(r^5=0.75\)，所以
      \[
      r=0.75^{1/5}\approx0.9441。
      \]
      每年減量比例為 \(1-r\approx0.0559\)，即約 \(5.6\%\)。`]
    },
    "98M-18": {
      verified: true, sourcePage: 5,
      stem: String.raw`xy 平面上的正方形頂點為 \(O(0,0,0)、A(8,0,0)、B(8,8,0)、C(0,8,0)\)。點 P 在 xy 平面上方，且到四頂點距離皆為 6。若通過 A、B、P 的平面為 \(x+by+cz=d\)，求 \((b,c,d)\)。`,
      solution: [String.raw`P 在正方形中心 \((4,4,0)\) 的鉛直線上。中心到頂點距離為 \(4\sqrt2\)，故高度
      \[
      h=\sqrt{6^2-(4\sqrt2)^2}=2，
      \]
      所以 \(P=(4,4,2)\)。`, String.raw`代入 A 得 \(d=8\)；代入 B 得 \(8+8b=8\)，故 \(b=0\)；代入 P 得 \(4+2c=8\)，故 \(c=2\)。答案為 \((0,2,8)\)。`]
    },
    "98M-19": {
      verified: true, sourcePage: 6,
      stem: "一橢圓與一雙曲線有共同焦點 F₁、F₂，且雙曲線的貫軸長等於橢圓的短軸長。P 為兩曲線交點，且 PF₁×PF₂=64，求 F₁F₂。",
      solution: [String.raw`設橢圓半長軸、半短軸為 \(a,b\)，共同半焦距為 \(c\)。雙曲線半貫軸等於 \(b\)。在交點 P，
      \[
      PF_1+PF_2=2a,\qquad |PF_1-PF_2|=2b。
      \]
      因此
      \[
      PF_1PF_2=\frac{(2a)^2-(2b)^2}{4}=a^2-b^2=c^2=64。
      \]
      故 \(c=8\)，焦距 \(F_1F_2=2c=16\)。`]
    },
    "98M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`在 \(\triangle ABC\) 中，\(AB=10、AC=9、\cos\angle BAC=3/8\)。P、Q 分別在 AB、AC 上，且 \(\triangle APQ\) 面積為 \(\triangle ABC\) 的一半。求 PQ 的最小值。`,
      solution: [String.raw`設 \(AP=m、AQ=n\)。兩三角形共有夾角 A，面積比為
      \[
      \frac{mn}{10\cdot9}=\frac12，
      \]
      所以 \(mn=45\)。由餘弦定理
      \[
      PQ^2=m^2+n^2-2mn\cdot\frac38。
      \]
      在 \(mn=45\) 下，\(m^2+n^2\ge2mn=90\)，等號於 \(m=n=\sqrt{45}\) 時成立，且點仍在線段內。`, String.raw`因此
      \[
      PQ_{\min}^2=90-90\cdot\frac38=\frac{225}{4}，
      \qquad PQ_{\min}=\frac{15}{2}。
      \]`]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "97M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`對任意實數 \(x\)，求 \(27^{\,x^2+\frac23}\) 的最小值。`,
      options: { "1": "3", "2": String.raw`\(3\sqrt3\)`, "3": "9", "4": "27", "5": String.raw`\(81\sqrt3\)` },
      solution: [String.raw`因 \(x^2\ge0\)，指數 \(x^2+\frac23\) 在 \(x=0\) 時最小。又底數 \(27>1\)，所以
      \[
      27^{x^2+2/3}\ge27^{2/3}=(\sqrt[3]{27})^2=9。
      \]`],
      optionAnalysis: {
        "1": String.raw`這是 \(27^{1/3}\)，不是題目最小指數 \(2/3\) 的結果。`,
        "2": "不符合 27 的三分之二次方。",
        "3": String.raw`取 \(x=0\) 時達到 \(27^{2/3}=9\)。`,
        "4": "把最小指數誤當成 1。",
        "5": "對應更大的指數，並非最小值。"
      }
    },
    "97M-2": {
      verified: true, sourcePage: 1,
      stem: "投手原先主投 90 局，ERA 為 3.2；最新一場主投 6 局且無責任失分。依 ERA=總責任失分÷局數×9，求更新後 ERA。",
      options: { "1": "2.9", "2": "3.0", "3": "3.1", "4": "3.2", "5": "3.3" },
      solution: [String.raw`原責任失分 \(E\) 滿足
      \[
      \frac{E}{90}\cdot9=3.2，
      \]
      故 \(E=32\)。新總局數為 96，責任失分仍為 32，因此
      \[
      \mathrm{ERA}=\frac{32}{96}\cdot9=3.0。
      \]`],
      optionAnalysis: {
        "1": "下降幅度過大。",
        "2": "以相同責任失分除以更新後 96 局，得到 3.0。",
        "3": "沒有依 ERA 定義做精確加權。",
        "4": "忽略新增的 6 局無失分。",
        "5": "無失分局數增加後 ERA 不會上升。"
      }
    },
    "97M-3": {
      verified: true, sourcePage: 1,
      stem: "圓形跑道內、外圈半徑為 30、50 公尺。相同時間內，甲走完內圈一圈時乙恰跑完外圈兩圈。若甲走 45 公尺，同時乙跑多少公尺？",
      options: { "1": "90 公尺", "2": "120 公尺", "3": "135 公尺", "4": "150 公尺", "5": "180 公尺" },
      solution: [String.raw`相同時間內的路程比等於
      \[
      \frac{2(2\pi\cdot50)}{2\pi\cdot30}=\frac{10}{3}。
      \]
      所以甲走 45 公尺時，乙跑 \(45\cdot10/3=150\) 公尺。`],
      optionAnalysis: {
        "1": "只用了圈數 2 倍，忽略兩圈半徑不同。",
        "2": "未正確結合圈數與圓周長。",
        "3": "把速度比誤算為 3。",
        "4": "完整使用兩圈外圈與一圈內圈的路程比，正確。",
        "5": "高估了外圈與內圈的綜合路程比。"
      }
    },
    "97M-4": {
      verified: true, sourcePage: 1,
      stem: "車牌共六碼：前兩碼為 O 以外的英文大寫字母，後四碼為數字，且不得連續出現三個 4。求第一碼為 A、最後一碼為 4 的車牌數。",
      options: { "1": String.raw`\(25\times9^3\)`, "2": String.raw`\(25\times9^2\times10\)`, "3": String.raw`\(25\times900\)`, "4": String.raw`\(25\times990\)`, "5": String.raw`\(25\times999\)` },
      solution: [String.raw`第二個字母有 25 種。固定最後一碼為 4 後，前三個數字原有 \(10^3=1000\) 種。會出現連續三個 4 的情形是第二、三、四個數字皆為 4，此時第一個數字任意，共 10 種；其中已包含四個 4。`, String.raw`所以合法數字串有 \(1000-10=990\) 種，總數為 \(25\times990\)。`],
      optionAnalysis: {
        "1": "把每個數字都錯誤地排除 4。",
        "2": "只允許特定位置使用 4，限制過多。",
        "3": "多排除了合法數字串。",
        "4": "每個第二字母配 990 個合法數字串，正確。",
        "5": "只排除 4444，漏掉首位數字非 4 但末三碼為 444 的九種情形。"
      }
    },
    "97M-5": {
      verified: true, sourcePage: 2,
      stem: "小明位於正東紅旗與正西白旗之間，至紅旗距離是至白旗的 6 倍。向北走 10 公尺後，至紅旗距離變為至白旗的 4 倍。求兩旗距離最接近何者。",
      options: { "1": "60 公尺", "2": "65 公尺", "3": "70 公尺", "4": "75 公尺", "5": "80 公尺" },
      solution: [String.raw`設原先到白旗距離為 \(t\)，到紅旗為 \(6t\)。北移後由畢氏定理：
      \[
      \sqrt{36t^2+100}=4\sqrt{t^2+100}。
      \]
      平方整理得 \(20t^2=1500\)，所以 \(t=\sqrt{75}\)。兩旗距離為
      \[
      7t=7\sqrt{75}\approx60.62，
      \]
      最接近 60 公尺。`],
      optionAnalysis: {
        "1": "精確距離約 60.62 公尺，最接近 60。",
        "2": "比精確值約多 4.4 公尺。",
        "3": "高估了兩次距離比例所決定的旗距。",
        "4": "不符合聯立的畢氏關係。",
        "5": "不符合聯立的畢氏關係。"
      }
    },
    "97M-6": {
      verified: true, sourcePage: 2,
      stem: "在坐標平面上，下列哪些函數的圖形完全落在 x 軸上方？請選出所有符合者。",
      options: { "1": String.raw`\(y=x+100\)`, "2": String.raw`\(y=x^2+1\)`, "3": String.raw`\(y=2+\sin x\)`, "4": String.raw`\(y=2^x\)`, "5": String.raw`\(y=\log x\)` },
      solution: [String.raw`\(x^2+1\ge1>0\)；\(2+\sin x\ge1>0\)；\(2^x>0\)，所以（2）（3）（4）全在 x 軸上方。`, "直線 x+100 在 x<-100 時為負；log x 在 0<x<1 時為負。"],
      optionAnalysis: {
        "1": "當 x<-100 時函數值為負。",
        "2": "最小值為 1，恆正。",
        "3": "最小值為 1，恆正。",
        "4": "指數函數值對所有實數 x 都大於 0。",
        "5": "在 0<x<1 時對數值小於 0。"
      }
    },
    "97M-7": {
      verified: true, sourcePage: 2,
      stem: "某高中 20 班、每班 40 人，其中各班男 25、女 15。從全校 800 人簡單隨機抽樣 80 人，選出正確敘述。",
      options: {
        "1": "每班至少會有一人被抽中",
        "2": "抽出的男生人數一定比女生多",
        "3": "已知小文是男生、小美是女生，小文被抽中機率較大",
        "4": "任意兩位指定學生同時被抽中的機率不因是否同班而改變",
        "5": "指定的一對兄弟同時被抽中的機率小於 1/100"
      },
      solution: [String.raw`簡單隨機抽樣中，每位學生被抽中的機會相同，任意指定兩人同時入樣的機率也只由總人數與樣本數決定，與性別、班級或親屬關係無關。因此（4）成立。`, String.raw`指定兩人同時被抽中的機率為
      \[
      \frac{80}{800}\cdot\frac{79}{799}\approx0.00989<0.01，
      \]
      故（5）成立。`],
      optionAnalysis: {
        "1": "簡單隨機抽樣可能有班級完全未被抽中。",
        "2": "樣本組成具有隨機性，不能保證男生一定較多。",
        "3": "每位個體的入樣機率都等於 80/800。",
        "4": "指定兩人是否同班不影響簡單隨機抽樣的聯合入樣機率。",
        "5": "精確機率約 0.9887%，小於 1%。"
      }
    },
    "97M-8": {
      verified: true, sourcePage: 3,
      stem: "已知 a₁、a₂、a₃ 為等差數列，b₁、b₂、b₃ 為等比數列，六數皆為實數。選出正確敘述。",
      options: {
        "1": String.raw`\(a_1<a_2\) 與 \(a_2>a_3\) 可能同時成立`,
        "2": String.raw`\(b_1<b_2\) 與 \(b_2>b_3\) 可能同時成立`,
        "3": String.raw`若 \(a_1+a_2<0\)，則 \(a_2+a_3<0\)`,
        "4": String.raw`若 \(b_1b_2<0\)，則 \(b_2b_3<0\)`,
        "5": String.raw`若三個 \(b_i\) 皆為正整數且 \(b_1<b_2\)，則 \(b_1\mid b_2\)`
      },
      solution: [String.raw`等差數列相鄰差相同，不可能先增後減，故（1）錯；但等比數列可取 \((-4,2,-1)\)，所以（2）可能。`, String.raw`等比數列中 \(b_1b_2=b_1^2r\)、\(b_2b_3=b_1^2r^3\)，兩者符號相同，故（4）成立。（3）可由公差較大的反例否定；（5）可取 \((8,12,18)\) 反例。`],
      optionAnalysis: {
        "1": "等差數列公差固定，不能先嚴格上升再嚴格下降。",
        "2": "公比為負時可能出現，例如 -4、2、-1。",
        "3": "前兩項和為負不能限制後兩項和；公差可使後者轉正。",
        "4": "兩個相鄰乘積的符號都由公比 r 決定。",
        "5": "8、12、18 是正整數等比數列，但 8 不整除 12。"
      }
    },
    "97M-9": {
      verified: true, sourcePage: 3,
      stem: String.raw`A、B 兩種菌在任何時刻的個數乘積為 \(10^{10}\)。令 \(P_A=\log(n_A)\) 記錄 A 菌個數，選出正確敘述。`,
      options: {
        "1": String.raw`\(1\le P_A\le10\)`,
        "2": String.raw`當 \(P_A=5\) 時，A、B 菌個數相同`,
        "3": String.raw`\(P_A\) 由 4 變 8 表示 A 菌變為 2 倍`,
        "4": String.raw`\(P_A\) 增加 1 表示 A 菌增加 10 個`,
        "5": "若 B 菌為 5 萬個，則 5<P_A<5.5"
      },
      solution: [String.raw`當 \(P_A=5\) 時 \(n_A=10^5\)，故 \(n_B=10^{10}/10^5=10^5\)，（2）成立。`, String.raw`若 \(n_B=5\times10^4\)，則 \(n_A=2\times10^5\)，所以
      \[
      P_A=5+\log2\approx5.301，
      \]
      故（5）成立。`],
      optionAnalysis: {
        "1": "A 菌可只有 1 個，此時 P_A=0。",
        "2": "乘積固定且兩者都是 10⁵，正確。",
        "3": "對數差 4 代表個數相差 10⁴ 倍。",
        "4": "對數增加 1 代表個數乘以 10，不是增加 10。",
        "5": "此時 P_A=5+log2，約 5.301。"
      }
    },
    "97M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`實係數多項式 \(f(x)\) 與 \(g(x)=x^3+x^2-2\) 有次數大於 0 的公因式，選出正確敘述。`,
      options: {
        "1": String.raw`\(g(x)=0\) 恰有一實根`,
        "2": String.raw`\(f(x)=0\) 必有實根`,
        "3": "若 f=0 與 g=0 有共同實根，則此根必為 1",
        "4": "若兩方程有共同實根，則 f、g 的最高公因式為一次式",
        "5": "若兩方程沒有共同實根，則 f、g 的最高公因式為二次式"
      },
      solution: [String.raw`因式分解
      \[
      g(x)=(x-1)(x^2+2x+2)。
      \]
      二次因式判別式為 \(-4\)，沒有實根，因此 g 恰有實根 1，（1）（3）成立。`, "若 f、g 沒有共同實根，它們的非定值公因式只能是不可約二次因式，故最高公因式為二次式，（5）成立。共同因式也可能只有該二次式，所以 f 不一定有實根；有共同實根時最高公因式也可能是整個 g。"],
      optionAnalysis: {
        "1": "g 的二次因式無實根，只剩 x=1。",
        "2": "f 可能只含共同的不可約二次因式而沒有實根。",
        "3": "g 唯一實根為 1。",
        "4": "若 f 是 g 的倍式，最高公因式可為三次。",
        "5": "沒有共同實根時，只能共同擁有不可約二次因式。"
      }
    },
    "97M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`空間中
      \[
      L_1:\frac{x}{1}=\frac{y+3}{6}=\frac{z+4}{8},\quad
      L_2:\frac{x}{1}=\frac{y+3}{3}=\frac{z+4}{4},\quad
      L_3:\frac{x}{1}=\frac y3=\frac z4。
      \]
      選出正確敘述。`,
      options: {
        "1": String.raw`\(L_1\) 與 \(L_2\) 相交`,
        "2": String.raw`\(L_2\) 與 \(L_3\) 平行`,
        "3": "P(0,-3,-4) 到 Q(0,0,0) 的距離就是 P 到 L₃ 的最短距離",
        "4": String.raw`直線 \(L:x=0,\ \frac{y+3}{4}=\frac{z+4}{-3}\) 與 \(L_1,L_2\) 皆垂直`,
        "5": String.raw`\(L_1,L_2,L_3\) 共平面`
      },
      solution: [String.raw`\(L_1,L_2\) 都通過 \(P=(0,-3,-4)\)，故相交。\(L_2,L_3\) 方向同為 \((1,3,4)\)，且為相異直線，故平行。`, String.raw`L 的方向 \((0,4,-3)\) 分別與 \((1,6,8)\)、\((1,3,4)\) 內積為 0，故（4）成立。由平行線 \(L_2,L_3\) 決定的平面也包含通過 P、方向為 \((1,6,8)\) 的 \(L_1\)，故（5）成立。PQ 並不垂直 \(L_3\)，所以（3）錯。`],
      optionAnalysis: {
        "1": "兩線具有共同點 P。",
        "2": "兩線方向向量相同且不重合。",
        "3": "PQ 與 L₃ 方向內積不為 0，不是垂線。",
        "4": "方向向量同時垂直於 L₁、L₂ 的方向。",
        "5": "L₁ 位於由相交於 P 的 L₁ 與平行線組所決定的同一平面中。"
      }
    },
    "97M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`圓 \(\Gamma:x^2+y^2-10x+9=0\)。選出關於圓心及其與各直線距離關係的正確敘述。`,
      options: {
        "1": "圓心為 (5,0)",
        "2": String.raw`圓上點到 \(3x+4y-15=0\) 的最遠距離為 4`,
        "3": String.raw`\(3x+4y+15=0\) 與圓相切`,
        "4": String.raw`圓上恰有兩點到 \(3x+4y=0\) 的距離為 2`,
        "5": String.raw`圓上恰有四點到 \(3x+4y-5=0\) 的距離為 2`
      },
      solution: [String.raw`配方得 \((x-5)^2+y^2=16\)，圓心 \((5,0)\)、半徑 4，故（1）成立。第一條直線通過圓心，最遠距離就是半徑 4，故（2）成立。`, "對 L₂ 而言，距離為 2 的兩條平行線中，一條割圓得兩點、另一條不交，故（4）成立。選項（3）的線到圓心距離為 6；選項（5）所對應的兩條平行線一條割圓、一條相切，共只有 3 點。"],
      optionAnalysis: {
        "1": "配方後可直接讀出圓心。",
        "2": "直線通過圓心，圓上最遠距離等於半徑。",
        "3": "直線到圓心距離 6，大於半徑 4。",
        "4": "兩條等距平行線中恰有一條割圓，得到兩點。",
        "5": "實際是一條割線加一條切線，共三點。"
      }
    },
    "97M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`空間中 \(A=(-1,6,0)、B=(3,-1,-2)、C=(4,4,5)\)。點 D 滿足
      \[
      3\overrightarrow{DA}-4\overrightarrow{DB}+2\overrightarrow{DC}=0，
      \]
      求 D。`,
      solution: [String.raw`展開位置向量：
      \[
      3(A-D)-4(B-D)+2(C-D)=0，
      \]
      所以 \(D=3A-4B+2C\)。代入得
      \[
      D=(-3,18,0)+(-12,4,8)+(8,8,10)=(-7,30,18)。
      \]`]
    },
    "97M-14": {
      verified: true, sourcePage: 5,
      stem: String.raw`A 在直線 \(3x-y=0\) 上，B 在 x 軸上，且 AB 中點為 \((7/2,6)\)。求 A、B 坐標。`,
      solution: [String.raw`設 \(A=(t,3t)、B=(s,0)\)。由中點 y 坐標
      \[
      \frac{3t}{2}=6
      \]
      得 \(t=4\)，故 \(A=(4,12)\)。再由 \((4+s)/2=7/2\) 得 \(s=3\)，所以 \(B=(3,0)\)。`]
    },
    "97M-15": {
      verified: true, sourcePage: 5,
      stem: "以原點 O 為圓心的圓上有相異點 A(1,0)、B、C，且 AB=BC。銳角三角形 OAB 面積為 3/10，求三角形 OAC 面積。",
      solution: [String.raw`圓半徑為 1。設 \(\angle AOB=\theta\)，因 OAB 為銳角三角形，\(\theta\) 為銳角。由面積
      \[
      \frac12\sin\theta=\frac3{10}
      \]
      得 \(\sin\theta=3/5、\cos\theta=4/5\)。`, String.raw`等弦 \(AB=BC\) 且 C 與 A 相異，故 \(\angle AOC=2\theta\)。因此
      \[
      [OAC]=\frac12\sin2\theta
      =\sin\theta\cos\theta=\frac{12}{25}。
      \]`]
    },
    "97M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`雙曲線 \(\Gamma:x^2/8-y^2=1\) 的焦點為 \(F_1,F_2\)，且 \(P=(-4,1)\) 在曲線上。若 \(\angle F_1PF_2\) 的內角平分線與 x 軸交於 D，求 D 的 x 坐標。`,
      solution: [String.raw`雙曲線半焦距 \(c=\sqrt{8+1}=3\)，故焦點為 \((-3,0),(3,0)\)。P 到兩焦點距離依序為
      \[
      \sqrt2,\quad\sqrt{50}=5\sqrt2。
      \]
      由角平分線定理，D 將焦點連線按 \(1:5\) 內分，所以
      \[
      x_D=-3+\frac16(6)=-2。
      \]`]
    },
    "97M-17": {
      verified: true, sourcePage: 5,
      stem: "長方體頂點 O 的三條相鄰稜向量為 (2,2,1)、(2,-1,-2)、(3,-6,6)。平面 x+by+cz=d 截出包含 O 的正立方體，求 (b,c,d)。",
      solution: [String.raw`三向量互相垂直，長度依序為 \(3,3,9\)。要截出包含 O 的稜長 3 正立方體，截面須垂直於長稜 \(w=(3,-6,6)\)，並通過 \(w/3=(1,-2,2)\)。`, String.raw`平面方程可寫為
      \[
      w\cdot(x,y,z)=w\cdot\frac w3=27，
      \]
      即 \(3x-6y+6z=27\)，除以 3 得
      \[
      x-2y+2z=9。
      \]
      所以 \((b,c,d)=(-2,2,9)\)。`]
    },
    "97M-18": {
      verified: true, sourcePage: 5,
      stem: String.raw`正整數 \(a,b\) 滿足 \(b^2=9a\) 且 \(a+2b>280\)，求 a 的最小可能值。`,
      solution: [String.raw`由 \(3\mid b\)，設 \(b=3n\)，則 \(a=n^2\)。條件化為
      \[
      n^2+6n>280。
      \]
      \(n=14\) 時左式恰為 280，不符合嚴格大於；\(n=15\) 時為 315。因此最小 \(a=15^2=225\)。`]
    },
    "97M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`質點以方向 \(u=(1,2)\) 入射直線 L，反射後沿方向 \(v=(-2,1)\) 前進。依入射角等於反射角，求第一分量為 1 的 L 方向向量。`,
      solution: [String.raw`兩向量長度相等，反射面的方向平分入射與反射方向。可取
      \[
      u+v=(-1,3)，
      \]
      其反向量第一分量為 1，所以直線方向向量為
      \[
      (1,-3)。
      \]`]
    },
    "97M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`圓 \(O_1:(x-7)^2+(y-1)^2=144\) 與 \(O_2:(x+2)^2+(y-13)^2=9\) 均與直線 \(x=-5\) 相切。以此直線為準線的拋物線通過兩圓心，求焦點坐標。`,
      solution: [String.raw`設焦點 \(F=(p,q)\)。兩圓心 \(C_1=(7,1)、C_2=(-2,13)\) 到準線的距離分別為 12、3。由拋物線定義：
      \[
      (7-p)^2+(1-q)^2=144，
      \]
      \[
      (-2-p)^2+(13-q)^2=9。
      \]
      聯立解得
      \[
      F=\left(-\frac15,\frac{53}{5}\right)。
      \]`]
    }
  });
})();

(() => {
  Object.assign(window.MATH_CONTENT, {
    "96M-1": {
      verified: true, sourcePage: 1,
      stem: String.raw`設 \(f(x)=ax^6-bx^4+3x-2\)，其中 \(a,b\) 為非零實數，求 \(f(5)-f(-5)\)。`,
      options: { "1": "−30", "2": "0", "3": String.raw`\(2\sqrt2\)`, "4": "30", "5": "無法確定（與 a、b 有關）" },
      solution: [String.raw`六次、四次項與常數項都是偶函數部分，代入 \(5,-5\) 後相消，只剩一次項：
      \[
      f(5)-f(-5)=3(5)-3(-5)=30。
      \]`],
      optionAnalysis: {
        "1": "相減順序顛倒才會得到負值。",
        "2": "忽略了奇次項 3x。",
        "3": "與題式的多項式代入無關。",
        "4": "偶次項相消，奇次項貢獻 30，正確。",
        "5": "a、b 所在偶次項都會相消，答案可以確定。"
      }
    },
    "96M-2": {
      verified: true, sourcePage: 1,
      stem: String.raw`通過 \(A(-n,0)\)、\(B(0,2)\) 的直線也通過 \(P(7,k)\)，其中 \(n,k\) 都是正整數。求符合條件的正整數 \(n\) 有多少個。`,
      options: { "1": "2 個", "2": "4 個", "3": "6 個", "4": "8 個", "5": "無窮多個" },
      solution: [String.raw`直線截距式為
      \[
      -\frac{x}{n}+\frac y2=1。
      \]
      代入 \(P(7,k)\) 得 \(k=2+14/n\)。要使 k 為正整數，n 必須是 14 的正因數，故
      \[
      n=1,2,7,14，
      \]
      共 4 個。`],
      optionAnalysis: {
        "1": "漏掉部分 14 的正因數。",
        "2": "14 有 1、2、7、14 四個正因數，正確。",
        "3": "把非整除 14 的 n 也計入。",
        "4": "超過 14 的正因數個數。",
        "5": "整數條件限制 n 必須整除 14，只有有限個。"
      }
    },
    "96M-3": {
      verified: true, sourcePage: 1,
      stem: String.raw`某段時間的溫度函數為 \(f(t)=-t^2+10t+11\)，其中 \(1\le t\le10\)。求這段時間內的最大溫差。`,
      options: { "1": "9", "2": "16", "3": "20", "4": "25", "5": "36" },
      solution: [String.raw`配方得
      \[
      f(t)=-(t-5)^2+36，
      \]
      最大值為 \(f(5)=36\)。區間端點中較小者為 \(f(10)=11\)，所以最大溫差為 \(36-11=25\)。`],
      optionAnalysis: {
        "1": "不是區間最高與最低溫之差。",
        "2": "可能只比較了部分時刻。",
        "3": "f(1)=20 是其中一個端點溫度，不是溫差。",
        "4": "最高 36、最低 11，相差 25。",
        "5": "36 是最高溫，不是最大溫差。"
      }
    },
    "96M-4": {
      verified: true, sourcePage: 1,
      stem: String.raw`橢圓
      \[
      \frac{x^2}{9}+\frac{y^2}{4}=1
      \]
      與雙曲線
      \[
      \frac{(x+1)^2}{16}-\frac{y^2}{9}=1
      \]
      共有幾個交點？`,
      options: { "1": "1 個", "2": "2 個", "3": "3 個", "4": "4 個", "5": "0 個" },
      solution: [String.raw`由橢圓得 \(y^2=4(1-x^2/9)\)，代入雙曲線後化簡為
      \[
      145x^2+162x-1791=0，
      \]
      解得 \(x=3\) 或 \(x=-597/145\)。後者不在橢圓的範圍 \([-3,3]\)；\(x=3\) 時 \(y=0\)，所以只有一個交點 \((3,0)\)。`],
      optionAnalysis: {
        "1": "只有 x=3 對應橢圓上的點，故一個交點。",
        "2": "另一個代數根不符合橢圓實點範圍。",
        "3": "兩個二次曲線不必然有三個交點。",
        "4": "雖最高可能有四交點，本題實際只有一個。",
        "5": "點 (3,0) 同時滿足兩式。"
      }
    },
    "96M-5": {
      verified: true, sourcePage: 2,
      stem: String.raw`判斷 \(y=\sin x\) 與 \(y=x/(10\pi)\) 兩圖形的交點個數性質。`,
      options: { "1": "交點無窮多", "2": "交點是奇數且大於 20", "3": "交點是奇數且小於 20", "4": "交點是偶數且大於或等於 20", "5": "交點是偶數且小於 20" },
      solution: [String.raw`因 \(|\sin x|\le1\)，交點必在 \(|x|\le10\pi\)。兩函數皆為奇函數，除原點外的交點成正負對，因此總數為奇數。`, String.raw`在正半軸上，正弦為正的五個波段中，第一段除原點外有 1 個交點，其餘四段各有 2 個，共 9 個正根；連同 9 個負根與原點，共 \(19\) 個。因此是奇數且小於 20。`],
      optionAnalysis: {
        "1": "直線絕對值超過 1 後不可能再與正弦相交。",
        "2": "實際交點總數為 19。",
        "3": "交點共 19 個，符合。",
        "4": "原點加成對非零根使總數為奇數。",
        "5": "總數不是偶數。"
      }
    },
    "96M-6": {
      verified: true, sourcePage: 2,
      stem: String.raw`若 \(\Gamma=\{z:|z-1|=1\}\)，求經 \(w=iz\) 旋轉後的圖形 \(\Omega\) 上有哪些點。`,
      options: { "1": String.raw`\(2i\)`, "2": String.raw`\(-2i\)`, "3": String.raw`\(1+i\)`, "4": String.raw`\(1-i\)`, "5": String.raw`\(-1+i\)` },
      solution: [String.raw`乘以 i 是繞原點逆時針旋轉 \(90^\circ\)，因此原圓中心 1 轉到 i，半徑仍為 1：
      \[
      \Omega=\{w:|w-i|=1\}。
      \]
      逐點計算到 i 的距離，可知（1）（3）（5）皆為 1。`],
      optionAnalysis: {
        "1": String.raw`|2i-i|=1。`,
        "2": String.raw`|-2i-i|=3。`,
        "3": String.raw`|1+i-i|=1。`,
        "4": String.raw`|1-i-i|=\sqrt5。`,
        "5": String.raw`|-1+i-i|=1。`
      }
    },
    "96M-7": {
      verified: true, sourcePage: 2,
      stem: String.raw`相異點 \(P(s,t)、Q\) 的線段中垂線為 \(L:3x-4y=0\)。選出正確敘述。`,
      options: {
        "1": String.raw`\(\overrightarrow{PQ}\parallel(3,-4)\)`,
        "2": String.raw`\(PQ=\frac{|6s-8t|}{5}\)`,
        "3": String.raw`\(Q=(t,s)\)`,
        "4": "過 Q 且與 L 平行的直線必通過 (-s,-t)",
        "5": String.raw`\((\overrightarrow{OP}+\overrightarrow{OQ})\cdot\overrightarrow{PQ}=0\)`
      },
      solution: [String.raw`L 的法向量為 \((3,-4)\)，故 PQ 與它平行，（1）成立。P 到 L 的距離為 \(|3s-4t|/5\)，而 PQ 是此距離的兩倍，所以（2）成立。`, String.raw`L 通過原點且為中垂線，Q 是 P 對 L 的鏡射。中點向量 \((P+Q)/2\) 平行 L，所以 Q 與 \(-P\) 的連線也平行 L，（4）成立；鏡射保持到原點距離，故
      \[
      (P+Q)\cdot(Q-P)=|Q|^2-|P|^2=0，
      \]
      （5）成立。`],
      optionAnalysis: {
        "1": "PQ 垂直 L，故平行於 L 的法向量。",
        "2": "線段長是 P 到中垂線距離的兩倍。",
        "3": "對一般斜線鏡射不等於交換兩坐標。",
        "4": "Q-(-P)=P+Q 平行於中垂線。",
        "5": "P、Q 對過原點的直線鏡射，故長度相等。"
      }
    },
    "96M-8": {
      verified: true, sourcePage: 3,
      stem: String.raw`判斷下列哪些矩陣可經一系列列運算化成
      \[
      \begin{pmatrix}1&2&3&7\\0&1&1&2\\0&0&1&1\end{pmatrix}。
      \]`,
      options: {
        "1": String.raw`\(\begin{pmatrix}1&2&3&7\\0&1&1&2\\0&2&3&5\end{pmatrix}\)`,
        "2": String.raw`\(\begin{pmatrix}-1&3&-1&0\\-1&1&1&0\\3&1&-7&0\end{pmatrix}\)`,
        "3": String.raw`\(\begin{pmatrix}1&1&2&5\\1&-1&1&2\\1&1&2&5\end{pmatrix}\)`,
        "4": String.raw`\(\begin{pmatrix}2&1&3&6\\-1&1&1&0\\-2&2&2&1\end{pmatrix}\)`,
        "5": String.raw`\(\begin{pmatrix}1&3&2&7\\0&1&1&2\\0&1&0&1\end{pmatrix}\)`
      },
      solution: [String.raw`列運算保持列空間與簡化列梯形矩陣。選項（1）以第三列減去第二列的 2 倍可得 \((0,0,1,1)\)，即能化成目標矩陣。`, String.raw`選項（5）由第二列減第三列得到 \((0,0,1,1)\)，再調整第一列亦可化成目標矩陣。其餘三個矩陣列化簡後的秩或增廣關係與目標不同。`],
      optionAnalysis: {
        "1": "R₃−2R₂ 可直接產生目標第三列。",
        "2": "最後一欄全為 0，列運算後不可能得到目標的非零增廣欄關係。",
        "3": "第一、三列相同，秩不足。",
        "4": "列化簡所得增廣關係與目標不同。",
        "5": "R₂−R₃ 可產生目標第三列，再調整其餘列即可。"
      }
    },
    "96M-9": {
      verified: true, sourcePage: 3,
      stem: "xy 平面上放置三個半徑為 1 且兩兩相切的球，再把第四個同半徑球放在其上方並與三球相切。設下方球心為 A、B、C，上方球心為 P，選出正確敘述。",
      options: {
        "1": "A、B、C 所在平面與 xy 平面平行",
        "2": "三角形 ABC 是正三角形",
        "3": String.raw`三角形 PAB 有一邊長為 \(\sqrt2\)`,
        "4": String.raw`P 到直線 AB 的距離為 \(\sqrt3\)`,
        "5": String.raw`P 到 xy 平面的距離為 \(1+\sqrt3\)`
      },
      solution: [String.raw`下方三球都與 xy 平面相切，所以三球心高度皆為 1，故其平面平行 xy 平面。兩兩相切使 \(AB=BC=CA=2\)，所以 ABC 為正三角形。`, String.raw`P 與 A、B、C 的距離也都為 2，因此 PAB 是邊長 2 的正三角形，P 到 AB 的距離為其高 \(\sqrt3\)。上方球心相對 ABC 平面的高度是 \(2\sqrt6/3\)，故到 xy 平面距離為 \(1+2\sqrt6/3\)，不是 \(1+\sqrt3\)。`],
      optionAnalysis: {
        "1": "三個下方球心都有相同高度 1。",
        "2": "三球兩兩相切，球心距離皆為 2。",
        "3": "PAB 三邊都是 2，沒有 √2 的邊。",
        "4": "邊長 2 正三角形的高為 √3。",
        "5": "正確高度為 1+2√6/3。"
      }
    },
    "96M-10": {
      verified: true, sourcePage: 3,
      stem: String.raw`設 \(a>1\)，\(f(x)=a^x\)、\(g(x)=\log_a x\)。選出正確敘述。`,
      options: {
        "1": String.raw`若 \(f(3)=6\)，則 \(g(36)=6\)`,
        "2": String.raw`\(\frac{f(238)}{f(219)}=\frac{f(38)}{f(19)}\)`,
        "3": String.raw`\(g(238)-g(219)=g(38)-g(19)\)`,
        "4": "g 圖形上任兩相異點的連線斜率必為正",
        "5": String.raw`若 \(y=5x\) 與 \(y=f(x)\) 有兩交點，則 \(y=x/5\) 與 \(y=g(x)\) 也有兩交點`
      },
      solution: [String.raw`若 \(a^3=6\)，則 \(36=a^6\)，故 \(g(36)=6\)。（2）兩邊都等於 \(a^{19}\)。因 \(a>1\)，g 嚴格遞增，所以任兩點割線斜率為正。`, String.raw`f 與 g 的圖形關於 \(y=x\) 對稱，而 \(y=5x\) 反射後是 \(y=x/5\)，交點數保持不變。因此（1）（2）（4）（5）正確。（3）左右分別是 \(\log_a(238/219)\) 與 \(\log_a2\)，不相等。`],
      optionAnalysis: {
        "1": "36=(a³)²=a⁶，故對數為 6。",
        "2": "兩個指數差都為 19。",
        "3": "238/219 不等於 38/19=2。",
        "4": "底數大於 1 的對數函數嚴格遞增。",
        "5": "互為反函數的圖形及兩條互換直線都關於 y=x 對稱。"
      }
    },
    "96M-11": {
      verified: true, sourcePage: 4,
      stem: String.raw`實係數首一三次多項式 \(f\) 滿足 \(f(1)=1、f(2)=2、f(5)=5\)。判斷 \(f(x)=0\) 必在哪些區間有實根。`,
      options: { "1": String.raw`\((-\infty,0)\)`, "2": String.raw`\((0,1)\)`, "3": String.raw`\((1,2)\)`, "4": String.raw`\((2,5)\)`, "5": String.raw`\((5,\infty)\)` },
      solution: [String.raw`令 \(h(x)=f(x)-x\)，則 h 是首一三次式，且根為 1、2、5，所以
      \[
      f(x)=x+(x-1)(x-2)(x-5)。
      \]
      因 \(f(0)=-10<0<f(1)=1\)，在 \((0,1)\) 有根。又 \(f(2)=2>0、f(3)=-1<0、f(5)=5>0\)，所以在 \((2,5)\) 內至少有實根。`],
      optionAnalysis: {
        "1": "由具體多項式可知負半軸沒有必然變號。",
        "2": "f(0) 與 f(1) 異號，必有根。",
        "3": "兩端值都為正，且實際沒有必然根。",
        "4": "f(2)>0、f(3)<0、f(5)>0，區間內必有根。",
        "5": "首一三次式在 5 之後為正，沒有必然根。"
      }
    },
    "96M-12": {
      verified: true, sourcePage: 4,
      stem: String.raw`實數 \(x\) 滿足 \(0<x<1\) 且 \(\log_x4-\log_2x=1\)，求 x。`,
      solution: [String.raw`令 \(u=\log_2x<0\)，則 \(\log_x4=2/u\)。方程變成
      \[
      \frac2u-u=1
      \quad\Longrightarrow\quad
      u^2+u-2=0。
      \]
      得 \(u=1\) 或 \(-2\)；由 \(u<0\) 取 \(-2\)，所以 \(x=2^{-2}=1/4\)。`]
    },
    "96M-13": {
      verified: true, sourcePage: 4,
      stem: String.raw`三角形 ABC 中，P 為 BC 中點，Q 在 AC 上且 \(AQ=2QC\)。已知 \(\overrightarrow{PA}=(4,3)\)、\(\overrightarrow{PQ}=(1,5)\)，求 \(\overrightarrow{BC}\)。`,
      solution: [String.raw`以 P 為原點，則 \(A=(4,3)\)，且由 P 為中點可設 \(C=-B\)。又
      \[
      Q=\frac{A+2C}{3}=(1,5)。
      \]
      因此 \(B=(A-3Q)/2=(1/2,-6)\)、\(C=(-1/2,6)\)，故
      \[
      \overrightarrow{BC}=C-B=(-1,12)。
      \]`]
    },
    "96M-14": {
      verified: true, sourcePage: 4,
      stem: "15 位評審平均給分 76；其中 92、45、55 三筆與平均相差超過 15 分，須剔除後重算其餘 12 人平均。求比賽成績。",
      solution: [String.raw`原總分為 \(15\times76=1140\)。剔除三筆共 \(92+45+55=192\) 分後，剩餘總分 \(948\)，所以
      \[
      \frac{948}{12}=79。
      \]`]
    },
    "96M-15": {
      verified: true, sourcePage: 5,
      stem: "某區 25 排座位，每排比前排多 2 席；正中間第 13 排有 64 席。求 25 排總座位數。",
      solution: ["等差數列有奇數 25 項，中間項等於全體平均數。因此總座位數為 \(25\times64=1600\)。"]
    },
    "96M-16": {
      verified: true, sourcePage: 5,
      stem: String.raw`單位圓上 \(P=(1,0)、A=(-12/13,5/13)\)，且 \(\angle APB=90^\circ\)。求另一圓上點 B。`,
      solution: [String.raw`候選點 \(B=-A=(12/13,-5/13)\) 仍在單位圓上。檢查
      \[
      (A-P)\cdot(B-P)
      =\left(-\frac{25}{13},\frac5{13}\right)
      \cdot\left(-\frac1{13},-\frac5{13}\right)=0，
      \]
      故符合直角條件，答案為 \((12/13,-5/13)\)。`]
    },
    "96M-17": {
      verified: true, sourcePage: 5,
      stem: "球帽有黑、灰、紅、藍四色，球衣有白、綠、藍三色，球鞋有黑、白、灰三色。紅帽不配灰鞋，白衣必配藍帽，求最多款式數。",
      solution: [String.raw`白衣只能配藍帽，鞋色任選，共 \(1\cdot1\cdot3=3\) 款。綠、藍兩種球衣原有
      \[
      2\cdot4\cdot3=24
      \]
      款，但每種衣色各排除「紅帽＋灰鞋」1 款，共排除 2 款。因此總數 \(3+24-2=25\)。`]
    },
    "96M-18": {
      verified: true, sourcePage: 6,
      stem: String.raw`摸到編號 k 的球時，甲案報酬為 k，乙案報酬為 \(11-k\)。已知甲案期望值為 \(67/14\)，求乙案期望值。`,
      solution: [String.raw`對每一個結果，兩案報酬和恆為 11，因此期望值也相加為 11：
      \[
      E_{\text{乙}}=11-\frac{67}{14}
      =\frac{154-67}{14}
      =\frac{87}{14}。
      \]`]
    },
    "96M-19": {
      verified: true, sourcePage: 6,
      stem: String.raw`拋物線頂點 \(V=(0,3)\)、焦點 \(F=(0,6)\)。點 \(P(a,b)\) 在拋物線上，\(Q=(a,0)\)，且 \(\angle FPQ=60^\circ\)。求 b。`,
      solution: [String.raw`準線為 \(y=0\)，所以由拋物線定義 \(PF=PQ=b\)。三角形 FPQ 是等腰三角形，頂角 \(\angle FPQ=60^\circ\)，故其餘兩角也都是 \(60^\circ\)，為正三角形。`, String.raw`因此 \(PQ=FQ\)。又
      \[
      FQ^2=a^2+36,\qquad a^2=12(b-3)
      \]
      （拋物線方程 \(x^2=12(y-3)\)）。所以
      \[
      b^2=12(b-3)+36=12b，
      \]
      取正值得 \(b=12\)。`]
    },
    "96M-20": {
      verified: true, sourcePage: 6,
      stem: String.raw`三角形 ABC 中，M 為 BC 中點，\(AB=3、AC=5、\angle BAC=120^\circ\)。求 \(\tan\angle BAM\)。`,
      solution: [String.raw`取 A 為原點、AB 沿 x 軸，則
      \[
      B=(3,0),\qquad
      C=(5\cos120^\circ,5\sin120^\circ)
      =\left(-\frac52,\frac{5\sqrt3}{2}\right)。
      \]
      中點
      \[
      M=\left(\frac14,\frac{5\sqrt3}{4}\right)。
      \]
      因 AB 為 x 軸方向，
      \[
      \tan\angle BAM=\frac{5\sqrt3/4}{1/4}=5\sqrt3。
      \]`]
    }
  });
})();

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

