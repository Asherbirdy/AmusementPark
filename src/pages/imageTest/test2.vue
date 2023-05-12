<template>
  <div v-for="item in imgData" :key="item.productName">
    <img :src="imgURL(item.img)" />
  </div>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);

//動態路徑版
const imgData = ref([
  { productName: '圖片一：', img: 'bag1.png' },
  { productName: '圖片二', img: 'bag2.png' },
  { productName: '圖片三', img: 'bag3.png' },
]);

//顯示版：
// const imgData = ref([
//   { productName: '圖片一：', img: '../../../src/assets/img/bag1.png' },
//   { productName: '圖片二', img: '../../../src/assets/img/bag2.png' },
//   { productName: '圖片三', img: '../../../src/assets/img/bag3.png' },
// ]);
</script>

<style></style>
