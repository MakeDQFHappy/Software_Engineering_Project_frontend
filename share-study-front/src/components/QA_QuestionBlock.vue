<template>
  <div class="Card TopstoryItem TopstoryItem-isFollow" tabindex="0">
    <div class="AuthorInfo">
      <div class="ContentItem AnswerItem">
        <h2 class="ContentItem-title">
          <div>
            <button
              @click="openquestion()"
              onmouseover="this.style.color='#056de8';"
              onmouseout="this.style.color='#000000';"
            >
              {{ QAQuestion.questionheader }}
            </button>
          </div>
        </h2>
      </div>
      <div
        style="
           {
            font-size: 15px;
            margin-left: 10px;
            font-weight: 800;
          }
        "
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;悬赏:{{
          QAQuestion.rewardpoints
        }}比特币
      </div>

      <a-button type="primary" @click="() => (modal2Visible = true)">
        回答
      </a-button>
      <a-modal
        v-model="modal2Visible"
        title="Vertically centered modal dialog"
        centered
        @ok="() => answer()"
      >
        <a-textarea
          v-model="Inputanswer"
          placeholder="写下你的回答"
          :auto-size="{ minRows: 3, maxRows: 8 }"
        />
      </a-modal>
    </div>
    <div class="RichContent-inner">
      <div class="css-79elbk">
        <span
          class="RichText ztext CopyrightRichText-richText css-4em6pe"
          options="[object Object]"
          itemprop="text"
          >{{ QAQuestion.questioncontent }}
        </span>
      </div>
    </div>
    <p>
      --------------------------------------------------------------------------------------------------------------------
    </p>
    <div class="AuthorInfo" v-if="!QAQuestion.hasanswerer">
      <div class="AuthorInfo-content">
        <div class="AuthorInfo-head">
          <span class="UserLink AuthorInfo-name"
            ><div class="css-1gomreu">唔...看来还没有人回答这个问题</div></span
          >
        </div>
      </div>
    </div>
    <div v-if="QAQuestion.hasanswerer">
      <div v-for="(item, index) in QuestionAnswers.slice(0, 2)" :key="index">
        <div class="FeedSource">
          <div class="AuthorInfo FeedSource-byline AuthorInfo--plain">
            <div class="AuthorInfo">
              <span class="UserLink AuthorInfo-avatarWrapper"
                ><div class="css-1gomreu">
                  <button
                    onmouseover="this.style.color='#056de8';"
                    onmouseout="this.style.color='#8590a6';"
                  >
                    <div class="css-dgtvym">
                      <a-avatar
                        :src="item.answereravatar"
                        :size="40"
                        icon="user"
                      />
                    </div>
                  </button></div
              ></span>
              <div class="AuthorInfo-content">
                <div class="AuthorInfo-head">
                  <span class="UserLink AuthorInfo-name"
                    ><div class="css-1gomreu">
                      <button
                        type="text"
                        @click="openuserlink(QAQuestion.userlink)"
                        onmouseover="this.style.color='#056de8';"
                        onmouseout="this.style.color='#000000';"
                      >
                        {{ item.answerername }}
                      </button>
                    </div></span
                  >
                </div>
              </div>
            </div>
            <div class="css-1gomreu">
              <a-button
                v-if="!QAQuestion.isadopted"
                @click="adopt"
                onmouseover="this.style.color='#056de8';"
                onmouseout="this.style.color='#8590a6';"
              >
                采纳
              </a-button>
              <a-button v-if="QAQuestion.isadopted" disabled> 已采纳 </a-button>
            </div>
          </div>
          <!-- <div class="css-go5ofn-TagsContainer-StyledTags">
        <div
          class="css-pvcibd-TagWrap e27myof1"
          v-for="(tag, index) in QAQuestion.labels"
          :key="index"
        >
          <span>{{ tag }}</span>
        </div>
      </div> -->
        </div>
        <div class="ContentItem AnswerItem">
          <div class="ContentItem-meta">
            <div class="LabelContainer-wrapper"></div>
          </div>
          <div class="RichContent is-collapsed">
            <span
              ><div class="RichContent-inner">
                <div class="css-79elbk">
                  <span
                    class="RichText ztext CopyrightRichText-richText css-4em6pe"
                    options="[object Object]"
                    itemprop="text"
                    >{{ item.answercontent }}
                  </span>
                </div>
              </div></span
            >
            <div class="read">
              <a
                target="_blank"
                type="button"
                class="ContentItem-more Button--plain"
                href="https://baike.baidu.com/item/%E5%85%83%E5%AE%87%E5%AE%99/58292530"
              >
                阅读全文
              </a>
            </div>

            <div class="ContentItem-actions">
              <!-- <span></span>
          <a-button
            v-if="!QAQuestion.isAgreed"
            class="Button VoteButton VoteButton--up"
            :style="{ background: '#F0F8FF' }"
            @click="clickAgree"
          >
            <span style="display: inline-flex; align-items: center"
              ><div class="icons-list">
                <a-icon type="caret-up" />
              </div>
            </span>
            赞同&nbsp;{{ QAQuestion.agreenum }}</a-button
          >
          <a-button
            v-if="QAQuestion.isAgreed"
            class="Button VoteButton VoteButton--up"
            :style="{ background: '	#00BFFF' }"
            @click="clickAgree"
          >
            <span style="display: inline-flex; align-items: center"
              ><div class="icons-list">
                <a-icon type="caret-up" />
              </div>
            </span>
            已赞同&nbsp;{{ QAQuestion.agreenum }}</a-button
          >

          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <a-button
            v-if="!QAQuestion.isDenied"
            class="Button VoteButton VoteButton--down"
            :style="{ background: '#F0F8FF' }"
            @click="clickDeny"
          >
            <span style="display: inline-flex; align-items: center"
              ><div class="icons-list">
                <a-icon type="caret-down" /></div></span
          ></a-button>
          <a-button
            v-if="QAQuestion.isDenied"
            class="Button VoteButton VoteButton--down"
            :style="{ background: '#00BFFF' }"
            @click="clickDeny"
          >
            <span style="display: inline-flex; align-items: center"
              ><div class="icons-list">
                <a-icon type="caret-down" /></div></span
          ></a-button> -->

              <a-button
                v-if="!item.isliked"
                type="link"
                style="color: black"
                @click="click_Like(item.answerid)"
                v-show="!item.isliked"
              >
                <a-icon type="like" />
                <span>{{ item.likenum }}</span>
              </a-button>
              <a-button
                v-if="item.isliked"
                type="link"
                style="color: red"
                @click="undo_Like(item.answerid)"
                v-show="item.isliked"
              >
                <a-icon type="like" theme="filled" />
                <span>{{ item.likenum }}</span> </a-button
              ><a-button
                v-if="!QAQuestion.isStared"
                type="link"
                style="color: black"
                @click="clickStar"
                v-show="!QAQuestion.isStared"
              >
                <a-icon type="star" />
                <span>{{ QAQuestion.starNum }}</span>
              </a-button>
              <a-button
                v-if="QAQuestion.isStared"
                type="link"
                style="color: #ffd700"
                @click="clickStar"
                v-show="QAQuestion.isStared"
              >
                <a-icon type="star" theme="filled" />
                <span>{{ QAQuestion.starNum }}</span>
              </a-button>
              <a-button type="link" style="color: black">
                <a-icon type="message" />
                <span>{{ QAQuestion.commentNum }}</span>
              </a-button>
              <div class="Popover ShareMenu ContentItem-action">
                <div class="ShareMenu-toggler">
                  <a-button
                    type="link"
                    class="Button--plain Button--withIcon Button--withLabel"
                    @click="openNotification"
                  >
                    <span style="display: inline-flex; align-items: center">
                      <div class="icons-list">
                        <a-icon type="yuque" theme="filled" /></div></span
                    >分享
                  </a-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAnswer, answerQuestion, clickLike, undoLike } from "@/api/QA";
