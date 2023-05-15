<template>
    <div v-for="(item, indx) in parkData.arr" :key="item.name">
        <p :id="'park' + idx" >{{ item.name }},{{ item.status }}></p>
    </div>
</template>
<script setup>
import axios from 'axios';

let parkData = reactive({ arr: [] });


onMounted(()=>{
    axios
    .get('/public/json/facility_status.json')
    .then(res=>{console.log(res.data.facilityStatus)
        parkData.arr = res.data.facilityStatus;
        console.log(parkData.arr)
    })
    .catch(err =>console.log(err));
});
</script>