<template>
  <main>
    <nav class="cart">
      <table class="cartlist">
        <tr class="title">
          <th class="itemname">商品名稱</th>
          <th class="itemstyle">款式</th>
          <th class="count">數量</th>
          <th class="price">金額</th>
          <th class="edit">修改</th>
          <th class="delet">移除</th>
        </tr>
        <tr
          v-for="(item, index) in displayTicketData"
          :key="item.id"
          class="detail"
        >
          <td class="itemname">{{ item.name }}</td>
          <td class="itemstyle">{{ item.type }}</td>
          <td class="count">{{ item.count }}</td>
          <td class="price">{{ item.price }}</td>
          <td class="edit">
            <el-icon>
              <!-- <ModalEditCRT id="edit" :editFromCart="editFromCart()" /> -->
              <EditPen id=" edit" @click="editFromCart(index)" />
            </el-icon>
          </td>
          <td class="delet">
            <el-icon>
              <Close id="delet" @click="removeFromCart(index)" />
            </el-icon>
          </td>
        </tr>
        <tr></tr>
        <tr class="ex">
          <td colspan="4">是否需要加購樂園盟票及快速通關?　</td>
          <td id="plus" colspan="2">
            <button type="submit" id="Submit">加購</button>
          </td>
        </tr>
      </table>
    </nav>
    <!-- 訂單資訊： -->
    <ul class="final">
      <li>
        <div class="coupon">
          <h2>使用優惠碼</h2>
          <div class="code">
            <input type="text" class="sn" v-model="discountCode" />

            <button type="submit" id="Submit">折抵</button>
          </div>
        </div>
      </li>
      <li>
        <div class="total">
          <h2>訂單資訊</h2>
          <table id="totallist">
            <tr>
              <td>商品總額</td>
              <!-- <td class="money">{{ calculateTotalPrice() }}</td> -->
            </tr>
            <tr>
              <td>折扣額</td>
              <!-- <td class="money">-{{ calculateTotalCoupon() }}</td> -->
            </tr>
            <tr>
              <td>運費</td>
              <td class="money">60</td>
            </tr>
            <tr id="totalprice">
              <td>訂單總額</td>
              <!-- <td class="money">{{ calculateOrderTotal() }}</td> -->
            </tr>
          </table>

          <button type="submit" id="Submit" @click="checkLogin">結帳</button>
        </div>
      </li>
    </ul>
  </main>
  <ModalEditCRT
    v-model="showmodal"
    :ticket-amount="ticketAmount"
    :ticket-type="ticketType"
    :ticket-price="ticketPrice"
    :order-id="ticketOrderID"
    :ticket-id="ticketID"
    :fass-pass="fastPast"
    @close-modal="closeModal"
    @show-order="showOrderFromDB"
    @update-session="handleUpdateSession"
  />
  <!--  ----- ----- ----- ----- 彈窗 -----  ----- ----- ------->
</template>

<script setup>
import {
  useTest,
  getTicketPrice,
  getTicketType,
  getSessionBookingData,
  getTypeToticketPrice,
} from '../../composables';
import axios from 'axios';

const router = useRouter();

/*
 抓資料 並轉為 購物車的資料格式
*/
let displayTicketData = ref();

// 從資料庫抓的函式：
const showOrderFromDB = async () => {
  try {
    const res = await axios.get('/PDO/frontEnd/cart/cartSelect.php');
    console.log('DB抓下來的資料', res.data);
    const displayTicket = res.data.map(item => {
      const fastforwardPrice = 100;
      return {
        name: `${item.TICK_DATE.split(' ')[0]} ${getTicketType(item.TICK_ID)}`,
        type: item.FAST_PASS === 0 ? '快速通關+100元' : '一般票',
        count: item.TICK_NUM,
        price:
          item.FAST_PASS === 0
            ? getTicketPrice(item.TICK_ID) + fastforwardPrice
            : getTicketPrice(item.TICK_ID),
        ticketID: item.TICK_ORDER_ID,
        tickPrice: item.TOTAL_PRICE,
        TICK_ORDER_ID: item.ORDER_ID,
        TOTAL_PRICE: item.TOTAL_PRICE,
      };
    });

    displayTicketData.value = displayTicket;
    console.log('轉換使用者顯示資料：', displayTicketData.value);
  } catch (err) {
    console.log(err);
  }
};

