<script setup>
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
const router = useRouter();

// 資料
let bookingData = reactive([
  {
    ticketType: '全票',
    ticketNum: 0,
    fastFoward: false,
  },
  {
    ticketType: '學生票',
    ticketNum: 0,
    fastFoward: false,
  },
  {
    ticketType: '兒童票',
    ticketNum: 0,
    fastFoward: false,
  },
  {
    ticketType: '優待票',
    ticketNum: 0,
    fastFoward: false,
  },
]);
</script>
<template>
  <div>
    <div class="chooseDate">
      <div class="demo-date-picker">
        <div class="block">
          <el-date-picker
            v-model="date"
            type="date"
            placeholder="選擇訂票日期"
            :disabled-date="disableDate"
            @change="selectDate"
          />
        </div>
      </div>
    </div>

    <table>
      <tr>
        <th>票種</th>
        <th>適用對象</th>
        <th>票價</th>
        <th>張數</th>
        <th>快速通關</th>
      </tr>
      <tr v-for="(ticket, idx) in bookingData" :key="ticket.ticketType">
        <td>{{ ticket.ticketType }}</td>
        <td class="ex">一般成人，身高110cm以上視為成人</td>
        <td>NT.500</td>
        <td>
          <el-input-number
            v-model="ticket.ticketNum"
            :min="0"
            class="count"
            width:10px
          />
        </td>
        <td>
          <input
            type="checkbox"
            :checked="ticket.ticketNum > 0 && ticket.fastFoward"
            :disabled="ticket.ticketNum === 0"
          />
        </td>
      </tr>
      <tr>
        <td colspan="10" class="ex">4歲以下免費入場</td>
      </tr>
    </table>
  </div>
  <div class="btnbox">
    <btn
      class="btn"
      button-color="#D1825B"
      button-text-color="white"
      @click="clearOut"
    >
      <h3>清空</h3>
    </btn>
    <btn
      :style="{ width: '150px' }"
      class="btn"
      button-color="#D1825B"
      button-text-color="white"
      @click="addToCart"
    >
      <h3>加入購物車</h3>
    </btn>
    <btn
      class="btn"
      button-color="#D1825B"
      button-text-color="white"
      @click="buyTicket"
    >
      <h3>立即購買</h3>
    </btn>
  </div>
</template>

<style lang="scss" scoped>
.chooseDate {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 60px;
  margin-bottom: 20px;
}

table,
th,
td {
  border: 2px solid #d1825b;
}

th,
td {
  padding: 8px;
}

table {
  margin: 0 auto;
  // width: 1000px;

  tr {
    th {
      background-color: #d1825b;
      text-align: center;
      color: white;
      font-size: 24px;
    }

    td {
      background-color: #f9f3e4;
      text-align-last: center;
      font-size: 24px;
    }

    .ex {
      text-align-last: left;
    }
  }
}

.btnbox {
  width: 400px;
  display: flex;
  float: right;
  justify-content: space-between;
  margin-bottom: 100px;
  margin-right: 60px;
  margin-top: 20px;
}
</style>
