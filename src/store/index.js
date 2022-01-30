import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import news from './news'
import users from './users'

export default new Vuex.Store({
  strict: true,
  modules: {
    news,
    users,
  },
})