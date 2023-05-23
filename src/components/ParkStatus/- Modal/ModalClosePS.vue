<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="關閉：[設施一] "
    width="40%"
    center
    class="container"
  >
    <!-- Radio -->
    <RadioStatusPS />
    <!-- 選擇時間 -->
    <ParkStatusTimePicker />
    <!-- 輸入框 -->
    <InputLimitTenPS />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          確認
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
let centerDialogVisible = ref(true);
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
