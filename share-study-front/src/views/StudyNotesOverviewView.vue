<template>
  <div>
    <div>
      <div class="tab-content">
        <div class="nav-tab-bar">
          <a
            href="https://www.bilibili.com/read/home?from=category_17"
            target="_self"
            class="logo"
          >
          </a>
          <a
            target="_self"
            class="tab-item on"
            data-tab-id="0"


          >
            <span>推荐</span>
          </a>

          <a
            target="_self"
            class="tab-item"
            data-tab-id="2"
            @click="onSearch('软件工程')"
          >
            <span>软件工程</span>
          </a>

          <a
            target="_self"
            class="tab-item"
            data-tab-id="1"

            @click="onSearch('原神')"
          >
            <span>机械</span>
          </a>

          <a
            target="_self"
            class="tab-item"
            data-tab-id="28"

            @click="onSearch('考研')"
          >
            <span>艺术传媒</span>
          </a>

          <a
            target="_self"
            class="tab-item"
            data-tab-id="3"

            @click="onSearch('医学')"
          >
            <span>医学</span>
          </a>

          <a
            target="_self"
            class="tab-item"
            data-tab-id="29"

            @click="onSearch('计算机')"
          >
            <span>计算机</span>
          </a>

          <a
            target="_self"
            class="tab-item"
            data-tab-id="16"

            @click="onSearch('土木工程')"
          >
            <span>土木工程</span>
          </a>

          <a
            target="_self"
            class="tab-item"
            data-tab-id="17"

            @click="onSearch('土木工程')"
          >
            <span>物理</span>
          </a>

          <a
            target="_self"
            class="tab-item"
            data-tab-id="41"

            
            @click="onSearch('其他')"
          >
            <span>其他</span>
          </a>
        </div>
      </div>

      <div class="tab-content">
        <div class="page-content">
          <div class="left-side">
            <div class="categories-bar">
              <a class="tag-item on" data-tag-id="41">全部笔记</a>
              <a class="tag-item" data-tag-id="42">学习心得</a>
              <a class="tag-item" data-tag-id="43">复习资料</a>
              <a class="tag-item" data-tag-id="44">知识点详解</a>
              <a class="tag-item" data-tag-id="45">例题解读</a>

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

            <div class="article-list" v-if="loading && !isEnd">
              <div class="article-list-holder">
                <div v-for="index in 10">
                  <StudyNoteItemLoading></StudyNoteItemLoading>
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
          <div class="right-side scroll" style="margin: 0; padding: 0">
            <a-input-search
              placeholder="搜索笔记"
              style="width: 236px"
              @search="onSearch"
            />

            <div class="more">
              <div class="top-bar">
                <label>更多</label>
              </div>
              <a href="#">
                <div class="link">
                  <span class="icon" @click="openEditor"></span>
                  <p class="title" @click="openEditor">专栏投稿</p>
                  <p class="info" @click="openEditor">前去写文章</p>
                </div>
                  <div class="help">
                    <span class="icon"> </span>
                    <p class="title">专栏帮助</p>
                    <p class="info">查看专栏使用说明</p>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a-modal v-model="showFlag" @ok="handleOk" width="1300px" :footer="null" bodyStyle="height:660px">
        <Tinymce
          class="editor"
          v-model="noteContent"
          :show.sync="showFlag"
          style="margin-top:80px"
        ></Tinymce>
      </a-modal>

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

import "../css/bilibiliCSS2/list.c737c523ce806f312f103d04372c2e00be688c11.css";

import StudyNotes from "@/components/StudyNotes.vue";

import Tinymce from "@/components/editor.vue";

