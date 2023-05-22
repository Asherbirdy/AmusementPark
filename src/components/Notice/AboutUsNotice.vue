<template>
  <main>
    <div class="about_us">
      <title-big1 class="title">關於我們</title-big1>
      <logo class="logo" />
      <div class="content">
        <p v-for="paragraph in paragraphs" :key="paragraph">
          {{ paragraph }}
          <br />
        </p>
        <img v-for="item in smallLogo" 
        :key="item.img" 
        :src="imgURL(item.img)" 
        :class="{'oran': item.img === 'OrangeMonster.png', 'pin': item.img === 'PinkMonster.png'}" />
      </div>
    </div>
  </main>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
const smallLogo = ref([
  { img: 'OrangeMonster.png' },
  { img: 'PinkMonster.png' },
]);
const paragraphs = [
  '怪奇遊樂園是一個充滿奇幻和冒險的地方，有令人驚喜和挑戰的遊戲和活動，如過山車、飛行器、高空彈跳、神秘迷宮等等，我們也提供許多奇幻表演，與家庭成員一同創造難忘的回憶，感受不一樣的刺激和樂趣。',
  '此外，你還可以與可愛的怪獸一起冒險，他們非常聰明和有趣，能夠幫助你解決許多問題和挑戰。',
  '在怪奇遊樂園，我們重視遊客的安全和樂趣，專業的服務讓您的旅程更加順暢和愉快。快進入怪奇冒險遊樂園，與朋友一起度過一個充滿歡樂和刺激的冒險之旅吧！'
]
</script>
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
    top: 253px;
    left: 326px;
    rotate: 3deg;
    opacity: 0.3;
    width: 600px;
  }
  .content {
    width: 900px;
    margin: 0 auto;
    margin-bottom: 100px;
  }
  .about_us p {
    font-size: 20px;
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
    animation: oran 10s ease infinite;
  }
  @keyframes oran {
  0% {
    left: 22px;
    top:  614px;
  }
  25% {
    left: 0px;
    top: 564px;
  }
  50% {
    left: -70px;
    top: 524px;
  }
  75% {
    left: -30px;
    top: 584px;
    rotate: 50deg;
  }
  100% {
    left: 22px;
    top:  614px;
  }
}
  .pin {
    width: 134px;
    position: absolute;
    top: 142px;
    right: 42px;
    animation: pin 10s ease infinite;
  }
  @keyframes pin {
  0% {
    right: 22px;
    top:  142px;
  }
  25% {
    right: 0px;
    top: 0px;
  }
  50% {
    right: -70px;
    top: 524px;
    rotate: -30deg;
  }
  75% {
    right: -10px;
    top: 384px;
  }
  100% {
    right: 22px;
    top:  142px;
  }
}
}
</style>
