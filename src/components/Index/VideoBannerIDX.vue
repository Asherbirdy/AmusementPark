<script setup></script>
<template>
  <div class="wrapper">
    <video autoplay loop controls>
      <source src="../../assets/movie/主題影片.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: $workspace;
  margin: 0 auto;
  background-color: antiquewhite;
  margin-top: 80px;
  video {
    width: 100%;
    height: auto;
  }
}
</style>
