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
          <li class="pro" v-for="item in products" :key="item.id">
            <img :src="imgURL(item.img)" />
            <ul>
              <h1>{{ item.name }}</h1>
              <li>尺寸：{{ item.size }}</li>
              <li>顏色：{{ item.color }}</li>
              <li>樣式：{{ item.style }}</li>
            </ul>
          </li>
          <li>
            <el-input-number
              v-model="num"
              width:10px
              :min="1"
              :max="10"
              @change="handleChange"
              class="count"
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
          <input type="text" class="type" />
          <button type="submit" id="Submit">優惠碼折抵</button>
        </div>
      </li>
      <li>
        <div class="info">
          <h2>訂單資訊</h2>
          <ul>
            <li v-for="item in orderInfo" :key="item.id">
              <p>{{ item.label }}</p>
              <p>{{ item.value }}</p>
            </li>
          </ul>
          <button type="submit" id="Submit">結帳</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
const products = [
  {
    id: "product1",
    img:"Tshirt4.png",
    name: "MONSTAR上衣",
    size: "M",
    color: "白色",
    style: "MONSTAR",
  },
  // Add more product items here if needed
];

const orderInfo = [
  {
    id: "info1",
    label: "商品金額",
    value: "NT$600",
  },
  {
    id: "info2",
    label: "折扣金額",
    value: "-NT$50",
  },
  {
    id: "info3",
    label: "運費",
    value: "NT$60",
  },
  {
    id: "info4",
    label: "訂單總額",
    value: "NT$610",
  },
];
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
  width: 924px;
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
  padding-left: 254px;
}
.cart1 li:nth-child(3) {
  min-width: 45px;
  padding-left: 171px;
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
  width: 924px;
  display: flex;
  flex-direction: row;
}
.count{
  margin: 136px 30px;
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
  width: 200px;
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
  padding: 10px 0;
}
.price{
  margin: 140px 80px;
  font-size: 20px;
}
i{
  margin: 140px 10px;
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
  padding: 8px 7px 7px 0px;
  border: 1px solid #b5b5b5;
  border-radius: 10px 0 0 10px;
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
  text-align: right;
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
  margin-right: 25px;
  width: 100px;
  height: 45px;
  color: #f9f3e4;
  background-color: #d1825b;
  border-radius: 10px;
}

//訂購人資料
.user {
  width: 927px;
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
