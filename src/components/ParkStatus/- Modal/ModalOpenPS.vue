<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="強制開啟 設施一"
    width="30%"
    center
  >
    <span> 離開啟日還有1日，確定要打開設施設施一嗎? </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          開啟設施
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref } from 'vue';

const centerDialogVisible = ref(true);
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
