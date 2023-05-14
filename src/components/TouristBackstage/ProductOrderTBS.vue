<script setup>
import axios from 'axios';

let tableData = ref([]);

// 將資料傳到畫面
onMounted(() => {
  axios.get('../public/json/productOrder.json').then(res => {
    // API 抓取到的資料：
    const data = res.data.productOrder;
    console.log(data);
    // 將資料轉成 element 可以讀的參數，參考 public/json/facility_qrcode.json
    const fitData = data.map(productOrder => ({
      id: productOrder.id,
      name: productOrder.name,
      date: productOrder.date,
      price: productOrder.price,
      num: productOrder.num,
      discount: productOrder.discount,
      total: productOrder.total,
      statuses: productOrder.status,
    }));
    //
    tableData.value = fitData;
    console.log(tableData);
  });
});
</script>

<template>
  <div class="tick-order-page">
    <tour-title class="title">
      <myOrder width="40" />
        我的訂單
    </tour-title>
    <table class="form">
      <thead>
        <tr>
          <th>訂單編號</th>
          <th>訂單日期</th>
          <th>商品名稱</th>
          <th>數量</th>
          <th>商品金額</th>
          <th>折扣金額</th>
          <th>訂單總額</th>
          <th>訂單狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="productOrder in tableData" :key="productOrder.id">
          <td>{{ productOrder.id }}</td>
          <td>{{ productOrder.date }}</td>
          <td>{{ productOrder.name }}</td>
          <td>{{ productOrder.num }}</td>
          <td>{{ productOrder.price }}</td>
          <td>{{ productOrder.discount }}</td>
          <td>{{ productOrder.total }}</td>
          <td>{{ productOrder.statuses }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.title {
  width: 265px;
  height: 85px;
  margin-left: 10%;
  margin-bottom: 5%; 
}

.form {
  margin: 0 auto;
  border-collapse: collapse;
  margin-bottom: 20px;
  width: 1000px;
  border-radius: 10px; 
  overflow: hidden;
  outline: 1px solid #c0590e;
}

.form th,
.form td {
  outline: 1px solid #c0590e;
  padding: 8px;
  text-align: center;
  line-height: 165px;
  font-size: 20px;
  font-family: $font-family;
}

.form th {
  background-color: #d1825b;
  font-weight: bold;
  color: white;
  height: 80px;
}

tr {
  background-color: #f9f3e4;
  height: 165px;
}

.form tr:nth-child(even) {
  background-color: #f9f9f9;
}

.form tr:hover {
//   background-color: #ddd;
}

.form td:last-child {
  text-align: center;
}
.form tfoot td {
  font-weight: bold;
}

@media (max-width: 600px) {
  .form tr:nth-child(even) {
    background-color: transparent;
  }

  .form th,
  .form td {
    display: block;
    padding: 6px;
  }

  .form th {
    text-align: right;
  }

  .form td:last-child {
    text-align: center;
  }
}
</style>
