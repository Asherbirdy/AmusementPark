<template>
  <main>
    <TitleBig1 class="title">{{ header }}</TitleBig1>
    <el-carousel
      :interval="4000"
      type="card"
      arrow="always"
      height="500px"
      style="z-index: 0"
    >
      <el-carousel-item
        v-for="item in performance"
        :key="item.name"
        style="color: brown"
      >
        <img :src="imgURL(item.image)" alt="" />
        <h3>{{ item.name }}</h3>
      </el-carousel-item>
    </el-carousel>
  </main>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';
import Bookrides from '../-UI Element/modalframe/bookrides.vue';
const imgURL = name => getImageUrl(name);

const header = ref('展覽資訊');
const performance = ref([
  { name: '夢幻演繹', image: 'performance1.png' },
  { name: '爵士表演', image: 'performance2.png' },
  { name: '綠野仙蹤', image: 'performance3.png' },
  { name: '火焰跳躍者', image: 'performance4.png' },
  { name: '魔幻舞台', image: 'performance5.png' },
  { name: '瘋狂藝術家', image: 'performance6.png' },
]);
</script>
<style>
.el-carousel__arrow--left {
  height: 50px;
  width: 50px;
  background-color: #e98f00;
  font-size: 40px;
  font-weight: bold;
  left: 16px;
}
.el-carousel__arrow--right {
  height: 50px;
  width: 50px;
  background-color: #e98f00;
  font-size: 40px;
  font-weight: bold;
  right: 16px;
}
</style>
<style lang="scss" scoped>
main {
  width: $workspace;
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  .el-carousel__mask {
    opacity: 0;
  }
  .title {
    margin-bottom: 100px;
  }
  .el-carousel__item h3 {
    font-size: 30px;
    opacity: 0.75;
    line-height: 100px;
    min-width: 100px;
    display: inline-block;
    padding-left: 228px;
  }
  img {
    margin: 0 150px;
  }
  .el-carousel__item:nth-child(1) {
    height: 500px;
    display: inline-block;
  }
  .el-carousel__item:nth-child(2) {
    height: 500px;
    margin: 0 auto;
    display: inline-block;
  }

  .el-carousel__item:nth-child(3) {
    height: 500px;
    display: inline-block;
  }

  .el-carousel__item:nth-child(4) {
    height: 500px;
    display: inline-block;
  }
}
</style>
