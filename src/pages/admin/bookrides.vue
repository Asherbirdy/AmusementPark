<template>
  <modal-l>
    <article>
      <div v-for="(item, index) in ridesList" :key="index" class="showImg">
        <img :src="item.imgUrl" alt="" />
        <h1>{{ item.h1 }}</h1>
      </div>
      <section
        v-for="(title, titleIndex) in ridesList"
        :key="titleIndex"
        class="Content"
      >
        <h2>設施介紹</h2>
        <h3>{{ title.h3 }}</h3>
        <h4>&#x25b2;注意</h4>
        <h3 class="noticeCon">{{ title.noticeCon }}</h3>
      </section>
    </article>
  </modal-l>
</template>

<script setup>
const propsType = ref('BumperCars');
const ridesList = ref([]);
const testArr = {
  FlyingChair: [
    {
      h1: '旋轉飛椅',
      h3: '深受大小孩的喜愛，額外的旋轉或傾斜運動，讓遊客感受到類似飛行的刺激感。',
      noticeCon:
        '由於旋轉飛椅的刺激度較高，所以對於心臟病或者其他健康問題的人士，以及孕婦和身高不足的兒童來說，是不建議乘坐的。',
      imgUrl: '../../../src/assets/img/facility1.png',
    },
  ],
  RollerCoaster: [
    {
      h1: '雲霄飛車',
      h3: '陡峭的下降、迴轉、盤旋、急速加速和減速等特點，讓乘客體驗到高速、重力加速度和重力失重等感覺。',
      noticeCon:
        '請確保安全設施已正確固定。這包括安全帶、肩帶、安全桿和保護網等。如果您發現任何安全設施出現問題，請立即告知工作人員。',
      imgUrl: '../../../src/assets/img/facility2.png',
    },
  ],
  FerrisWheel: [
    {
      h1: '摩天輪',
      h3: '隨著輪子的轉動而上升到高處，並可以俯瞰周圍的風景。摩天輪通常在夜間點燈，呈現出美麗的夜景，成為了眾多遊客拍照留念的好去處。',
      noticeCon:
        '在遊樂設施上飲食是不被允許的，因為這可能增加您的風險，也可能污染設施。請在乘坐前放下任何食物或飲料。',
      imgUrl: '../../../src/assets/img/facility3.png',
    },
  ],
  SpaceShot: [
    {
      h1: '探空飛梭',
      h3: '高空彈射遊樂設施，塔頂會瞬間彈射向上，達到高度後再以類似自由落體的方式下降，營造出高速下落和失重等感覺。',
      noticeCon:
        '有身高限制，請務必遵守。身高限制是為了確保您的安全，如果您太小或太高，可能無法正確地固定在座位上，這會增加您的風險。',
      imgUrl: '../../../src/assets/img/facility4.png',
    },
  ],
  Carousel: [
    {
      h1: '旋轉木馬',
      h3: '感受到旋轉和風吹拂的感覺。旋轉木馬通常有不同的主題和裝飾，如動物、童話、海洋等，吸引了無數遊客的喜愛。',
      noticeCon:
        '孩子參加這些遊樂設施，請監督他們的行為，確保他們遵守安全規則和工作人員的指示。',
      imgUrl: '../../../src/assets/img/facility5.png',
    },
  ],
  BumperCars: [
    {
      h1: '碰碰車',
      h3: '充滿激情和刺激的遊樂設施，讓車子行駛在場地上，並嘗試撞擊其他車子。這種遊戲通常需要多人參與，因此也是一種很好的團隊建設活動。',
      noticeCon:
        '需要遵循安全規則。玩家應該穿著合適的鞋子，不要佩戴太多飾品和鬆散的衣服，以免卡住或妨礙行動。',
      imgUrl: '../../../src/assets/img/facility6.png',
    },
  ],
};
ridesList.value = testArr[propsType.value];
</script>

<style lang="scss" scoped>
//外框

article {
  display: flex;
  justify-content: space-between;
  padding: 50px;
}

//圖片區塊
.showImg {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  img {
    width: 400px;
    height: 500px;
  }
  h1 {
    font-size: 30px;
    color: $textcolor7;
    margin-top: 50px;
  }
}

//展演內容
.Content {
  margin-top: 100px;
  margin-left: 35px;

  h2 {
    height: 65px;
    width: 180px;
    background-color: #fff7a6;
    line-height: 65px;
    text-align: center;

    border-radius: 100px;
    border: 5px dashed #5590d6;
  }
  h3 {
    white-space: pre-wrap;

    line-height: 40px;
    letter-spacing: 6px;

    margin: 25px;
    margin-right: 0;
    margin-bottom: 0;
  }
  h4 {
    padding-left: 40px;
    font-weight: bold;
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
