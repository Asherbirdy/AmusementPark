<script setup>
import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
const router = useRouter();

import {
  getSessionBookingData,
  getTransTickSessionToDB,
  getTicketTotalPrice,
} from '../../composables';
import { nextTick } from 'vue';

// 資料
let bookingData = reactive([
  {
    ticketType: '全票',
    ticketInfo: '一般成人，身高110cm以上視為成人',
    ticketPrice: 500,
    ticketNum: 0,
    fastFoward: false,
  },
  {
    ticketType: '學生票',
    ticketInfo: '入園需持當學期註冊學生證之學生(限本人使用)',
    ticketPrice: 400,
    ticketNum: 0,
    fastFoward: false,
  },
  {
    ticketType: '兒童票',
    ticketInfo: '4歲~12歲，身高未滿110cm兒童',
    ticketPrice: 250,
    ticketNum: 0,
    fastFoward: false,
  },
  {
    ticketType: '優待票',
    ticketInfo: '持有身心障礙證明者與1位陪同者、孕婦、65歲以上長者',
    ticketPrice: 200,
    ticketNum: 0,
    fastFoward: false,
  },
]);


// 計算所有票的數量
function countTicket() {
  return bookingData.reduce((acc, cur) => acc + cur.ticketNum, 0);
}

nextTick(() => {
  countTicket();
})


// 將資料加入到local的函式：
const addBookingDataToLocal = () => {
  let allTicketData = [];
  // 先抓local的東西下來並存到一個變數
  const getLocalData = JSON.parse(sessionStorage?.getItem('bookingData'));
  getLocalData ? allTicketData.push(...getLocalData) : '';

  const simplifiedData = bookingData
    .filter(item => item.ticketNum !== 0)
    .map(item => ({
      ticketType: item.ticketType,
      ticketPrice: item.ticketPrice,
      ticketNum: item.ticketNum,
      fastFoward: item.fastFoward,
      ticketData: ticketDate,
    }));

  // 如果時間 / 票種 / 快速通關的值 都一樣 ，放進同一個，沒有的話在allTicket放進去一個物件：
  simplifiedData.forEach(item => {
    const index = allTicketData.findIndex(
      data =>
        data.ticketType === item.ticketType &&
        data.fastFoward === item.fastFoward &&
        data.ticketData === item.ticketData
    );
    console.log(index);
    if (index !== -1) {
      // If a group exists, add the current data to that group
      allTicketData[index].tickets =
        allTicketData[index].tickets + item.ticketNum;
    } else {
      // If a group doesn't exist, create a new group
      allTicketData.push({
        ticketType: item.ticketType,
        ticketPrice: item.ticketPrice,
        fastFoward: item.fastFoward,
        ticketData: item.ticketData,
        tickets: item.ticketNum,
      });
    }
  });

  return sessionStorage.setItem('bookingData', JSON.stringify(allTicketData));
};

const addTicketDateToLocal = () =>
  sessionStorage.setItem('ticketDateData', JSON.stringify(ticketDate));

// 票卷時間：
let ticketDate = ref('');

