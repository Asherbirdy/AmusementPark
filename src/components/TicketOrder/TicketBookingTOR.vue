<template>
  <div>
    <div class="imgbox">
      <img src="../../assets/img/performance1.png" />
      <h3>夢幻演繹</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <div class="imgbox">
      <img src="../../assets/img/performance1.png" />
      <h3>夢幻演繹</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <div class="imgbox">
      <img src="../../assets/img/performance1.png" />
      <h3>夢幻演繹</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <div class="imgbox">
      <img src="../../assets/img/performance1.png" />
      <h3>夢幻演繹</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <div class="imgbox">
      <img src="../../assets/img/performance1.png" />
      <h3>夢幻演繹</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
    <div class="imgbox">
      <img src="../../assets/img/performance1.png" />
      <h3>夢幻演繹</h3>
      <div class="overlay">
        <span>表演预约</span>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
div {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  .imgbox {
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    gap: 20px;
    &:hover {
      filter: opacity(80%);
    }
    &:hover .overlay {
      visibility: visible;
    }
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;

    span {
      font-size: 18px;
      color: black;
      text-align: center;
    }
  }
}
</style>
