<template>
    <div class="sidebar">
        <ul>
            <li class="bar">所有商品</li>
            <br>
            <li class="bar">衣服</li>
            <br>
            <li class="bar">帽子</li>
            <br>
            <li class="bar">帆布袋</li>
            <br>
            <li class="bar">手機殼</li>
            <br>
            <li class="bar">客製化商品</li>
            <br>
        </ul>
    </div>
</template>
<script setup>
document.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);

    var sidebar = document.querySelector('.sidebar');
    if (scrollTop > 150) {
        sidebar.style.top = '0';
    } else {
        sidebar.style.top = '';
    }
});

let bar = { bar: 'bar' };
</script>
<style lang="scss" scoped>
.sidebar {
    width: 180px;
    display: inline-block;
    padding: 30px;
    position: fixed;
    top: 125px;
    left: 0;
}

.bar {
    color: $textcolor7;
    padding: 10px;
    border-bottom: 3px dashed #D1825B;

}
</style>