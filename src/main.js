import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader'
import axios from 'axios'
axios.defaults.baseURL="http://127.0.0.1:8080";
Vue.prototype.axios=axios;
Vue.config.productionTip = false
Vue.component("my-header",MyHeader);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
