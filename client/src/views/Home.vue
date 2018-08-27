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
    <Article></Article>
    <Footer></Footer>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from '@/components/Carousel'
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  import Article from '@/components/Article/Article.vue'
  
  export default {
    name: 'home',
    components: {
      Navbar,
      Carousel,
      Footer,
      Article
    },
    data() {
      return {
        data: []
      }
    },
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
