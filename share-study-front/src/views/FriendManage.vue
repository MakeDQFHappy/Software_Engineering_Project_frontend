<template>
    <div>
        <!-- <div class="gray-bg gap"> -->
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row" style="position: relative;">
                            <div class="col-lg-3">
                                <aside class="sidebar static">
                                    <a-affix :offset-top="65">

                                        <div class="widget">
                                            <h4 class="widget-title">推荐好友</h4>

                                            <ul class="ps-container followers">
                                                <li v-for="item in 5">
                                                    <AddFriendItem></AddFriendItem>
                                                </li>
                                            </ul>
                                            <div class="lodmore">
                                                <a-button style="width:80%;margin-left:10%;margin-bottom: 10%;" class="button">换一批</a-button>
                                            </div>
                                        </div>
                                    </a-affix>
                                </aside>
                            </div>
                            <div class="col-lg-6">
                                <div class="central-meta">
                                    <div class="frnds">
                                        <a-menu v-model="current" mode="horizontal" >
                                            <a-menu-item key="1" @click="getMyFriends" > 我的好友</a-menu-item>
                                            <a-menu-item key="2" @click="getFriendReq" > 好友请求</a-menu-item>
                                            <a-menu-item key="3" @click="getMineReq" > 我的请求</a-menu-item>
                                        </a-menu>
                                        <div class="tab-content"> 
                                            <div v-show="current=='1'" style="width:100%;padding-bottom: 20px;">
                                                <a-input-search placeholder="输入好友名搜索" style="width: 100%" @search="onFriendSearch" />
                                            </div>
                                            <div class="tab-pane active fade show">
                                                <ul class="nearby-contct">
                                                    <li v-for="item in friendItem">
                                                        <MyFriendItem :item="item" :type="current"></MyFriendItem>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <aside class="sidebar static"> 
                                    <a-affix :offset-top="65">
                                        <div class="widget">
                                            <h4 class="widget-title">用户搜索</h4>
                                            <div class="search">
                                                <a-input-search placeholder="输入用户名或用户手机号搜索" style="width: 100%" @search="onSearch" />
                                            </div>
                                            <ul id="people-list" class="ps-container followers">
                                                <li v-for="item in addFriendItem">
                                                    <AddFriendItem :item="item"></AddFriendItem>
                                                </li>
                                            </ul>
                                        </div>
                                    </a-affix>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import MyFriendItem  from '@/components/MyFriendItem.vue'
import AddFriendItem from '@/components/AddFriendItem.vue'
import { searchUser,getReq,getFriends,getMyReq } from '@/api/friend'
export default {
  data(){
    return {
        current:"1",
        addFriendItem:[],
        friendItem:[],
        allFriends:[],
    }
  },
  components: {
    MyFriendItem,
    AddFriendItem
  },
  mounted(){
    this.getMyFriends()
  },
  methods: {
    onSearch(Value){
        searchUser(Value).then(response=>{
            if(response.status==200){
                this.$message.success("搜索成功");
                this.addFriendItem=response.data;
                return;
            }
            this.$message.error("搜索失败");
        }).catch(e=>{
            console.log(e);
            this.$message.error("搜索失败");
        })
    },
    onFriendSearch(Value){
        console.log(111)
        if(Value==""){
            console.log(this.allFriends)
            this.friendItem=this.allFriends
            return
        }
        this.friendItem=[];
        for(let i=0;i<this.allFriends.length;++i){
            console.log(this.allFriends[i].friendName.indexOf(Value))
            if(this.allFriends[i].friendName.indexOf(Value)>=0){
                this.friendItem.push(this.allFriends[i])
            }
        }
    },
    getFriendReq(){
        this.friendItem=[];
        getReq().then(response=>{
            if(response.status==200){
                this.friendItem=response.data;
                this.$message.success("获取好友请求成功")
            }
            else{
                this.$message.error("获取好友请求失败")
            }
        }).catch(e=>{
            console.log(e)
            this.$message.error("获取好友请求失败")
        })
    },
    getMineReq(){
        this.friendItem=[];
        getMyReq().then(response=>{
            if(response.status==200){
                this.friendItem=response.data
                this.$message.success("获取我的请求成功")
            }
            else{
                this.$message.error("获取我的请求失败")
            }
        }).catch(e=>{
            console.log(e)
            this.$message.error("获取我的请求失败")
        })
    },
    getMyFriends(){
        this.friendItem=[];
        getFriends().then(response=>{
            if(response.status==200){
                this.friendItem=response.data;
                this.allFriends=response.data;
                this.$message.success("获得好友列表成功")
            }
            else{
                this.$message.error("获取好友列表失败")
            }
        }).catch(e=>{
            console.log(e)
            this.$message.error("获取好友列表失败")
        })
    },
  }
}

