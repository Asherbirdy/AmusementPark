<template>
    <el-dialog title="確定要刪除訂單嗎" width="30%" center>
      <span>
        <p>訂票編號:{{id}}</p>
        <p>票型：{{ ticketType }}</p>
        <p>日期：{{ ticketDate }}</p>
        <p>票數：{{ ticketAmount }}</p>
        <p>快速通關設施：{{ fastPassFacility }}</p>
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            type="primary"
            @click="
              () => {
                deleteTickets();
                $emit('close-delete-modal');
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
  const tickets = ref(0);
  
  // 帳號名稱 / 票型  / 時間  / 快速通關  / 退票數量：
  let deleteTicketsData = reactive({
    id:0,
    username: 'asher',
    ticketType: '',
    ticketDate: '',
    fastPassFacility: '',
    refundTicketsAmount: 0,
  });
  
  // 退票按鈕函式
  const deleteTickets = () => {
    deleteTicketsData.id = props.id;
    deleteTicketsData.ticketType = props.ticketType;
    deleteTicketsData.ticketDate = props.ticketDate;
    deleteTicketsData.fastPassFacility = props.fastPassFacility;
    deleteTicketsData.refundTicketsAmount = tickets.value;
    console.log(deleteTicketsData);
    axios
      .post(`${import.meta.env.VITE_API_URL}/tickOrder/tickOrderDelete.php`, { deleteTicketsData })
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
    ticketType: String,
    ticketDate: String,
    ticketAmount: Number,
    fast_pass1:Boolean,
    fastPassFacility: Array,
  });
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>
  