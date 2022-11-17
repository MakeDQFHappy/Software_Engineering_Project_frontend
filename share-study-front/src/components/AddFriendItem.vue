<template>
    <div>
        <figure>
            <img src="https://wc-project.oss-cn-shanghai.aliyuncs.com/2022/09/15/f32998ad64ff43a4a2a77af9c9cae32av2-0ca202b31685b55bb7a7bf091cceee97_r.jpg" alt="" >
        </figure>
        <div class="friend-meta">
            <h4>
                <a href="">好友名</a>
            </h4>
            <div style="font-size:12px">22 男</div>
        </div>
        <div class="addButton">
            <a-button type="primary" style="">
                添加好友
            </a-button>
        </div>
    </div>
</template>

<style>
.friend-meta {
    display: inline-block;
    padding-left: 10px;
    vertical-align: middle;
    width: auto;
}
img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
    border-radius: 100%;
}

.addButton{
    position: absolute;
    right:10px;
    top:8px;
    bottom:0;
    height:50px;
    display: inline-block;
    vertical-align: middle;
    
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

a {
    background-color: transparent;
}

.frnds .nav-tabs .nav-item a {
    font-weight: 500;
}

.followers > li figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 45px;
    min-width: 45px;
    vertical-align: middle;
    width: 45px;
}
figure {
    margin: 0 0 1rem;
}
.nearly-pepls > figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 60px;
    min-width: 60px;
    vertical-align: middle;
    width: 60px;
}

a, a:hover, a:focus, a:active {
    color: inherit;
    outline: none;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
}

a:link{
    text-decoration: none;
}
</style>