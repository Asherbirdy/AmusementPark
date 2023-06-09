<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
const rides = ref([
  { image: 'facility1.png' },
  { image: 'facility5.png' },
  { image: 'facility3.png' },
]);
import { ref, computed } from 'vue';

const tabs = ['最新消息', '設施維護', '優惠活動'];
const activeTab = ref(tabs[0]);

const items = [
  {
    date: '2023/05/23',
    title: '🐕‍🦺寵物入園規定公告',
  },
  {
    date: '2023/03/06',
    title: '租借辦法-嬰兒車/輪椅/行動電源',
  },
  {
    date: '2023/02/24',
    title: '觀光旅遊安全錦囊-觀光遊樂業安全遊',
  },
  {
    date: '2023/01/20',
    title: '112年2月餐廳店休公告',
  },
  {
    date: '2023/05/23',
    title: '旋轉飛椅，維護完成',
  },
  {
    date: '2023/04/06',
    title: '碰碰車全面升級',
  },
  {
    date: '2023/03/10',
    title: '探空飛梭竣工',
  },
  {
    date: '2023/02/10',
    title: '愛情摩天輪即將降臨，敬請期待情人節特別節目',
  },
  {
    date: '2023/05/20',
    title: '身分證有 "5、2、0"者免費',
  },
  {
    date: '2023/04/01',
    title: '兒童節來臨，凡身高133公分以下兒童皆免費',
  },
  {
    date: '2023/03/08',
    title: '38婦女節，成人女性半價，長者女性免費',
  },
  {
    date: '2023/02/14',
    title: '情人節來臨，每對情人門票買一送一',
  },
];

const filteredItems = computed(() => {
  if (activeTab.value === '最新消息') {
    return items.slice(0, 4);
  } else if (activeTab.value === '設施維護') {
    return items.slice(4, 8);
  } else if (activeTab.value === '優惠活動') {
    return items.slice(8);
  } else {
    return [];
  }
});
</script>

<template>
  <main>
    <!-- 左邊輪播圖 -->
    <div class="wrapper">
      <div class="bg">
        <svg-trumpet id="svg-trumpet" />
        <svg-wrench id="svg-wrench" />
        <svg-news id="svg-news" />
        <svg-screwdriver id="svg-screwdriver" />
      </div>

      <el-carousel
        class="leftbox"
        indicator-position="outside"
        indicator="true"
        style="width: 700px; height: 900px; z-index: 0"
        loop="true"
        arrow="never"
        autoplay="true"
        :interval="3000"
      >
        <el-carousel-item
          v-for="(item, index) in rides"
          :key="index"
          style="width: 700px"
        >
          <img :src="imgURL(item.image)" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div class="rightbox">
        <div class="tabs">
          <h3
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ focus: activeTab === tab }"
            @click="activeTab = tab"
          >
            {{ tab }}
          </h3>
        </div>
        <div class="infobox">
          <div
            v-for="(item, index) in filteredItems"
            :key="index"
            class="output"
          >
            <p>{{ item.date }}</p>
            <p>{{ item.title }}</p>
            <el-icon><ArrowRight /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.leftbox .el-carousel__container {
  height: 500px;
  margin-left: 20px;
}
.el-carousel__button {
  background-color: #e1530c !important;
  height: 20px !important;
  width: 20px !important;
  border-radius: 50%;
}
</style>
<style lang="scss" scoped>
//sd
main {
  // background-color: #fffdf8;
  .bg {
    // margin-right: 200px;
    position: relative;
    // pointer-events: none;
    #svg-trumpet {
      height: 50%;
      position: absolute;
      z-index: -3;
      top: -150px;
      left: -340px;
    }
    #svg-wrench {
      height: 50%;
      position: absolute;
      z-index: -3;
      top: -60px;
      right: -1400px;
      rotate: 25deg;
    }
    #svg-news {
      height: 80%;
      position: absolute;
      z-index: -3;
      top: 340px;
      left: -500px;
    }
    #svg-screwdriver {
      height: 50%;
      position: absolute;
      z-index: -3;
      top: 300px;
      right: -1450px;
      rotate: 25deg;
    }
  }
  .wrapper {
    width: 1200px;
    height: 500px;
    box-sizing: border-box;
    display: flex;
    gap: 10px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 120px;

    .rightbox {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .tabs {
        // margin-top: 70px;
        display: flex;
        align-items: end;
        h3 {
          width: 100%;
          color: white;
          text-align: center;
          line-height: 60px;

          &:nth-child(1) {
            background-color: rgb(199, 120, 23);
            height: 60px;
          }
          &:nth-child(2) {
            background-color: #82bbb5;
            height: 60px;
          }
          &:nth-child(3) {
            background-color: rgb(199, 120, 23);
            height: 60px;
          }
        }
      }
      .focus {
        transform: scale(1.1, 1.2);
        transition-duration: 1s;
        transition-timing-function: ease;
      }
      .focus {
        position: relative;
      }
      .focus::before {
        content: '';
        position: absolute;
        bottom: -10px;
        width: 0;
        height: 0;
      }

      .focus::before {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid rgb(199, 120, 23);
        left: 50%;
        transform: translateX(-50%);
      }
      .focus:nth-child(2)::before {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #82bbb5;
        left: 50%;
        transform: translateX(-50%);
      }
      .infobox {
        .output {
          padding: 20px 0;
          display: flex;
          align-items: center;
          // justify-content: space-evenly;
          width: 100%;
          gap: 30px;
          border-bottom: 1px solid #d1825b;
          p {
            padding: 20px 0;
            margin-left: 70px;

            &:nth-child(1) {
              padding: 5px 10px;
              background-color: #d1825b;
              color: white;
              border-radius: 5px;

              margin-left: 50px;
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
