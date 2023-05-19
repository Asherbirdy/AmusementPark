<template>
  <el-dialog title="退票資訊" width="30%" center>
    <span>
      <p>票型：{{ ticketType }}</p>
      <p>日期：{{ ticketDate }}</p>
      <p>票數：{{ ticketAmount }}</p>
      <p>快速通關設施：{{ fastPassFacility }}</p>
      <span>我要退票<input type="text" style="width: 30px" /> 張</span>
      <p style="color: red">我沒寫條件，不要退票超過{{ ticketAmount }}張</p>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary"> 退票 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
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
