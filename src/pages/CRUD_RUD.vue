<script setup>
import axios from 'axios';

const username = ref('asher');
let bookingData = reactive({});
// 先預設彈窗是隱藏
let showmodal = ref(false);
onMounted(() => {
  axios.get('../../src/assets/json/ticketInfo.json').then(res => {
    bookingData.value = res.data.ticketBooking;
  });
});

const ticketType = ref('');
const ticketDate = ref('');
let ticketAmount = ref(0);
const fastPassFacility = ref([]);
// 當執行 openModal 會把 showmodal 變成 true
const openModal = index => {
  showmodal.value = true;
  const rowData = bookingData.value[index];
  ticketType.value = rowData.ticketType;
  ticketDate.value = rowData.ticketDate;
  ticketAmount.value = rowData.ticketAmount;
  fastPassFacility.value = rowData.fastPassFacility;
};
</script>

<template>
  <!-- 顯示畫面 -->
  <div v-for="(item, i) in bookingData.value">
    <div style="display: flex">
      <p style="margin-bottom: 10px" :id="'btn' + i">{{ item }}</p>
      <button
        style="margin-bottom: 10px"
        :id="'ticket' + i"
        @click="openModal(i)"
      >
        退票
      </button>
    </div>
  </div>
  <!--  -->
  <modal-c-r-u-d
    v-model="showmodal"
    :ticket-type="ticketType"
    :ticket-date="ticketDate"
    :ticket-amount="ticketAmount"
    :fast-pass-facility="fastPassFacility"
  ></modal-c-r-u-d>
</template>

<style scoped lang="scss">
//
</style>
