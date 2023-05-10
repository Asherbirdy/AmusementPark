<template>
  <main>
    <slot>
      <el-icon class="iconClose"><CircleClose /></el-icon>
    </slot>
  </main>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
//外框
.iconClose {
  margin-top: 10px;
  font-size: 50px;
  margin-left: 1065px;
  color: #90420a;
}

main {
  margin-top: 100px;
  padding: 0;
  width: 1140px;
  height: 850px;
  background-color: $maincolor1;
  border: 5px solid #ce5b5b;
  border-radius: 35px;
}
.iconClose {
}
</style>
