import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from "./routes"

Vue.config.productionTip = false

Vue.use(router)
Vue.component('NavBar', require('./components/NavigationView.vue').default);
Vue.component('TextBox', require('./components/TextField.vue').default);
new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
