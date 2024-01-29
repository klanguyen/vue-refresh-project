<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
</style>
