<script setup>

    
    const account = ''; // 用作v-model雙向數據綁定
    const password = '';

    const inputInfos = ref([
        {
            title: '帳號：',
            type: 'text',
            id: 'account',
            placeholder: '請輸入您的Email或手機*',
            value: account,
        },
        {
            title: '密碼：',
            type: 'tel',
            id: 'password',
            placeholder: '請輸入您的密碼*',
            value: password,
        },
    ]);
    
    const aLinks = ref([
        {
            id:'1',
            url:'#',
            text:'會員註冊',
        },
        {
            id:'2',
            url:'#',
            text:'忘記密碼',
        },
    ]);

</script>

<template>
  <main>
    <form action="">
        <!-- 帳號 + 密碼 的 input欄位 -->
        <div
            v-for="(inputInfo, index) in inputInfos"
            :key="inputInfo.id"
            class=""
        >
            <label>{{ inputInfo.title }}</label>
            <input
                :type="inputInfo.type"
                :id="inputInfo.id"
                :placeholder="inputInfo.placeholder"
                v-model="inputInfo.value"
            />
        </div>
        
        <!-- 會員註冊 + 忘記密碼 的 a標籤 -->
        <div
            v-for="(aLink, index) in aLinks"
            :key="aLink.id" 
            :href="aLink.url"
        >
            <img src="" alt="">
            <a>{{ aLink.text }}</a>
        </div>
        

        <button type="submit" id="Submit">登入</button>
    </form>
  </main>
</template>

<style lang="scss" scoped></style>
