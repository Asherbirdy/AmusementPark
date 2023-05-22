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
</template>

<style scoped lang="scss">
.calendarUI {
  width: 900px;

  button {
    cursor: pointer;
    height: 40px;
    width: 100px;
    background-color: rgb(255, 255, 255);
    font-size: 20;
    color: black;
  }
  button:active {
    background-color: gray;
  }
}
</style>