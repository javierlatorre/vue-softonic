<template>
  <div class="asteroids">
    <app-body>
      <asteroids-list :asteroids="asteroids" />
    </app-body>
  </div>
</template>

<script>
import nasa from '../api/nasa'
import AppBody from '../components/body/AppBody'
import AsteroidsList from '../components/asteroids/AsteroidsList'

export default {
  name: 'asteroids',
  components: {
    AppBody,
    AsteroidsList
  },
  data() {
    return {
      asteroids: []
    }
  },
  created() {
    const asteroids = nasa.getAsteroids()
    this.asteroids = asteroids
  }
}
</script>
