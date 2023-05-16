<script></script>
<template>
  <el-tabs type="border-card">
    <el-tab-pane label="商品列表">
      <!-- 選單 -->
      <ProductSelectPDM />
      <!-- Table -->
      <ProductTablePDM />
    </el-tab-pane>
    <!-- 商品分類： -->
    <el-tab-pane label="商品分類">
      <TagsTable />
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss"></style>
<route>
    {
        meta: {
          layout: 'admin',
        }
    }
</route>
