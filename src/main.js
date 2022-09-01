import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appPaginaCarregando from "@/components/appPaginaCarregando.vue";
import appSucessoNotificacao from "@/components/appSucessoNotificacao.vue";
import appErroNotificacao from "@/components/appErroNotificacao.vue";

Vue.config.productionTip = false

Vue.component("appPaginaCarregando", appPaginaCarregando);
Vue.component("appSucessoNotificacao", appSucessoNotificacao);
Vue.component("appErroNotificacao", appErroNotificacao);

new Vue({
  router, 
  store,
  render: h => h(App)
}).$mount('#app') 