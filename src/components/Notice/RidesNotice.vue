<template>
  <main>
    <div class="rides">
      <title-big2 class="title">{{ header }}</title-big2>
      <div class="aboutrides">
        <div class="ridesname" v-for="(ride, index) in rides" :key="index">
          <img :src="imgURL(ride.image)" alt="" />
          <div class="ridesinfo">
            <h3>{{ ride.name }}</h3>
            <div class="imgbox" @click="openModal">
              <el-icon><ArrowDownBold /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <bookrides v-if="ridemodal" class="modal" @close-modal="closeModal" />
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
import axios from 'axios';
import { reactive } from 'vue';

// 設施資料 :
let data = reactive({});
// 談窗開關
let ridemodal = ref(false);

const openModal = () => {
  ridemodal.value = true;
};
const closeModal = () => {
  ridemodal.value = false;
};

onMounted(() => {
  axios
    .get('../../../src/assets/json/ridesInfo.json')
    .then(res => {
      data.value = res.data.ridesData;
      console.log(data.value);
    })
    .catch(err => {
      console.log(err);
    });
});

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

  .modal {
    visibility: hidden;
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
