<script setup></script>

<template>

  <main>
    <monster-blue/>
    <div id="slogan">
      <h1>現在讓我們來創造<br>屬於自己的小怪獸吧!</h1>  
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
          <div class="content content1" >
            <h3>身體</h3><br>
            <h3>兩側</h3>
          </div>
          <div class="content content2" >123</div>
          <div class="content content3" ></div>
          <div class="content content4" >
            <h3>自訂1</h3><br>
            <h3>自訂2</h3>
          </div>
        </li>
        <!-- <div id="ColorPicker">
          <ColorPicker />
        </div> -->
      </ul>
    </nav>
    <div>""</div>
  </main>

</template>

<style scoped lang="scss">
#slogan{
  margin: 30px auto;
  padding: 40px;
  width: 40%;
  background-color: $maincolor2;
  text-align: center;
  border-radius: 2rem;

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
.select-main .content1 {
  width: 100%;
  height: 100%;
  background-color: $maincolor1;
}
.select-main .content2 {
  width: 100%;
  height: 100%;
  background-color: #26fd43;
}
</style>