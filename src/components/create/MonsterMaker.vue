<template>
  <nav>
    <section id="monster-view">
      <div id="view-window">
        <!--body切換-->
        <body1
          v-if="selectedBody === 'body1'"
          :class="{ 'bodyZoom-in': shouldZoomIn }"
          style="
            transform: scale(1.8);
            margin-left: 185px;
            margin-top: 180px;
            position: absolute;
          "
        ></body1>
        <body2
          v-if="selectedBody === 'body2'"
          :class="{ 'bodyZoom-in': shouldZoomIn }"
        ></body2>
        <body3
          v-if="selectedBody === 'body3'"
          :class="{ 'bodyZoom-in': shouldZoomIn }"
        ></body3>
        <body4
          v-if="selectedBody === 'body4'"
          :class="{ 'bodyZoom-in': shouldZoomIn }"
        ></body4>
        <body5
          v-if="selectedBody === 'body5'"
          :class="{ 'bodyZoom-in': shouldZoomIn }"
        ></body5>

        <!--wing切換-->
        <wing1
          v-if="selectedWing === 'wing1'"
          :class="{ 'wingZoom-in_w1': shouldZoomIn }"
        ></wing1>
        <wing2
          v-if="selectedWing === 'wing2'"
          :class="{ 'wingZoom-in_w2': shouldZoomIn }"
        ></wing2>
        <wing3
          v-if="selectedWing === 'wing3'"
          :class="{ 'wingZoom-in_w3': shouldZoomIn }"
          style="
            transform: scale(2.2);
            margin-left: 144px;
            margin-top: 170px;
            position: absolute;
            z-index: -8;
          "
        ></wing3>

        <!--eyes切換-->
        <e1
          v-if="selectedEyes === 'eyes1'"
          :class="{ 'eyesZoom-in_e1': shouldZoomIn }"
        ></e1>
        <e2
          v-if="selectedEyes === 'eyes2'"
          :class="{ 'eyesZoom-in_e2': shouldZoomIn }"
        ></e2>
        <e3
          v-if="selectedEyes === 'eyes3'"
          :class="{ 'eyesZoom-in_e3': shouldZoomIn }"
        ></e3>
        <e4
          v-if="selectedEyes === 'eyes4'"
          :class="{ 'eyesZoom-in_e4': shouldZoomIn }"
        ></e4>
        <e5
          v-if="selectedEyes === 'eyes5'"
          :class="{ 'eyesZoom-in_e5': shouldZoomIn }"
          style="margin-left: 165px; margin-top: 180px; position: absolute"
        ></e5>
        <e6
          v-if="selectedEyes === 'eyes6'"
          :class="{ 'eyesZoom-in_e6': shouldZoomIn }"
        ></e6>

        <!--mouth切換-->
        <m1
          v-if="selectedMouth === 'mouth1'"
          :class="{ 'mouthZoom-in_m1': shouldZoomIn }"
        ></m1>
        <m2
          v-if="selectedMouth === 'mouth2'"
          :class="{ 'mouthZoom-in_m2': shouldZoomIn }"
        ></m2>
        <m3
          v-if="selectedMouth === 'mouth3'"
          :class="{ 'mouthZoom-in_m3': shouldZoomIn }"
        ></m3>
        <m4
          v-if="selectedMouth === 'mouth4'"
          :class="{ 'mouthZoom-in_m4': shouldZoomIn }"
        ></m4>
        <m5
          v-if="selectedMouth === 'mouth5'"
          :class="{ 'mouthZoom-in_m5': shouldZoomIn }"
          style="
            transform: scale(0.6);
            margin-left: 160px;
            margin-top: 280px;
            position: absolute;
          "
        ></m5>
        <m6
          v-if="selectedMouth === 'mouth6'"
          :class="{ 'mouthZoom-in_m6': shouldZoomIn }"
        ></m6>

        <!--accessories切換-->
        <t1
          v-if="selectedAccessoriesBtm === 'accessories1'"
          :class="{ 'accessoriesZoom-in_t1': shouldZoomIn }"
          style="
            transform: scale(1);
            margin-left: 215px;
            margin-top: 314px;
            position: absolute;
            z-index: -7;
          "
        ></t1>
        <t2
          v-if="selectedAccessoriesBtm === 'accessories2'"
          :class="{ 'accessoriesZoom-in_t2': shouldZoomIn }"
        ></t2>
        <t3
          v-if="selectedAccessoriesTop === 'accessories3'"
          :class="{ 'accessoriesZoom-in_t3': shouldZoomIn }"
          style="
            transform: scale(1);
            margin-left: 125px;
            margin-top: 80px;
            position: absolute;
          "
        ></t3>
        <t4
          v-if="selectedAccessoriesTop === 'accessories4'"
          :class="{ 'accessoriesZoom-in_t4': shouldZoomIn }"
        ></t4>
        <t5
          v-if="selectedAccessoriesTop === 'accessories5'"
          :class="{ 'accessoriesZoom-in_t5': shouldZoomIn }"
        ></t5>
        <t6
          v-if="selectedAccessoriesTop === 'accessories6'"
          :class="{ 'accessoriesZoom-in_t6': shouldZoomIn }"
        ></t6>
      </div>
      <div class="set">
        <Button @click="handleReturn">
          <h2>復原</h2>
        </Button>
        <Button @click="handelRandom">
          <h2>隨機</h2>
        </Button>
        <!-- <Button>
          <h2>儲存</h2>
        </Button> -->
      </div>
    </section>

    <ul id="monster-select">
      <input
        type="radio"
        name="panel-radio"
        id="radio1"
        class="panel-control"
        checked
      />
      <input
        type="radio"
        name="panel-radio"
        id="radio2"
        class="panel-control"
      />
      <input
        type="radio"
        name="panel-radio"
        id="radio3"
        class="panel-control"
      />
      <input
        type="radio"
        name="panel-radio"
        id="radio4"
        class="panel-control"
      />

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
          <h2 class="typee">顏色</h2>
          <li class="type1">
            <ol @click="change_body('body1')">
              <body1 />
            </ol>
            <ol @click="change_body('body2')">
              <body2 />
            </ol>
            <ol @click="change_body('body3')">
              <body3 />
            </ol>
            <ol @click="change_body('body4')">
              <body4 />
            </ol>
            <ol @click="change_body('body5')">
              <body5 />
            </ol>
          </li>
          <h2 class="typee">翅膀</h2>
          <li class="wing">
            <wing1 @click="change_wing('wing1')" />

            <wing2 @click="change_wing('wing2')" />

            <wing3 @click="change_wing('wing3')" />
          </li>
        </ul>
        <ul class="content content2">
          <h2 class="type">樣式</h2>
          <li class="type2">
            <ol @click="change_eyes('eyes1')">
              <e1 />
            </ol>
            <ol @click="change_eyes('eyes2')">
              <e2 />
            </ol>
            <ol @click="change_eyes('eyes3')">
              <e3 />
            </ol>
            <div class="space"></div>
            <ol @click="change_eyes('eyes4')">
              <e4 />
            </ol>
            <ol @click="change_eyes('eyes5')">
              <e5 />
            </ol>
            <ol @click="change_eyes('eyes6')">
              <e6 />
            </ol>
          </li>
          <br />
        </ul>
        <ul class="content content3">
          <h2 class="type">樣式</h2>
          <li class="type2">
            <ol @click="change_mouth('mouth1')">
              <m1 />
            </ol>
            <ol @click="change_mouth('mouth2')">
              <m2 />
            </ol>
            <ol @click="change_mouth('mouth3')">
              <m3 />
            </ol>
            <div class="space"></div>
            <ol @click="change_mouth('mouth4')">
              <m4 />
            </ol>
            <ol @click="change_mouth('mouth5')">
              <m5 />
            </ol>
            <ol @click="change_mouth('mouth6')">
              <m6 />
            </ol>
          </li>
          <br />
        </ul>
        <ul class="content content4">
          <h2 class="typee">樣式</h2>
          <li class="type1 type4">
            <ol @click="change_accessories1('accessories1')">
              <t1 />
            </ol>
            <ol @click="change_accessories1('accessories2')">
              <t2 />
            </ol>
            <ol @click="change_accessories('accessories3')">
              <t3 />
            </ol>
          </li>
          <li class="type1 type4">
            <ol @click="change_accessories('accessories4')">
              <t4 />
            </ol>
            <ol @click="change_accessories('accessories5')">
              <t5 />
            </ol>
            <ol @click="change_accessories('accessories6')">
              <t6 />
            </ol>
          </li>
          <br />
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
let selectedBody = ref('body1');
let selectedEyes = ref('eyes5');
let selectedMouth = ref('mouth5');
let selectedAccessoriesTop = ref('accessories3');
let selectedAccessoriesBtm = ref('accessories1');
let selectedWing = ref('wing3');

