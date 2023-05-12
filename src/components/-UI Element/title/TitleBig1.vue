<template>
    <nav>
        <div>
            <h1 :style="{ color: internalTitleColor }"><slot>預設大標題</slot>
                <!-- <title-big-yellow :style="{ color: internalSvgColor }" class="svg" /> -->
                <!-- <path width="" d="M333.663 421.712C245.415 449.316 -99.1359 252.34 57.8044 229.334C214.745 206.328 9.23151 102.213 332.98 142.732C656.728 183.252 421.911 394.107 333.663 421.712Z" stroke="#D1D0FF" stroke-width="7" stroke-dasharray="30 30"/> -->
                <title-big-yellow width="400" height="280" class="svg"/>
                <!-- <title-b-g :style="{ color: internalSvgColor }" class="svg" /> -->
            </h1>
        </div>
    </nav>
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
    default: '#FFF5C3',
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
  nav {
    margin: 0 auto;
    width: $workspace;
    line-height: 1.5;
    font-size: 16px;
    font-family:$font-family;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    div{
        // width: 400px;
        height: 40px;
        margin: 80px auto;
        position: relative;

        h1 {
            text-align: center;
            font-size: 40px;
            // filter: drop-shadow(0 0 2px #90420A);

            .svg {
                position: absolute;
                top: -130px;
                left: -150px;
                z-index: -1;
            }
        }  
    }

  }
</style>