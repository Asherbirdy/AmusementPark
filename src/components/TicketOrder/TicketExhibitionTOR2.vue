<script setup>

</script>
<template>
  <div class="orderAll">
    <div class="orderlist">
      <h4>成人票</h4>
      <div class="list">
        <el-icon size="30px"><CirclePlus /></el-icon>
        <div>0</div>
        <el-icon size="30px"><Remove /></el-icon>
      </div>
    </div>
    <div class="orderlist">
      <h4>學生票</h4>
      <div class="list">
        <el-icon size="30px"><CirclePlus /></el-icon>
        <div>0</div>
        <el-icon size="30px"><Remove /></el-icon>
      </div>
    </div>
    <div class="orderlist">
      <h4>兒童票</h4>
      <div class="list">
        <el-icon size="30px"><CirclePlus /></el-icon>
        <div>0</div>
        <el-icon size="30px"><Remove /></el-icon>
      </div>
    </div>
    <div class="orderlist">
      <h4>博愛票</h4>
      <div class="list">
        <el-icon size="30px"><CirclePlus /></el-icon>
        <div>0</div>
        <el-icon size="30px"><Remove /></el-icon>
      </div>
    </div>
    
  <ticket-express-pass/>


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
        width="150"
        button-text-color="white"
        button-color="#D1825B"
        ><h3>追加</h3></btn
      >
    </div>
  </div>

</template>

<style scoped lang="scss">
.orderAll {
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 8%;
  .orderlist {
    width: 637px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .list {
      display: flex;
      align-items: center;
      gap: 45px;
      div {
        font-size: 30px;
        color: #4576a3;
      }
    }
    h4 {
      font-size: 25px;
    }
  }
  .btnbox {

    margin-top: 30px;
    display: flex;
    gap: 200px;
    margin-left: 23%;
  }
}


</style>
