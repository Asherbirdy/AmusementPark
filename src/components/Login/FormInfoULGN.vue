<script setup>
import axios from 'axios';
import {
  useTest,
  getTicketType,
  getTicketPrice,
  getSessionBookingData,
  getTicketTypeFromNum,
  getTransTickSessionToDB,
  getTicketTotalPrice,
} from '../../composables';
console.log(getTicketType(4));

////// 帳號 + 密碼 的 input欄位
const account = ref('0912345678'); // 用作v-model雙向數據綁定
const pwd = ref('password'); // 用作v-model雙向數據綁定
const inputInfos = ref([
  {
    title: '帳號：',
    type: 'text',
    id: 'account',
    placeholder: '請輸入您的Email或手機',
    value: account.value,
  },
  {
    title: '密碼：',
    type: 'password',
    id: 'pwd',
    placeholder: '請輸入您的密碼',
    value: pwd.value,
  },
]);
// 會員註冊 + 忘記密碼 的 a標籤
const aLinks = ref([
  {
    id: '1',
    url: '#',
    text: '會員註冊',
    icon: 'User',
    url: '/register',
  },
  {
    id: '2',
    url: '#',
    text: '忘記密碼',
    icon: 'Unlock',
    url: '/ForgetPassword',
  },
]);

//////功能-會員帳號驗證格式

////email驗證
const emailRegex =
  /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const isInputFail = ref(false);

const blurCheck = inputType => {
  if (inputType !== 'account') return;
  const inputAccount = inputInfos.value[0].value;
  if (inputAccount === '') {
    isInputFail.value = false;
    return;
  }
  const isPhoneNumber =
    !isNaN(inputAccount) &&
    inputAccount.length === 10 &&
    inputAccount.trim().length > 0 &&
    inputAccount[0] === '0' &&
    inputAccount[1] === '9';

  const isEmail = emailRegex.test(inputAccount);
  isInputFail.value = !(isPhoneNumber || isEmail);
};

////確認資料

const router = useRouter();

axios
  .post('/PDO/frontEnd/memberLogin/memberLoginCheck.php')
  .then(res => {
    if (res.data === '') {
      console.log('還沒登入');
    } else {
      console.log('已經登入了');
      router.push('../../admin/touristproductorder');
    }
  })
  //
  .catch(err => {
    console.log(err);
    alert('登入狀態檢查出錯');
  });

