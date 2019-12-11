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
                is="sui-menu-item">
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
                is="sui-menu-item"
                active>
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
        <div v-if="getVisits">
            <sui-card
            class="post-style"
            :key="index"
            v-for="(visit, index) in getVisits">
                <sui-card-content>
                    <sui-card-header>{{visit.licensePlate + ' (' + visit.color + ' '
                        + visit.model + ' ' + visit.year+ ' )'}}</sui-card-header>
                    <sui-card-meta>
                    <span>De visita a la casa #{{visit.house}}</span>
                    </sui-card-meta>
                </sui-card-content>
            </sui-card>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
let storeModule = 'visits';

export default {
    name: 'visitslist',
    computed: {
        ...mapGetters(storeModule,['getVisits'])
    },
    methods: {
        loadVisits(){
            this.$store.dispatch(`${storeModule}/getVisits`);
        },
    } ,
    mounted(){
        this.loadVisits()
    }
}
</script>

<style>

</style>