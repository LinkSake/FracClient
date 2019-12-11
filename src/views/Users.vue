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
        <div class="signup">
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
                        icon="handshake outline">
                            ¡Únete a tu equipo!
                        </h1>
                        <sui-card
                        class="bad-center">
                            <sui-card-content>
                                    <div>
                                        <sui-form-field>
                                            <sui-input 
                                            icon="user"
                                            v-model="name"
                                            placeholder="Nombre" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            icon="envelope"
                                            v-model="email"
                                            placeholder="Correo Electronico" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            icon="lock open"
                                            v-model="password"
                                            placeholder="Contraseña" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            icon="lock"
                                            placeholder="Confirmar contraseña" />
                                        </sui-form-field>
                                        <sui-button 
                                        fluid
                                        color="teal"
                                        v-on:click="postUser">
                                            Registrar
                                        </sui-button>
                                    </div>
                            </sui-card-content>
                            <sui-card-content extra>
                                <router-link 
                                to="/users/list">
                                    Ver usuarios
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
let storeModule = 'session';

export default {
    name: 'users',
    data() {
        return {
            name: "",
            email: "",
            password: ""
        };
    },
    methods: {
        postUser() {
            this.$store.dispatch(`${storeModule}/postUser`, {
            name: this.name,
            email: this.email,
            password: this.password,
            role: 'user',
            }).then(res => {
                if(res === true){
                    this.$router.push("/users/list");
                } else {
                    console.log(res);
                }
            });
        }
    },
}
</script>

<style lang="css">

</style>