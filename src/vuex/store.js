/**
 * Created by zhangtao on 2017/12/26
 * Description vuex-core
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import LandzUI from 'landz-ui'

Vue.use(Vuex)

let _modules = Object.assign({
//  业务状态
},LandzUI.store)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: _modules
})
