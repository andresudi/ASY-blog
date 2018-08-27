<template>
    <v-container grid-list-md text-xs-center class="kotak">
        <v-layout row wrap>
            <v-flex>
                <h1>Register Form</h1>
                <v-form ref="form" lazy-validation>
                    <v-text-field :rules="nameRules" v-model="name" label="name" required></v-text-field>
                    <v-text-field :rules="emailRules" v-model="email" label="Email" required></v-text-field>
                    <v-text-field :rules="passwordRules" v-model="password" type="password" label="Password" required></v-text-field>
                    <v-btn v-on:click="register">Register</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import router from '@/router.js'
    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
        data: function() {
            return {
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ]
            }
        },
    
        methods: {
            register: function() {
                axios({
                        method: 'post',
                        url: 'http://localhost:3000/users/register',
                        data: {
                            username: this.username,
                            email: this.email,
                            password: this.password
                        }
                    })
                    .then((result) => {
                        swal(result.data.message)
                    
                    })
                    .catch((err) => {
                        swal(err.message)
                    });
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