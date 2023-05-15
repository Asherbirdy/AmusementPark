
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
  width: 250px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>