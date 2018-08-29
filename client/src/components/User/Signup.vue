<template>
<div class="container">
        <v-container grid-list-md text-xs-center class="kotak">
        <v-layout row wrap>
            <v-flex>
                <h1>Register Form</h1>
                <v-form ref="form" lazy-validation>
                    <v-text-field :rules="nameRules" v-model="username" label="name" required></v-text-field>
                    <v-text-field :rules="emailRules" v-model="email" label="Email" required></v-text-field>
                    <v-text-field :rules="passwordRules" v-model="password" type="password" label="Password" required></v-text-field>
                    <v-btn v-on:click="register">Register</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</div>

</template>

<script>
    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
        data: function() {
            return {
                username: '',
                nameRules: [
                    v => !!v || 'Name is required',
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 6 || 'Password must be greater than 6 characters'
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
                        url: 'http://35.240.201.255/users/register',
                        data: {
                            username: this.username,
                            email: this.email,
                            password: this.password
                        }
                    })
                    .then((result) => {
                        swal(result.data.message, '', 'success')
                        this.$router.push('/')
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