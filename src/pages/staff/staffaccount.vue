<script setup>
import axios from 'axios';
// import { checkLoginStatus } from '@/utils/backstageCheck';
let showmodal = ref(false);
const router = useRouter();
// checkLoginStatus();

axios
  .post('/api/PDO/staffAccount/staffLoginCheck.php')
  .then(res => {
    if(res.data ==="") {
      // console.log("還沒登入");
      alert('請先登入');
      router.push('/staff/login');
    }else {
      // console.log("已經登入了");
    }
  })
  .catch(err => {
        console.log(err);
        alert('登入狀態檢查出錯');
      });

const openModal = () => {
  showmodal.value = true;
};
</script>
<template>
  <modal-insert v-model="showmodal"></modal-insert>
  <el-checkbox-group v-model="checkList" class="title-bar">
    <div class="checkbox-wrap">
      <el-checkbox label="園長" />
      <el-checkbox label="高階主管" />
      <el-checkbox label="一般員工" />
    </div>
    <el-button type="primary" style="" @click="openModal">新增帳號</el-button>
  </el-checkbox-group>
  <StaffAccountSFA />
</template>

<style scoped lang="scss">
.title-bar {
  display: flex;
  justify-content: space-between;
}
</style>
<route>
    {
        meta: {
          layout: 'admin',
        }
    }
</route>
