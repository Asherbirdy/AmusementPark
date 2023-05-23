<script setup></script>

<template>

<!-- <side-menu id="side-menu"/> -->
<main>
  <ticket-use-time id="orderdate"/>
  <ticket-order id="ticketprice"/>
  <!-- <ticketExpressPass id="ticketexpresspass"/> -->
  <!-- <TicketExhibitionTOR2 id="ticketselect"/> -->
  <!-- <ticket-express-pass/> -->
  <!-- <TicketBookingTOR id="show"/> -->
  <div class="btnbox">
    <btn class="btn" button-text-color="white" button-color="#D1825B">
      <h3>清空</h3>
    </btn>
    <btn :style="{ width: '150px'}" class="btn" button-text-color="white" button-color="#D1825B">
      <h3>加入購物車</h3>
    </btn>
    <router-link to="/cart">
      <btn class="btn" button-text-color="white" button-color="#D1825B">
        <h3>立即購買</h3>
      </btn>
    </router-link>
  </div>
</main>
<top />
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
.btnbox {
    // margin-top: 30px;
    // display: flex;
    // gap: 200px;
    // margin-left: 23%;
  width: 400px;
  display: flex;
  float: right;
  justify-content: space-between;
  margin-bottom: 100px ;
  margin-right: 60px;
}

</style>