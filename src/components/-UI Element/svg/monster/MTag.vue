<template>
    <div class="tag">
        <h1 :style="{ color: internalTitleColor }"><slot>預設文字</slot></h1>
        <monster-tag :style="{ color: internalSvgColor }" class="svg" />
    </div>
</template>
<script>
  export default {
    props: {
      titleColor: {
        type: String,
        default: '#FFF',
      },
      svgColor: {
        type: String,
        default: '#5b5b',
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
  .tag {
    width: 300;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    h1 {
      position: absolute;
      font-size: 40px;
      color: null;
    }
    .svg {
      color: null;
    }
  }
  </style>