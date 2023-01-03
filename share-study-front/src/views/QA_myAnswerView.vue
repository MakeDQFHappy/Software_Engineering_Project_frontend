<template>
  <div class="Topstory">
    <div class="Topstory-container">
      <div class="Topstory-mainColumn">
        <div class="Topstory-mainColumnCard">
          <div class="Card Topstory-noMarginCard Topstory-tabCard">
            <!-- <nav class="TopstoryTabs Topstory-tabs">
              <a
                tabindex="0"
                class="TopstoryTabs-link Topstory-tabsLink"
                @click="openQA_myQuestion"
                >我的提问</a
              ><a
                tabindex="1"
                class="TopstoryTabs-link Topstory-tabsLink is-active"
                @click="openQA_myAnswer"
                >我的回答</a
              ><a
                tabindex="2"
                class="TopstoryTabs-link Topstory-tabsLink"
                @click="openQA_Recommend"
                >推荐</a
              >
              <a
                tabindex="3"
                class="TopstoryTabs-link Topstory-tabsLink"
                @click="openQA_myCollection"
                >我的收藏</a
              >
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <a-input-search
                placeholder="搜索"
                style="
                  width: 200px;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: flex;
                "
                @search="onSearch"
                class="TopstoryTabs-link Topstory-tabsLink"
              />
            </nav> -->
            <div><div class="Sticky" style=""></div></div>
            <div id="TopstoryContent" class="Topstory-content">
              <div class="ListShortcut">
                <div class="Topstory-follow">
                  <div class="" role="list">
                    <div
                      v-for="(item, index) in QAQuestionItems"
                      :key="index"
                      :QAQuestion="item"
                    >
                      <QA_QuestionBlock :QAQuestion="item"></QA_QuestionBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="css-1qyytj7"
        data-za-detail-view-path-module="RightSideBar"
        data-za-extra-module="{}"
      >
        <a
          aria-label="边栏锚点"
          aria-keyshortcuts="Shift+S"
          class="css-h9cq7d"
        ></a>
        <QA_Manager></QA_Manager>
      </div>
    </div>
  </div>
</template>

<script>
import QA_QuestionBlock from "@/components/QA_QuestionBlock.vue";
import QA_Manager from "@/components/QA_Manager.vue";
import { get_myAnswer, searchByQuestion } from "@/api/QA";
export default {
  name: "QA_myQuestionView",
  data() {
    return {
      QAQuestionItems: [],
    };
  },
  mounted() {
    this.get_myAnswerReq();
  },
  methods: {
    get_myAnswerReq() {
      this.QAQuestionItems = [];
      get_myAnswer()
        .then((response) => {
          if (response.status == 200) {
            this.QAQuestionItems = response.data;
            this.$message.success("获取我的回答请求成功");
          } else {
            this.$message.error("获取我的回答请求失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("获取我的回答请求失败");
        });
    },

    openQA_myQuestion() {
      this.$router.push("/QA_myQuestion");
    },
    openQA_myAnswer() {
      this.$router.push("/QA_myAnswer");
    },

    openQA_myCollection() {
      this.$router.push("/QA_myCollection");
    },

    openQA_Recommend() {
      this.$router.push("/QA_Recommend");
    },
    // onSearch(value) {
    //   this.$router.push({
    //     name: "QA_Search",
    //     params: { searchcontent: value },
    //   });
    // },
    onSearch(value) {
      console.log("这是搜索函数");
      this.QAQuestionItems = [];
      let a = value.toString();
      console.log(a);
      searchByQuestion(a)
        .then((response) => {
          if (response.status == 200) {
            console.log(response.data);
            this.QAQuestionItems = response.data;
            this.$message.success("搜索成功");
          } else {
            this.$message.error("搜索失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("搜索失败");
        });
    },
  },
  components: { QA_QuestionBlock, QA_Manager },
};
</script>

<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
.Topstory-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 1000px;
  padding: 0 16px px;
  margin: 10px auto;
}
.Topstory-mainColumn {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-right: 10px;
  margin-bottom: 0;
  width: 694px;
}
.Topstory-tabs {
  border-bottom: 1px solid #f0f2f7;
}
.TopstoryTabs {
  display: flex;
  height: 58px;
}
.TopstoryTabs-link {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 16px;
  margin: 0 22px;
}
.TopstoryTabs-link.is-active {
  color: #056de8;
}
.TopstoryTabs-link.is-active {
  font-weight: 500;
}
.Topstory-tabCard {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.Topstory-noMarginCard {
  margin-bottom: 0 !important;
}
.Topstory-mainColumnCard {
  -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
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
a {
  color: #000000;
  text-decoration: none;
}
a:-webkit-any-link {
  color: #000000;
  cursor: pointer;
  text-decoration: underline;
}
body {
  margin: 0;
}
.css-1qyytj7 {
  max-width: 296px;
  -webkit-align-self: normal;
  -ms-flex-item-align: normal;
  align-self: normal;
}
.css-h9cq7d {
  display: block;
  position: relative;
  top: -102px;
  width: 0px;
  height: 0px;
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
</style>
