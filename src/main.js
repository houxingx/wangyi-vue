import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {Button} from 'mint-ui'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import './mock/mockServer'

Vue.use(VueLazyload,{
  preLoad: 1,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.component(Button.name, Button)


new Vue({
  el: '#app',
  render:h =>h(App),
  router,
  store
})
