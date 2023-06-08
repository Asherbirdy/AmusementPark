<template>
  <main>
    <div class="rides">
      <title-big2 class="title">{{ header }}</title-big2>
      <div class="aboutrides">
        <div class="ridesname" v-for="(ride, index) in rides" :key="index">
          <img :src="imgURL(ride.imgUrl)" alt="" />
          <div class="ridesinfo">
            <h3>{{ ride.name }}</h3>
            <div @click="openModal(ride, index)">
              <el-icon><ArrowDownBold /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="ridemodal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal" style="text-align: center"
          >&times;</span
        >
        <div class="modelin">
          <img
            :src="
              ridesData[selectedIndex]
                ? imgURL(ridesData[selectedIndex].imgUrl)
                : ''
            "
            alt=""
          />
          <div class="modeltext">
            <h2>
              {{ ridesData[selectedIndex] ? ridesData[selectedIndex].h2 : '' }}
            </h2>
            <h3>
              {{ ridesData[selectedIndex] ? ridesData[selectedIndex].h3 : '' }}
            </h3>
            <h4>&#x25b2;注意</h4>
            <p>
              {{ ridesData[selectedIndex] ? ridesData[selectedIndex].p : '' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';
import { reactive, ref } from 'vue';

const imgURL = name => getImageUrl(name);

const ridesData = reactive([]);

const ridemodal = ref(false);
const selectedIndex = ref(null);

const openModal = (rides, index) => {
  selectedIndex.value = index;
  ridemodal.value = true;
};

const closeModal = () => {
  ridemodal.value = false;
};

const header = ref('主題設施');

const rides = [
  { name: '旋轉飛椅', imgUrl: 'facility1.png' },
  { name: '雲霄飛車', imgUrl: 'facility2.png' },
  { name: '摩天輪', imgUrl: 'facility3.png' },
  { name: '探空飛梭', imgUrl: 'facility4.png' },
  { name: '旋轉木馬', imgUrl: 'facility5.png' },
  { name: '碰碰車', imgUrl: 'facility6.png' },
];

const initialRides = [
  {
    name: '旋轉飛椅',
    imgUrl: 'facility1.png',
    h2: '旋轉飛椅',
    h3: '深受大小孩的喜愛，額外的旋轉或傾斜運動，讓遊客感受到類似飛行的刺激感。',
    p: '由於旋轉飛椅的刺激度較高，所以對於心臟病或者其他健康問題的人士，以及孕婦和身高不足的兒童來說，是不建議乘坐的。',
  },
  {
    name: '雲霄飛車',
    imgUrl: 'facility2.png',
    h2: '雲霄飛車',
    h3: '陡峭的下降、迴轉、盤旋、急速加速和減速等特點，讓乘客體驗到高速、重力加速度和振動的極限感受。',
    p: '由於雲霄飛車的速度和刺激度較高，所以不適合患有心臟病或者其他健康問題的人士，以及孕婦和身高不足的兒童乘坐。',
  },
  {
    name: '摩天輪',
    imgUrl: 'facility3.png',
    h2: '摩天輪',
    h3: '以巨大的車輪形狀為特色，搭載乘客在不同高度的車廂中，緩慢上升和下降，欣賞全景風景。',
    p: '摩天輪是一項較為平和的遊樂設施，適合各個年齡層的遊客，包括孕婦和小孩，可以放心乘坐。',
  },
  {
    name: '探空飛梭',
    imgUrl: 'facility4.png',
    h2: '探空飛梭',
    h3: '軌道上迅速加速，然後垂直升空，到達最高點後，再迅速下降，並重複多次。',
    p: '探空飛梭是一項速度和高度變化劇烈的遊樂設施，對於心臟病或其他健康問題的人士以及身高不足的兒童不適合乘坐。',
  },
  {
    name: '旋轉木馬',
    imgUrl: 'facility5.png',
    h2: '旋轉木馬',
    h3: '由馬匹組成的旋轉平台，乘客坐在馬上，隨著音樂旋轉。',
    p: '旋轉木馬是一項適合所有年齡段的遊樂設施，包括孕婦和小孩，可以放心乘坐。',
  },
  {
    name: '碰碰車',
    imgUrl: 'facility6.png',
    h2: '碰碰車',
    h3: '乘坐碰碰車，車輛之間互相碰撞和追逐，給乘客帶來刺激和樂趣。',
    p: '碰碰車是一項適合所有年齡段的遊樂設施，包括孕婦和小孩，可以放心乘坐。',
  },
];

ridesData.push(...initialRides);
</script>
<style lang="scss" scoped>
main {
  width: $workspace;
  padding-top: 0;

  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #f9f3e4;
    width: 50%;
    height: 80%;
    margin: 5% auto;
    padding: 20px;
    border: 5px solid #673e00;
    border-radius: 50px;
  }

  .close {
    color: #5f2c00;
    border: 5px solid #673e00;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    float: right;
    font-weight: bold;
    font-size: 50px;
    cursor: pointer;
  }
  .modelin {
    display: flex;
    flex-direction: row;
    margin-top: 90px;
    margin-bottom: 20px;
    margin-left: 40px;
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
      margin-top: 50px;
      margin-bottom: 20px;
    }
    p {
      padding-left: 20px;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .modeltext {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .imgbox {
    width: 1200px;
    font-size: 20px;
    gap: 20px;
    cursor: pointer;
  }

  .rides {
    margin: 0 auto;
  }

  .title {
    margin-bottom: 100px;
  }

  .aboutrides {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
  }

  .rides img {
    width: 350px;
    display: block;
    margin: 40px 0 0 40px;
  }

  .rides .ridesinfo {
    border: 1px solid #838383;
    display: flex;
    width: 348px;
    margin-left: 40px;
  }

  .rides h3 {
    font-size: 30px;
    font-weight: bold;
    color: #204c74;
    text-align: left;
    min-width: 120px;
    padding: 10px 57px 10px 10px;
  }

  .rides .ridesname {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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
