<template>
    <header>
        <nav>
            <router-link to="/" class="logo">
                <img src="@/assets/logo.png" alt="Teste Front FCC" />
            </router-link>
            <button v-if="$store.state.login" class="btn" @click.prevent="logout">Logout</button>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'appHeader',
    methods: {
        logout() {
            this.$store.dispatch("logoutUsuario");
            this.$router.push({ name: "login" });
        }
    }
}
</script>

<style scoped>

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
    padding: 10px 0;
}

.logo img {
    width: 60px;
    height: 60px;
}

</style>