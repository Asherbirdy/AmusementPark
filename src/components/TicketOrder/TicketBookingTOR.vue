<template>
  <div>
    <div class="imgbox" v-for="item in performanceData">
      <img :src="imgURL(item.img)" />
      <h3>{{ item.h1 }}</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
  </div>
  <BookShow style="opacity: 0" />
</template>
<script setup>
import getImageUrl from '@/utils/imgPath';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
const imgURL = img => getImageUrl(img);

const isOpen = ref(false);

// DATA
const performanceData2 = [
  {
    h1: '夢幻演繹',
    h3: '夢幻般的表演節目，結合音樂、舞蹈和劇場元素，呈現一個奇幻的故事。這個表演節目將會讓你進入一個夢境般的世界，帶給你全新的視覺和聽覺體驗。',
    img: 'performance1.png',
    showTime: '貝影劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
  },
  {
    h1: '爵士表演',
    h3: '充滿活力的表演節目，以爵士樂為主題，融合了舞蹈和唱歌等元素。這個表演節目將帶你回到爵士樂的黃金年代，讓你感受到那個時代的文化和風格。',
    img: 'performance2.png',
    showTime: '魔幻劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
  },
  {
    h1: '綠野仙蹤',
    h3: '以經典童話故事為主題的表演節目，呈現了一個美麗而神秘的綠色世界。這個表演節目以舞蹈、音樂、劇場和視覺效果等元素為主，帶你進入一個充滿魔幻和想像的世界。',
    img: 'performance3.png',
    showTime: '魔幻劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
  },
  {
    h1: '火焰跳躍者',
    h3: '刺激的表演節目，表演者將會在火焰中跳躍和舞蹈，呈現出一個驚人的視覺效果。這個表演節目融合了現代舞蹈和傳統藝術，帶給你一個刺激和難忘的體驗。',
    img: 'performance4.png',
    showTime: '百老匯劇院／人數限制200人\n平日／12:30、14:30\n假日／15:45',
  },
  {
    h1: '魔幻舞台',
    h3: '充滿魔法和驚喜的表演節目，以魔術和幻術為主題，融合了音樂、舞蹈和劇場等元素。這個表演節目將會讓你感受到魔法和幻術的神奇世界，帶給你一個非凡的體驗。',
    img: 'performance5.png',
    showTime: '魔幻劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
  },
  {
    h1: '瘋狂藝術家',
    h3: '充滿藝術氛圍的表演節目，結合了現代舞蹈、視覺藝術和劇場等元素。這個表演節目將會讓你進入一個充滿藝術和創意的世界，讓你感受到瘋狂和自由的氛圍。',
    img: 'performance6.png',
    showTime: '貝影劇場／人數限制200人\n平日／12:30、14:30\n假日／15:45',
  },
];

let performanceData = reactive({});

onMounted(() => {
  axios
    .get('../../../src/assets/json/performaceInfo.json')
    .then(res => {
      console.log(res.data.performanceData);
      performanceData = res.data.performanceData;
      console.log(performanceData);
    })
    .catch(err => {
      console.log(err);
    });
});
</script>
<style scoped lang="scss">
div {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  .imgbox {
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    gap: 20px;
    cursor: pointer;
    &:hover {
      filter: opacity(80%);
    }
    &:hover .overlay {
      visibility: visible;
    }
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;

    span {
      font-size: 18px;
      color: black;
      text-align: center;
    }
  }
}
</style>
