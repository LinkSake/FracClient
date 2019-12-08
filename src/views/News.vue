<template>
    <div
    class="post" >
        <sui-menu 
        inverted>
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
                to="/signup"
                is="sui-menu-item">
                    Registro
                </router-link>
                <router-link 
                active
                to="/news"
                is="sui-menu-item">
                    Noticias
                </router-link> 
            </sui-container>
        </sui-menu>
        <sui-card
        class="post-style"
        :key="index"
        v-for="(post, index) in news">
            <sui-card-content>
                <sui-card-header>{{post.title}}</sui-card-header>
                <sui-card-meta>
                <span>{{post.description}}</span>
                </sui-card-meta>
                <p>{{post.details}}</p>
            </sui-card-content>
        </sui-card>
    </div>
</template>

<script>
export default {
    name: 'news',
    data() { 
        return {
            news:[
                {
                    title: "Carne asada",
                    description: "En honor de Don Manuel",
                    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis convallis arcu, ac malesuada purus. Nulla laoreet eros vel mi imperdiet suscipit et pulvinar dui. Integer dapibus metus et metus."
                },
                {
                    title: "Carne asada",
                    description: "En honor de Don Manuel",
                    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis convallis arcu, ac malesuada purus. Nulla laoreet eros vel mi imperdiet suscipit et pulvinar dui. Integer dapibus metus et metus."
                },
                {
                    title: "Carne asada",
                    description: "En honor de Don Manuel",
                    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis convallis arcu, ac malesuada purus. Nulla laoreet eros vel mi imperdiet suscipit et pulvinar dui. Integer dapibus metus et metus."
                },
            ] 
        }
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