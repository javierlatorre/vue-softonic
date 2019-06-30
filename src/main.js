import Vue from 'vue'
import 'w3-css/w3.css';

import router from './router'
import App from './App'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
