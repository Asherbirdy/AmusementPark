<script setup></script>
<template>
<main> 
    <QAmonster class="QA" />
    <!-- <vue-fb-customer-chat/> -->

</main>
</template>
<style lang="scss" scoped>
    main{
        width: $workspace;
        position: relative;
        .QA{
            width: 100px;
            position: fixed;
            top: 415px;
            right: 30px;
            z-index: 100;
        }
    }
</style>