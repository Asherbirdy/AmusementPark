<script setup></script>
<template>
    <ModalL class="ml">
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
        <Btn id="btn">確認</Btn>
    </ModalL>
</template>
<style scoped lang="scss">
    .ml h1{
        font-size: 50px;
        margin: 100px 459px;
        color: #90420A;
    }
    ul{
        font-size: 30px;
        margin: 27px 345px;
        color: #90420A;
    }
    input{
        font-size: 30px;
        color: #90420A;
        border-radius: 10px;
        margin: 20px auto;
        width: 500px;
        height: 50px;  
        padding-left: 20px; 
        padding-top: 10px;  
    }
    ::-webkit-input-placeholder{
        font-size: 25px;
    }
    #btn{
        margin: 7px 511px;
        width: 154px;
        color: #90420A;
        border-radius: 10px;
    }
</style>