// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from 'common/js/mui.min.js'
import { get,post } from 'common/js/http.js'

Vue.config.productionTip = false
Vue.prototype.$mui = mui
Vue.prototype.$get = get
Vue.prototype.$post = post


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
