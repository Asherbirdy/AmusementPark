<script setup></script>
<template>
  <div class="wrapper">
    <video autoplay loop muted >
      <source src="../../assets/mov/banner.mp4" type="video/mp4" />
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
    height: 550px;
  }
}
</style>
