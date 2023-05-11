<template>
    <div class="mainbox">
        <div class="navbar">
            <ul>
                <li>所有商品</li>
                <hr>
                <li>衣服</li>
                <hr>
                <li>帽子</li>
                <hr>
                <li>帆布袋</li>
                <hr>
                <li>手機殼</li>
                <hr>
                <li>客製化商品</li>
                <hr>
            </ul>
        </div>
        <main>
            <ul class="frameBlue">
                <li class="content" v-for="(item, index) in product" :key="item.productName">

                    <frame-blue>
                        <img :src="item.image" alt="">
                        <h2> {{ item.productName }}</h2>

                    </frame-blue>
                </li>
            </ul>
        </main>
    </div>
</template>
<script setup>

const product = ref([
    {
        productName: 'aaa',
        image: "src/assets/img/bag1.png",
    },
    {
        productName: 'bbb',
        image: "/product/Tshirt2.png",
    },
    {
        productName: 'ccc',
        image: "/product/Tshirt3.png",
    }

]);
</script>
<style lang="scss" scoped>
.mainbox {
    display: flex;

}

.navbar {
    width: 180px;
    display: inline-block;
    padding: 30px;
}

li {
    color: $textcolor6;
    padding: 10px;

}

hr {
    border-bottom: 3px dashed #D1825B;
}

main {
    padding-top: 0;
}

.frameBlue {
    display: flex;
    flex-wrap: wrap;
    // outline: 1px solid red;
}

.content {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 0;
    //    outline: 1px solid blue;
}

img {
    width: 70%;
    margin: 90px auto 0;
}
</style>