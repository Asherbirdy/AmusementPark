<script setup></script>


<template>
    <Header></Header>
    <section class="container">
        <aside>
            <NavUser />
        </aside>
        <div>
            <RouterView />
        </div>
    </section>
    <Footer />
  </template>
  
  

<style lang="scss" scoped>
.container {
    display: flex;
    margin-top: 20%;
    margin-bottom: 15%;
}

</style>
