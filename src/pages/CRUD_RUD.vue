<script setup>
import axios from 'axios';

const username = ref('asher');
let bookingData = reactive({});

onMounted(() => {
  axios.get('../../src/assets/json/ticketInfo.json').then(res => {
    bookingData.value = res.data.ticketBooking;
    console.log(bookingData);
  });
});
</script>

<template>
  <!-- <h1>sd</h1> -->
  <!-- 顯示畫面 -->
  <div v-for="(item, i) in bookingData.value">
    <div style="display: flex">
      <p style="margin-bottom: 10px">{{ item }}</p>
      <button style="margin-bottom: 10px">退票</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
//
</style>
