<template>
    <div class="ChatUserListItem">
        <div class="css-dgtvym">
            <a-avatar src="https://wc-project.oss-cn-shanghai.aliyuncs.com/2022/09/15/f32998ad64ff43a4a2a77af9c9cae32av2-0ca202b31685b55bb7a7bf091cceee97_r.jpg" :size="40" icon="user" />
        </div>
        <div class="ChatUserListItem-Content">
            <div class="ChatUserListItem-Name">
                <!-- 用户名 -->
                <span class="userName">
                    <span class="userName-nameArea"> {{item.name}}</span>
                </span>
                <time>21小时前</time>
            </div>
            <div class="ChatUserListItem-Snippet">{{item.message}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:["item"],
    mounted() {
        for (let i in appData) {
            this.faceList.push(appData[i].char);
        }
    },
    data() {
        return {
            faceList: [],
            emojiItem: null,
        };
    },
    methods: {
        getEmo(index) {
            this.emojiItem = index;
            this.$emit("changeText")
        }
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