import news from '@/store/news'

const state = {
  trendingFeed: { id: 1, title: "Post" }
}

test('getter trendingFeed возвращает данные', () => {
  expect(news.getters.trendingFeed(state)).toEqual(state.trendingFeed)
})
