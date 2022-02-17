import * as api from "@/api";

const feed = require("@/json/feed.json");
const userInfo = require("@/json/userInfo.json");
const userFeed = require("@/json/userFeed.json");
describe('api', () => {
    it('api getTrandingFeed', async () => {
        api.getTrendingFeed
            .then((response) => {
                expect(response).toEqual(feed)
            })
    });
    it('api getUserInfo', async () => {
        api.getUserInfo
            .then((response) => {
                expect(response).toEqual(userInfo)
            })
    });
    it('api getUserFeed', async () => {
        api.getUserFeed
            .then((response) => {
                expect(response).toEqual(userFeed)
            })
    });
})
