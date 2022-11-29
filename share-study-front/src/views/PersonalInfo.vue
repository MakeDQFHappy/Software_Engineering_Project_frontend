<template>
    <div>
        
        <div class="info-card">
            <a-card class="box-card" >
                <a-carousel  slot="cover" autoplay>
                    <div><img style="height:250px;width:100%" src="https://wc-project.oss-cn-shanghai.aliyuncs.com/bg.jpg" alt="" ></div>
                    <div><img style="height:250px;width:100%" src="https://wc-project.oss-cn-shanghai.aliyuncs.com/hd-wallpaper-g2d3f42e81_1920.jpg" alt="" ></div>
                    <div><img style="height:250px;width:100%" src="https://wc-project.oss-cn-shanghai.aliyuncs.com/tree-736885.jpg" alt="" ></div>
                    <div><img style="height:250px;width:100%" src="https://wc-project.oss-cn-shanghai.aliyuncs.com/orion-nebula-11107.jpg" alt="" ></div>
                </a-carousel>
            
                <div class="ProfileHeader-wrapper">
                    <div class="ProfileHeader-main">
                        <div class="ProfileHeader-avatar UserAvatarEditor" style="top:-90px">
                            <div class="UserAvatar">
                                <a-avatar shape="square" :size="150" :src="userAvatar" />
                            </div>
                        </div>
                        <div class="ProfileHeader-content">
                                <div class="ProfileHeader-contentHead">
                                    <h1 class="ProfileHeader-title">
                                        <span class="ProfileHeader-name">
                                            {{userName}}
                                        </span>
                                        <span style="font-size:15px;color:gold;margin-left:20px;line-height: 30px;">
                                            剩余积分：{{bonusPoints}}
                                            <img :src="pointUrl" alt="" style="width:20px">
                                        </span>
                                    </h1>
                                </div>
                                <div class="ProfileHeader-contentBody">
                                    
                                </div>
                                <div class="ProfileHeader-contentFooter signature-font">
                                    <span>
                                        {{sex}}
                                    </span>
                                    <span style="margin-left:10px">
                                        {{age}}
                                    </span>
                                    <div class="ProfileHeader-buttons">
                                        <a-button type="primary" plain @click="dialogFormVisible=true">编辑个人资料</a-button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="upload-avatar">
                        <a-upload class="upload-demo" :file-list="fileList" :before-upload="beforeUpload">
                            <a-button> <a-icon type="upload" /> 上传更改头像 </a-button>
                        </a-upload>
                    </div>
                </div>
            </a-card>
            </div>
            <div class="Profile-main">
                <div class="Card">
                    <div class="info-tabs">
                        <InfoTabs style="width:100%"/>
                    </div>
                </div>
                
                <div class="css-1qyytj7 Profile-sideColumn">
                    <div class="css-19idom">
                        <div class="Card">
                            <div class="ProfileSideCreator-creatorEntranceHint CreatorEntrance-hint">
                                <a-icon type="edit" style="fontSize: 40px;color:cornflowerblue" />
                                <div class="CreatorEntrance-text">
                                    <div class="CreatorEntrance-title">
                                        <div class="css-zkfaav">
                                            快速发布
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="css-rzelnn">
                                <div class="css-9cqq7d">
                                    <a-button-group size="large">
                                        <a-button style="width:130px;height:60px;background-color: aliceblue;">写问题</a-button>
                                        <a-button style="width:130px;height:60px;background-color: aliceblue;">
                                            写笔记
                                        </a-button>
                                    </a-button-group>
                                </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a-modal v-model="dialogFormVisible" title="编辑个人资料" on-ok="handleOk">
                <template slot="footer">
                    <a-button key="back" @click="handleCancel">
                    取消
                    </a-button>
                    <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                    确认提交
                    </a-button>
                </template>
               <div class="edit-item">
                <span>性别</span> 
                <span style="margin-left:50px">{{this.sex}}</span>
                <span class="edit-button"><a-button type="link" shape="circle" icon="edit" style="width:10px"/></span>
               </div>
               <div class="edit-item">
                <span>年龄</span> 
                <span style="margin-left:50px">{{this.age}}</span>
                <span class="edit-button"><a-button type="link" shape="circle" icon="edit" style="width:10px"/></span>
               </div>
            </a-modal>
        </div>
    
    </template>  

    <script>
    import InfoTabs from '@/components/InfoTabs.vue'
    import { updateAvatar } from '@/api/personalInfo.js'
    import { mapMutations } from "vuex";
    export default {
        name: "home-view",
        data() {
            return {
                logoImg: require("../assets/logo.png"),
                uploadFile:null,
                userAvatar:null,
                userName:"未登录",
                sex:"未知",
                age:null,
                pointUrl:require("../assets/point.png"),
                bonusPoints:0,
                pre:"https://tj-software-engineer.oss-cn-shanghai.aliyuncs.com/",
                dialogFormVisible:false
            };
        },
        mounted(){
            if(localStorage.getItem('userAvatar')!=null){
                this.userAvatar=localStorage.getItem('userAvatar')
                this.userName=localStorage.getItem('userName')
                this.sex=localStorage.getItem('sex')
                this.age=localStorage.getItem('age')
                this.bonusPoints=localStorage.getItem('bonusPoints')
            }
            
        },
        methods:{
            beforeUpload(file) {
                console.log(file.type);
                this.uploadFile = file;
                this.submit();
                return false;
            },
            ...mapMutations(["changeAvatar"]),
            submit(){
                let fd=new FormData()
                fd.append('file',this.uploadFile)
                let oldAvatar=this.userAvatar.split(this.pre)[1]
                if(oldAvatar==undefined)
                    oldAvatar=""
                updateAvatar(oldAvatar,fd).then(response=>{
                    if(response.status==200){
                        this.uploadFile=null
                        this.userAvatar=response.data
                        this.changeAvatar(this.userAvatar)
                        this.$message.success("更新头像成功")
                    }
                    else{
                        this.$message.error("更换头像失败")
                    }
                }).catch(e=>{
                    console.log(e)
                    this.$message.error("更换头像失败")
                })
            },
            handleCancel(){
                this.dialogFormVisible=false;
            }
        },
        components: {
            InfoTabs
        },
    };
    
    </script>

    <style scoped>
    .edit-button{
        margin-left:20px;
        opacity: 0;
    }

    .edit-item:hover .edit-button{
        opacity: 1 !important;
    }
    .edit-item {
        line-height:40px;
        font-size: 15px;
        font-weight: bold;
        border-bottom:2px solid #a8a1a1;
    }
    .css-9cqq7d {
        height: 98px;
        margin-bottom: 16px;
        border-radius: 4px;
    }
    .css-rzelnn {
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        width: 100%;
        padding-left: 17px;
        padding-right: 17px;
    }
    .css-zkfaav {
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        -webkit-box-align: center;
        align-items: center;
        display: flex;
    }
    .CreatorEntrance-title {
        font-size: 14px;
        font-synthesis: style;
        font-weight: 600;
        color: #121212;
    }
    .CreatorEntrance-text {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        flex-grow: 1;
        line-height: 16px;
        margin-left: 10px;
    }
    .CreatorEntrance-hint {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 56px;
    }
    .ProfileSideCreator-creatorEntranceHint {
        padding: 0 20px 0 4px;
    }
    .css-19idom {
        margin-bottom: 8px;
    }
    .Card {
        background: #fff;
        border-radius: 2px;
        -webkit-box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
        box-shadow: 0 1px 3pxhsla(0,0%,7%,.1);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: 10px;
        overflow: hidden;
    }
    .Profile-sideColumn {
        color: #646464;
        margin-left: 10px;
        width: 296px;
    }
    .css-1qyytj7 {
        max-width: 296px;
        -webkit-align-self: normal;
        -ms-flex-item-align: normal;
        align-self: normal;
    }
    .Profile-main {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-between;
        margin: 10px auto;
        min-height: 100vh;
        /* padding: 0 16px; */
        width: 1000px;
    }
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 250px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }

    img {
        object-fit: fill;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    }
    
    .text {
      font-size: 14px;
    }
    
    .item {
      margin-bottom: 18px;
    }
    
    .box-card {
      width: 1000px;
      margin:0
    }
    
    ::v-deep .el-card__header {
        padding: 0px 0px;
        border-bottom: 1px solid #7494f3;
        box-sizing: border-box;
    }
    ::v-deep .el-card__body, .el-main {
        padding: 0px;
    }
    
    .info-card{
      margin:8px auto;
      display: flex;
      width:1000px;
    }
    
    .info-tabs{
      margin:8px auto;
      display: flex;
      width:694px;
    }
    
    .avatar-block{
        margin-top:-50px;
    }
    
    ::v-deep .el-card__header {
        height:220px;
        background-color:#8191A1;
        position: relative;
        
    }
    
    ::v-deep .el-avatar--square {
        border-radius: var(--el-avatar-border-radius);
        border-radius: 8px;
        border: 4px solid #fff;
    }
    
    .ProfileHeader-wrapper {
        position: relative;
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        text-align: -webkit-auto;
    }
    
    .ProfileHeader-main {
        position: relative;
        margin: 0 20px 10px;
    }
    
    .ProfileHeader-avatar {
        position: absolute;
        top: -25px;
        left: 0;
        z-index: 1;
    }
    
    .UserAvatarEditor {
        cursor: pointer;
        position: absolute;
    }
    
    .UserAvatar {
        display: inline-block;
        overflow: hidden;
        vertical-align: top;
        background-color: #fff;
        border: 4px solid #fff;
        border-radius: 8px;
    }
    
    .UserAvatar-inner {
        vertical-align: top;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 4px;
    }
    
    ::v-deep .el-card {
        border: 3px solid #9BE2E0;
    }
    
    .upload-background{
        float: right;
        position: absolute;
        z-index: 2;
        padding: 24px;
        right:0;
        top:20px
    }
    
    .ProfileHeader-content {
        /* padding-top: 16px; */
        padding-left: 32px;
        border-left: 164px solid transparent;
    }
    
    .ProfileHeader-contentHead {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        /* margin-bottom: 16px; */
    }
    
    .ProfileHeader-title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 1;
        flex: 1 1;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .ProfileHeader-name {
        font-size: 26px;
        font-weight: 600;
        font-synthesis: style;
        line-height: 30px;
    }
    
    .upload-avatar{
        margin-left:30px;
        /* margin-top:35px; */
    }
    
    .ProfileHeader-contentHead {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        /* margin-bottom: 16px; */
    }
    
    .ProfileHeader-contentFooter {
        position: relative;
        padding-top: 8px;
    }
    
    .ProfileHeader-contentBody {
        position: relative;
        width: 524px;
        overflow: hidden;
    }
    
    h1, h2, h3 {
        margin: 0;
        font: inherit;
    }
    
    .ProfileHeader-name {
        font-size: 26px;
        font-weight: 600;
        font-synthesis: style;
        line-height: 30px;
    }
    
    .signature-font{
        font-size:15px;
        font-weight: 400;
        color:dimgray;
    }
    
    .ProfileHeader-buttons {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    </style>
    