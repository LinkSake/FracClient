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
            v-for="(house, index) in getHouses">
                <sui-card-content>
                    <sui-card-header>{{house.street + ' #'+house.houseNumber}}</sui-card-header>
                    <sui-card-content>
                        <sui-list
                        :key="index"
                        v-for="(payment, index) in house.payments">
                            <sui-list-item
                            icon="money bill alternate outline">
                                {{payment.reason + ' ($' + payment.amount + ') - Pagado el '+payment.timeOfPayment}}
                            </sui-list-item>
                        </sui-list>
                    </sui-card-content>
                </sui-card-content>
            </sui-card>
        </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
let storeModule = 'houses';

export default {
    name:'residentlist',
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