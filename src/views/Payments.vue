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
                is="sui-menu-item"
                >
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
                is="sui-menu-item"
                active>
                    Pagos
                </router-link> 
                <router-link 
                to="/announcements"
                is="sui-menu-item">
                    Anuncios
                </router-link> 
            </sui-container>
        </sui-menu>
        <div class="resident">
            <sui-grid 
            :columns="3">
                <sui-grid-row 
                stretched
                class="center-row"
                verticalAlign="middle"> 
                    <sui-grid-column />
                    <sui-grid-column
                    centered>
                        <h1 
                        color="teal"
                        is="sui-header"
                        icon="money bill alternate">
                            ¡Ka-ching! Hora de cobrar
                        </h1>
                        <sui-card
                        class="bad-center">
                            <sui-card-content>
                                    <div>
                                        <sui-dropdown
                                        selection
                                        v-model="current"
                                        :options="getHouseOptions"
                                        placeholder="Número de casa" 
                                        />
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="amount"
                                            placeholder="Cantidad" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="reason"
                                            placeholder="Razón del pago" />
                                        </sui-form-field>
                                        <sui-button 
                                        fluid
                                        color="teal"
                                        v-on:click="putPayment">
                                            Agregar pago
                                        </sui-button>
                                    </div>
                            </sui-card-content>
                            <sui-card-content extra>
                                <router-link 
                                to="/payments/list"
                                >
                                    Ver pagos
                                </router-link> 
                            </sui-card-content>
                        </sui-card>
                    </sui-grid-column>
                    <sui-grid-column />
                </sui-grid-row>
            </sui-grid>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
let storeModule = 'houses';

export default {
    name: "payments",
    data() {
            return {
                amount: "",
                reason: "",
                current: null,
            };
    },
    computed: {
        ...mapGetters(storeModule,['getHouses','getHouseOptions']),
    },
    methods: {
        loadHouses(){
            this.$store.dispatch(`${storeModule}/getHouses`);
        },
        putPayment() {
            this.$store.dispatch(`${storeModule}/putPayment`, {
                amount: this.amount,
                payment: this.payment,
                timeOfPayment: Date.now(),
                current: this.current
            }).then(res => {
                if(res === true){
                    this.$router.push("/payments/list");
                } else {
                    console.log(res);
                }
            });
        }
    },
    mounted(){
        this.loadHouses()
    } 
}
</script>

<style>

</style>