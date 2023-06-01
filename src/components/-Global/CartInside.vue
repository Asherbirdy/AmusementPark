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
        <tr v-for="(item, index) in products" :key="item.id" class="detail">
          <td class="itemname">{{ item.name }}</td>
          <td class="itemstyle">{{ item.type }}</td>
          <td class="count">{{ item.count }}</td>
          <td class="price">{{ item.price }}</td>
          <td class="edit">
            <el-icon>
              <EditPen id="edit" />
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
              <td class="money">{{ calculateTotalPrice() }}</td>
            </tr>
            <tr>
              <td>折扣額</td>
              <td class="money">-{{ calculateTotalCoupon() }}</td>
            </tr>
            <tr>
              <td>運費</td>
              <td class="money">60</td>
            </tr>
            <tr id="totalprice">
              <td>訂單總額</td>
              <td class="money">{{ calculateOrderTotal() }}</td>
            </tr>
          </table>
          <router-link to="/admin/cartfill">
            <button type="submit" id="Submit">結帳</button>
          </router-link>
        </div>
      </li>
    </ul>
  </main>
</template>

<script setup>
// 商品數據(負責顯示)
const products = ref([]);

// 抓local 票券的資料：
const ticketDataFromLocal = JSON.parse(sessionStorage.getItem('bookingData'));

/*
  從Local抓資料 並轉為 購物車的資料格式
*/

const ticketMapData = ticketDataFromLocal.map(item => {
  const fastforwardPrice = 100;
  return {
    name: `${item.ticketData} ${item.ticketType} `,
    type: item.fastFoward ? '快速通關+100元' : '一般票',
    count: item.tickets,
    price: item.fastFoward
      ? item.ticketPrice + fastforwardPrice
      : item.ticketPrice,
  };
});

// 將票券和商品都推到一個陣列中：
let sortArr = [];
sortArr.push(...ticketMapData);

//全部加總
products.value.push(...sortArr);
console.log(products.value);

// ---------------------------- Functions --------------------------------//

const removeFromCart = (index) => {
  console.log(products.value[index]);
  //  從頁面刪掉：
  products.value.splice(index, 1);
  // 轉換格式 再去localStoarage刪掉：

  //  console.log(products.value);
  //  sessionStorage.setItem("bookingData", JSON.stringify(products.value));
};

// // 函數：移除商品
// const removeFromCart = product => {
//   const index = products.value.findIndex(item => item.id === product.id);
//   if (index > -1) {
//     products.value.splice(index, 1);
//   }
// };

/*

















*/

// 計算商品總額
const calculateTotalPrice = () => {
  let totalPrice = 0;
  products.value.forEach(product => {
    totalPrice += product.price * product.count;
  });
  return totalPrice;
};

const discountCode = ref('');
const calculateTotalCoupon = () => {
  if (discountCode.value === 'MONSTAR') {
    return 50;
  }
  if (discountCode.value === 'BESTPARK') {
    return 500;
  }
  return 0;
};

// 計算訂單總額
const calculateOrderTotal = () => {
  const totalPrice = calculateTotalPrice();
  const discount = calculateTotalCoupon(); //折扣金額
  const shippingFee = 60; //運費
  return totalPrice - discount + shippingFee;
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
