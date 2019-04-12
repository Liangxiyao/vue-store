<template>
    <div class="login user-module">
        <m-header>
            <a slot="header-right" class="mui-btn-link mui-pull-right" href="">注册账号</a>
        </m-header>
        <div class="mui-logo">
            <h1>欢迎登录姜力</h1>
            <form id='login-form' class="login-form">
                <div class="mui-input-row bdb">
                    <input id='account' type="text" class="mui-input-clear mui-input-txt" placeholder="请输入您的账号">
                </div>
                <div class="mui-input-row bdb">
                    <input id='password' type="password" class="mui-input-txt" placeholder="请输入密码">
                    <i class="iconfont icon-biyan passwordView"></i>
                </div>
                <div class="mui-input-row">
                    <button id='login' type="button" class="">登录</button>
                </div>
            </form>

            <div class="mui-input">
                <div class="link-area">
                    <a href="javascript:;" class="forgetPassword fl">忘记密码</a>
                    <a href="javascript:;" class="forgetCode fr">短信验证码登录</a>
                </div>
            </div>
            <div class="mui-weilogin">
                <a><i class="iconfont icon-iconfontweixin"></i>微信登录</a>
            </div>
        </div>
    </div>
</template>
<script>
import mHeader from "base/header/header"

export default {
    components:{
        mHeader
    },

}
</script>

<style>
@import 'user.css';



</style>

