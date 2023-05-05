<script setup></script>

<template>
  <div class="about_us">
    <h1>關於我們</h1>
    <p>
      怪奇遊樂園是一個充滿奇幻和冒險的地方，有令人驚喜和挑戰的遊戲和活動，如過山車、飛行器、高空彈跳、神秘迷宮等等，我們也提供許多奇幻表演，與家庭成員一同創造難忘的回憶，感受不一樣的刺激和樂趣。此外，你還可以與可愛的怪獸一起冒險，他們非常聰明和有趣，能夠幫助你解決許多問題和挑戰。
      在怪奇遊樂園，我們重視遊客的安全和樂趣，專業的服務讓您的旅程更加順暢和愉快。快進入怪奇冒險遊樂園，與朋友一起度過一個充滿歡樂和刺激的冒險之旅吧！
    </p>
  </div>
  <div class="rides">
    <h1>主題特色</h1>
    <ul>
      <li>
        <img src="" alt="" />
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="exbi">
    <h1>展場資訊</h1>
    <ul>
      <li>
        <img src="" alt="" />
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="exbi">
    <h1>展場資訊</h1>
    <ul>
      <li>
        <img src="" alt="" />
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="trans">
    <h1>交通資訊</h1>
    <ul>
      <li>
        <img src="" alt="" />
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="open">
    <h1>營運時間</h1>
    <div class="table">
      <ul class="row1">
        <li>週日~週五</li>
        <li>09:00-18:00</li>
      </ul>
      <ul class="row2">
        <li>週六</li>
        <li>09:00-20:00</li>
      </ul>
    </div>
    <h3>最終入場時間為閉館前1小時，實際營業狀況請依官方公告為主。</h3>
  </div>
</template>

<style scoped lang="scss">
.about_us {
  width: 1080px;
  margin: 0 auto;
}
h1 {
  font-size: 20px;
  margin: 50px 500px;
}
p {
  font-size: 16px;
  width: 900px;
  margin: 0 auto;
}

.rides {
  width: 1080px;
  margin: 0 auto;
}

.exbi {
  width: 1080px;
  margin: 0 auto;
}
.trans {
  width: 1080px;
  margin: 0 auto;
}
.open {
  width: 1080px;
  margin: 0 auto;
}
.table {
  margin-left: 110px;
  text-align: center;
  width: 353px;
  display: flex;
  flex-direction: column;
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
}
.row1 li:nth-child(1) {
  background-color: #d1825b;
  padding: 25px 50px;
  border-bottom: 1px solid #f9f3e4;
}
.row2 li:nth-child(1) {
  background-color: #d1825b;
  padding: 25px 70px;
}
.row1 li:nth-child(2) {
  background-color: #f9f3e4;
  padding: 25px 50px;
  border-bottom: 1px solid #d1825b;
}
.row2 li:nth-child(2) {
  background-color: #f9f3e4;
  padding: 25px 50px;
}
.open h3 {
  font-size: 16px;
  padding: 80px 60px;
}
</style>
