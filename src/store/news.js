import axios from "axios";

const endpoint = {
  // trendingFeed: 'https://tiktok33.p.rapidapi.com/trending/feed',
  trendingFeed: 'http://localhost:8080//json/feed.json',
  userInfo: 'https://tiktok33.p.rapidapi.com/user/info/',
  userFeed: 'https://tiktok33.p.rapidapi.com/user/feed/',
  
} 

export default {
  namespaced: true,
  state: () => ({
    trendingFeed: [],
    userInfo: null,
    userFeed: [],
  }),
  mutations: {
    SET_TRENDING_FEED (state, data) {
      state.trendingFeed = data
    },
    SET_USER_INFO (state, data) {
      state.userInfo = data
    },
    SET_USER_FEED (state, data) {
      state.userFeed = data
    },
  },
  actions: {
    getTrendingFeed ({ commit }) {
      axios
          .get(endpoint.trendingFeed)
          .then(response => {
            commit('SET_TRENDING_FEED', response.data)
          })
          .catch(function (error) {
            console.error(error);
          });
      // const options = {
      //   method: 'GET',
      //   url: endpoint.trendingFeed,
      //   headers: {
      //     'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      //     'x-rapidapi-key': '6ab61931a1mshce178c87ce50b75p172b9ajsnc5adbf65cdb7'
      //   }
      // };
      // axios.request(options).then(function (response) {
      //   commit('SET_TRENDING_FEED', response.data)
      // }).catch(function (error) {
      //   console.error(error);
      // });
    },
    getUserInfo ({ commit }, id) {
      const options = {
        method: 'GET',
        url: endpoint.userInfo+ id,
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key': '6ab61931a1mshce178c87ce50b75p172b9ajsnc5adbf65cdb7'
        }
      };

      axios.request(options).then(function (response) {
        commit('SET_USER_INFO', response.data)
      }).catch(function (error) {
        console.error(error);
      });
    },
    getUserFeed ({ commit }, id) {
      const options = {
        method: 'GET',
        url: endpoint.userFeed + id,
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key': '6ab61931a1mshce178c87ce50b75p172b9ajsnc5adbf65cdb7'
        }
      };
      
      axios.request(options).then(function (response) {
        commit('SET_USER_FEED', response.data)
      }).catch(function (error) {
        console.error(error);
      });
    },
  },
  getters: {
    articlesList: (state) => {
      return state.articles
    },
  }
}
