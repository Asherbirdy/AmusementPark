<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
const rides = ref([
  { image: 'facility1.png' },
  { image: 'facility5.png' },
  { image: 'facility3.png' },
]);
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
        style="width: 700px; height: 600px; z-index: 0;"
        arrow="never"
        autoplay="true"
        :interval="1000"
      >
        <el-carousel-item v-for="item in rides" :key="item" style="width: 800px; height: 600px;">
          <img :src="imgURL(item.image)" alt=""  />
        </el-carousel-item>
      </el-carousel>
      <div class="rightbox">
        <div class="tabs">
          <h3 class="focus">最新消息</h3>
          <h3>設施維護</h3>
          <h3>優惠活動</h3>
        </div>
        <div class="infobox">
          <div class="output">
            <p>2023/05/23</p>
            <p>🐕‍🦺寵物入園規定公告</p>
            <el-icon><ArrowRight /></el-icon>
          </div>
          <div class="output">
            <p>2023/03/06</p>
            <p>租借辦法-嬰兒車/輪椅/行動電源</p>
            <el-icon><ArrowRight /></el-icon>
          </div>
          <div class="output">
            <p>2023/02/24</p>
            <p>觀光旅遊安全錦囊-觀光遊樂業安全遊</p>
            <el-icon><ArrowRight /></el-icon>
          </div>
          <div class="output">
            <p>2023/01/20</p>
            <p>112年2月餐廳店休公告</p>
            <el-icon><ArrowRight /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
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
            background-color: #d1a25b;
            height: 60px;
          }
        }
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
