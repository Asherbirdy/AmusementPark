<template>
  <el-dialog title="編輯員工資料" width="30%" center>
    <span>
      <p>員工編號:{{ id }}</p>
      <!-- <p>員工帳號：{{ account }}</p> -->
      <div class="input-wrap">
        <p>修改員工帳號:</p>
        <el-input
          v-model="changeAccount"
          class="account-input"
          :placeholder="`${account}`"
        />
      </div>
      <div class="input-wrap">
        <p>修改員工密碼:</p>
        <el-input
          v-model="changePassword"
          class="account-input"
        />
      </div>
      <div class="input-wrap">
        <p>修改員工權限:</p>
        <!-- <p>{{ permissions }}</p> -->
        <el-select
          v-model="changePermissions"
          class="permissions-input"
          :placeholder="`${permissions}`"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="
            () => {
              changeMember();
              $emit('close-update-modal');
            }
          "
        >
          確定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import axios from 'axios';
import { Search } from '@element-plus/icons-vue';

// 外部資料導入資訊
const props = defineProps({
  id: {
    type: Number,
    default: '資料沒進來',
  },
  account: String,
  password:String,
  permissions: String,
});

// 監聽目前更改數據：
const changeAccount = ref('');
const changePassword = ref('');
const changePermissions = ref('');

// 定義select 選項、value、名稱
const options = [
  { key: '1', label: '一般員工', value: '0' },
  { key: '2', label: '高階主管', value: '1' },
  { key: '3', label: '園長', value: '9' },
];

let changeMemberData = reactive({
  id: 0,
  account: '',
  password:'',
  permissions: '',
});

// 退票按鈕函式
const changeMember = () => {
  changeMemberData.id = props.id;
  //判斷是否輸入空值
  changeMemberData.account = changeAccount.value === '' ? props.account : changeAccount.value;
  changeMemberData.password = changeAccount.value === '' ? props.password : changeAccount.value;
  changeMemberData.permissions = changePermissions.value===''? props.permissions : changePermissions.value;

  if(changeMemberData.permissions === '園長') {
    changeMemberData.permissions =9;
  }else if(changeMemberData.permissions ==='高階主管'){
    changeMemberData.permissions = 1;
  }else if (changeMemberData.permissions ==='一般員工') {
    changeMemberData.permissions = 0;
  }

  console.log(changeMemberData.id);
  console.log(changeMemberData.account);
  console.log(changeMemberData.password);
  console.log(changeMemberData.permissions);

    if (changeMemberData.permissions === 'DBA') {
      alert('冷靜 你想幹嘛');
    } else {
      axios
        .post('/api/PDO/staffAccount/staffAccountUpdate.php', {
            changeMemberData,
        })
        .then(res => {
          console.log(res);
          alert('更新成功');
        })
        .catch(err => {
          console.log(err);
        });
    }
};
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.account-input {
  width: 50%;
  margin-left: 5%;
}
.permissions-input {
  width: 50%;
  margin-left: 5%;
}

.input-wrap {
    display: flex;
    margin: 5% 0;
}
</style>
