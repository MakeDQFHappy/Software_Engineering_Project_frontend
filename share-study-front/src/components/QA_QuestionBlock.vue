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
    <div class="css-go5ofn-TagsContainer-StyledTags">
      <div
        class="css-pvcibd-TagWrap e27myof1"
        v-for="(item, index) in Tags"
        :key="index"
      >
        <span>{{ item.value }}</span>
      </div>
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
    <div class="AuthorInfo-head" v-if="!QAQuestion.hasanswerer">
      <span class="UserLink AuthorInfo-name"
        ><div class="css-1gomreu">唔...看来还没有人回答这个问题</div></span
      >
    </div>
    <div v-if="QAQuestion.hasanswerer">
      <div
        v-for="(item, index) in QuestionAnswers"
        :key="index"
        :QAAnswer="item"
      >
        <QA_AnswerBlock
          :QAAnswer="item"
          :has_adopted_answer="has_adoptedanswer"
          :questionaskerid="question_askerid"
        ></QA_AnswerBlock>
      </div>
    </div>
  </div>
</template>

<script>
import QA_AnswerBlock from "@/components/QA_AnswerBlock.vue";
import { getAnswer, answerQuestion, getTags } from "@/api/QA";
export default {
  data() {
    return {
      modal2Visible: false,
      Inputanswer: "",
      QuestionAnswers: [],
      message: [],
      message1: [],
      message2: [],
      Tags: [],
      has_adoptedanswer: true,
      question_askerid: "",
    };
  },
  components: { QA_AnswerBlock },
  inject: ["reload"],
  props: ["QAQuestion"],
  mounted() {
    this.getAnswersReq();
    this.getTagsReq();
    this.has_adoptedanswer = this.QAQuestion.hasadoptedanswer;
    this.question_askerid = this.QAQuestion.questionaskerid;
  },
  methods: {
    answer() {
      console.log("这是回答问题函数");
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
      console.log("这是请求答案函数");
      this.Tags = [];
      getTags(this.QAQuestion.questionid)
        .then((response) => {
          if (response.status == 200) {
            this.Tags = response.data;
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
    getTagsReq() {
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
.RichContent-inner {
  margin-top: 9px;
  margin-bottom: -4px;
  overflow: hidden;
}
.css-79elbk {
  position: relative;
}
.css-4em6pe {
  word-break: break-word;
  line-height: 1.6;
}
.ztext {
  word-break: break-word;
  line-height: 1.6;
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
.css-go5ofn-TagsContainer-StyledTags {
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin-top: 4px;
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
.e27myof1 {
  margin-top: 0px;
  margin-bottom: 0px;
  cursor: default;
}
</style>
