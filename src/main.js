import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "./form"
/* import 'jquery' */
/* import 'popper.js' */
/* import 'bootstrap' */
/* import 'bootstrap/dist/css/bootstrap.min.css' */
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import {router} from './router'
import "./httpClient"


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
