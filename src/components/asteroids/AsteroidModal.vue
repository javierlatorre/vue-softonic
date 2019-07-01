<template>
  <div
    v-if="display"
    class="asteroid-modal w3-modal w3-animate-opacity"
    :class="display ? 'w3-show' : 'w3-hide'"
  >
    <div class="w3-modal-content">
      <header class="w3-container w3-blue">
        <span
          class="w3-button w3-display-topright"
          @click="close"
        >
          &times;
        </span>
        <h2 class="w3-left-align">{{ asteroid.name }}</h2>
      </header>

      <div class="w3-container w3-left-align">
        <p><b>Absolute Magnitude:</b> {{ getAsteroidMagnitutude() }}</p>
        <p><b>Closest approach date:</b> {{ getClosestApproachDate() }}</p>
        <p><b>Orbiting body:</b> {{ getOrbitingBody() }}</p>
        <p><b>Relative velocity (km/s):</b> {{ getRelativeVelocity() }}</p>
      </div>

      <footer
        class="asteroid-modal__footer w3-container w3-blue"
        @click="close"
      >
        <p>Close</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'asteroid-modal',
  props: {
    asteroid: {
      type: Object
    }
  },
  data() {
    return {
      noDataMessage: "No data"
    }
  },
  computed: {
    display() {
      return this.asteroid !== null
    }
  },
  methods: {
    close() {
      this.$emit("unselect-asteroid")
    },
    getAsteroidMagnitutude() {
      return this.asteroid.absolute_magnitude_h || this.noDataMessage
    },
    getClosestApproachDate() {
      return this.asteroid.close_approach_data[0] &&
             this.asteroid.close_approach_data[0].close_approach_date ||
             this.noDataMessage
    },
    getOrbitingBody() {
      return this.asteroid.close_approach_data[0] &&
             this.asteroid.close_approach_data[0].orbiting_body ||
             this.noDataMessage
    },
    getRelativeVelocity() {
      return this.asteroid.close_approach_data[0] &&
             this.asteroid.close_approach_data[0].relative_velocity.kilometers_per_second ||
             this.noDataMessage
    }
  }
}
</script>

<style lang="scss">
.asteroid-modal {
  &__footer:hover {
    cursor: pointer;
  }
}
</style>
