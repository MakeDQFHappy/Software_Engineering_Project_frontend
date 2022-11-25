<template>
    <div>
        <div class="SignFlowHomepage">
            <div class="SignFlowHomepage-content">
                <div class="SignFlowHomepage-logo">
                    <div style="color:white;font-size:50px;font-family:cursive;text-align: center;">
                        享學
                    </div>
                    <div style="color:white;font-size:20px;font-family:华文行楷">
                        随时记录，随手分享
                    </div>
                </div>
                <div class="signQr-container">
                    <div class="signQr-leftContainer">
                        <div class="css-title">
                            <div>
                                Welcome!
                            </div>
                            <div>
                                Let's start to share and enjoy learning!
                            </div>
                        </div>
                    </div>
                    <div class="signQr-rightContainer">
                        <div class="css-16h0l39">
                            <a-menu v-model="current" mode="horizontal" style="margin-top:20px">
                                <a-menu-item key="academic" class="css-12345"> 学号登录 </a-menu-item>
                                <a-menu-item key="phone" class="css-12345"> 手机号登录 </a-menu-item>
                            </a-menu>
                            <a-form
                                id="components-form-demo-normal-login"
                                :form="form"
                                class="login-form"
                                @submit="handleSubmit"
                                style="margin:24px 15px 24px 15px"
                            >
                                <a-form-item>
                                <a-input
                                    v-if="current=='academic'"
                                    v-decorator="[
                                    'academic',
                                    { rules: [{ required: true, message: '请输入学号!' }] },
                                    ]"
                                    placeholder="academic number"
                                >
                                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                                </a-input>
                                <a-input
                                    v-if="current=='phone'"
                                    v-decorator="[
                                    'phone',
                                    { rules: [{ required: true, message: '请输入手机号!' }] },
                                    ]"
                                    placeholder="phone number"
                                >
                                    <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
                                </a-input>

                                </a-form-item>
                                <a-form-item>
                                <a-input
                                    v-decorator="[
                                    'password',
                                    validatorRules.password ]"
                                    type="password"
                                    placeholder="Password"
                                >
                                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                                </a-input>
                                </a-form-item>
                                <a-form-item>
                                <a-checkbox
                                    v-decorator="[
                                    'remember',
                                    {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    },
                                    ]"
                                >
                                    Remember me
                                </a-checkbox>
                                <a class="login-form-forgot" href="">
                                    Forgot password
                                </a>
                                <a-button type="primary" html-type="submit" class="login-form-button">
                                    Log in
                                </a-button>
                                Or
                                <a href="#">
                                    register now!
                                </a>
                                </a-form-item>
                            </a-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      current:'academic',
      form: this.$form.createForm(this),
      validatorRules: {
          password : {//name与v-decorator中属性对应
            initialValue: "",//初始值
            rules: [
              { required: true, message: '请输入密码!'},//此处开启校验必填
              { min: 5, message: '长度不少于 5 个字符'}, // 长度校验
            ],
            trigger: 'blur' // 触发方式
          },
      },
    }
  },
  methods:{
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  }
};
</script>

<style scoped>
.css-title{
    font-weight: 600;
    font-size: 20px;
    height: 49px;
    margin-top:150px;
    width:100%;
    text-align: center;
    color:#fff
}
.css-12345{
    font-synthesis: style;
    font-weight: 600;
    color: #121212;
    cursor: pointer;
    font-size: 16px;
    height: 49px;
    line-height: 46px;
    margin-right: 24px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.css-16h0l39 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    padding: 0;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    border-radius: 20px;
    background-color: #FFFFFF;
    width: 400px;
    overflow: hidden;
    box-shadow: none;
}
.signQr-rightContainer {
    border-left: 1px solid #ebebeb;
    min-height:400px
    
}
.signQr-leftContainer {
    width: 332px;
    background-image: url(https://tj-software-engineer.oss-cn-shanghai.aliyuncs.com/pexels-eberhard-grossgasteiger-2098427.jpg);
    background-size: cover;
}

.signFlowModal-container, .signQr-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.signQr-container {
    background-color: #fff;
    border-radius:20px
}
.SignFlowHomepage-logo {
    height: 81px;
    margin-bottom: 24px;
}
.SignFlowHomepage-content {
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    align-items: center;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1 1;
    flex: 1 1;
    -ms-flex-direction: column;
    flex-direction: column;
    height: calc(100% - 42px);
    justify-content: center;
    min-height: 688px;
}
.SignFlowHomepage {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    background-color: #b8e5f8;
    background-image: url(https://tj-software-engineer.oss-cn-shanghai.aliyuncs.com/pexels-daniel-absi-952670.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    width: 100%;
}
</style>