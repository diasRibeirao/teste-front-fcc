<template>
  <div id="app">
    <appHeader />
    <main id="main">
      <div v-if="!carregando">
        <transition mode="out-in">
          <router-view />
        </transition>
      </div>
      <appPaginaCarregando v-else/>
    </main>
    <appFooter />
  </div>
</template>

<script>
import axios from "axios";
import appHeader from "@/components/appHeader.vue";
import appFooter from "@/components/appFooter.vue";

export default {
  data() {
    return {
        carregando: false
    }
  },
  components: {
    appHeader,
    appFooter
  },
  created () {
    this.carregando = true;
    document.title = "Teste para frontend";
    
    axios.get(process.env.VUE_APP_API_USER + 'users', this.criar)
    .then(response => { 
      this.$store.commit("UPDATE_USUARIOS", response.data);
      this.carregando = false;                    
    })
    .catch(error => {
        alert(error.message);
        this.carregando = false;
    });

  }
 
} 
</script>

<style>
  * {
    box-sizing: border-box;
  }
  
  body,
  ul,
  li,
  h1,
  h2,
  p {
    padding: 0px;
    margin: 0px;
  }
  
  ul {
    list-style: none;
  }
  
  body {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #345;
    background: #f1f1f1 repeat top;
  }
  
  a {
    color: #345;
    text-decoration: none;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
  
  .btn {
    display: block;
    padding: 10px 30px;
    background: #87f;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    transition: all 0.3s;
    border: none;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    cursor: pointer;
  }
  
  .btn:hover {
    background: #65d;
    transform: scale(1.1);
  }
  
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  
  #main {
    flex: 1;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    border-radius: 4px;
    border: 1px solid white;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    transition: all 0.3s;
    font-size: 1rem;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    margin-bottom: 15px;
  }
  
  input:hover,
  input:focus,
  textarea:hover,
  textarea:focus {
    outline: none;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    border-color: #87f;
  }
  
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  
  .v-enter {
    transform: translate3d(0, -20px, 0);
  }
  
  .v-leave-to {
    transform: translate3d(0, 20px, 0);
  }
  
  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s;
  }
  </style>
