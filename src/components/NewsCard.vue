<template>
  <v-card
    class="mx-auto"
    color="#010101"
    dark
  >
    <v-card-text class="text-h5 font-weight-bold">
      <div>
        <video class="mx-auto col video" controls autoplay muted>
          <source :src="item.videoUrl">
       </video>
      </div>
      <div>
        {{ item.text }}
      </div>
    </v-card-text>
    <div class="name-wrap">
      <div>
        <router-link :to="'/user/'+ item.authorMeta.name" class="user-link">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              :src="item.authorMeta.avatar"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="avatar-img">
              {{ item.authorMeta.nickName }}
            </v-list-item-title>
          </v-list-item-content>
        </router-link>
      </div>
      <div>
        <div class="stat-item">
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">{{ item.diggCount }}</span>
        </div>
        <div class="stat-item">
          <v-icon class="mr-1">
            mdi-comment
          </v-icon>
          <span class="subheading">{{ item.commentCount }}</span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'NewsCard',
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">
.name-wrap {
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .user-link {
    text-decoration: none;
    .avatar-img {
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .stat-item:first-child {
    margin-bottom: 10px;
  }
}
</style>