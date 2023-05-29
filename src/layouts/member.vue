<script setup></script>

<template>
    <Header></Header>
    <section class="container">
        <!-- <aside class="aside"> -->
            <NavUserTBS />
        <!-- </aside> -->
        <div class="content">
            <RouterView />
        </div>
    </section>
    <Footer />
  </template>

<style lang="scss" scoped>
.container {
    display: flex;
    margin-top: 5%;
    margin-bottom: 15%;
    // .aside{
    //     width: 25%;
    // }
}
.content {
    width: 100%;
    flex-grow: 1;
}

</style>
