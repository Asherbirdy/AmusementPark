<script setup></script>
<template>
  <div class="container">
    <ParkStatusTablePS />
    <aside>
      <router-link to="/map" target="_blank">
        <el-button type="primary" default>官網地圖</el-button>
      </router-link>
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
    border: 1px solid rgb(234, 234, 234);
    background-image: url(../../assets/img/MAP.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
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
