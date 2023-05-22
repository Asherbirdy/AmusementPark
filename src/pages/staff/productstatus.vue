<script></script>
<template>
  <!-- 搜尋欄： -->
  <header>
    <SearchBarEmailPDS class="searchbar" />
  </header>
  <!-- Tabs欄 -->
  <el-tabs type="border-card">
    <el-tab-pane label="訂票">
      <TicketListPDS />
    </el-tab-pane>
    <el-tab-pane label="商品訂單">
      <ProductListPDS />
    </el-tab-pane>
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
