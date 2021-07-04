<template>
  <div id="app">
    <img alt="Jedi Logo" src="./assets/logo.jpg">
    <jedi msg="Jedi Temple"/>
  </div>
</template>

<script>
import Jedi from './components/Jedi.vue'

export default {
  name: 'App',
  components: {
    Jedi
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black;
}
</style>
