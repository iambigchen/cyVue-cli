/**
 * Created by zhangtao on 2017/12/26
 * Description main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'landz-ui/lib/assets/font/iconfont.css'
import LandzUI from 'landz-ui'
import 'landz-ui/lib/assets/css/landz_base.css'
import databictMap from './js/databictMap.json'

Vue.use(ElementUI)
Vue.use(LandzUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
LandzUI.init({
  'app': vm,
  databictMap,
  msgAmountUrl: '/landz-one-contract/userdata/getMsgAmount',
  userdataUrl: '/landz-one-contract/userdata/getuserdata',
  loginUrl: '/landz-one-contract'
})
