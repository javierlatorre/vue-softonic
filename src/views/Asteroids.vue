<template>
  <div class="asteroids">
    <app-body>
      <h1 class="w3-left-align">List of Near Earth Asteroids</h1>
      <asteroids-list
        :asteroids="asteroids"
        @select-asteroid="selectAsteroid"
      />
    </app-body>
    <asteroid-modal
      :asteroid="selectedAsteroid"
      @unselect-asteroid="unselectAsteroid"
    />
  </div>
</template>

<script>
import nasa from '../api/nasa'
import AsteroidModal from '../components/asteroids/AsteroidModal'
import AsteroidsList from '../components/asteroids/AsteroidsList'

export default {
  name: 'asteroids',
  components: {
    AsteroidModal,
    AsteroidsList
  },
  data() {
    return {
      asteroids: [],
      selectedAsteroid: null
    }
  },
  methods: {
    selectAsteroid(asteroid) {
      this.selectedAsteroid = asteroid
    },
    unselectAsteroid() {
      this.selectedAsteroid = null
    }
  },
  created() {
    const asteroids = nasa.getAsteroids()
    this.asteroids = asteroids
  }
}
</script>
