<template>
  <AdminNav />
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" style="border: 1px solid black"> </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style>
body {
  background-color: antiquewhite;
}

.common-layout {
  border: 1px solid black;
  width: 1280px;
}
</style>
