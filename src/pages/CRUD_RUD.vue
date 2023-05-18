<script setup>
import axios from 'axios';

const username = ref('asher');

axios.get('../../src/assets/json/ticketInfo.json').then(res => {
  console.log(res.data);
});
</script>

<template>
  <div></div>
</template>

<style scoped lang="scss">
//
</style>
