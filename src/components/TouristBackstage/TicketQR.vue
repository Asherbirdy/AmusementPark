<script setup>
import axios from 'axios';
import dayjs from 'dayjs';

//day.js 日期格式轉換函式
const formatDate = (dateString) => {
  return dayjs(dateString).format('YYYY/MM/DD');
};

let tableData = ref([]);

// 定義取資料的api function
const getTick = async () => {
  try {
    const res = await axios.get('/api/PDO/frontEnd/tickOrder/tickOrderSelect.php');
    // API 抓取到的資料：
    const data = res.data;

    // 把抓到的票券種類轉成中文
    const tickIdZh = data.map(tickOrder => {
      const { TICK_ID } = tickOrder;

      if (TICK_ID === 1) {
        tickOrder.type = '全票';
      } else if (TICK_ID === 2) {
        tickOrder.type = '學生票';
      } else if (TICK_ID === 3) {
        tickOrder.type = '兒童票';
      } else {
        tickOrder.type = '優惠票';
      }
      return tickOrder;
    });

     // 把抓到的快速通關轉成中文
      const fastPassZh = data.map(tickOrder => {
      const { FAST_PASS } = tickOrder;

      if (FAST_PASS === 1) {
        tickOrder.fastPass = '有';
      } else {
        tickOrder.fastPass = '無';
      }
      return tickOrder;
    });


    // console.log(data);
    // 將資料轉成 element 可以讀的參數，參考 public/json/facility_qrcode.json
    const fitData = data.map(tickOrder => ({
      id: tickOrder.TICK_ORDER_ID,
      type: tickOrder.type ,
      date: formatDate(tickOrder.TICK_DATE),
      price: tickOrder.TICK_PRICE,
      num: tickOrder.TICK_NUM,
      fastPass: tickOrder.fastPass ,
      sevenDate:  tickOrder.START_DATE && tickOrder.END_DATE
          ? `${ formatDate(tickOrder.START_DATE)} 至 ${ formatDate(tickOrder.END_DATE)}`
          : '',
          
    }));
    tableData.value = fitData;
    console.log(tableData);
  } catch (error) {
    console.error(error);
  }
};

// 將資料傳到畫面
onMounted(() => {
  getTick();
});
</script>

<template>
  <div class="tick-order-page">
    <table class="form">
      <thead>
        <tr class="title">
          <th class="QR">票卷QR</th>
          <th class="SN">序號</th>
          <th class="orderdate">購票日期</th>
          <th class="date">使用期限(一日票)</th>
          <th class="type">票種</th>
          <th class="express">快速通關</th>
          <th class="cancel">退票</th>
        </tr>
        <tr class="detail">
          <td class="QR">          
            <!-- <router-link to="/AmusementPark/src/assets/img/MS102304250001.png"> -->
              <img src="../../assets/img/MS102304250001.png" alt="">
            <!-- </router-link> -->
          </td>          
          <td class="SN">MS102304250001</td>
          <td class="orderdate">2023/04/27</td>
          <td class="date">2023/05/14 ~ 2023/05/21</td>
          <td class="type">全票</td>
          <td class="express">有</td>
          <td class="cancel"><CloseBold style="width: 1em; height: 1em; margin-right: 8px" /></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tickOrder in tableData" :key="tickOrder.id">
          <!-- 補0補至9位數 -->
          <td>ORcode</td>
          <td>{{ tickOrder.id.toString().padStart(9, '0') }}</td>
          <td>{{ tickOrder.date }}</td>
          <!-- <td>{{ tickOrder.num }}</td> -->
          <td>{{ tickOrder.sevenDate }}</td>
          <td>{{ tickOrder.type }}</td>
          <td>{{ tickOrder.fastPass }}</td>
          <td class="cancel"><CloseBold style="width: 1em; height: 1em; margin-right: 8px" /></td>
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
            font-weight:bold;
        }
        .detail{
            width: 100%;
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
            .SN {
                width: 20%;
            }
            .oderdate{
                width: 20%;
            }
            .date{
                width: 20%;
            }
            .type{
                width: 10%;
            }
            .express{
                width: 10%;
                #edit{
                    cursor: pointer;
                }
            }
            .cancel{
              width: 10%;
            }

        }
    }
}

</style>
