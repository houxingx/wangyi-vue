<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav.vue'
export default {
  components: {
    FooterNav
  },
  mounted(){
    // 分发给action发ajax获取user
    this.$store.dispatch('getUser')
  }
}
</script>

<style scoped>
#app{
  width: 100%;
  height: 100%;
}
</style>
