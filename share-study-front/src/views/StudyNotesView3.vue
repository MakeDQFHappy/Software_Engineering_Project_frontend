<template>
  <div>
    <TextArea
      id="content"
      rows="{6}"
      placeholder="有什么新鲜事想分享给大家？"
      maxLength="{6}"
      style="width: 100%; height: 50%"
    />
    <Button type="primary" shape="round" size="{large}" @click="publishNotes">
      发布
    </Button>
    <div class="article-list">
      <div class="article-list-holder">
        <div class="article-item item-tp-4" data-id="19598977">
          <div class="item-holder">
            <div class="article-content">
              <div class="article-left-block">
                <a
                  href="//www.bilibili.com/read/cv19598977?from=category_0"
                  target="_blank"
                  class="article-title-holder"
                  ><span
                    class="article-title"
                    title="制服强强剑！为什么美少女的衣服总会变成武器？"
                    >制服强强剑！为什么美少女的衣服总会变成武器？</span
                  ></a
                >
                <div class="article-desc">
                  文/艾渴echo在“制服强强剑”刚刚出鞘那几天，好多人都在说藤本树终于成长了，不发病了。因为尽管这种“妹子用自己的衣裤鞋袜作为武器，之后不得不穿着内衣内裤进行战斗”的设定在《电锯人2》中早有铺垫，以至于“田中脊椎剑”出鞘后不久就有色虐老哥半开玩笑说之后可能会有衣服化为武器的设定，但也恰恰是因为这太稀松平常，太容易预料，太迎合主流市场了，完全不符合藤本树一贯的自由，所以在饱了眼福后，大家也在热烈讨论中脑补出了类似这样的“龌龊”对话:“小春呐，你看漫画变成半月刊了，人气不是那么好保持的鸭，你看看有没
                </div>
                <div class="article-info-bar">
                  <a
                    href="//space.bilibili.com/43995149#!/"
                    target="_blank"
                    class="up-content"
                    ><span class="face-holder"
                      ><img
                        src="https://i2.hdslb.com/bfs/face/f41d69afd1ee96644e114eef384ea2081e9ec727.jpg@48w_48h.webp"
                        class="face-img" /></span
                    ><span class="nick-name">碎碎念工坊</span></a
                  ><a href="//www.bilibili.com/read/game#rid=6" target="_self"
                    ><span class="category">单机游戏</span></a
                  ><span class="view">926</span><span class="like">55</span
                  ><a
                    href="//www.bilibili.com/read/cv19598977#comment&amp;from=category_0"
                    target="_blank"
                    ><span class="reply">0</span></a
                  >
                </div>
              </div>
              <div class="cover-img">
                <a
                  href="//www.bilibili.com/read/cv19598977?from=category_0"
                  target="_blank"
                  ><div
                    class="cover-image loaded"
                    pre-style="background-image:url(https://i0.hdslb.com/bfs/article/176d36aa1148eeda0ddee5245f39d1543b407f9b.png@468w_352h.webp)"
                    style="
                      background-image: url('https://i0.hdslb.com/bfs/article/176d36aa1148eeda0ddee5245f39d1543b407f9b.png@468w_352h.webp');
                    "
                  ></div
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tips-holder">
        <div class="loading">
          <div class="icon-loading"></div>
          loading...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudyNotes from "@/components/StudyNotes.vue";
import { Input } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Radio } from "antd";
const { TextArea } = Input;
export default {
  name: "StudyNotes-view",
  onMounted() {},
  data() {
    return {};
  },
  methods: {
    publishNotes() {
      var content = document.getElementById("content");
      console.log(content.value);
    },
  },
  components: {
    StudyNotes,
  },
};
</script>

<style scoped></style>


