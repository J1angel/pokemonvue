import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './routes'
import store from './store'
import global from './globalcomponents'
import '@/sass/style.scss'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.config.productionTip = false

Vue.use(router)
Vue.use(VueObserveVisibility)
new Vue({
  vuetify,
  global,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
