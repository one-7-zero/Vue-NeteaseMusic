<template>
  <div class="found">
    <button @click="loadBanner">调用接口</button>
  </div>
</template>

<script>
//No.1 导入组件
import { getBanner } from "@/api/found.js";

export default {
  name: "Found",
  //No.2 注册组件
  components: {
  },
  methods: {
    loadBanner() {
      getBanner(2);
    },
  },
};
</script>
