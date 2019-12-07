<template>
  <div class="login">
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
                icon="hand peace outline">
                    ¡Bienvenido de vuelta!
                </h1>
                <sui-card
                class="bad-center">
                    <sui-card-content>
                            <sui-form>
                                <sui-form-field>
                                    <sui-input 
                                    icon="envelope"
                                    placeholder="martin@fracapp.me" />
                                </sui-form-field>
                                <sui-form-field>
                                    <sui-input 
                                    icon="lock"
                                    placeholder="**************" />
                                </sui-form-field>
                                <sui-button 
                                fluid
                                color="teal"
                                type="submit">
                                    Entrar
                                </sui-button>
                            </sui-form>
                    </sui-card-content>
                    <sui-card-content extra>
                        <router-link 
                        to="/signup">
                            ¿Aún no estás registrado?
                        </router-link> 
                    </sui-card-content>
                </sui-card>
            </sui-grid-column>
            <sui-grid-column />
        </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
export default {
    name: 'login'
}
</script>

<style lang="css">

</style>