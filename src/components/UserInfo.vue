<template>
  <StyledUserInfo :lightTheme="theme">
    <div
        v-if="userInfo && userInfo.user"
        class="mx-auto"
        outlined
    >
      <v-list-item three-line>
        <v-list-item-avatar
            tile
            size="120"
            color="grey"
        >
          <v-img
              class="elevation-6"
              alt=""
              :src="userInfo.user.avatarMedium"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="user-nickname mb-4">
            {{ userInfo.user.nickname }}
          </div>
          <div class="text-h5 mb-1">
            <a :href="userInfo.user.bioLink.link" v-if="userInfo.user.bioLink" class="user-link">
              {{ userInfo.user.bioLink.link }}
            </a>
          </div>
          <div class="user-signature">{{ userInfo.user.signature }}</div>
        </v-list-item-content>
      </v-list-item>
    </div>
  </StyledUserInfo>
</template>

<script>
import {StyledUserInfo} from "@/styled-components/UserInfo"
import store from "../store";
export default {
  name: 'UserInfo',
  components:{
    StyledUserInfo
  },
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    theme() {
      return store.state.theme.theme
    }
  }
}
</script>

<style lang="scss">
</style>