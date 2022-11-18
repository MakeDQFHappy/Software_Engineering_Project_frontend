<template>
  <div class="css-wpffuk-layer1-RowWrapper-QuestionRowWrapper">
    <div class="css-1ki6sa0-DiscussionContentWrapper">
      <div class="css-1jidvwf-DiscussionContentInnerWrapper">
        <div class="css-p4o6m4-MetaData">
          <a-popover title="Title" trigger="hover">
            <template slot="content">
              <p>Content</p>
              <p>Content</p>
            </template>
            <a-avatar :size="22" icon="user" style="margin-right: 10px" />
          </a-popover>
          <a href="" class="css-1l949x6-Title">{{ note.title }}</a>
        </div>
        <div>
          <div class="css-go5ofn-TagsContainer-StyledTags">
            <div class="css-pvcibd-TagWrap e27myof1" v-for="tag in note.tags">
              <span>{{ tag }}</span>
            </div>
          </div>
          <div class="css-zsr2x-ContentWrapper">
            <a href="">
              <div class="css-wev55m-Summary-DiscussionSummary">
                {{ note.content }}
              </div>
            </a>
          </div>
          <div class="css-1s3ypfv-LinksContainer"></div>
        </div>
      </div>
      <div class="css-tsorzg-OperationWrapper">
        <div class="css-lo2uzj-OperationWrapper">
          <a-button
            v-if="!note.isLiked"
            type="link"
            style="color: black"
            @click="clickLike"
          >
            <a-icon type="like" />
            <span>{{ note.likeNum }}</span>
          </a-button>
          <a-button
            v-if="note.isLiked"
            type="link"
            style="color: red"
            @click="clickLike"
          >
            <a-icon type="like" theme="filled" />
            <span>{{ note.likeNum }}</span>
          </a-button>
          <a-button
            v-if="!note.isStared"
            type="link"
            style="color: black"
            @click="clickStar"
          >
            <a-icon type="star" />
            <span>{{ note.starNum }}</span>
          </a-button>
          <a-button
            v-if="note.isStared"
            type="link"
            style="color: yellow"
            @click="clickStar"
          >
            <a-icon type="star" theme="filled" />
            <span>{{ note.starNum }}</span>
          </a-button>
          <a-button type="link" style="color: black">
            <a-icon type="message" />
            <span>{{ note.commentNum }}</span>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["note"],
  data() {
    return {};
  },
  methods: {
    clickLike() {
      this.note.likeNum += this.note.isLiked ? -1 : 1;
      this.note.isLiked = !this.note.isLiked;
    },
    clickStar() {
      this.note.starNum += this.note.isStared ? -1 : 1;
      this.note.isStared = !this.note.isStared;
    },
    clickComment() {},
  },
};
</script>

<style scoped>
.css-tsorzg-OperationWrapper > div {
  border: none;
  margin-top: 0px;
  padding: 0px;
}
.css-lo2uzj-OperationWrapper {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: sticky;
  bottom: 0px;
  border-top: 1px solid rgba(var(--dsw-border-2-rgba));
  margin-top: 20px;
  padding: 20px 0px 11px;
}
.css-tsorzg-OperationWrapper {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 12px;
  margin-left: -9px;
}
.css-1s3ypfv-LinksContainer {
  margin-top: 8px;
}
.css-wev55m-Summary-DiscussionSummary {
  font-size: 14px;
  line-height: 24px;
  color: rgb(97, 94, 90);
  word-break: break-word;
  align-self: stretch;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.css-zsr2x-ContentWrapper {
  overflow: hidden;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 8px;
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
}

a,
a:link,
a:active,
a:hover,
a:focus {
  text-decoration: none;
  color: #2d95b5;
  /* text-dergb(45, 136, 181)n: none; */
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  -webkit-text-decoration-skip: objects;
}
.css-1l949x6-Title {
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  color: rgba(var(--grey-9-rgb), 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.css-p4o6m4-MetaData {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 24px;
}

.css-1jidvwf-DiscussionContentInnerWrapper {
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
}

.css-1ki6sa0-DiscussionContentWrapper {
  width: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-wpffuk-layer1-RowWrapper-QuestionRowWrapper {
  background: rgba(var(--dsw-layer-1-rgb), 1);
  padding: 16px;
  box-shadow: 0 1px 2px rgb(102, 100, 100), 0 2px 8px rgb(97, 94, 94);
  transition: box-shadow 0.3s ease-in-out 0s;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
</style>
