<template>
    <section class="login">
        <h1>Criar Conta</h1>
        <div v-if="!carregando">
            <form autocomplete="off">
                <Label for="nome">Nome</Label>
                <input type="text" name="nome" id="nome" v-model="criar.nome"/>

                <Label for="usuario">Usuário</Label>
                <input type="text" name="usuario" id="usuario" v-model="criar.usuario"/>

                <Label for="senha">Senha</Label>
                <input type="password" name="senha" id="senha" v-model="criar.senha"/>

                <transition mode="in-out">
                    <appErroNotificacao :erros="erros"/>
                </transition>
                <transition mode="in-out">
                    <appSucessoNotificacao :sucessos="sucessos"/>
                </transition>
                
                <button class="btn" @click.prevent="salvar">Salvar</button>
            </form>
            <p class="criar-conta">
                <router-link :to="{name: 'login'}">Voltar</router-link>
            </p>
        </div>
        <appPaginaCarregando v-else/>
    </section>
</template>

<script>
import axios from "axios";
import './appLogin.css'

export default {
    data() {
        return {
            criar: {
                nome: "",
                usuario: "",
                senha: ""
            },
            sucessos: [],
            erros: [],
            carregando: false
        }
    },
    methods: {
        exibeErro() {
            this.carregando = false;

            setTimeout(()=>{
                this.erros = [];
            },5000);
        },
        exibeSucesso(msg) {
            this.carregando = false;
            this.sucessos.push(msg);

            setTimeout(()=>{
                this.sucessos = [];
            },5000);
        },
        validaDados() {
            this.erros = [];

            if (this.criar.nome.trim() == '') {
                this.erros.push('Por favor, informar o nome.');
            }

            if (this.criar.usuario.trim() == '') {
                this.erros.push('Por favor, informar o usuário.');
            }

            if (this.criar.senha.trim() == '') {
                this.erros.push('Por favor, informar a senha.');
            }
            
            return this.erros.length == 0;
        },
        listarUsuarios() {
            axios.get(process.env.VUE_APP_API_USER + 'users', this.criar)
            .then(response => { 
                this.$store.commit("UPDATE_USUARIOS", response.data);
            })
            .catch(error => {
                alert(error.message);
            });
        },
        async salvar() {
            this.carregando = true;
            
            if (this.validaDados()) {
                this.$store
                .dispatch("verificaUsuario", this.criar.usuario)
                .then(response => {
                    if(response != '') {
                        this.erros.push('Usuário já cadastrado.');
                        this.exibeErro();
                    } else {
                        axios.post(process.env.VUE_APP_API_USER + 'users', this.criar)
                        .then(() => {
                            this.criar = {
                                nome: "",
                                usuario: "",
                                senha: ""
                            }

                            this.exibeSucesso('Conta criada com sucesso.'); 
                            this.listarUsuarios();                
                        })
                        .catch(error => {
                            this.erros.push(error.message);
                            this.exibeErro();
                        });
                    }
                }) 

            } else {
                this.exibeErro();
            }
        }
    }
}
</script>
