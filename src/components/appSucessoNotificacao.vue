<template>
  <transition>
    <ul class="sucesso" v-if="sucessos.length > 0">
      <li v-for="(sucesso, index) in sucessos" :key="index" v-html="sucesso"></li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "appSucessoNotificacao",
  props: {
    sucessos: Array
  }
};
</script>

<style scoped>
.sucesso {
  margin: 20px auto;
}

.sucesso li {
  color: #006400;
  text-align: center;
} 
</style>
