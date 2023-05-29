<script setup>
const dialogVisible = ref(false);
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 定義表單欄位的資訊
const formFields = [
  { id: 'name', label: '會員姓名：', name: 'name' },
  { id: 'birthdate', label: '出生日期：', name: 'birthDate' },
  { id: 'phone', label: '手機號碼：', name: 'phoneNum' },
  { id: 'email', label: '電子郵件：', name: 'emailAdd' },
  { id: 'place', label: '通訊地址：', name: 'address' },
];

// 建立 tableData 的 ref 變數
const tableData = ref({});

// 在組件掛載完成後執行的函式
onMounted(async () => {
  // 從 JSON 檔案獲取會員資料
  const res = await axios.get('../../src/assets/json/memberInfo.json');
  const data = res.data.memberInfo;
  // 將第一筆會員資料存入 tableData
  tableData.value = data[0];
});
</script>

<template>
  <div class="member">
    <div class="title"><h3>會員資料</h3></div>
    <nav>
      <form>
        <!-- 使用 v-for 迴圈來顯示表單欄位 -->
        <section class="name" v-for="field in formFields" :key="field.id">
          <label :for="field.id">{{ field.label }}</label>
          <span>{{ tableData[field.name] }}</span>
        </section>
      </form>
      <div class="monstar">
        <MonsterDivo id="divo" />
      </div>
    </nav>
    <!-- 彈窗 -->
    <section class="btn-wrap">
      <el-button text @click="dialogVisible = true" class="el-button">
        編輯
      </el-button>
    </section>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title="編輯會員資料"
    width="50%"
    height="400px"
    font-size="26px"
    draggable
  >
    <div>
      <section class="name" v-for="field in formFields" :key="field.id">
        <label :for="field.id">{{ field.label }}</label>
        <input
          :value="tableData[field.name]"
          @input="tableData[field.name] = $event.target.value"
        />
      </section>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          確認儲存
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.member {
  background-color: $maincolor1;
  width: 75%;
  font-size: 20px;
  margin-left: 40px;
  .title h3 {
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #fff;
    background-color: $maincolor3;
  }
  nav {
    margin: 40px;
    display: flex;
    justify-content: space-between;
    form {
      margin: auto 0;
      .name {
        margin-top: 40px;
      }
      section {
        margin-bottom: 5%;
        margin: 40px 20px;
        label {
          font-size: 20px;
        }
        .dialog-footer button:first-child {
          margin-right: 10px;
        }

        // input {
        //   font-size: 20px;
        //   padding: 0 10px;
        //   box-sizing: border-box;
        // }
        // .inp_short {
        //   width: 200px;
        //   height: 40px;
        //   border-radius: 10px;
        // }
        // .inp_long {
        //   width: 300px;
        //   height: 40px;
        //   border-radius: 10px;
        // }
      }
    }
    .monstar {
      // width: 400px;
      // height: 400px;
      background: #fff;
      border-radius: 2rem;
      // margin: 40px;
      #divo {
        width: 400px;
        height: 400px;
      }
    }
  }

  .btn-wrap {
    margin: 0 auto;
    width: 60%;
    display: flex;
    // justify-content: space-between;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 40px;
    .el-button {
      // width: 150px;
      height: 55px;
      font-size: 20px;
      background-color: #d1825b;
      color: white;
      width: 200px;
      border-radius: 10px;
    }
  }
}
</style>
