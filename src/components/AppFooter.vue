<template>
  <footer class="app-footer w3-container w3-left-align w3-black">
    <img class="app-footer__nasa-logo" src="../assets/nasa-logo.png" />
    <div>
      <p>National Aeronautics and Space Administration</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.app-footer {
  padding-top: 10px;

  &__nasa-logo {
    height: 60px;
  }
}
</style>
