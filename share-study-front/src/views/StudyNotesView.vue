<template>
  <div>
    <div class="article-detail">
      <div class="article-container">
        <div class="article-container__content">
          <div class="title-container">
            <h1 class="title"><!---->{{ title }}</h1>
            <!---->
            <div class="article-read-panel" data-v-1d1eb212="">
              <div class="article-read-info" data-v-1d1eb212="">
                <!----><span class="publish-text" data-v-1d1eb212=""
                  >2022-10-27 13:07</span
                ><span data-v-1d1eb212="">112.6万阅读</span> ·
                <span data-v-1d1eb212="">14.9万喜欢</span> ·
                <span data-v-1d1eb212="">51评论</span
                ><!---->
              </div>
            </div>
          </div>
          <div class="article-up-info" data-v-904253a6="">
            <div class="up-left" data-v-904253a6="">
              <div class="avatar-container" data-v-904253a6="">
                <a
                  href="//space.bilibili.com/25150765"
                  target="_blank"
                  data-v-904253a6=""
                >
                  <div class="bili-avatar" style="width: 100%; height: 100%">
                    <img
                      class="bili-avatar-img bili-avatar-face bili-avatar-img-radius"
                      data-src="https://sse.tongji.edu.cn/__local/F/F7/8C/FBF06C6434CF18D2B095068E3B4_0177F6A3_FF81.jpg?e=.jpg"
                      alt=""
                      src="https://sse.tongji.edu.cn/__local/F/F7/8C/FBF06C6434CF18D2B095068E3B4_0177F6A3_FF81.jpg?e=.jpg"
                    />

                    <span
                      class="bili-avatar-icon bili-avatar-right-icon bili-avatar-icon-personal"
                    ></span>
                  </div>
                </a>
              </div>
              <div data-v-904253a6="">
                <div class="up-name-pannel" data-v-904253a6="">
                  <a
                    href="//space.bilibili.com/25150765"
                    target="_blank"
                    class="up-name"
                    data-v-904253a6=""
                  >
                    {{ userName }}</a
                  >
                </div>
                <div class="avatar-info-pannel" data-v-904253a6="">
                  <span class="fans" data-v-904253a6="">粉丝：</span
                  ><span class="fans-num" data-v-904253a6="">9.1万</span
                  ><span class="view" data-v-904253a6="">文章：</span
                  ><span class="view-num" data-v-904253a6="">31</span>
                </div>
              </div>
            </div>
            <div
              class="up-btn"
              style="width: 128px; height: 32px"
              data-v-d9ea6c32=""
              data-v-904253a6=""
            >
              <span class="follow-btn unfollow" data-v-d9ea6c32=""
                ><i class="iconfont icon-add" data-v-d9ea6c32=""></i> 关注</span
              ><!---->
            </div>
            <!---->
          </div>
          <div class="title-line"></div>
          <div id="article-content" class="article-content">
            <div class="view-note">
              <div class="page-loading" style="display: none">
                <div class="loading-icon"></div>
                <p>正在玩命加载…</p>
              </div>

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
                    <div v-html="content"></div>



                    <p><br /></p>
                  </div>
                  <div
                    class="ql-clipboard"
                    contenteditable="false"
                    tabindex="-1"
                  ></div>

                  <div class="ql-tooltip ql-hidden">
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
                  </div>
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
                ><span class="toolbar-item__num" data-v-ed0b497e="">1.1万</span>
              </div>
              <div class="toolbar-item" data-v-ed0b497e="" @click="onClick">
                <canvas
                  width="35"
                  height="35"
                  class="ring-progress"
                  style="width: 35px; height: 35px; left: 13px; top: 7px"
                  data-v-ed0b497e=""
                ></canvas
                ><!----><i class="iconfont icon-money" data-v-ed0b497e=""></i
                ><span class="toolbar-item__num" data-v-ed0b497e="">162</span>
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
                ><span class="toolbar-item__num" data-v-ed0b497e="">196</span>
              </div>
              <div class="toolbar-item" data-v-ed0b497e="">
                <i class="iconfont icon-comment" data-v-ed0b497e=""></i
                ><span class="toolbar-item__num" data-v-ed0b497e="">1</span>
                <div data-v-ed0b497e="" class="comment-btn"></div>
              </div>
            </div>
            <div class="to-top" data-v-ed0b497e="">
              <i class="iconfont icon-top" data-v-ed0b497e=""></i>
            </div>
            <!---->
          </div>
        </div>

        <CommentList :comments="comments"></CommentList>

        <ReplyBox :noteID="noteID"></ReplyBox>
      </div>
    </div>
  </div>
</template>

<script>
import StudyNotes from "@/components/StudyNotes.vue";
import CommentList from "@/components/CommentList.vue";

import Tinymce from "../components/editor.vue";

import "../css/bilibiliCSS/article-web.0.632594b47daaf024f9a5e1d008068dd42772be3f.css";
import "../css/bilibiliCSS/article-web.1.632594b47daaf024f9a5e1d008068dd42772be3f.css";
import "../css/bilibiliCSS/light.css";
import "../css/bilibiliCSS/light_u.css";
import "../css/bilibiliCSS/map.css";

import StudyNoteItem from "@/components/StudyNoteItem.vue";
import ReplyBox from "@/components/ReplyBox.vue";

import axios from "axios";

import moment from "moment";

export default {
  name: "StudyNotes-view",
  mounted() {
    //Tinymce.init({});
    this.noteID = this.$route.query.noteID;
    console.log(this.noteID);
    axios
      .get("/download", {
        params: { noteID: this.noteID },
      })
      .then((res) => {
        this.userName = res.data.userName;
        this.title = res.data.title;
        this.content = res.data.content;
        console.log("数据：", this.content);
      });

    axios
      .get("/get_comments", {
        params: { noteID: this.noteID },
      })
      .then((res) => {
        console.log("数据：", res.data);
        for (var index in res.data) {
          var note = res.data[index];
          var newNoteItem = {
            noteID: note.study_note_id,
            content: note.CommentContent,
            likeNum: 10,
            starNum: 10,
            commentNum: 10,
            isLiked: false, //这个用户是否点赞和收藏
            isStared: true,

            author: note.UserName,
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            datetime: moment().subtract(1, "days"),
          };
        
          this.comments.push(newNoteItem);
        }
      });
      axios
      .get("/get_likes_info", {
        params: { noteID: this.noteID,
                  userID: 1,
                  targetID: this.noteID
        },
      })
      .then((res) => {
        this.userName = res.data.userName;
        this.title = res.data.title;
        this.content = res.data.content;
        console.log("数据：", res);
      });
  },

  data() {
    return {
      noteID: 0,
      title: "",
      content: "",
      comment: "",
      comments: [],
      userName: "",

      form: {
        content: "",
      },
    };
  },
  methods: {
    onClick() {
      console.log(13133213123);
    },
    makeComment() {
      let formData = new FormData();
      formData.append("userID", 1);
      formData.append("targetID", this.noteID);
      formData.append("content", this.comment);

      axios.post("/make_comment", formData).then((res) => {
        console.log("数据：", res);
      });
    },
  },
  components: {
    StudyNotes,
    Tinymce,
    StudyNoteItem,
    CommentList,
    moment,
    ReplyBox
  },
};
</script>
