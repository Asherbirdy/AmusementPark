<template>
    <div class="tourtitle">
      <h2 :style="{ color: internalTitleColor }"><slot>關於我們</slot></h2>
      <SvgTourTitle :style="{ color: internalSvgColor, width:internalSvgWidth }" class="svg" />
    </div>
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
        default: '#FFF7A6',
      },
      svgWidth: {
        type:String,
        default:'310px',
      }
    },
    data() {
      return {
        internalTitleColor: this.titleColor,
        internalSvgColor: this.svgColor,
        internalSvgWidth: this.svgWidth,
      };
    },
  };
  </script>
  <style lang="scss" scoped>
  .tourtitle {
    // width: $workspace;
    // margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    h2 {
      width: 60%;
      position: absolute;
      font-size: 24px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  </style>