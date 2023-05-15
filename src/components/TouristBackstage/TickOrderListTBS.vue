<script setup>
import axios from 'axios';

let tableData = ref([]);

// 將資料傳到畫面
onMounted(() => {
  axios.get('/api/PDO/touristBackStage/tickOrderSelect.php').then(res => {
    // API 抓取到的資料：
    const data = res.data;
    console.log(data);
    // 將資料轉成 element 可以讀的參數，參考 public/json/facility_qrcode.json
    const fitData = data.map(tickOrder => ({
      id: tickOrder.TICK_ORDER_ID,
      type: tickOrder.TICK_NAME,
      date: tickOrder.TICK_DATE,
      price: tickOrder.TICK_PRICE,
      num: tickOrder.TICK_NUM,
    }));
    //
    tableData.value = fitData;
    // console.log(tableData);
  });
});
</script>

<template>
  <div class="tick-order-page">
    <tour-title class="title">
      <tickOrder width="40" />
      購票紀錄
    </tour-title>
    <table class="form">
      <thead>
        <tr>
          <th>購票編號</th>
          <th>購票日期</th>
          <th>票種</th>
          <th>數量</th>
          <th>票價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tickOrder in tableData" :key="tickOrder.id">
          
          <!-- 補0補至9位數 -->
          <td>{{ tickOrder.id.toString().padStart(9, '0') }}</td>
          <td>{{ tickOrder.date }}</td>
          <td>{{ tickOrder.type }}</td>
          <td>{{ tickOrder.num }}</td>
          <td>{{ tickOrder.price }}</td>
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
  background-color: #ddd;
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
