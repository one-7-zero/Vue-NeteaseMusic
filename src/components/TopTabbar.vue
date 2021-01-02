<template>
  <div>
    <v-app-bar dense dark>
      <v-app-bar-nav-icon @click="ShowMenu"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="showMenu"> </v-navigation-drawer>
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