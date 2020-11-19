<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="loadBanner">调用接口</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getBanner} from '@/api/home.js'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    loadBanner(){
      getBanner(2) 
    }
  }
}
</script>