// 
let shouldZoomIn = ref(false); 

let change_body = bodyname => {
  // console.log('body');
  selectedBody.value = bodyname;
  shouldZoomIn.value = true;
};
let change_eyes = eyesname => {
  // console.log('eyes');
  selectedEyes.value = eyesname;
  shouldZoomIn.value = true;
};
let change_mouth = mouthname => {
  // console.log('mouth');
  selectedMouth.value = mouthname;
  shouldZoomIn.value = true;
};
let change_accessories = accessoriesname => {
  // console.log('配件上');
  selectedAccessoriesTop.value = accessoriesname;
  shouldZoomIn.value = true;
};
let change_accessories1 = accessoriesname1 => {
  // console.log('配件下');
  selectedAccessoriesBtm.value = accessoriesname1;
  shouldZoomIn.value = true;
};
let change_wing = wingname => {
  // console.log('wing');
  selectedWing.value = wingname;
  shouldZoomIn.value = true;
};

// 怪獸ref的值恢復為預設值
const handleReturn = () => {
  selectedBody.value = 'body1';
  selectedEyes.value = 'eyes5';
  selectedMouth.value = 'mouth5';
  selectedAccessoriesTop.value = 'accessories3';
  selectedAccessoriesBtm.value = 'accessories1';
  selectedWing.value = 'wing3';
};

