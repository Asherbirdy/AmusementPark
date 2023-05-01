<script setup></script>
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
