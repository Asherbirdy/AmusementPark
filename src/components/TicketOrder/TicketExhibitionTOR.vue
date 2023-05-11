<template>
  <el-calendar ref="calendar">
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
