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
            position: fixed;
            top: 215px;
            right: 0;
        }
    }
</style>