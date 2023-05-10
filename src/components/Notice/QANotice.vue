<script setup></script>
<template>
<main> 
    <QAmonster class="QA" />
</main>
</template>
<style lang="scss" scoped>
    main{
        width: $workspace;
        position: relative;
        .QA{
            width: 100px;
            position: fixed;
            top: 215px;
            right: 18px;
        }
    }
</style>