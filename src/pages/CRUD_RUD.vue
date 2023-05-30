<script setup>
import axios from 'axios';

const username = ref('asher');
let bookingData = reactive({});
// 先預設彈窗是隱藏
let showmodal = ref(false);
let showDeleteModal = ref(false);

// 開啟頁面串資
onMounted(() => {
  axios.get('/PDO/tickOrder/tickOrderSelect.php').then(res => {
    bookingData.value = res.data;
    // console.log(res.data);
    res.data.forEach(obj => {
      const fastPassFacility = [];
      [
        'FAST_PASS1',
        'FAST_PASS2',
        'FAST_PASS3',
        'FAST_PASS4',
        'FAST_PASS5',
        'FAST_PASS6',
      ].forEach(fastPassKey => {
        if (obj.hasOwnProperty(fastPassKey)) {
          fastPassFacility.push(obj[fastPassKey]);
          delete obj[fastPassKey];
        }
      });
      obj.fastPassFacility = fastPassFacility;
    });
    console.log(fastPassFacility);
  });
});

let id = ref('');
const ticketType = ref('');
const ticketDate = ref('');
let ticketAmount = ref(0);
const fastPassFacility = ref([]);
// 當執行 openModal 會把 showmodal 變成 true
const openModal = index => {
  showmodal.value = true;
  const rowData = bookingData.value[index];
  id.value = rowData.TICK_ORDER_ID;
  ticketType.value = rowData.TICK_ID;
  ticketDate.value = rowData.TICK_DATE;
  ticketAmount.value = rowData.TICK_NUM;
  fastPassFacility.value = rowData.fastPassFacility;
  console.log(rowData);
};

function openDeleteModal(index){
  showDeleteModal.value = true;
  const rowData = bookingData.value[index]; 
  id.value = rowData.TICK_ORDER_ID;
  ticketType.value = rowData.TICK_ID;
  ticketDate.value = rowData.TICK_DATE;
  ticketAmount.value = rowData.TICK_NUM;
  fastPassFacility.value = rowData.fastPassFacility;
  console.log(rowData);
}



const closeModal = () => {
  showmodal.value = false;
};

const closeDeleteModal= ()=> {
  showDeleteModal.value = false;
}


</script>

<template>
  <!-- 顯示畫面 -->
  <div v-for="(item, i) in bookingData.value" :key="item.id">
    <div style="display: flex">
      <p style="margin-bottom: 10px">{{ item }}</p>
      <button style="margin-bottom: 10px" @click="openModal(i)">退票</button>
      <button style="margin-bottom: 10px" @click="openDeleteModal(i)">刪除</button>
    </div>
  </div>
  <!--  -->
  <modal-c-r-u-d
    v-model="showmodal"
    :id="id"
    :ticket-type="ticketType"
    :ticket-date="ticketDate"
    :ticket-amount="ticketAmount"
    :fast-pass-facility="fastPassFacility"
    @close-modal="closeModal"
  ></modal-c-r-u-d>
  <modal-d
    v-model="showDeleteModal"
    :id="id"
    :ticket-type="ticketType"
    :ticket-date="ticketDate"
    :ticket-amount="ticketAmount"
    :fast-pass-facility="fastPassFacility"
    @close-delete-modal = "closeDeleteModal"
  ></modal-d>
</template>

<style scoped lang="scss">
//
</style>
