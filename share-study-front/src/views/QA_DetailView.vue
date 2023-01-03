<template>
  <div>
    <div class="article-detail">
      <div class="article-container">
        <div class="article-container__content">
          <div class="title-container">
            <div class="article-read-panel" data-v-1d1eb212="">
              <div class="article-read-info" data-v-1d1eb212="">
                <span class="publish-text" data-v-1d1eb212="">{{
                  answer.createtime
                }}</span>
              </div>
            </div>
          </div>
          <div class="article-up-info" data-v-904253a6="">
            <div class="up-left" data-v-904253a6="">
              <div class="avatar-container" data-v-904253a6="">
                <!-- <div class="bili-avatar" style="width: 100%; height: 100%"> -->
                <a-avatar :src="answer.answereravatar" :size="40" icon="user" />

                <span
                  class="bili-avatar-icon bili-avatar-right-icon bili-avatar-icon-personal"
                ></span>
                <!-- </div> -->
              </div>
              <div data-v-904253a6="">
                <div class="up-name-pannel" data-v-904253a6="">
                  {{ answer.answerername }}
                </div>
              </div>
            </div>
          </div>
          <div class="title-line"></div>
          <div id="article-content" class="article-content">
            <div class="view-note">
              <!-- <div class="page-loading" style="display: none">
                <div class="loading-icon"></div>
                <p>正在玩命加载…</p>
              </div> -->

              <div class="note-content">
                <!---->
                <div
                  class="editor-innter ql-container ql-snow ql-disabled"
                  style=""
                >
                  <div
                    class="ql-editor"
                    data-gramm="false"
                    contenteditable="false"
                  >
                    <div>{{ answer.answercontent }}</div>

                    <!-- <v-html-panel
                      :url.asyc="'https://tj-software-engineer.oss-cn-shanghai.aliyuncs.com/note123123.html'"
                    ></v-html-panel> -->

                    <p><br /></p>
                  </div>
                  <!-- <div
                    class="ql-clipboard"
                    contenteditable="false"
                    tabindex="-1"
                  ></div> -->

                  <!-- <div class="ql-tooltip ql-hidden">
                    <a
                      class="ql-preview"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="about:blank"
                    ></a
                    ><input
                      type="text"
                      data-formula="e=mc^2"
                      data-link="https://quilljs.com"
                      data-video="Embed URL"
                    /><a class="ql-action"></a><a class="ql-remove"></a>
                  </div> -->
                </div>
              </div>
              <div id="hidden-toolbar" class="ql-toolbar ql-snow"></div>
              <div id="hidden-toolbar"></div>

              <!---->
            </div>
          </div>
          <div class="article-footer-box"><!----><!----></div>

          <div class="right-side-bar on" data-v-ed0b497e="">
            <!---->
            <div class="side-toolbar" data-v-ed0b497e="">
              <div class="toolbar-item" data-v-ed0b497e="">
                <i class="iconfont icon-like" data-v-ed0b497e=""></i
                ><span class="toolbar-item__num" data-v-ed0b497e="">{{
                  answer.likenum
                }}</span>
              </div>
              <div class="toolbar-item" data-v-ed0b497e="">
                <canvas
                  width="35"
                  height="35"
                  class="ring-progress"
                  style="width: 35px; height: 35px; left: 13px; top: 7px"
                  data-v-ed0b497e=""
                ></canvas
                ><!----><i class="iconfont icon-collect" data-v-ed0b497e=""></i
                ><span class="toolbar-item__num" data-v-ed0b497e="">{{
                  answer.starnum
                }}</span>
              </div>
              <div class="toolbar-item" data-v-ed0b497e="">
                <i class="iconfont icon-comment" data-v-ed0b497e=""></i
                ><span class="toolbar-item__num" data-v-ed0b497e="">{{
                  answer.commentnum
                }}</span>
                <div data-v-ed0b497e="" class="comment-btn"></div>
              </div>
            </div>
            <div class="to-top" data-v-ed0b497e="">
              <i class="iconfont icon-top" data-v-ed0b497e=""></i>
            </div>
            <!---->
          </div>
        </div>
        <div class="Comments-container css-plbgu">
          <div class="css-79elbk">
            <div class="css-1fo89v5">
              <div class="css-dgtvym">
                <a-avatar :src="answer.answereravatar" :size="40" icon="user" />
              </div>
              <a-input
                size="large"
                placeholder="发布一条友善的评论吧"
                v-model="inputcomment"
              />
              <a-button
                type="link"
                class="Button--plain Button--withIcon Button--withLabel"
                @click="leaveComment()"
              >
                <span style="display: inline-flex; align-items: center"></span
                >发布
              </a-button>
            </div>
            <div class="css-z07uxh">
              <div class="css-we6n55">
                <div class="css-vpssrj">
                  <div class="css-1k10w8f">{{ answer.commentnum }} 条评论</div>
                </div>
                <!-- <div class="css-1hnxfhy">
              <div class="css-gjiv4z">默认</div>
              <div class="css-1v9si9f">最新</div>
            </div> -->
              </div>
              <p>
                --------------------------------------------------------------------------------------------------------------------
              </p>

              <div v-if="answer.hascomment">
                <div
                  v-for="(item, index) in AnswerComments"
                  :key="index"
                  :AnswerComment="item"
                >
                  <QA_CommentBlock :AnswerComment="item"></QA_CommentBlock>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/bilibiliCSS/article-web.0.632594b47daaf024f9a5e1d008068dd42772be3f.css";
