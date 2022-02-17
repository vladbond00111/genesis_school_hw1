import * as api from '../../api'

export default {
    getTrendingFeed ({ commit }) {
        api.getTrendingFeed
            .then((response) => {
                commit('SET_TRENDING_FEED', response);
            })
    },
}