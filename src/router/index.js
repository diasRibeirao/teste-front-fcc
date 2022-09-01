import Vue from 'vue'
import VueRouter from 'vue-router'
import appLogin from "../views/appLogin/appLogin.vue";
import appLoginCriarConta from "../views/appLogin/appLoginCriarConta.vue";
import appCliente from "../views/appCliente/appCliente.vue";
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: appLogin
  },
  {
    path: "/login",
    name: "login",
    component: appLogin
  },
  {
    path: "/criar-conta",
    name: "criar-conta",
    component: appLoginCriarConta
  },
  {
    path: "/cliente",
    name: "cliente",
    component: appCliente,
    meta: {
      login: true 
    }
  },

] 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
