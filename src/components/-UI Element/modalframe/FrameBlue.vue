
<script>
export default {
  name: 'MyComponent',
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
  background-image: url(@/assets/svg/SvgFrameBlue.svg);
  width: 350px;
  height: 450px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>