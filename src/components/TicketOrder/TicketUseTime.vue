<script setup>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
const calendar = ref();


const emit = defineEmits(['selectDate']);

const selectDate = val => {
  const selectedDate = calendar.value.selectDate(val);
  console.log(calendar.value.selectDate(val))
};

// 将英文月份转换为中文月份 且emit到父層
const getChineseMonth = date => {
  const chineseMonth = dayjs(date).locale('zh-cn').format('YYYY MMMM');
    console.log(chineseMonth);
  return chineseMonth;
};




</script>
<template>
  <!-- <el-icon>
    <Calendar/>
  </el-icon> -->
  <nav>
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
  </nav>
</template>

<style scoped lang="scss">
nav{
  width: 1000px;
  .calendarUI {
    margin-left: 250px;
    line-height: 40px;
    

    button {
      cursor: pointer;
      height: 40px;
      width: 40px;
      background-color: rgb(255, 255, 255);
      font-size: 20;
      color: black;
      line-height: 20px;
    }
    button:active {
      background-color: gray;
    }
  }  
}


</style>