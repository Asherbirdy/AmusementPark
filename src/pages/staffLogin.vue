<template>
  <div class="container">
    <h3>園區登入介面</h3>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="帳號" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密碼" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >送出</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
// 定義一筆資料並綁定JS
const ruleForm = reactive({
  username: "",
  password: "",
});

const rules = {
  username: [
    { required: true, message: "請輸入帳號", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        // 驗證規則
        const pattern = /^[a-zA-Z0-9_-]{4,16}$/;
        if (!value || pattern.test(value)) {
          callback();
        } else {
          callback(new Error("帳號格式不正確"));
        }
      },
      trigger: "blur",
    },
  ],
  password: [{ required: true, message: "請輸入密碼", trigger: "blur" }],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

h3 {
  text-align: center;
  margin-bottom: 50px;
}
</style>
