<template>
    <div
    class="post" >
        <sui-menu >
            <sui-container>
                <router-link 
                to="/"
                is="sui-menu-item">
                    <img src="/img/logo.png" class="logo">
                </router-link> 
                <router-link 
                to="/login"
                is="sui-menu-item">
                    Iniciar sesión
                </router-link> 
                <router-link 
                active
                to="/news"
                is="sui-menu-item">
                    Noticias
                </router-link> 
            </sui-container>
        </sui-menu>
        <div v-if="getNews">
            <sui-card
            class="post-style"
            :key="index"
            v-for="(post, index) in getNews">
                <sui-card-content>
                    <sui-card-header>{{post.title}}</sui-card-header>
                    <sui-card-meta>
                    <span>{{post.description}}</span>
                    </sui-card-meta>
                    <p>{{post.details}}</p>
                </sui-card-content>
            </sui-card>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
let storeModule = 'news';

export default {
    name: 'news',
    computed: {
        ...mapGetters(storeModule,['getNews'])
    },
    methods: {
        loadNews(){
            this.$store.dispatch(`${storeModule}/getNewsfeed`);
        },
    },
    mounted(){
        this.loadNews()
    } 
}
</script>

<style>
.post-style{
    left: 25vh !important;
    text-align: left !important;
    width: 70% !important;
}
.post-style:first-of-type{
    margin-top: 5rem !important;
    left: 25vh !important;
    text-align: left !important;
    width: 70% !important;
}
</style>