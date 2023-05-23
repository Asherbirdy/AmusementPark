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
    <table class="form">
      <thead>
        <tr class="title">
          <th class="SN">序號</th>
          <th class="orderdate">購票日期</th>
          <th class="date">使用期限(一日票)</th>
          <th class="type">票種</th>
          <th class="express">快速通關</th>
          <th class="QR">票卷QR</th>
        </tr>
        <tr class="detail">
          <td class="SN">MS102304250001</td>
          <td class="orderdate">2023/4/27</td>
          <td class="date">2023/5/14 ~ 2023/5/21</td>
          <td class="type">全票</td>
          <td class="express">有</td>
          <td class="QR">
            <!-- <router-link to="/AmusementPark/src/assets/img/MS102304250001.png"> -->
              <img src="../../assets/img/MS102304250001.png" alt="">
            <!-- </router-link> -->
          </td>
        </tr>
        <tr v-for="tickOrder in tableData" :key="tickOrder.id">
          <!-- 補0補至9位數 -->
          <td>{{ tickOrder.id.toString().padStart(9, '0') }}</td>
          <td>{{ tickOrder.date }}</td>
          <td>{{ tickOrder.type }}</td>
          <td>{{ tickOrder.num }}</td>
          <td>{{ tickOrder.price }}</td>
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
tr,td{
    height: 70px;
    line-height: 70px;

}
td{
    border-bottom: 1px solid #000;
}
.tick-order-page{
    width: 75%;
    position: relative;
    display: flex;
    font-size: 20px;
    margin-left: 40px;
    .form{
        position: absolute;
        width: 100%;
        background-color: $maincolor1;
        text-align: center;
        
        .title {
            color: #FFF;
            background-color: $maincolor3;
        }
        .detail{
            width: 100%;
            .SN {
                // width: 220px;
                width: 20%;
            }
            .oderdate{
                // width: 300px;
                width: 20%;
            }
            .date{
                // width: 60px;
                width: 30%;
            }
            .type{
                // width: 120px;
                width: 10%;
            }
            .express{
                // width: 60px;
                width: 10%;
                #edit{
                    cursor: pointer;
                }
            }
            .QR{
                width: 10%;
                position: relative;
                img{
                  position: absolute;
                  height: 100%;          
                  margin-left: 20%;  
                  cursor: pointer;
                }        
            }

        }
    }
}

</style>
