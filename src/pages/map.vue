<script setup></script>

<template>
 <main>
  <div class="marquee">
    <h1>怪奇遊樂園歡慶5周年!!!</h1>
  </div>
  <nav class="park">
    <title-big1 id="title1">園區地圖</title-big1>
    <!-- <title-big-yellow class="title" /> -->
    <img id="map" src="../assets/img/MAP.png" alt="">
    <ul>
      <li><h2>設施</h2></li>
      <li><h2>飲食</h2></li>
      <li><h2>醫療站</h2></li>
    </ul>
  </nav>
  <div class="realtime">
    <title-big2>園區動態</title-big2>
    <ul>
      <li>
        <h1>現在氣候</h1>
        <h2>現在溫度</h2>
      </li>
      <li>
        <h1>園內人數</h1>
        <h2>現在冒險者有</h2>
      </li>
      <li>
        <h1>附設車位</h1>
        <h2>小客車尚有</h2>
      </li>
    </ul>
  
  </div>
 </main>
</template>

<style scoped lang="scss">
/* @media (min-width: 1024px){} */
main{
  padding-top: 50px;
}
.marquee{
  height: 80px;
  background-color: $maincolor2;
  h1{
    font-size: 60px;
    line-height: 70px;
    color: #5590D6;
  }
}

.park{
  width: $workspace;
  height: 800px;
  margin-top: 80px;
  position: relative;
  #title1{
    position: absolute;
    left: -400px;
  }
  #map{
    position: absolute;
    top: 100px;
    max-width: 100%;
    filter: drop-shadow(0 0 4px #000);
    // background-color: #b11010;
  }
}


</style>
