<template>
  <main>
    <div class="open">
      <TitleBig1 class="title">營業時間</TitleBig1>
      <div class="table">
        <ul v-for="row in timeTable" :key="row.id" :class="`row${row.id}`">
          <li>{{ row.day }}</li>
          <li>{{ row.time }}</li>
        </ul>
        <h3>最終入場時間為閉館前1小時，實際營業狀況請依官方公告為主。</h3>
      </div>
      <div v-for="item in imgData" :key="item.productName">
      <img :src="imgURL(item.img)" alt="" />
    </div>
    </div>
  </main>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
const imgData = ref([
  { img: 'castle.png' },
]);
const timeTable = [
  { id: 1, day: '週日~週五', time: '09:00-18:00' },
  { id: 2, day: '週六', time: '09:00-20:00' }
];
</script>

<style lang="scss" scoped>
main {
  width: $workspace;

  .open {
    width: 1200px;
    margin: 40px auto 400px;
    position: relative;
  }
  .table {
    width: 600px;
    margin-top: 136px;
    text-align: center;
    position: absolute;
    top: 300px;
    left: 265px;
  }
  .row1 {
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: row;
  }
  .row2 {
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    margin-bottom: 70px;
  }
  .row1 li:nth-child(1) {
    background-color: #d1825b;
    padding: 25px 50px;
    border-bottom: 1px solid #f9f3e4;
  }
  .row2 li:nth-child(1) {
    background-color: #d1825b;
    padding: 25px 72px;
  }
  .row1 li:nth-child(2) {
    background-color: #f9f3e4;
    padding: 25px 50px;
    border-bottom: 1px solid #d1825b;
  }
  .row2 li:nth-child(2) {
    background-color: #f9f3e4;
    padding: 25px 50px;
  }
  .open h3 {
    font-size: 16px;
    position: absolute;
    top: 193px;
    left: -40px;
  }
  .open img {
    position: absolute;
    margin: 111px auto;
    top: 120px;
    left: 710px;
    width: 385px;
    display: block;
  }
}
</style>
