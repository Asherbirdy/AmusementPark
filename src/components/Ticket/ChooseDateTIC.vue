<template>
  <div class="demo-date-picker">
    <div class="block">
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="選擇訂票日期"
        :disabled-date="disableDate"
        @change="emitDate"
      />
    </div>
  </div>
</template>
<script setup>
import dayjs from 'dayjs';

// 時間：
const date = ref('');

// 轉換世間格式
const formattedDate = computed(() => {
  if (date.value) {
    return dayjs(date.value).format('YYYY-MM-DD');
  }
  return '';
});

// 將時間傳到父組件的 Emit
const emitDate = () => {
  emit('date-selected', formattedDate.value);
};

// 定義emit：
const emit = defineEmits(['date-selected']);

// 禁用日期邏輯：
const disableDate = time => {
    const today = dayjs().startOf('day');
    const selectedDate = dayjs(time).startOf('day');
    const maxAllowedDate = today.add(31, 'day').startOf('day'); // 取得今天後7天的日期
    return selectedDate.isBefore(today) || selectedDate.isAfter(maxAllowedDate);
};

</script>

<style scoped>
/*
//
*/
</style>
