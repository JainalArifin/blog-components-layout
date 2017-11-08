<template lang="html">
  <div class="row">
    <div>
      <!-- article -->
      <div class="thumbnail">
       <img style="height: 400px; width: 100%; display: block;" v-bind:src="dataArticle.imgUrl" alt="Card image">
       <div class="caption">
         <div v-for="author in dataArticle.author">
           <b><span>Author : </span>{{ author.username }}</b>
         </div>
         <h3>{{ dataArticle.title }}</h3>
         <p class="card-text">{{ dataArticle.content }}</p>
       </div>
     </div>
      <!-- / dataArticles -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      dataArticle: {}
    }
  },
  methods: {
    getById () {
      console.log('ini id nya', this.id)
      axios.get(`http://localhost:3000/article/${this.id}`)
      .then(({ data }) => {
        this.dataArticle = data
      })
      .catch((err) => {
        console.error(err)
      })
    }
  },
  created () {
    this.getById()
  },
  watch: {
    dataArticle: function (b) {
      this.getById()
    }
  }
}
</script>

<style lang="css">
</style>
