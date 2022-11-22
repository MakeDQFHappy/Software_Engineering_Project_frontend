<template>
  <div>
    <div>
      <div class="tab-content">
        <div class="page-content">
          <div class="left-side">
            <div class="categories-bar">
              <a class="tag-item on" data-tag-id="41">全部</a>

              <a class="tag-item on" data-tag-id="42">全部笔记</a>
            </div>

            <!-- <span>loading...</span> -->

            <div class="partitio-name">
              <div class="filter">
                <label>点赞数最多</label>
                <ul class="filter-btn-lst" style="display: none">
                  <li class="filter-btn" btn-tp="0">默认排序</li>
                  <li class="filter-btn" btn-tp="1">投稿时间排序</li>
                  <li class="filter-btn" btn-tp="3">评论数最多</li>
                  <li class="filter-btn" btn-tp="4">收藏数最多</li>
                  <li class="filter-btn" btn-tp="2">点赞数最多</li>
                </ul>
              </div>
            </div>




            <div class="article-list">
              <div class="article-list-holder">
                <div v-for="item in noteItems">
                  <StudyNoteItem :note="item"></StudyNoteItem>
                </div>
              </div>
            </div>

            <div class="tips-holder">
              <div class="error">
                <div class="icon-fail"></div>
                加载失败 <span class="reload">请点击重试</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a-input v-model:value="title" placeholder="TITLE" />
      <Tinymce class="setTinymce" :height="200" v-model="noteContent"></Tinymce>
      <a-button
        type="primary"
        @click="publishNotes"
        shape="round"
        size='large'
      >
        发布
      </a-button>
      <div v-for="(item, index) in notesList" :key="index">
        <div v-html="item"></div>
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

import StudyNotes from "@/components/StudyNotes.vue";

import Tinymce from "@/components/editor.vue";

import StudyNoteItem from "@/components/StudyNoteItem.vue";

import { unescape } from "html-escaper";
import { htmlToText } from "html-to-text";

import axios from "axios";
export default {
  name: "StudyNotes-view",
  mounted: function () {
    console.log(111);
    //Tinymce.init({});
    this.getNotesInPage();
  },
  data() {
    return {
      reg: /<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/g,
      noteContent: "",
      notesList: [],
      value: "",

      title: "",
      content: "",

      isEnd: false,

      form: {
        content: "",
      },
      noteItems: [],
      page: 1,
    };
  },
  methods: {
    getNotesInPage() {
      if (this.isEnd){
        return
      }
      axios
        .get("/get_all_notes", {
          params: { userID: 1 , page: this.page++},
        })
        .then((res) => {
          console.log("res", res.data);


          if (res.data.length == 0){
            this.isEnd = true
            return
          }

          for (var index in res.data) {
            var text = res.data[index].note_content;
            if (text) {
              let value = text.replaceAll(this.reg, "[图片]");
              text = htmlToText(value);
            }

            var data = res.data[index];
            var note = data.Note;
            var newNoteItem = {
              noteID: note.study_note_id,
              title: note.note_header,
              tags: ["历史遗留问题", "非常难以解决", "让人捉摸不透"],
              content: text,
              likeNum: data.LikeNum,
              starNum: 10,
              commentNum: 10,
              isLiked: data.IsLiked, //这个用户是否点赞和收藏
              isStared: true,
              needPoints: note.points,
            };

            this.noteItems.push(newNoteItem);
          }

        });
    },
    publishNotes() {
      // form-data 请求
      this.$router.go(0);
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.noteContent);
      console.log(formData);
      axios.post("/upload", formData).then((res) => {
        console.log("数据：", res);
      });
    },

    getNotes() {
      axios
        .get("/download", {
          params: { noteID: "1" },
        })
        .then((res) => {
          console.log("数据：", res);
          this.noteContent = res.data.content;
          this.notesList.push(res.data.content);
          console.log("数据：", this.notesList);
        });
    },
    lazyLoading() {
      // 滚动到底部，再加载的处理事件
      // 获取 可视区高度`、`滚动高度`、`页面高度`
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        // 滚动到底部，逻辑代码
        //事件处理
        console.log("滚动到底部，触发"); //此处可以添加数据请求
        this.getNotesInPage()
      }
    },

  },
  created() {
    window.addEventListener("scroll", this.lazyLoading); // 滚动到底部，再加载的处理事件
  },
  //页面离开后销毁，防止切换路由后上一个页面监听scroll滚动事件会在新页面报错问题
  destroyed() {
    window.removeEventListener("scroll", this.lazyLoading);
    //页面离开后销毁，防止切换路由后上一个页面监听scroll滚动事件会在新页面报错问题
  },
  components: {
    StudyNotes,
    Tinymce,
    StudyNoteItem,
  },
};
</script>

<style
  src="@/css/bilibiliCSS/list.0ac357f4669ca460e5f026632d649bd086927338.css"
  scoped
></style>
<style scoped>
.css-a11gpv-ContentWrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}
.css-qciawt-Wrapper {
  flex: 1 1 auto;
  height: 100%;
  max-width: 734px;
}
</style>
