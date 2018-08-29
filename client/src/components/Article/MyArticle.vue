<template>
    <div class="container">
        <v-layout row wrap>
            <v-flex xs12 sm4 v-for="(data, i) in Articles" :key="i">
                <v-card>
                    <v-card-media v-bind:src="data.image" height="300px"></v-card-media>
                    <v-card-title primary-title>
                        <div class="hehe">
                            <h3 class="headline mb-0"> {{ data.title }} </h3>
                            <hr>
                            <br>
                            <div> {{ data.description }} </div>
                            <br>
                            <hr>
                            <div> <span>Created by {{ data.UserId.username }} on {{ data.createdAt | moment("dddd, MMMM Do YYYY, h:mm a")}}</span></div>
                            <v-btn :to="`/article/edit/${data._id}`" style="color: white;">Edit</v-btn>
                            <v-btn v-on:click="deleteArticle(data)">Delete</v-btn>
                        </div>
                    </v-card-title>
    
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import axios from 'axios'
    import swal from 'sweetalert'
    
    export default {
        data: function() {
            return {
                token: localStorage.getItem('token'),
                Articles: []
            }
        },
    
        mounted() {
            axios({
                    method: 'get',
                    url: 'http://35.240.201.255/articles/myarticle',
                    headers: {
                        token: this.token
                    }
                })
                .then((result) => {
                    console.log(result.data.data);
                    this.Articles = result.data.data
                })
                .catch((err) => {
                    console.log(err.message)
                })
        },
    
        methods: {
            deleteArticle(data) {
                axios({
                        method: 'delete',
                        url: `http://35.240.201.255/articles/${data._id}`,
                        headers: {
                            token: this.token
                        }
                    })
                    .then((result) => {
                        swal(result.data.message, '', 'success')
                        this.$router.push('/myarticle')
                    })
                    .catch((err) => {
                        swal(err.message)
                    })
            }
        },
    }
</script>

<style scoped>
    .hehe {
        text-align: center;
        min-width: 100%;
        min-height: 300px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .v-btn {
        background-color: red;
    }
</style>
