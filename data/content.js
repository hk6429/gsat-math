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

