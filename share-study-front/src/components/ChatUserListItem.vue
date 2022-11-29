<template>
    <div class="ChatUserListItem">
        <div class="css-dgtvym">
            <a-badge :count="item.notReadNum" :overflow-count="99">
                <a-avatar :src="item.friendAvatar" :size="40" icon="user" />
            </a-badge>
        </div>
        <div class="ChatUserListItem-Content">
            <div class="ChatUserListItem-Name">
                <!-- 用户名 -->
                <span class="userName">
                    <span class="userName-nameArea"> {{item.friendName}}</span>
                </span>
                <time>{{item.lastTime}}</time>
            </div>
            <div class="ChatUserListItem-Snippet">{{item.lastMessage}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:["item"],
    mounted() {
    },
    data() {
        return {
        };
    },
    methods: {
    }
}
</script>

<style scoped>
.ChatUserListItem-Snippet {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 13px;
    color: #999;
    height:20px;
    align-items: center;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
}

time {
    font-size: 10px;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    color: #999;
}
.userName-nameArea {
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 120px;
}
.userName {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    -ms-flex-align: center;
    color: #444;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.ChatUserListItem-Name{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin:0;
    padding:0;
    height:20px;
}

.ChatUserListItem-Content {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height:40px;
}
.ChatUserListItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    position: relative;
    height:100%;
    padding: 12px 20px 12px 0px;
}

.css-dgtvym {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    margin-right: 10px;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative;
}
</style>