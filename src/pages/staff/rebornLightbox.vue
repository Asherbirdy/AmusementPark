<script setup></script>
<template>
    <div class="layout">
        <div class="reborn">
        </div>
    </div>
</template>
<style>
.layout {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(217, 217, 217, 0.8);
}

.reborn {
    width: 540px;
    height: 360px;
    background-color: #F9F3E4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px dashed #90420A;
    border-radius: 20px;

}
</style>