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
                active>
                    Casas
                </router-link> 
                <router-link 
                to="/users"
                is="sui-menu-item">
                    Residentes
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

  </div>
</template>

<script>
export default {
    name:'houses'

}
</script>

<style>

</style>