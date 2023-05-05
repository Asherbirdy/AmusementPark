<script></script>
<template>
  <header>
    <SearchBarEmailPDS class="searchbar" />
  </header>

  <el-tabs type="border-card">
    <el-tab-pane label="訂票">
      <main><TicketListPDS /></main>
    </el-tab-pane>
    <el-tab-pane label="商品訂單"
      ><main><ProductListPDS /></main
    ></el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
header {
  .searchbar {
    margin-bottom: 15px;
  }
}

main {
  overflow: scroll;
}
</style>
<route>
    {
        meta: {
          layout: 'admin',
        }
    }
</route>
