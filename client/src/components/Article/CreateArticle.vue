<template>
    <div class="container">
        <v-layout row wrap>
            <v-card class="color">
                <v-card-title>
                    <span class="headline">Add New Article</span>
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
                            <input v-on:change="getImage" type="file">
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat v-on:click="addArticle">Save</v-btn>
                    <v-btn color="blue darken-1" flat v-on:click="cancel">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </div>
</template>

<script scoped>
    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
        data: () => ({
            title: '',
            description: '',
            image: ''
        }),
    
        methods: {
            addArticle: function() {
                let formdata = new FormData()
                formdata.append('image', this.image)
                axios.post('http://35.240.201.255/articles/upload', formdata)
                    .then((result) => {
                        console.log(result.data.link);
                        axios({
                                method: 'post',
                                url: 'http://35.240.201.255/articles',
                                headers: {
                                    token: localStorage.getItem('token')
                                },
                                data: {
                                    title: this.title,
                                    description: this.description,
                                    image: result.data.link
                                }
                            })
                            .then((result) => {
                                swal(result.data.message, '', 'success')
                                this.$router.push('/')
                            })
                            .catch((err) => {
                                console.log(err)
                            });
                    })
                    .catch((err) => {
                        swal(err.message)
                    });
            },
    
            getImage(image) {
                this.image = image.target.files[0]
    
            },
            cancel() {
                this.$router.push('/')
            }
        }
    }
</script>

<style>
    .color {
        background-color: transparent;
    }
</style>
