<template>
    <div>
        <div class="nearly-pepls">
            <figure>
                <a href="">
                    <img src="https://wc-project.oss-cn-shanghai.aliyuncs.com/2022/09/15/f32998ad64ff43a4a2a77af9c9cae32av2-0ca202b31685b55bb7a7bf091cceee97_r.jpg" alt="">
                </a>
            </figure>
            <div class="pepl-info" v-if="type=='1'">
                <h4 style="font-weight: 1000;">好友名</h4>
                <span style="color: #8d8d8d;">男 23</span>
                <a href="#" class="add-butn more-action" style="background: rgb(230, 28, 75);">删除好友</a>
                <a href="#" class="add-butn" style="background: #088dcd;">发送私信</a>
            </div>
            <div class="pepl-info" v-if="type=='2'">
                <h4 style="font-weight: 1000;">好友名</h4>
                <span style="color: #8d8d8d;">男 23</span>
                <a href="#" class="add-butn info">申请信息</a>
                <a href="#" class="add-butn more-action" style="background: rgb(41, 113, 34);">同意请求</a>
                <a href="#" class="add-butn" style="background: rgb(230, 28, 75);">拒绝请求</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props:["item","type"],
  data(){
    return {
    }
  },
}
</script>

<style scoped>
li:hover {
    box-shadow: 10px 5px 5px rgb(82, 79, 79);
}

a.add-butn.info {
    background: rgb(63, 63, 79) none repeat scroll 0 0;
    right: 178px;
}
a.add-butn.more-action {
    background:  none repeat scroll 0 0;
    right: 74px;
}
a.add-butn.more-action {
    right: 89px;
}
a.add-butn {
    color: #fff;
    float: right;
    font-size: 13px;
    line-height: initial;
    padding: 5px 10px;
    position: absolute;
    right: 0;
    text-transform: capitalize;
    top: 10px;
    border-radius: 4px;
}
.pepl-info > span {
    float: left;
    font-size: 13px;
    text-transform: capitalize;
    width: 100%;
    line-height: initial;
}

img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
    border-radius: 100%;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 1000;
    line-height: 1.2;
    color: inherit;
}
.pepl-info > h4 {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
}
.pepl-info {
    display: inline-block;
    padding-left: 15px;
    position: relative;
    vertical-align: middle;
    width: 85%;
}
.nearly-pepls > figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 60px;
    min-width: 60px;
    vertical-align: middle;
    width: 60px;
}
.nearly-pepls {
    display: inline-block;
    width: 100%;
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

dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}

.nearby-contct > li {
    background: #fff none repeat scroll 0 0;
    border: 2px solid #d2d5d7;
    display: inline-block;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    transition: all 0.15s linear 0s;
}
</style>