////資料送出
const handleSubmit = async () => {
  // Check for input failure
  if (isInputFail.value) {
    return;
  }
  try {
    // Make a POST request to login
    const response = await axios.post(
      '/PDO/frontEnd/memberLogin/memberLogin.php',
      {
        account: inputInfos.value[0].value,
        pwd: inputInfos.value[1].value,
      }
    );

    if (response.data === '登入成功') {
      alert('登入成功');
      let dbData = ref();
      // 取得ＤＢ資料
      const cartResponse = await axios.get('/PDO/frontEnd/cart/cartSelect.php');
      dbData = cartResponse.data;
      console.log('從資料庫抓到的原始資料=>', dbData);
      /*
      將從資料庫抓到的 票券資料 和 商品資料 拆分到不同變數陣列
      */

      const ticketArr = ref([]); //票券資料庫原始陣列
      const productArr = ref([]); //商品資料庫原始陣列
      // Check if dbData is an array
      if (Array.isArray(dbData)) {
        dbData.forEach(item => {
          // Perform operations on each item in the array

          dbData.forEach((item, i) => {
            if (item.hasOwnProperty('FAST_PASS')) {
              ticketArr.value.push(item);
            } else {
              productArr.value.push(item);
            }
          });
          console.log(
            '將原始資料分為兩個不同的陣列(票券/商品)=>',
            ticketArr.value,
            productArr.value
          );
        });
      } else {
        // Handle the case when dbData is not an array
        alert('dbData is not an array');
      }

      /*
       將 ticketArr 資料庫的格式 轉換為 顯示頁面的格式：
      */

      const displayTicketData = ticketArr.value?.map(item => {
        return {
          fastFoward: item.FAST_PASS ? true : false,
          ticketData: item.START_DATE.split(' ')[0],
          tickets: item.TICK_NUM,
          ticketPrice: getTicketPrice(item.TICK_ID),
          ticketType: getTicketType(item.TICK_ID),
          ticketID: item.TICK_ORDER_ID,
          ticketOrderID: item.ORDER_ID,
        };
      });
      console.log('轉換ticketArr為使用者顯示的資料=>', displayTicketData);

      /*
      將 Local 的資料推進 原本只放資料庫的資料 ticketArr
      如果Local沒資料就不執行合併
      */

      if (sessionStorage.getItem('bookingData') !== null) {
        console.log('發現Local有資料所以執行合併整理(Local+Database)');

        const localBookingData = ref(getSessionBookingData());

        localBookingData.value.forEach((localTicket, i) => {
          // 抓到一樣的陣列：
          const index = displayTicketData.findIndex(
            data =>
              data.ticketType === localTicket.ticketType &&
              data.fastFoward === localTicket.fastFoward &&
              data.ticketData === localTicket.ticketData
          );
          if (index !== -1) {
            // If a group exists, add the current data to that group
            displayTicketData[index].tickets =
              displayTicketData[index].tickets + localTicket.tickets;
          } else {
            // If a group doesn't exist, create a new group
            displayTicketData.push({
              ticketType: localTicket.ticketType,
              ticketPrice: localTicket.ticketPrice,
              fastFoward: localTicket.fastFoward,
              ticketData: localTicket.ticketData,
              tickets: localTicket.tickets,
              ticketID: null,
              ticketOrderID: null,
            });
          }
        });

        console.log('Local的資料+資料庫的資料=>', displayTicketData);

        /*
        1.將最新的資料放進sessionStorage
        2.將資料轉成資料庫的形式
        */

        sessionStorage.setItem(
          'bookingData',
          JSON.stringify(displayTicketData)
        );

        const currentLocal = getSessionBookingData();

        //要給資料庫的格式：
        const postToDBData = getTransTickSessionToDB(currentLocal);
        console.log('傳給資料庫的資料', postToDBData);

        // 算出目前總金額：
        const total = getTicketTotalPrice(displayTicketData);

        console.log('總金額', total);

        // 傳給後端
        axios
          .post('/PDO/frontEnd/memberLogin/orderInsert.php', {
            postToDBData,
            total,
          })
          .then(res => {
            console.log(res);
            sessionStorage.removeItem('bookingData');
            const login = true;
            sessionStorage.setItem('token', JSON.stringify(login));
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log('Session無資料');
        const login = true;
        sessionStorage.setItem('token', JSON.stringify(login));
      }
      // 跳到首頁
      router.push('/');
    } else {
      alert('錯誤帳號密碼');
    }
  } catch (error) {
    console.error(error);
    alert('伺服器問題');
  }
};
</script>

<template>
  <section class="middle">
    <!-- 帳號 + 密碼 的 input欄位 -->
    <div class="middle__form">
      <div
        class="middle__form--wrapOfLabelInput"
        v-for="(inputInfo, index) in inputInfos"
        v-bind:key="inputInfo.id"
      >
        <label class="middle__form--label">{{ inputInfo.title }}</label>
        <input
          class="middle__form--input"
          v-bind:type="inputInfo.type"
          v-bind:id="inputInfo.id"
          v-bind:placeholder="inputInfo.placeholder"
          v-model="inputInfo.value"
          @blur="blurCheck(inputInfo.id)"
        />
        <span v-if="isInputFail && inputInfo.id === 'account'"
          >請輸入正確帳號
        </span>
      </div>

      <!-- 會員註冊 + 忘記密碼 的 a標籤 -->
      <div class="middle__form--bigWrapOfIconA">
        <div
          class="middle__form--wrapOfIconA"
          v-for="(aLink, index) in aLinks"
          v-bind:key="aLink.id"
          v-bind:href="aLink.url"
        >
          <el-icon class="middle__form--Icon">
            <component :is="aLink.icon" />
          </el-icon>
          <router-link :to="aLink.url" class="middle__form--Link">{{
            aLink.text
          }}</router-link>
        </div>
      </div>

      <Button
        class="middle__form--Btn"
        type="submit"
        id="Submit"
        @click="handleSubmit"
      >
        登入
      </Button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.middle {
  display: flex;
  justify-content: center;

  &__form {
    &--wrapOfLabelInput {
      margin-bottom: 36px;
    }

    &--label {
      font-size: 20px;
      margin-right: 19px;
    }

    &--input {
      width: 300px;
      height: 60px;
      border-width: 1px;
      border-color: lightgray;
      border-radius: 10px;
      padding-left: 9px;
    }

    &--input::placeholder {
      font-size: 18px;
    }

    &--bigWrapOfIconA {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 228px;
      margin: 0 auto;
    }

    &--wrapOfIconA {
      display: inline-block;
      margin-bottom: 39px;
      // color: ;
    }

    &--Icon {
      margin-right: 9px;
    }

    &--Link {
      font-weight: 400;
      font-size: 16px;
      line-height: 19.36px;
      color: $textcolor4;
      text-decoration: none;
    }

    &--Btn {
      background-color: #d1825b;
      display: block;
      margin: 0 auto;
      width: 300px;
      height: 60px;
      border-radius: 10px;
      margin-bottom: 50px;
      font-weight: 400;
      font-size: 24px;
    }
  }
}

span {
  display: flex;
  margin-left: 90px;
  margin-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