//隨機怪獸
const handelRandom = () => {
  const bodyOptions = ['body1', 'body2', 'body3', 'body4', 'body5']; // 可用的 body 選項
  const eyesOptions = ['eyes1', 'eyes2', 'eyes3', 'eyes4', 'eyes5', 'eyes6']; // 可用的 eyes 選項
  const mouthOptions = [
    'mouth1',
    'mouth2',
    'mouth3',
    'mouth4',
    'mouth5',
    'mouth6',
  ]; // 可用的 mouth 選項
  const accessoriesTopOptions = [
    'accessories3',
    'accessories4',
    'accessories5',
  ]; // 可用的配件上選項
  const accessoriesBtmOptions = ['accessories1', 'accessories2']; // 可用的配件下選項
  const wingOptions = ['wing1', 'wing2', 'wing3']; // 可用的翅膀選項
  // 隨機選取一個值並指派給對應的變量
  selectedBody.value = getRandomOption(bodyOptions);
  selectedEyes.value = getRandomOption(eyesOptions);
  selectedMouth.value = getRandomOption(mouthOptions);
  selectedAccessoriesTop.value = getRandomOption(accessoriesTopOptions);
  selectedAccessoriesBtm.value = getRandomOption(accessoriesBtmOptions);
  selectedWing.value = getRandomOption(wingOptions);

  shouldZoomIn.value = true;
};

