<template>
  <main>
    <div class="rides">
      <title-big2 class="title">{{ header }}</title-big2>
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
const imgURL = name => getImageUrl(name);


const header = ref('主題設施');
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
    margin: 0 auto;
    position: relative;
  }
  .title {
    margin-bottom: 100px;
  }
  .rides img {
    height: 450px;
    display: block;
  }
  .rides div {
    border: 1px solid #838383;
    display: flex;
    flex-direction: row;
    min-width: 188px;
  }
  .rides h3 {
    font-size: 30px;
    font-weight: bold;
    color: #204c74;
    text-align: left;
    min-width: 120px;
    padding: 10px 57px 10px 10px;
  }
  .rides ul {
    display: flex;
    flex-wrap: wrap;
  }
  .rides li {
    margin: 40px 20px;
  }

  i {
    font-size: 30px;
    color: #838383;
    border: 1px solid #838383;
    border-radius: 50%;
    margin-top: 16px;
    cursor: pointer;
    margin-left: 117px;
  }
}
</style>
