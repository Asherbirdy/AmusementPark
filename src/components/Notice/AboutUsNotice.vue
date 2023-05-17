<script setup></script>
<template>
  <main>
    <div class="about_us">
      <title-big1 class="title">關於我們</title-big1>
      <logo class="logo" />
      <div class="content">
        <p>
          怪奇遊樂園是一個充滿奇幻和冒險的地方，有令人驚喜和挑戰的遊戲和活動，如過山車、飛行器、高空彈跳、神秘迷宮等等，我們也提供許多奇幻表演，與家庭成員一同創造難忘的回憶，感受不一樣的刺激和樂趣。
          <br />
        </p>
        <p>
          此外，你還可以與可愛的怪獸一起冒險，他們非常聰明和有趣，能夠幫助你解決許多問題和挑戰。
          <br />
        </p>
        <p>
          在怪奇遊樂園，我們重視遊客的安全和樂趣，專業的服務讓您的旅程更加順暢和愉快。快進入怪奇冒險遊樂園，與朋友一起度過一個充滿歡樂和刺激的冒險之旅吧！
        </p>
        <img class="oran" src="@/assets/img/OrangeMonster.png" alt="" />
        <img class="pin" src="@/assets/img/PinkMonster.png" alt="" />
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  width: $workspace;
  .about_us {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .title {
    margin-bottom: 33px;
  }
  .logo {
    position: absolute;
    top: 193px;
    left: 226px;
    rotate: 3deg;
    opacity: 0.3;
    width: 800px;
  }
  .content {
    width: 900px;
    margin: 0 auto;
    margin-bottom: 100px;
  }
  .about_us p {
    font-size: 30px;
    padding-bottom: 50px;
    position: relative;
    font-size: 30px;
    line-height: 50px;
  }

  .oran {
    width: 100px;
    position: absolute;
    top: 614px;
    left: 22px;
  }
  .pin {
    width: 134px;
    position: absolute;
    top: 142px;
    right: 42px;
  }
}
</style>
