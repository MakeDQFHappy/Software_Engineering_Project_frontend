<template>
  <div class="css-1oy4rvw" style="top: -2025.17px">
    <div class="css-19idom">
      <div
        class="Card CreatorEntrance GlobalSideBar-creator CreatorEntrance-link CreatorEntrance-Link--smallIcon"
        role="complementary"
        aria-label="创作中心卡片"
      >
        <div
          class="CreatorEntrance-hint ProfileSideCreator-creatorEntranceHint CreatorEntrancePage-hint--smallIcon"
        >
          <div class="icons-list">
            <a-icon type="bulb" />
          </div>

          <div class="CreatorEntrance-text">
            <div class="CreatorEntrance-indexPageTitle">
              <div class="css-zkfaav">创作中心</div>
            </div>
          </div>
          <!-- <a target="_blank" href="/creator/manage/creation/draft?type=answer"
            ><div class="css-186nt8z">
              草稿箱<span class="css-1tccpil">(0)</span>
            </div></a
          > -->
        </div>
        <div class="css-16vu25q">
          <div class="GlobalWriteV2">
            <div class="GlobalWriteV2-navTop">
              <a-button
                class="GlobalWriteV2-topItem"
                title="回答"
                type="link"
                @click="() => (modal1Visible = true)"
              >
                <a-modal
                  v-model="modal1Visible"
                  title="写下你的问题"
                  centered
                  @ok="() => (modal1Visible = false)"
                >
                  <p>some contents...</p>
                  <p>some contents...</p>
                  <p>some contents...</p>
                </a-modal>

                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  class="GlobalWriteV2-navIcon"
                  fill="currentColor"
                >
                  <g fill="#06F" fill-rule="evenodd">
                    <circle cx="20" cy="20" r="20" opacity=".12"></circle>
                    <path
                      fill-rule="nonzero"
                      d="M23.487 10.463c1.896 0 2.583.193 3.277.555a3.824 3.824 0 0 1 1.607 1.573c.371.678.569 1.35.569 3.206v8.472c0 1.855-.198 2.527-.569 3.205a3.824 3.824 0 0 1-1.607 1.573c-.694.363-1.381.556-3.277.556h-6.96c-1.895 0-2.583-.193-3.276-.556a3.824 3.824 0 0 1-1.608-1.573c-.37-.678-.568-1.35-.568-3.205v-8.472c0-1.855.197-2.528.568-3.206.37-.678.915-1.21 1.608-1.573.693-.362 1.38-.556 3.277-.556h6.959Zm0 2.08h-6.96c-1.407 0-1.836.081-2.273.31a1.72 1.72 0 0 0-.735.72c-.234.427-.317.847-.317 2.224v8.472c0 1.377.083 1.796.317 2.224.172.316.412.551.735.72.437.229.866.31 2.274.31h6.959c1.407 0 1.836-.081 2.274-.31a1.72 1.72 0 0 0 .735-.72c.234-.428.317-.847.317-2.224v-8.472c0-1.377-.083-1.797-.317-2.225a1.72 1.72 0 0 0-.735-.72c-.438-.228-.867-.309-2.274-.309Zm-1.991 9.778v1.873h-5.955V22.32h5.955Zm2.977-3.328v1.872h-8.932v-1.872h8.932Zm0-3.33v1.873h-8.932v-1.872h8.932Z"
                    ></path>
                  </g>
                </svg>
                <div class="GlobalWriteV2-topTitle">回答问题</div>
              </a-button>
              <!-- <button class="GlobalWriteV2-topItem">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  class="GlobalWriteV2-navIcon"
                  fill="currentColor"
                >
                  <g fill="#FF9607" fill-rule="evenodd">
                    <circle cx="20" cy="20" r="20" opacity=".12"></circle>
                    <path
                      fill-rule="nonzero"
                      d="M24.233 24.777v-9.555c0-.942-.748-1.706-1.67-1.706H13.61c-.922 0-1.67.764-1.67 1.707v9.554c0 .943.748 1.707 1.67 1.707h8.954c.921 0 1.669-.764 1.669-1.707Zm3.478-10.349a2.302 2.302 0 0 1 3.297.243c.367.434.57.989.57 1.563v7.532c0 1.32-1.047 2.389-2.337 2.389a2.308 2.308 0 0 1-1.53-.583l-1.475-1.306v.512c0 2.073-1.644 3.753-3.672 3.753H13.61c-2.028 0-3.672-1.68-3.672-3.753v-9.555c0-2.074 1.644-3.754 3.672-3.754h8.954c2.028 0 3.672 1.68 3.672 3.754v.51l1.475-1.305Zm-1.475 7.13 2.786 2.466a.33.33 0 0 0 .219.083.338.338 0 0 0 .334-.341v-7.532a.346.346 0 0 0-.082-.223.329.329 0 0 0-.47-.035l-2.787 2.466v3.116Z"
                    ></path>
                  </g>
                </svg>
                <div class="GlobalWriteV2-topTitle">发视频</div>
              </button> -->
              <!-- <button class="GlobalWriteV2-topItem" title="写文章">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  class="GlobalWriteV2-navIcon"
                  fill="currentColor"
                >
                  <g fill="none" fill-rule="evenodd">
                    <circle
                      cx="20"
                      cy="20"
                      r="20"
                      fill="#F4C807"
                      opacity=".12"
                    ></circle>
                    <path d="M6 6h28v28H6z"></path>
                    <path
                      fill="#F4C807"
                      fill-rule="nonzero"
                      d="m20.406 11.772-2.172 2.176h-2.29c-1.438 0-1.875.085-2.322.324-.33.176-.575.422-.751.752-.24.448-.324.886-.324 2.326v7.12c0 1.44.085 1.878.324 2.326.176.33.421.576.75.752.421.225.834.314 2.08.323l7.35.001c1.438 0 1.876-.084 2.323-.324.33-.176.575-.422.751-.752.24-.448.324-.886.324-2.326v-4.905l2.172-2.175v7.08c0 1.94-.202 2.643-.58 3.352a3.95 3.95 0 0 1-1.643 1.645c-.708.379-1.41.58-3.346.58h-7.108c-1.936 0-2.639-.201-3.347-.58a3.95 3.95 0 0 1-1.642-1.645c-.378-.71-.58-1.413-.58-3.352v-7.12c0-1.94.202-2.643.58-3.352a3.95 3.95 0 0 1 1.642-1.645c.708-.379 1.41-.58 3.347-.58h4.462Zm6.908-2.053c.384.116.747.338 1.168.759l.188.189c.42.421.642.785.758 1.17a1.98 1.98 0 0 1 0 1.163c-.116.385-.337.749-.758 1.17l-6.9 6.911c-.62.622-.827.81-1.078 1.004-.251.193-.496.34-.784.47-.288.131-.553.226-1.392.48l-1.088.332a1.303 1.303 0 0 1-1.625-1.629l.33-1.09c.255-.84.35-1.104.48-1.393.13-.29.277-.534.47-.785.193-.252.381-.46 1.001-1.081l6.9-6.911c.42-.421.784-.643 1.168-.76a1.97 1.97 0 0 1 1.162 0Zm-3.204 4.096-4.797 4.805c-.547.548-.709.723-.852.91-.112.146-.19.276-.265.443-.097.214-.175.44-.4 1.182l-.094.31.31-.095c.74-.225.965-.303 1.179-.4.167-.076.297-.154.442-.266.187-.143.361-.305.909-.853l4.797-4.805-1.23-1.23Zm2.546-2.43c-.109.033-.23.11-.443.324l-.874.875 1.228 1.231.875-.876c.213-.213.29-.334.323-.444a.24.24 0 0 0 0-.153c-.033-.11-.11-.23-.323-.445l-.189-.188c-.213-.214-.334-.291-.443-.325a.238.238 0 0 0-.154 0Z"
                    ></path>
                  </g>
                </svg>
                <div class="GlobalWriteV2-topTitle">写文章</div></button> -->
              <a-button
                class="GlobalWriteV2-topItem"
                type="link"
                @click="() => (modalVisible = true)"
              >
                <a-modal v-model="modalVisible" centered @ok="() => clickask()">
                  <a-input
                    placeholder="写下你的问题"
                    v-model="inputHeader"
                    @change="check_question"
                  />
                  <a-alert v-if="flag" message="你还没有输入问号" banner />
                  <a-input-group>
                    <a-row :gutter="8">
                      <a-col :span="6">
                        <a-input
                          placeholder="问题标签"
                          :maxLength="5"
                          v-model="inputtag1"
                        />
                      </a-col>
                    </a-row>
                  </a-input-group>
                  <a-input-group>
                    <a-row :gutter="8">
                      <a-col :span="6">
                        <a-input
                          placeholder="问题标签"
                          :maxLength="5"
                          v-model="inputtag2"
                        />
                      </a-col>
                    </a-row>
                  </a-input-group>

                  <a-input-group>
                    <a-row :gutter="8">
                      <a-col :span="6">
                        <a-input
                          placeholder="问题标签"
                          :maxLength="5"
                          v-model="inputtag3"
                        />
                      </a-col>
                    </a-row>
                  </a-input-group>

                  <a-textarea
                    v-model="inputText"
                    placeholder="请写下问题的具体描述"
                    :auto-size="{ minRows: 3, maxRows: 8 }"
                  />
                  <a-input-number
                    id="inputNumber"
                    v-model="rewardpoints"
                    :min="0"
                    :max="10"
                  />
                  积分悬赏:{{ rewardpoints }}比特币
                </a-modal>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  class="GlobalWriteV2-navIcon"
                  fill="currentColor"
                >
                  <g fill="#26BFBF" fill-rule="evenodd">
                    <circle cx="20" cy="20" r="20" opacity=".12"></circle>
                    <path
                      fill-rule="nonzero"
                      d="M21.987 11.686v2.169h-6.125c-1.43 0-1.863.064-2.297.306-.332.128-.574.383-.74.702-.255.447-.332.893-.332 2.297v7.018c0 1.442.09 1.876.332 2.297.166.345.408.587.74.766.434.23.868.319 2.297.319h7.018c1.43 0 1.863-.077 2.297-.32.345-.165.587-.408.766-.74.216-.408.296-.816.305-2.054l.001-6.316.025.025h2.17v6.074c0 1.914-.217 2.616-.587 3.318a3.92 3.92 0 0 1-1.634 1.62c-.689.383-1.403.575-3.317.575h-7.018c-1.915 0-2.616-.204-3.318-.575a3.891 3.891 0 0 1-1.62-1.62c-.384-.702-.575-1.404-.575-3.318v-7.018c0-1.914.204-2.629.574-3.318a3.996 3.996 0 0 1 1.62-1.633c.703-.383 1.404-.574 3.318-.574h6.1Zm1.889 6.954c1.059 1.06 1.059 2.807 0 3.88l-.039.038a2.719 2.719 0 0 1-3.879 0l-2.45-2.553a.801.801 0 0 0-1.123 0l-.05.052c-.32.357-.32.893 0 1.212a.75.75 0 0 0 .726.217c.51-.128 1.047.23 1.149.74a.946.946 0 0 1-.727 1.148 2.649 2.649 0 0 1-2.527-.74 2.796 2.796 0 0 1 0-3.905l.038-.025c1.098-1.085 2.808-1.085 3.892 0l2.463 2.488a.764.764 0 0 0 1.11 0l.038-.025a.855.855 0 0 0 0-1.187.876.876 0 0 0-.74-.217c-.51.128-1.02-.204-1.148-.727-.128-.51.204-1.021.727-1.149l.013-.013a2.703 2.703 0 0 1 2.527.766Zm4.338-9.315v2.578h2.578v1.722h-2.578v2.59h-1.723v-2.602h-2.59v-1.71h2.59V9.325h1.723Z"
                    ></path>
                  </g>
                </svg>
                <div class="GlobalWriteV2-topTitle">提问</div>
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Card" role="complementary" aria-label="更多分类入口">
      <ul class="GlobalSideBar-navList">
        <a
          target="_blank"
          data-za-not-track-link="true"
          type="button"
          class="GlobalSideBar-navLink Button--plain"
          href="/collections/mine"
          ><div class="icons-list">
            <a-icon type="star" theme="filled" />
          </div>
          <span class="GlobalSideBar-navText">我的收藏</span></a
        >
        <li class="GlobalSideBar-navItem GlobalSideBar-couponItem">
          <a
            target="_blank"
            data-za-not-track-link="true"
            type="button"
            class="GlobalSideBar-navLink Button--plain"
            href="/coupon"
            ><div class="icons-list">
              <a-icon type="contacts" />
            </div>
            <span class="GlobalSideBar-navText">我的好友</span></a
          >
        </li>
        <li class="GlobalSideBar-navItem GlobalSideBar-serviceItem">
          <a
            target="_blank"
            data-za-not-track-link="true"
            type="button"
            class="GlobalSideBar-navLink Button--plain"
            href="/community"
            ><div class="icons-list">
              <a-icon type="wallet" />
            </div>
            <span class="GlobalSideBar-navText">我的积分</span
            ><span class="GlobalSideBar-navNumber">0</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { askQuestion } from "@/api/QA";

