<template>
  <div class="wrapper">
    <div
      class="imgbox"
      v-for="item in data.value"
      :key="item.h1"
      @click="openModal"
    >
      <img :src="imgURL(item.img)" />
      <h3>{{ item.name }}</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
  </div>
  <bookshow v-if="showmodal" class="modal" @close-modal="closeModal" />
</template>
<script setup>
import getImageUrl from '@/utils/imgPath';
import axios from 'axios';

import { reactive } from 'vue';

const imgURL = img => getImageUrl(img);

// 展演資料 :
let data = reactive({});

// 談窗開關
let showmodal = ref(false);

// 點及圖片彈出視窗鑑識
const openModal = () => {
  showmodal.value = true;
  // gsap.from('.modal', {
  //   autoAlpha: 0,
  //   y: 20,
  //   onComplete: () => {},
  // });
};

// 自動顯示六張展演圖片及H1文字
onMounted(() => {
  axios
    .get('../../../src/assets/json/performaceInfo.json')
    .then(res => {
      data.value = res.data.performanceData;
      console.log(data.value);
    })
    .catch(err => {
      console.log(err);
    });
});

// 關掉視窗
const closeModal = () => {
  showmodal.value = false;
  // gsap.to('.modal', {
  //   autoAlpha: 0,
  //   y: -20,
  //   onComplete: () => {
  //     console.log('end');
  //   },
  // });
};
</script>
<style scoped lang="scss">
// .modal {
//   visibility: hidden;
// }
.wrapper {
  width: 947px;
}
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
