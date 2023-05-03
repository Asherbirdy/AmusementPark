<template>
  <div>
    <el-radio-group v-model="radio">
      <el-radio :label="3">維修中</el-radio>
      <el-radio :label="6">停運中</el-radio>
    </el-radio-group>
  </div>
</template>

<script setup>
const radio = ref(3);
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>
