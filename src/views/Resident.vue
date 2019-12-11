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
                active>
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
                        icon="child">
                            Dale la bienvenida a un nuevo residente
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
                                            v-model="name"
                                            placeholder="Nombre" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="FLastName"
                                            placeholder="Apellido paterno" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="MLastName"
                                            placeholder="Apellido materno" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="age"
                                            placeholder="Edad" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="email"
                                            placeholder="Correo electronico" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="celphone"
                                            placeholder="Telefono" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="sex"
                                            placeholder="Sexo (F/M)" />
                                        </sui-form-field>
                                        <sui-button 
                                        fluid
                                        color="teal"
                                        v-on:click="putResident">
                                            Agregar residente
                                        </sui-button>
                                    </div>
                            </sui-card-content>
                            <sui-card-content extra>
                                <router-link 
                                to="/residents/list"
                                >
                                    Ver residentes
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
    name:'resident',
    data() {
        return {
            name: "",
            FLastName: "",
            MLastName: "",
            age: null,
            email: "",
            celphone: null,
            sex: "",
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
        putResident() {
            this.$store.dispatch(`${storeModule}/putResident`, {
                residents: {
                    name: this.name,
                    FLastName: this.FLastName,
                    MLastName: this.MLastName,
                    age: this.age,
                    email: this.email,
                    celphone: this.celphone,
                    sex: this.sex,
                    current: this.current
                }
            }).then(res => {
                if(res === true){
                    this.$router.push("/residents/list");
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