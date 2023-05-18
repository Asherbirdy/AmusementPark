<script setup>
import axios from 'axios';

// 訂票

const ticketBooking = reactive({
  username: 'asher',
  ticketBooking: [
    {
      ticketType: 'adult',
      ticketDate: '2023-05-28',
      ticketAmmount: 4,
      fastPassFacility: ['設施一', '設施五', '設施六'],
    },
    {
      ticketType: 'student',
      ticketDate: '2023-05-28',
      ticketAmmount: 1,
      fastPassFacility: ['設施一', '設施五'],
    },
    {
      ticketType: 'kid',
      ticketDate: '2023-05-28',
      ticketAmmount: 3,
      fastPassFacility: ['設施一'],
    },
    {
      ticketType: 'concession',
      ticketDate: '2023-05-28',
      ticketAmmount: 1,
      fastPassFacility: [],
    },
  ],
});

function submit() {
  return axios
    .post('', { ticketBooking })
    .then(res => {
      console.log(ticketBooking);
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      console.log(ticketBooking);
    });
  cl;
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
