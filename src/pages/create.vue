<script setup></script>

<template>
<div class="bg">
  <svg-egg id="svg-egg"/>
  <svg-palette width="500" height="500" id="svg-palette"/>
  <svg-brush id="svg-brush"/>
</div>
  <main>
    <div class="tips">
      <monster-divo id="monster-divo"/>
      <div id="slogan">
        <h1>現在讓我們來創造<br>屬於自己的小怪獸吧!</h1>  
      </div>
    </div>


  <monster-maker/>
  </main>

</template>

<style scoped lang="scss">
.tips{
  margin-right: 200px;
  position: relative;
  pointer-events: none;
  filter: drop-shadow(0 0 4px #b5b5b5);


    #monster-divo{
      width: 30%;
      position: absolute;
      top: -190px;
      right: 60px;
      rotate: -20deg;
    }

    #slogan{
      margin: 30px auto;
      padding: 40px;
      width: 40%;
      background-color: $maincolor2;
      text-align: center;
      border-radius: 2rem;
      border: 5px dashed #5590D6;
    }
}
.bg{
  width: 90vw;
  // height: 90vw;
  // overflow: hidden;
  // margin-right: 200px;
  position: relative;
  pointer-events: none;
  z-index: -3;
  
    #svg-palette{
      width: 20%;
      position: absolute;
      z-index: -3;
      top: 100px;
      right: 50px;
      rotate: 25deg;
      opacity: .4;
    }
    #svg-brush{
      width: 30%;
      position: absolute;
      z-index: -3;
      top: 800px;
      right: -140px;
      rotate: -5deg;
      opacity: .2;
    }
    #svg-egg{
      width: 60%;
      position: absolute;
      z-index: -3;
      top: 700px;
      left: -300px;
      rotate: -15deg;
      opacity: .2;
    }
}


</style>