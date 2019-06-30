<template>
  <div class="app-header w3-bar w3-light-grey">
    <a href="#" class="w3-bar-item w3-button"><img class='app-header__nasa-logo' src='../../assets/nasa-logo.png' /></a>
  </div>
</template>

<script>
export default {
  name: 'app-header',
}
</script>

<style lang="scss" scoped>
.app-header {
  &__nasa-logo {
    height: 100px;
  }
}
</style>
