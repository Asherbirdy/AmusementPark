<template lang="">
  <article>
    <div class="CartStep">
      <div class="monster">
        <monsterCartFillBlue>1</monsterCartFillBlue>
        <h3>購物車</h3>
      </div>
      <hr width="100" style="border: 3px dashed #ffffff" />
      <div class="monster">
        <monster-cart-Fill-White>2</monster-cart-Fill-White>
        <h3>填寫資料</h3>
      </div>
      <hr width="100" style="border: 3px dashed #ffffff" />
      <div class="monster">
        <monster-cart-Fill-White>3</monster-cart-Fill-White>
        <h3>訂購完成</h3>
      </div>
    </div>
  </article>
  <main>
    <div class="user">
      <ul class="cart1">
        <li>商品名稱</li>
        <li>數量</li>
        <li>金額</li>
        <li>刪除</li>
      </ul>
      <div class="detail">
        <ul>
          <li class="pro">
            <img src="@/assets/img/Tshirt4.png" alt="" />
            <ul>
              <h1>MONSTAR上衣</h1>
              <li>尺寸：Ｍ</li>
              <li>顏色：白色</li>
              <li>樣式：MONSTAR</li>
            </ul>
          </li>
          <li>
            <el-input-number
              v-model="num" width:10px
              :min="1"
              :max="10"
              @change="handleChange" class="count"
            />
          </li>
          <li class="price">
            NT$600
          </li>
          <li>
            <el-icon>
              <DeleteFilled />
            </el-icon>
          </li>
        </ul>
      </div>
    </div>
    <ul class="cart2">
      <li>
        <div class="coupon">
          <h2>使用優惠碼</h2>
          <input type="text" placeholder="NT-50" class="type" />
          <button type="submit" id="Submit">優惠碼折抵</button>
        </div>
      </li>
      <li>
        <div class="info">
          <h2>訂單資訊</h2>
          <ul>
            <li>
              <p>商品金額</p>
              <p>NT$600</p>
            </li>
            <li>
              <p>折扣金額</p>
              <p>-NT50</p>
            </li>
            <li>
              <p>運費</p>
              <p>NT$60</p>
            </li>
            <li>
              <p>訂單總額</p>
              <p>NT$610</p>
            </li>
          </ul>
          <button type="submit" id="Submit">結帳</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MyComponent',
  data() {
    return {
      num: 1,
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>

<style lang="scss" scoped>
//共同樣式
main {
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
}
//購物車步驟
article {
  display: flex;
  justify-content: space-evenly;
  margin-top: 150px;
  .CartStep {
    display: flex;
    align-items: center;
    .monster {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        margin-top: 20px;
        color: #163767;
      }
    }
    .hrNone {
      color: white;
    }
  }
}
.cart1 {
  color: #f9f3e4;
  background-color: #d1825b;
  text-align: center;
  line-height: 70px;
  width: 820px;
  height: 70px;
  display: flex;
}
.cart1 li {
  font-size: 20px;
}
.cart1 li:first-child {
  min-width: 210px;
  padding-left: 20px;
}
.cart1 li:nth-child(2) {
  min-width: 45px;
  padding-left: 195px;
}
.cart1 li:nth-child(3) {
  min-width: 45px;
  padding-left: 110px;
}
.cart1 li:last-child {
  min-width: 45px;
  padding-left: 95px;
}
label {
  font-size: 16px;
  font-weight: bold;
  color: #90420a;
  margin-bottom: 10px;
}
.detail ul {
  display: flex;
  flex-direction: row;
}
.count{
  margin: 136px 37px;
  font-size: 20px;
}
.pro {
  display: flex;
  flex-direction: row;
}
.pro img {
  margin-top: 30px;
  height: 205px;
}
.pro ul {
  display: flex;
  flex-direction: column;
  margin-top: 95px;
  margin-left: -8px;
}
.pro h1 {
  font-size: 20px;
}
.pro li {
  margin-top: 0;
  font-size: 16px;
}
.price{
  margin: 140px 18px;
  font-size: 20px;
}
i{
  margin: 140px 0px;
  padding-left: 75px;
  font-size: 30px;
}
.coupon {
  width: 350px;
  height: 195px;
  background-color: #f9f3e4;
  margin: 15px;
  margin-top: 100px;
}
h2 {
  color: #f9f3e4;
  background-color: #d1825b;
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  line-height: 75px;
  height: 70px;
}
.type {
  margin: 40px 0 0px 46px;
}
input {
  height: 26px;
  padding: 9px 7px 6px 0px;
  border: 1px solid #000000;
  border-radius: 10px 0 0 10px;
  text-align: right;
}
#Submit {
  width: 100px;
  height: 43px;
  color: #f9f3e4;
  background-color: #d1825b;
  border-radius: 0 10px 10px 0;
}
.info {
  width: 350px;
  height: 435px;
  background-color: #f9f3e4;
  margin: 15px;
  margin-top: 20px;
}
.info h2 {
  color: #f9f3e4;
  background-color: #d1825b;
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  line-height: 75px;
  height: 70px;
}
.info ul {
  margin: 60px 0px;
}
.info li {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin: 25px;
}
.info #Submit {
  margin-left: 100px;
  width: 100px;
  height: 45px;
  color: #f9f3e4;
  background-color: #d1825b;
  border-radius: 10px;
}

//訂購人資料
.user {
  width: 820px;
  height: 650px;
  background-color: #f9f3e4;
  margin-top: 100px;
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 40px 50px;
    .user-input-row {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: bold;
      color: #90420a;
      label {
        margin-bottom: 10px;
      }
      // input {
      //   width: -webkit-fill-available;
      // }
    }
  }
}
</style>
