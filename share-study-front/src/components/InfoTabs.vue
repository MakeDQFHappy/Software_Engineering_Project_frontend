<template>
  <div>
    <a-tabs
      default-active-key="1"
      @change="callback"
      class="demo-tabs"
      style="width: 100%"
    >
      <a-tab-pane key="1" tab="我的提问">
        <div>
          <QA_myQuestionView></QA_myQuestionView>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="我的回答">
        <div><QA_myAnswerView></QA_myAnswerView></div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="笔记">
        <div><MyNotes></MyNotes></div>
      </a-tab-pane>
      <a-tab-pane key="4" tab="问答收藏">
        <div><QA_myCollectionView></QA_myCollectionView></div>
      </a-tab-pane>
      <a-tab-pane key="5" tab="笔记收藏">
        <div><MyCollections></MyCollections></div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import QA_myQuestionView from "@/views/QA_myQuestionView.vue";
import QA_myAnswerView from "@/views/QA_myAnswerView.vue";
import QA_myCollectionView from "@/views/QA_myCollectionView.vue";
import MyNotes from "@/components/MyNotes.vue";
import MyCollections from "@/components/MyCollections.vue";
export default {
  components: {
    QA_myQuestionView,
    QA_myAnswerView,
    QA_myCollectionView,
    MyNotes,
    MyCollections,
  },
};
</script>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.el-tabs--border-card {
  border: 3px solid #9be2e0;
}

.List-item {
  position: relative;
  padding: 16px 20px;
}
</style>
