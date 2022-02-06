import * as api from "@/api";

const feed = require("@/json/feed.json");
const userInfo = require("@/json/userInfo.json");
const userFeed = require("@/json/userFeed.json");
describe('api', () => {
    it('getTrandingFeed', async () => {
        api.getTrendingFeed
            .then((response) => {
                expect(response).toEqual(feed)
            })
    });
    it('getUserInfo', async () => {
        api.getUserInfo
            .then((response) => {
                expect(response).toEqual(userInfo)
            })
    });
    it('getUserFeed', async () => {
        api.getUserFeed
            .then((response) => {
                expect(response).toEqual(userFeed)
            })
    });
})
