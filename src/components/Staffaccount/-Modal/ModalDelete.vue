<template>
  <el-dialog title="刪除員工" width="30%" center>
    <span>
      <p>員工編號:{{id}}</p>
      <p>員工帳號：{{ account }}</p>
      <p>權限：{{ permissions }}</p>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="
            () => {
              refundTickets();
              $emit('close-modal');
            }
          "
        >
          刪除
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import axios from 'axios';
// 監聽目前退票數量：
const tickets = ref(0);

// 帳號名稱 / 票型  / 時間  / 快速通關  / 退票數量：
let refundTicketsData = reactive({
  id:0,
  account: '',
  permissions: '',
});

// 退票按鈕函式
const refundTickets = () => {
  refundTicketsData.id = props.id;
  refundTicketsData.ticketType = props.ticketType;
  refundTicketsData.ticketDate = props.ticketDate;
  refundTicketsData.fastPassFacility = props.fastPassFacility;
  refundTicketsData.refundTicketsAmount = tickets.value;
  // console.log(refundTicketsData);
  axios
    .post('/api/PDO/tickOrder/tickOrderUpdate.php', { refundTicketsData })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

// 外部資料導入資訊
const props = defineProps({
  id:Number,
  account: String,
  permissions: String,
});
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
