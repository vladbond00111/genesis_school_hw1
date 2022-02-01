import * as api from '../../api'

export default {
    getTrendingFeed ({ commit }) {
        console.log('11111111111111')
        api.getTrendingFeed
            .then((response) => {
                commit('SET_TRENDING_FEED', response);
            })
    },
}