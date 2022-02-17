import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import news from './news'
import users from './users'
import theme from './theme'

export default new Vuex.Store({
  strict: true,
  modules: {
    news,
    users,
    theme,
  },
})