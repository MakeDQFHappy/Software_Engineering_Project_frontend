<template>
  <div class="Topstory">
    <div class="Topstory-container">
      <div class="Topstory-mainColumn">
        <div class="Topstory-mainColumnCard">
          <div class="Card Topstory-noMarginCard Topstory-tabCard">
            <nav class="TopstoryTabs Topstory-tabs">
              <a
                tabindex="0"
                class="TopstoryTabs-link Topstory-tabsLink is-active"
                @click="openQA_myQuestion"
                >我的提问</a
              ><a
                tabindex="1"
                class="TopstoryTabs-link Topstory-tabsLink"
                @click="openQA_myAnswer"
                >我的回答</a
              ><a
                tabindex="2"
                class="TopstoryTabs-link Topstory-tabsLink"
                @click="openQA_myHistory"
                >浏览记录</a
              ><a
                tabindex="3"
                class="TopstoryTabs-link Topstory-tabsLink"
                @click="openQA_myCollection"
                >收藏</a
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
            </nav>
            <div><div class="Sticky" style=""></div></div>
            <div id="TopstoryContent" class="Topstory-content">
              <div class="ListShortcut">
                <div class="Topstory-follow">
                  <div class="" role="list">
                    <div v-for="(item, index) in QAQuestionItems" :key="index">
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
                  <a-icon type="user" />
                </div>

                <div class="CreatorEntrance-text">
                  <div class="CreatorEntrance-indexPageTitle">
                    <div class="css-zkfaav">
                      创作中心<a
                        target="_blank"
                        href="/creator/account/growth-level"
                        ><div class="css-h8pwzc">Lv1</div></a
                      >
                    </div>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="/creator/manage/creation/draft?type=answer"
                  ><div class="css-186nt8z">
                    草稿箱<span class="css-1tccpil">(0)</span>
                  </div></a
                >
              </div>
              <div class="css-16vu25q">
                <div class="GlobalWriteV2">
                  <div class="GlobalWriteV2-navTop">
                    <button class="GlobalWriteV2-topItem" title="回答">
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
                      <div class="GlobalWriteV2-topTitle">回答问题</div></button
                    ><button class="GlobalWriteV2-topItem">
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
                      <div class="GlobalWriteV2-topTitle">发视频</div></button
                    ><button class="GlobalWriteV2-topItem" title="写文章">
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
                      <div class="GlobalWriteV2-topTitle">写文章</div></button
                    ><button class="GlobalWriteV2-topItem">
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
                      <div class="GlobalWriteV2-topTitle">写想法</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Card" role="complementary" aria-label="更多分类入口">
            <ul class="GlobalSideBar-navList">
              <li class="GlobalSideBar-navItem GlobalSideBar-starItem">
                <a
                  target="_blank"
                  data-za-not-track-link="true"
                  type="button"
                  class="GlobalSideBar-navLink Button--plain"
                  href="/collections/mine"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    class="Zi Zi--Star GlobalSideBar-navIcon"
                    fill="currentColor"
                  >
                    <path
                      d="M10.484 3.307c.673-1.168 2.358-1.168 3.032 0l2.377 4.122a.25.25 0 0 0 .165.12l4.655.987c1.319.28 1.84 1.882.937 2.884l-3.186 3.535a.25.25 0 0 0-.063.193l.5 4.733c.142 1.34-1.222 2.33-2.453 1.782l-4.346-1.938a.25.25 0 0 0-.204 0l-4.346 1.938c-1.231.549-2.595-.442-2.453-1.782l.5-4.733a.25.25 0 0 0-.064-.193L2.35 11.42c-.903-1.002-.382-2.604.937-2.884l4.655-.987a.25.25 0 0 0 .164-.12l2.378-4.122Z"
                    ></path></svg
                  ><span class="GlobalSideBar-navText">我的收藏</span
                  ><span class="GlobalSideBar-navNumber">0</span></a
                >
              </li>
              <li class="GlobalSideBar-navItem GlobalSideBar-questionListItem">
                <a
                  target="_blank"
                  data-za-not-track-link="true"
                  type="button"
                  class="GlobalSideBar-navLink Button--plain"
                  href="/people/kenny-43-13/following/questions"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    class="Zi Zi--HelpBubble GlobalSideBar-navIcon"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.088 1.968c.323-.044.72-.044 1.153-.044h11.518c.433 0 .83 0 1.152.044.356.047.732.16 1.04.469.31.309.422.685.47 1.04.043.323.043.72.043 1.153v13.232c0 .433 0 .83-.043 1.152-.048.356-.16.732-.47 1.04-.308.31-.684.422-1.04.47-.322.043-.72.043-1.152.043h-3.796l-3.932 2.857c-.115.084-.26.19-.397.26-.158.083-.467.207-.827.071-.359-.135-.509-.432-.573-.6-.055-.143-.094-.318-.125-.458l-.477-2.13H6.24c-.433 0-.83 0-1.153-.043-.355-.048-.73-.16-1.04-.47-.309-.308-.421-.684-.47-1.04-.042-.322-.042-.72-.042-1.152V4.63c0-.433 0-.83.043-1.153.048-.355.16-.731.47-1.04.308-.31.684-.422 1.04-.47Zm5.827 8.93c0-.095 0-.142.029-.171.03-.03.076-.03.17-.03h1.01a1.63 1.63 0 0 0 1.5-1.629 1.63 1.63 0 0 0-1.626-1.634c-.832 0-1.531.655-1.616 1.469-.011.102-.016.153-.045.178-.028.026-.075.026-.168.026H8.947c-.095 0-.142 0-.172-.031s-.027-.077-.022-.168C8.847 7.201 10.27 5.8 11.998 5.8a3.26 3.26 0 0 1 3.25 3.268 3.264 3.264 0 0 1-2.7 3.222c-.041.007-.062.01-.074.024-.012.014-.012.035-.012.076v.797c0 .094 0 .141-.029.17-.03.03-.076.03-.17.03h-1.148c-.095 0-.142 0-.171-.03-.03-.029-.03-.076-.03-.17v-2.29Zm-.31 4.05c0-.094 0-.141.03-.17.029-.03.076-.03.17-.03h1.922c.094 0 .141 0 .17.03.03.029.03.076.03.17v1.402c0 .094 0 .141-.03.17-.029.03-.076.03-.17.03h-1.922c-.094 0-.141 0-.17-.03-.03-.029-.03-.076-.03-.17v-1.402Z"
                      clip-rule="evenodd"
                    ></path></svg
                  ><span class="GlobalSideBar-navText">我关注的问题</span
                  ><span class="GlobalSideBar-navNumber">1</span></a
                >
              </li>
              <li class="GlobalSideBar-navItem GlobalSideBar-inviteItem">
                <a
                  target="_blank"
                  data-za-not-track-link="true"
                  type="button"
                  class="GlobalSideBar-navLink Button--plain"
                  href="/creator/featured-question/invited"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    class="Zi Zi--Invite GlobalSideBar-navIcon"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.5 7.5A5.5 5.5 0 0 1 11 2a5.5 5.5 0 0 1 5.5 5.5A5.5 5.5 0 0 1 11 13a5.5 5.5 0 0 1-5.5-5.5Zm8.11 9.498c.404-.408.91-1 1.17-1.51.067-.133.13-.284.165-.442.034-.15.058-.373-.033-.602a.872.872 0 0 0-.545-.509 1.37 1.37 0 0 0-.604-.043c-.657.082-1.518.184-2.373.24-.867.055-1.68.058-2.254-.041-1.189-.204-2.045-.19-2.781.087-.722.272-1.25.773-1.804 1.302-1.533 1.462-2.434 3.311-2.65 4.831-.11.78.535 1.339 1.199 1.339h8.1a.96.96 0 0 0 .955-.929c.06-1.767.7-2.96 1.456-3.723Zm5.596-2.292a.706.706 0 0 0-1.412 0v2.588h-2.588a.706.706 0 0 0 0 1.412h2.588v2.588a.706.706 0 1 0 1.412 0v-2.588h2.588a.706.706 0 0 0 0-1.412h-2.588v-2.588Z"
                      clip-rule="evenodd"
                    ></path></svg
                  ><span class="GlobalSideBar-navText">我的邀请</span></a
                >
              </li>
              <li class="GlobalSideBar-navItem GlobalSideBar-balanceItem">
                <a
                  target="_blank"
                  data-za-not-track-link="true"
                  type="button"
                  class="GlobalSideBar-navLink Button--plain"
                  href="/balance"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    class="Zi Zi--Balance GlobalSideBar-navIcon"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M21.75 6v12.248c0 1.106-.788 2.002-1.76 2.002H4.01c-.972 0-1.76-.896-1.76-2.002V5.752c0-1.106.788-2.002 1.76-2.002h15.982c.971.001 1.758 1.145 1.758 2.25ZM6 8.75a.75.75 0 0 0 0 1.5h2.483c1.353 2.991 5.681 2.991 7.034 0H18a.75.75 0 0 0 0-1.5h-2.887c-.39 0-.737.25-.86.62-.722 2.165-3.784 2.165-4.506 0a.906.906 0 0 0-.86-.62H6Z"
                      clip-rule="evenodd"
                    ></path></svg
                  ><span class="GlobalSideBar-navText">我的余额</span></a
                >
              </li>
              <li class="GlobalSideBar-navItem GlobalSideBar-couponItem">
                <a
                  target="_blank"
                  data-za-not-track-link="true"
                  type="button"
                  class="GlobalSideBar-navLink Button--plain"
                  href="/coupon"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    class="Zi Zi--Coupon GlobalSideBar-navIcon"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 6.13c0-1.038.808-1.88 1.805-1.88h16.39c.997 0 1.805.842 1.805 1.88v2.588a.45.45 0 0 1-.34.42c-.877.248-2.16 1.049-2.16 2.862 0 1.813 1.283 2.614 2.16 2.862a.45.45 0 0 1 .34.42v2.587c0 1.039-.808 1.881-1.805 1.881H3.803C2.807 19.749 2 18.907 2 17.87v-2.535c0-.221.18-.399.397-.439.875-.163 2.103-.88 2.103-2.896 0-2.015-1.228-2.733-2.103-2.896C2.18 9.064 2 8.886 2 8.665V6.131Zm7 5.12a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
                      clip-rule="evenodd"
                    ></path></svg
                  ><span class="GlobalSideBar-navText">我的礼券</span></a
                >
              </li>
              <li class="GlobalSideBar-navItem GlobalSideBar-serviceItem">
                <a
                  target="_blank"
                  data-za-not-track-link="true"
                  type="button"
                  class="GlobalSideBar-navLink Button--plain"
                  href="/community"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    class="Zi Zi--Community GlobalSideBar-navIcon"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.4 3A2.4 2.4 0 0 0 2 5.4v10.5a2.4 2.4 0 0 0 2.4 2.4h8.292l3.073 3.353a.8.8 0 0 0 1.387-.475l.24-2.878H19.6a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3H4.4Zm2.1 4.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.495a.75.75 0 0 1 0 1.5H6.5a.75.75 0 0 1-.75-.75Z"
                      clip-rule="evenodd"
                    ></path></svg
                  ><span class="GlobalSideBar-navText">站务中心</span></a
                >
              </li>
              <li class="GlobalSideBar-navItem GlobalSideBar-help-centerItem">
                <a
                  target="_blank"
                  data-za-not-track-link="true"
                  type="button"
                  class="GlobalSideBar-navLink Button--plain"
                  href="/help-center"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    class="ZDI ZDI--HeadMicrophoneFill16 GlobalSideBar-navIcon"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2.763a4.376 4.376 0 0 0-4.33 3.744h.065c.861 0 1.559.697 1.559 1.558v2.595c0 .861-.698 1.559-1.559 1.559A2.485 2.485 0 0 1 1.25 9.733v-.741c0-.867.444-1.63 1.117-2.075a5.638 5.638 0 0 1 11.266 0 2.483 2.483 0 0 1 1.117 2.075v.741c0 1.19-.836 2.184-1.952 2.428a5.077 5.077 0 0 1-4.242 2.283H8a.631.631 0 0 1 0-1.263h.556c1.116 0 2.12-.478 2.818-1.241a1.557 1.557 0 0 1-.668-1.28V8.065a1.558 1.558 0 0 1 1.624-1.558A4.376 4.376 0 0 0 8 2.763Z"
                      clip-rule="evenodd"
                    ></path></svg
                  ><span class="GlobalSideBar-navText">帮助与客服</span></a
                >
              </li>
              <li class="GlobalSideBar-navItem GlobalSideBar-copyrightItem">
                <a
                  target="_blank"
                  data-za-not-track-link="true"
                  type="button"
                  class="GlobalSideBar-navLink Button--plain"
                  href="/copyright"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    class="Zi Zi--Copyright GlobalSideBar-navIcon"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9.114-4.957a4.59 4.59 0 0 0-3.292.816 5 5 0 0 0-1.937 2.868 5.227 5.227 0 0 0 .333 3.483 4.865 4.865 0 0 0 2.453 2.41 4.557 4.557 0 0 0 3.384.104 4.827 4.827 0 0 0 2.583-2.26.75.75 0 0 0-1.32-.712 3.327 3.327 0 0 1-1.777 1.562c-.74.27-1.547.245-2.273-.07a3.366 3.366 0 0 1-1.692-1.672 3.727 3.727 0 0 1-.236-2.48 3.5 3.5 0 0 1 1.35-2.01 3.09 3.09 0 0 1 2.219-.553c.774.107 1.495.51 2.022 1.146a.75.75 0 0 0 1.155-.958 4.703 4.703 0 0 0-2.972-1.674Z"
                      clip-rule="evenodd"
                    ></path></svg
                  ><span class="GlobalSideBar-navText">版权服务中心</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QA_QuestionBlock from "@/components/QA_QuestionBlock.vue";

