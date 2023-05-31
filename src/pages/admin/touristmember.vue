<script setup>

onMounted(() => {
  axios
  .get("/PDO/frontEnd/memberLogin/memberModify.php")
  .then((res)=>{

  })
}),



</script>
<template>
  <!-- <MemberEditTBS /> -->
<MemberData/>
</template>

<style scoped lang="scss">
//test
.form{
  margin: 0 auto;
}

</style>

<route>
    {
        meta: {
          layout: 'member',
        }
    }
</route>
