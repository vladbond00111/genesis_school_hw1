import news from '@/store/news'

const state = {
  trendingFeed: { id: 1, title: "Post" }
}

describe('news/getter ok', () => {
  test('getter trendingFeed ok', () => {
    expect(news.getters.trendingFeed(state)).toEqual(state.trendingFeed)
  })
})

