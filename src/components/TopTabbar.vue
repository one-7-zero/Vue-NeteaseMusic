<template>
  <div>
    <v-navigation-drawer app fixed v-model="showMenu"> </v-navigation-drawer>
    <v-app-bar fixed dense dark>
      <v-app-bar-nav-icon @click="ShowMenu"></v-app-bar-nav-icon>
     
    </v-app-bar>
  </div>
</template>

<script>
// 引入子组件
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    ShowMenu() {
      this.showMenu === false
        ? (this.showMenu = true)
        : (this.showMenu = false);
    },
  },
};
</script>

<style>
</style>