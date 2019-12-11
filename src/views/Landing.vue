<template>
   <div class="landing">
    <sui-grid 
    :columns="3">
        <sui-grid-row 
        stretched
        class="center-row"
        verticalAlign="middle"> 
            <sui-grid-column />
            <sui-grid-column>
                <sui-image 
                centered
                size="medium" 
                src="/img/logo.png"/>
                <h1 
                is="sui-header">
                    FracApp
                    <sui-header-subheader>
                        Maneja tu fraccionamiento de una menera sencilla<span>™️</span>
                    </sui-header-subheader>
                </h1>
                <div id="nav">
                    <router-link 
                    to="/login">
                        Iniciar Sesión
                    </router-link> 
                    | 
                    <router-link 
                    to="/news">
                        Noticias
                    </router-link> 
                </div>
            </sui-grid-column>
            <sui-grid-column />
        </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
export default {
  name: 'landing'
}
</script>

<style lang="css">
    
</style>