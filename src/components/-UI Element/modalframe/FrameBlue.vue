
<script>
export default {
  name: 'MyComponent',
  // component options here
}
</script>

<template>
  <div class="blue">
    <slot></slot>
  </div>
  <!-- <SvgFrameBlue class="blue" /> -->
</template>
<style lang="scss" scoped>
.blue {
  background-image: url(@/assets/svg/SvgFrameBlue.svg);
  width: 250px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>