<template>
    <section class="login">
        <h1>Login</h1>
        <form autocomplete="off">
            <Label for="usuario">Usuário</Label>
            <input type="text" name="usuario" id="usuario" v-model="login.usuario"/>

            <Label for="senha">Senha</Label>
            <input type="password" name="senha" id="senha" v-model="login.senha"/>

            <transition mode="in-out">
                <appErroNotificacao :erros="erros"/>
            </transition>

            <button class="btn" @click.prevent="logar">Logar</button>
        </form>
        <p class="criar-conta">
            <router-link :to="{name: 'criar-conta'}">Criar uma conta</router-link>
        </p>
    </section>
</template>

<script>
import './appLogin.css'

export default {
    data() {
        return {
            login: {
                usuario: "",
                senha: ""
            },
            erros: [],
        }
    },
    methods: {
        logar() {
            if (this.login.usuario.trim() == '') {
                this.erros.push('Por favor, informar o usuário.');
            }

            if (this.login.senha.trim() == '') {
                this.erros.push('Por favor, informar a senha.');
            }

            if (this.erros.length > 0) {
                this.carregando = false;

                setTimeout(()=>{
                    this.erros = [];
                },5000);

            } else {
                this.$store
                .dispatch("logarUsuario", this.login)
                .then(response => {
                    if(response == '') {
                        this.erros.push('Usuário não encontrado!');
                    } else {
                        this.$store.dispatch("setUsuario", response);
                        this.$router.push({ name: "cliente" });
                    }
                }) 
                .catch(error => {
                    this.erros.push(error.response.data.message);
                });
            }
        }
    }
}
</script>
