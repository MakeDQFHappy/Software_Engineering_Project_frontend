<template>
  <div>
    <a-layout-header :style="{ position: 'fixed', zIndex: 100, width: '100%' }">
      <div class="logo">
        <img :src="logoImg" style="width: 100%; height: 80%" />
      </div>
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1" @click="openQA">
          <a-icon type="bulb" />
          问答互助
        </a-menu-item>
        <a-menu-item key="2" @click="openStudyNotesOverview">
          <a-icon type="read" />
          学习交流
        </a-menu-item>
        <a-menu-item key="3" @click="openMessage">
          <a-icon type="message" />
          好友私信
        </a-menu-item>
        <a-menu-item key="4" @click="openFriendManage">
          <a-icon type="team" />
          好友管理
        </a-menu-item>
        <a-menu-item
          v-if="!isLogin"
          key="5"
          style="float: right"
          @click="showModal"
        >
          登录
        </a-menu-item>
        <a-button type="link" v-if="isLogin" style="float: right" @click="logout">
          <a-avatar
            shape="square"
            :size="63"
            icon="user"
            style="float: right"
          />
        </a-button>
      </a-menu>
    </a-layout-header>

    <!-- 暂时的快捷登录入口 -->
    <a-modal
      v-model="visible"
      title="Modal"
      ok-text="登录"
      cancel-text="取消"
      @ok="submitLogin"
    >
      <a-input placeholder="输入用户id就可以登录" v-model="loginText" />
    </a-modal>
  </div>
</template>

<script>
import { userLogin,userLogout } from "@/api/login";
import { mapMutations } from "vuex";
export default {
  name: "header",
  data() {
    return {
      logoImg: require("../assets/logo.png"),
      isLogin: false,
      visible: false,
      loginText: "",
    };
  },
  mounted() {
    if (
      localStorage.getItem("userToken") != "" &&
      localStorage.getItem("userToken") != null
    ) {
      this.isLogin = true;
    }
  },
  methods: {
    openMessage() {
      this.$router.push("/message");
    },
    openFriendManage() {
      this.$router.push("/FriendManage");
    },
    openQA() {
      this.$router.push("/QA_myQuestion");
    },
    openStudyNotesOverview() {
      this.$router.push("/studyNotesOverview");

    },
    showModal() {
      this.visible = true;
    },
    ...mapMutations(["changeLogin"]),
    ...mapMutations(["setId"]),
    submitLogin() {
      this.setId({id:this.loginText})
      userLogin(this.loginText)
        .then(response => {
          console.log(response)
          if (response.status == 200) {
            this.isLogin = true;
            this.$message.success("登录成功");
            this.visible = false;
            console.log(response.data);
            this.changeLogin({
              userToken: response.data,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message.error("登录失败");
        });
    },
    ...mapMutations(["delLogin"]),
    logout(){
      userLogout();
      this.delLogin();
      this.$message.success("退出成功");
      this.isLogin=false;
    }
  },
};
</script>

<style>
.login-css {
  vertical-align: middle;
  font-size: 50px;
  font-weight: bold;
}

#components-layout-demo-fixed .logo {
  width: 120px;
  height: 100%;
  float: left;
}
</style>
