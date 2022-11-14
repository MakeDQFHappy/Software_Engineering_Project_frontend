<template>
  <div class="Topstory-container">
    <div class="Topstory-mainColumn">
      <div class="Card Topstory-noMarginCard Topstory-tabCard">
        <nav class="TopstoryTabs Topstory-tabs">
          <a
            tabindex="0"
            aria-controls="Topstory-follow"
            class="TopstoryTabs-link Topstory-tabsLink is-active"
            data-za-detail-view-id="9122"
            data-za-extra='{"button":{"text":"关注"}}'
            href="/follow"
            >关注</a
          ><a
            tabindex="0"
            aria-controls="Topstory-recommend"
            class="TopstoryTabs-link Topstory-tabsLink"
            data-za-detail-view-id="9122"
            data-za-extra='{"button":{"text":"推荐"}}'
            href="/"
            >推荐</a
          ><a
            tabindex="0"
            aria-controls="Topstory-hot"
            class="TopstoryTabs-link Topstory-tabsLink"
            data-za-detail-view-id="9122"
            data-za-extra='{"button":{"text":"热榜"}}'
            href="/hot"
            >热榜</a
          ><a
            tabindex="0"
            aria-controls="Topstory-zvideo"
            class="TopstoryTabs-link Topstory-tabsLink"
            data-za-detail-view-id="9122"
            data-za-extra='{"button":{"text":"视频"}}'
            href="/zvideo"
            >视频</a
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
</style>
