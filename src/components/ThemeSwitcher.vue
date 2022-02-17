<template>
  <div>
    <v-switch
        v-model="themeSwitcher"
        inset
        :label="themeSwitcher ? 'dark' : 'light' "
        color="black"
    ></v-switch>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'ThemeSwitcher',
  data () {
    return {
      themeSwitcher: false,
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    themeSwitcher(newValue) {
      store.dispatch('theme/setTheme', newValue);
      // store.commit('theme/SET_THEME', newValue);
    }
  }
}
</script>

<style lang="scss">
</style>