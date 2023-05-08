<script setup></script>

<template>
  <div class="about_us">
    <h1>關於我們</h1>
    <IconCommunity />
    <IconSupport />
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
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <h3>旋轉飛椅</h3>
        </div>
      </li>
      <li>
        <div>
          <h3>旋轉飛椅</h3>
        </div>
      </li>
    </ul>
  </div>
  <div class="exbi">
    <h1>展場資訊</h1>
    <ul>
      <li>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error voluptatum culpa? Est facilis quos nostrum voluptate repellat? Et ullam nemo perspiciatis? Cum beatae recusandae voluptatem expedita vitae! Animi, et.</div>
        <h3>火焰跳躍者</h3>
      </li>
      <li>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error voluptatum culpa? Est facilis quos nostrum voluptate repellat? Et ullam nemo perspiciatis? Cum beatae recusandae voluptatem expedita vitae! Animi, et.</div>
        <h3>夢幻演繹</h3>
      </li>
      <li>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error voluptatum culpa? Est facilis quos nostrum voluptate repellat? Et ullam nemo perspiciatis? Cum beatae recusandae voluptatem expedita vitae! Animi, et.</div>
        <h3>魔幻舞台</h3>
      </li>
    </ul>

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
  margin: 0 auto;
}
.rides h1{
  margin: 50px 660px;
}
.rides ul{
  width: 500px;
  margin: 0 485px;
  display: flex;
  flex-wrap: wrap;
}
.rides div{
  padding: 0px 35px;
  flex-wrap: wrap;
  background-color: #985d5d;
}
.exbi {
  width: 1080px;
  margin: 0 auto;
  position: relative;
}
.exbi ul{
  margin: 0 79px;
  display: flex;
}
.exbi div{
  padding: 0 59px;
  width: 200px;
  height: 1000px;
  background-color: #a21a1a;
}
.exbi li:nth-child(1) h3{
  position: absolute;
  top: 900px;
  left: 175px;
  rotate: 330deg;
}
.exbi li:nth-child(2) h3{
  position: absolute;
  top: 860px;
  left: 500px;
}
.exbi li:nth-child(3) h3{
  position: absolute;
  top: 900px;
  left: 830px;
  rotate: 35deg;
}
.trans {
  width: 1080px;
  margin: 0 auto;
}
.trans h1{
  margin: 50px 500px 25px;
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
