<template>
  <div id="app">
    <Header/>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  name: 'App',
  components: {
    Header,
    SidebarMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
