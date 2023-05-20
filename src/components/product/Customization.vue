<template>
    <div class="title">
        <h2>
            <slot>客製化專區</slot>
        </h2>
        <title-big-pink />
    </div>

    <div class="btn">
        <button>衣服
        </button>
        <button>帽子
        </button>
        <button>帆布袋
        </button>
        <button>手機殼
        </button>
    </div>

    <div class="custom_made">
        <div class="item"></div>
        <div class="select">

            <p v-for="(item, index) in product" :key="item.id"><label>{{ item.title }}</label>
                <!-- 如果 id 是 brand，就顯示 <brand> 元件 -->
                <template v-if="item.id === 'brand'">
                    <brand />
                </template>
                <!-- 如果 id 是 type，就顯示 <type> 元件 -->
                <template v-else-if="item.id === 'type'">
                    <type />
                </template>
                <!-- 如果 id 是 color，就顯示 <button> 元件 -->
                <template v-else-if="item.id === 'color'">
                    <button class="white" style="border-radius: 5px;">白色</button>
                </template>
                <!-- 如果 id 是 style，就顯示選項列表 -->
                <template v-else-if="item.id === 'style'">
                    <br>
                    <p class="default">預設</p>
                    <div class="style">

                        <logo />
                        <logo />
                        <MonsterPink />
                        <MonsterGrey />
                        <MonsterBeige />
                        <MonsterLightBlue />
                    </div>
                    <div class="btn">
                        <button>確認</button>
                        <button>重生</button>
                    </div>

                </template>
            </p>
        </div>
    </div>
</template>
<script setup>
const product = ref([
    {
        title: '品牌：',
        id: 'brand',
    },
    {
        title: '機型：',
        id: 'type',
    },
    {
        title: '顏色：',
        id: 'color',
    },
    {
        title: '樣式：',
        id: 'style',
    },
]);
</script>
<style lang="scss" scoped>
.title {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h2 {
        position: absolute;
        color: $textcolor4;
        font-size: 40px;
        margin-left: 77px;
        margin-bottom: 32px;

    }
}

.btn {
    display: flex;
    justify-content: center;

    button {
        margin-right: 50px;
        color: $textcolor5;
        background-color: $textcolor6;
        cursor: pointer;
        height: 40px;
        width: 100px;
        font-size: 20;
        border: none;
        border-radius: 0.2rem;


    }

    button:active {
        background-color: $textcolor5;
        color: $textcolor6;
    }

}

.custom_made {
    display: flex;
    margin-top: 60px;
    justify-content: center;
    padding-left: 150px;

    .item {
        display: block;
        width: 350px;
        height: 450px;
        background: radial-gradient(50% 50% at 50% 50%, rgba(242, 240, 239, 0) 0%, rgba(175, 175, 175, 0.35) 100%);
        border-radius: 10px;
    }

    .select {
        margin-left: 50px;

        p {
            margin-bottom: 20px;
        }

        .white {
            background-color: #fff;
            color: black;
            border: 1px solid black;
            width: 50px;
            height: 25px;
            font-size: 14px;
        }

        .btn {
            margin: 20px 0 0 50px;
        }
    }

    .white:active {
        background-color: black;
        color: #fff;
    }

}

.select p.default {
    display: inline-block;
    font-size: 16px;
    margin: 20px 0 0 50px;
}

.style {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

}
</style>