<script setup>
const value1 = ref(true);
const value2 = ref(true);
</script>
<template>
  <div class="container">
    <ParkStatusTablePS />
    <aside>
      <el-button type="primary" default>官網</el-button>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 30px;

  aside {
    width: 50%;
    height: 400px;
    background-color: rgb(222, 222, 222);
  }
}
</style>

<route>
    {
        meta: {
          layout: 'admin',
        }
    }
</route>
