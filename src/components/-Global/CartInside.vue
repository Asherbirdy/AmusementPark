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
        <tr v-for="(item, index) in  displayTicketData " :key="item.id" class="detail">
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
          <router-link to="/admin/cartfill">
            <button type="submit" id="Submit">結帳</button>
          </router-link>
        </div>
      </li>
    </ul>
  </main>
  <!--  ----- ----- ----- ----- 彈窗 -----  ----- ----- ------->
  <el-icon>
    <EditPen id="edit" @click="dialogFormVisible = true" />
  </el-icon>

  <el-dialog v-model="dialogFormVisible" :title="ticketDateType">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {
  useTest,
  getTicketPrice,
  getTicketType
} from '../../composables';
import axios from 'axios';

/*
  從Local抓資料 並轉為 購物車的資料格式
*/

// 放 票券的原始資料：
let ticketData = ref();

let displayTicketData = ref();

const showOrder = async () => {
  try {
    const res = await axios.get('/PDO/frontEnd/cart/cartSelect.php');
    console.log('DB抓下來的資料', res.data);
    const displayTicket = res.data.map(item => {
      const fastforwardPrice = 100;
      return {
        name: `${item.TICK_DATE.split(' ')[0]
          } ${getTicketType(item.TICK_ID)}`,
        type: item.FAST_PASS === 0 ? '快速通關+100元' : '一般票',
        count: item.TICK_NUM,
        price: item.FAST_PASS === 0
          ? getTicketPrice(item.TICK_ID) + fastforwardPrice
          : getTicketPrice(item.TICK_ID),
        ticketID: item.TICK_ORDER_ID
      }
    });

    displayTicketData.value = displayTicket;
    displayTicketData.value = displayTicket
    console.log('轉換使用者顯示資料：', displayTicketData.value);
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await showOrder();
});


// ---------------------------- Functions --------------------------------//
const removeFromCart = (index) => {

  const ticketID = displayTicketData.value[index].ticketID;
  console.log(ticketID);

  // ----------------這邊

  async function deleteCartItem(ticketID) {
  try {
    const response = await axios.post('/PDO/frontEnd/cart/cartDelete.php', ticketID);
    console.log(response.data);
    await showOrder();
    // 在這裡處理回傳的結果
  } catch (error) {
    console.error(error);
    // 在這裡處理錯誤
  }
}

deleteCartItem(ticketID);


  // // 從畫面上刪除：
  // ticketData.value.splice(index, 1);
  // // 刪掉的值：
  // const clickData = ticketData.value[index];
  // // 轉換刪掉的值：
  // const transferData = {
  //   ticketData: clickData.name.split(' ')[0],
  //   fastFoward: clickData.type === "快速通關+100元" ? true : false,
  //   ticketType: clickData.name.split(' ')[1]

  // }








  // －－－－－－－－－－－－－－－－－－上一版本的code
  // let session = ref(getSessionBookingData());
  // console.log(session);

  // // 從畫面上刪除：
  // ticketData.value.splice(index, 1);
  // // 刪掉的值：
  // const clickData = ticketData.value[index];
  // // 轉換刪掉的值：
  // const transferData = {
  //   ticketData: clickData.name.split(' ')[0],
  //   fastFoward: clickData.type === "快速通關+100元" ? true : false,
  //   ticketType: clickData.name.split(' ')[1]

  // }
  // console.log('transferData', transferData)



  // session.value.forEach((sessionTicket, i) => {
  //   console.log(sessionTicket);
  //   // 检查是否有相同的数据：
  //   const isMatch = (
  //     transferData.ticketType === sessionTicket.ticketType &&
  //     transferData.fastFoward === sessionTicket.fastFoward &&
  //     transferData.ticketData === sessionTicket.ticketData
  //   );
  //   if (isMatch) {
  //     console.log('需要去掉', sessionTicket)
  //     session.value.splice(i, 1)
  //     sessionStorage.setItem("bookingData", JSON.stringify(session.value));
  //   }
  // });
  // // 將session 轉為 資料庫 格式：
  // const postToDBData = getTransTickSessionToDB(session.value);
  // console.log(session.value);
  // console.log(postToDBData);

};



const editFromCart = (index) => {
  console.log(displayTicketData.value[index]);
};

// 彈窗東東：

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const props = defineProps({
  ticketDateType: {
    type: String,
    default: '無資料',
  },
  editFromCart: {
    type: Function,
    required: true
  }
});

console.log(props.editFromCart)

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
