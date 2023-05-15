<template>
  <QAmonster :style="{ color: internalSvgColor }" class="svg" />
</template>
<script>
export default {
  props: {},
  data() {
    return {};
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
  .svg {
    color: null;
  }
  slot {
    width: 100%;
    height: 100%;
  }
  position: fixed;
  bottom: 35px;
  right: 16px;
  z-index: 99999;
  pointer-events: none;
  width: 80px;
}
</style>
