<template>
  <div v-for="item in imgData" :key="item.productName">
    <img :src="item.img" />
  </div>
</template>

<script setup>
// import getImageUrl from '@/utils/imgPath';
// const imgURL = name => getImageUrl(name);

const imgData = ref([
  { productName: '圖片一：', img: '/bag1.png' },
  { productName: '圖片二', img: '/bag2.png' },
  { productName: '圖片三', img: '/bag3.png' },
]);
</script>

<style></style>
