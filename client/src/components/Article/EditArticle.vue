<template>
    <div class="container">
        <v-layout row wrap>
            <v-card class="color">
                <v-card-title>
                    <span class="headline">Edit Article</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex>
                                <v-text-field v-model="title" label="Title" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-textarea rows="20" v-model="description" label="Content Article"></v-textarea>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat v-on:click="editArticle">Save</v-btn>
                    <v-btn color="blue darken-1" flat to="/article/myarticle">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                title: '',
                description: ''
            }
        },
    
        methods: {
            editArticle() {
                axios({
                        method: 'put',
                        url: `http://35.240.201.255/articles/${this.$route.params.id}`,
                        headers: {
                            token: localStorage.getItem('token')
                        },
                        data: {
                            title: this.title,
                            description: this.description
                        }
                    })
                    .then((result) => {
                        swal(result.data.message, '', 'success')
                        this.$router.push('/article/myarticle')
                    }).catch((err) => {
    
                    });
            }
        },
    
        created() {
            axios({
                    method: 'get',
                    url: `http://35.240.201.255/articles/${this.$route.params.id}`,
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then((result) => {
                    this.id = result.data.data._id
                    this.title = result.data.data.title
                    this.description = result.data.data.description
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
</script>

<style scoped>
    .container {
        background-color: black;
        color: beige;
    }
    
    .v-btn {
        color: black;
    }
</style>
