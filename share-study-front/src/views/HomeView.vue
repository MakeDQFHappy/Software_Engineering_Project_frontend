<template>
  <a-layout id="components-layout-demo-fixed"> </a-layout>
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
