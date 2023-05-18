<script setup></script>

<template>

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

</template>

<style scoped lang="scss">
nav{
  display: flex;
  justify-content: space-between;
  margin: 100px auto;
  filter: drop-shadow(0 0 4px #b5b5b5);
    
  #monster-view{
    width: 500px;
    height: 600px;
    .set{
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }
    button{
      width: 150px;
      height: 60px;
    }   

    #view-window{
      width: 500px;
      height: 500px;
      background: #ffffff;
      border-radius: 2rem;
      border: 5px dashed $textcolor1;
      box-sizing: border-box;
    } 
  }

  #monster-select{
    width: 640px;
    height: 600px;
    display: flex;
    flex-direction: column;
    border-radius:  0 0 1rem 1rem;
    overflow: hidden;
    .select-label{
      display: flex;
      width: 100%;
      height: 60px;
      justify-content: space-between;

      label{
        flex-grow: 4;
        width: 100px;
        background-color: $textcolor1;
        text-align: center;
        color: #FFF;
        border: 1px solid #fff;
        cursor: pointer;
        border-radius:  .5rem .5rem 0 0;

        h2{
          line-height: 50px;
        }
      }
    }
    .select-main{
      width: 100%;
      height: 100%;
      background-color: $maincolor1;
      h2{
        margin-top: 30px;
        text-align: center;
        line-height: 1;
      }
      .type1{
        margin: 10px auto 0px ;
        width: 600px;
        display: flex;
        justify-content: space-around;
      }
      .type2{
        margin: 70px auto 0px ;
        width: 600px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .space{
          width: 550px;
          height: 40px;
        }
      }
      ol{
        width: 150px;
        height: 150px;
        background-color: #fff;
      }
      span{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 550px;
        height: 10px;
        background-color: #b5b5b5;
      }

    }
  }
}
input{
  position:absolute;
  opacity:0;
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

</style>