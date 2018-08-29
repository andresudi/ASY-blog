<template>
    <div class="container">
        <v-layout>
            <v-flex xs12 sm6 offset-sm1>
                <v-card v-for="(data,i) in comments" v-bind:key="i">
                    <v-card-title primary-title>
                        <div class="hihi">
                            <h2 style="text-align: center;"> {{ data.name }} </h2>
                            <div style="text-align: center;"> Posted on : {{ data.date | moment("dddd, MMMM Do YYYY, h:mm a") }}</div>
                            <hr>
                            <br>
                            <div> {{ data.comment }} </div>
                        </div>
                    </v-card-title>
    
                    <v-card-actions>
                        <div class="huhu">
                            <v-btn v-if="user_login == data.name || user_login == postedBy" @click="deleteComment(data._id)">Delete</v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import axios from 'axios'
    import swal from 'sweetalert'
    
    export default {
        data() {
            return {
                comments: [],
                postedBy: '',
                cek_login: localStorage.getItem('token'),
                user_login: ''
            }
        },
    
        methods: {
            getArticles() {
                axios({
                        method: 'get',
                        url: `http://35.240.201.255/articles/${this.$route.params.id}`,
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then((result) => {
                        this.comments = result.data.data.comments
                        this.postedBy = result.data.data.UserId.username
                    })
                    .catch((err) => {
                        console.log(err.message)
                    });
            },
    
            deleteComment(id_comment) {
                axios({
                        method: 'put',
                        url: `http://35.240.201.255/articles/comment/${this.$route.params.id}/delete`,
                        headers: {
                            token: localStorage.getItem('token')
                        },
                        data: {
                            id_comment: id_comment
                        }
                    })
                    .then((result) => {
                        swal(result.data.message, '', 'success');
                        this.user_login = name
                    })
                    .catch((err) => {
                        swal(err.message)
                    });
            },
    
            getMe() {
                axios({
                        method: 'get',
                        url: `http://35.240.201.255/users`,
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then((result) => {
                        this.user_login = result.data.data.name
                    })
                    .catch((err) => {
                        swal(err.message)
                    });
            }
        },
    
        mounted() {
            this.getArticles()
            this.getMe()
        }
    }
</script>

<style scoped>
    .v-card {
        background-color: white;
        margin-bottom: 20px;
        color: black;
        border: 1px solid white;
        width: 900px
    }
    
    .v-btn {
        color: beige;
        background-color: brown;
    }
    
    .hihi {
        text-align: center;
        min-width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    
    .huhu {
        position: center;
        text-align: center;
        min-width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
</style>
