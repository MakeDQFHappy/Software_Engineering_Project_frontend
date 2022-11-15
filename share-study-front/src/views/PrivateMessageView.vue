<template>
    <div>
      <div class="chat">   
        <div class="chatSideBar">
          <div class="ChatSideBar-Search">
            <a-select show-search style="margin:3%;width:94%" placeholder="搜索联系人" @change="handleChange">
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
                </a-select-option>
            </a-select>
          </div>
          <div class="ChatListGroup" style="height:100%">
            <a-menu mode="inline" :open-keys="openKeys" style="width: 100%" @openChange="onOpenChange">
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="fire" /><span>最近联系</span></span>
                    <a-menu-item key="1">
                    Option 1
                    </a-menu-item>
                    <a-menu-item key="2">
                    Option 2
                    </a-menu-item>
                    <a-menu-item key="3">
                    Option 3
                    </a-menu-item>
                    <a-menu-item key="4">
                    Option 4
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="team" /><span>我的好友</span></span>
                    <a-menu-item key="5">
                    Option 5
                    </a-menu-item>
                    <a-menu-item key="6">
                    Option 6
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>         
          </div>
        </div>
        <div class="ChatBox ChatBox">
            <header class="ChatBox-title">{{title}}</header>
            <div class="MessagesBox-wrapper">
                <div class="MessagesBox"  role="list" id="scrollDiv">
                    <div v-for="item in message">
                        <Message :item="item" :avatar="personAvatar" />
                    </div>
                </div>
            </div>
          <div class="InputBox">
            <ul class="ToolBar">
                <li class="ToolBar-item">
                    <Emoji ref="getEmoji" @changeText="changeText" ></Emoji>
                    <!-- <a-button type="link" icon="smile" style="color:black" /> -->
                </li>
                <li class="ToolBar-item">
                    <a-upload :file-list="fileList" :before-upload="beforeUpload">
                        <a-button type="link" icon="file-add" style="color:black" />
                    </a-upload>
                </li>
            </ul>
            <label class="InputBox-input">
              <textarea name="" id="textarea" v-model="inputText" class="Input" ></textarea>
            </label>
            <div class="InputBox-footer">
              <div class="InputBox-footerDesc css-1zwx8a">按 Enter 键发送</div>
              <button type="Button" :disabled="this.inputText==''" class="Button InputBox-sendBtn Button--primary Button--blue" ref="sendBtn" @click="sendMsg">发送</button>
            </div>
          </div>
          
        </div>
            
      </div>
    </div>
</template>

<script>
import Message from "@/components/Message.vue";
import Emoji from "@/components/Emoji.vue"
export default {
  name: 'message-view',
  onMounted(){
  },
  data(){
    return {
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1'],
        personAvatar: "https://wc-project.oss-cn-shanghai.aliyuncs.com/2022/09/15/f32998ad64ff43a4a2a77af9c9cae32av2-0ca202b31685b55bb7a7bf091cceee97_r.jpg",
        message:[{
            senderId:1,
            createTime:new Date(),
            message:"hello",
        },{
            senderId:2,
            createTime:new Date(),
            message:"hello",
        }],    
        title:"联系人名称",
        inputText:"",
        uploadFile:null,
    }
  },
  methods: {
    onSearch(){
        console.log("search")
    },
    beforeUpload(file) {
      console.log(file.type)
      this.uploadFile = file;
      this.submit();
      return false;
    },
    submit(){
        if(this.uploadFile!=null){
            console.log(this.uploadFile);
        }
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    changeText() {
        var textArea = document.getElementById('textarea');
        function changeSelectedText(obj, str) {
            if (window.getSelection()) {
                // 非IE浏览器
                textArea.setRangeText(str);
                // 在未选中文本的情况下，重新设置光标位置
                textArea.selectionStart += str.length;
                textArea.focus()
            } else if (document.getSelection()) {
                // IE浏览器
                obj.focus();
                var sel = document.selection.createRange();
                sel.text = str;
            }
        }
        changeSelectedText(textArea, this.$refs.getEmoji.faceList[this.$refs.getEmoji.emojiItem]);
        this.inputText.value = textArea.value;// 要同步data中的数据
        // console.log(this.$refs.getEmoji.faceList[this.$refs.getEmoji.emojiItem]);
    },
    sendMsg(){
        console.log(this.inputText);
    }
  },
  components: {
    Message,
    Emoji
  }
}
</script>

<style scoped>
.ToolBar-item {
    display: inline-block;
}
.ToolBar {
    margin: 0 14px;
    padding: 0px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: left;
    border-top: 1px solid #ebebeb;
}
.MessagesBox-wrapper {
    height: 362px;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
}

::v-deep .el-menu--inline {
    height:400px;
    overflow-y:auto;
}

.MessagesBox {
    height: 100%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
}

.chat {
    border-radius: 3px;
    margin: 10px auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 1px solid #ebebeb;
    min-height: 614px;
    height: calc(100vh - 200px);
    max-height: 1000px;
    width: 1002px;
    background-color: #fff;
    box-shadow: 0 0 4px 0 rgb(18 18 18 / 10%);
}
.chatSideBar {
    width: 286px;
    height: 100%;
    border-right: 1px solid #ebebeb;
    position: relative;
}

.ChatSideBar-Search {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

.ChatListGroup {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    bottom: 0;
    top: 56px;
    width: 100%;
    height:100%
}

.Chat-UnreadCount {
    font-size: 10px;
    line-height: 14px;
    height: 14px;
    min-width: 6px;
    padding: 0 4px;
    border-radius: 7px;
    font-weight: 500;
    text-align: center;
    background-color: #f1403c;
}

.ChatListGroup-Section {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
}

.ChatBox {
    min-width: 710px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    min-height: 600px;
}

.ChatBox-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-weight: 600;
    font-synthesis: style;
    font-size: 15px;
    line-height: 20px;
    margin: 0 14px;
    height: 50px;
    padding-bottom: 9px;
    padding-top: 21px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;
}

.Chat-ChatBox {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
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

.css-vurnku {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
}

.InputBox {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-height: 250px;
    min-height: 180px;
    display: flex;
}

.InputBox-input {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    border-width: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 0 4px 0 10px;
}

.Input {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    padding: 0;
    overflow: hidden;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    background: transparent;
    border: none;
    resize: none;
}

.Input:focus{
    outline: none;
}

.InputBox-footer {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 20px 10px;
    display: flex;
}

.InputBox-footerDesc {
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    padding-right: 10px;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    
}

.css-1zwx8a {
    color: rgb(191, 191, 191);
}

.Button:disabled {
    cursor: default;
    opacity: .5;
    pointer-events: none;
}

.InputBox-sendBtn {
    border-radius: 6px;
    width: 72px;
    height: 32px;
    font-size: 13px;
    line-height: 16px;
}


.Button--primary.Button--blue {
    color: #fff;
    background-color: #056de8;
}

.Button {
    display: inline-block;
    padding: 0 16px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    background: none;
    border: 1px solid;
    border-radius: 3px;
}

.Button--blue {
    color: #056de8;
    border-color: #056de8;
}

::v-deep .el-input__inner{
    width:80%
}

::v-deep .el-input{
    margin:10px auto;
    width:80%;
}

.Message--reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}


::v-deep .el-menu-item * {
    vertical-align: middle;
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
</style>