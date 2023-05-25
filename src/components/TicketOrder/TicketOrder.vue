<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

// 資料
let bookingData = reactive([
  {
    adult: {
      ticketNum: 0,
      fastForwad: false,
    },
  },
  {
    student: {
      ticketNum: 0,
      fastForwad: false,
    },
  },
  {
    children: {
      ticketNum: 0,
      fastForwad: false,
    },
  },
  {
    concession: {
      ticketNum: 0,
      fastForwad: false,
    },
  },
]);

function countTicket() {
  return bookingData.reduce((accumulator, current) => {
    const ticketNum = Object.values(current)[0].ticketNum;
    return accumulator + ticketNum;
  }, 0);
}

// 清空按鈕
const clearOut = () => {
  bookingData[0].adult.ticketNum = 0;
  bookingData[0].adult.fastForwad = false;
  bookingData[1].student.ticketNum = 0;
  bookingData[1].student.fastForwad = false;
  bookingData[2].children.ticketNum = 0;
  bookingData[2].children.fastForwad = false;
  bookingData[3].concession.ticketNum = 0;
  bookingData[3].concession.fastForwad = false;
  // 清空localStorage
  localStorage?.removeItem('bookingData');
  localStorage?.removeItem('ticketDateData');
};

// 將資料訪到local函式：
const addBookingDataToLocal = item =>
  localStorage.setItem('bookingData', JSON.stringify({ item }));
// const addTicketDateToLocal = item =>
//   localStorage.setItem('ticketDateData', JSON.stringify({ item }));

// 訂票日期：
// let ticketDate = ref('');

// 從 自組件 接收到日期
// const handleDateSelected = date => {
//   ticketDate = date;
//   return date;
// };

// 時間的表達式
// const isValidDateFormat = dateString => {
//   const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
//   return dateRegex.test(dateString);
// };

// 加到購物車
// const addToCart = () => {
//   if (ticketDate !== '' && isValidDateFormat(ticketDate)) {
//     if (countTicket() !== 0) {
//       console.log(ticketDate, countTicket(), 'ticketDate 執行加入購物車');
//       addBookingDataToLocal(bookingData);
//       addTicketDateToLocal(ticketDate);
//       alert('已將票數加入到購物車');
//     } else {
//       alert('請加入票數');
//     }
//   } else {
//     alert('請輸入日期');
//   }
// };

// 購買票券
// const buyTicket = () => {
//   if (ticketDate !== '' && isValidDateFormat(ticketDate)) {
//     if (countTicket() !== 0) {
//       console.log(ticketDate, countTicket(), 'ticketDate 執行加入購物車');
//       addBookingDataToLocal(bookingData);
//       addTicketDateToLocal(ticketDate);
//       router.push('/cart');
//       alert('已將票數加入到購物車');
//     } else {
//       alert('請加入票數');
//     }
//   } else {
//     alert('請輸入日期');
//   }
// };
</script>
<template>
  <div>
    <div class="chooseDate">
      <!-- <ChooseDateTIC @date-selected="handleDateSelected" /> -->
    </div>

    <table>
      <tr>
        <th>票種</th>
        <th>適用對象</th>
        <th>票價</th>
        <th>張數</th>
        <th>快速通關</th>
      </tr>
      <tr>
        <td>全票</td>
        <td class="ex">一般成人，身高110cm以上視為成人</td>
        <td>NT.500</td>
        <td>
          <el-input-number
            v-model="bookingData[0].adult.ticketNum"
            :min="0"
            class="count"
            width:10px
          />
        </td>
        <td>
          <input v-model="bookingData[0].adult.fastForwad" type="checkbox" />
        </td>
      </tr>
      <tr>
        <td>學生票</td>
        <td class="ex">入園需持當學期註冊學生證之學生(限本人使用)</td>
        <td>NT.400</td>
        <td>
          <el-input-number
            v-model="bookingData[1].student.ticketNum"
            :min="0"
            class="count"
            width:10px
          />
        </td>
        <td>
          <input v-model="bookingData[1].student.fastForwad" type="checkbox" />
        </td>
      </tr>
      <tr>
        <td>兒童票</td>
        <td class="ex">4歲~12歲，身高未滿110cm兒童</td>
        <td>NT.250</td>
        <td>
          <el-input-number
            v-model="bookingData[2].children.ticketNum"
            :min="0"
            class="count"
            width:10px
          />
        </td>
        <td>
          <input v-model="bookingData[2].children.fastForwad" type="checkbox" />
        </td>
      </tr>
      <tr>
        <td>優待票</td>
        <td class="ex">持有身心障礙證明者與1位陪同者、孕婦、65歲以上長者</td>
        <td>NT.200</td>
        <td>
          <el-input-number
            v-model="bookingData[3].concession.ticketNum"
            :min="0"
            class="count"
            width:10px
          />
        </td>
        <td>
          <input
            v-model="bookingData[3].concession.fastForwad"
            type="checkbox"
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
