<script>
    export default {
    props: {
      titleColor: {
        type: String,
        default: '#CE5B5B',
      },
      svgColor: {
        type: String,
        default: '#FFE9DE',
      },
    },
    data() {
      return {
        internalTitleColor: this.titleColor,
        internalSvgColor: this.svgColor,
      };
    },
  };
</script>

<template>
      
  <div class="about_us">
    <main>
      <h1 :style="{ color: internalTitleColor }"><slot>關於我們</slot></h1>
      <titleBig_yellow :style="{ color: internalSvgColor }" class="svg" />
    </main>
    <logo class="about_logo"/>
    <p>
      怪奇遊樂園是一個充滿奇幻和冒險的地方，有令人驚喜和挑戰的遊戲和活動，如過山車、飛行器、高空彈跳、神秘迷宮等等，我們也提供許多奇幻表演，與家庭成員一同創造難忘的回憶，感受不一樣的刺激和樂趣。
      <br/>
    </p>
    <p>
      此外，你還可以與可愛的怪獸一起冒險，他們非常聰明和有趣，能夠幫助你解決許多問題和挑戰。
      <br/>
    </p>
    <p>
      在怪奇遊樂園，我們重視遊客的安全和樂趣，專業的服務讓您的旅程更加順暢和愉快。快進入怪奇冒險遊樂園，與朋友一起度過一個充滿歡樂和刺激的冒險之旅吧！
    </p>
    <img class="oran" src="../assets/img/OrangeMonster.png" alt="">
    <img class="pin" src="../assets/img/PinkMonster.png" alt="">
  </div>
  <div class="rides">
    <SvgMonster class="svgmonster"/>
    <main>
      <h1 :style="{ color: internalTitleColor }" class="sec"><slot>主題特色</slot></h1>
      <titleBig_pink :style="{ color: internalSvgColor }" class="svg" />
    </main>
    <ul>
      <li>
        <div>
          <img src="../assets/img/facility1.png" alt="">
          <h3>
            旋轉飛椅
            <el-icon><ArrowDownBold /></el-icon>
          </h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility2.png" alt="">
          <h3>
            雲霄飛車
            <el-icon><ArrowDownBold /></el-icon>
          </h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility3.png" alt="">
          <h3>
            摩天輪
            <el-icon><ArrowDownBold /></el-icon>
          </h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility4.png" alt="">
          <h3>
            探空飛梭
            <el-icon><ArrowDownBold /></el-icon>
          </h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility5.png" alt="">
          <h3>
            旋轉木馬
            <el-icon><ArrowDownBold /></el-icon>
          </h3>
        </div>
      </li>
      <li>
        <div>
          <img src="../assets/img/facility6.png" alt="">
          <h3>
            碰碰車
            <el-icon><ArrowDownBold /></el-icon>
          </h3>
        </div>
      </li>
    </ul>
  </div>
  <div class="exbi">
    <main>
      <h1 :style="{ color: internalTitleColor }"><slot>展覽特色</slot></h1>
      <titleBig_yellow :style="{ color: internalSvgColor }" class="svg" />
    </main>
    <ul>
      <li>
        <img src="../assets/img/performance4.png" />
        <h3>火焰跳躍者</h3>
      </li>
      <li>
        <img src="../assets/img/performance5.png" />
        <h3>魔幻舞台</h3>
      </li>
      <li>
        <img src="../assets/img/performance6.png" />
        <h3>夢幻演繹</h3>
      </li>
    </ul>
  </div>
  <div class="trans">
    <main>
      <h1 :style="{ color: internalTitleColor }" class="sec"><slot>交通資訊</slot></h1>
      <titleBig_pink :style="{ color: internalSvgColor }" class="svg" />
    </main>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.136653697438!2d121.5101873967896!3d25.0972351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aebf5a86da1b%3A0x5f56dfe454975847!2z6Ie65YyX5biC56uL5YWS56ul5paw5qiC5ZyS!5e0!3m2!1szh-TW!2stw!4v1683384751986!5m2!1szh-TW!2stw" width="1000" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <logo class="logo"/>
    <ul>
      <li>
        <SvgCar class="car"/>
        <h3>國道一號</h3>
        <p>臺北(重慶北路)交流道→百齡橋→承德路→基河路→兒童新樂園</p>
      </li>
      <li>
        <SvgSubway class="sub"/>
        <h3>捷運士林站</h3>
        <p>搭乘至臺北車站轉捷運淡水信義線至劍潭站、士林站或芝山站轉乘公車</p>
      </li>
      <li>
        <SvgBus class="bus" />
        <h3>捷運士林站</h3>
        <p>出口1→公車轉乘站255區、紅30、620、兒樂１號線(平日停駛)→兒童新樂園</p>
      </li>
    </ul>
  </div>
  <div class="open">
    <main>
      <h1 :style="{ color: internalTitleColor }"><slot>營業時間</slot></h1>
      <titleBig_yellow :style="{ color: internalSvgColor }" class="svg" />
    </main>
    <div class="table">
        <ul class="row1">
          <li>週日~週五</li>
          <li>09:00-18:00</li>
        </ul>
        <ul class="row2">
          <li>週六</li>
          <li>09:00-20:00</li>
      </ul> 
          <h3>最終入場時間為閉館前1小時，實際營業狀況請依官方公告為主。</h3>
    </div>
      <img src="../assets/img/castle.png" alt="">
  </div>
