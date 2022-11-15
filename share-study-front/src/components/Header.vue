<template>
    <div>
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <div class="logo" >
                <img :src="logoImg" style="width:100%;height:80%;">
            </div>
            <a-menu
                theme="dark"
                mode="horizontal"
                :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="1">
                    <a-icon type="bulb" />
                问答互助
                </a-menu-item>
                <a-menu-item key="2" @click="openStudyNotes">
                    <a-icon type="read" />
                学习交流
                </a-menu-item>
                <a-menu-item key="3" @click="openMessage">
                    <a-icon type="message" />
                好友私信
                </a-menu-item>
                <a-avatar shape="square" :size="64" icon="user" style="float:right" />
            </a-menu>
        </a-layout-header>
    </div>
</template>

<script>
export default {
  name:'header',
  data(){
    return {
      logoImg:require('../assets/logo.png')
    }
  },
  methods: {
    openMessage(){
        this.$router.replace('/message')
    },
    openStudyNotes(){
        this.$router.replace('/studyNotes')
    },
  },
}
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 100%;
  float: left;
}
</style>