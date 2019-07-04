<template>
<div class="register user-module">
    <m-header>
        <router-link tag="span" slot="header-right" class="mui-btn-link mui-pull-right" to="/register">注册账号</router-link>
    </m-header>
    <div class="mui-content">
        <h1>欢迎登录姜力</h1>
        <form id="loginForm" class="login-form" ref="myForm">
            <div class="input-row bdb">
                <input id="account"  maxlength="11" type="text" class="mui-input-clear mui-input-txt mui-click-iphone" placeholder="请输入手机号" v-model.trim="phone" @input="checkPhone">
            </div>
            <div class="input-row bdb">
                <input type="text" class="mui-input-txt" placeholder="请输入短信验证码" v-model.trim="code" @input="checkCode">
                <input class="axc_yzm"  id="btnSendCode" type="button" :value="codeTxt" :class="{active:codeState}" @click="getCode">
            </div>
            <div class="input-row">
                <button type="button" class="submit" @click="submitFn" :class="{active:submitState}">登录</button>
            </div>
        </form>
        <div class="mui-input">
            <div class="link-area">
                <router-link tag="span" to="/forgetPwd" class="link forgetPassword fl">忘记密码</router-link>
                <router-link tag="span" :to="`/login${pathParams}`" class="link forgetCode fr">账号密码登录</router-link>
            </div>
        </div>
    </div>
    <!-- <div class="mui-weilogin">
        <a href="/codeLogin"><i class="iconfont icon-iconfontweixin"></i>微信登录</a>
    </div> -->
</div>
</template>
<script>
import mHeader from "base/header/header"
import  storage  from 'common/js/storage'
import { apiGetLoginCode,apiLoginByCode } from 'api/api'
export default {
  components: {
    mHeader
  },
  data() {
    return {
        pathParams:'',
        phone:'',
        code:'',
        codeState:false,
        submitState:false,
        lock:[],    //存储校验状态
        codeTxt:'获取验证码',
        isGetCode:false
    }
  },
  watch:{
    lock(val,val2){
        if(val.length == 2){
            for(let i=0;i<2;i++){
                if(!val[i]){
                    this.submitState = false;
                    break;
                }else{
                    this.submitState = true;
                }
            }
        }
    },
  },
  created () {
    //先判断登录后是否需要重定向
    let query = this.$route.query.redirect;
    if(query){
        this.pathParams = '?redirect='+query
    }
  },
  methods: {
    checkPhone(){  
        this.phone = this.phone.replace(/[^\d]/g,'')  
        if(this.phone.length == 11){
            let res = /^1[3456789]\d{9}$/;
            let result = res.test(this.phone);
            if(result){
                this.codeState = true
                this.$set(this.lock,0,true)
            }else{
                alert('手机号输入有误')
                this.codeState = false
                this.$set(this.lock,0,false)
            }
        }else{
            this.$set(this.lock,0,false)
        }
    },
    checkCode(){
        if(this.code == ''){
            this.$set(this.lock,1,false)
        }else{
            this.$set(this.lock,1,true)
        }
    },
    getCode(){
        apiGetLoginCode({
            mobile:this.phone
        }).then((result) => {
            if(result.status == 1){
                this.countDown(120)
                this.isGetCode = true
            }else{
                alert(result.msg)
            }
        }).catch((err) => {
            console.log(err)
        });
    },
    submitFn(){
        if(this.submitState){   //可以点击
            if(!this.isGetCode){
                alert('请获取验证码')
                return
            }
            let data = {
                mobile:this.phone,
                code:this.code,
            }
            apiLoginByCode(data).then((result) => {
               if(result.status == 1){
                    alert('登录成功')
                    // 储存user信息
                    let data = result.data
                    let userInfo = {
                        token:data.token,
                        level:data.level
                    }
                    storage.set('userInfo',userInfo)

                    //判断跳转路径 有callback返回callback，否则返回index
                    this.returnUrl()

                }else{
                    alert(result.msg)
                }
            }).catch((err) => {
                
            });
        }
    },
    returnUrl(){
        let url = window.location.href;
        let return_url = url.split("redirect=")[1];
        if(return_url){
                window.location.href = return_url;
        }else{
            window.location.href = '/'
            this.$refs.myForm.reset();
        }
    },
    countDown(time) {
        this.codeState = false;  
        time--
        this.codeTxt = `重新获取${time}s`;
        if (time == 0) {  
            this.codeTxt = "重新发送"
            this.codeState = true;  
            time = 60;  
            return;  
        }  
        setTimeout(()=>{
            this.countDown(time)
        },1000);  
        var str = '()(1(#)$($))';
        var arr = []
        for(var i = 0;i<str.length;i++){
            if(str[i] == '('){
                arr.push(str[i])
            }else if(str[i] == ')'){
                if(arr.length){
                    var len = arr.length;
                    arr.pop();
                }else{
                    alert(i)
                }
            }
        }
    },
    
  }
}
</script>

<style>
@import "user.css";
</style>

