<template>
  <a-layout id="components-layout-demo-fixed" style="min-height:100%">
    <Header />
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div>
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "home-view",
  data() {
    return {
      logoImg: require("../assets/logo.png"),
    };
  },
  components: {
    Header,
  },
};
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 100%;
  float: left;
}

/* #components-layout-demo-fixed .avatar {
  width: 64px;
  height: 100%;
  float: right;
} */
</style>
