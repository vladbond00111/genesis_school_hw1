// import { createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import users from '@/store/users'
// // import mockPosts from "@/json/userInfo.json";
// import { cloneDeep } from 'lodash';
// import {commit} from "lodash/seq";
//
// const mockPosts = require("@/json/userInfo.json");
// // jest.mock("axios", () => ({
// //   get: jest.fn(() => Promise.resolve({ data: mockPosts })),
// // }));
//
// // const state = {
// //   trendingFeed: { id: 1, title: "Post" }
// // }
// let store
// beforeEach(() => {
//   const localVue = createLocalVue()
//   localVue.use(Vuex)
//   store = new Vuex.Store(cloneDeep(users))
// })
//
// describe("news/actions", () => {
//   it("loads posts and updates them in state", async () => {
//     users.actions.getUserInfo({ commit: jest.fn() })
//     // store.dispatch("users/getUserInfo");
//     console.log(this.state)
//     console.log(store)
//     // console.log(store.dispatch('users/getUserInfo'))
//     console.log(users.getters.userInfo(store.state) )
//     console.log(mockPosts )
//     expect(users.getters.userInfo(store.state)).toEqual(mockPosts);
//   });
// })
//
//
//
// // const state = {
// //   trendingFeed: {}
// // }
// // describe('news/mutations', () => {
// //   it("set news", () => {
// //     const post = { id: 1, title: "Post" }
// //     console.log(news.actions)
// //     news.actions.getTrendingFeed()
// //     expect(state.trendingFeed).toEqual(post)
// //   })
// // })
