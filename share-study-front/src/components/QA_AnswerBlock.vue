<template>
  <div>
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
                    :src="QAAnswer.answereravatar"
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
                    @click="openuserlink()"
                    onmouseover="this.style.color='#056de8';"
                    onmouseout="this.style.color='#000000';"
                  >
                    {{ QAAnswer.answerername }}
                  </button>
                </div></span
              >
            </div>
          </div>
        </div>
        <div class="css-1gomreu">
          <a-button
            v-if="adoptcondition()"
            @click="adopt(QAAnswer.answerid)"
            onmouseover="this.style.color='#056de8';"
            onmouseout="this.style.color='#8590a6';"
          >
            采纳
          </a-button>
          <a-button v-if="isAdopted" disabled> 已采纳 </a-button>
        </div>
      </div>
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
                >{{ QAAnswer.answercontent }}
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
            v-if="!isLiked"
            type="link"
            style="color: black"
            @click="click_Like(QAAnswer.answerid)"
            v-show="!isLiked"
          >
            <a-icon type="like" />
            <span>{{ this.likeNum }}</span>
          </a-button>
          <a-button
            v-if="isLiked"
            type="link"
            style="color: red"
            @click="undo_Like(QAAnswer.answerid)"
            v-show="isLiked"
          >
            <a-icon type="like" theme="filled" />
            <span>{{ this.likeNum }}</span>
          </a-button>
          <!-- <a-button
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
          </a-button> -->
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
    <div class="Comments-container css-plbgu">
      <div class="css-79elbk">
        <div>
          <div class="css-1fo89v5">
            <img
              class="Avatar css-1oi6kgx"
              src="https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=32738c0c"
              srcset="
                https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=32738c0c 2x
              "
            />
            <div class="css-x0pxoz">
              <div class="css-i6bazn">
                <div class="css-0">
                  <div class="InputLike css-ip4bff Editable">
                    <div
                      class="Dropzone Editable-content RichText RichText--editable RichText--clearBoth ztext"
                      style="min-height: 38px"
                    >
                      <div class="DraftEditor-root">
                        <div class="public-DraftEditorPlaceholder-root">
                          <div
                            class="public-DraftEditorPlaceholder-inner"
                            id="placeholder-c40bd"
                            style="white-space: pre-wrap"
                          >
                            评论千万条，友善第一条
                          </div>
                        </div>
                        <div class="DraftEditor-editorContainer">
                          <div
                            aria-describedby="placeholder-c40bd"
                            class="notranslate public-DraftEditor-content"
                            contenteditable="true"
                            spellcheck="true"
                            tabindex="0"
                            style="
                              outline: none;
                              user-select: text;
                              white-space: pre-wrap;
                              overflow-wrap: break-word;
                            "
                            role="textbox"
                          >
                            <div data-contents="true">
                              <div
                                class="Editable-unstyled"
                                data-block="true"
                                data-editor="c40bd"
                                data-offset-key="e6d13-0-0"
                              >
                                <div
                                  data-offset-key="e6d13-0-0"
                                  class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"
                                >
                                  <span data-offset-key="e6d13-0-0"
                                    ><br data-text="true"
                                  /></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                    <input
                      multiple=""
                      type="file"
                      accept="image/webp,image/jpg,image/jpeg,image/png,image/gif"
                      style="display: none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="css-z07uxh">
          <div class="css-we6n55">
            <div class="css-vpssrj">
              <div class="css-1k10w8f">1 条评论</div>
            </div>
            <div class="css-59erns"></div>
            <div class="css-1hnxfhy">
              <div class="css-gjiv4z">默认</div>
              <div class="css-1v9si9f">最新</div>
            </div>
          </div>
          <div class="css-840pn3">
            <div class="css-1frn93x">
              <div>
                <div class="css-194v73m">
                  <div class="css-1jll2aj">
                    <div class="css-1gomreu">
                      <a
                        href="https://www.zhihu.com/people/f43f4c804323db3e2e682b8171e51f88"
                        target="_blank"
                        class="css-y06ck6"
                        ><img
                          class="Avatar css-1s1htbw"
                          src="https://pic1.zhimg.com/v2-56d59dccda8e7e220b2351b835150f14_l.jpg?source=06d4cd63"
                          srcset="
                            https://pic1.zhimg.com/v2-56d59dccda8e7e220b2351b835150f14_l.jpg?source=06d4cd63 2x
                          "
                          alt="八大处"
                          loading="lazy"
                      /></a>
                    </div>
                  </div>
                  <div class="css-14nvvry">
                    <div class="css-1besdh8">
                      <div class="css-swj9d4">
                        <div class="css-1tww9qq">
                          <div class="css-1gomreu">
                            <a
                              href="https://www.zhihu.com/people/f43f4c804323db3e2e682b8171e51f88"
                              target="_blank"
                              class="css-1rd0h6f"
                              >八大处</a
                            >
                          </div>
                          <div class="css-1qe0v6x">
                            <div class="css-1ssbn0c"></div>
                          </div>
                        </div>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        class="ZDI ZDI--Dots24 css-zgte1c"
                        fill="currentColor"
                      >
                        <path
                          d="M5.34 12a1.665 1.665 0 1 1-3.33 0 1.665 1.665 0 0 1 3.33 0ZM13.665 12a1.665 1.665 0 1 1-3.33 0 1.665 1.665 0 0 1 3.33 0ZM21.99 12a1.665 1.665 0 1 1-3.33 0 1.665 1.665 0 0 1 3.33 0Z"
                        ></path>
                      </svg>
                    </div>
                    <div class="CommentContent css-1ygdre8">
                      <p>
                        建议先认真学习并解读一下，什么叫“精英”。一个班级整体学习成绩水平的高与低，主要取决于班级里的中等生数量（即班级里的“中产阶级”），学霸只是起到标杆、示范作用。差等生只是起到配称和烘托作用。
                      </p>
                    </div>
                    <div class="css-dbby2p">
                      <div class="css-82fsyv">
                        <div class="css-12cl38p">23 小时前</div>
                        <span> · </span
                        ><span class="css-nm6sok" href="">IP 属地天津</span>
                      </div>
                      <div class="css-18opwoy">
                        <button type="button" class="Button css-1o56bgb">
                          <span
                            style="display: inline-flex; align-items: center"
                            >&ZeroWidthSpace;<svg
                              width="1.2em"
                              height="1.2em"
                              viewBox="0 0 24 24"
                              class="ZDI ZDI--ChatBubbleFill24 css-15ro776"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.75a9.25 9.25 0 1 0 4.737 17.197l2.643.817a1 1 0 0 0 1.25-1.25l-.8-2.588A9.25 9.25 0 0 0 12 2.75Z"
                                clip-rule="evenodd"
                              ></path></svg></span
                          >回复</button
                        ><button
                          type="button"
                          class="Button css-h1yvwn"
                          style="transform: none"
                        >
                          <span
                            style="display: inline-flex; align-items: center"
                            >&ZeroWidthSpace;<svg
                              width="1.2em"
                              height="1.2em"
                              viewBox="0 0 24 24"
                              class="ZDI ZDI--ThumbFill24 css-15ro776"
                              fill="currentColor"
                            >
                              <path
                                d="M8.5 4.078c0-1.834 1.986-2.979 3.573-2.06a4.826 4.826 0 0 1 2.379 4.71l-.114 1.022h3.581c2.53 0 4.334 2.454 3.58 4.868l-1.823 5.833a3.784 3.784 0 0 1-3.848 2.64c-2.372-.147-6.042-.341-8.828-.341H4.5A1.75 1.75 0 0 1 2.75 19V9.5c0-.967.784-1.75 1.75-1.75h.637a3.418 3.418 0 0 0 3.19-2.191c.115-.296.173-.611.173-.928v-.553Z"
                              ></path></svg></span
                          >1
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
import { clickLike, undoLike, adoptanswer } from "@/api/QA";
export default {
  data() {
    return {
      modal2Visible: false,
      Inputanswer: "",
      QuestionAnswers: [],
      message: [],
      message1: [],
      message2: [],
      likeNum: "",
      isLiked: false,
      isAdopted: false,
    };
  },
  inject: ["reload"],
  props: ["QAAnswer", "has_adopted_answer", "questionaskerid"],
  mounted() {
    this.likeNum = this.QAAnswer.likenum;
    this.isLiked = this.QAAnswer.isliked;
    this.isAdopted = this.QAAnswer.adopted;
  },
  methods: {
    adoptcondition() {
      if (
        !this.isAdopted &&
        this.questionaskerid == localStorage.getItem("userId") &&
        !this.has_adopted_answer
      )
        return true;
      else return false;
    },
    adopt(answerid) {
      let self = this;
      this.$confirm({
        title: "是否确认采纳此回答？",
        content: (h) => <div style="color:red;">注意,此操作将不可逆</div>,
        onOk() {
          self.calladopt(answerid);
        },
        onCancel() {},
      });
    },
    calladopt(answerid) {
      console.log("这是采纳函数");
      adoptanswer(answerid)
        .then((response) => {
          if (response.status == 200) {
            this.message1.push(response.data);
            this.$message.success("采纳成功");
            this.isAdopted = true;
          } else {
            this.$message.error("采纳失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("采纳失败");
        });
    },
    click_Like(answerid) {
      console.log("这是like函数");
      clickLike(answerid)
        .then((response) => {
          if (response.status == 200) {
            this.message1.push(response.data);
            this.$message.success("点赞成功");
            this.likeNum = this.likeNum + 1;
            this.isLiked = true;
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
      console.log("这是undolike函数");
      undoLike(answerid)
        .then((response) => {
          if (response.status == 200) {
            this.message2.push(response.data);
            this.$message.success("取消点赞成功");
            this.likeNum = this.likeNum - 1;
            this.isLiked = false;
          } else {
            this.$message.error("取消点赞失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("取消点赞失败");
        });
    },
    // clickStar() {
    //   this.QAQuestion.starNum += this.QAQuestion.isStared ? -1 : 1;
    //   this.QAQuestion.isStared = !this.QAQuestion.isStared;
    //   if (this.QAQuestion.isStared == true)
    //     this.$notification.open({
    //       message: "收藏成功",
    //       description: "已收藏在'我的收藏夹/提问'中",
    //       duration: 1.5,
    //     });
    //   else
    //     this.$notification.open({
    //       message: "已取消收藏",
    //       duration: 0.5,
    //     });
    // },
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
  flex: 1 1 auto;
  /* padding: 8px 12px; */
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
