<template lang="html">
  <p href="#" class="list-group-item list-group-item-action">
    <router-link :to="{ name: 'articleSumery', params: {id: sidebarArticle._id} }">
      {{ sidebarArticle.title }}
    </router-link>
  </p>
</template>

<script>
export default {
  props: ['sidebarArticle']
}
</script>

<style lang="css">
</style>
