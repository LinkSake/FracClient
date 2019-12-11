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
                            <div>
                                <sui-form-field>
                                    <sui-input 
                                    icon="envelope"
                                    name="email"
                                    v-model="email"
                                    placeholder="martin@fracapp.me" />
                                </sui-form-field>
                                <sui-form-field>
                                    <sui-input 
                                    icon="lock"
                                    name="password"
                                    v-model="password"
                                    placeholder="**************" />
                                </sui-form-field>
                                <sui-button 
                                fluid
                                color="teal"
                                v-on:click="login">
                                    Entrar
                                </sui-button>
                            </div>
                    </sui-card-content>
                </sui-card>
            </sui-grid-column>
            <sui-grid-column />
        </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
let storeModule = "session";

export default {
    name: 'login',
    data() {
        return {
            email: "",
            password: ""
        };
    }, 
    methods: {
        login() {
            this.$store.dispatch(`${storeModule}/tryLogin`, {
            email: this.email,
            password: this.password
            }).then(res => {
                if(res === true){
                    this.$router.push("/home");
                } else {
                    console.log(res);
                }
            });
        }
    },
    computed: {
    ...mapGetters(storeModule, ["getLoggedIn"])
    }
}
</script>

<style lang="css">

</style>