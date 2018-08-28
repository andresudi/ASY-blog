<template>
    <div class="container">
        <v-layout align-start justify-start row fill-height wrap>
            <v-layout xs12 sm6 v-for="(data,i) in article" v-bind:key="i">
                <v-card>
                    <v-card-media v-bind:src="data.image" height="200px"></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 style="text-align: center;"> {{ data.title }} </h3>
                            <hr>
                            <div> <span>Created by {{ data.UserId.username }} on {{ data.createdAt.slice(0,10) }}</span></div>
                        </div>
                    </v-card-title>
                    <v-btn flat color="white" :to="`/article/detail/${data._id}`">
                        See Article
                    </v-btn>
                </v-card>
            </v-layout>
        </v-layout>
    </div>
</template>

<script>
    export default {
        props: ['article'],
        data: function() {
            return {
    
            }
        },
    }
</script>

<style scoped>
    .v-btn {
        background-color: green
    }
</style>
