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

