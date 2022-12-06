<template>
    <div>
        <vue-particles
      color="#fff"
      :particleOpacity="0.9"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="3"
      linesColor="#8EB5C9"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
      class="partical"
    >
    </vue-particles>

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
                        <div class="css-16h0l39" v-if="!isRegister">
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
                                    placeholder="Academic Number"
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
                                <a href="#" @click="isRegister=!isRegister">
                                    register now!
                                </a>
                                </a-form-item>
                            </a-form>
                        </div>
                        <div v-if="isRegister">
                            <div class="css-regtitle">
                                欢迎注册
                            </div>
                            <a-steps :current="registerCurrent" size="small" progress-dot>
                                <a-step title="学生认证" description="验证学号" ></a-step>
                                <a-step title="邮箱" description="绑定邮箱" ></a-step>
                                <a-step title="基本信息" description="填写基本信息"></a-step>
                            </a-steps>
                            <a-form
                                id="components-form-demo-normal-register"
                                :form="form"
                                class="login-form"
                                style="margin:24px 15px 24px 15px"
                            >
                                <a-form-item>
                                    <a-input
                                        v-if="registerCurrent==0"
                                        v-decorator="[
                                        'academic',
                                        { rules: [{ required: true, message: '请输入学号!' }] },
                                        ]"
                                        placeholder="Academic Number"
                                    >
                                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                                    </a-input>
                                    <a-input
                                        v-if="registerCurrent==1"
                                        v-decorator="[
                                        'email',
                                        { rules: [{  required: true, message: '请输入邮箱!' },{type:'email',message:'请输入正确的邮箱格式！'}] },
                                        ]"
                                        placeholder="email"
                                    >
                                        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
                                    </a-input>
                                    <a-row :gutter="8" v-if="registerCurrent==2">
                                        <a-col :span="12">
                                            <a-select v-decorator="['sex']" default-value="男" @change="handleChange">
                                                <a-select-option value="男">
                                                    男
                                                </a-select-option>
                                                <a-select-option value="女">
                                                    女
                                                </a-select-option>
                                            </a-select>
                                        </a-col>
                                        <a-col :span="12">
                                            <a-input-number v-decorator="[
                                                'birthYear',
                                                { rules: [{ required: true, message: '请输入出生年份!' }] },
                                                ]" placeholder="birth year" :min="1900" :max="2022" style="width:100%" />
                                        </a-col>
                                    </a-row>
                                </a-form-item>
                                <a-form-item v-if="registerCurrent==2">
                                    <a-input
                                        v-decorator="[
                                        'nickName',
                                        validatorRules.nickName ]"
                                        placeholder="nick name"
                                        type="nickName"
                                    >
                                        <a-icon slot="prefix" type="idcard" style="color: rgba(0,0,0,.25)" />
                                    </a-input>
                                </a-form-item>
                                <a-form-item>
                                    <a-input
                                        v-if="registerCurrent==0"
                                        v-decorator="[
                                        'RealName',
                                        validatorRules.userName ]"
                                        placeholder="RealName"
                                    >
                                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                                    </a-input>
                                    <a-row :gutter="8" v-if="registerCurrent==1">
                                        <a-col :span="12">
                                            <a-input
                                                v-decorator="[
                                                'captcha',
                                                { rules: [{ required: true, message: '请输入验证码!' }] },
                                                ]"
                                                placeholder="captcha"
                                            />
                                            </a-col>
                                        <a-col :span="12">
                                            <a-button style="width:100px" @click="getCaptcha" :disabled="(cooling>0)" >{{captchaMsg}}</a-button>
                                        </a-col>
                                    </a-row>
                                    <a-input
                                        v-if="registerCurrent==2"
                                        v-decorator="[
                                        'password',
                                        validatorRules.password ]"
                                        placeholder="password"
                                        type="password"
                                    >
                                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                                    </a-input>
                                    <div v-show="registerCurrent==3"  >
                                        <div style="width:100%;margin:auto;display: flex;align-items: center; justify-content: center;">
                                            <img :src="loginUrl" alt="" >
                                        </div>
                                        <div style="text-align:center;font-size:13px;font-weight:bold">
                                            注册成功，即将跳转登录界面
                                        </div>
                                    </div>
                                    
                                    </a-form-item>
                                    <a-form-item>
                                    <a-button type="primary" html-type="submit" style="width:100%" @click="clickNext" v-if="registerCurrent<3">
                                        <div v-show="registerCurrent<2" >
                                            Next Step
                                        </div >
                                        <div v-show="registerCurrent==2">
                                            Finish
                                        </div>
                                    </a-button>
                                    <div style="font-size:8px;font-family:'仿宋'">已有账号？<a href="#" style="font-size:12px;color:blue" @click="(isRegister=!isRegister)" >马上登录</a></div>
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
import { academicLogin } from "@/api/login";
import { getCode,register,varifyAcademic } from "@/api/register"
import { mapMutations } from "vuex";
import { updateBonusPoints } from "@/api/personalInfo"
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
          },
          userName : {
            initialValue: "",//初始值
            rules: [
              { required: true, message: '请输入姓名!'},//此处开启校验必填
            ],
          },
          nickName:{
            rules:[
                {required:true,message:"请输入用户名"},
                {max:20,message:'长度不超过20个字符'}
            ]
          },
          birthYear:{
            rules:[
                {require:true,message:"请输入出生年份"},
                {  }
            ]
          }
      },
      isRegister:false,
      registerCurrent:0,
      loginUrl:require("../assets/success.png"),
      addNum:10,
      code:null,
      cooling:0,
      captchaMsg:"获取验证码",
      registerData:{
        academicNumber:null,
        userName:null,
        realName:null,
        password:null,
        birthYear:null,
        email:null,
        sex:null
      }
    }
  },
  methods:{
    clickNext(){
        if(this.registerCurrent==0){
            this.academicVerify()
        }   
        if(this.registerCurrent==1){
            this.checkcode()
        }
        if(this.registerCurrent==2){
            this.finalRegister()
        }
    },
    finalRegister(){
        this.form.validateFields((err, values) => {
            if(!err){
                console.log(values)
                this.registerData.sex=values.sex
                this.registerData.birthYear=values.birthYear
                this.registerData.password=values.password
                this.registerData.userName=values.nickName
                register(this.registerData).then(response=>{
                    if(response.status==200){
                        this.$message.success("注册成功")
                        this.registerCurrent++;
                        setTimeout(()=>{
                            this.isRegister=false
                        },3000)
                    }
                    else{
                        this.$message.error("注册失败")
                    }
                }).catch(e=>{
                    console.log(e)
                    this.$message.error("注册失败")
                })
            }
        })
    },
    academicVerify(){
        this.form.validateFields((err, values) => {
            if(!err){
                console.log(values)
                varifyAcademic(values.academic,values.RealName).then(response=>{
                    if(response.status==200){
                        this.$message.success("验证学号成功");
                        this.registerData.academicNumber=values.academic
                        this.registerData.realName=values.RealName
                        this.registerCurrent++;
                    }
                    else{
                        this.$message.success("验证学号未通过");
                    }
                }).catch(e=>{
                    console.log(e)
                    this.$message.error("验证学号未通过")
                })
            }
        });
        
    },
    checkcode(){
        this.form.validateFields((err, values) => {
            if(!err){
                console.log(this.code)
                console.log(values.captcha)
                if(values.captcha==this.code){
                    this.registerData.email=values.email
                    this.registerCurrent++;
                    return true;
                }
                else{
                    this.$message.error("输入验证码有误")
                }
            }
            return false;
        });
    },
    addBonus(){
        updateBonusPoints(this.addNum).then(response=>{
            if(response.status==200){
                this.$message.success("每日登陆成功，获得10积分奖励")
            }
            else{
                this.$message.error("获得积分失败")
            }
        }).catch(e=>{
            console.log(e)
            this.$message.error("获得积分失败")
        })
    },
    startcount(){
      if(this.cooling==0){
        this.captchaMsg="获取验证码"
        return;
      }
      setTimeout(()=>{
        this.cooling-=1;
        this.captchaMsg=this.cooling+"秒后重试"
        this.startcount();
      },1000)
    },
    getCaptcha(){
        this.form.validateFields((err, values) => {
            if (!err.email) {
                this.cooling=60;
                this.startcount();
                getCode(values.email).then(response=>{
                    if(response.status==200){
                        this.$message.success("发送验证码成功")
                        this.code=response.data
                    }
                    else{
                        this.$message.error("发送验证码失败")
                    }
                }).catch(e=>{
                    console.log(e)
                    this.$message.error("发送验证码失败")
                })
            }
        });
        // getCode().then()
    },
    ...mapMutations(["changeLogin"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          if(this.current=="academic"){
            academicLogin(values.academic,values.password).then(response=>{
                if(response.status==200){
                    this.$message.success("登录成功");
                    this.changeLogin(response.data);
                    if(response.data.isFirst){
                        this.addBonus()
                    }
                    this.$router.push("/");
                }
                else if(response.status==403){
                    this.$message.error("登录失败，账号不存在或密码错误");
                }
            }).catch(e=>{
                console.log(e);
                this.$message.error("登录失败，请稍后再试")
            })
          }
        }
      });
    },
  }
};
</script>

<style scoped>
.partical {
  background-size: cover;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.css-regtitle{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width:100%;
    margin-top:20px;
    margin-bottom: 20px;
}
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
#components-form-demo-normal-register{
    padding:5px 20px 5px 20px
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
    border-radius:20px;
    z-index: 10;
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