import StudyNoteItem from "@/components/StudyNoteItem.vue";
import StudyNoteItemLoading from "@/components/StudyNoteItemLoading.vue";
import { download,getAllNotes,searchNotes } from "@/api/studyNotes"
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
      loading:true,
    };
  },
  methods: {


    getNotesInPage() {
      if (this.isEnd) {
        return;
      }
      getAllNotes(this.page++).then(res=>{
        if(res.status==200){
          this.$message.success("获取笔记成功")
          console.log("res", res.data);
          if (res.data.length == 0) {
            this.isEnd = true;
            return;
          }else{
            this.isEnd = false
          }
          if (this.loading){
            this.loading = false;
          }
          for (var index in res.data) {
            var data = res.data[index];
            var note = data.Note;

            var text = note.note_content;

            if (text) {
              //let value = text.replaceAll(this.reg, "[图片]");
              text = htmlToText(text);
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
        }
        else{
          this.$message.error("获取笔记失败")
        }
      }).catch(e=>{
        console.log(e)
        this.$message.error("获取笔记失败")
      })
      // axios
      //   .get("/get_all_notes", {
      //     params: { userID: 1, page: this.page++ },
      //   })
      //   .then((res) => {
      //     console.log("res", res.data);


      //     if (res.data.length == 0) {
      //       this.isEnd = true;
      //       return;
      //     }else{
      //       this.isEnd = false
      //     }
      //     if (this.loading){
      //       this.loading = false;
      //     }
      //     for (var index in res.data) {
      //       var data = res.data[index];
      //       var note = data.Note;

      //       var text = note.note_content;

      //       if (text) {
      //         //let value = text.replaceAll(this.reg, "[图片]");
      //         text = htmlToText(text);
      //       }

      //       var newNoteItem = {
      //         noteID: note.study_note_id,
      //         sharerID: note.sharer_id,

      //         title: note.note_header,
      //         tags: note.tags,
      //         needPoints: note.points,
      //         userAvatar: note.user_avatar,

      //         content: text,
      //         likeNum: data.LikeNum,
      //         starNum: data.CollectNum,

      //         commentNum: data.CommentNum,
      //         isLiked: data.IsLiked, //这个用户是否点赞和收藏
      //         isStared: data.IsCollected,

      //         isPaid: data.IsPaid,
      //       };

      //       this.noteItems.push(newNoteItem);
      //     }
      //   });
    },
    
    getNotes() {
      download(this.noteID).then(res=>{
        if(res.status==200){
          this.userName = res.data.userName;
          this.title = res.data.title;
          this.content = res.data.content;
          console.log("数据：", this.content);
        }
        else{
          this.$message.error("获取笔记失败")
        }
      }).catch(e=>{
        console.log(e)
        this.$message.error("出错")
      })
      // axios
      //   .get("/download", {
      //     params: { noteID: "1" },
      //   })
      //   .then((res) => {
      //     console.log("数据：", res);
      //     this.noteContent = res.data.content;
      //     this.notesList.push(res.data.content);
      //     console.log("数据：", this.notesList);
      //   });
    },
    lazyLoading() {
      if (this.loading){
        return
      }
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

        this.loading = true
        this.getNotesInPage();
      }
    },

    openEditor() {
      this.showFlag = true;
    },

    onSearch(value) {
      this.isEnd = true
      searchNotes(value).then(res=>{
            if(res.status==200){
              this.$message.success("搜索成功")
              this.noteItems = [];
    
              for (var index in res.data) {
                var text = res.data[index].note_content;
                if (text) {
                  //let value = text.replaceAll(this.reg, "[图片]");
                  text = htmlToText(text);
                }
    
                var data = res.data[index];
                var note = data.Note;
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
            }
            else{
              this.$message.error("搜索失败")
            }
          }).catch(e=>{
            console.log(e)
            this.$message.error("搜索失败")
          })
      // axios
      //   .get("/search_notes", {
      //     params: { userID: 1, pattern: value },
      //   })
      //   .then((res) => {
      //     console.log("res", res.data);

      //     this.noteItems = [];

      //     for (var index in res.data) {
      //       var data = res.data[index];
      //       var note = data.Note;

      //       var text = note.note_content;

      //       if (text) {
      //         //let value = text.replaceAll(this.reg, "[图片]");
      //         text = htmlToText(text);
      //       }

      //       var newNoteItem = {
      //         noteID: note.study_note_id,
      //         sharerID: note.sharer_id,

      //         title: note.note_header,
      //         tags: note.tags,
      //         needPoints: note.points,
      //         userAvatar: note.user_avatar,

      //         content: text,
      //         likeNum: data.LikeNum,
      //         starNum: data.CollectNum,

      //         commentNum: data.CommentNum,
      //         isLiked: data.IsLiked, //这个用户是否点赞和收藏
      //         isStared: data.IsCollected,

      //         isPaid: data.IsPaid,
      //       };

      //       this.noteItems.push(newNoteItem);
      //     }
      //   });
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
    StudyNoteItemLoading,
  },
};
</script>

<style
  src="@/css/bilibiliCSS/list.0ac357f4669ca460e5f026632d649bd086927338.css"
  scoped
></style>
<style scoped>
.page-content .right-side.scroll {
  position: fixed;
  transform: translateY(-50px);
  -webkit-transform: translateY(-50px);
}
.nav-tab-bar {
  top: 72px;
  position: fixed;
  font-size: 0;
  transition: 0.2s;
  -webkit-transition: 0.2s;
}
.page-content .right-side .more .link .icon {
  background-image: url(data:image/png;base64,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);
}
.page-content .right-side .more .help{
  margin-top: 16px;
  padding-left: 56px;
  position: relative;
}
.page-content .right-side .more .link {
  margin-top: 16px;
  padding-left: 56px;
  position: relative;
}
.page-content .right-side .more .top-bar {
  border-bottom: 1px solid #e5e9ef;
  padding-bottom: 8px;
  font-size: 18px;
  color: #222;
}
.page-content .right-side .more {
  margin-top: 24px;
  padding-bottom: 20px;
}
.page-content .right-side {
  width: 260px;
  display: inline-block;
  font-size: 12px;
  vertical-align: top;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
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

.editor {
  position: fixed;
  height: 70%;
  width: 70%;
  border-radius: 0.25rem;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>