// 加入購物車
const addToCart = () => {
  // 用memberLoginCheck.php 判斷是否已經登入
  axios
    .post('/PDO/frontEnd/memberLogin/memberLoginCheck.php')
    .then(res => {
      if (res.data === '') {
        console.log('還沒登入');
        if (ticketDate !== '' && isValidDateFormat(ticketDate)) {
          if (countTicket() !== 0) {
            addBookingDataToLocal(bookingData);
            addTicketDateToLocal(ticketDate);
            alert('已將票數加入到購物車');
            console.log(bookingData);
            console.log(ticketDate);
          } else {
            alert('請加入票數');
          }
        } else {
          alert('請輸入日期');
        }
      } else {
        console.log('已經登入了');
        // router.push('../../admin/touristproductorder');
        addBookingDataToLocal(bookingData);
        // 取得local資料
        const getSessionData = getSessionBookingData();
        console.log(getSessionData);
        // 將指定的票轉為資料庫格式
        const transfToDBform = getTransTickSessionToDB(getSessionData);
        console.log('要傳給資料庫的票', transfToDBform);
        const total = getTicketTotalPrice(getSessionData);
        console.log('給資料庫的總金額', total);
        // 票數的金額：

        /*
    友宣 ：  資料庫 資料庫 資料庫 資料庫 資料庫 資料庫 資料庫 資料庫 資料庫 資料庫 資料庫 資料庫
    */

        if (ticketDate !== '' && isValidDateFormat(ticketDate)) {
          if (countTicket() !== 0) {
            axios
              .post('/PDO/frontEnd/tickOrder/tickOrderInsert.php', {
                transfToDBform,
                total,
              })
              .then(res => {
                alert('加入票券成功');
                sessionStorage.removeItem('bookingData');
              })
              .catch(err => {
                alert('加入失敗');
                sessionStorage.removeItem('bookingData');
              });
          } else {
            alert('請加入票數');
          }
        } else {
          alert('請輸入日期');
        }
      }
    })
    //
    .catch(err => {
      console.log(err);
      alert('登入狀態檢查出錯');
    });

};

// 購買票券
const buyTicket = () => {
  router.push('/cart');
};

const clearOut = () => {
  bookingData.forEach(ticket => {
    ticket.ticketNum = 0;
    ticket.fastFoward = false;
    // 清空sessionStorage
    // sessionStorage?.removeItem('bookingData');
    // sessionStorage?.removeItem('ticketDateData');
    // 清空日期
    date.value = '';
  });
};

// 原始時間：
let date = ref('');

// 原始時間轉格式
const selectDate = () => {



  const formattedDate = computed(() => {
    if (date.value) {
      return dayjs(date.value).format('YYYY-MM-DD');
    }
    return '';
  });
  return (ticketDate = formattedDate.value);
};


const isDateSelected = computed(() => date.value !== '');
// 時間的表達式
const isValidDateFormat = dateString => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
};

// 時間限制：一個月以內
const disableDate = time => {
  const today = dayjs().startOf('day');
  const selectedDate = dayjs(time).startOf('day');
  const maxAllowedDate = today.add(31, 'day').startOf('day'); // 取得今天後7天的日期
  return selectedDate.isBefore(today) || selectedDate.isAfter(maxAllowedDate);
};
</script>
<template>
  <div>
    <div class="chooseDate">
      <div class="demo-date-picker">
        <div class="block">
          <el-date-picker v-model="date" type="date" placeholder="選擇訂票日期" :disabled-date="disableDate"
            @change="selectDate" :clearable="false" />
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
      <tr v-for="ticket in bookingData" :key="ticket.ticketType">
        <td>{{ ticket.ticketType }}</td>
        <td class="ex">{{ ticket.ticketInfo }}</td>
        <td>{{ ticket.ticketPrice }}元</td>
        <td>
          <el-input-number v-model="ticket.ticketNum" :min="0" class="count" width:10px />
        </td>
        <td>
          <input v-model="ticket.fastFoward" :checked="ticket.ticketNum > 0 && ticket.fastFoward"
            :disabled="ticket.ticketNum === 0" type="checkbox" />
        </td>
      </tr>
      <tr>
        <td colspan="10" class="ex">4歲以下免費入場</td>
      </tr>
    </table>
  </div>
  <div class="btnbox">
    <Button class="btn" button-color="#D1825B" button-text-color="white" @click="clearOut">
      <h3>預設</h3>
    </Button>

    <div v-if="date !== '' && countTicket() !== 0">
      <Button :style="{ width: '150px' }" class="btn" button-color="#D1825B" button-text-color="white" @click="addToCart"
        :disabled="!isDateSelected || countTicket() === 0">
        <h3>加入購物車</h3>
      </Button>
    </div>
    <div v-else>
      <Button :style="{ width: '150px', background: 'gray', color: 'white' }" class="Button" disabled>
        <h3>請填時間/票數</h3>
      </Button>
    </div>


    <Button class="Button" :style="{ width: '150px' }" button-color="#D1825B" button-text-color="white" @click="buyTicket">
      <h3>前往購物車</h3>
    </Button>
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
