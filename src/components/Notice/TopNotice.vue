<script setup></script>
<template>
<main> 
    <SvgTop class="Top" />
</main>
</template>
<style lang="scss" scoped>
    main{
        width: $workspace;
        position: relative;
        .Top{
            width: 56px;
            position: fixed;
            top: 376px;
            right: 52px;
            z-index: 100;
        }
    }
</style>