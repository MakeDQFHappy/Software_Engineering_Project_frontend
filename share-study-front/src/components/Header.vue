<template>
  <div>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo">
        <img :src="logoImg" style="width: 100%; height: 80%" />
      </div>
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1" @click="openQA">
          <a-icon type="bulb" />
          问答互助
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="read" />
          学习交流
        </a-menu-item>
        <a-menu-item key="3" @click="openMessage">
          <a-icon type="message" />
          好友私信
        </a-menu-item>
        <a-avatar shape="square" :size="64" icon="user" style="float: right" />
      </a-menu>
    </a-layout-header>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "header",
  data() {
    return {
      logoImg: require("../assets/logo.png"),
    };
  },
  methods: {
    openMessage() {
      this.$router.push("/message");
    },
    openQA() {
      this.$router.push("/QA");
    },
  },
};
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 100%;
  float: left;
}
</style>
