<template>
    <el-dialog :title="ticketType" width="30%" center>
        <span class="tickets">
            <p>票數：</p>
            <el-input-number v-model="props.ticketAmount" :min="1" @change="handleChange" />
        </span>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" :disabled="props.ticketAmount === 0 ? true : false" @click="() => {
                    fixTickets();
                    $emit('close-modal');
                }
                    ">修改</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup>
import axios from 'axios';

// 外部資料導入資訊
const props = defineProps({
    ticketType: String, //時間和票型。
    ticketAmount: Number, // 票數
    ticketPrice: Number, // 票的價格
    ticketID: Number,
    orderID: Number,
});

let ticketNum = ref(0);

const handleChange = value => {
    ticketNum.value = value;
};

// 退票按鈕函式
const fixTickets = () => {
    console.log(props);
    console.log('修改票數', ticketNum.value);
};
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}

.tickets {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>
