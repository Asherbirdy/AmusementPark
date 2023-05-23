<script setup></script>
<template>
  <div class="wrapper">
    <video autoplay loop muted>
      <!-- <source src="../../assets/mov/banner.mp4" type="video/mp4"/> -->
      <source src="../../assets/mov/banner2.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  // width: $workspace;
  // height: 650px;
  margin: 0 auto;
  // background-color: antiquewhite;
  // background-color: $maincolor1;
  margin-top: 40px;
  // position: relative;
  video {
    // position: absolute;
    width: 100%;
  }
}
</style>
