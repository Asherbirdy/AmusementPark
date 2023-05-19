<template>
  <el-dialog v-model="isOpen" title="退票資訊" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isOpen = false">Cancel</el-button>
        <el-button type="primary" @click="isOpen = false"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
const isOpen = ref(true);
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
