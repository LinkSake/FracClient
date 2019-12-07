<template>
   <div class="landing">
    <sui-grid 
    :columns="3">
        <sui-grid-row 
        stretched
        class="landing-row"
        verticalAlign="middle"> 
            <sui-grid-column />
            <sui-grid-column>
                <h1 
                is="sui-header" 
                icon="home">
                    FracApp
                    <sui-header-subheader>
                        Maneja tu fraccionamiento de una menera sencilla<span>™️</span>
                    </sui-header-subheader>
                </h1>
                <div id="nav">
                    <router-link 
                    to="/">
                        Hi
                    </router-link> 
                    |
                    <router-link 
                    to="/login">
                        Login
                    </router-link> 
                    | 
                    <router-link 
                    to="/signup">
                        Signup
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
    .landing-row{
        height: 100vh;
    }
</style>