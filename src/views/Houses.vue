<template>
  <div>
        <sui-menu >
            <sui-container>
                <router-link 
                to="/home"
                is="sui-menu-item">
                    <img src="/img/logo.png" class="logo">
                </router-link> 
                <router-link 
                to="/houses"
                is="sui-menu-item"
                active>
                    Casas
                </router-link> 
                <router-link 
                to="/residents"
                is="sui-menu-item">
                    Residentes
                </router-link>
                <router-link 
                to="/users"
                is="sui-menu-item">
                    Usuarios
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
        <div v-if="getHouses">
            <sui-card
            class="post-style"
            :key="index"
            v-for="(house, index) in getHouses">
                <sui-card-content>
                    <sui-card-header>{{house.street + ' #'+house.houseNumber}}</sui-card-header>
                    <sui-card-meta>
                    <span>
                        Status: {{house.status + ' | ' + 'Telefono: ' + house.telephone }}
                    </span>
                    </sui-card-meta>
                </sui-card-content>
            </sui-card>
        </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
let storeModule = 'houses';

export default {
    name:'houses',
    computed: {
        ...mapGetters(storeModule,['getHouses'])
    },
    methods: {
        loadHouses(){
            this.$store.dispatch(`${storeModule}/getHouses`);
        },
    },
    mounted(){
        this.loadHouses()
    } 
}
</script>

<style>

</style>