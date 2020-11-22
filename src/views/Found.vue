<template>
  <div class="found">
     <h1>This is an found page</h1>
    <button @click="loadBanner">调用接口</button>
    <!-- No.3 引入组件 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
//No.1 导入组件
import Tabbar from "@/components/Tabbar.vue";
import { getBanner } from "@/api/found.js";

export default {
  name: "Found",
  //No.2 注册组件
  components: {
    Tabbar
  },
  methods: {
    loadBanner() {
      getBanner(2);
    },
  },
};
</script>
