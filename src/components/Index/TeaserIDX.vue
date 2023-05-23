<script setup></script>
<template>
  <main>
    <div>
      <h3>
        　　從前從前，在一個充滿魔法的奇幻世界中，住著一個年輕、勇敢的冒險家———艾莉，一直夢想著能有一個一起冒險的夥伴。<br><br>
        有一天，艾莉在森林裡走著，突然聽到一個奇怪的聲音。她跟著聲音找到一個藏寶箱，發現裡面放了一顆看起來非常特別的蛋。這個蛋，有著像魔法般的奇妙紋路，於是艾莉決定帶著牠一起旅行。
      </h3>
      <h3>
        在旅途中，蛋孵化成一隻奇妙的生物，調查下知道了是一種叫"怪獸"的物種。艾莉發現她的這個怪獸小夥伴非常聰明，能夠幫助自己解決許多問題。在後來的旅程中，她遭遇了許多困難和挑戰，但在搭檔的陪伴下，她勇往直前，不斷獲得成長和進步。
        最後，艾莉成為了一位優秀的冒險家，與她的怪獸一起度過了許多美好的時光。
      </h3>
      <div id="svg-book">
      <svg-book/>        
      </div>

    </div>
  </main>
</template>
<style lang="scss" scoped>
$pWidth: 340px;

// $bookFontSize: 20px;
main {
  div {
    // background-image: url(@/assets/img/Book_Index.jpg);
    position: relative;
    background-size: cover;
    width: 1115px;
    // height: calc(1183px * 0.6);
    margin: 0 auto;
    display: flex;
    gap: 80px;
    justify-content: center;
    line-height: 2.2;

    padding-left: 10px;
    margin-bottom: 400px;
    

    h3{
      padding-top: 80px;
      line-height: 2;
      width: 380px;
      // font-family: nanifont;
      // font-size: 22px;
    }
    // h3:nth-child(1) {
    //   padding-top: 100px;
    //   width: $pWidth;
    //   font-size: $bookFontSize;
    // }
    // h3:nth-child(2) {
    //   padding-top: 100px;
    //   width: $pWidth;
    //   font-size: $bookFontSize;
    // }
    #svg-book{
      display: flex;
      position: absolute;
      z-index: -1;
      top: -350px;
    }
  }
}
</style>
