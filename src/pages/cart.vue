<template>
  <!-- <article>
    <div class="CartStep">
      <div class="monster">
        <monsterCartFillBlue>1</monsterCartFillBlue>
        <h3>購物車</h3>
      </div>
      <hr width="100" style="border: 3px dashed #163767" />
      <div class="monster">
        <monster-cart-Fill-White>2</monster-cart-Fill-White>
        <h3>填寫資料</h3>
      </div>
      <hr width="100" style="border: 3px dashed #163767" />
      <div class="monster">
        <monster-cart-Fill-White>3</monster-cart-Fill-White>
        <h3>訂購完成</h3>
      </div>
    </div>
  </article> -->
<cart-inside/>
</template>

<script setup>
import axios from 'axios';

axios.get('/api/PDO/frontEnd/cart/cartSelect.php')
  .then(response => {

    console.log(response.data);
  })
  .catch(error => {
  
    console.error(error);
  });

</script>

<style lang="scss" scoped>
main {
  margin-bottom: 100px;
}
//購物車步驟
article {
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
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
    .hrNone {
      color: white;
    }
  }
}


</style>
