import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import loading from './images/loading.gif'


import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import './mock/mockServer'
import LoginTemplate from './components/LoginTemplate/LoginTemplate.vue'

Vue.component('LoginTemplate', LoginTemplate)
Vue.use(VueLazyload, {
  loading:loading
})

Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
})
