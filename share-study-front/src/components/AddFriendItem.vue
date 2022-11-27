<template>
    <div>
        <figure>
            <img :src="item.userAvatar" alt="" >
        </figure>
        <div class="friend-meta">
            <h4>
                <a href="">{{item.userName}}</a>
            </h4>
            <div style="font-size:12px">{{item.sex}} {{item.age}}</div>
        </div>
        <div class="addButton">
            <a-button type="primary" style="" @click="showModal">
                添加好友
            </a-button>
        </div>
        <a-modal v-model="visible" title="发送好友请求">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">
                取消
                </a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk" >
                发送
                </a-button>
            </template>
            <a-textarea v-model="introduction" placeholder="输入请求信息,不超过五十字" allow-clear maxLength=50 />
        </a-modal>
    </div>
</template>

<script>
import { sendReq } from '@/api/friend'
export default {
  props:["item"],

  data(){
    return {
        visible: false,
        introduction:"",
        loading: false,
    }
  },
  methods:{
    addFriend(){
        sendReq(item.userId).then(response=>{
            if(response.status==200){
                this.$message.success("发送请求成功")
            }
            else{
                this.$message.error("发送请求失败")
            }
        }).catch(e=>{
            console.log(e)
            this.$message.error("发送请求失败")
        })
    },
    showModal() {
      this.visible = true;
    },
    handleCancel(e) {
      this.visible = false;
      this.introduction="";
    },
    handleOk(e) {
      this.loading = true;
      sendReq(this.item.userId,this.introduction).then(response=>{
            if(response.status==200){
                this.handleCancel()
                this.loading = false;
                this.$message.success("发送请求成功")
            }
            else{
                this.handleCancel()
                this.loading = false;
                this.$message.error("发送请求失败")
            }
        }).catch(e=>{
            this.handleCancel()
            this.loading = false;
            console.log(e)
            this.$message.error("发送请求失败")
        })
    },
  }
}
</script>

<style scoped>

.friend-meta {
    display: inline-block;
    padding-left: 10px;
    vertical-align: middle;
    width: auto;
}
img {
    height: 60px;
    width: 100%;
    vertical-align: middle;
    object-fit: cover;
    border-style: none;
    border-radius: 100%;
}

.addButton{
    position: absolute;
    right:10px;
    top:8px;
    bottom:0;
    height:50px;
    display: inline-block;
    vertical-align: middle;
    
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 1000;
    line-height: 1.2;
    color: inherit;
}

.pepl-info > h4 {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
}

a {
    background-color: transparent;
}

.frnds .nav-tabs .nav-item a {
    font-weight: 500;
}

.followers > li figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 45px;
    min-width: 45px;
    vertical-align: middle;
    width: 45px;
}
figure {
    margin: 0 0 1rem;
}
.nearly-pepls > figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 60px;
    min-width: 60px;
    vertical-align: middle;
    width: 60px;
}

a, a:hover, a:focus, a:active {
    color: inherit;
    outline: none;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
}

a:link{
    text-decoration: none;
}
</style>