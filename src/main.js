import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'


import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import './mock/mockServer'
import LoginTemplate from './components/LoginTemplate/LoginTemplate.vue'

Vue.component('LoginTemplate', LoginTemplate)
Vue.use(Mint)

Vue.use(VueLazyload, {
  preLoad: 1.1,
  error: require('../static/error.jpg'),
  loading: require('../static/loading.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
})
