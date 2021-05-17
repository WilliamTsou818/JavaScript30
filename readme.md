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





