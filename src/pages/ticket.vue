<script setup></script>

<template>
<main>
  <!-- 日曆： -->
  <ticket-use-time id="orderdate"/>
  <!-- 訂票頁面 -->
  <ticket-order id="ticketprice"/>
  <!-- 訂票 Form -->
  <!-- <div class="btnbox">
    <btn
      class="btn"
      button-color="#D1825B"
      button-text-color="white"
    >
      <h3>清空</h3>
    </btn>
   <btn
      :style="{ width: '150px'}"
      class="btn"
      button-color="#D1825B"
      button-text-color="white"
    >
      <h3>加入購物車</h3>
    </btn>
    <router-link to="/cart">
     <btn
        class="btn"
        button-color="#D1825B"
        button-text-color="white"
      >
        <h3>立即購買</h3>
      </btn>
    </router-link>
  </div> -->
</main>

</template>

<style scoped lang="scss">
// #side-menu{
//   display: none;
// }
main{
  #orderdate{
    // width: 900px;
    margin: 0 auto;
    // height: 400px;
    
  }
  #ticketprice,#ticketexpresspass{
    margin: 40px auto;
  }

  #ticketselect{
    // width: 900px;
    padding: 40px 0;
    margin: 0 auto;
  }
}


</style>