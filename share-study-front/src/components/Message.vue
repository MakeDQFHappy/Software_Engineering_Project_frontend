<template>
    <div>
        <div v-if="item.senderId!=userId">
            <p class="Message-time">
                <time datetime="2022-01-14T05:16:03.000Z">{{item.createTime}}</time>
            </p>
            <div class="Message">
                <div class="css-zkfaav">
                    <div class="css-r6ymz">
                        <a href="">
                            <img :src=avatar class="css-11f2zj7">
                        </a>
                    </div>
                </div>
                <div class="Message-content">
                    <div class="TextMessage-sender TextMessage"> 
                        <div class="css-vurnku">
                            {{item.message}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="item.senderId==userId">
            <p class="Message-time">
                <time datetime="2022-01-14T05:16:03.000Z">{{item.createTime}}</time>
            </p>
            <div class="Message Message--reverse">
                <div class="css-zkfaav">
                    <div class="css-r6ymz">
                        <a href="">
                            <img :src=userAvatar class="css-11f2zj7">
                        </a>
                    </div>
                </div>
                <div class="Message-content Message-content--reverse" >
                    <div class="TextMessage TextMessage-receiver"> 
                        <div class="css-vurnku">
                            {{item.message}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'message',
  props:['item','avatar'],
  data(){
    return {
        userId:2,
        userAvatar:"https://wc-project.oss-cn-shanghai.aliyuncs.com/2022/09/15/f32998ad64ff43a4a2a77af9c9cae32av2-0ca202b31685b55bb7a7bf091cceee97_r.jpg"
    }
  },
  methods:{

  }
}
</script>

<style>
.Message--reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}

.Message-content--reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}

.Message-time {
    padding-top: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #999;
}

.css-vurnku {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
}

.Message-time {
    padding-top: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #999;
}

.Message {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 20px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.css-zkfaav {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
}

.css-r6ymz {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    display: inline-block;
    width: 40px;
    height: 40px;
    position: relative;
}

.css-11f2zj7 {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    max-width: 100%;
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 50%;
}

.Message-content {
    margin: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.TextMessage-sender {
    background-color: #f6f6f6;
    color: #444;
}

.TextMessage-sender:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    left: -4px;
    top: 14px;
    background: #f6f6f6;
    transform: rotate(45deg);
}

.TextMessage {
    max-width: 388px;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .4px;
    position: relative;
    margin-right: 8px;
    margin-left: 8px;
    text-align: left;
    min-height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: pre-wrap;
    word-break: break-all;
}

.TextMessage-receiver {
    background-color: #056de8;
}

.TextMessage-receiver:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    right: -4px;
    top: 14px;
    background: #056de8;
    transform: rotate(45deg);
}

.TextMessage-sender {
    background-color: #f6f6f6;
    color: #444;
}

.TextMessage-sender:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    left: -4px;
    top: 14px;
    background: #f6f6f6;
    transform: rotate(45deg);
}
</style>