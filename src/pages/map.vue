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

//地圖點擊後放大
const isZoomed = ref(false);
const isFirstClick = ref(true);
const displayOption = ref('');
// const zoomedImages = ref([
//   'FerrisWheel.png',
//   'RollerCoaster.png',
//   'Volcano.jpg',
// ]);
function toggleZoom(option) {
  displayOption.value = option;
  isZoomed.value = !isZoomed.value;

}


// var elementA = document.getElementsByClassName("a");
// var elementB = document.getElementsByClassName("b");
// // 添加点击事件监听器并处理函数
// elementA.addEventListener("click", function() {
//   // 添加类
//   elementB.classList.remove("zoomed");
//   this.classList.add("zoomed");
// });

// elementB.addEventListener("click", function() {
//   // 移除所有类
//   elementA.classList.remove("zoomed");
//   this.classList.add("zoomed");
// });

// 地圖放大鏡效果

const imageSrc = ref('src');
const magnifierWidth = ref(0);
const magnifierHeight = ref(0);

onMounted(() => {
  const magnifier = document.getElementById('magnifier');
  const imgContainer = document.getElementById('img-container');
  const img = document.getElementById('map');
  magnifierWidth.value = magnifier.offsetWidth;
  magnifierHeight.value = magnifier.offsetHeight;
  //滑鼠進入時放大鏡出現
  const handleMouseEnter = () => {
    magnifier.style.visibility = 'visible';
  };
  //滑鼠移出時放大鏡消失
  const handleMouseLeave = () => {
    magnifier.style.visibility = 'hidden';
  };
  //取得容器位置
  const containerOffset = imgContainer.getBoundingClientRect();
  //滑鼠移動時放大鏡跟著移
  const handleMouseMove = (e) => {
    // console.log(containerOffset);
    //計算滑鼠在容器內位置
    const mouseX = e.pageX - containerOffset.left;
    const mouseY = e.pageY - containerOffset.top;
    //讓放大鏡移到滑鼠所在位置，並調整置中
    const magnifierX = mouseX - magnifierWidth.value / 2;
    const magnifierY = mouseY - magnifierHeight.value / 2;
    //計算放大鏡背景圖位置
    const magBgX = -1 * (magnifierX * 2) - (magnifierWidth.value / 2);
    const magBgY = -1 * (magnifierY * 2) - (magnifierHeight.value / 2);
    //調整放大倍率
    const magBgWidth = img.width * 2;
    const magBgHeight = img.height * 2;
    // console.log(magBgHeight)
    // console.log();
    magnifier.style.left = `${magnifierX}px`;
    magnifier.style.top = `${magnifierY}px`;
    magnifier.style.backgroundPosition = `${magBgX}px ${magBgY}px`;
    magnifier.style.backgroundSize = `${magBgWidth}px ${magBgHeight}px`;
  };

  imgContainer.addEventListener('mouseenter', handleMouseEnter);
  imgContainer.addEventListener('mouseleave', handleMouseLeave);
  imgContainer.addEventListener('mousemove', handleMouseMove);

  // Cleanup event listeners on component unmount
  onUnmounted(() => {
    imgContainer.removeEventListener('mouseenter', handleMouseEnter);
    imgContainer.removeEventListener('mouseleave', handleMouseLeave);
    imgContainer.removeEventListener('mousemove', handleMouseMove);
  });
  return {
    imageSrc,
    magnifierWidth,
    magnifierHeight,
  };

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
      <div id="img-container">
        <img id="map" src="../assets/img/MAP.png" alt="" />
        <img class="facility a" src="../assets/img/FerrisWheel.png" alt="" v-show="displayOption === 'a'"
          @click="toggleZoom('a')" :class="{ 'zoomed': isZoomed }" />
        <img class="facility a" src="../assets/img/Volcano.png" alt="" v-show="displayOption === 'a'"
          @click="toggleZoom('a')" :class="{ 'zoomed': isZoomed }" />
        <img class="facility a" src="../assets/img/RollerCoaster.png" alt="" v-show="displayOption === 'a'"
          @click="toggleZoom('a')" :class="{ 'zoomed': isZoomed }" />
        <img class="facility b" src="../assets/img/Theater.png" alt="" v-show="displayOption === 'b'"
          @click="toggleZoom('b')" :class="{ 'zoomed': isZoomed }" />
        <img class="facility b" src="../assets/img/Theater2.png" alt="" v-show="displayOption === 'b'"
          @click="toggleZoom('b')" :class="{ 'zoomed': isZoomed }" />
        <img class="facility" src="../assets/img/Medical.png" alt="" v-show="displayOption === 'c'"
          @click="toggleZoom('c')" :class="{ 'zoomed': isZoomed }" />
        <div id="magnifier"></div>
      </div>
      <div style="display: flex">
        <ul>
          <li>
            <h1>園區服務</h1>
          </li>
          <li>
            <h2 @click="toggleZoom('a')">設施</h2>
          </li>
          <hr />
          <li>
            <h2 @click="toggleZoom('b')">劇場</h2>
          </li>
          <hr />
          <li>
            <h2 @click="toggleZoom('c')">醫療站</h2>
          </li>
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
      // top: 100px;
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
          background-image: url(@/assets/img/MonsterCrowd.png);
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
          background-image: url(@/assets/img/MonsterWeather.png);
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
          background-image: url(@/assets/img/MonsterParking.png);
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

//地圖
.facility {
  position: absolute;
  z-index: 1;
  width: 100%;
  transition: .5s;

}

.zoomed {
  width: 100%;
  height: auto;
  scale: 1.2;
  transition: .5s;
}

// 放大鏡
#img-container {
  position: relative;
  width: 100%;
  height: 720px;
  margin: 0 auto;
  overflow: hidden;
  // border: 1px solid #000;
}

#img-container img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

#magnifier {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  z-index: 5;
  background-repeat: no-repeat;
  cursor: none;
  visibility: hidden;
  background-image: url("../assets/img/MAP.png");
}
</style>