export default {
  data() {
    return {
      message: [],
      modalVisible: false,
      modal1Visible: false,
      inputText: "",
      inputHeader: "",
      inputtag1: "",
      inputtag2: "",
      inputtag3: "",
      rewardpoints: 0,
      flag: false,
    };
  },
  inject: ["reload"],
  methods: {
    clickask() {
      this.modalVisible = false;
      askQuestion(
        this.inputText,
        this.inputHeader,
        this.rewardpoints,
        this.inputtag1,
        this.inputtag2,
        this.inputtag3
      )
        .then((response) => {
          if (response.status == 200) {
            this.reload();
            this.message.push(response.data);
            this.$message.success("提问成功");
          } else {
            this.$message.error("提问失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("提问失败");
        });
      this.inputText = "";
    },
    check_question(e) {
      // let a = e.target.value.replace(/[^?]/g, "");
      let a = e.target.value;
      if (a.includes("?") || a.includes("？")) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
  },
};
</script>

<style>
.InputBox-input {
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
  border-width: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0 4px 0 10px;
}

.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
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
svg:not(:root) {
  overflow: hidden;
}
svg:not(:root) {
  overflow: hidden;
}
:not(foreignObject) > svg {
  transform-origin: 0px 0px;
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
body,
button {
  margin: 0;
}
button {
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.css-1oy4rvw {
  position: -webkit-sticky;
  position: sticky;
  width: 250px;
}
.css-19idom {
  margin-bottom: 8px;
}
.Card:last-child {
  margin-bottom: 0;
}
.CreatorEntrance-Link--smallIcon {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 14px;
}
.CreatorEntrance-hint,
.CreatorEntrance-link {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.CreatorEntrance-link {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
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
.CreatorEntrance-Link--smallIcon .CreatorEntrancePage-hint--smallIcon {
  height: 52px;
  padding: 0;
  width: 100%;
}
.ProfileSideCreator-creatorEntranceHint {
  padding: 0 20px 0 4px;
}
.CreatorEntrance-hint {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 56px;
}
.CreatorEntrance-hint,
.CreatorEntrance-link {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
svg:not(:root) {
  overflow: hidden;
}
.CreatorEntrance-text {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  flex-grow: 1;
  line-height: 16px;
  margin-left: 4px;
}
.CreatorEntrance-indexPageTitle {
  margin-left: 3px;
}
.CreatorEntrance-indexPageTitle {
  color: #444;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}
.css-zkfaav {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
}
.css-186nt8z {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(133, 144, 166);
  font-size: 12px;
  cursor: pointer;
}
.css-1tccpil {
  color: rgb(68, 68, 68);
}
.css-16vu25q {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
}
.GlobalWriteV2 {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
}
.GlobalWriteV2-navTop {
  padding: 8px 0 20px;
  position: relative;
}
.GlobalWriteV2-topItem {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 35px;
  width: 47px;
}
.GlobalWriteV2-navIcon {
  margin-bottom: 12px;
}
.GlobalWriteV2-navIcon {
  color: #8590a6;
  margin: 0 auto;
  width: 50px;
}
.GlobalWriteV2-topTitle {
  white-space: nowrap;
}
.GlobalWriteV2-topTitle {
  color: #444;
  font-size: 12px;
  line-height: 1;
  text-align: center;
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
.GlobalSideBar-navList {
  padding: 8px 0;
  width: 100%;
}
ul {
  margin: 0;
  padding: 0;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
li {
  list-style-type: none;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.GlobalSideBar-navLink {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 0 20px;
  margin-left: 6px;
}
.Button--plain {
  background-color: transparent;
  border: none;
  border-radius: 0;
  height: auto;
  line-height: inherit;
  padding: 0;
}
.GlobalSideBar-navIcon {
  fill: #8590a6;
}
.GlobalSideBar-navText {
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  margin: 0 10px;
  text-align: left;
}
.GlobalSideBar-navNumber {
  font-size: 12px;
}
.GlobalSideBar-navNumber {
  color: #8590a6;
}
.GlobalSideBar-navNumber {
  background: #f6f6f6;
  border-radius: 2px;
  padding: 6px 10px;
}
</style>
