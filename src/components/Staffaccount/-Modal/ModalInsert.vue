<template>
  <el-dialog>
    <el-form
      ref="staffRef"
      :model="staff"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="帳號" prop="account">
        <el-input v-model="staff.account" />
      </el-form-item>
      <el-form-item label="密碼" prop="pwd">
        <el-input v-model="staff.pwd" />
      </el-form-item>
      <el-form-item label="權限" prop="permissions">
        <el-select v-model="staff.permissions" placeholder="員工">
          <el-option label="員工" value="0" />
          <el-option label="主管" value="1" />
          <el-option label="園長" value="9" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="
            () => {
              submitForm(staffRef);
              $emit('close-modal');
            }
          "
        >
          Create
        </el-button>
        <el-button @click="resetForm(staffRef)"> Reset </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

//定義emit function
const emit = defineEmits(['get-list']);
//定義新增function
const addAccount = async () => { // 将addAccount函数声明为异步函数
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/backEnd/staffAccount/staffSignup.php`, {
      account: staff.account,
      pwd: staff.pwd,
      permissions: staff.permissions,
    });

    console.log(res.data.status);
    const dataToJSON = JSON.stringify(res.data);

    // 如果新增成功
    if (res.data.status === 'true') {
      alert('新增成功');
      
    } else {
      alert('新增失敗');
    }
  } catch (err) {
    console.log(err);
    alert('伺服器問題');
  }
};


const router = useRouter();

const formSize = ref('default');
const staffRef = ref<FormInstance>();
const staff = reactive({
  account: '',
  pwd: '',
  permissions: '',
});

const rules = reactive<FormRules>({
  account: [
    { required: true, message: '請輸入帳號', trigger: 'blur' },
    { min: 3, max: 12, message: 'Length should be 3 to 12', trigger: 'blur' },
  ],
  pwd: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    { min: 3, max: 12, message: 'Length should be 3 to 12', trigger: 'blur' },
  ],
  Permissions: [
    {
      required: true,
      message: '請選擇權限',
      trigger: 'change',
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => { // 使用async关键字声明回调函数为异步函数
    if (valid) {
      console.log('submit!');
      //呼叫新增function
      await addAccount(); // 在addAccount函数前面加上await
      emit('get-list');
    } else {
      console.log('error submit!', fields);
    }
  });
};


const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
