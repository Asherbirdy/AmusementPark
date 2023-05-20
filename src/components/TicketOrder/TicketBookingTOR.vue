<template>
  <div>
    <div class="imgbox" v-for="item in performanceData">
      <img :src="imgURL(item.img)" />
      <h3>{{ item.name }}</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <!-- <div class="imgbox">
      <img src="../../assets/img/performance2.png" />
      <h3>爵士表演</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <div class="imgbox">
      <img src="@/assets/img/performance3.png" />
      <h3>綠野仙蹤</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <div class="imgbox">
      <img src="@/assets/img/performance4.png" />
      <h3>火焰跳躍者</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <div class="imgbox">
      <img src="@/assets/img/performance5.png" />
      <h3>魔幻舞台</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <div class="imgbox">
      <img src="@/assets/img/performance6.png" />
      <h3>瘋狂藝術家</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div> -->
  </div>
</template>
<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
// DATA
const performanceData = [
  {
    name: '夢幻演繹',
    img: 'performance1.png',
  },
  {
    name: '爵士表演',
    img: 'performance2.png',
  },
  {
    name: '綠野仙蹤',
    img: 'performance3.png',
  },
  {
    name: '火焰跳躍者',
    img: 'performance4.png',
  },
  {
    name: '魔幻舞台',
    img: 'performance5.png',
  },
  {
    name: '瘋狂藝術家',
    img: 'performance6.png',
  },
];
</script>
<style scoped lang="scss">
div {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  .imgbox {
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    gap: 20px;
    &:hover {
      filter: opacity(80%);
    }
    &:hover .overlay {
      visibility: visible;
    }
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;

    span {
      font-size: 18px;
      color: black;
      text-align: center;
    }
  }
}
</style>
