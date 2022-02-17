import { shallowMount  } from '@vue/test-utils'
import NewsCard from '@/components/NewsCard.vue'

const feedItem = {
  "id": "7014877097244019970",
  "secretID": "7014877097244019970",
  "text": "Inst: kikakim🤍",
  "createTime": 1633278351,
  "authorMeta": {
    "id": "6785823001336415238",
    "secUid": "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
    "name": "kikakiim",
    "nickName": "Kika Kim",
    "verified": false,
    "signature": "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
    "avatar": "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637089200&x-signature=AI9QoPIXQX%2F4YTxzLf%2BA5beaSO8%3D",
    "following": 88,
    "fans": 24000000,
    "heart": 626900000,
    "video": 827,
    "digg": 6720
  },
  "musicMeta": {
    "musicId": "7006226958229015302",
    "musicName": "Dc mazur4ik_",
    "musicAuthor": "Тот самый Вовка🥕",
    "musicOriginal": true,
    "musicAlbum": "",
    "playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7006227332415474438.mp3",
    "coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/09efb28e3c28f7b93338a5a61fc9cdb7~c5_100x100.jpeg?x-expires=1637089200&x-signature=17tXyAcbArmJZUeLcHwkAst4%2BV8%3D",
    "coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/09efb28e3c28f7b93338a5a61fc9cdb7~c5_720x720.jpeg?x-expires=1637089200&x-signature=pZYXhQAUWWpbMRwHnFHH9QFtif0%3D",
    "coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/09efb28e3c28f7b93338a5a61fc9cdb7~c5_1080x1080.jpeg?x-expires=1637089200&x-signature=%2BcYG1qvRUGL%2F%2FbmgE0R4Xl76ihU%3D",
    "duration": 14
  },
  "covers": {
    "default": "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/c53914d7b31349308bc3b2c5d6c92b90_1633278353?x-expires=1637024400&x-signature=Hzlp6re1dNPjUvOdU9cfgKTNbBI%3D",
    "origin": "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/84c92f0ed6db4ea0b6a600ceec308409_1633278352?x-expires=1637024400&x-signature=wcIrKqnNIudRwejVShx%2BPQfLG70%3D",
    "dynamic": "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/565bd43b1582420db02922719c2583d9_1633278353?x-expires=1637024400&x-signature=pBjMdaTFndTkzLFckWt8pQhjIVI%3D"
  },
  "webVideoUrl": "https://www.tiktok.com/@kikakiim/video/7014877097244019970",
  "videoUrl": "https://v16m.tiktokcdn.com/09778319ff4e3994c3f3bf4e5b09e20a/61930e5b/video/tos/alisg/tos-alisg-pve-0037c001/513824f743834e84a2cc0d1e502524ac/?a=1233&br=3572&bt=1786&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=2021111519500401019019214352353071&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzNyZzM6ZjN3ODMzODczNEApZWdpaWY8Njw2N2hnZzloN2c2YWpycjRnZ2BgLS1kMS1zczNfMi4tNmFjMV82Ml42MC06Yw%3D%3D&vl=&vr=",
  "videoUrlNoWaterMark": "",
  "videoApiUrlNoWaterMark": "",
  "videoMeta": {
    "height": 960,
    "width": 540,
    "duration": 14
  },
  "diggCount": "1200000",
  "shareCount": 6543,
  "playCount": 9700000,
  "commentCount": "8064",
  "downloaded": false,
  "mentions": [],
  "hashtags": [],
  "effectStickers": [
    {
      "id": "459476",
      "name": "Color Selector"
    }
  ]
}

describe('components/NewsCard ok', () => {
  const wrapper = shallowMount (NewsCard,{
    propsData: {
      item: feedItem,
    },
    // stubs: ['router-link']
  })
  it('NewsCard has text', () => {
    expect(wrapper.find('.card-text').text()).toEqual(feedItem.text)
  })
  it('NewsCard has author-name', () => {
    expect(wrapper.find('.author-name').text()).toEqual(feedItem.authorMeta.nickName)
  })
  it('NewsCard has likes-count', () => {
    expect(wrapper.find('.likes-count').text()).toEqual(feedItem.diggCount)
  })
  it('NewsCard has comments-count', () => {
    expect(wrapper.find('.comments-count').text()).toEqual(feedItem.commentCount)
  })
  // it('NewsCard router-link works ok', () => {
  //   // expect((wrapper.find('router-link').attributes() as any).to).toBe(temp.url)
  //   console.log(wrapper.find('.user-link'))
  //   console.log(wrapper.find('.user-link').props())
  //   expect(wrapper.find('.user-link').props().to).toBe('/user/')
  //   expect(wrapper.find('.user-link').props().to).toBe('/user/')
  //   expect(wrapper.find('.user-link').text()).toBe(feedItem.authorMeta.nickName)
  // })
})