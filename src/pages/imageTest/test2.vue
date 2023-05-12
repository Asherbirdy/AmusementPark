<template>
  <div v-for="item in imgData" :key="item.productName">
    <!-- 正確版： -->
    <img :src="imgURL(item.img)" />
    <!-- 路徑版： -->
    <!-- <img :src="item.img" /> -->
  </div>
</template>

<script setup>
// 正確版：
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);

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
