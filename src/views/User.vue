<template>
  <div class="user">
    <UserInfo :userInfo="userInfo"></UserInfo>
  </div>
</template>

<script>
import store from '../store'
import UserInfo from '@/components/User/Info.vue'

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
      return store.state.users.userInfo
    },
    userFeed() {
      return store.state.news.userFeed
    }
  },
  mounted() {
    store.dispatch('users/getUserInfo', this.$route.params.id)
    store.dispatch('users/getUserFeed', this.$route.params.id)
  },
  methods: {
    getData () {
    }
  }
}
</script>