import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './routes'
import store from "./store"

import '@/sass/style.scss'

Vue.config.productionTip = false

Vue.use(router)
Vue.component('NavBar', require('./components/NavigationView.vue').default);
Vue.component('TextBox', require('./components/RegisterForm.vue').default);
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
