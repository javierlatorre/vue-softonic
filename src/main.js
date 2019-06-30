import Vue from 'vue'
import 'w3-css/w3.css';

import router from './router'
import App from './App'
import AppBody from './components/AppBody'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

Vue.component('app-body', AppBody)
Vue.component('app-header', AppHeader)
Vue.component('app-footer', AppFooter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
