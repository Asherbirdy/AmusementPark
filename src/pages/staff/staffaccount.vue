<script setup>
import axios from 'axios';
const router = useRouter();

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


</script>
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="高階主管" />
    <el-checkbox label="主管" />
    <el-checkbox label="員工" />
    <el-button type="primary">新增帳號</el-button>
  </el-checkbox-group>
  <StaffAccountSFA />
</template>

<style scoped lang="scss"></style>
<route>
    {
        meta: {
          layout: 'admin',
        }
    }
</route>
