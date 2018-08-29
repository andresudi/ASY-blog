<template>
    <v-container grid-list-md text-xs-center class="kotak">
        <v-layout row wrap>
            <v-flex>
                <h1>Login Form</h1>
                <v-form ref="form" lazy-validation>
                    <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                    <v-text-field v-model="password" :rules="passwordRules" type="password" label="Password" required></v-text-field>
                    <v-btn v-on:click="login">Submit</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import router from '@/router'
    import axios from 'axios'
    import swal from 'sweetalert'
    
    export default {
        data: function() {
            return {
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                ],
            }
        },
        methods: {
            login: function() {
                axios({
                        method: 'post',
                        url: 'http://35.240.201.255/users/login',
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    })
                    .then((response) => {
                        let token = response.data.token
                        if (!token) {
                            swal(response.data.message)
                        } else {
                            swal('Login Successfully', '','success')
                            localStorage.setItem('token', token)
                            router.push('/')
                        }
                    })
                    .catch((err) => {
                        swal(err.message)
                    })
            }
        }
    }
</script>

<style scoped>
    .kotak {
        color: beige;
        background-color: black;
        margin-bottom: 50px;
        margin-top: 100px;
    }
    
    .v-btn {
        color: black;
        background-color: white;
    }
</style>
