import axios from "axios";

const endpoint = {
    trendingFeedJSON: 'http://localhost:8080//json/feed.json',
    userInfoJSON: 'http://localhost:8080//json/userInfo.json',
    userFeedJSON: 'http://localhost:8080//json/userFeed.json',
    // trendingFeed: 'https://tiktok33.p.rapidapi.com/trending/feed',
    // userInfo: 'https://tiktok33.p.rapidapi.com/user/info/',
    // userFeed: 'https://tiktok33.p.rapidapi.com/user/feed/',
}

export const getTrendingFeed = new Promise((resolve) => {
    axios
        .get(endpoint.trendingFeedJSON)
        .then(response => {
            resolve(response.data) ;
        })
        .catch(function (error) {
            console.error(error);
        });
});

export const getUserInfo = new Promise((resolve) => {
    axios
        .get(endpoint.userInfoJSON)
        .then(response => {
            resolve(response.data) ;
        })
        .catch(function (error) {
            // console.error(error);
        });
});

export const getUserFeed = new Promise((resolve) => {
    axios
        .get(endpoint.userFeedJSON)
        .then(response => {
            resolve(response.data) ;
        })
        .catch(function (error) {
            // console.error(error);
        });
});