import "../css/bilibiliCSS/article-web.1.632594b47daaf024f9a5e1d008068dd42772be3f.css";
import "../css/bilibiliCSS/light.css";
import "../css/bilibiliCSS/light_u.css";
import "../css/bilibiliCSS/map.css";
import QA_CommentBlock from "@/components/QA_CommentBlock.vue";
import { getAnswerById, getAnswerComments, makeComment } from "@/api/QA";
export default {
  mounted() {
    this.answerid = this.$route.query.answerid;
    this.getAnswersReq();
    this.getCommentsReq();
  },

  data() {
    return {
      answerid: "",
      inputcomment: "",
      AnswerComments: [],
      title: "",
      content: "",
      comment: "",
      comments: [],
      message: [],
      userName: "",
      form: {
        content: "",
      },
      answer: [],
    };
  },
  inject: ["reload"],
  components: { QA_CommentBlock },
  methods: {
    leaveComment() {
      makeComment(this.answerid, this.inputcomment)
        .then((response) => {
          if (response.status == 200) {
            this.reload();
            this.message.push(response.data);
            this.$message.success("评论成功");
          } else {
            this.$message.error("评论失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("评论失败");
        });
      this.inputcomment = "";
    },
    getCommentsReq() {
      getAnswerComments(this.answerid)
        .then((response) => {
          if (response.status == 200) {
            this.AnswerComments = response.data;
            this.$message.success("获取评论成功");
          } else {
            this.$message.error("获取评论失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("获取评论失败");
        });
    },
    getAnswersReq() {
      getAnswerById(this.answerid)
        .then((response) => {
          if (response.status == 200) {
            this.answer = response.data;
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
  },
};
</script>
<style>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
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
.read {
  display: flex;
  margin-top: 10px;
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
body {
  margin: 0;
}
.Button--plain {
  background-color: transparent;
  border: none;
  border-radius: 0;
  height: auto;
  line-height: inherit;
  padding: 0;
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
.css-plbgu {
  box-sizing: border-box;
  margin: 10px 0px 0px;
  min-width: 0px;
}
.css-79elbk {
  position: relative;
}
.css-1fo89v5 {
  box-sizing: border-box;
  margin: 0px 0px 10px;
  min-width: 0px;
  flex: 1 1 auto;
  display: flex;
}
.css-1oi6kgx {
  box-sizing: border-box;
  margin: 0px 10px 0px 0px;
  min-width: 0px;
  max-width: 100%;
  background-color: rgb(255, 255, 255);
  width: 40px;
  height: 40px;
  border-radius: 3px;
  flex: 0 0 auto;
}
.Avatar {
  background: #fff;
  border-radius: 2px;
}
.css-x0pxoz {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  border-radius: 4px;
  border: 1px solid rgb(235, 235, 235);
  flex: 1 1 auto; /*
padding: 8px 12px; */
}
.css-i6bazn {
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
}
.css-ip4bff {
  font-size: 15px;
  border: none !important;
  background: none !important;
}
.Editable {
  padding: 0;
  position: relative;
}
.InputLike {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 7px 12px;
}
.css-ip4bff .Dropzone {
  min-height: auto !important;
}
.css-ip4bff .Dropzone {
  min-height: auto !important;
}
.css-ip4bff .RichText {
  padding: 0px;
}
.Editable-content {
  cursor: text;
  padding: 6px 12px;
}
.Dropzone {
  position: relative;
}
.ztext {
  line-height: 1.6;
  word-break: break-word;
}
.ztext > :last-child {
  margin-bottom: 0;
}
.ztext > :first-child {
  margin-top: 0;
}
.css-ip4bff .public-DraftEditorPlaceholder-root {
  color: rgb(153, 153, 153);
}
.Editable .public-DraftEditorPlaceholder-root {
  color: #8590a6;
  pointer-events: none;
  position: absolute;
}
.css-ip4bff .Editable-unstyled {
  margin: 0px !important;
}
.Editable-styled:last-child,
.Editable-unstyled:last-child {
  margin-bottom: 0;
}
.Editable-styled:first-child,
.Editable-unstyled:first-child {
  margin-top: 0;
}
.Editable-styled,
.Editable-unstyled {
  margin: 0 0 1.4em;
}
.css-z07uxh {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  position: relative;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 4px;
  flex-direction: column;
  -webkit-box-align: stretch;
  align-items: stretch;
  display: flex;
}
.css-we6n55 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  position: relative;
  flex: 0 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  display: flex;
}
.css-vpssrj {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 15px;
  color: rgb(68, 68, 68);
  font-weight: 600;
}
.css-1k10w8f {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  cursor: default;
}
.css-59erns {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  flex: 1 1 auto;
  display: flex;
}
.css-1hnxfhy {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  border: 2px solid rgb(246, 246, 246);
  border-radius: 3px;
  font-size: 12px;
  line-height: 24px;
  font-weight: 600;
  background-color: rgb(246, 246, 246);
  display: flex;
}
.css-gjiv4z {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(18, 18, 18);
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
  width: 50px;
  height: 24px;
  background-color: rgb(255, 255, 255);
}
.css-1v9si9f {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(128, 128, 128);
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
  width: 50px;
  height: 24px;
  background-color: transparent;
}
.css-840pn3 {
  flex: 1 1 auto;
  position: relative;
}
.css-1frn93x {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 100%;
}
.css-194v73m {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 10px 20px 14px;
}
.css-1jll2aj {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  flex: 0 0 auto;
}
.css-1gomreu {
  position: relative;
  display: inline-block;
}
.css-y06ck6 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(23, 81, 153);
  position: relative;
  display: block;
}
.css-1s1htbw {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  max-width: 100%;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  filter: brightness(0.95);
  display: block;
  position: relative;
  background-color: rgb(246, 246, 246);
  flex: 0 0 auto;
  text-indent: -9999px;
  overflow: hidden;
}
.css-14nvvry {
  box-sizing: border-box;
  margin: 0px 0px 0px 10px;
  min-width: 0px;
  flex: 1 1 auto;
}
.css-1besdh8 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: rgb(153, 153, 153);
  display: flex;
}
.css-swj9d4 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  flex: 0 1 auto;
  display: flex;
}
.css-1tww9qq {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  height: 16px;
  display: flex;
}
.css-1gomreu {
  position: relative;
  display: inline-block;
}
.css-1rd0h6f {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(68, 68, 68);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.css-1qe0v6x {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  justify-content: stretch;
  flex-wrap: wrap;
  flex: 1 999999 auto;
  display: flex;
  max-height: 30px;
  overflow: hidden;
}
.css-1ssbn0c {
  height: 30px;
}
.css-zgte1c {
  margin: 2px;
  cursor: pointer;
  flex-shrink: 0;
}
.css-1ygdre8 {
  box-sizing: border-box;
  margin: 4px 0px 0px;
  min-width: 0px;
  color: rgb(68, 68, 68);
  overflow-wrap: break-word;
  font-size: 15px;
  line-height: 21px;
}
.css-dbby2p {
  box-sizing: border-box;
  margin: 4px 0px 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  display: flex;
}
.css-82fsyv {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  flex: 0 0 auto;
  font-size: 14px;
  color: rgb(153, 153, 153);
  display: flex;
}
.css-12cl38p {
  box-sizing: border-box;
  margin: 0px 4px 0px 0px;
  min-width: 0px;
}
.css-nm6sok {
  color: rgb(153, 153, 153);
  height: 16px;
  line-height: 16px;
  box-sizing: border-box;
  font-size: 14px;
  margin: 0px 4px;
}
.css-18opwoy {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  flex: 0 0 auto;
  display: flex;
}
.css-18opwoy .Button {
  margin-left: 16px;
}
.css-1o56bgb {
  display: inline-block;
  padding: 0px;
  font-size: 14px;
  line-height: inherit;
  color: rgb(133, 144, 166);
  text-align: center;
  cursor: pointer;
  background: none transparent;
  border: none;
  border-radius: 0px;
  height: auto;
}
.css-15ro776 {
  margin-right: 4px;
}
.css-18opwoy .Button {
  margin-left: 16px;
}
.css-h1yvwn {
  display: inline-block;
  padding: 0px;
  font-size: 14px;
  line-height: inherit;
  color: rgb(133, 144, 166);
  text-align: center;
  cursor: pointer;
  background: none transparent;
  border: none rgb(133, 144, 166);
  border-radius: 0px;
  height: auto;
}
.css-15ro776 {
  margin-right: 4px;
}
</style>
