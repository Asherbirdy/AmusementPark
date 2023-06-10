<template>
    <div class="sidebar">
        <ul>
            <li class="bar" @click="scrollToSection('section0')">所有商品</li>
            <br>
            <li class="bar" @click="scrollToSection('section1')">衣服</li>
            <br>
            <li class="bar" @click="scrollToSection('section2')">帽子</li>
            <br>
            <li class="bar" @click="scrollToSection('section3')">帆布袋</li>
            <br>
            <li class="bar" @click="scrollToSection('section4')">手機殼</li>
            <br>
            <!-- <li class="bar">客製化商品</li>
            <br> -->
        </ul>
    </div>
</template>
<script setup>
document.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(scrollTop);

    var sidebar = document.querySelector('.sidebar');
    if (scrollTop > 150) {
        sidebar.style.transition = 'top 0.3s ease';
        sidebar.style.top = '50px';
    } else {
        sidebar.style.top = '';
    }
});

// const scrollToSection = (sectionId) => {
//     if (sectionId === "section0") {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     }
//     const sectionElement = document.getElementById(sectionId);
//     if (sectionElement) {
//         sectionElement.scrollIntoView({ behavior: 'smooth' });
//     }
// }

const scrollToSection = (sectionId) => {
    if (sectionId === "section0") {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>
<style lang="scss" scoped>
.sidebar {
    width: 180px;
    display: inline-block;
    margin-top: 25px;
    padding-left: 130px;
    position: fixed;
    top: 215px;
    left: 0;
}

.bar {
    color: $textcolor7;
    padding: 10px;
    border-bottom: 3px dashed #D1825B;

}

li {
    font-size: 24px;
    cursor: pointer;
}

li:hover {
    color: #172944;
    font-weight: bold;
}

@media screen and (max-width: 1280px) {
    .sidebar {
        padding-left: 20px;
    }
}
</style>