<script setup>
</script>
<template>
  <el-checkbox-group v-model="checkList" class="title-bar">
    <div class="checkbox-wrap">
      <el-checkbox label="園長" />
      <el-checkbox label="高階主管" />
      <el-checkbox label="一般員工" />
    </div>
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
