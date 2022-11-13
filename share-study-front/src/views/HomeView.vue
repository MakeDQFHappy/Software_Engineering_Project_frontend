<template>
  <a-layout id="components-layout-demo-fixed">
    <!-- <Header />
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        Content
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      同济大学学习交流平台
    </a-layout-footer> -->
  </a-layout>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  name: 'home-view',
  data(){
    return {
      logoImg:require('../assets/logo.png')
    }
  },
  components: {
    Header
  }
}
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
