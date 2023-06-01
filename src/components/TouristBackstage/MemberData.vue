<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const formFields = [
  { id: 'name', label: '會員姓名：', name: 'name' },
  { id: 'birthdate', label: '出生日期：', name: 'birthDate', type: 'date' },
  { id: 'phone', label: '手機號碼：', name: 'phoneNum' },
  { id: 'email', label: '電子郵件：', name: 'emailAdd', type: 'email' },
  { id: 'place', label: '通訊地址：', name: 'address' },
];

const dialogVisible = ref(false);
const tableData = ref({});
const originalData = ref({});
const isInputFail = ref(false);

onMounted(async () => {
  try {
    const response = await axios.get(
      '/PDO/frontEnd/memberModify/memberModify.php'
    );
    const data = response.data;
    // console.log(data);

    if (data.length > 0) {
      const MEMBER = data[0]; // 獲取當前登入會員數據

      const fitData = {
        id: MEMBER.ACCOUNT,
        name: MEMBER.NAME,
        birthDate: MEMBER.BIRTHDAY ? MEMBER.BIRTHDAY.substring(0, 10) : '',
        // 先一定要有 MEMBER.BIRTHDAY，才判斷
        phoneNum: MEMBER.PHONE,
        emailAdd: MEMBER.EMAIL,
        address: MEMBER.ADDRESS,
      };

      tableData.value = fitData;
      originalData.value = { ...tableData.value };

      console.log(tableData.value);
    } else {
      console.log('沒有找到相關數據');
    }
  } catch (error) {
    console.error(error);
  }
});

const handleDateInput = event => {
  const input = event.target;
  const value = input.value;
  const isValidDate = /^\d{4}\d{2}\d{2}$/.test(value);

  if (isValidDate && value.length === 8) {
    const formattedDate = value.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    input.value = formattedDate;
  }
};

const saveData = async () => {
  try {
    // 发送修改后的数据到后端API
    const response = await axios.post(
      '/PDO/frontEnd/memberModify/updateMember.php',
      tableData.value
    );
    console.log('資料已儲存:', response.data);
  } catch (error) {
    console.error(error);
  }
};

const handleSaveData = async () => {
  let isAllFieldsEmpty = true;
  isInputFail.value = false;

  const validateField = field => {
    const value = tableData.value[field.name];

    if (field.name === 'address') {
      return value && value.trim() !== '';
    }

    if (field.name === 'phoneNum') {
      const phoneRegex = /^[0-9]{10}$/;
      return !value || phoneRegex.test(value.trim());
    }

    if (field.name === 'emailAdd') {
      const emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return !value || emailRegex.test(value.trim());
    }

    if (field.name === 'birthDate') {
      const dateRegex = /^(\d{4})(\d{2})(\d{2})$/;
      const isValidDate = !value || dateRegex.test(value.trim());

      if (isValidDate && value && value.length === 8) {
        tableData.value[field.name] = value.replace(
          /(\d{4})(\d{2})(\d{2})/,
          '$1-$2-$3'
        );
      }

      return isValidDate;
    }

    return true;
  };

  for (const field of formFields) {
    if (
      field.name !== 'name' &&
      (!tableData.value[field.name] ||
        tableData.value[field.name].trim() === '')
    ) {
      isAllFieldsEmpty = false;
    }

    if (!validateField(field)) {
      isInputFail.value = true;
    }
  }

  if (!isAllFieldsEmpty) {
    dialogVisible.value = false;
    await saveData();
    return;
  }

  if (isInputFail.value) {
    dialogVisible.value = false;
    saveData();
    return;
  }

  dialogVisible.value = false;
};

const handleCancelEdit = () => {
  tableData.value = { ...originalData.value };
  dialogVisible.value = false;
};
</script>

<template>
  <div class="member">
    <div class="title"><h3>會員資料</h3></div>
    <nav>
      <form>
        <!-- 使用 v-for 迴圈來顯示表單欄位 -->
        <input
          type="hidden"
          name="memberId"
          value="<?php echo $_SESSION['member_id']; ?>"
        />
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
      <el-button
        text
        @click="dialogVisible = true"
        style="
          height: 55px;
          font-size: 20px;
          background-color: #d1825b;
          color: white;
          width: 200px;
          border-radius: 10px;
        "
      >
        編輯
      </el-button>
    </section>
  </div>
  <el-dialog
    v-model="dialogVisible"
    width="50%"
    draggable
    style="height: 730px; background-color: #f9f3e4; border-radius: 10px"
  >
    <h1
      style="
        font-size: 35px;
        color: black;
        margin-left: 10px;
        margin-bottom: 5px;
        font-family: '微軟正黑體';
      "
    >
      編輯會員資料
    </h1>
    <section class="name" v-for="field in formFields" :key="field.id">
      <label
        class="label"
        :for="field.id"
        style="
          font-size: 26px;
          color: black;
          padding-left: 30px;
          font-family: '微軟正黑體';
        "
        >{{ field.label }}</label
      >
      <!-- 從原有的for迴圈裡挑出來日期單獨寫 -->
      <!-- 用 if else if else -->
      <template v-if="field.type === 'date'">
        <input
          v-model="tableData[field.name]"
          placeholder="YYYY/MM/DD"
          style="
            margin: 20px auto;
            height: 45px;
            width: 366px;
            font-size: 20px;
            color: black;
            border-radius: 5px;
            padding-left: 5px;
          "
          @input="handleDateInput"
        />
      </template>
      <!-- 從原有的for迴圈裡挑出來email單獨寫 -->
      <template v-else-if="field.type === 'email'">
        <input
          v-model="tableData[field.name]"
          type="email"
          style="
            margin: 20px auto;
            height: 45px;
            width: 366px;
            font-size: 20px;
            color: black;
            border-radius: 5px;
            padding-left: 5px;
          "
        />
      </template>
      <template v-else>
        <!-- 剩下照樣for迴圈 -->
        <input
          :value="tableData[field.name]"
          @input="tableData[field.name] = $event.target.value"
          style="
            margin: 20px auto;
            height: 45px;
            width: 366px;
            font-size: 20px;
            color: black;
            border-radius: 5px;
            padding-left: 5px;
          "
        />
      </template>
    </section>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          style="
            margin: 15px;
            font-size: 20px;
            height: 45px;
            color: #fff;
            background-color: #d1825b;
            border-radius: 10px;
            font-family: '微軟正黑體';
          "
          @click="handleCancelEdit"
        >
          取消
        </el-button>
        <el-button
          style="
            margin: 15px;
            padding-top: 11px;
            font-size: 20px;
            color: #fff;
            height: 45px;
            background-color: #d1825b;
            border-radius: 10px;
            font-family: '微軟正黑体';
          "
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          @click="handleSaveData"
        >
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
      }
    }
    .monstar {
      background: #fff;
      border-radius: 2rem;
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
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 40px;
  }
}
</style>
