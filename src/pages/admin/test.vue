<template>
    <div v-for="(item ,idx) in parkData.arr" :key="item.name">
    <p :id="'park'+idx">
    {{ item.name }}:{{ item.status }}
</p>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';


let parkData = reactive({ arr: [] })

onMounted(() => {
    axios.get('/public/json/facility_status.json')
    .then(res => {
        console.log(res.data.facilityStatus);
        parkData.arr = res.data.facilityStatus

    })
})


</script>