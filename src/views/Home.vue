<template>
  <div class="home">
    <app-body>
      <div class="picture-of-day">
        <h2 class="w3-left-align">Media of the day</h2>

        <iframe class="picture-of-day__video" v-if="pictureOfTheDay.media_type === 'video'"
          :src="pictureOfTheDay.url">
        </iframe>
        <img v-else :src="pictureOfTheDay.url" />

        <p v-if="pictureOfTheDay.author" class="w3-left-align">Published by {{ pictureOfTheDay.author }}</p>  
        <p v-if="pictureOfTheDay.date" class="w3-left-align w3-text-grey">{{ pictureOfTheDay.date }}</p>  
        <p class="w3-left-align">{{ pictureOfTheDay.explanation }}</p>  
      </div>
    </app-body>
  </div>
</template>

<script>
import nasa from '../api/nasa'
import AppBody from '../components/body/AppBody'

export default {
  name: 'home',
  components: {
    AppBody
  },
  data() {
    return {
      pictureOfTheDay: {}
    }
  },
  async created() {
    const pictureOfTheDay = await nasa.getPictureOfTheDay()
    this.pictureOfTheDay = pictureOfTheDay
  }
}
</script>

<style lang="scss">
.picture-of-day {
  &__video {
    border: 0;
    width: 700px;
    height: 400px;
  }
}
</style>

