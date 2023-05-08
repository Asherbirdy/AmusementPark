<script setup>
</script>

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
        <div>
          <img src="../assets/img/facility1.png" alt="">
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility2.png" alt="">
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility3.png" alt="">
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility4.png" alt="">
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility5.png" alt="">
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility6.png" alt="">
          <h3>旋轉飛椅</h3>
        </div>
      </li>
    </ul>
  </div>
  <div class="exbi">
    <h1>展場資訊</h1>
    <swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
    slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
    coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
    <swiper-slide>
      <img src="../assets/img/performance1.png" />
    </swiper-slide>
    <h3>火焰跳躍者</h3>
    <swiper-slide>
      <img src="../assets/img/performance2.png" />
    </swiper-slide>
        <h3>夢幻演繹</h3>
        <swiper-slide>
      <img src="../assets/img/performance3.png" />
    </swiper-slide>
        <h3>魔幻舞台</h3>
  </swiper-container>
        

  </div>
  <div class="trans">
    <h1>交通資訊</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.136653697438!2d121.5101873967896!3d25.0972351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aebf5a86da1b%3A0x5f56dfe454975847!2z6Ie65YyX5biC56uL5YWS56ul5paw5qiC5ZyS!5e0!3m2!1szh-TW!2stw!4v1683384751986!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <ul>
      <li>
        <h3>國道一號</h3>
        <p>臺北(重慶北路)交流道→百齡橋→承德路→基河路→兒童新樂園</p>
      </li>
      <li>
        <h3>捷運士林站</h3>
        <p>搭乘至臺北車站轉捷運淡水信義線至劍潭站、士林站或芝山站轉乘公車</p>
      </li>
      <li>
        <h3>捷運士林站</h3>
        <p>出口1→公車轉乘站255區、紅30、620、兒樂１號線(平日停駛)→兒童新樂園</p>
      </li>
    </ul>
  </div>
  <div class="open">
    <h1>營運時間</h1>
    <ul class="table">
        <ul class="row1">
          <li>週日~週五</li>
          <li>09:00-18:00</li>
        </ul>
        <ul class="row2">
          <li>週六</li>
          <li>09:00-20:00</li>
      </ul>
        <li>   
          <h3>最終入場時間為閉館前1小時，實際營業狀況請依官方公告為主。</h3>
        </li>
        <li> 
          <img src="../assets/img/castle.png" alt="">
        </li>
    </ul>

  </div>
</template>

<style scoped lang="scss">
.about_us {
  width: 1080px;
  margin: 0 auto;
}
h1 {
  font-size: 30px;
  margin:170px 480px 35px;
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
.rides img{
  height: 250px;
}
.rides h3{
  font-size: 10px;
  color: #204C74;
  text-align: left;
  margin: 10px auto;
}
.rides ul{
  margin: 0 120px;
  display: flex;
  flex-wrap: wrap;
}
.rides div{
  padding: 0px 35px;
  flex-wrap: wrap;
}

.exbi {
  width: 1080px;
  margin: 0 auto;
}
swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
    }

    swiper-slide img {
      display: block;
    }
.trans {
  width: 1080px;
  margin: 0 auto;
}
.trans iframe{
  margin: 20px 250px 25px;
}
.trans h3{
  text-align: center;
  color: #163767;
  padding: 30px;
}
.trans p{
  width: 200px;
  text-align: center;
  color: #5590D6;
  position: relative;
}
.trans p::before{
  content: "";
    position: absolute;
    top: 80px;
    right: -50px;
    width: 300px;
    height: 3px;
    background-color: #D1825B;
}
.trans p::after{
  content: "";
    position: absolute;
    top: 72px;
    right: -54px;
    width: 24px;
    height: 3px;
    rotate: 39deg;
    background-color: #D1825B;
}
.open {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.table {
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
.open img {
  width: 100px;
}
</style>
