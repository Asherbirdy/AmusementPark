<template>
  <el-input
    v-model="textarea"
    maxlength="10"
    placeholder="說明關閉設施原因"
    show-word-limit
    type="textarea"
  />
</template>

<script setup>
const textarea = ref('');
</script>
