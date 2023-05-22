<template>
  <modal-l>
    <article>
      <div v-for="(item, index) in showList" :key="index" class="showImg">
        <img :src="imgURL(item.imgUrl)" alt="" />
        <h1>{{ item.h1 }}</h1>
      </div>
      <div class="showContent">
        <section
          v-for="(title, titleIndex) in showList"
          :key="titleIndex"
          class="introduce"
        >
          <h2>表演介紹</h2>
          <h3>{{ title.h3 }}</h3>
          <h2>表演時間</h2>
          <h3 class="showTime">{{ title.showTime }}</h3>
        </section>
        <div class="order">
          <h2>預約人數</h2>
          <div class="icon">
            <el-icon class="iconRemove"><Remove /></el-icon><span>1</span
            ><el-icon class="iconPlus"><CirclePlus /></el-icon>
          </div>
        </div>
      </div>
    </article>
    <Button class="orderBtn">立即預約</Button>
  </modal-l>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);

const propsType = ref('CrazyArtist');
const showList = ref([]);
const testArr = {
  DreamInterpretation: [
    {
      h1: '夢幻演繹',
      h3: '夢幻般的表演節目，結合音樂、舞蹈和劇場元素，呈現一個奇幻的故事。這個表演節目將會讓你進入一個夢境般的世界，帶給你全新的視覺和聽覺體驗。',
      imgUrl: 'performance1.png',
      showTime: '貝影劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
    },
  ],
  JazzPerformance: [
    {
      h1: '爵士表演',
      h3: '充滿活力的表演節目，以爵士樂為主題，融合了舞蹈和唱歌等元素。這個表演節目將帶你回到爵士樂的黃金年代，讓你感受到那個時代的文化和風格。',
      imgUrl: 'performance2.png',
      showTime: '魔幻劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
    },
  ],
  TheWizardOfOz: [
    {
      h1: '綠野仙蹤 ',
      h3: '以經典童話故事為主題的表演節目，呈現了一個美麗而神秘的綠色世界。這個表演節目以舞蹈、音樂、劇場和視覺效果等元素為主，帶你進入一個充滿魔幻和想像的世界。',
      imgUrl: 'performance3.png',
      showTime: '魔幻劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
    },
  ],
  FireJumper: [
    {
      h1: '火焰跳躍者',
      h3: '刺激的表演節目，表演者將會在火焰中跳躍和舞蹈，呈現出一個驚人的視覺效果。這個表演節目融合了現代舞蹈和傳統藝術，帶給你一個刺激和難忘的體驗。',
      imgUrl: 'performance4.png',
      showTime: '百老匯劇院／人數限制200人\n平日／12:30、14:30\n假日／15:45',
    },
  ],
  Magic: [
    {
      h1: '魔幻舞台',
      h3: '充滿魔法和驚喜的表演節目，以魔術和幻術為主題，融合了音樂、舞蹈和劇場等元素。這個表演節目將會讓你感受到魔法和幻術的神奇世界，帶給你一個非凡的體驗。',
      imgUrl: 'performance5.png',
      showTime: '魔幻劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
    },
  ],
  CrazyArtist: [
    {
      h1: '瘋狂藝術家',
      h3: '充滿藝術氛圍的表演節目，結合了現代舞蹈、視覺藝術和劇場等元素。這個表演節目將會讓你進入一個充滿藝術和創意的世界，讓你感受到瘋狂和自由的氛圍。',
      imgUrl: 'performance6.png',
      showTime: '貝影劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
    },
  ],
};
showList.value = testArr[propsType.value];
</script>

<style lang="scss" scoped>
//外框

article {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  margin-top: -50px;
}

//圖片區塊
.showImg {
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: center;
  img {
    width: 450px;
    height: 600px;
    padding-top: 30px;
  }
}

//展演內容
.showContent {
  // width: 645px;
  padding-left: 40px;
}
h2 {
  height: 65px;
  width: 180px;
  background-color: #fff7a6;
  line-height: 65px;
  text-align: center;
  margin-top: 30px;

  border-radius: 100px;
  border: 5px dashed #5590d6;
}
h3 {
  white-space: pre-wrap;

  line-height: 40px;
  letter-spacing: 8px;

  margin: 15px;
  margin-right: 0;
}

.order {
  .icon {
    margin: 25px 0 25px 25px;
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .iconPlus {
    font-size: 30px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .iconRemove {
    font-size: 30px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  span {
    font-size: 40px;
    color: #4576a3;
  }
}
h1 {
  margin-top: 45px;
  color: $textcolor7;
}
.orderBtn {
  float: right;
  margin-right: 70px;
  margin-bottom: 20px;
  width: 162px;
  height: 75px;
  background-color: #d1825b;
  border-radius: 10px;
  font-size: 24px;
}
</style>
