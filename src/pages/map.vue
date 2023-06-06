<script setup>
import axios from 'axios';
import { ref, onMounted, onUnmounted } from 'vue';
const localTemp = ref();


//////天氣api
const getTemp = async () => {
  const weatherRes = await axios(
    'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-D86E32DD-4173-4C38-BF76-04A68E6E5AEF&limit=10&offset=0&format=JSON&locationName=%E5%A3%AB%E6%9E%97%E5%8D%80&elementName=T'
  );


  if (weatherRes.status === 200) {
    const weatherList =
      weatherRes.data.records.locations[0].location[0].weatherElement[0].time;
    localTemp.value = weatherList[0].elementValue[0].value;
    console.log(weatherRes);
  }
};
onMounted(() => {
  getTemp();
});


//////亂數生成
let timer = 0;


const randomNumber = ref(0);
const parkingSpaces = ref(0);
const currentDate = new Date();
const currentDay = currentDate.getDay();
const currentHour = currentDate.getHours();


// 人潮亂數
const crowdRandom = () => {
  //////設定於營業時間將人潮歸零
  if (
    //中午12點前的人潮
    (currentDay === 6 && currentHour >= 9 && currentHour < 12) ||
    (currentDay !== 6 && currentHour >= 9 && currentHour < 12)
  ) {
    randomNumber.value = Math.floor(Math.random() * 500) + 1200;
  } else if (
    //下午15點前的人潮
    (currentDay === 6 && currentHour >= 9 && currentHour < 15) ||
    (currentDay !== 6 && currentHour >= 9 && currentHour < 15)
  ) {
    randomNumber.value = Math.floor(Math.random() * 500) + 2100;
  } else if (
    //閉館前的人潮
    (currentDay === 6 && currentHour >= 9 && currentHour < 18) ||
    (currentDay !== 6 && currentHour >= 9 && currentHour < 18)
  ) {
    randomNumber.value = Math.floor(Math.random() * 50) + 600;
  } else {
    randomNumber.value = 0;
  }
};
onMounted(() => {
  crowdRandom();
  timer = setInterval(crowdRandom, 10000); // 每10秒生成一次
});


//車位亂數
const parkingRandom = () => {
  //////設定於營業時間將車位歸零
  if (
    //中午12點前的車位
    (currentDay === 6 && currentHour >= 9 && currentHour < 12) ||
    (currentDay !== 6 && currentHour >= 9 && currentHour < 12)
  ) {
    parkingSpaces.value = Math.floor(Math.random() * 10) + 300;
  } else if (
    //下午15點前的車位
    (currentDay === 6 && currentHour >= 9 && currentHour < 15) ||
    (currentDay !== 6 && currentHour >= 9 && currentHour < 15)
  ) {
    parkingSpaces.value = Math.floor(Math.random() * 10) + 20;
  } else if (
    //閉館前的車位
    (currentDay === 6 && currentHour >= 9 && currentHour < 18) ||
    (currentDay !== 6 && currentHour >= 9 && currentHour < 18)
  ) {
    parkingSpaces.value = Math.floor(Math.random() * 10) + 650;
  } else {
    parkingSpaces.value = 800;
  }
    //總車位數800
};
onMounted(() => {
  parkingRandom();
  timer = setInterval(parkingRandom, 10000); // 每10秒生成一次
});
</script>



<template>
  <div class="bg">
    <svg-parking id="svg-parking" />
    <svg-sun id="svg-sun" />
    <svg-cloud id="svg-cloud1" />
    <svg-cloud id="svg-cloud2" />
  </div>
  <main>
    <nav class="park">
      <title-big1 id="title1">園區地圖</title-big1>
      <img id="map" src="../assets/img/MAP.png" alt="" />
      <div style="display: flex">
        <ul>
          <li><h1>園區服務</h1></li>
          <li><h2>設施</h2></li>
          <hr />
          <li><h2>飲食</h2></li>
          <hr />
          <li><h2>醫療站</h2></li>
          <hr />
        </ul>
      </div>
    </nav>
    <div class="realtime">
      <img id="noteMonster" src="../assets/img/NotebookMonster.png" alt="" />
      <title-big2>園區動態</title-big2>
      <ul>
        <li id="crowd">
          <h1>園區人潮</h1>
          <div class="crowdCon">
            <h2>目前園區人潮</h2>
            <!--jsrander-->
            <p>{{ randomNumber }}</p>
          </div>
        </li>
        <li id="weather">
          <h1>天氣</h1>
          <div class="weatherCon">
            <h2>台北市</h2>
            <div id="weatherImg">
              <svg-sun-weather />
            </div>
            <span v-html="`${localTemp}&#176;C`"></span>
          </div>
        </li>
        <li id="Parking">
          <h1>車位</h1>
          <div class="ParkingCon">
            <div class="ParkText">
              <img src="../assets/img/Parking.png" alt="" />
              <h2>汽車尚有車位數</h2>
            </div>
            <p>{{ parkingSpaces }}</p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="scss">
