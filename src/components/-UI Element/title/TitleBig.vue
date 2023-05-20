<template>
    <main>
        <div>
            <h1 :style="{ color: internalTitleColor }"><slot>預設大標題</slot>
                <!-- <title-big-yellow :style="{ color: internalSvgColor }" class="svg" /> -->
                <path d="M333.663 421.712C245.415 449.316 -99.1359 252.34 57.8044 229.334C214.745 206.328 9.23151 102.213 332.98 142.732C656.728 183.252 421.911 394.107 333.663 421.712Z" stroke="#D1D0FF" stroke-width="7" stroke-dasharray="30 30"/>

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