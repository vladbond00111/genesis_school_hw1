import * as api from "../../api";

export default {
    getUserInfo ({ commit }) {
        api.getUserInfo
            .then((response) => {
                commit('SET_USER_INFO', response);
            })
    },
    getUserFeed ({ commit }) {
        api.getUserFeed
            .then((response) => {
                console.log(response)
                commit('SET_USER_FEED', response);
            })
    },
}