import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    usuarios: [],
    usuario: {
      id: '',
      nome: '',
      usuario: '',
      senha: ''
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload;
    },
    UPDATE_USUARIOS(state, payload) {
      state.usuarios = payload;
      console.log(state.usuarios);
    }
  },
  actions: {    
    setUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", payload);
      context.commit("UPDATE_LOGIN", true);
      console.log('payload = ' + payload);
    },
    logarUsuario(context, payload) {      
      return this.state.usuarios.filter(u => 
        u.usuario.toLowerCase() == payload.usuario.toLowerCase() &&
        u.senha.toLowerCase() == payload.senha.toLowerCase()
      );
    },
    verificaUsuario(context, payload) {    
      return this.state.usuarios.filter(u => 
        u.usuario.toLowerCase() == payload.toLowerCase()
      );
    },
    logoutUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        id: '',
        nome: '',
        usuario: '',
        senha: ''
      });
      context.commit("UPDATE_LOGIN", false);
    }
  },
  modules: {
  }
})
