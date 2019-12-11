<template>
    <div>
        <sui-menu >
            <sui-container>
                <router-link 
                to="/home"
                is="sui-menu-item"
                active>
                    <img src="/img/logo.png" class="logo">
                </router-link> 
                <router-link 
                to="/houses"
                is="sui-menu-item">
                    Casas
                </router-link> 
                <router-link 
                to="/residents"
                is="sui-menu-item">
                    Residentes
                </router-link> 
                <router-link 
                to="/visits"
                is="sui-menu-item">
                    Visitas
                </router-link> 
                <router-link 
                to="/payments"
                is="sui-menu-item">
                    Pagos
                </router-link> 
                <router-link 
                to="/announcements"
                is="sui-menu-item">
                    Anuncios
                </router-link> 
            </sui-container>
        </sui-menu>
        <h1 is="sui-header">¡Bienvenido!</h1>
        <h5 is="sui-header">¿Qué harás hoy?</h5>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
let storeModule = 'session';

export default {
    name: 'home',
    computed: {
    },
    methods: {
    },
}
</script>

<style>

</style>