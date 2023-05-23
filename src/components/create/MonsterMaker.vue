<script setup></script>

<template>
  <nav>
    <section id="monster-view">
      <div id="view-window"></div>
      <div class="set">
        <Button>
          <h2>復原</h2>
        </Button>
        <Button>
          <h2>隨機</h2>
        </Button>
        <Button>
          <h2>儲存</h2>
        </Button>
      </div>
    </section>

    <ul id="monster-select">
      <input type="radio" name="panel-radio" id="radio1" class="panel-control" checked>
      <input type="radio" name="panel-radio" id="radio2" class="panel-control">
      <input type="radio" name="panel-radio" id="radio3" class="panel-control">
      <input type="radio" name="panel-radio" id="radio4" class="panel-control">

      <li class="select-label">
        <label for="radio1" class="active">
          <h2>身形</h2>
        </label>
        <label for="radio2">
          <h2>眼睛</h2>
        </label>
        <label for="radio3">
          <h2>嘴巴</h2>
        </label>
        <label for="radio4">
          <h2>配件</h2>
        </label>
      </li>

      <li class="select-main">
        <ul class="content content1">
          <h2>樣式
          </h2>
          <li class="type1">
            <ol>
              <body1 />
            </ol>
            <ol>
              <body2 />
            </ol>
            <ol>
              <body3 />
            </ol>
            <ol>
              <body4 />
            </ol>
            <ol>
              <body5 />
            </ol>
          </li>
          <!-- <h2>兩側</h2>
          <li class="type1">
            <ol></ol>
            <ol></ol>
            <ol></ol>
          </li><br> -->
          <span><img src="../../assets/img/colorPicker.png" alt=""></span>
          <span><img src="../../assets/img/colorPicker1.png" alt=""></span>
        </ul>
        <ul class="content content2">
          <h2 class="type">樣式</h2>
          <li class="type2">
            <ol>
              <e1 />
            </ol>
            <ol>
              <e2 />
            </ol>
            <ol>
              <e3 />
            </ol>
            <div class="space"></div>
            <ol>
              <e4 />
            </ol>
            <ol>
              <e5 />
            </ol>
            <ol>
              <e6 />
            </ol>
          </li><br>
          <!-- <span><img src="../../assets/img/colorPicker.png" alt=""></span>
          <span><img src="../../assets/img/colorPicker1.png" alt=""></span> -->
        </ul>
        <ul class="content content3">
          <h2 class="type">樣式</h2>
          <li class="type2">
            <ol>
              <m1 />
            </ol>
            <ol>
              <m2 />
            </ol>
            <ol>
              <m3 />
            </ol>
            <div class="space"></div>
            <ol>
              <m4 />
            </ol>
            <ol>
              <m5 />
            </ol>
            <ol>
              <m6 />
            </ol>
          </li><br>
          <!-- <span><img src="../../assets/img/colorPicker.png" alt=""></span>
          <span><img src="../../assets/img/colorPicker1.png" alt=""></span> -->
        </ul>
        <ul class="content content4">
          <h2 class="typee">樣式</h2>
          <li class="type1 type4">
            <ol>
              <t1 />
            </ol>
            <ol>
              <t2 />
            </ol>
            <ol>
              <t3 />
            </ol>
          </li>
          <li class="type1 type4">
            <ol>
              <t4 />
            </ol>
            <ol>
              <t5 />
            </ol>
            <ol>
              <t6 />
            </ol>
          </li><br>
          <!-- <span><img src="../../assets/img/colorPicker.png" alt=""></span>
          <span><img src="../../assets/img/colorPicker1.png" alt=""></span> -->
        </ul>
      </li>
      <!-- <div id="ColorPicker">
          <ColorPicker />
        </div> -->
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  margin: 100px auto;
  filter: drop-shadow(0 0 4px #b5b5b5);

  #monster-view {
    width: 500px;
    height: 600px;

    .set {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }

    button {
      width: 150px;
      height: 60px;
    }

    #view-window {
      width: 500px;
      height: 500px;
      background: #FFFDF8;
      border-radius: 2rem;
      border: 5px solid $textcolor5;
      box-sizing: border-box;
    }
  }

  #monster-select {
    width: 640px;
    height: 600px;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 1rem 1rem;
    overflow: hidden;

    .select-label {
      display: flex;
      width: 100%;
      height: 70px;
      justify-content: space-between;

      label {
        flex-grow: 4;
        width: 100px;
        background-color: $maincolor1;
        text-align: center;
        color: #FFF;
        border: 1px solid $textcolor5;
        cursor: pointer;
        border-radius: .5rem .5rem 0 0;

        h2 {
          line-height: 70px;
          color: $textcolor5;
        }

      }
    }

    .select-main .typee {
      margin-top: 50px;
    }

    .select-main {
      width: 100%;
      height: 100%;
      background-color: $maincolor1;

      h2 {
        margin: 100px 0 0 10px;
        line-height: 1;
        color: $textcolor3;
      }

      .type1 {
        margin: 30px auto 80px;
        // width: 600px;
        display: flex;
        justify-content: space-around;
      }

      .type2 {
        margin: 70px auto 0px;
        width: 600px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;

        .space {
          width: 550px;
          height: 40px;
        }
      }

      ol {
        margin-right: 5px;
      }

      span {
        display: flex;
        justify-content: center;
        margin: 20px auto;
        width: 95%;
        height: 100%;
        object-fit: cover;

      }

      span img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    }
  }
}

.select-main.type4 {
  display: flex;
  justify-content: space-around;
  margin: 30px auto -30px;
}

input {
  position: absolute;
  opacity: 0;
}

.content {
  display: none;
}

#radio1:checked~.select-label [for="radio1"],
#radio2:checked~.select-label [for="radio2"],
#radio3:checked~.select-label [for="radio3"],

#radio4:checked~.select-label [for="radio4"] {
  background-color: $textcolor5;

  h2 {
    color: $maincolor1;
  }
}

#radio1:checked~.select-main .content1,
#radio2:checked~.select-main .content2,
#radio3:checked~.select-main .content3,
#radio4:checked~.select-main .content4 {
  display: block
}
</style>