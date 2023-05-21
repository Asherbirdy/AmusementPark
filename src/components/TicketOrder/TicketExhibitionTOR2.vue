<script setup>

</script>
<template>
  <ul class="orderAll">
    <li class="orderlist">
      <h4>成人票</h4>
      <div class="list">
        <el-input-number 
              v-model="num" width:10px
              :min="0"
              @change="handleChange" class="count"
            />
      </div>
    </li>
    <li class="orderlist">
      <h4>學生票</h4>
      <div class="list">
        <el-icon size="30px"><CirclePlus /></el-icon>
        <div>0</div>
        <el-icon size="30px"><Remove /></el-icon>
      </div>
    </li>
    <li class="orderlist">
      <h4>兒童票</h4>
      <div class="list">
        <el-icon size="30px"><CirclePlus /></el-icon>
        <div>0</div>
        <el-icon size="30px"><Remove /></el-icon>
      </div>
    </li>
    <li class="orderlist">
      <h4>博愛票</h4>
      <div class="list">
        <el-icon size="30px"><CirclePlus /></el-icon>
        <div>0</div>
        <el-icon size="30px"><Remove /></el-icon>
      </div>
    </li>
  </ul>

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
  

</template>
<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>
<style scoped lang="scss">
.orderAll {
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px auto;
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
      font-size: 24px;
    }
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
  margin-right: 300px;
}
</style>
