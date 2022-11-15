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
                <a-menu-item key="2">
                    <a-icon type="read" />
                学习交流
                </a-menu-item>
                <a-menu-item key="3" @click="openMessage">
                    <a-icon type="message" />
                好友私信
                </a-menu-item>
                <a-menu-item v-if="!isLogin" key="4" style="float:right;" @click="showModal">
                  登录                 
                </a-menu-item>
                <a-button type="link" v-if="isLogin" style="float:right;">
                  <a-avatar shape="square" :size="63" icon="user" style="float:right" />
                </a-button>
            </a-menu>
        </a-layout-header>

        <!-- 暂时的快捷登录入口 -->
        <a-modal v-model="visible" title="Modal" ok-text="登录" cancel-text="取消" @ok="submitLogin">
          <a-input placeholder="输入用户id就可以登录" v-model="loginText" />
        </a-modal>
    </div>
</template>

<script>
import { userLogin } from '@/api/login'
import { mapMutations } from 'vuex'
export default {
  name:'header',
  data(){
    return {
      logoImg:require('../assets/logo.png'),
      isLogin:false,
      visible:false,
      loginText:""
    }
  },
  mounted(){
    if(localStorage.getItem('userToken')!=""&&localStorage.getItem('userToken')!=null){
      this.isLogin=true;
    }
  },
  methods: {
    openMessage(){
        this.$router.push('/message')
    },
    showModal(){
      this.visible=true
    },
    ...mapMutations(["changeLogin"]),
    submitLogin(){
      userLogin(this.loginText).then(response=>{
        if(response.status==200){
          this.isLogin=true
          this.$message.success('登录成功')
          this.visible=false
          console.log(response.data)
          this.changeLogin({
            userToken:response.data
          })
        }
      }).catch(error=>{
        console.log(error)
        this.$message.error('登录失败')
      })
    }
  }
}
</script>

<style>
.login-css{
  vertical-align:middle;
  font-size: 50px;
  font-weight: bold;

}

#components-layout-demo-fixed .logo {
  width: 120px;
  height: 100%;
  float: left;
}
</style>