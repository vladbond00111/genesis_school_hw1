<template>
  <div class="user">
    <UserInfo :userInfo="userInfo"></UserInfo>
  </div>
</template>

<script>
import store from '../store'
import UserInfo from '@/components/UserInfo.vue'

export default {
  name: 'News',
  components: {
    UserInfo
    // NewsCard
  },
  data () {
    return {
      test: null
    }
  },
  computed: {
    userInfo() {
      return store.state.news.userInfo
    },
    userFeed() {
      return store.state.news.userFeed
    }
  },
  mounted() {
    store.dispatch('news/getUserInfo', this.$route.params.id)
    // store.dispatch('news/getUserFeed', this.$route.params.id)
  },
  methods: {
    getData () {
    }
  }
}
</script>