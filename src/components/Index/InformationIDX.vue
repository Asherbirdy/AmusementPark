<script setup></script>
<template>
  <main>
    <!-- 左邊輪播圖 -->
    <div class="wrapper">
      <div class="leftbox">
        <div><img src="@/assets/img/facility1.png" /></div>
        <div class="dotbox">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="rightbox">
        <div class="tabs">
          <h3 class="focus">最新消息</h3>
          <h3>設施維護</h3>
          <h3>優惠活動</h3>
        </div>
        <div class="infobox">
          <div class="output">
            <p>2023/05/23</p>
            <p>XXXXXXXXXXXXXXXX</p>
            <el-icon><ArrowRight /></el-icon>
          </div>
          <div class="output">
            <p>2023/05/23</p>
            <p>XXXXXXXXXXXXXXXX</p>
            <el-icon><ArrowRight /></el-icon>
          </div>
          <div class="output">
            <p>2023/05/23</p>
            <p>XXXXXXXXXXXXXXXX</p>
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
  background-color: #fffdf8;
  .wrapper {
    width: 900px;
    box-sizing: border-box;
    display: flex;

    gap: 10px;
    margin: 0 auto;
    margin-bottom: 30px;
    .leftbox {
      .dotbox {
        display: flex;
        gap: 10px;
        justify-content: center;
        span {
          width: 10px;
          height: 10px;
          background-color: #d1825b;
          border-radius: 50%;
          position: relative;
          margin: 10px 0;
        }
      }
    }
    .rightbox {
      width: 100%;
      display: flex;
      flex-direction: column;
      .tabs {
        margin-top: 70px;
        display: flex;
        align-items: end;
        h3 {
          width: 100%;
          color: white;
          text-align: center;
          line-height: 60px;

          &:nth-child(1) {
            background-color: rgb(199, 120, 23);
            padding: 5px 0;
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
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 100%;
          gap: 30px;
          border-bottom: 1px solid #d1825b;
          p {
            padding: 20px 0;
            &:nth-child(1) {
              padding: 5px 10px;
              background-color: #d1825b;
              color: white;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
