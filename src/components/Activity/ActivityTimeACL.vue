<template>
    <div class="demo-datetime-picker">

        <div class="block">
            <span class="demonstration">Timestamp</span>
            <div class="demonstration">Value：{{ value3 }}</div>
            <el-date-picker v-model="value3" type="datetime" placeholder="Pick a Date" format="YYYY/MM/DD hh:mm:ss"
                value-format="x" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
<style scoped>
.demo-datetime-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-datetime-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-datetime-picker .block:last-child {
    border-right: none;
}

.demo-datetime-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>
