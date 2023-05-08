<template>
  <div class="CartStep">
    <main>
      <h2 :style="{ color: internalTitleColor }"><slot>2</slot></h2>
      <monsterWhite :style="{ color: internalSvgColor }" class="svg" />
    </main>
  </div>
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

  slot {
    width: 100%;
    height: 100%;
  }
}
</style>
