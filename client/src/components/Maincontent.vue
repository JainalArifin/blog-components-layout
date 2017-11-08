<template lang="html">
  <div class="row">
    <div class="text-center">
      <h3> All Article</h3>
    </div>
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
       </div>
     </div>
      <!-- / articles -->
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Sidebar from '@/components/Sidebar'
  export default {
    computed: {
      ...mapState([
        'articles'
      ])
    },
    components: {
      Sidebar
    },
    methods: {
      ...mapActions([
        'getArticle'
      ])
    },
    created () {
      this.getArticle()
    }
  }
</script>

<style lang="css">
</style>
