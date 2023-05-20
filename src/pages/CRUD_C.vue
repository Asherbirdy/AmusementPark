<script setup>
import axios from 'axios';

let tableData = ref([]);

// 訂票

const ticketBooking = reactive({
  username: 11,
  ticketBooking: [
    {
      ticketType: 4,
      ticketDate: '2023-05-28',
      ticketAmmount: 10,
      fastPassFacility: [1,1,1,1,1,1],
    },
    {
      ticketType: 2,
      ticketDate: '2023-05-28',
      ticketAmmount: 1,
      fastPassFacility: [1,0,0,0,0,1],
    },
    {
      ticketType: 3,
      ticketDate: '2023-05-28',
      ticketAmmount: 3,
      fastPassFacility:[1,0,0,0,0,0],
    },
    {
      ticketType: 4,
      ticketDate: '2023-05-28',
      ticketAmmount: 1,
      fastPassFacility: [0,0,0,0,0,0],
    },
  ],
});

function submit() {

  axios.post('/api/PDO/tickOrder/tickOrderInsert.php',{
      ticketBooking
  }).
  then(res => {
    const data = res.data;
    console.log(data);
  });
}
</script>
<template>
  <h3>訂票</h3>
  <p>username:asher</p>
  <p>
    票類型:成人 / 時間:2023-05-28 / 數量:4 / 快速過關'設施一', '設施五',
    '設施六'
  </p>
  <p>票類型:學生票 / 時間:2023-05-28 / 數量:1 / 快速過關'設施一', '設施五',</p>
  <p>票類型:兒童票 / 時間:2023-05-28 / 數量:3 / 快速過關'設施一', '設施五',</p>
  <p>票類型:兒童票 / 時間:2023-05-28 / 數量:1 / 快速過關'設施一'</p>
  <p>票類型:博愛票 / 時間:2023-05-28 / 數量:1 / 快速過關:空陣列</p>
  <button @click="submit">點擊傳送訂票到資料庫</button>
</template>

<style lang="scss"></style>
