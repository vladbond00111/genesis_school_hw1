import news from '@/store/news'

describe('news/mutations', () => {
  it("set news", () => {
    const post = { id: 1, title: "Post" }
    const state = {
      trendingFeed: {}
    }
    news.mutations.SET_TRENDING_FEED(state, post)
    expect(state.trendingFeed).toEqual(post)
  })
})