<template>
  <div>
    <a-tabs default-active-key="1" @change="callback" class="demo-tabs" style="width:100%">
      <a-tab-pane key="1" tab="提问">
        <div>
          放我的提问
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="回答">
        <div>
          放我的回答
        </div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="笔记">
        <div>
          放我的笔记
        </div>
      </a-tab-pane>
      <a-tab-pane key="4" tab="收藏">
        <div>
          放我的收藏
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
  
</template>

<script>
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

.el-tabs--border-card  {
    border: 3px solid #9BE2E0;
}

.List-item {
    position: relative;
    padding: 16px 20px;
}
</style>
