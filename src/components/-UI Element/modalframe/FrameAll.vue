
<script>
export default {
  name: 'FrameAll',
  // component options here
}
</script>

<template>
  <div class="frame">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.frame {
  width: 350px;
  height: 450px;
  background-repeat: no-repeat;
  background-size: contain;

  &.frame-blue {
    background-image: url(@/assets/svg/SvgFrameBlue.svg);
  }

  &.frame-pink {
    background-image: url(@/assets/svg/SvgFramePink.svg);
  }

  &.frame-yellow {
    background-image: url(@/assets/svg/SvgFrameYellow.svg);
  }

  &.frame-green {
    background-image: url(@/assets/svg/SvgFrameGreen.svg);
  }
}
</style>