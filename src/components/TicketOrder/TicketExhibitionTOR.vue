<script setup>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
const calendar = ref();
const selectDate = val => {
  calendar.value.selectDate(val);
};

// 将英文月份转换为中文月份
const getChineseMonth = date => {
  const chineseMonth = dayjs(date).locale('zh-cn').format('YYYY MMMM');
  console.log(chineseMonth);
  return chineseMonth;
};
</script>
<template>
  <el-calendar class="calendarUI" ref="calendar">
    <template #header="{ date }">
      <span>{{ getChineseMonth(date) }}</span>
      <el-button-group>
        <el-button size="small" @click="selectDate('prev-month')">
          上個月
        </el-button>
        <el-button size="small" @click="selectDate('today')">今天</el-button>
        <el-button size="small" @click="selectDate('next-month')">
          下個月
        </el-button>
      </el-button-group>
    </template>
  </el-calendar>
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
  </div>
  <div class="btnbox">
    <btn
      class="btn"
      width="150"
      button-text-color="white"
      button-color="#D1825B"
      >取消</btn
    >

    <btn
      class="btn"
      width="150"
      button-text-color="white"
      button-color="#D1825B"
      >取消</btn
    >
  </div>
</template>

<style scoped lang="scss">
.calendarUI {
  width: 900px;

  button {
    cursor: pointer;
    height: 40px;
    width: 100px;
    background-color: rgb(212, 212, 212);
    font-size: 20;
    color: black;
  }
  button:active {
    background-color: $textcolor2;
  }
}

.orderAll {
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
}

.btnbox {
  margin-top: 30px;
  display: flex;
  gap: 200px;
  margin-left: 23%;
}
</style>
