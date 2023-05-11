<script setup></script>

<template>
 <main>
  <div class="marquee">
    <h1>怪奇遊樂園歡慶5周年!!!</h1>
  </div>
  <nav class="park">
    <title-big id="title1" title-color="#FF7B51" svg-color="#F9F3E4">園區地圖</title-big>
    <!-- <title-big-yellow class="title" /> -->
    <img id="map" src="../assets/img/MAP.png" alt="">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </nav>

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
  margin-top: 80px;
  #title1{
    left: -500px;
  }
  #map{
    max-width: 100%;
    filter: drop-shadow(0 0 4px #000);
    // background-color: #b11010;
  }
}
</style>
