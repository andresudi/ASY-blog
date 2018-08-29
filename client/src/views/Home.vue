<template>
  <div class="home">
    <Carousel></Carousel>
    <v-jumbotron class="jumbo">
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to LUGO-Blog</h3>
          <span class="subheading">In Anime We Trust</span>
          <h3>Happy reading!</h3>
          <v-divider class="my-3"></v-divider>
        </v-flex>
      </v-layout>
      <img src="https://baldface.net/s/birds.gif" alt="" srcset="">
    </v-jumbotron>
    <br>
    <br>
    <Article :article="data"></Article>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from '@/components/Carousel'
  import Article from '@/components/Article/Article.vue'
  import axios from 'axios'
  // import Footer from '@/components/Footer'

  export default {
    name: 'home',
    components: {
      Carousel,
      Article
    },
  
    data() {
      return {
        data: []
      }
    },
  
    mounted() {
      axios({
          method: 'get',
          url: 'http://35.240.201.255/articles',
        })
        .then((response) => {
          this.data = response.data.data
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
</script>

<style>
  .button {
    background-color: #ffffff;
    color: #293D52;
  }
  
  v-jumbotron {
    height: 5px;
  }
</style>
