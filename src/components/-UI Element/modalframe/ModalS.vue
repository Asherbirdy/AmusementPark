<script setup></script>
<template>
    <div class="bgc">
        <div class="layout">
            <div class="close">
                <el-icon class="iconClose">
                    <CircleClose />
                </el-icon>
            </div>
            <slot>

            </slot>
        </div>
    </div>
</template>
<style>
/* 灰色背景 */
.bgc {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(217, 217, 217, 0.8);
}

/* 彈窗框 */
.layout {
    max-width: 400px;
    width: 100%;
    background-color: #F9F3E4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px dashed #90420A;
    border-radius: 20px;
}

/* 叉叉btn */
.iconClose {
    margin-top: 10px;
    font-size: 40px;
    color: #90420a;

}

/* 叉叉div */
.close {
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 10px;
}</style>