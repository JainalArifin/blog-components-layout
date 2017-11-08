import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
import router from '../router/index'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  articles: []
}

const mutations = {
  mutationsArticle (state, payload) {
    state.articles = payload
  },
  saveArticle (state, payload) {
    state.articles.push(payload)
  }
}

const actions = {
  getArticle ({ commit }) {
    http.get('/article')
    .then(({ data }) => {
      // console.log('ini data yang di dapat', data)
      commit('mutationsArticle', data)
    })
    .catch((err) => console.error(err))
  },
  addSubmitArticle ({ commit }, dataArticle) {
    http.post('/article', dataArticle, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(({ data }) => {
      console.log('data yang di tambah', data)
      if (data === 'anda harus login terlebih dahulu') {
        swal('Anda belum login', 'trimakasi', 'error')
        router.push('/login')
      } else {
        commit('saveArticle', data)
      }
    })
    .catch((err) => {
      console.error(err)
    })
  },
  deleteArticle ({ commit }, dataId) {
    http.delete(`/article/${dataId}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(({ data }) => {
      if (data === 'anda harus login terlebih dahulu') {
        swal('Anda belum login', 'trimakasi', 'error')
        router.push('/login')
      } else {
        swal('berhasil di hapus', 'trimakasi', 'success')
      }
    })
    .catch((err) => console.error(err))
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
