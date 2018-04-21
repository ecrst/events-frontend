<template>
  <div class="header">
    <div class="header-main">
      <div class="logo">
        <router-link to="/">
          Events
        </router-link>
        </div>
      <div class="right-side-buttons">
        <router-link to="login" class="link">
          <button class="header-button">
            Login
          </button>
        </router-link>
        <router-link to="signup" class="link">
          <button class="header-button">
            Sign Up
          </button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  background-color: #333;
  width: 100%;
  height: 100px;
}
.header-main {
  width: 70%;
  height: 100%;
  margin: 0 auto;
}
.header-main div {
  height: 100%;
  display: inline-block;
}
.logo {
  font-weight: bold;
  font-size: 1.6em;
  color: white;
  line-height: 3.5em;
} 
a{
  text-decoration: none;
  color: white;
}
.header-button {
  height: 100%;
  width: 100px;
  background-color: inherit;
  border: none;
  color: white;
  font-size: 1.3em;
}
.right-side-buttons {
  float: right;
}
</style>


