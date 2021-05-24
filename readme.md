![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30

這裡會記錄 JS30 每日挑戰的心得與筆記，以備未來需要的時候可以參閱，也確認自己是否有好好消化學習到的知識技術，並用自己的方式重述。

課程網站可參考 [https://JavaScript30.com](https://JavaScript30.com)

## Day 1 : JavaScript Drum Kit

1. querySelector()
   
   除了使用CSS選擇器的語法去節選class name之外，也可以用下列形式去擷取dataset 形式的 html element。

   <code>querySelector(‘div[data-key=”${event.keyCode}”]’)</code>

   這一行是藉由監聽 keyDown 的觸發事件後，將觸發事件的按鍵keyCode作
   為變數代入 data-key 的值，即可節選到包含該特定keyCode 的 html 元
   素。

2. Transitionend 事件
   
   除了常見的 keydown, click, change和input之外，transitionend是我第一次見到的監聽事件，可以用來監聽css特效，並在結束的當下觸發callback function。

3. Audio 標籤

   Audio是html 有關聲音的標籤，以往撰寫的網頁大多沒有聲音的元素，所以也是第一次看到，使用到的語法有下列：

   * play()：播放音檔
   * currentTime : 播放時間

## Day 2 : JS and CSS Clock

1. CSS transform
   
   transform 可賦予 html 元素旋轉、變形和平移等各式各樣的效果，今日的挑戰使用CSS 及 JS 實作一個時鐘，因此必須藉由 transform 旋轉作為指針的 html 元素。

   * transform: rotate() : 可以旋轉該元素，括號內輸入 (角度 + deg) 作為參數

   * transform-origin : 可以改變物件變化的起點，預設是物件的中心點，代入的參 
                        數可以是 px, 百分比或方位。如果輸入兩個參數，前者代表 X 軸，後者代表 Y 軸

2. transition-timing-function

   這個屬性可用於設定動畫變化的速度，除了 linear, ease-in 及 ease-out 等語法外，本次的 CSS 時鐘採用了二階貝茲曲線 (cubic-bezier) 的方式去設定變化速度，要代入的參數為 (x1 , y1, x2, y2) 四個數值，其中的 x1, x2 必須是介於 0 ~ 1 之間的數值。

   (事實上常見的 ease-in 等語法也是某個特定的 cubic-bezier 數值)

3. JS 特殊物件 Date
   
   * 當我們使用 new Date() 創建一個 Date 物件時，如果沒有代入任何參數，就會指
     向本地時間。
   
   * Date 物件也有許多內建方法，像是本次實作使用到的 getSeconds(), 
     getMinutes() 及 getHours() 等內建方法，能夠取得目前的本地時間單位，如果想取得標準時間，則要在 get 及 時間單位中間加上 UTC 。


## Day 3 :  CSS Variables

1. CSS Variables

   * 藉由 var() 呼叫變數，可代入 name , value 兩種參數，前者為必備。

     <code> var(--name, value) </code> 
   
   * 變數的命名前方須加上 --

   * 通常會在 :root 命名變數，也可以在特定選擇器命名，在該選擇器呼叫變數時則會繼承
     CSS 設定

2. NodeList vs. Array

   * NodeList != Array ， 兩者的原型鏈並不相同

   * NodeList 包含部分 Array 的內建方法如 forEach ， 也可以用 index 值查詢特定
     資料

   * Array 可以新增、刪除陣列資料，NodeList 則無法。

   * 使用 querySelectorAll() 回傳的是 NodeList

3. Change vs. Input

   * 在監聽事件中，change 會在偵測到元素的數值改變後，執行 callback function

   * 在監聽事件中， input 會在偵測到有數值傳入即執行 callback function

   * 如果想要在 slider 滑動時即時顯示畫面變化的效果，可以使用 input ， 或是像影片
     中同時使用 mousemove 與 change

   * 只有 change 的話，會在使用者停止滑動條與滑鼠點擊結束時，才會執行 callback 
     function，所以無法即時呈現畫面變化

## Day 4 :  Array Cardio Day 1

1. Array.from

   * 將可迭代物件或類陣列 (nodeList) 轉化為陣列

2. console.table

   * 可將物件或陣列以表格的形式印出

3. Array.sort([compareFunction(a, b)])

   * 會依據 compareFunction(a, b) 的回傳值去排序 a 和 b

   * 回傳值 > 0 會將 b 排在 a 前面；回傳值 < 0 會將 a 排在 b 前面

## Day 5 :  Flex Panel Gallery

1. documentElement.classList.toggle('className')

   * 可以偵測 html 元素是否已經有代入的 className 參數，如果有就去除，反之則加上

2. CSS 選擇器

   * className * : * 符號可以選擇所有的元素，通常會用於全域設定，也可以將它擺在某
                   HTML 個元素後方，它就會選取該元素的所有子元素。 

   * className > : > 符號被稱為「直屬選擇器」，它會選取該 HTML 元素的下一層子元
                   素，如果是子元素的子元素就不會被選取，也可以和 * 搭配，用 className > * 的方式選取所有直屬子元素。
   
3. Flex

   * Flex model 的屬性 flex 可以代入 1 ~ 3 個數值

   * flex 代入 3 個數值時，由左至右分別代表 flex-grow, flex shrink 及 
     flex-basis
   
   * flex-grow : 指定 flex model 剩餘的空間分配給各 flex items 的比例

   * flex-shrink : 指定 flex items 的收縮比例

   * flex-basis : 指定 flex items 在 flex model 中的初始大小

   * flex 屬性只代入一個數值時，如果是無單位的數字，則會是 flex-grow 的值，且 
     flex-shrink 預設為 1 ， flex-basis 預設為 0

## Day 6 : Type Ahead

1. Fetch()

   * Fetch 是非同步請求技術 AJAX 的一種，在括號內輸入 URL 即可發出 HTML request

   * 回傳的資料類型是 promise ， 可以用 .json() 去處理回傳的資料

   * 可以再括號後方串接 .then() ，繼續處理回傳的 promise ， .then() 本身回傳的也是 
     promise ， 目的是改善以往使用 callback 去處理非同步請求會導致 callback hell的問題，增加程式碼可讀性

2. new RegExp() 

   * 用於建立正規表達式的方法之一，括號內可以代兩個參數，分別是 Pattern 和 Flag

   * Pattern 表示要選取的範圍，也可以輸入變數

   * Flag 可以輸入 g (全域) 或 i (不分大小寫) 等設定，非必須

3. String.replace()

   * 可以將吻合的字串用其他內容代替，並且回傳新字串

   * 括號內輸入兩個參數，分別是選取字串的條件範圍，以及用於替代的內容

## Day 7 : Array Cardio Day 2

1. Array.some()

   * 迭代陣列去尋找是否有資料符合條件值，只要有一個符合就回傳 true ，反之回傳 false

2. Array.every()

   * 和前述的 Array.some() 類似，但必須要全部陣列的資料都符合才回傳 true

3. Array.find()

   * 會回傳第一個符合條件的元素

4. Array.findIndex()

   * 會回傳第一個符合條件的元素 index 值

## Day 8 : Fun with HTML5 Canvas

1. 定義 Canvas 畫布的範圍與形式

   * const canvas = document.querySelector('#draw') → 選取畫布範圍
   * const ctx = canvas.getContext('2d') → 將畫布設定為 2d 繪圖
   * canvas.width = window.innerWidth → 將寬度定義為瀏覽器視窗寬度
   * canvas.height = window.innerHeight → 將高度定義為瀏覽器視窗高度

2. 定義顏色、線條與狀態

   * ctx.stokeStyle → 線條顏色
   * ctx.lineJoin → 線條相交點樣式
   * ctx.lineCap → 線條結束點樣式
   * ctx.lineWidth → 線條寬度
   * let isDrawing = false → 繪圖狀態，false 為停止繪圖，true為正在繪圖

3. 繪圖狀態、線條位置的參數

   * ctx.beginPath() → 開始繪圖
   * ctx.moveTo(lastX, lastY) → 繪圖起始點
   * ctx.lineTo(event.offsetX, event.offsetY) → 繪圖終止點
   * ctx.stroke() → 以定義路徑繪製
   * [lastX, lastY] = [event.offsetX, event.offsetY] 
     → 更新起始點，否則線條會從最初設定的起始點連線至滑鼠游標的位置，而不是跟著滑鼠游標

## Day 9 : Dev Tools Domination

1. 跳出訊息

   * console.warn() : 可用於跳出警告，在括號內輸入警告訊息
   * console.error(): 可用於跳出錯誤，在括號內輸入錯誤訊息
   * console.info() : 可用於跳出通知，在括號內輸入通知訊息

2. 測試、Debug相關

   * console.assert('測試條件', '錯誤訊息')： 如果未能通過測試條件，則回傳錯誤訊息

   * console.count('a') : 計算傳入的參數共出現幾次

   * console.time('a') / console.timeEnd('a') : 計算 time ~ timeEnd 之間耗費的時
     間，可用於測試向伺服器或第三方API請求資料到回傳所耗費的時間

3. 整理訊息

   * console.group('a') / console.groupEnd('a') : 將 group ~ groupEnd 之間的訊息整
     理為一組

   * console.groupCollapsed('a') : 效果類似 group ， 差別在於預設為閉合的標籤，可避免
     一組訊息過長，不好找到特定的那一欄標籤

## Day 10 : Hold Shift to Check Multiple Checkboxes

今日的目標是實作出藉由按 shift 鍵一次選取多個 checkbox 的功能，類似 gmail 可以按 shift 一次選好幾個郵件的功能。

1. event.shiftKey 

   * 當監聽事件設置為 click 時， 事件就會出現 shiftKey 的選項來顯示是否有按 shift 鍵， 
     以布林值表示，可以用來當作是否按下 shift 鍵的判斷條件

2. 實作步驟概要

   1. 用 querySelectorAll() 選取所有的 checkbox 節點

   2. 替所有 checkbox 節點設置 click 事件監聽器，並代入要實現功能的函式

   3. 在函式內、外分別用 let 宣告 inBetween 和 lastChecked 兩個變數，前者用布林值表示
      是否在選取範圍內，後者則是儲存上一個被點選的 checkbox ，才能和現在點選的 checkbox 形成要選取的範圍
   
   4. 在函式最末端將 lastChecked 指定給目前點擊的 checkbox ，確保每一次點擊都會更新 
      lastChecked 的值
   
   5. 在 if 條件中用 event.shiftKey 和 this.checked 來判斷是否有按下 shift 鍵以及
      該 checkbox 是否已被勾選

   6. 在 if 判斷式當中使用 forEach 再次迭代所有 checkbox 節點，並且再用一層 if 判斷式
      去確認迭代的 checkbox 是否為目前點擊的對象，或是 lastChecked 的值，如果是就把 inBetween的值設為 true，下一次迭代到兩者中剩下的那一個值時，再把 inBetween 轉回 false，中間就會形成被選取的範圍了 (即 inBetween 值為 true 的所有 checkbox)
   
   7. 只要 inBetween 為 true 的 checkbox ，就替它的 checked 屬性加上 true 值來更改樣
      式


## Day 11 : Custom Video Player

   今天要藉由 JS 實作影片播放器的各項功能，包含播放暫停、調整音量速度、快轉和拉跩進度條等

1. 播放、暫停

   * video.play()  : 播放
   * video.pause() : 暫停

   * 只要藉由 video.paused 去判斷目前影片狀態，再分別去執行上述兩者即可

2. 調整音量速度

   * 透過 change, mousemove 去監聽音量速度條的變動
   * 透過 this 去綁定觸發事件的元素，並將值代入影片相對應的屬性即可

   <code>video[this.name] = this.value</code>

3. 快轉功能

   * 透過 click 監聽事件去取得快轉按鈕的秒數 (dataset-skip)
   * 將該值從字串轉化為數字後，加到目前影片時間的秒數即可
      
   ```
   const skip = this.dataset.skip
   video.currentTime += parseFloat(skip)
   ```

4. 進度條

   * 進度條的顯示效果是藉由 flex-basis 的數值依據影片時間不斷疊加，直到 100%

   ```
   const percent = (video.currentTime / video.duration) * 100
   progressBar.style.flexBasis = `${percent}%`
   ```

   * 如果想藉由點擊進度條來變動影片時間，則要取得點擊位置的 offsetX 座標並除以整個進
     度條的寬度，乘以影片總時長後，將結果代入影片的目前時間

   ```
   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
   video.currentTime = scrubTime
   ```

## Day 12 : Key Sequence Detection

   本次的挑戰是要實作在網頁中輸入特定密碼後，會產生特殊效果的功能，因此需要設置監聽器偵測使用者輸入的按鍵，然後比對其輸入的內容是否和密碼相符，相符的話即產生效果。

1. 監聽使用者輸入按鍵

```
window.addEventListener('keyup', (e) => {
   console.log(e.key)
})
```

   * keyup : 在按鍵放開的瞬間觸發
   * e.key : 觸發事件的按鍵值

2. 創建陣列儲存輸入的內容以及密碼

```
const pressed = []
const secretCode = 'anivia'
```

3. 將輸入按鍵放進 pressed 裡，並且維持與密碼相同的長度

```
pressed.push(e.key)
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
```

   * array.splice(start, deleteCount) : 
     1. start 表示起始位置，負數的話則從末端開始
     2. deleteCount 表示要刪除的數量，如果為負數則不刪除
   
   * -secretCode.length - 1 : 負號表示從末端開始，由於 - 1 不會刪除任何元素，所以 
                              -secretCode.length (-6) 的後方要再 - 1 
                     
   * pressed.length - secretCode.length : 由於 deleteCount 為負數時不會刪除，所以這
                                          樣的寫法可確保使用者輸入的內容超過密碼的長度時才開始刪除


4. 與密碼對比，相符的話則呼叫特殊效果

```
if (pressed.join('').includes(secretCode)) {
   console.log('DING DONG!)
   cornify_add()
}
```

## Day 13 : Slide in on Scroll

   本次實作的功能是滾動網頁卷軸時，網頁內容中的圖片會依據使用者的視窗位置，產生淡入的動畫效果。因此必須偵測目前的視窗位置和圖片的位置等數據，並搭配 if 來判斷何時該賦予圖片淡入的效果。

1. 圖片淡入位置

```
const slideInAt = (window.scrollY + window.innerHeight) 
   - slideImage.height / 2
```

   * window.scrollY : 視窗已經垂直滾動的像素值，以視窗頂部為基準
   * window.innerHeight : 瀏覽器視窗的高度
   * slideImage.height / 2 : 圖片高度的一半

   * 由此希望圖片淡入的位置是滑到大約圖片高度一半的時候，所以先加上視窗高度讓偵測的基準點
     變為視窗底部，再扣掉一半的圖片高度即可

2. 圖片底部和視窗最頂部的距離

```
const imageBottom = slideImage.offsetTop + slideImage.height
```

   * slideImage.offsetTop : 圖片頂部和視窗最頂部的距離

   * 再加上圖片本身的高度就等於圖片底部和視窗最頂部的距離

3. 判斷已達到圖片淡入位置及目前視窗頂部是否已滑過圖片的最底部

```
const isHalfShown = slideInAt > slideImage.offsetTop
const isNotScrolledPast = window.scrollY < imageBottom
```

   * slideInAt > slideImage.offsetTop : 只要圖片淡入位置大於圖片到視窗頂部的距離，即回
                                        傳 true (表示已經滑到顯示圖片內容的位置)

   * window.scrollY < imageBottom : 只要視窗頂部還沒滑過圖片底部的位置就回傳 true (表
                                    示圖片依然在目前的視窗顯示範圍內)

4. 代入 if 判斷式

```
if (isHalfShown && isNotScrolledPast) {
   slideImage.classList.add('active')
} else {
   slideImage.classList.remove('active')
}

```

## Day 14 : Object and Arrays: Reference vs Copy

本次要講解的是物件與陣列的複製，以及一些需要釐清才能避開的坑點

1. 陣列的複製

```
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']
const team = players
team[3] = 'Lux'

console.log(team, players) // 皆為 ['Wes', 'Sarah', 'Ryan', 'Lux']
```

   * 由於陣列與物件皆是 Call by reference，因此 team 儲存的是指向原本儲存 players 陣列
     的位址，並不是用另一個記憶體去儲存的新陣列。

   * 因此對 team 的修改，也會直接影響到原本的 players 陣列

```
const team2 = players.slice()

const team3 = [].concat(players)

const team4 = [...players]

const team5 = Array.from(players)
```

   * 以上四種方法都是會另外找一個記憶體位址儲存完整複製的新陣列，所以即使修改新陣列的內
     容，也不會對原本的 players 陣列值產生影響

   * .slice() 為輸入參數時會直接複製
   * [].concat() 則是先創建空陣列，再用 .concat() 連接 players 陣列
   * team4 則是使用到 ES6 的展開運算子
   * Array.from() 可依據輸入的參數創建新陣列

2. 物件的複製

```
const person = {
   name: 'Wes Bos',
   age: 80
};

const captain = person
captain.number = 99

console.log(person)
```

   * 如同陣列情形，因為物件也是 call by reference，所以原本的 person 物件也會跟著多一個
     屬性 number ，以及值 99。

```
const wes = {
   name: 'Wes',
   age: 100,
   social: {
      twitter: '@wesbos',
      facebook: 'wesbos.developer'
   }
}

const dev = Object.assign({}, wes)
dev.social.twitter = '@coolman'
console.log(dev.social, wes.social) // twitter: '@coolman', facebook: 'wesbos.developer'
```

   * 另一種方法是用 Object.assign() 去複製新物件，但這個方法有個缺陷是它看似完整複製了
     一個陣列，但只有第一層的屬性更改時不會影響到原本的物件，更下一層的其他屬性，依然會有call by reference 的現象，導致原本的物件一起更動

```
const dev2 = JSON.parse(JSON.stringify(wes))
```

   * 這個做法則可以避開上述的問題，是透過轉換 JSON 格式檔案的方式來達成
   * 先藉由 JSON.stringify() 將物件轉換成網路傳輸資料用的 JSON 格式字串
   * 再用 JSON.parse() 將該字串展開成 JS 物件，並且指定給新的變數，就等於是複製一個新物
     件，且不會影響到原本物件


## Day 15 : LocalStorage and Event Delegation

<br>

   今天要介紹的功能是 LocalStorage 和 Event Delegation

 ### 1. LocalStorage

 <br>

   * 是一種將資料儲存在瀏覽器端的方式
   * 限制大小為 5 MB
   * 儲存方式為 key-value pair ，且資料型別為字串

   ```
   const items = JSON.parse(localStorage.getItem('items')) || []

   function addItem(e) {
     e.preventDefault()
     const text = (this.querySelector('[name=item]')).value
     const item = {
       text,
       done: false
     }

     items.push(item)
     populateList(items, itemsList)
     localStorage.setItem('items', JSON.stringify(items))
     this.reset() 
   }

   addItems.addEventListener('submit', addItem)
   ``` 
   * JSON.parse() : 將從 localStorage 取得的資料展開成 JS 可以處理的物件或陣列

   * JSON.stringify() : 將物件、陣列轉換成字串存進 localStorage，如果直接存入的話，
                        localStorage 會使用 toString() 轉換，導致資料的內容跑掉

   * localStorage.getItem('key') : 取得 localStorage 上儲存的資料

   * localStorage.setItem('key', 'value') : 將資料存進 localStorage

   * this.reset() : 清空輸入資料的表單

   * e.preventDefault() : 取消 DOM 元素的預設效果，這邊是取消 submit 的網頁重新整理

 ### 2. Event Delegation

 <br>
   
   * 又稱作「事件委派」，由於 DOM 事件傳遞的冒泡與捕獲機制，在子元素觸發的事件也可以上傳
     至父元素觸發，因此將事件監聽器設置在父元素，藉此監聽子元素的事件觸發，即是所謂的事件委派。

   * 本次實作中，為了監聽每個列表元素是否有觸發點擊事件，因此直接在所有列表的父元素設立監
     聽器，不但可以接受到往後新增的列表元素觸發的事件，也可以避免原本使用 querySelectorAll() 抓取 DOM 節點的方式，不慎抓取到不想監聽的 DOM 節點

   ```
   function toggleDone(e) {
     if (!e.target.matches('input')) return
     const el = e.target
     const index = el.dataset.index
     items[index].done = !items[index].done
     localStorage.setItem('items', JSON.stringify(items))
     populateList(items, itemsList)
   }

   itemsList.addEventListener('click', toggleDone)
   ```

   * e.target.matches('') : 確認觸發事件的節點是否包含特定屬性，回傳布林值

   * 上述程式碼實際上要監聽的是每個 li 元素中的 input 元素，但監聽器統一設立在 ul 這一層
     即可，否則每新增一個 li 就要新增一次監聽器非常的繁瑣。

   




