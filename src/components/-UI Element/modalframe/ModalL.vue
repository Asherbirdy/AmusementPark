<script setup></script>

<template>
  <div class="bgc">
    <div class="layout">
      <el-icon class="iconClose" @click="() => {
          $emit('close-modal');
        }
        ">
        <CircleClose />
      </el-icon>
      <slot> </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//外框
.bgc {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(217, 217, 217, 0.8);
}

.iconClose {
  margin-top: 10px;
  font-size: 50px;
  margin-left: 1065px;
  color: #90420a;
  cursor: pointer;
}

.layout {
  width: 1140px;
  margin-top: 100px;
  padding: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: $maincolor1;
  border: 5px solid $textcolor4;
  border-radius: 35px;
}
</style>
