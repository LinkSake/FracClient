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
            >
                Casas
            </router-link> 
            <router-link 
            to="/residents"
            is="sui-menu-item">
                Residentes
            </router-link>
            <router-link 
            to="/users"
            is="sui-menu-item"
            active>
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
    <div v-if="getUsers">
            <sui-card
            class="post-style"
            :key="index"
            v-for="(user, index) in getUsers">
                <sui-card-content>
                    <sui-card-header>
                        <sui-icon name="address card" />
                        {{user.name + ' - ' + user.email}}
                    </sui-card-header>
                </sui-card-content>
            </sui-card>
        </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
let storeModule = 'session';

export default {
    name:'userslist',
    computed: {
        ...mapGetters(storeModule,['getUsers'])
    },
    methods: {
        loadUsers(){
            this.$store.dispatch(`${storeModule}/getUsers`);
        },
    },
    mounted(){
        this.loadUsers()
    } 
}
</script>

<style>

</style>