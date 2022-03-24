import Vue from 'vue'
import App from './App.vue'
import * as locale from 'element-ui/lib/locale/lang/vi'
import ElementUI from 'element-ui'
import store from './store'
import router from './router'
import i18n from './i18n'
Vue.config.productionTip = false
Vue.use(ElementUI, { locale }, i18n)
new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
