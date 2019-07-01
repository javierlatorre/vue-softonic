<template>
  <header class="app-header w3-bar">
    <router-link class="app-header__link w3-bar-item" to="/"><img class='app-header__nasa-logo' src='../assets/nasa-logo.png' /></router-link>
    <router-link class="app-header__link w3-bar-item w3-text-white w3-hover-blue" to="/">Home</router-link>
    <router-link class="app-header__link w3-bar-item w3-text-white w3-hover-blue" to="/asteroids">Asteroids</router-link>
    <router-link class="app-header__link w3-bar-item w3-text-white w3-hover-blue" to="/about">About</router-link>
  </header>
</template>

<script>
export default {
  name: 'app-header',
}
</script>

<style lang="scss" scoped>
.app-header {
  background: url("../assets/stars.png");

  &__link {
    text-decoration: none;
  }

  &__nasa-logo {
    height: 100px;
  }
}
</style>
