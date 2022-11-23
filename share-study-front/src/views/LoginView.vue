

<template>
  <div class="wrapper">
    <div style="margin: 200px auto; background-color: #fff; width: 350px; height: 350px; padding: 20px; border-radius: 10px">
      <div style="margin: 20px 0; text-align: center; font-size: 24px"><b>登 录</b></div>  

        <a-form :form="form" class="login-form" @submit="handleSubmit">
          <a-form-item>
            <a-input ref="passwordInput" v-model="username" placeholder="请输入用户名">
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
              <a-input ref="passwordInput" v-model="password" placeholder="请输入密码">
                <a-icon slot="prefix" type="lock" show-password style="color: rgba(0,0,0,.25)" />
              </a-input>
              <a class="login-form-forgot" href="">
                忘记密码
              </a>
          </a-form-item>
          <a-form-item style="margin: 10px 0; text-align: right">
            <a-space>
            <a-button type="primary" icon="login" @click="login" style="color:chartreuse" href="#/home">
              登录
            </a-button>
            <a-button type="primary" icon="login" style="color:chartreuse" href="#/register">注册</a-button>
            </a-space>
          </a-form-item>
        </a-form>
      </div>
    </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      user: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    login() {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {  // 表单校验合法
          this.request.post("/user/login", this.user).then(res => {
            if(!res) {
              this.$message.error("用户名或密码错误")
            } else {
              this.$router.push("/")
            }
          })
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style>
  .wrapper {
    height: 100vh;
    background-image: linear-gradient(to bottom right, #FC466B , #3F5EFB);
    overflow: hidden;
  }
  .login-form-forgot {
  float: right;
  color:crimson
}
</style>