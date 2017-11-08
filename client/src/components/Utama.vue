<template lang="html">
  <div class="">
    <!-- carousel -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="https://ibhuluimcom-a.akamaihd.net/ib.huluim.com/show/1304?region=US&size=952x536" alt="Los Angeles" style="width:100%">
        </div>

        <div class="item">
          <img src="https://i.ytimg.com/vi/BLbuPSVYPA4/maxresdefault.jpg" alt="Chicago" style="width:100%">
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
      </div>
    <!-- / carousel -->
    <div class="text-center">
      <h4>Baca blog tentang anime anda</h4>
    </div>
    <!-- menu -->
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="article in articles">
        <!-- article -->
        <div class="thumbnail">
         <img style="height: 200px; width: 100%; display: block;" v-bind:src="article.imgUrl" alt="Card image">
         <div class="caption">
           <div v-for="author in article.author">
             <b><span>Author : </span>{{ author.username }}</b>
           </div>
           <h3>{{ article.title }}</h3>
           <p class="card-text">{{ article.content }}</p>
           <p><a href="#" class="btn btn-info" role="button" @click="blog"> Masuk ke blog</a> </p>
         </div>
       </div>
        <!-- / articles -->
      </div>
    </div>
    <!-- /menu -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getArticle'
    ]),
    blog () {
      this.$router.push('/blog')
    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<style lang="css">
</style>
