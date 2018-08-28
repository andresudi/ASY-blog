<template>
    <div class="container">
        <v-layout>
            <v-flex xs12 sm12>
                <v-card v-bind:key="article.id">
                    <v-card-media v-bind:src="article.image" height="500px"></v-card-media>
                    <v-card-title primary-title>
                        <div class="hoho">
                            <h3 class="headline mb-0"> <b>{{ article.title }}</b> </h3>
                            <hr>
                            <div>
                                <h3>{{ article.description }}</h3>
                            </div>
                            <br>
                            <hr>
                        </div>
                    </v-card-title>
                    <h3>Leave Your Comment Here</h3>
                    <br>
                    <div class="container" style="width: 1000px; background-color: white; color: black;" v-if="cek_login">
                        <v-textarea rows="3" cols="5" v-model="comment" placeholder="Please type here"></v-textarea>
                        <v-btn @click="addComment">Post</v-btn>
                    </div>
                    <div v-if="!cek_login">
                        <h3>Please Login First!</h3>
                        <v-btn to="/signin">Login</v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
        <br>
        <h1>Comments</h1>
        <Comment></Comment>
    </div>
</template>

<script>
    import swal from 'sweetalert'
    import axios from 'axios'
    // import moment from 'vue-moment'
    import Comment from '@/components/Comment.vue'
    
    export default {
        components: {
            Comment
        },
    
        data() {
            return {
                article: {
                    id: '',
                    title: '',
                    description: '',
                    user: '',
                    date: '',
                    image: '',
                    comment: ''
                },
                cek_login: localStorage.getItem('token')
            }
        },
    
        methods: {
            addComment() {
                axios({
                        method: 'put',
                        url: `http://localhost:3000/articles/comment/${this.$route.params.id}`,
                        headers: {
                            token: localStorage.getItem('token')
                        },
                        data: {
                            comment: this.comment
                        },
                    })
                    .then((result) => {
                        console.log(result)
                        this.$router.go()
                    })
                    .catch((err) => {
                        swal(err.message)
                    });
            }
        },
    
        mounted() {
            let id = this.$route.params.id
            axios({
                    method: 'get',
                    url: `http://localhost:3000/articles/${id}`,
                })
                .then((result) => {
                    console.log(result.data);
    
                    this.article.id = result.data.data._id
                    this.article.title = result.data.data.title
                    this.article.description = result.data.data.description
                    this.article.user = result.data.data.UserId.username
                    this.article.date = result.data.data.createdAt
                    this.article.image = result.data.data.image
                })
                .catch((err) => {
                    swal(err.message)
                });
    
        }
    
    }
</script>

<style scoped>
    .v-card {
        color: beige;
        background-color: black;
    }
    
    .v-btn {
        color: beige;
        background-color: green;
    }
    
    .hoho {
        text-align: center;
        min-width: 100%;
        min-height: 300px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
