<template>
  <main>
    <h2 :style="{ color: internalTitleColor }"><slot>關於我們</slot></h2>
    <title-b-g :style="{ color: internalSvgColor }" class="svg" />
  </main>
</template>
<script>
export default {
  props: {
    titleColor: {
      type: String,
      default: '#CE5B5B',
    },
    svgColor: {
      type: String,
      default: '#FFE9DE',
    },
  },
  data() {
    return {
      internalTitleColor: this.titleColor,
      internalSvgColor: this.svgColor,
    };
  },
};
</script>
<style lang="scss" scoped>
main {
  width: $workspace;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h2 {
    position: absolute;
    font-size: 50px;
    color: null;
  }
  .svg {
    color: null;
  }
}
</style>