</template>

<style scoped lang="scss">
.about_us {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
main {
    width: $workspace;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 0;
  h1 {
    position: absolute;
    font-size: 50px;
    top: 175px;
    left: 530px;
    color: #CE5B5B;
  }
  .svg {
    color: #FFE9DE;
  }
  .sec{
    top: 135px;
    left: 545px;
  }
}
.about_logo{
  z-index: -1;
  opacity: 0.5;
  position: absolute;
  width: 700px;
  top: 284px;
  left: 274px;
}

.about_us p {
  font-size: 30px;
  width: 1000px;
  margin: 0px auto;
  margin-bottom: 50px;
  position: relative;
}
.oran{
  width: 100px;
  position: absolute;
  top: 584px;
  left: 0;
}
.pin{
  width: 134px;
  position: absolute;
  top: 263px;
  right: 0;
}
.rides {
  width: 1200px;
    margin: 0 auto;
    position: relative;
}
.svgmonster{
  position: absolute;
  top: 300px;
  left: 240px;
  z-index: -1;
}
.rides img{
  height: 250px;
  display: block;
}
.rides h3{
  font-size: 10px;
  color: #204C74;
  text-align: left;
  border: 1px solid #838383;
  padding: 10px 0;
  padding-left: 10px;
}
.rides ul{
  margin: 0 180px;
  display: flex;
  flex-wrap: wrap;
}
.rides li{
  margin: 40px 39px;
}
.rides li:nth-child(3) i{
  margin-left: 119px;
}
.rides li:nth-child(6) i{
  margin-left: 119px;
}
i{
  width: 15px;
  height: 15px;
  margin-left: 105px;
  color: #838383;
  border: 1px solid #838383;
  border-radius: 50%;
}
.exbi {
  width: 1200px;
  margin: 0 auto;
}
.exbi ul{
  margin: 0 50px;
  display: flex;
}
.exbi li{
  padding-left: 55px;
}
.exbi li:nth-child(1){
  transform: rotateY(54deg)
}
.exbi li:nth-child(3){
  transform: rotateY(-54deg)
}
.exbi img{
  display: block;
  margin-bottom: 30px;
}
.exbi h3{
  text-align: center;
}
.trans {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.logo{
  position: absolute;
  width: 300px;
  top: 1260px;
  left: 920px;
}
.trans iframe{
  margin: 20px 100px 25px;
}

.trans h3{
  font-size: 30px;
  text-align: center;
  color: #163767;
  padding-top: 50px;
  padding-bottom: 25px;
}
.trans p{
  font-size: 26px;
  width: 310px;
  margin: 0 auto;
  text-align: center;
  color: #5590D6;
  position: relative;
}
.trans ul{
  position: relative;
}
.trans .car{
  position: absolute;
  top: 120px;
  left: 200px;
}
.trans .sub{
  position: absolute;
  top: 340px;
  left: 200px;
}
.trans .bus{
  position: absolute;
  top: 560px;
  left: 200px;
}
.trans p::before{
  content: "";
  position: absolute;
  top: 125px;
  right: -83px;
  width: 500px;
  height: 3px;
  background-color: #D1825B;
}
.trans p::after{
  content: "";
  position: absolute;
  top: 117px;
  right: -85px;
  width: 24px;
  height: 3px;
  rotate: 39deg;
  background-color: #D1825B;
}
.open {
  width: 1200px;
  margin: 40px auto;
  position: relative;
}
.table {
  width: 600px;
  text-align: center;
  position: absolute;
  top: 480px;
  left: 265px;
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
  margin-bottom: 70px;
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
  position: absolute;
  top: 193px;
  left: -40px;
}
.open img {
  position: absolute;
  top: 320px;
  left: 710px;
  width: 385px;
  display: block;
}
</style>
