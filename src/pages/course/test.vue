<template>
  <div v-for="item in imgData" :key="item.productName">
    <img :src="item.img" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const imgData = ref([
  { productName: 'aaa', img: '/img/bag1.png' },
  { productName: 'bbb', img: '/img/bag2.png' },
  { productName: 'ccc', img: 'test/img/bag3.png' },
]);

const getImgPath = img => {
  return new URL(img, import.meta.url).href;
};
</script>

<style></style>
