import Vue from 'vue'
import App from './App.vue'
import * as locale from 'element-ui/lib/locale/lang/vi'
import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
new Vue({
  render: h => h(App)
}).$mount('#app')
