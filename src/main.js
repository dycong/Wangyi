
import Vue from 'vue'
import App from './App'
import router from './router'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

import './mock/mockServer'
import LoginTemplate from './components/LoginTemplate/LoginTemplate.vue'

Vue.config.productionTip = false
Vue.component('LoginTemplate',LoginTemplate)
Vue.use(Mint)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