export default {
  name: "QA_myQuestionView",
  data() {
    return {
      form: { content: "" },
      QAQuestionItems: [
        {
          username: "张颖",
          date: "2",
          title: "什么是元宇宙",
          userlink: "https://sse.tongji.edu.cn/info/1206/3148.htm",
          questionlink:
            "https://www.bing.com/search?q=%E4%BB%80%E4%B9%88%E6%98%AF%E5%85%83%E5%AE%87%E5%AE%99&form=ANNTH1&refig=0cbf2ccc0c27492f84095e3da143bda4",

          tags: ["元宇宙"],
          content:
            "原神是由米哈游自主研发的一款全新开放世界冒险游戏。游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，导引元素之力。你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘「原神」的真相.",
          likeNum: 10,
          starNum: 10,
          commentNum: 10,
          isLiked: true,
          isStared: true,
        },
      ],
    };
  },

  methods: {
    openQA_myQuestion() {
      this.$router.push("/QA_myQuestion");
    },
    openQA_myAnswer() {
      this.$router.push("/QA_myAnswer");
    },

    openQA_myCollection() {
      this.$router.push("/QA_myCollection");
    },

    openQA_myHistory() {
      this.$router.push("/QA_myHistory");
    },
    onSearch(value) {
      console.log(value);
    },
  },
  components: { QA_QuestionBlock },
};
</script>

<style>
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
.Topstory-mainColumnCard .Card:not(.Topstory-tabCard) {
  margin-bottom: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 1px solid #f0f2f7;
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
  color: #000000;
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
svg:not(:root) {
  overflow: hidden;
}
svg:not(:root) {
  overflow: hidden;
}
:not(foreignObject) > svg {
  transform-origin: 0px 0px;
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
.css-1oy4rvw {
  position: -webkit-sticky;
  position: sticky;
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
.CreatorEntrance-creatorIcon {
  color: #444;
  height: 18px;
  width: 18px;
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
ol,
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
}
.Button--link,
.Button--plain {
  background-color: transparent;
  border: none;
  border-radius: 0;
  height: auto;
  line-height: inherit;
  padding: 0;
}
.Button,
html[data-theme="dark"] .Button {
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
.GlobalSideBar-navIcon,
html[data-theme="dark"] .GlobalSideBar-navIcon {
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
.GlobalSideBar-navNumber,
html[data-theme="dark"] .GlobalSideBar-navNumber {
  color: #8590a6;
}
.GlobalSideBar-navNumber {
  background: #f6f6f6;
  border-radius: 2px;
  padding: 6px 10px;
}
</style>
