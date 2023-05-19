<template>
  <el-dialog title="退票資訊" width="30%" center>
    <span>
      <p>票型：{{ ticketType }}</p>
      <p>日期：{{ ticketDate }}</p>
      <p>票數：{{ ticketAmount }}</p>
      <p>快速通關設施：{{ fastPassFacility }}</p>
      <span
        >我要退票<input type="text" v-model="tickets" style="width: 30px" />
        張</span
      >
      <p style="color: red">我沒寫條件，不要退票超過{{ ticketAmount }}張</p>
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
          退票
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
// 監聽目前退票數量：
const tickets = ref(0);

// 帳號名稱 / 票型  / 時間  / 快速通關  / 退票數量：
let refundTicketsData = reactive({
  username: 'asher',
  ticketType: '',
  ticketDate: '',
  fastPassFacility: '',
  refundTicketsAmount: 0,
});

// 退票按鈕函式
const refundTickets = () => {
  refundTicketsData.ticketType = props.ticketType;
  refundTicketsData.ticketDate = props.ticketDate;
  refundTicketsData.fastPassFacility = props.fastPassFacility;
  refundTicketsData.refundTicketsAmount = tickets.value;
  console.log(refundTicketsData);
};

// 外部資料導入資訊
const props = defineProps({
  ticketType: String,
  ticketDate: String,
  ticketAmount: Number,
  fastPassFacility: Array,
});
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
