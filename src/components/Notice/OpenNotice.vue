<template>
  <main>
    <div class="open">
      <TitleBig1 class="title">營業時間</TitleBig1>
      <div class="table">
        <ul
          v-for="row in timeTable"
          :key="row.id"
          :class="`row${row.id}`"
          class="smalltable"
        >
          <li>{{ row.day }}</li>
          <li>{{ row.time }}</li>
        </ul>
        <h3>最終入場時間為閉館前1小時，實際營業狀況請依官方公告為主。</h3>
      </div>
    </div>
  </main>
  <ul class="maintable">
    <li>
      <div class="img">
      <img src="../../assets/img/openride1.jpg" alt="" />
    </div>
      <div class="info1">
        <h1>刺激之旅</h1>
        <p>年輕氣盛，尋找刺激</p>
      </div>
    </li>
    <li>
      <div class="info2">
        <h1>親子之旅</h1>
        <p>親子同樂，攜手尋樂</p>
      </div>
      <div class="img">
      <img src="../../assets/img/openride2.jpg" alt="" />
    </div>
    </li>
    <li>
      <div class="img">
      <img src="../../assets/img/openride3.jpg" alt="" />
    </div>
      <div class="info3">
        <h1>愛情之旅</h1>
        <p>情侶同歡，攜手尋愛</p>
      </div>
    </li>
    <li>
      <div class="info4">
        <h1>飛翔之旅</h1>
        <p>親有同樂，攜手飛翔</p>
      </div>
      <div class="img">
      <img src="../../assets/img/openride4.jpg" alt="" />
    </div>
    </li>
  </ul>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
const timeTable = [
  { id: 1, day: '週日~週五', time: '09:00-18:00' },
  { id: 2, day: '週六', time: '09:00-20:00' },
];
</script>

<style lang="scss" scoped>
main {
  width: $workspace;
  .open {
    width: 1200px;
    position: relative;
  }
  .table {
    width: 600px;
    margin: 50px 317px;
    text-align: center;
    position: absolute;
    font-size: 24px;
  }
  .smalltable {
    margin-top: 0;
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
    width: 200px;
   padding: 50px 72px;
    border-bottom: 1px solid #f9f3e4;
  }
  .row2 li:nth-child(1) {
    background-color: #d1825b;
    width: 200px;
    padding: 55px 72px;
  }
  .row1 li:nth-child(2) {
    background-color: #f9f3e4;
    width: 400px;
    padding: 55px 55px;
    border-bottom: 1px solid #d1825b;
  }
  .row2 li:nth-child(2) {
    background-color: #f9f3e4;
    width: 400px;
    padding: 55px 55px;
  }
  .open h3 {
    font-size: 20px;
    position: absolute;
    top: 315px;
    left: 15px;
  }
}
.maintable {
  width: 100%;
  display: flex;
  margin: 500px 0 150px 0;
  color: #fff;
}
.maintable li:nth-child(2) img{
  width: 529px;
}
.maintable img {
  width: 100%;
  height: 375px;
  display: block;
}

.info1,
.info2,
.info3,
.info4 {
  width: 100%;
  height: 375px;
}
.img{
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(0.8);
}
img:hover {
  transform: scale(1.1, 1.1);
  transition: 0.3s 0.03s;
  filter: brightness(1.3);
}

.info1 h1,
.info2 h1,
.info3 h1,
.info4 h1 {
  padding: 40px 0 20px 40px;
}
.info1 p,
.info2 p,
.info3 p,
.info4 p {
  padding: 0 0 20px 40px;
}
.info1 {
  background-color: rgb(255, 0, 0);
}
.info2 {
  background-color: rgb(216, 137, 0);
}
.info3 {
  background-color: rgb(188, 0, 91);
}
.info4 {
  background-color: rgb(0, 52, 108);
}
</style>
