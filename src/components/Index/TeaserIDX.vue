<script setup></script>
<template>
  <main>
    <div>
      <p>
        從前從前，在一個充滿魔法與奇幻的世界中，住著一個年輕的冒險家，名叫艾莉。艾莉是一個勇敢的少女，一直夢想著能有一個可愛的寵物陪伴自己的旅途。
        有一天，艾莉在森林裡走著，突然聽到一陣奇怪的聲音。她跟著聲音來到一個草叢前，發現一顆巨大的蛋。這個蛋看起來非常特別，有著各種奇怪的圖案和紋路，這讓艾莉的心跳加速。艾莉蹲下來看了看，決定和它一起旅行。
      </p>
      <p>
        在旅途中，那顆蛋也漸漸孵化出一隻新的怪獸，艾莉發現這個小怪獸非常聰明，能夠幫助自己解決許多問題。在艾莉的旅程中，她遇到了許多困難和挑戰，但在可愛怪獸的陪伴下，她勇往直前，不斷獲得成長和進步。
        最後，艾莉成為了一位優秀的冒險家，與她的怪獸一起度過了許多美好的時光。
      </p>
    </div>
  </main>
</template>
<style lang="scss" scoped>
$pWidth: 340px;

$bookFontSize: 20px;
main {
  div {
    background-image: url(@/assets/img/Book_Index.jpg);
    background-size: cover;
    width: calc(1644px * 0.6);
    height: calc(1183px * 0.6);
    margin: 0 auto;
    display: flex;
    gap: 80px;
    justify-content: center;
    line-height: 2.2;

    padding-left: 10px;

    p:nth-child(1) {
      padding-top: 100px;
      width: $pWidth;
      font-size: $bookFontSize;
    }
    p:nth-child(2) {
      padding-top: 100px;
      width: $pWidth;
      font-size: $bookFontSize;
    }
  }
}
</style>
