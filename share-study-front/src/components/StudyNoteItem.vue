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
            <a-avatar
              :size="22"
              :src="note.userAvatar"
              icon="user"
              style="margin-right: 10px"
            />
          </a-popover>
          <a class="css-1l949x6-Title" @click="chargePoints"
            >{{ note.title }}
          </a>
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
            style="color:  rgb(36, 169, 225)"
            @click="clickLike"
          >
            <a-icon type="like" theme="filled" />
            <span>{{ note.likeNum }}</span>
          </a-button>

          <a-button
            v-if="!note.isStared"
            type="link"
            style="color: black"
            @click="clickCollect"
          >
            <a-icon type="star" />
            <span>{{ note.starNum }}</span>
          </a-button>
          <a-button
            v-if="note.isStared"
            type="link"
            style="color: rgb(36, 169, 225)"
            @click="clickCollect"
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
import axios from "axios";
import { chargePoints,like,cancelLike,collect,cancelCollect } from "@/api/studyNotes"
export default {
  props: ["note"],
  methods: {
    like() {
      let formData = new FormData();
      formData.append("userID", 1);
      formData.append("targetID", this.note.noteID);
      like(this.note.noteID).then(res=>{
        if(res.status==200){
          this.$message.success("点赞成功")
          this.note.likeNum += 1;
          this.note.isLiked = !this.note.isLiked;
        }
        else{
          this.$message.error("点赞失败")
        }
      }).catch(e=>{
        this.$message.error("点赞失败")
      })
      // axios.post("/like", formData).then((res) => {
      //   console.log("数据：", res);
      // });
    },
    cancelLike() {
      let formData = new FormData();
      formData.append("userID", 1);
      formData.append("targetID", this.note.noteID);
      console.log(this.note.noteID);
      cancelLike(this.note.noteID).then(res=>{
        if(res.status==200){
          this.$message.success("取消点赞成功")
          this.note.likeNum += -1;
          this.note.isLiked = !this.note.isLiked;
        }
        else{
          this.$message.error("取消点赞失败")
        }
      }).catch(e=>{
        this.$message.error("取消点赞失败")
      })
      // axios.post("/cancel_like", formData).then((res) => {
      //   console.log("数据：", res);
      // });
    },
    clickLike() {
      if (this.note.isLiked) {
        this.cancelLike();
      } else {
        this.like();
      }
      // this.note.likeNum += this.note.isLiked ? -1 : 1;
      // this.note.isLiked = !this.note.isLiked;
    },

    collect() {
      let formData = new FormData();
      formData.append("userID", 1);
      formData.append("targetID", this.note.noteID);
      collect(this.note.noteID).then(res=>{
        if(res.status==200){
          this.$message.success("收藏成功")
        }
        else{
          this.$message.error("收藏失败")
        }
      }).catch(e=>{
        console.log(e)
        this.$message.error("收藏失败")
      })
      // axios.post("/collect", formData).then((res) => {
      //   console.log("数据：", res);
      // });
    },
    cancelCollect() {
      let formData = new FormData();
      formData.append("userID", 1);
      formData.append("targetID", this.note.noteID);
      console.log(this.note.noteID);
      cancelCollect(this.note.noteID).then(res=>{
        if(res.status==200){
          this.$message.success("取消收藏成功")
        }
        else{
          this.$message.error("取消收藏失败")
        }
      }).catch(e=>{
        console.log(e)
        this.$message.error("取消收藏失败")
      })
      // axios.post("/cancel_collect", formData).then((res) => {
      //   console.log("数据：", res);
      // });
    },

    clickCollect() {
      if (this.note.isStared) {
        this.cancelCollect();
      } else {
        this.collect();
      }
      this.note.starNum += this.note.isStared ? -1 : 1;
      this.note.isStared = !this.note.isStared;
    },

    openStudyNote() {
      this.$router.push({
        path: "/studyNotes",
        query: {
          noteID: this.note.noteID,
        },
      });
    },
    clickComment() {},
    chargePoints() {
      console.log(this.note)
      console.log(this.note.isPaid);
      if (this.note.needPoints > 0 && !this.note.isPaid) {
        let self = this;
        this.$confirm({
          title: "该笔记需要积分",
          content: "是否支付" + this.note.needPoints + "积分来打开笔记",
          onOk() {
            chargePoints(self.note.sharerID,self.note.noteID,self.note.needPoints).then(res=>{
                if(res.status==200){
                  self.$message.success("支付成功")
                  self.openStudyNote();  
                }
                else{
                  self.$message.error("支付失败")
                }
              }).catch(e=>{
                console.log(e)
                self.$message.error("支付失败")
              })
            let formData = new FormData();
            formData.append("buyerID", 1);
            formData.append("sellerID", 5);
            formData.append("noteID", self.note.noteID);
            formData.append("points", self.note.needPoints);
            // axios.post("/charge_points", formData).then((res) => {
            //   console.log("数据：", res);

            //   self.openStudyNote();
            // });
          },
          onCancel() {},
        });
      } else {
        this.openStudyNote();
      }
    },
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
  box-shadow: 0 1px 2px rgb(160, 157, 157), 0 2px 2px rgb(141, 137, 137);
  transition: box-shadow 0.3s ease-in-out 0s;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
</style>
