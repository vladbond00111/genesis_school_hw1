import users from '@/store/users'

const state = {
  userInfo: { id: 0, title: "0" },
  userFeed: []
}

describe('user/mutations ok', () => {
  test("mutations userInfo ok", () => {
    const userInfo = { id: 1, title: "user" }
    users.mutations.SET_USER_INFO(state, userInfo)
    expect(state.userInfo).toEqual(userInfo)
  })

  test("mutations userFeed ok", () => {
    const userFeed = [{ id: 1, title: "feed" }, { id: 1, title: "feed" }]
    users.mutations.SET_USER_FEED(state, userFeed)
    expect(state.userFeed).toEqual(userFeed)
  })
})
