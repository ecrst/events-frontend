<template>
  <div class="home">
    <Header />
    <div class="home-main">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.home-main {
  background-color: #eee;
  height: calc(100vh - 150px);
}
</style>
