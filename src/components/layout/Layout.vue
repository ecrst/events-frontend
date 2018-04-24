<template>
  <div class="layout">
    <Header />
    <div class="layout-main">
      <div class="row">
        <div class="col s8 offset-s2 main-content">
          <slot></slot>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
}
</script>

<style>
.layout-main {
  height: calc(100vh - 128px);
}
.main-content, .row {
  height: 100%;
}
</style>
