<template>
  <div id="app">
    <v-app>
      <router-view />
      <bottom-nav></bottom-nav>
    </v-app>
  </div>
</template>
<script>
//导入底部导航栏组件全局使用，子页面v-show显示或隐藏
import BottomNav from "@/components/BottomNav.vue";
export default {
  components: {
    BottomNav,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 阿里巴巴图标symbol全局样式 */
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
