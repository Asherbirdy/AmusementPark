<template>
    <main>
        <div>
            <h1 :style="{ color: internalTitleColor }"><slot>預設大標題</slot>
                <title-b-g :style="{ color: internalSvgColor }" class="svg" />
            </h1>
        </div>
    </main>
</template>
<script>
  export default {
    props: {
    titleColor: {
    type: String,
    default: '#FF7B51',
    },
    svgColor: {
    type: String,
    default: '#F9F3E4',
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
    h1 {
      position: absolute;
      font-size: 40px;
      z-index: 3;
    
    .svg {
        position: absolute;
        top: -30px;
        left: -140px;
        z-index: -1;

      color: FFF5C3;}
    }
  }
</style>