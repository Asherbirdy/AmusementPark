<template lang="">
  <div class="Top">
    <div class="CartStep">
      <div class="monster">
        <monster-cart-Fill-White>1</monster-cart-Fill-White>
        <h3>購物車</h3>
      </div>
      <hr width="100" style="border: 3px dashed #ffffff" />
      <div class="monster">
        <monster-cart-Fill-White>2</monster-cart-Fill-White>
        <h3>填寫資料</h3>
      </div>
      <hr width="100" style="border: 3px dashed #d1825b" />
      <div class="monster">
        <monsterCartFillBlue>3</monsterCartFillBlue>
        <h3>訂購完成</h3>
      </div>
    </div>
  </div>
  <div class="content">
    <p>謝謝您!您的訂單已經成立!</p>
    <ul class="order">
      <li>
        訂單編號  202304250001
      </li>
      <li>
        訂單確認信已經發送至 xxxxxx1234@gmail.com
      </li>
      <li>
        將立即為您安排出貨   Thank You!
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
//共同樣式
main {
  display: flex;
  justify-content: center;
}
//購物車步驟
.Top {
  display: flex;
  justify-content: space-evenly;
  margin: 150px auto 50px;
  .CartStep {
    display: flex;
    align-items: center;
    .monster {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        margin-top: 20px;
        color: #163767;
      }
    }
  }
}
.content{
  margin: 315px 430px;
  width: 470px;
}
.content p{
  font-size: 40px;
}
.order li{
  font-size: 20px;
  margin-top: 30px;
}
</style>
