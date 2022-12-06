<template>
    <div class="appear">
        <div v-if="item.senderId!=userId">
            <p class="Message-time">
                <time datetime="2022-01-14T05:16:03.000Z">{{item.createTime}}</time>
            </p>
            <div class="Message">
                <div class="css-zkfaav">
                    <div class="css-r6ymz">
                        <a href="">
                            <img :src=avatar class="css-11f2zj7">
                        </a>
                    </div>
                </div>
                <div class="Message-content">
                    <div class="TextMessage-sender TextMessage">
                        <div class="css-vurnku">
                            <div v-if="item.type==1">
                                {{item.message}}
                            </div>
                            <audio :src="item.message" v-if="item.type==2" id="aud" ref="audio" controls="controls" ></audio>

                            <a href="#" @click="previewImg">
                                <img v-if="item.type==3" :src="item.message" alt="">
                            </a>
                            <div v-if="item.type>3">
                                <a href="#" @click="preview">
                                    <div class="file-name">{{fileName}}</div>
                                    <img :src="fileImgs[type-4]" alt="" class="file-img" >
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="Message-status">
                        <div class="Message-status--wrapper">
                            <a-popover v-model="vsb" trigger="click">
                                <p slot="content"><a @click="hide" style="color:black">举报</a></p>
                                <p slot="content" v-if="item.type>=3"> <a @click="download" style="color:black">下载</a></p>
                                <a-button type="link" style="color:black">
                                    . . .
                                </a-button>
                            </a-popover>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="item.senderId==userId">
            <p class="Message-time">
                <time datetime="2022-01-14T05:16:03.000Z">{{item.createTime}}</time>
            </p>
            <div class="Message Message--reverse">
                <div class="css-zkfaav">
                    <div class="css-r6ymz">
                        <a href="">
                            <img :src=userAvatar class="css-11f2zj7">
                        </a>
                    </div>
                </div>
                <div class="Message-content Message-content--reverse" >
                    <div class="TextMessage TextMessage-receiver">
                        <div class="css-vurnku">
                            <div v-if="item.type==1">
                                {{item.message}}
                            </div>
                            <audio :src="item.message" v-if="item.type==2" id="aud" ref="audio" controls="controls" ></audio>
                            <a href="#" @click="previewImg">
                                <img v-if="item.type==3" :src="item.message" alt="">
                            </a>
                            <div v-if="item.type>3">
                                <a href="#" @click="preview">
                                    <div class="file-name">{{fileName}}</div>
                                    <img :src="fileImgs[type-4]" alt="" class="file-img" >
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="Message-status">
                        <div class="Message-status--wrapper">
                            <a-popover v-model="vsb" trigger="click">
                                <p slot="content"><a @click="hide" style="color:black">举报</a></p>
                                <p slot="content" v-if="item.type>=3"> <a @click="download" style="color:black">下载</a></p>


                                <a-button type="link" style="color:black">
                                    . . .
                                </a-button>
                            </a-popover>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a-modal v-model="visible"  width="1000px" :footer="null" :dialog-style="{ top: '20px' }" >
            <iframe :src="imgVisibleUrl" frameborder="0" style="width:100%;height:600px;">
                <head>
                    <meta http-equiv="UserContent-Type" content="text/html; charset=gbk " />
                </head>
            </iframe>
        </a-modal>
        <a-modal v-model="imgVisible"  width="1000px" :footer="null" :dialog-style="{ top: '20px' }">
            <img :src="item.message" width="1000px" alt="">
        </a-modal>
    </div>
</template>

<script>
export default {
  name: 'message',
  props:['item','avatar'],
  mounted(){
    this.fileName=this.item.message.split('/')[this.item.message.split('/').length-1]
    console.log(111)
    console.log(this.item)
    this.type=this.item.type
    this.userAvatar=localStorage.getItem('userAvatar')
    this.userId=localStorage.getItem('userId')
  },
  data(){
    return {
        userId:1,
        userAvatar:"https://wc-project.oss-cn-shanghai.aliyuncs.com/2022/09/15/f32998ad64ff43a4a2a77af9c9cae32av2-0ca202b31685b55bb7a7bf091cceee97_r.jpg",
        fileImgs:[require("../assets/pdf.png"),require("../assets/word.png"),require("../assets/txt.png"),require("../assets/xlsx.png"),require("../assets/pptx.png"),require("../assets/zip.png"),require("../assets/file.png")],
        fileName:"1",
        type:0,
        visible:false,
        imgVisibleUrl:"",
        imgVisible:false,
        vsb:false,
    }
  },
  methods:{
    previewImg(){
        this.imgVisible=true;
    },
    preview(){
        if(this.type>=9){
            return window.location.href=this.item.message
        }
        if(this.type==7||this.type==5||this.type==8){
            this.imgVisibleUrl=`https://view.officeapps.live.com/op/view.aspx?src=${this.item.message}`;
        }
        else{
            this.imgVisibleUrl=this.item.message
        }
        this.visible=true;
    },
    hide() {
      console.log(111);
      this.vsb = false;
    },
    download(){
        return window.location.href=this.item.message
    }
  }
}
</script>

<style scoped>
.Message-status--more {
    cursor: pointer;
    height: 16px;
    width: 16px;
}
.Message-status--more, html[data-theme=dark] .Message-status--more {
    fill: #999;
}
.Message-status--more {
    cursor: pointer;
    height: 16px;
    width: 16px;
}

button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    outline: none;
    padding: 0;
}
.Chat-ActionMenuPopover-Button {
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}

.Message-status--wrapper {
    position: relative;
}
.Message-status {
    margin: 0 8px;
}
.file-name{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    max-width: 200px;
    font-weight: bold;
    text-overflow: ellipsis;
    margin-right:10px;
}
.file-img{
    /* background: rgba(255, 255, 255, 0.5); */
    width:50px;
    height:auto;
}

img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;

}
.Message--reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}

.Message-content--reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}

.Message-time {
    padding-top: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #999;
}

.css-vurnku {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
}

.Message-time {
    padding-top: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #999;
}

.Message {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 20px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.css-zkfaav {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
}

.css-r6ymz {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    display: inline-block;
    width: 40px;
    height: 40px;
    position: relative;
}

.css-11f2zj7 {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    max-width: 100%;
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 50%;
}

.Message-content {
    margin: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}


.TextMessage-sender {
    background-color: #f6f6f6;
    color: #444;
}

.TextMessage-sender:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    left: -4px;
    top: 14px;
    background: #f6f6f6;
    transform: rotate(45deg);
}

.TextMessage {
    max-width: 388px;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .4px;
    position: relative;
    margin-right: 8px;
    margin-left: 8px;
    text-align: left;
    min-height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: pre-wrap;
    word-break: break-all;
}

.TextMessage-receiver {
    background-color: #056de8;
}

.TextMessage-receiver:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    right: -4px;
    top: 14px;
    background: #056de8;
    transform: rotate(45deg);
}

.TextMessage-sender {
    background-color: #f6f6f6;
    color: #444;
}

.TextMessage-sender:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    left: -4px;
    top: 14px;
    background: #f6f6f6;
    transform: rotate(45deg);
}
</style>
