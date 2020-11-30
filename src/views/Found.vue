<template>
  <div class="found">
    <drawer></drawer>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <h1>This is an found page</h1>
    <button @click="loadBanner">调用接口</button>
  </div>
</template>

<script>
//No.1 导入组件
import Drawer from "@/components/Drawer.vue";
import { getBanner } from "@/api/found.js";

export default {
  name: "Found",
  //No.2 注册组件
  components: {
    Drawer
  },
  methods: {
    loadBanner() {
      getBanner(2);
    },
  },
};
</script>
