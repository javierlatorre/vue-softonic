<template>
  <ul class="asteroids-list w3-ul w3-card-2">
    <li v-for="asteroid in asteroids" class="w3-bar" :key="asteroid.id">
      <a href="javascript:void(0)" @click="selectAsteroid(asteroid)">
        <img src="../../assets/asteroid.png" alt="Asteroid" class="asteroids-list__icon w3-bar-item">
        <ul class="asteroids-list__properties w3-bar-item">
          <li><b>Name:</b> {{ asteroid.name }}</li>
          <li><b>Estimated diameter (km):</b> {{ asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2) }}</li>
        </ul>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'asteroids-list',
  props: {
    asteroids: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectAsteroid(asteroid) {
      this.$emit("select-asteroid", asteroid)
    }
  }
}
</script>

<style lang='scss'>
.asteroids-list {
  margin-bottom: 10px;

  & > li {
    text-align: left;
  }

  &__icon {
    height: 60px;
  }

  &__properties {
    list-style: none;
    padding: 0 !important;

    li {
      padding: 0 !important;
      border-bottom: 0 !important;
    }
  }
}
</style>
