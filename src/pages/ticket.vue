<script setup></script>

<template>

<!-- <side-menu id="side-menu"/> -->
<main>
  <summary>
      <TicketExhibitionTOR1 id="orderdate"/>

  </summary>
  <TicketOrder id="ticketprice"/>
  <!-- <ticketExpressPass id="ticketexpresspass"/> -->
  <!-- <TicketExhibitionTOR2 id="ticketselect"/> -->
  <!-- <ticket-express-pass/> -->
  <!-- <TicketBookingTOR id="show"/> -->
  <div class="btnbox">
    <btn
      class="btn"
      width="150"
      button-text-color="white"
      button-color="#D1825B"
      ><h3>清空</h3></btn
    >

    <btn
      class="btn"
      :width="350"
      button-text-color="white"
      button-color="#D1825B"
      ><h3>追加</h3></btn
    >
  </div>
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
  width: 300px;
  display: flex;
  float: right;
  justify-content: space-between;
  margin-bottom: 100px ;
  margin-right: 100px;
}

</style>