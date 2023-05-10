<template>
  <main>
    <el-icon class="iconClose"><CircleClose /></el-icon>
    <article>
      <div class="showImg">
        <img src="../../assets/img/performance2.png" alt="" />
        <h1>爵士表演</h1>
      </div>
      <div class="showContent">
        <section
          v-for="(title, titleIndex) in showList"
          :key="titleIndex"
          class="introduce"
        >
          <h2>{{ title.h2 }}</h2>
          <h3>{{ title.h3 }}</h3>
        </section>
        <div class="order">
          <h2>預約人數</h2>
          <div class="icon">
            <el-icon class="iconRemove"><Remove /></el-icon><span>1</span
            ><el-icon class="iconPlus"><CirclePlus /></el-icon>
          </div>
        </div>
      </div>
    </article>
    <button class="orderBtn">立即預約</button>
  </main>
</template>


<script setup>
const show = ref([
  {
    h2: '表演介紹',
    h3: '結合了各種音樂元素，包括即興演奏、融合不同風格、節奏鮮明的樂器演奏、以及人聲演唱等等。爵士音樂的起源可以追溯到20世紀初期的美國，它是一種以黑人音樂文化為基礎的音樂形式',
  },
  {
    h2: '表演時間',
    h3: '貝影劇場／魔幻劇場人數限制200人\n平日／12:30、14:30\n假日／15:45',
  },
]);


const propsType = ref('show');
const showList = ref([]);
const testArr = {
  show: [
    {
      h2: '表演介紹',
      h3: '結合了各種音樂元素，包括即興演奏、融合不同風格、節奏鮮明的樂器演奏、以及人聲演唱等等。爵士音樂的起源可以追溯到20世紀初期的美國，它是一種以黑人音樂文化為基礎的音樂形式',
    },
    {
      h2: '表演時間',
      h3: '貝影劇場／魔幻劇場人數限制200人\n平日／12:30、14:30\n假日／15:45',
    },
  ],
  sing: [
    {
      h2: '唱歌介紹',
      h3: '結合了各種音樂元素，包括即興演奏、融合不同風格、節奏鮮明的樂器演奏、以及人聲演唱等等。爵士音樂的起源可以追溯到20世紀初期的美國，它是一種以黑人音樂文化為基礎的音樂形式',
    },
    {
      h2: '表演時間',
      h3: '貝影劇場／魔幻劇場人數限制200人\n平日／12:30、14:30\n假日／15:45',
    },
  ],
};
showList.value = testArr[propsType.value];
</script>


<style lang="scss" scoped>
//外框
.iconClose {
  margin-top: 10px;
  font-size: 50px;
  margin-left: 1065px;
  color: #90420a;
}


main {
  margin-top: 100px;
  padding: 0;
  width: 1140px;
  height: 850px;
  background-color: $maincolor1;
  border: 5px solid #ce5b5b;
  border-radius: 35px;
}
article {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  padding-top: 0;
  padding-bottom: 0;


  .iconClose {
  }
}


//圖片區塊
.showImg {
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: center;
  img {
    width: 450px;
    height: 600px;
  }
}


//展演內容
.showContent {
  // width: 645px;
  padding-left: 40px;
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



