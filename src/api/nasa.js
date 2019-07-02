// import unirest from 'unirest'
import asteroids from './asteroids'
import pictureOfDay from './pictureOfDay'

export default {
  getAsteroids() {
    return asteroids;
    // return new Promise((resolve, reject) => {
    //   unirest.post("https://NasaAPIdimasV1.p.rapidapi.com/getAsteroids")
    //   .header("X-RapidAPI-Host", "NasaAPIdimasV1.p.rapidapi.com")
    //   .header("X-RapidAPI-Key", "7d181a8bcbmshb75304cebab731bp10acd7jsn7f593857418a")
    //   .header("Content-Type", "application/x-www-form-urlencoded")
    //   .end(({ body }) => {
    //     console.log(result.status, result.headers, result.body);
    //     resolve(result);
    //   })
    // })
  },
  getPictureOfTheDay() {
    return pictureOfDay[Math.floor(Math.random()*pictureOfDay.length)];
    // return new Promise((resolve, reject) => {
    //   unirest.post("https://NasaAPIdimasV1.p.rapidapi.com/getPictureOfTheDay")
    //     .header("X-RapidAPI-Host", "NasaAPIdimasV1.p.rapidapi.com")
    //     .header("X-RapidAPI-Key", "7d181a8bcbmshb75304cebab731bp10acd7jsn7f593857418a")
    //     .header("Content-Type", "application/x-www-form-urlencoded")
    //     .end((result) => {
    //       const { body } = result;
    //       if (!body.callback) {
    //         reject(body);
    //       }
    //       resolve(body.contextWrites.to);
    //     });
    // });
  }
}
