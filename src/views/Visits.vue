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
        <div class="visit">
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
                        icon="book">
                            Registro de visitas
                        </h1>
                        <sui-card
                        class="bad-center">
                            <sui-card-content>
                                    <div>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="licensePlate"
                                            placeholder="Placa" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="color"
                                            placeholder="Color" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="year"
                                            placeholder="Año" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="brand"
                                            placeholder="Marca" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="model"
                                            placeholder="Modelo" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="house"
                                            placeholder="# de casa" />
                                        </sui-form-field>
                                        <sui-button 
                                        fluid
                                        color="teal"
                                        v-on:click="postVisit">
                                            Registrar visita
                                        </sui-button>
                                    </div>
                            </sui-card-content>
                            <sui-card-content extra>
                                <router-link 
                                to="/visits/list"
                                >
                                    Ver registro
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
let storeModule = 'visits';

export default {
    name: 'visits',
    data() {
        return {
            licensePlate: "",
            color: "",
            year: "",
            brand: "",
            model: "",
            house: "",
        };
    },
    methods: {
        postVisit() {
            this.$store.dispatch(`${storeModule}/postVisit`, {
            licensePlate: this.licensePlate,
            color: this.color,
            year: this.year,
            brand: this.brand,
            model: this.model,
            house: this.house,
            timeOfEntry: '2019-12-08T21:14:28.829Z',
            }).then(res => {
                if(res === true){
                    this.$router.push("/home");
                } else {
                    console.log(res);
                }
            });
        }
    },
}
</script>

<style>

</style>