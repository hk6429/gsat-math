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

