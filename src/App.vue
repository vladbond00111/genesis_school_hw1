<template>
  <v-app id="app">
    <StyledApp :lightTheme="theme" class="style-wrapper">
      <div id="nav">
        <router-link to="/">News</router-link>
        <ThemeSwitcher class="theme-switcher"></ThemeSwitcher>
      </div>
      <router-view/>
    </StyledApp>
  </v-app>
</template>

<script>
import {StyledApp} from "@/styled-components/App"
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import store from "./store";
export default {
  name: 'App',
  components: {
    ThemeSwitcher,
    StyledApp
  },
  computed: {
    theme() {
      return store.state.theme.theme
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .style-wrapper {
    min-height: 100vh;
  }
}

#nav {
  padding: 30px;
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .theme-switcher {
    position: absolute;
    right: 40px;
    top: 30px;
    margin-top: 0;
  }
}
</style>