/* @media (min-width: 1024px){} */

main {
  padding-top: 50px;

  .park {
    width: $workspace;
    height: 800px;
    margin-top: 80px;
    position: relative;
    #title1 {
      position: absolute;
      left: -400px;
    }
    #map {
      position: absolute;
      top: 100px;
      max-width: 100%;
      filter: drop-shadow(0 0 4px #000);
    }
    ul {
      position: absolute;
      width: 288px;
      height: 340px;
      top: 650px;
      background-image: url('../assets/img/Notebook.png');
      margin-bottom: 300px;
      background-repeat: no-repeat;
      li {
        margin-left: 20px;
      }
      hr {
        margin-left: 20px;
        width: 120px;
        border: 1.5px solid #d1825b;
      }
    }
    h1 {
      margin: 40px 0 0 0;
      letter-spacing: 0.5em;
      color: $textcolor4;
      font-size: 28px;
    }
    h2 {
      margin-top: 5px;
      color: #2c6396;
      cursor: pointer;
    }
  }
  #noteMonster {
    margin-left: 210px;
    margin-top: -200px;
    width: 150px;
  }
  .realtime {
    width: $workspace;
    margin-top: 200px;
    margin-bottom: 700px;
    ul {
      top: 100px;
      width: 100%;
      display: flex;
      color: #fff;
      position: relative;
      justify-content: space-between;
      li {
        flex-direction: column;
        width: 300px;
        height: 200px;
        .tag {
          position: absolute;
          z-index: -2;
          width: 300px;
          top: -210px;
        }
      }
      #crowd {
        text-align: -webkit-center;

        h1 {
          background-image: url(/AmusementPark/src/assets/img/MonsterCrowd.png);
          background-repeat: no-repeat;
          width: 190px;
          height: 100px;

          padding-top: 60px;
          letter-spacing: 4px;
        }
        .crowdCon {
          background-color: #f5ba5b;
          margin-top: -50px;
          width: 300px;
          height: 400px;

          display: flex;
          flex-direction: column;
          justify-content: space-around;
          h2 {
            font-size: 30px;
            height: 70px;
          }
          p {
            font-size: 100px;
            // margin-top: 70px;
          }
        }
      }
      #weather {
        text-align: -webkit-center;
        h1 {
          background-image: url(/AmusementPark/src/assets/img/MonsterWeather.png);
          background-repeat: no-repeat;
          width: 190px;
          height: 100px;

          padding-top: 60px;
          letter-spacing: 4px;
        }
        .weatherCon {
          background-color: #d1825b;
          margin-top: -50px;
          width: 300px;
          height: 400px;

          display: flex;
          flex-direction: column;
          justify-content: space-around;
          h2 {
            font-size: 60px;
          }
          span {
            font-size: 100px;
            margin-bottom: 51px;
          }
        }
      }
      #Parking {
        text-align: -webkit-center;
        h1 {
          background-image: url(/AmusementPark/src/assets/img/MonsterParking.png);
          background-repeat: no-repeat;
          width: 190px;
          height: 100px;

          padding-top: 60px;
          letter-spacing: 4px;
        }
        .ParkingCon {
          background-color: #82bbb5;
          margin-top: -50px;
          width: 300px;
          height: 400px;

          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .ParkText {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            // padding-top: 40px;
            img {
              width: 70px;
              height: 70px;
            }
          }
          p {
            font-size: 100px;
            // margin-top: 70px;
          }
        }
      }
    }
  }
}
.bg {
  width: 90vw;
  // height: 90vw;
  // overflow: hidden;
  // margin-right: 200px;
  position: relative;
  pointer-events: none;
  // z-index: ;

  #svg-sun {
    width: 30%;
    position: absolute;
    // z-index: -3;
    top: 1200px;
    left: -130px;
    rotate: 25deg;
    opacity: 0.9;
  }
  #svg-cloud1 {
    width: 10%;
    position: absolute;
    // z-index: -3;
    top: 1500px;
    left: 650px;
  }
  #svg-cloud2 {
    width: 30%;
    position: absolute;
    // z-index: -3;
    top: 1700px;
    left: 100px;
    opacity: 0.9;
  }
  #svg-parking {
    width: 50%;
    position: absolute;
    // z-index: -3;
    top: 1700px;
    right: -175px;
    // opacity: 0.2;
  }
}
</style>
