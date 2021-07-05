<template>
  <div>
    <TopNav></TopNav>
    <div>引入导航条</div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
export default {
  name: 'home',
  components: {
    TopNav
  }
}
</script>
