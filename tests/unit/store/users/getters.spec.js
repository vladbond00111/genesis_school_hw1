import users from '@/store/users'

const state = {
  userInfo: { id: 0, title: "0" },
  userFeed: [{ id: 1, title: "feed" }, { id: 1, title: "feed" }]
}

test('getter userInfo возвращает данные', () => {
  expect(users.getters.userInfo(state)).toEqual(state.userInfo)
})

test('getter userFeed возвращает данные', () => {
  expect(users.getters.userFeed(state)).toEqual(state.userFeed)
})
