<script setup>
import { useRouter } from 'vue-router';

const router  = useRouter();
// 資料
let bookingData = reactive([
  {
    adult: {
      ticketNum: 1,
      fastForwad: false,
    },
  },
  {
    student: {
      ticketNum: 1,
      fastForwad: false,
    },
  },
  {
    children: {
      ticketNum: 1,
      fastForwad: false,
    },
  },
  {
    concession: {
      ticketNum: 1,
      fastForwad: false,
    },
  },
]);

// 清空按鈕
const clearOut = () => {
  bookingData[0].adult.ticketNum = 1,
  bookingData[0].adult.fastForwad = false,
  bookingData[1].student.ticketNum = 1,
  bookingData[1].student.fastForwad = false,
  bookingData[2].children.ticketNum = 1;
  bookingData[2].children.fastForwad = false;
  bookingData[3].concession.ticketNum = 1;
  bookingData[3].concession.fastForwad = false;
  // 清空localStorage
  localStorage?.removeItem('bookingData');
};

// 將資料訪到local函式：
const addDataToLocal = () =>{
  localStorage.setItem('bookingData', JSON.stringify({
    bookingData
  }));
};


// 夾到購物車
const addToCart = () =>{
  console.log('test')
  addDataToLocal()
};

const buyTicket = () =>{
  console.log('test');
   addDataToLocal();
   router.push('/cart');
  
};

</script>
<template>
  <div>
    <table>
      <tr>
        <th>票種</th>
        <th>適用對象</th>
        <th>票價</th>
        <th>張數</th>
        <th>快速通關</th>
      </tr>
      <tr>
        <td>全票</td>
        <td class="ex">一般成人，身高110cm以上視為成人</td>
        <td>NT.500</td>
        <td>
          <el-input-number
            v-model="bookingData[0].adult.ticketNum"
            :min="0"
            class="count"
            width:10px
          />
        </td>
        <td>
          <input v-model="bookingData[0].adult.fastForwad" type="checkbox" />
        </td>
      </tr>
      <tr>
        <td>學生票</td>
        <td class="ex">入園需持當學期註冊學生證之學生(限本人使用)</td>
        <td>NT.400</td>
        <td>
          <el-input-number
            v-model="bookingData[1].student.ticketNum"
            :min="0"
            class="count"
            width:10px
          />
        </td>
        <td>
          <input v-model="bookingData[1].student.fastForwad" type="checkbox" />
        </td>
      </tr>
      <tr>
        <td>兒童票</td>
        <td class="ex">4歲~12歲，身高未滿110cm兒童</td>
        <td>NT.250</td>
        <td>
          <el-input-number
            v-model="bookingData[2].children.ticketNum"
            :min="0"
            class="count"
            width:10px
          />
        </td>
        <td>
          <input
            v-model="bookingData[2].children.fastForwad"
            type="checkbox"
          />
        </td>
      </tr>
      <tr>
        <td>優待票</td>
        <td class="ex">持有身心障礙證明者與1位陪同者、孕婦、65歲以上長者</td>
        <td>NT.200</td>
        <td>
          <el-input-number
            v-model="bookingData[3].concession.ticketNum"
            :min="0"
            class="count"
            width:10px
          />
        </td>
        <td>
          <input
            v-model="bookingData[3].concession.fastForwad"
            type="checkbox"
          />
        </td>
      </tr>
      <tr>
        <td colspan="10" class="ex">4歲以下免費入場</td>
      </tr>
    </table>
  </div>
  <div class="btnbox">
  <btn
      class="btn"
      button-color="#D1825B"
      button-text-color="white"
      @click="clearOut"
    >
      <h3>清空</h3>
    </btn>
    <btn
      :style="{ width: '150px' }"
      class="btn"
      button-color="#D1825B"
      button-text-color="white"
      @click="addToCart"
    >
      <h3>加入購物車</h3>
    </btn>
    <btn
        class="btn"
        button-color="#D1825B"
        button-text-color="white"
        @click="buyTicket"
      >
        <h3>立即購買</h3>
      </btn>
  </div>
</template>

<!-- <script>
export default {
  name: 'MyComponent',
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
  },
}
</script> -->
<style lang="scss" scoped>
table,
th,
td {
  border: 2px solid #d1825b;
}

th,
td {
  padding: 8px;
}

table {
  margin: 0 auto;
  // width: 1000px;

  tr {
    th {
      background-color: #d1825b;
      text-align: center;
      color: white;
      font-size: 24px;
    }

    td {
      background-color: #f9f3e4;
      text-align-last: center;
      font-size: 24px;
    }

    .ex {
      text-align-last: left;
    }
  }
}

.btnbox {
  // margin-top: 30px;
  // display: flex;
  // gap: 200px;
  // margin-left: 23%;
  width: 400px;
  display: flex;
  float: right;
  justify-content: space-between;
  margin-bottom: 100px;
  margin-right: 60px;
  margin-top: 20px;
}
</style>