// 從Session抓資料的函式：
const showOrderFromSession = async () => {
  try {
    const getSession = getSessionBookingData();
    console.log('未登入狀態 顯示session資料', getSession);
    const displayTicket = getSession.map(item => {
      const fastforwardPrice = 100;
      return {
        name: `${item.ticketData} ${item.ticketType}`,
        type: item.fastFoward ? '快速通關+100元' : '一般票',
        count: item.tickets,
        price: item.fastFoward
          ? getTypeToticketPrice(item.ticketType) + fastforwardPrice
          : getTypeToticketPrice(item.ticketType),
      };
    });
    displayTicketData.value = displayTicket;
  } catch (err) {
    console.log(err);
  }
};

const orderCheck = async () => {
  try {
    const res = await axios.get('/PDO/frontEnd/cart/cartSelect.php');
    console.log(res.data);
    if (res.data.length !== 0) {
      console.log('購物車有東西');
      router.push('../../admin/cartfill');
    } else {
      console.log('購物車沒東西');
      alert('放點東西進購物車吧');
    }
  } catch (err) {
    console(err);
  }
};

onMounted(async () => {
  // 如果是登入狀態
  if (sessionStorage.getItem('token')) {
    await showOrderFromDB();
  } else {
    await showOrderFromSession();
  }
});

// ---------------------------- Functions --------------------------------//
const removeFromCart = index => {
  if (sessionStorage.getItem('token')) {
    // ---------- 未登入
    console.log('已登入/直接從資料庫刪掉');
    const ticketID = displayTicketData.value[index].ticketID;
    const totalTickPrice = displayTicketData.value[index].tickPrice;
    console.log(totalTickPrice);
    console.log(ticketID);
    async function deleteCartItem(ticketID) {
      try {
        const response = await axios.post('/PDO/frontEnd/cart/cartDelete.php', {
          ticketID,
          totalTickPrice,
        });
        console.log(response.data);
        await showOrderFromDB();
        // 在這裡處理回傳的結果
      } catch (error) {
        console.error(error);
        // 在這裡處理錯誤
      }
    }
    deleteCartItem(ticketID);
  } else {
    //---------- 已經登入
    console.log('未登入/刪掉SessionStorage');
    console.log(displayTicketData.value[index]);
    const ticketData = displayTicketData.value[index];
    const ticketDeleteData = {
      fastFoward: ticketData.type === '一般票' ? false : true,
      ticketType: ticketData.name.split(' ')[1],
      ticketData: ticketData.name.split(' ')[0],
    };

    const session = getSessionBookingData();
    console.log(session);

    const filterData = session.filter(ticket => {
      return (
        ticket.ticketType !== ticketDeleteData.ticketType ||
        ticket.fastFoward !== ticketDeleteData.fastFoward ||
        ticket.ticketData !== ticketDeleteData.ticketData
      );
    });

    sessionStorage.setItem('bookingData', JSON.stringify(filterData));
    displayTicketData.value = displayTicketData.value.filter(
      (_, i) => i !== index
    );
  }
};

//--------------- 修改票券：------------------

const showmodal = ref(false);
const closeModal = () => {
  showmodal.value = false;
};

const ticketType = ref(''); //name: "2023-06-20 全票"
const ticketPrice = ref(0); // 價錢
let ticketAmount = ref(0); // 數量
const ticketID = ref(0);
const ticketOrderID = ref(0);
const fastPast = ref(null);

const editFromCart = index => {
  const editData = displayTicketData.value[index]; // 點選edit出現edit資料
  console.log('要修改的資料', editData);
  showmodal.value = true;
  ticketType.value = editData.name; // 如：2023-06-20 全票
  ticketAmount.value = editData.count; // 500張
  ticketID.value = editData?.ticketID;
  ticketOrderID.value = editData?.TICK_ORDER_ID;
  ticketPrice.value = editData.price;
  fastPast.value = editData.type === '一般票' ? false : true;
};

// // 計算商品總額
// const calculateTotalPrice = () => {
//   let totalPrice = 0;
//   products.value.forEach(product => {
//     totalPrice += product.price * product.count;
//   });
//   return totalPrice;
// };

