<template lang="html">
  <form @submit.prevent="addSubmitArticle(formAdmin)">
    <h1>Menu Admin</h1>
    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge"> Title</label>
      <input class="form-control form-control-lg" type="text" id="inputLarge" placeholder="title..." v-model="formAdmin.title">
    </div>
    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge"> Image</label>
      <input class="form-control form-control-lg" type="text" id="inputLarge" placeholder="imgUrl..." v-model="formAdmin.imgUrl">
    </div>
    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge"> Content</label>
      <textarea class="form-control" rows="3" placeholder="content..." v-model="formAdmin.content"></textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-info glyphicon glyphicon-pencil"> Add</button>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import swal from 'sweetalert'
import axios from 'axios'
export default {
  data () {
    return {
      formAdmin: {
        title: '',
        content: '',
        imgUrl: ''
      }
    }
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    // ...mapActions([
    //   'addSubmitArticle'
    // ])
    addSubmitArticle (dataArticle) {
      axios.post('http://localhost:3000/article', dataArticle, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        console.log('data yang di tambah', data)
        if (data === 'anda harus login terlebih dahulu') {
          swal('Anda belum login', 'trimakasi', 'error')
          this.$router.push('/login')
        } else {
          // commit('saveArticle', data)
          this.articles.push(data)
          this.formAdmin = {}
        }
      })
      .catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
