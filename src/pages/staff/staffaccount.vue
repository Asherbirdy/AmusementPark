<script setup>
import axios from 'axios';
// import { checkLoginStatus } from '@/utils/backstageCheck';
let showmodal = ref(false);
const router = useRouter();

const openModal = () => {
  showmodal.value = true;
};

const closeModal = () => {
  showmodal.value = false;
};
</script>
<template>
  <modal-insert v-model="showmodal" @close-modal="closeModal"></modal-insert>
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
