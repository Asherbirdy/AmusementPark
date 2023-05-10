<template>
  <main>
    <article>
      <modal-l>
      <div class="showImg">
        <img src="../../assets/img/facility1.png" alt="" />
        <h1>採空飛梭</h1>
      </div>
      <div class="Content">
        <section
        v-for="(title, titleIndex) in ridesList"
        :key="titleIndex"
          class="introduce"
        >
          <h2>{{ title.h2 }}</h2>
          <h3>{{ title.h3 }}</h3>
          <h4>&#x25b2;注意</h4>
          <h3 class="noticeCon">{{ title.noticeCon }}</h3>
        </section>
        
      </div>
    </modal-l>
    </article>
  </main>
</template>


<script setup>
const propsType = ref('show');
const ridesList = ref([]);
const testArr = {
  show: [
    {
      h2: '設施介紹',
      h3: '深受大小孩的喜愛，額外的旋轉或傾斜運動，讓遊客感受到類似飛行的刺激感。',
      noticeCon:'由於旋轉飛椅的刺激度較高，所以對於心臟病或者其他健康問題的人士，以及孕婦和身高不足的兒童來說，是不建議乘坐的。',
    },
  ],
  sing: [
    {
      h2: '唱歌介紹',
      h3: '結合了各種音樂元素，包括即興演奏、融合不同風格、節奏鮮明的樂器演奏、以及人聲演唱等等。爵士音樂的起源可以追溯到20世紀初期的美國，它是一種以黑人音樂文化為基礎的音樂形式',
    },
  ],
};
ridesList.value = testArr[propsType.value];
</script>


<style lang="scss" scoped>
//外框
// .iconClose {
//   margin-top: 10px;
//   font-size: 50px;
//   margin-left: 1065px;
//   color: #90420a;
// }


// main {
//   margin-top: 100px;
//   padding: 0;
//   width: 1140px;
//   height: 850px;
//   background-color: $maincolor1;
//   border: 5px solid #ce5b5b;
//   border-radius: 35px;
// }
// article {
//   display: flex;
//   justify-content: space-between;
//   padding: 30px;
//   padding-top: 0;
//   padding-bottom: 0;


//   .iconClose {
//   }
// }


//圖片區塊
.showImg {
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  img {
    width: 400px;
    height: 500px;
  }
}


//展演內容
.Content {
  // width: 645px;
  margin-top: 150px;
  padding-left: 40px;
  span{
    font-size: 24px;
  }
}
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
  letter-spacing: 8px;
  
  
  margin: 25px;
  margin-right: 0;
  margin-bottom: 0;
}
h4{
  padding-left: 40px;
  font-weight: bold;
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 30px;
}


.order {
  .icon {
    margin: 25px 0 25px 25px;
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .iconPlus {
    font-size: 30px;
    width: 30px;
    height: 30px;
  }
  .iconRemove {
    font-size: 30px;
    width: 30px;
    height: 30px;
  }
  span {
    font-size: 40px;
    color: #4576a3;
  }
}
h1 {
  margin-top: 50px;
  color: #163767;
}
.orderBtn {
  float: right;
  margin-right: 70px;
  margin-bottom: -30px;
  width: 162px;
  height: 75px;
  background-color: #d1825b;
  border-radius: 10px;
  font-size: 24px;
}

</style>

