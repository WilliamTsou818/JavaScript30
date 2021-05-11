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