const getRandomOption = options => {
  const randomIndex = Math.floor(Math.random() * options.length);
  // console.log('有咚咚');
  return options[randomIndex];
};
</script>

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
      justify-content: space-around;
      margin-top: 40px;
    }

    button {
      width: 150px;
      height: 60px;
    }

    #view-window {
      width: 500px;
      height: 500px;
      background: #fffdf8;
      border-radius: 2rem;
      border: 5px solid $textcolor5;
      box-sizing: border-box;

      position: relative; /* 添加定位属性 */
      z-index: -1; /* 将 body 元素的 z-index 设置为较小的值 */
    }

    //body位置
    .bodyZoom-in {
      transform: scale(1.8); /* 放大 */
      margin-left: 185px;
      margin-top: 180px;
      position: absolute;
      z-index: -4;
    }

    //wing位置
    .wingZoom-in_w1 {
      transform: scale(2.2);
      margin-left: 146px;
      margin-top: 184px;
      position: absolute;
      z-index: -8;
    }
    .wingZoom-in_w2 {
      transform: scale(2.2);
      margin-left: 145px;
      margin-top: 180px;
      position: absolute;
      z-index: -8;
    }
    .wingZoom-in_w3 {
      transform: scale(2.2);
      margin-left: 144px;
      margin-top: 170px;
      position: absolute;
      z-index: -8;
    }

    //eyes位置
    .eyesZoom-in_e1 {
      margin-left: 195px;
      margin-top: 170px;
      position: absolute;
    }
    .eyesZoom-in_e2 {
      margin-left: 137px;
      margin-top: 165px;
      position: absolute;
    }
    .eyesZoom-in_e3 {
      margin-left: 148px;
      margin-top: 165px;
      position: absolute;
    }
    .eyesZoom-in_e4 {
      margin-left: 165px;
      margin-top: 190px;
      position: absolute;
    }
    .eyesZoom-in_e5 {
      margin-left: 165px;
      margin-top: 180px;
      position: absolute;
    }
    .eyesZoom-in_e6 {
      margin-left: 155px;
      margin-top: 190px;
      position: absolute;
    }

    //mouth位置
    .mouthZoom-in_m1 {
      transform: scale(0.5);
      margin-left: 160px;
      margin-top: 245px;
      position: absolute;
    }
    .mouthZoom-in_m2 {
      transform: scale(1);
      margin-left: 195px;
      margin-top: 280px;
      position: absolute;
    }
    .mouthZoom-in_m3 {
      transform: scale(0.5);
      margin-left: 160px;
      margin-top: 245px;
      position: absolute;
    }
    .mouthZoom-in_m4 {
      transform: scale(0.5);
      margin-left: 152px;
      margin-top: 260px;
      position: absolute;
    }
    .mouthZoom-in_m5 {
      transform: scale(0.6);
      margin-left: 160px;
      margin-top: 280px;
      position: absolute;
    }
    .mouthZoom-in_m6 {
      transform: scale(0.6);
      margin-left: 150px;
      margin-top: 260px;
      position: absolute;
    }

    //配件位置
    .accessoriesZoom-in_t1 {
      transform: scale(1);
      margin-left: 215px;
      margin-top: 314px;
      position: absolute;
      z-index: -7;
    }
    .accessoriesZoom-in_t2 {
      transform: scale(1.1);
      margin-left: 149px;
      margin-top: 230px;
      position: absolute;
      z-index: -7;
    }
    .accessoriesZoom-in_t3 {
      transform: scale(1);
      margin-left: 125px;
      margin-top: 80px;
      position: absolute;
    }
    .accessoriesZoom-in_t4 {
      transform: scale(1);
      margin-left: 147px;
      margin-top: 35px;
      position: absolute;
    }
    .accessoriesZoom-in_t5 {
      transform: scale(1);
      margin-left: 245px;
      margin-top: 75px;
      position: absolute;
    }
    .accessoriesZoom-in_t6 {
      transform: rotate(-15deg) scale(1);
      margin-left: 105px;
      margin-top: 89px;
      position: absolute;
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
        color: #fff;
        border: 1px solid $textcolor5;
        cursor: pointer;
        border-radius: 0.5rem 0.5rem 0 0;

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
        margin: 30px auto;
        // width: 600px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .wing {
        margin: 30px auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
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

#radio1:checked ~ .select-label [for='radio1'],
#radio2:checked ~ .select-label [for='radio2'],
#radio3:checked ~ .select-label [for='radio3'],
#radio4:checked ~ .select-label [for='radio4'] {
  background-color: $textcolor5;

  h2 {
    color: $maincolor1;
  }
}

#radio1:checked ~ .select-main .content1,
#radio2:checked ~ .select-main .content2,
#radio3:checked ~ .select-main .content3,
#radio4:checked ~ .select-main .content4 {
  display: block;
}
</style>
