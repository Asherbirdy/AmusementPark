<template>
  <el-calendar ref="calendar">
    <template #header="{ date }">
      <span>Custom header content</span>
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

<script lang="ts" setup>
import { ref } from 'vue';

const calendar = ref();
const selectDate = (val: string) => {
  calendar.value.selectDate(val);
};

// 将英文月份转换为中文月份
const getChineseMonth = date => {
  const months = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ];
  return months[date.getMonth()];
};
</script>
