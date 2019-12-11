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
                is="sui-menu-item"
                active>
                    Anuncios
                </router-link> 
            </sui-container>
        </sui-menu>
        <div class="announcement">
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
                        icon="newspaper">
                            Hazle saber a tus residentes lo que está pasando
                        </h1>
                        <sui-card
                        class="bad-center">
                            <sui-card-content>
                                    <div>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="title"
                                            placeholder="¿Qué está pasando?" />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="description"
                                            placeholder="Cuentanos más..." />
                                        </sui-form-field>
                                        <sui-form-field>
                                            <sui-input 
                                            v-model="details"
                                            placeholder="¡Detalles!" />
                                        </sui-form-field>
                                        <sui-button 
                                        fluid
                                        color="teal"
                                        v-on:click="postNews">
                                            Publicar noticia
                                        </sui-button>
                                    </div>
                            </sui-card-content>
                            <sui-card-content extra>
                                <router-link 
                                to="/news"
                                >
                                    Ver noticias
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
let storeModule = 'news';

export default {
    name: 'announcements',
    data() {
        return {
            title: "",
            description: "",
            details: ""
        };
    },
    methods: {
        postNews() {
            this.$store.dispatch(`${storeModule}/postNews`, {
            title: this.title,
            description: this.description,
            details: this.details,
            date: Date.now(),
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