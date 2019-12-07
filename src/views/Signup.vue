<template>
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
                    ¡Únete a nosotros!
                </h1>
                <sui-card
                class="bad-center">
                    <sui-card-content>
                            <sui-form>
                                <sui-form-field>
                                    <sui-input 
                                    icon="user"
                                    placeholder="Nombre" />
                                </sui-form-field>
                                <sui-form-field>
                                    <sui-input 
                                    icon="users"
                                    placeholder="Apellido" />
                                </sui-form-field>
                                <sui-form-field>
                                    <sui-input 
                                    icon="envelope"
                                    placeholder="Correo Electronico" />
                                </sui-form-field>
                                <sui-form-field>
                                    <sui-input 
                                    icon="lock open"
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
                                type="submit">
                                    Registrar
                                </sui-button>
                            </sui-form>
                    </sui-card-content>
                    <sui-card-content extra>
                        <router-link 
                        to="/login">
                            ¿Ya eres usuario?
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
    name: 'signup'
}
</script>

<style lang="css">

</style>