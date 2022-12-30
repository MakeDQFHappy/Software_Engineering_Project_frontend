<template>
  <div>
    <div class="chat">
      <div class="chatSideBar">
        <div class="ChatSideBar-Search">
          <a-select
            show-search
            style="margin: 3%; width: 94%"
            placeholder="搜索联系人"
            @change="handleChange"
          >
            <a-select-option v-for=" item in userItem" :key="item.friendName">
              <ChatUserItem :item="item"></ChatUserItem>
            </a-select-option>
          </a-select>
        </div>
        <div class="ChatListGroup" style="height: 100%">
          <a-menu
            mode="inline"
            :open-keys="openKeys"
            style="width: 100%"
            @openChange="onOpenChange"
          >
            <a-sub-menu key="sub1">
              <span slot="title"
                ><a-icon type="fire" /><span>最近联系</span></span
              >
              <a-menu-item
                style="height: 60px"
                v-for="(item, index) in frequentContactUserItem"
                :key="index"
                @click="changeChat(item)"
              >
                <ChatUserItem :item="item"></ChatUserItem>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"
                ><a-icon type="team" /><span>我的好友</span></span
              >
              <a-menu-item
                style="height: 60px"
                v-for="(item, index) in userItem"
                :key="index"
                @click="changeChat(item)"
              >
                <ChatUserItem :item="item"></ChatUserItem>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </div>
      <div class="ChatBox ChatBox">
        <header class="ChatBox-title">{{ contactPerson }}</header>
        <div class="MessagesBox-wrapper">
          <div class="MessagesBox" role="list" id="scrollDiv">
            <div v-for="item in message">
              <Message :item="item" :avatar="personAvatar" />
            </div>
          </div>
          <div style="position: absolute; bottom: 30px; left: 0; right: 0">
              <RecordingAnim
              v-show="recordData.showAnima"
            ></RecordingAnim>
            <div class="countdown" v-show="recordData.showAnima">{{countdown}}</div>
          </div>
        </div>
        <div class="InputBox">
          <ul class="ToolBar">
            <li class="ToolBar-item">
              <Emoji ref="getEmoji" @changeText="changeText"></Emoji>
              <!-- <a-button type="link" icon="smile" style="color:black" /> -->
            </li>
            <li class="ToolBar-item">
              <a-upload :file-list="fileList" :before-upload="beforeUpload">
                <a-button type="link" icon="file-add" style="color: black" />
              </a-upload>
            </li>
            <li class="ToolBar-item">
              <a-button
                type="link"
                icon="audio"
                style="color: black"
                @click="clickRecord"
              />
            </li>
          </ul>
          <label class="InputBox-input">
            <textarea
              name=""
              id="textarea"
              v-model="inputText"
              class="Input"
            ></textarea>
          </label>
          <div class="InputBox-footer">
            <div class="InputBox-footerDesc css-1zwx8a">按 Enter 键发送</div>
            <button
              type="Button"
              :disabled="this.inputText == ''"
              class="Button InputBox-sendBtn Button--primary Button--blue"
              ref="sendBtn"
              @click="sendMsg"
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import Emoji from "@/components/Emoji.vue";
import ChatUserItem from "@/components/ChatUserListItem.vue";
import Recorder from "js-audio-recorder";
import RecordingAnim from "@/components/RecordingAnim.vue";
import { sendTextMessage,getMessage,sendFileMessage,sendAudioMessage,readMsg } from '@/api/friendMessage'
import { getFriends } from '@/api/friend'
export default {
  name: "message-view",
  mounted() {
    this.getFriendsList();
    this.userId = localStorage.getItem("userId");
    this.openSocket();
  },
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: [],
      personAvatar:
        "https://wc-project.oss-cn-shanghai.aliyuncs.com/2022/09/15/f32998ad64ff43a4a2a77af9c9cae32av2-0ca202b31685b55bb7a7bf091cceee97_r.jpg",
      message: [],
      userItem: [],
      frequentContactUserItem:[],
      inputText: "",
      uploadFile: null,
      recordData: {
        showAnima: false,
        recorder: null,
      },
      contactPerson: "",
      userId: "",
      contactId: "",
      socket: null,
      countdown:0,
      audioLock:true,
    };
  },
  methods: {
    getFriendsList() {
      getFriends()
        .then((response) => {
          if (response.status == 200) {
            this.userItem = response.data;
            this.splitFriendsList()
            if(this.$route.params.friendId!=null){
              this.findAndChoose(this.$route.params.friendId)
            }
            this.$message.success("获得好友列表成功");
          } else {
            this.$message.error("获得好友失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("获得好友失败");
        });
    },
    findAndChoose(friendId){
      for(let i=0;i<this.userItem.length;++i){
        if(this.userItem[i].friendId==friendId){
          this.changeChat(this.userItem[i])
          return
        }
      }
    },
    //根据上次聊天时间拆分好友列表
    splitFriendsList(){
      for(let i=0;i<this.userItem.length;++i){
        this.userItem[i]["lastTime"]=this.dealTime(this.userItem[i])
      }
    },
    dealTime(item){
      var curDate=new Date();
      var oldDate=new Date(item.lastChatTime)
      var difftime = (curDate - oldDate)/1000; //计算时间差,并把毫秒转换成秒
      console.log(difftime)
      var days = parseInt(difftime/86400); // 天  24*60*60*1000 
      var hours = parseInt(difftime/3600)-24*days;    // 小时 60*60 总小时数-过去的小时数=现在的小时数 
      var minutes = parseInt(difftime%3600/60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
      var seconds = parseInt(difftime%60);  // 以60秒为一整份 取余 剩下秒数
      if(days>10000){
        return ""
      }
      if(days>0){
          return  days.toString()+"天前"
      }
      if(hours>0){
          item["lastTime"]=hours.toString()+"小时前"
          this.frequentContactUserItem.push(item)
          return hours.toString()+"小时前"
      }
      if(minutes>0){
          item["lastTime"]=minutes.toString()+"分钟前"
          this.frequentContactUserItem.push(item)
          return minutes.toString()+"分钟前"
      }
      else if(seconds>=0){
          item["lastTime"]="刚刚"
          this.frequentContactUserItem.push(item)
          return lastTime="刚刚"
      }
    },
    getMsg() {
      getMessage(this.contactId)
        .then((response) => {
          if (response.status == 200) {
            this.message = response.data;
            this.$message.success("获取消息成功");
            this.scrollToBottom();
          } else {
            this.$message.error("获取消息失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("获取消息失败");
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("获取消息失败");
        });
    },

    scrollToBottom() {
      var ele = document.getElementById("scrollDiv");
      setTimeout(function () {
        ele.scrollTop = ele.scrollHeight;
      }, 200);
    },
    changeChat(item){
        this.message=[]
        this.contactPerson=item.friendName;
        this.contactId=item.friendId;
        this.personAvatar=item.friendAvatar
        this.getMsg();
        if(item.notReadNum>0){
            readMsg(item.friendId).then(response=>{
                if(response.status==200){
                    item.notReadNum=0;
                }
                else{
                    this.$message.error("已读消息失败")
                }
            }).catch(e=>{
                console.log(e)
                this.$message.error("已读消息失败")
            })
        }
        

    },
    onSearch() {
      console.log("search");
    },
    beforeUpload(file) {
      console.log(file.type);
      this.uploadFile = file;
      this.submit();
      return false;
    },
    submit() {
      if (this.uploadFile != null) {
        var formdata = new FormData();
        formdata.append("file", this.uploadFile);
        sendFileMessage(this.contactId, formdata)
          .then((response) => {
            if (response.status == 200) {
              this.message.push(response.data);
              this.$message.success("发送文件成功");
            } else {
              this.$message.error("发送文件失败");
            }
          })
          .catch((e) => {
            console.log(e);
            this.$message.error("发送文件失败");
          });
      }
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    changeText() {
      var textArea = document.getElementById("textarea");
      function changeSelectedText(obj, str) {
        if (window.getSelection()) {
          // 非IE浏览器
          textArea.setRangeText(str);
          // 在未选中文本的情况下，重新设置光标位置
          textArea.selectionStart += str.length;
          textArea.focus();
        } else if (document.getSelection()) {
          // IE浏览器
          obj.focus();
          var sel = document.selection.createRange();
          sel.text = str;
        }
      }
      changeSelectedText(
        textArea,
        this.$refs.getEmoji.faceList[this.$refs.getEmoji.emojiItem]
      );
      this.inputText = textArea.value; // 要同步data中的数据
      // console.log(this.$refs.getEmoji.faceList[this.$refs.getEmoji.emojiItem]);
    },

    sendMsg() {
      sendTextMessage(this.contactId, this.inputText)
        .then((response) => {
          if (response.status == 200) {
            this.sendMessage();
            this.message.push(response.data);
            this.scrollToBottom();
            this.$message.success("发送消息成功");
          } else {
            this.$message.error("发送消息失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("发送消息失败");
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("发送消息失败");
        });

      // this.message.push({
      //     senderId:1,
      //     type:1,
      //     message:this.inputText,
      //     createTime:new Date()
      // })
      this.inputText = "";
    },
    //销毁录音实例
    handleDestroy() {
      console.log("销毁实例");
      if (this.recordData.recorder) {
        this.recordData.recorder.destroy(); // 毁实例
      }
    },
    //录音
    clickRecord() {
      if(!this.audioLock)
        return;
      this.audioLock=false;
      if (this.recordData.showAnima) {
        this.recordData.recorder.pause(); // 暂停录音
        if(this.countdown<1){
          this.$message.error("录音时间太短，请重新录制")
          this.recordData.showAnima=false;
          this.audioLock=true;
          return
        }
        var blob = this.recordData.recorder.getWAVBlob(); //获取wav格式音频数据
        let file = new window.File([blob], new Date().getTime() + ".wav", {
          type: "wav",
        }); // 转成file类型
        let formData = new FormData();
        formData.append("file", file);
        this.recordData.showAnima=false;
        sendAudioMessage(this.contactId, formData)
          .then((response) => {
            if (response.status == 200) {
              this.message.push(response.data);
              this.$message.success("发送成功");
            } else {
              this.$message.error("发送失败");
            }
          })
          .catch((e) => {
            console.log(e);
            this.$message.error("发送失败");
          });
        // console.log(msg)
        // this.message.push({
        //     senderId:1,
        //     type:2,
        //     message:msg,
        //     createTime:new Date()
        // })
        this.handleDestroy();
      } else {
        this.recordData.recorder = new Recorder({
          sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
          sampleRate: 11025, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
          numChannels: 1, // 声道，支持 1 或 2， 默认是1
        });
        Recorder.getPermission().then(
          () => {
            console.log("开始录音");
            this.recordData.recorder.start(); // 开始录音
            this.recordData.showAnima=true;
            this.startcount(); //开始计时
          },
          (error) => {
            console.log(`${error.name} : ${error.message}`);
          }
        );
        
      }
      this.audioLock=true;
    },
    //录音计时
    startcount(){
      if(!this.recordData.showAnima){
        this.countdown=0;
        return
      }
      if(this.countdown==60){
        this.clickRecord();
        this.countdown=0;
        return;
      }
      setTimeout(()=>{
        this.countdown=parseInt(this.recordData.recorder.duration)
        this.startcount();
      },100)
      
    },
    //websocket实时通讯
    openSocket() {
      if (typeof WebSocket == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
        //等同于socket = new WebSocket("ws://localhost:8888/xxxx/im/25");
        //var socketUrl="${request.contextPath}/im/"+$("#userId").val();
        var socketUrl = "http://localhost:10001/imserver/" + this.userId;
        socketUrl = socketUrl.replace("https", "ws").replace("http", "ws");
        console.log(socketUrl);
        if (this.socket != null) {
          this.socket.close();
          this.socket = null;
        }
        this.socket = new WebSocket(socketUrl);
        //打开事件
        this.socket = new WebSocket(socketUrl);
        //打开事件
        this.socket.onopen = function () {
          console.log("websocket已打开");
          //socket.send("这是来自客户端的消息" + location.href + new Date());
        };
        var that = this;
        //获得消息事件
        this.socket.onmessage = function (msg) {
          var json = eval("(" + msg.data + ")");
          if (Number(json.fromUserId) == that.contactId) {
            that.getFriendsList();
            that.getMsg();
          } else {
            that.getFriendsList();
          }
          //发现消息进入    开始处理前端触发逻辑
        };
        //关闭事件
        this.socket.onclose = function () {
          console.log("websocket已关闭");
        };
        //发生了错误事件
        this.socket.onerror = function () {
          console.log("websocket发生了错误");
        };
      }
    },
    sendMessage() {
      if (typeof WebSocket == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        console.log(
          '{"toUserId":"' +
            this.contactId +
            '","contentText":"' +
            "this.content" +
            '"}'
        );
        this.socket.send(
          '{"toUserId":"' + this.contactId + '","contentText":"' + "111" + '"}'
        );
      }
    },
  },
  components: {
    Message,
    Emoji,
    ChatUserItem,
    RecordingAnim,
  },
};
</script>

<style scoped>
.countdown{
  font-size: 30px;
  font-weight: bold;
  color:#444;
  text-align: center;
}
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
  height: 400px;
  overflow-y: auto;
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
  height: 100%;
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
  letter-spacing: 0.4px;
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

.Input:focus {
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
  opacity: 0.5;
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

::v-deep .el-input__inner {
  width: 80%;
}

::v-deep .el-input {
  margin: 10px auto;
  width: 80%;
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
