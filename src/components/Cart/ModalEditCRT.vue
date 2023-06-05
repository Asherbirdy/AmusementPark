<template>
    <el-dialog :title="ticketType" width="30%" center>
        <span class="tickets">
            <p>票數：</p>
            <el-input-number v-model="props.ticketAmount" :min="1" @change="handleChange" />
        </span>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="() => {
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
// 監聽目前退票數量：
const tickets = ref(0);

// 帳號名稱 / 票型  / 時間  / 快速通關  / 退票數量：
let fixTicketsData = reactive({
    ticketType: '',
    ticketDate: '',
    fastPassFacility: '',
    fixTicketsAmount: 0
});


fixTicketsData.fixTicketsAmount = props.ticketAmount;




// 外部資料導入資訊
const props = defineProps({
    ticketType: String,
    ticketDate: String,
    ticketAmount: Number,
    fastPassFacility: Number,
});



let ticketNum = ref(0);
const handleChange = value => {
    console.log(value);
    ticketNum.value = value;
};




// 退票按鈕函式
const fixTickets = () => {
    console.log(ticketNum.value);
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
