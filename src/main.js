// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from 'common/js/mui.min.js'
import store from './store'
import { Loading,Dialog,Popup,DatetimePicker } from 'vant'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.config.mui = mui
Vue.use(Loading).use(Dialog).use(Popup).use(DatetimePicker);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})