// const discountCode = ref('');
// const calculateTotalCoupon = () => {
//   if (discountCode.value === 'MONSTAR') {
//     return 50;
//   }
//   if (discountCode.value === 'BESTPARK') {
//     return 500;
//   }
//   return 0;
// };

// // 計算訂單總額
// const calculateOrderTotal = () => {
//   const totalPrice = calculateTotalPrice();
//   const discount = calculateTotalCoupon(); //折扣金額
//   const shippingFee = 60; //運費
//   return totalPrice - discount + shippingFee;
// };

const checkLogin = async () => {
  try {
    const res = await axios.post('/PDO/frontEnd/cart/cartCheckout.php');
    // 如果登入成功，執行結帳相關操作
    if (res.data === true) {
      // router.push('../../admin/cartfill');
      orderCheck();
    } else {
      console.log('還沒登入');
      router.push('../../login');
    }
  } catch (error) {
    console.error(error);
    // 如果登入失敗，執行相應的處理，例如顯示登入錯誤提示或導向登入頁面
  }
};

const handleUpdateSession = sessionUnlogin => {
  console.log(sessionUnlogin);
  const displayTicket = sessionUnlogin.map(item => {
    const fastforwardPrice = 100;
    return {
      name: `${item.ticketData} ${item.ticketType}`,
      type: item.fastFoward ? '快速通關+100元' : '一般票',
      count: item.tickets,
      price: item.fastFoward
        ? getTypeToticketPrice(item.ticketType) + fastforwardPrice
        : getTypeToticketPrice(item.ticketType),
    };
  });
  displayTicketData.value = displayTicket;
  // console.log(displayTicketData);
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
}

h2 {
  color: #fff;
  background-color: $maincolor3;
  text-align: center;
  font-type: 20px;
  font-weight: normal;
  line-height: 75px;
  height: 70px;
}

tr,
td {
  height: 70px;
  line-height: 70px;
}

td {
  border-bottom: 1px solid #000;
}

#Submit {
  font-type: 20px;
  width: 60px;
  height: 40px;
  color: #fff;
  background-color: $maincolor3;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.ex {
  text-align: right;

  td {
    border-bottom: none;
  }

  #plus {
    text-align: center;
  }
}

.cart {
  width: 75%;
  position: relative;
  display: flex;
  font-type: 20px;

  .cartlist {
    position: absolute;
    width: 100%;
    background-color: $maincolor1;
    text-align: center;

    .title {
      color: #fff;
      background-color: $maincolor3;
    }

    .detail {
      width: 100%;

      .itemname {
        // width: 220px;
        width: 30%;
      }

      .itemstyle {
        // width: 300px;
        width: 30%;
      }

      .count {
        // width: 60px;
        width: 8%;
      }

      .price {
        // width: 120px;
        width: 16%;
      }

      .edit {
        // width: 60px;
        width: 8%;

        #edit {
          cursor: pointer;
        }
      }

      .delet {
        // width: 60px;
        width: 8%;

        #delet {
          cursor: pointer;
        }
      }
    }
  }
}

.final {
  width: 25%;
  margin-left: 10px;

  .coupon {
    height: 180px;
    background-color: $maincolor1;

    .code {
      width: 90%;
      margin: 35px auto;
      height: 40px;
      position: relative;

      .sn {
        width: 60%;
        font-type: 20px;
        height: 38px;
        padding: 0 10px;
        // margin-top: -10px;
        border: none;
        outline: 1px solid #b5b5b5;
        border-radius: 10px 0 0 10px;
      }

      #Submit {
        position: absolute;
        top: -1px;
        width: 30%;
        display: inline-block;
        background-color: $maincolor3;
        border-radius: 0 10px 10px 0;
      }
    }
  }

  .total {
    width: 100%;
    background-color: $maincolor1;
    text-align: right;

    #totallist {
      margin: 0 20px;
      text-align: center;

      tr {
        width: 100%;

        td {
          width: 50%;
          padding: 0 30px;
          border: none;
        }
      }

      .money {
        text-align: right;
      }

      #totalprice {
        border-top: 1px solid #000;
      }
    }

    #Submit {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 20px;
      margin-right: 15px;
    }
  }
}
</style>
