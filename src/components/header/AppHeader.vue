<template>
  <div class="app-header w3-bar">
    <a href="#" class="w3-bar-item"><img class='app-header__nasa-logo' src='../../assets/nasa-logo.png' /></a>
    <a href="#" class="w3-bar-item w3-text-white"><router-link to="/">Home</router-link></a>
    <a href="#" class="w3-bar-item w3-text-white"><router-link to="/asteroids">Asteroids</router-link></a>
    <a href="#" class="w3-bar-item w3-text-white"><router-link to="/about">About</router-link></a>
  </div>
</template>

<script>
export default {
  name: 'app-header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.app-header {
  background: url("../../assets/stars.png");

  &__nasa-logo {
    height: 100px;
  }
}
</style>
