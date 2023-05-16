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


    <nav>
      <section id="monster-view">
        <div id="view-window"></div>
        <div class="set">
          <btn><h2>復原</h2></btn>
          <btn><h2>隨機</h2></btn>
          <btn><h2>儲存</h2></btn>  
        </div>
      </section>
      
      <ul id="monster-select">
        <input type="radio" name="panel-radio" id="radio1" class="panel-control" checked>
        <input type="radio" name="panel-radio" id="radio2" class="panel-control">
        <input type="radio" name="panel-radio" id="radio3" class="panel-control">
        <input type="radio" name="panel-radio" id="radio4" class="panel-control">

        <li class="select-label">
          <label for="radio1" class="active"><h2>身形</h2></label>
          <label for="radio2"><h2>眼睛</h2></label>
          <label for="radio3"><h2>嘴巴</h2></label>
          <label for="radio4"><h2>配件</h2></label>
        </li>

        <li class="select-main">
          <ul class="content content1" >
            <h2>身體</h2>
            <li class="type1">
              <ol></ol>
              <ol></ol>
              <ol></ol>
            </li>
            <h2>兩側</h2>
            <li class="type1"> 
              <ol></ol>
              <ol></ol>
              <ol></ol>
            </li><br>
            <span><input type="color" class="colorpicker">色相</span><br>
            <span><input type="range" name="points" min="0" max="100">明度</span>
          </ul>
          <ul class="content content2" >
            <li class="type2">
              <ol></ol>
              <ol></ol>
              <ol></ol>
              <div class="space"></div>
              <ol></ol>
              <ol></ol>
              <ol></ol>
            </li><br>
            <span><input type="color" class="colorpicker">色相</span><br>
            <span><input type="range" name="points" min="1" max="10">明度</span>
          </ul>
          <ul class="content content3" >
            <li class="type2">
              <ol></ol>
              <ol></ol>
              <ol></ol>
              <div class="space"></div>
              <ol></ol>
              <ol></ol>
              <ol></ol>
            </li><br>
            <span><input type="color" class="colorpicker">色相</span><br>
            <span><input type="range" name="points" min="1" max="10">明度</span>
          </ul>
          <ul class="content content4" >
            <h2>自訂1</h2>
            <li class="type1">
              <ol></ol>
              <ol></ol>
              <ol></ol>
            </li>
            <h2>自訂2</h2>
            <li class="type1"> 
              <ol></ol>
              <ol></ol>
              <ol></ol>
            </li><br>
            <span><input type="color" class="colorpicker">色相</span><br>
            <span><input type="range" name="points" min="1" max="10">明度</span>
          </ul>
        </li>
        <!-- <div id="ColorPicker">
          <ColorPicker />
        </div> -->
      </ul>
    </nav>
  </main>

</template>

<style scoped lang="scss">
.tips{
  margin-right: 200px;
  position: relative;
  pointer-events: none;
  
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
      top: 500px;
      right: -160px;
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

nav{
  display: flex;
  justify-content: space-between;
  margin: 100px auto;
}

nav::after{
  content: url(svg-sun.vue);
}

#monster-view{
  width: 500px;
  height: 600px;
  // background: #949494;
}

#view-window{
  width: 500px;
  height: 500px;
  background: #ffffff;
  border-radius: 2rem;
  border: 5px dashed $textcolor1;
  box-sizing: border-box;
}

.set{

  display: flex;
  justify-content: space-between;
  margin-top: 40px;

}

#monster-view button{
  width: 150px;
  height: 60px;
}

#monster-select{
  width: 640px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius:  0 0 1rem 1rem;
  overflow: hidden;

}

#monster-select input{
  position:absolute;
  opacity:0;
}

.select-label{
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  
}

#monster-select label{
  flex-grow: 4;
  width: 100px;
  background-color: $textcolor1;
  text-align: center;
  color: #FFF;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius:  .5rem .5rem 0 0;
}
#monster-select label h2{
  line-height: 50px;
}

.content{display:none;}

#radio1:checked ~ .select-label [for="radio1"],
#radio2:checked ~ .select-label [for="radio2"],
#radio3:checked ~ .select-label [for="radio3"],
#radio4:checked ~ .select-label [for="radio4"]{ background-color: $textcolor2;}
    
#radio1:checked ~ .select-main .content1,
#radio2:checked ~ .select-main .content2,
#radio3:checked ~ .select-main .content3,
#radio4:checked ~ .select-main .content4{display:block}

.select-main{
  width: 100%;
  height: 100%;
  background-color: $maincolor1;
}
.select-main h2{
  margin-top: 30px;
  text-align: center;
  line-height: 1;
}
 
.select-main .type1{
  margin: 10px auto 0px ;
  width: 600px;
  display: flex;
  justify-content: space-around;
}
.select-main .type2{
  margin: 70px auto 0px ;
  width: 600px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.select-main ol{
  width: 150px;
  height: 150px;
  background-color: #fff;
}

.select-main span{
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 550px;
  height: 10px;
  background-color: #b5b5b5;
}

.space{
  width: 550px;
  height: 40px;
}

</style>