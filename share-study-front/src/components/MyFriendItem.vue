<template>
    <div class="innerContent">
        <div class="nearly-pepls">
            <a-popconfirm placement="topRight" ok-text="确定" cancel-text="取消" @confirm="deleteRequest">
                <template slot="title">
                    你确定要删除这条请求记录吗
                </template>
                <a-button v-if="type!='1'&&item.status!=0"  type="link" shape="circle" icon="close" size="small" style="color:red;" class="right-top-button" />
            </a-popconfirm>
            <a-popconfirm placement="topRight" ok-text="确定" cancel-text="取消" @confirm="deleteRequest">
                <template slot="title">
                    你确定要撤回这条请求记录吗
                </template>
                <a-button v-if="type!='1'&&item.status==0" type="link" shape="circle" icon="rollback" size="small" style="color:brown;" class="right-top-button" />
            </a-popconfirm>
            <figure>
                <a href="">
                    <img :src="item.friendAvatar" alt="">
                </a>
            </figure>
            <div class="pepl-info" v-if="type=='1'">
                <h4 style="font-weight: 1000;">{{item.friendName}}</h4>
                <span style="color: #8d8d8d;">{{item.sex}} {{item.age}}</span>
                <a href="#" class="add-butn more-action" style="background: rgb(230, 28, 75);" @click="showDeleteConfirm">删除好友</a>
                <a href="#" class="add-butn" style="background: #088dcd;" @click="gotoMessage">发送私信</a>
            </div>
            <div class="pepl-info" v-if="type=='2'">
                <h4 style="font-weight: 1000;">{{item.friendName}}</h4>
                <span style="color: #8d8d8d;">{{item.sex}} {{item.age}}</span>
                <a-tooltip placement="topLeft">
                    <template slot="title">
                    <span>{{item.introduction}}</span>
                    </template>
                    <a href="#" class="add-butn info" >申请信息</a>
                </a-tooltip>
                <a href="#" class="add-butn more-action" style="background: rgb(41, 113, 34);" @click="agree">同意请求</a>
                <a href="#" class="add-butn" style="background: rgb(230, 28, 75);" @click="reject">拒绝请求</a>
            </div>
            <div class="pepl-info" v-if="type=='3'">
                <h4 style="font-weight: 1000;">{{item.friendName}}</h4>
                <span style="color: #8d8d8d;">{{item.sex}} {{item.age}}</span>
                <a-tooltip placement="topLeft">
                    <template slot="title">
                    <span>{{item.introduction}}</span>
                    </template>
                <a href="#" class="add-butn more-action" style="background:rgb(63, 63, 79);right:81px">申请信息</a>
                </a-tooltip>
                <a-tag v-if="item.status==1" color="green" style="width:auto;position:absolute;right:0;line-height:200%;top:10px " >
                    已通过
                </a-tag>
                <a-tag v-if="item.status==0" color="blue" style="width:auto;position:absolute;right:0;line-height:200%;top:10px " >
                    待通过
                </a-tag>
                <a-tag v-if="item.status==2" color="red" style="width:auto;position:absolute;right:0;line-height:200%;top:10px " >
                    已拒绝
                </a-tag>
                <!-- <a href="#" class="add-butn" style="background: rgb(230, 28, 75);" @click="reject">拒绝请求</a> -->
            </div>
        </div>
    </div>
</template>

<script>
import { agreeReq,rejectReq,removeFriend,deleteReq } from '@/api/friend'
export default {
  props:["item","type"],
  data(){
    return {
        visible:false,
    }
  },
  methods:{
    gotoMessage(){
        this.$router.push({name:'message',params:{friendId:this.item.friendId}})
    },
    deleteRequest(){
        deleteReq(this.item.applicationId).then(response=>{
            if(response.status==200){
                this.$message.success("删除成功");
                this.$emit("deleteItem",this.item.friendId)
            }
            else{
                this.$message.error("删除失败")
            }
        }).catch(e=>{
            console.log(e)
            this.$message.error("删除失败");
        })
    },
    agree(){
        agreeReq(this.item.applicationId).then(response=>{
            if(response.status==200){
                this.$message.success("添加好友成功")
                this.$emit("deleteItem",this.item.friendId)
            }
            else{
                this.$message.error("添加好友失败")
            }
        }).catch(e=>{
            console.log(e);
            this.$message.error("添加好友失败")
        })
    },
    showDeleteConfirm() {
      var that=this;
      this.$confirm({
        content: '确定要删除好友吗',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
            that.remove()
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
    remove(){
        removeFriend(this.item.friendKey).then(response=>{
            if(response.status==200){
                this.$message.success("删除好友成功")
                this.$emit("deleteItem",this.item.friendId)
            }
            else{
                this.$message.error("删除好友失败")
            }
        }).catch(e=>{
            console.log(e)
            this.$message.error("删除好友失败")
        })
    },
    reject(){
        rejectReq(this.item.applicationId).then(response=>{
            if(response.status==200){
                this.$message.success("拒绝请求成功")
                this.$emit("deleteItem",this.item.friendId)
            }
            else{
                this.$message.error("拒绝请求失败")
            }
        }).catch(e=>{
            console.log(e);
            this.$message.error("拒绝请求失败")
        })
    }
  }
}
</script>

<style scoped>
.innerContent:hover .right-top-button{
    opacity: 1;
}
.right-top-button{
    position:absolute;
    right:-22px;
    top:-22px;
    opacity: 0;
}
.innerContent{
    padding: 20px;
}

li:hover {
    box-shadow: 10px 5px 5px rgb(82, 79, 79);
}

a.add-butn.info {
    background: rgb(63, 63, 79) none repeat scroll 0 0;
    right: 178px;
}
a.add-butn.more-action {
    background:  none repeat scroll 0 0;
    right: 74px;
}
a.add-butn.more-action {
    right: 89px;
}
a.add-butn {
    color: #fff;
    float: right;
    font-size: 13px;
    line-height: initial;
    padding: 5px 10px;
    position: absolute;
    right: 0;
    text-transform: capitalize;
    top: 10px;
    border-radius: 4px;
}
.pepl-info > span {
    float: left;
    font-size: 13px;
    text-transform: capitalize;
    width: 100%;
    line-height: initial;
}

img {
    height: 60px;
    width: 100%;
    vertical-align: middle;
    object-fit: cover;
    border-style: none;
    border-radius: 100%;
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
.pepl-info {
    display: inline-block;
    padding-left: 15px;
    position: relative;
    vertical-align: middle;
    width: 85%;
}
.nearly-pepls > figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 60px;
    min-width: 60px;
    vertical-align: middle;
    width: 60px;
}
.nearly-pepls {
    display: inline-block;
    width: 100%;
    position: relative;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}

.nearby-contct > li {
    background: #ffffff none repeat scroll 0 0;
    border: 2px solid #d2d5d7;
    display: inline-block;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    transition: all 0.15s linear 0s;
}
</style>