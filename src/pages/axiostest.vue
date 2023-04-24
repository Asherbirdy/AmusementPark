<script setup>
import axios from 'axios';
onMounted(() => {
  axios.get('https://vue-lessons-api.vercel.app/courses/list').then(res => {
    console.log(res);
  });
});
</script>
<template>
  <h1>1adjslasld;saj</h1>
</template>
<style></style>
