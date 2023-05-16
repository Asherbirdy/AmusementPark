<template>
  <main>
    <div class="rides">
      <TitleBigPink class="title" />
      <h1>{{ header }}</h1>
      <ul>
        <li v-for="(ride, index) in rides" :key="index">
          <img :src="imgURL(ride.image)" alt="" />
          <div>
            <h3>{{ ride.name }}</h3>
            <el-icon><ArrowDownBold /></el-icon>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';


const header = ref('主題設施');
const imgURL = getImageUrl;
const rides = [
  { name: '旋轉飛椅', image: 'facility1.png' },
  { name: '雲霄飛車', image: 'facility2.png' },
  { name: '摩天輪', image: 'facility3.png' },
  { name: '探空飛梭', image: 'facility4.png' },
  { name: '旋轉木馬', image: 'facility5.png' },
  { name: '碰碰車', image: 'facility6.png' },
];
</script>
<style lang="scss" scoped>
main {
  width: $workspace;
  padding-top: 0;
  .rides {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .title {
    margin: 0 350px;
  }
  h1 {
    position: absolute;
    top: 136px;
    left: 531px;
    color: #ce5b5b;
    font-size: 50px;
  }
  .rides img {
    height: 250px;
    display: block;
  }
  .rides div {
    border: 1px solid #838383;
    display: flex;
    flex-direction: row;
    min-width: 188px;
  }
  .rides h3 {
    font-size: 16px;
    color: #204c74;
    text-align: left;
    min-width: 100px;
    padding: 10px 57px 10px 10px;
  }
  .rides ul {
    margin: 0 180px;
    display: flex;
    flex-wrap: wrap;
  }
  .rides li {
    margin: 40px 39px;
  }

  i {
    font-size: 15px;
    color: #838383;
    border: 1px solid #838383;
    border-radius: 50%;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
