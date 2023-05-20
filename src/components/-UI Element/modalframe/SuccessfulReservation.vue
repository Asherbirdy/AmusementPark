
<template>
    <modal-s>
        <h2>預約成功!</h2>
        <h3 v-if="showName">「{{ showName.title }}」 已預約成功<br>
            請於下午兩點半至怪獸劇場報到</h3>
    </modal-s>
</template>
<script setup>
const show = ([
    {
        title: '夢幻演繹',
        id: 1,
    },
    {
        title: '爵士表演',
        id: 2,
    },
    {
        title: '綠野仙蹤',
        id: 3,
    },
    {
        title: '火焰跳躍者',
        id: 4,
    },
    {
        title: '魔幻舞台',
        id: 5,
    },
    {
        title: '瘋狂藝術家',
        id: 6,
    },
])

let showName = null; // 預設沒有選擇任何項目

// 在需要選擇某個項目時，設定 showName 的值
showName = show[0]; // 這裡選擇 show 中的第零個項目

</script>
<style lang="scss" scoped>
h2 {
    color: $textcolor3;
    text-align: center;
}

h3 {
    margin: 30px 0 40px;
    color: $textcolor4;
    text-align: center;
    line-height: 40px;
}
</style>