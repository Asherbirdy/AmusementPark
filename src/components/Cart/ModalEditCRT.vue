<template>
  <el-dialog :title="ticketType" width="30%" center>
    <span class="tickets">
      <p>票數：</p>

      <el-input-number v-model="ticketNum" :min="1" @change="handleChange" />
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="
            () => {
              fixTickets();
              $emit('close-modal');
            }
          "
          >修改</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import axios from 'axios';
import { nextTick, onMounted } from 'vue';
import { useTest, getSessionBookingData } from '../../composables';
// 外部資料導入資訊
const emit = defineEmits(['show-order', 'update-session']);

const props = defineProps({
  ticketType: {
    type: String,
    required: true,
  },
  ticketAmount: {
    type: Number,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  ticketId: {
    type: Number,
  },
  orderId: {
    type: Number,
  },
  fassPass: {
    type: Boolean,
    required: true,
  },
});

console.log(props.ticketAmount);

let ticketNum = ref(props.ticketAmount);

onMounted(() => {
  ticketNum.value = props.ticketAmount;
});

const handleChange = value => {
  ticketNum.value = value;
};

console.log('傳值', props);

// 退票按鈕函式
const fixTickets = () => {
  console.log('修改票數', ticketNum.value, '張');
  if (sessionStorage.getItem('token')) {
    const transferToDB = reactive({
      ORDER_ID: props.orderId,
      TICK_ORDER_ID: props.ticketId,
      TICK_NUM: ticketNum.value,
      TOTAL_PRICE: props.ticketPrice * ticketNum.value,
    });

    // edit函式
    async function editTick() {
      const ticketType = props.ticketType.split(' ')[1];
      console.log('票型', ticketType);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/frontEnd/cart/cartUpdate.php`,
          transferToDB
        );
        // 在此處處理回傳的 response
        emit('show-order');
        console.log(response);
        console.log(transferToDB);
      } catch (error) {
        // 在此處處理錯誤
        console.error(error);
      }
    }
    editTick();
  } else {
    console.log('未登入');
    // 要在session找到的值：
    const editData = {
      ticketType: props.ticketType.split(' ')[1],
      ticketData: props.ticketType.split(' ')[0],
      fastFoward: props.fassPass,
    };

    const sessionUnlogin = getSessionBookingData();
    console.log('session', sessionUnlogin);
    const editTicket = sessionUnlogin.find(
      ticket =>
        ticket.ticketType === editData.ticketType &&
        ticket.ticketData === editData.ticketData &&
        ticket.fastFoward === editData.fastFoward
    );
    if (editTicket) {
      editTicket.tickets = ticketNum.value;
    }
    console.log('updated session', sessionUnlogin);
    // 更新sessionStorage:
    sessionStorage.setItem('bookingData', JSON.stringify(sessionUnlogin));
    emit('update-session', sessionUnlogin);
  }

  ticketNum.value = 1;
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.tickets {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
