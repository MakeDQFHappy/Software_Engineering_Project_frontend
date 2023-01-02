<template>
  <div>
    <div v-for="item in noteItems">
      <StudyNoteItem :note="item"></StudyNoteItem>
    </div>
  </div>
</template>

<script>
import "../css/bilibiliCSS/article-web.0.632594b47daaf024f9a5e1d008068dd42772be3f.css";
import "../css/bilibiliCSS/article-web.1.632594b47daaf024f9a5e1d008068dd42772be3f.css";
import "../css/bilibiliCSS/light.css";
import "../css/bilibiliCSS/light_u.css";
import "../css/bilibiliCSS/map.css";

import "../css/bilibiliCSS2/list.c737c523ce806f312f103d04372c2e00be688c11.css";

import StudyNotes from "@/components/StudyNotes.vue";

import Tinymce from "@/components/editor.vue";

import StudyNoteItem from "@/components/StudyNoteItemWhite.vue";

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

      isEnd: false,

      form: {
        content: "",
      },
      noteItems: [],
      page: 1,

      showFlag: false,
    };
  },
  methods: {
    getNotesInPage() {
      if (this.isEnd) {
        return;
      }
      axios
        .get("/get_user_notes", {
          params: { userID: 1, page: this.page++ },
        })
        .then((res) => {
          console.log("res", res.data);

          if (res.data.length == 0) {
            this.isEnd = true;
            return;
          }

          for (var index in res.data) {
            var data = res.data[index];
            var note = data.Note;

            var text = note.note_content;

            if (text) {
              let value = text.replaceAll(this.reg, "[图片]");
              text = htmlToText(value);
            }

            var newNoteItem = {
              noteID: note.study_note_id,
              sharerID: note.sharer_id,

              title: note.note_header,
              tags: note.tags,
              needPoints: note.points,
              userAvatar: note.user_avatar,

              content: text,
              likeNum: data.LikeNum,
              starNum: data.CollectNum,

              commentNum: data.CommentNum,
              isLiked: data.IsLiked, //这个用户是否点赞和收藏
              isStared: data.IsCollected,

              isPaid: data.IsPaid,
            };

            this.noteItems.push(newNoteItem);
          }
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
        this.getNotesInPage();
      }
    },

    openEditor() {
      this.showFlag = true;
    },

    onSearch(value) {
      axios
        .get("/search_notes", {
          params: { userID: 1, pattern: value },
        })
        .then((res) => {
          console.log("res", res.data);

          this.noteItems = [];

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
              sharerID: note.sharer_id,

              title: note.note_header,
              tags: note.tags,
              content: text,
              likeNum: data.LikeNum,
              starNum: 10,
              commentNum: 10,
              isLiked: data.IsLiked, //这个用户是否点赞和收藏
              isStared: true,

              isPaid: data.IsPaid,
              needPoints: note.points,
              userAvatar: note.user_avatar,
            };

            this.noteItems.push(newNoteItem);
          }
        });
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
