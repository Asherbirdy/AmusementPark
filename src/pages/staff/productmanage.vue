<script></script>
<template>
  <el-tabs type="border-card">
    <!-- 商品選單： -->
    <el-tab-pane label="商品列表">
      <ProductSelectPDM />
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
