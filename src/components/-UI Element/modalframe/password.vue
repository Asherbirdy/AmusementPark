<script setup></script>
<template>
    <ModalM class="ml">
        <h1>變更密碼</h1>
        <ul>
            <li>
                舊密碼：
                <br/>
                <input type="text" placeholder="請輸入您的舊密碼">
            </li>
            <li>
                新密碼：
                <br/>
                <input type="text" placeholder="請輸入您的新密碼">
            </li>
            <li>
                確認新密碼：
                <br/>
                <input type="text" placeholder="請再次輸入您的新密碼">
            </li>
        </ul>
        <button id="btn">確認</button>
    </ModalM>
</template>
<style scoped lang="scss">
    .ml h1{
        font-size: 25px;
        margin: 10px 200px;
        color: #90420A;
    }
    ul{
        font-weight: bold;
        font-size: 20px;
        margin: 75px 40px;
        color: #90420A;
    }
    input{
        font-size: 30px;
        color: #90420A;
        border-radius: 10px;
        margin: 20px auto;
        width: 400px;
        height: 50px;
        padding-left: 20px; 
    }
    ::-webkit-input-placeholder{
        font-size: 25px;
    }
    #btn{
        margin: 7px 175px;
        width: 154px;
        border-radius: 10px;
    }
</style>