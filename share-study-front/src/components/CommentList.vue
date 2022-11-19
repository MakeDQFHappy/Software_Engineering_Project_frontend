<template>
    <a-list
      class="comment-list"
      :header="`${comments.length} replies`"
      item-layout="horizontal"
      :data-source="comments"
    >
    
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-comment :author="item.author" :avatar="item.avatar">
          <template slot="actions">
            <span v-for="action in item.actions">{{ action }}</span>
          </template>
          <p slot="content">
            {{ item.content }}
          </p>
          <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
            <span>{{ item.datetime.fromNow() }}</span>
          </a-tooltip>
        </a-comment>
      </a-list-item>
    </a-list>
  </template>
  <script>
  import moment from 'moment';
  export default {
    props:["comments"],
  };
  </script>