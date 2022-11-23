<template>
  <div class="Card TopstoryItem TopstoryItem-isFollow" tabindex="0">
    <div class="FeedSource">
      <div class="FeedSource-firstline">
        <span
          ><span class="UserLink"
            ><div class="css-1gomreu">
              <button
                @click="openuserlink(QA.userlink)"
                onmouseover="this.style.color='#056de8';"
                onmouseout="this.style.color='#8590a6';"
              >
                {{ QA.username }}
              </button>
            </div></span
          ></span
        >
        提供了回答<span class="Bull"> · </span>{{ QA.date }}天前
      </div>
      <div class="AuthorInfo FeedSource-byline AuthorInfo--plain">
        <div class="AuthorInfo">
          <span class="UserLink AuthorInfo-avatarWrapper"
            ><div class="css-1gomreu">
              <button
                @click="openuserlink(QA.userlink)"
                onmouseover="this.style.color='#056de8';"
                onmouseout="this.style.color='#8590a6';"
              >
                <img
                  class="Avatar AuthorInfo-avatar css-dhor58"
                  src="https://sse.tongji.edu.cn/__local/7/8C/0E/AE7B71B95751451DA25F342F447_F7B7F920_12B65.png?e=.png"
                  alt="张颖"
                  id="userimg"
                />
              </button></div
          ></span>
          <div class="AuthorInfo-content">
            <div class="AuthorInfo-head">
              <span class="UserLink AuthorInfo-name"
                ><div class="css-1gomreu">
                  <button
                    type="text"
                    @click="openuserlink(QA.userlink)"
                    onmouseover="this.style.color='#056de8';"
                    onmouseout="this.style.color='#000000';"
                  >
                    {{ QA.username }}
                  </button>
                </div></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ContentItem AnswerItem">
      <h2 class="ContentItem-title">
        <div>
          <button
            @click="openquestion(QA.questionlink)"
            onmouseover="this.style.color='#056de8';"
            onmouseout="this.style.color='#000000';"
          >
            {{ QA.title }}
          </button>
        </div>
      </h2>
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
                >元宇宙(Metaverse),是人类运用数字技术构建的,由现实世界映射或超越现实世界,可与现实世界交互的虚拟世界
                具备新型社会体系的数字生活空间。
              </span>
            </div>
            <a
              target="_blank"
              type="button"
              class="ContentItem-more Button--plain"
              href="https://baike.baidu.com/item/%E5%85%83%E5%AE%87%E5%AE%99/58292530"
            >
              阅读全文
            </a>
          </div></span
        >
        <div class="ContentItem-actions">
          <span></span>
          <a-button
            class="Button VoteButton VoteButton--up"
            :style="{ background: '#F0F8FF' }"
          >
            <span style="display: inline-flex; align-items: center"
              ><div class="icons-list">
                <a-icon type="caret-up" />
              </div>
            </span>
            赞同</a-button
          >
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <a-button
            class="Button VoteButton VoteButton--down"
            :style="{ background: '#F0F8FF' }"
          >
            <span style="display: inline-flex; align-items: center"
              ><div class="icons-list">
                <a-icon type="caret-down" /></div></span
          ></a-button>
          <a-button
            type="link"
            class="ContentItem-action Button--plain Button--withIcon Button--withLabel"
          >
            <span style="display: inline-flex; align-items: center"
              ><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div class="icons-list">
                <a-icon type="message" /></div></span
            >200 条评论
          </a-button>
          <div class="Popover ShareMenu ContentItem-action">
            <div class="ShareMenu-toggler">
              <a-button
                type="link"
                class="Button--plain Button--withIcon Button--withLabel"
              >
                <span style="display: inline-flex; align-items: center">
                  <div class="icons-list">
                    <a-icon type="yuque" theme="filled" /></div></span
                >分享
              </a-button>
            </div>
          </div>
          <a-button
            type="link"
            class="ContentItem-action Button--plain Button--withIcon Button--withLabel"
          >
            <span style="display: inline-flex; align-items: center"
              ><div class="icons-list">
                <a-icon type="star" theme="filled" />
              </div> </span
            >收藏</a-button
          ><a-button
            type="link"
            class="ContentItem-action Button--plain Button--withIcon Button--withLabel"
          >
            <span style="display: inline-flex; align-items: center">
              <div>&nbsp;&nbsp;</div>
              <div class="icons-list">
                <a-icon type="heart" theme="filled" /></div></span
            >喜欢
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["QA"],
  created: {
    loadimg() {
      var object = document.getElementById("userimg");
      object.src = QA.userimg;
    },
  },
  methods: {
    openuserlink(src) {
      window.open(src, "_blank");
      // window.location.href = src;
    },
    openquestion(src) {
      window.open(src, "_blank");
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
  height: 24px;
}
.FeedSource-firstline {
  margin-bottom: 6px;
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
.FeedSource-byline {
  margin-bottom: 14px;
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
</style>
