<script setup></script>

<template>
  <div class="modal">
    <!-- <el-icon class="modal__iconClose"><CircleClose /></el-icon> -->
    <slot> </slot>
  </div>
</template>

<style lang="scss" scoped>
//外框
.modal {
  background-color: $maincolor1;
  width: 730px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 80px;
  border: 3px solid #ce5b5b;
  border-radius: 20px;

  color: $textcolor3;

  &__iconClose {
    float: right;
    margin-top: 29px;
    margin-right: 40px;
    font-size: 40px;
    color: #90420a;
  }
}
</style>
