<template>
  <a-layout id="components-layout-demo-fixed">
    <Header />
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <!-- <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <router-view></router-view>
      </div> -->
      <router-view></router-view>
    </a-layout-content>
    <!-- <a-layout-footer :style="{ textAlign: 'center' }">
      同济大学学习交流平台
    </a-layout-footer> -->
  </a-layout>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "home-view",
  data() {
    return {};
  },
  components: {
    Header,
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
