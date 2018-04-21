<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
}
#app, body {
  width: 100vw;
  height: 100vh;
}
.auth-view {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
</style>

