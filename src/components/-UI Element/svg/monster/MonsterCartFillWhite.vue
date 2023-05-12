<template>
  <h2 :style="{ color: internalTitleColor }"><slot></slot></h2>
  <monsterWhite :style="{ color: internalSvgColor }" class="svg" />
</template>
<script>
export default {
  props: {
    titleColor: {
      type: String,
      default: '#163767',
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
.CartStep {
  width: $workspace;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h2 {
    position: absolute;
    line-height: 155px;
    font-size: 50px;
    color: #163767;
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
