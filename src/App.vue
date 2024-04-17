<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Home></Home> -->
  <div>
    <Navbar></Navbar>
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue'
import Navbar from './components/Navbar.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */


  /* .content { */
  background-image: url(./assets/background.webp);
  height: 1000px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 40px 50px;
}
</style>
