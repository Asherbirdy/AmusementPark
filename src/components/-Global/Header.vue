<script setup></script>
<template>
  <headerbg id="headerbg" />
  <header :class="{ openMenu: isOpen }">
    <nav>
      <router-link to="/" class="logo">
        <logo />
      </router-link>

      <ul id="menu">
        <li>
          <router-link to="/create">
            <icon-create />
            <h3>喬裝打扮</h3>
          </router-link>
        </li>

        <li>
          <router-link to="/map">
            <icon-map />
            <h3>怪獸領地</h3>
          </router-link>
        </li>
        <li>
          <router-link to="/notice">
            <icon-about />
            <h3>領地須知</h3>
          </router-link>
        </li>

        <li>
          <router-link to="/shop">
            <icon-shop />
            <h3>走私商人</h3>
          </router-link>
        </li>

        <li>
          <router-link to="/membership">
            <icon-membership />
            <h3>冒險者專區</h3>
          </router-link>
        </li>
      </ul>
      <!-- <a id="moblie_menu" @click="handMenuOpen" href="javascript:;"></a> -->
      <div>
        <div class="rsite">
          <router-link to="/login">
            <icon-small-login />
          </router-link>

          <router-link to="/basket">
            <icon-small-basket />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
#headerbg {
  display: none;
  width: 100%;
  // background-color: #f9f3e4;

}

header {
  // top: -200px;
  // position: relative;
  font-family: $font-family;
  background-color: #f9f3e4;
  width: 100%;
  height: 150px;

  nav {
    display: flex;
    position: relative;
    width: $workspace;
    margin: 0 auto;
    justify-content: space-between;
    top: 6px;

    .logo {
      margin: auto 0;
    }
  }
}

header #menu {
  list-style: none;
  display: flex;
  float: left;
}

header #menu a {
  display: flex;
  flex-direction: column;
  float: left;
  margin: 0 2px;
  padding: 0 20px;
  text-decoration: none;
  filter: brightness(0%);
  opacity: 0.6;
  transition: all 0.3s linear;
}

header #menu a:hover {
  filter: brightness(100%) drop-shadow(1px 1px 1px #000000);
  opacity: 1;
  transition-duration: 0.3s;
}

header #menu a h3 {
  margin: 4px auto 0;
  text-align: center;
  // font-size: 16px;
  color: #ff7b51;
}

header .rsite {
  color: #5b5b5b;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  margin: 10px 0;
  align-items: center;
}

header .rsite a {
  text-decoration: none;
  margin: auto 8px;
}

header .rsite svg {
  padding: 4px;
  color: #5b5b5b;
}

a#moblie_menu {
  display: none;
}
</style>
