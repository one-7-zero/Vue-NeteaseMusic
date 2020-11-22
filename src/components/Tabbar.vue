<template>
  <van-tabbar fixed route>
    <van-tabbar-item
      :to="item.path"
      replace
      :icon="item.icon"
      v-for="(item, index) in tabbars"
      :key="index"
      >{{ item.name }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      tabbars: [
        { icon: "home-o", name: "发现", path: "/" },
        { icon: "video-o", name: "视频", path: "/video" },
        { icon: "music-o", name: "我的", path: "/person" },
        { icon: "friends-o", name: "云村", path: "/tribe" },
        { icon: "manager-o", name: "账号", path: "/account" },
      ],
    };
  },
};
</script>

<style>
</style>