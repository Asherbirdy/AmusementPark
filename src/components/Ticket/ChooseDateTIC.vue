<template>
    <div class="demo-date-picker">
        <div class="block">
            <el-date-picker v-model="date" type="date" placeholder="選擇訂票日期" :disabled-date="disableDate"
                @change="emitDate" />
        </div>
    </div>
</template>

<script setup>
import dayjs from 'dayjs';
const date = ref('');

const formattedDate = computed(() => {
    if (date.value) {
        return dayjs(date.value).format('YYYY-MM-DD');
    }
    return '';
});

// 傳到父層的 Emit

const emitDate = () => {
    emit('date-selected', formattedDate.value);
};
const emit = defineEmits(['date-selected']);

// 禁用日期逻辑
const disableDate = (time) => {
    const today = dayjs().startOf('day');
    const selectedDate = dayjs(time).startOf('day');
    return selectedDate.isBefore(today); // 禁用今天以前的日期
};
</script>

<style scoped>
/*
.demo-date-picker {
}
*/
</style>