export default {
  data() {
    return {
      modal2Visible: false,
      Inputanswer: "",
      QuestionAnswers: [],
      message: [],
      message1: [],
      message2: [],
    };
  },
  inject: ["reload"],
  props: ["QAQuestion"],
  mounted() {
    this.getAnswersReq();
  },
  methods: {
    answer() {
      this.modal2Visible = false;
      answerQuestion(this.QAQuestion.questionid, this.Inputanswer)
        .then((response) => {
          if (response.status == 200) {
            this.reload();
            this.message.push(response.data);
            this.$message.success("回答成功");
          } else {
            this.$message.error("回答失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("回答失败");
        });
      this.Inputanswer = "";
    },
    getAnswersReq() {
      this.QuestionAnswers = [];
      getAnswer(this.QAQuestion.questionid)
        .then((response) => {
          if (response.status == 200) {
            this.QuestionAnswers = response.data;
            this.$message.success("获取回答成功");
          } else {
            this.$message.error("获取回答失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("获取回答失败");
        });
    },
    calladopt() {
      this.QAQuestion.isadopted = true;
    },
    adopt() {
      let self = this;
      this.$confirm({
        title: "是否确认采纳此回答？",
        content: (h) => <div style="color:red;">注意,此操作将不可逆</div>,
        onOk(e) {
          console.log("OK");
          self.calladopt();
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },
    openuserlink(src) {
      window.open(src, "_blank");
      // window.location.href = src;
    },
    openquestion() {
      let routeUrl = this.$router.resolve({
        path: "/QADetails",
        // query: { akserid: },
      });
      window.open(routeUrl.href, "_blank");
    },
    // clickAgree() {
    //   this.QAQuestion.agreenum += this.QAQuestion.isAgreed ? -1 : 1;
    //   this.QAQuestion.isAgreed = !this.QAQuestion.isAgreed;
    //   this.QAQuestion.isDenied = false;
    // },
    // clickDeny() {
    //   this.QAQuestion.isDenied = !this.QAQuestion.isDenied;
    //   if (
    //     this.QAQuestion.isAgreed == true &&
    //     this.QAQuestion.isDenied == true
    //   ) {
    //     this.QAQuestion.isAgreed = false;
    //     this.QAQuestion.agreenum -= 1;
    //   }
    // },
    click_Like(answerid) {
      clickLike(answerid)
        .then((response) => {
          if (response.status == 200) {
            this.reload();
            // this.QuestionAnswers = response.data;
            this.message1.push(response.data);
            this.$message.success("点赞成功");
          } else {
            this.$message.error("点赞失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("点赞失败");
        });
    },
    undo_Like(answerid) {
      undoLike(answerid)
        .then((response) => {
          if (response.status == 200) {
            this.reload();
            this.message2.push(response.data);
            this.$message.success("取消点赞成功");
          } else {
            this.$message.error("取消点赞失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("取消点赞失败");
        });
    },
    clickStar() {
      this.QAQuestion.starNum += this.QAQuestion.isStared ? -1 : 1;
      this.QAQuestion.isStared = !this.QAQuestion.isStared;
      if (this.QAQuestion.isStared == true)
        this.$notification.open({
          message: "收藏成功",
          description: "已收藏在'我的收藏夹/提问'中",
          duration: 1.5,
        });
      else
        this.$notification.open({
          message: "已取消收藏",
          duration: 0.5,
        });
    },
    clickComment() {},
    openNotification() {
      if (window.clipboardData) {
        window.clipboardData.setData("text", window.location.href);
      } else {
        (function () {
          document.oncopy = function (e) {
            e.clipboardData.setData("text", window.location.href);
            e.preventDefault();
            document.oncopy = null;
          };
        })(window.location.href);
        document.execCommand("Copy");
      }
      this.$notification.open({
        message: "提示",
        description: "链接已复制到剪切板,快分享给你的好友吧",
        duration: 4.5,
      });
    },
  },
};
</script>

<style>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
.TopstoryItem-isFollow {
  padding-top: 15px;
}
.TopstoryItem {
  border-radius: 0;
  overflow: visible;
  overflow: initial;
  position: relative;
  padding: 16px 20px;
  outline: none;
}
.Card {
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.FeedSource-firstline {
  height: 25px;
}
.FeedSource-firstline {
  margin-bottom: 10px;
  color: #8590a6;
}
.css-1gomreu {
  position: relative;
  display: inline-block;
}
.AuthorInfo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-width: 654px;
  position: relative;
}
.AuthorInfo-content {
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  margin-left: 14px;
  overflow: hidden;
}
.AuthorInfo-head {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 15px;
  line-height: 1.1;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.ztext {
  word-break: break-word;
  line-height: 1.6;
  white-space: nowrap;
}
.AuthorInfo-name {
  color: #444;
}
.AuthorInfo-name {
  font-weight: 600;
  font-synthesis: style;
}
.ContentItem-title {
  margin-top: -4px;
  margin-bottom: -4px;
}
.ContentItem-title {
  line-height: 1.6;
  color: #121212;
}
.ContentItem-title {
  font-size: 18px;
  font-weight: 600;
  font-synthesis: style;
}
h2 {
  margin: 0;
  font: inherit;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.ContentItem-title + .ContentItem-meta {
  margin-top: 6px;
}
.ContentItem-meta {
  font-size: 15px;
  color: #646464;
}
.RichContent {
  line-height: 1.67;
}
.RichContent {
  line-height: 1.67;
}
a {
  color: #000000;
  text-decoration: none;
}
a:-webkit-any-link {
  color: #324bed;
  cursor: pointer;
  text-decoration: underline;
}
.AuthorInfo-avatar {
  vertical-align: top;
}
.read {
  display: flex;
  margin-top: 10px;
}
.css-dhor58 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  max-width: 100%;
  height: auto;
  background-color: #ffffff;
  width: 24px;
  height: 24px;
  border-radius: 2px;
}
.Avatar {
  background: #fff;
  border-radius: 2px;
}
.ContentItem-title {
  margin-top: -4px;
  margin-bottom: -4px;
}
.ContentItem-title {
  line-height: 1.6;
  color: #121212;
}
.ContentItem-title {
  font-size: 18px;
  font-weight: 600;
  font-synthesis: style;
}
h2 {
  margin: 0;
  font: inherit;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.ContentItem-title + .ContentItem-meta {
  margin-top: 6px;
}
.ContentItem-meta {
  font-size: 15px;
  color: #646464;
}
.RichContent.is-collapsed .RichContent-inner {
  max-height: 100px;
}
.RichContent-inner {
  margin-top: 9px;
  margin-bottom: -4px;
  overflow: hidden;
}
.css-79elbk {
  position: relative;
}
.RichContent.is-collapsed:not(.RichContent--unescapable)
  .CopyrightRichText-richText {
  white-space: normal;
}
.css-4em6pe {
  word-break: break-word;
  line-height: 1.6;
}
.ztext {
  word-break: break-word;
  line-height: 1.6;
}
.ContentItem-more {
  padding: 0;
  margin-left: 4px;
  color: #175199;
}
.Button--plain {
  height: auto;
  padding: 0;
  font-size: medium;
  line-height: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
}
.Button {
  color: #8590a6;
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
.ContentItem-actions {
  clear: both;
}
.ContentItem-actions {
  background: #fff;
}
.ContentItem-actions {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 20px;
  margin: 0 -20px -10px;
  color: #646464;
}
.TopstoryItem
  .ContentItem-actions
  .Button:not(.Button--plain):not(.Button--link) {
  line-height: 30px;
  padding: 0 12px;
}
.VoteButton {
  border-color: transparent;
}
.VoteButton {
  background: rgba(5, 109, 232, 0.1);
}
.VoteButton {
  padding: 0 10px;
  color: #056de8;
}
.Button {
  color: #8590a6;
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
body {
  margin: 0;
}
.Card:last-child {
  margin-bottom: 0;
}
.Card {
  background: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 10px;
  overflow: hidden;
}
.Card {
  background: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 10px;
  overflow: hidden;
}
.Button--plain {
  background-color: transparent;
  border: none;
  border-radius: 0;
  height: auto;
  line-height: inherit;
  padding: 0;
}
.Button {
  color: #8590a6;
}
.Button {
  background: none;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 32px;
  padding: 0 16px;
  text-align: center;
}
.e27myof1 {
  margin-top: 0px;
  margin-bottom: 0px;
  cursor: default;
}
.css-pvcibd-TagWrap {
  padding: 0px 8px;
  font-size: 12px;
  height: 24px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(139, 132, 132);
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(222, 223, 226);
  border-radius: 12px;
  margin: 2px 10px 2px 0px;
}
.css-go5ofn-TagsContainer-StyledTags {
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin-top: 4px;
  margin-bottom: 4px;
}
a,
a:link,
a:active,
a:hover,
a:focus {
  text-decoration: none;
  color: #2d95b5;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  -webkit-text-decoration-skip: objects;
}
.css-dgtvym {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  margin-right: 10px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative;
}
</style>