</script>

<style scoped>
.button{
  animation: tada 1s;
}

.button:active{
  animation: none;
}

@keyframes tada {
    from {
        transform: scale3d(1, 1, 1)
    }
    10%, 20% {
        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)
    }
    30%, 50%, 70%, 90% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)
    }
    40%, 60%, 80% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)
    }
    to {
        transform: scale3d(1, 1, 1)
    }
}
.lodmore {
    display: inline-block;
    width: 100%;
}
.sidebar .widget > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding: 0 25px 0px;
    width: 100%;
}

#people-list {
    margin-top: 20px;
    /* max-height: 450px; */
    position: relative;
}
.search {
    padding: 10px 20px;
}
.sidebar .widget li {
    display: inline-block;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
}
.nearby-contct > li:hover {
    box-shadow: 10px 5px 5px rgb(82, 79, 79);
}

a.add-butn.more-action {
    background: lightslategray none repeat scroll 0 0;
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
}
.nearby-contct {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}

.fade {
    opacity: 0;
    transition: opacity .15s linear;
}
.fade.show {
    opacity: 1;
}
.tab-content>.active {
    display: block;
}

.nearby-contct > li {
    background: #fff none repeat scroll 0 0;
    border: 2px solid #d2d5d7;
    display: inline-block;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    transition: all 0.15s linear 0s;
}
/* .tab-content>.tab-pane {
    display: none;
} */
.frnds .nav-tabs .nav-item > span {
    border: 1px solid #ccc;
    border-radius: 30%;
    display: inline-block;
    font-size: 14px;
    line-height: initial;
    margin-left: 5px;
    text-align: center;
    width: 25px;
    color: #8d8d8d;
}
.frnds .nav-tabs .nav-item a {
    font-weight: 500;
}
.frnds .nav-tabs .nav-item a.active {
    border-bottom: 1px solid;
}
a:active{
    color:#088dcd
}
.nav-item {
    margin-bottom: -1px;
    margin-right: 50px;
}
.nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav-tabs {
    border-bottom: 1px solid #dee2e6;
}
.nav.nav-tabs {
    border: medium none;
}
.frnds {
    float: left;
    width: 100%;
}
.central-meta {
    background: #fdfdfd none repeat scroll 0 0;
    border: 1px solid #e2dddd;
    border-radius: 5px;
    display: inline-block;
    width: 100%;
    margin-bottom: 17px;
    padding: 25px;
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

a, a:hover, a:focus, a:active {
    color: inherit;
    outline: none;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
}

a {
    background-color: transparent;
}

figure {
    margin: 0 0 1rem;
}
.followers > li figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 45px;
    min-width: 45px;
    vertical-align: middle;
    width: 45px;
}
img {
    height: 60px;
    width: 100%;
    vertical-align: middle;
    object-fit: cover;
    border-style: none;
    border-radius: 100%;
}
.friend-meta {
    display: inline-block;
    padding-left: 10px;
    vertical-align: middle;
    width: auto;
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
.ps-container {
    -ms-touch-action: auto;
    touch-action: auto;
    overflow: hidden!important;
    -ms-overflow-style: none;
}
.followers {
    /* max-height: 260px; */
    position: relative;
}
.widget-title::before {
    bottom: 0;
    content: "";
    height: 2px;
    left: 20px;
    position: absolute;
    width: 20%;
    background: #088dcd;
}
.widget-title {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    color: #424242;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 30px;
    padding: 20px 20px 10px;
    position: relative;
    text-transform: capitalize;
    width: 100%;
    float: left;
}
.widget {
    display: inline-block;
    position: relative;
    width: 100%;
    margin-bottom: 18px;
    background: #fdfdfd;
    border: 1px solid #d8d4d4;
    border-radius: 5px;
}
.static, .static > div {
    position: static !important;
}
.sidebar {
    display: table;
    float: none;
    margin: 0 auto;
    padding-bottom: 20px;
    width: 100%;
    position: fixed;
    top:100px
}
.col-lg-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 7.5px;
}
.col-lg-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 7.5px;
}
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.col-lg-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.container {
    max-width: 1230px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.gap {
    float: left;
    position: relative;
    width: 100%;
}
.gray-bg {
    float: left;
    width: 100%;
    /* background: #f4f2f2; */
}
</style>