<template lang="html">
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
         <p> <a href="#" class="btn btn-danger" role="button" @click="deleteArticle(article._id)"> Delete</a></p>
       </div>
     </div>
      <!-- / articles -->
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'articles'
      ])
    },
    methods: {
      ...mapActions([
        'getArticle',
        'deleteArticle'
      ])
    },
    created () {
      this.getArticle()
    },
    watch: {
      articles: function (b) {
        this.getArticle()
      }
    }
  }
</script>

<style lang="css">
</style>
