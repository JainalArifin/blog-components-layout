<template lang="html">
  <div>
    <form class="form-style" @submit.prevent="registerAdmin(formAdmin)">
      <h1>Regiter</h1>
      <div class="form-group">
        <label class="col-form-label col-form-label-lg" for="inputLarge"> username</label>
        <input class="form-control form-control-lg" type="text" id="inputLarge" placeholder="username..." required="" v-model="formAdmin.username">
      </div>
      <div class="form-group">
        <label class="col-form-label col-form-label-lg" for="inputLarge"> password</label>
        <input class="form-control form-control-lg" type="password" id="inputLarge" placeholder="password..." required="" v-model="formAdmin.password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-info glyphicon glyphicon-user"> Daftar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formAdmin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    registerAdmin (data) {
      console.log('cek data register', data)
      axios.post(`http://localhost:3000/user/register`, data)
      .then(({ data }) => {
        console.log(data)
        this.formAdmin = {}
        this.$router.push('/login')
      })
      .catch((err) => console.error(err))
    }
  }
}
</script>

<style lang="css">
form.form-style {
  width: 468px;
  background-color: #eee;
  padding: 37px;
  margin: auto;
}
</style>
