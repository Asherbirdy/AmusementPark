<template>
  <el-dialog title="刪除員工" width="30%" center>
    <span>
      <p>員工編號:{{ id }}</p>
      <p>員工帳號：{{ account }}</p>
      <p>權限：{{ permissions }}</p>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="
            () => {
              deleteMember();
              $emit('close-modal');
            }
          "
        >
          刪除
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import axios from 'axios';
//定義emit function
const emit = defineEmits(['get-list']);

//刪除api
const deleteApi = async () => {
  try {
    const res = await axios.post(
      '/api/PDO/backEnd/staffAccount/staffAccountDelete.php',
      {
        deleteMemberData,
      }
    );
    console.log(res);
    alert('刪除成功');
  } catch (err) {
    console.log(err);
  }
};

// 外部資料導入資訊
const props = defineProps({
  id: {
    type: Number,
    default: '資料沒進來',
  },
  account: String,
  permissions: String,
});

// 監聽目前退票數量：
const tickets = ref(0);

// 帳號名稱 / 票型  / 時間  / 快速通關  / 退票數量：
let deleteMemberData = reactive({
  id: 0,
  account: '',
  permissions: '',
});

// 退票按鈕函式
const deleteMember = async () => {
  deleteMemberData.id = props.id;
  deleteMemberData.account = props.account;
  deleteMemberData.permissions = props.permissions;
  console.log(deleteMemberData.permissions);

  if (deleteMemberData.permissions === 'DBA') {
    alert('冷靜 你想幹嘛');
  } else {
    await deleteApi();
    emit('get-list');
  }
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
