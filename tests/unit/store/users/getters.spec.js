import users from '@/store/users'

const state = {
  userInfo: { id: 0, title: "0" },
  userFeed: [{ id: 1, title: "feed" }, { id: 1, title: "feed" }]
}

describe('user/getter ok', () => {
  test('getter userInfo ok', () => {
    expect(users.getters.userInfo(state)).toEqual(state.userInfo)
  })

  test('getter userFeed ok', () => {
    expect(users.getters.userFeed(state)).toEqual(state.userFeed)
  })
})


