<template>
    <v-toolbar class="blue-grey darken-3">
        <v-toolbar-title>
            <router-link to='/' tag='span'>LUGO-Blog</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat to='/'>Home</v-btn>
            <v-btn flat to='/article' v-if="checkLogin">My Article</v-btn>
            <v-btn flat to='/article/create' v-if="checkLogin">Create Article</v-btn>
            <v-btn flat to='/signup' v-if="!checkLogin">Sign Up</v-btn>
            <v-btn flat to='/signin' v-if="!checkLogin">Sign In</v-btn>
            <v-btn flat v-if="checkLogin" @click="logout" to='/'>Sign Out</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {
                checkLogin: localStorage.getItem('token'),
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('token')
                this.$router.go()
            }
        }
    }
</script>

<style scoped>
    * {
        color: whitesmoke;
    }
</style>