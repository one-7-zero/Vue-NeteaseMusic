<template>
  <v-bottom-navigation v-model="value" fixed>
    <v-btn
      v-for="(item, index) in btnlist"
      :key="index"
      :value="index"
      :to="{ path: item.path }"
      :click="changeIcon"
    >
      <span>{{ item.name }}</span>
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
// 声明常量
const iconList = [
  ["#icon-dianyingzhiye-shouye", "#icon-dianyingzhiye-shouyedianjitai"],
  ["#icon-gupiao-zuhe", "#icon-gupiao-zuhedianjitai"],
  ["#icon-dianyingzhiye-gequbang", "#icon-dianyingzhiye-gequbangdianjitai"],
  ["#icon-weibozhiye-liuhangbang", "#icon-weibozhiye-liuhangbangdianjitai"],
  ["#icon-weibozhiye-renwubang", "#icon-weibozhiye-renwubangdianjitai"],
];

export default {
  data: () => ({
    value: 0,
    btnlist: [
      {
        icon: iconList[0][0],
        name: "发现",
        path: "/",
      },
      {
        icon: iconList[1][0],
        name: "博客",
        path: "/video",
      },
      {
        icon: iconList[2][0],
        name: "我的",
        path: "/person",
      },
      {
        icon: iconList[3][0],
        name: "云村",
        path: "/tribe",
      },
      {
        icon: iconList[4][0],
        name: "账号",
        path: "/account",
      },
    ],
  }),
  // methods: {
  //   changeIcon() {
  //     console.log(this.value);
  //     for (var index = 0; index < this.btnlist.length; index++) {
  //       this.btnlist[index].icon = iconList[index][0];
  //     }
  //     this.btnlist[this.value].icon = iconList[this.value][1];
  //   },
  // },

  computed: {
    changeIcon() {
      console.log(this.value);
      // 底部导航样式初始化
      for (var index = 0; index < this.btnlist.length; index++) {
        this.btnlist[index].icon = iconList[index][0];
      }
      // 点击当前导航图标改变
      this.btnlist[this.value].icon = iconList[this.value][1];
    },
  },
};
</script>

<style>
</style>