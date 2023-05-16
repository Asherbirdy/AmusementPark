<template>
  <main>
    <title-big-yellow class="title" />
    <h1>{{ header }}</h1>
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="item in performance" :key="item.name">
        <img :src="imgURL(item.image)" alt="" />
        <h3>{{ item.name }}</h3>
      </el-carousel-item>
    </el-carousel>
  </main>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath'

const header = ref('展覽資訊')
const performance = ref([
  { name: '夢幻演繹', image: 'performance1.png' },
  { name: '爵士表演', image: 'performance2.png' },
  { name: '綠野仙蹤', image: 'performance3.png' },
  { name: '火焰跳躍者', image: 'performance4.png' },
  { name: '魔幻舞台', image: 'performance5.png' },
  { name: '瘋狂藝術家', image: 'performance6.png' },
])
const imgURL = getImageUrl

</script>

<style lang="scss" scoped>
main {
  width: $workspace;
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  .title {
    margin: 0 350px;
  }
  h1 {
    position: absolute;
    top: 268px;
    left: 513px;
    color: #ce5b5b;
    font-size: 50px;
  }
  .el-carousel__item h3 {
    opacity: 0.75;
    line-height: 100px;
    min-width: 100px;
    display: inline-block;
    padding-left: 260px;
  }
  img{
    margin: 0 150px;
  }
  .el-carousel__arrow--right {
    background-color: #555555!important;
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
