<template lang="html">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Blog Anime</a>
      </div>
      <ul class="nav navbar-nav">
        <li @click="home">
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#" @click="blog">Blog</a>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#" @click="register">
            <span class="glyphicon glyphicon-user"></span> Register
          </a>
        </li>
        <li>
          <a href="#" @click="login">
            <span class="glyphicon glyphicon-log-in"></span> Login
          </a>
        </li>
        <li>
          <a href="#" @click="logOut">
            <span class="glyphicon glyphicon-log-out"></span> Log Out
          </a>
        </li>
        <li>
          <a href="#" @click="admin">
            <span class="glyphicon glyphicon-th-list"></span> Admin
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    home () {
      this.$router.push('/')
    },
    blog () {
      this.$router.push('/blog')
    },
    register () {
      this.$router.push('/register')
    },
    admin () {
      this.$router.push('/admin')
    },
    login () {
      this.$router.push('/login')
    },
    logOut () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
