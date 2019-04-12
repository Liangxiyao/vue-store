<template>
<div class="register user-module">
    <m-header>
        <a slot="header-right" class="mui-btn-link mui-pull-right" href="/login">登录</a>
    </m-header>
    <div class="mui-logo">
        <h1>注册姜力账号</h1>
        <form id="login-form" class="login-form">
            <div class="input-row bdb">
                <input id="account"  maxlength="11" type="text" class="mui-input-clear mui-input-txt mui-click-iphone" placeholder="请输入手机号" v-model="phone" @input="checkPhone">
            </div>
            <div class="input-row bdb">
                <input type="text" class="mui-input-txt" placeholder="请输入短信验证码" v-model="code" @input="checkCode">
                <input class="axc_yzm"  id="btnSendCode" type="button" :value="codeTxt" :class="{no:codeDisabled}" @click="getCode">
            </div>
            <div class="input-row bdb">
                <input id="password" type="password" class="mui-input-clear mui-input-txt" placeholder="请设置密码" v-model="pwd" @input="checkPwd">
            </div>
            <div class="input-row">
                <button id="login" type="button" class="submit" @click="submitFn" :class="{no:submitDisabled}">注册</button>
            </div>
        </form>
        <div class="mui-input">
            <p>用户注册代表同意<a href="javascript:;">《服务条款》</a>和<a href="javascript:;">《姜力隐私政策》</a></p>
        </div>
    </div>
</div>
</template>
<script>
import mHeader from "base/header/header";
import { trim } from 'common/js/common';
import { apiGetRegcode } from 'api/api'
export default {
  components: {
    mHeader
  },
  data() {
    return {
        phone:'',
        code:'',
        pwd:'',
        codeDisabled:true,
        submitDisabled:true,
        lock:[],    //存储校验状态
        isGetCode:false,
        codeTxt:'获取验证码',
    }
  },
  watch:{
    lock(val,val2){
        if(val.length == 3){
            for(let i=0;i<3;i++){
                if(!val[i]){
                    this.submitDisabled = true;
                    break;
                }else{
                    this.submitDisabled = false;
                }
            }
        }
    },
  },
  computed:{
    // submitDisabled(){
    //     console.log(this.lock)
    //     if(this.lock.length == 3){
    //         this.lock.map(item=>{
    //             if(!item){
    //                 return true
    //                // break;
    //             }else{
    //                 return false
    //             }
    //         })
    //     }else{
    //         return true
    //     }
    // }
  },
  methods: {
    checkPhone(){  
        this.phone = this.phone.replace(/[^\d]/g,'')  
        if(this.phone.length == 11){
            let res = /^1[3456789]\d{9}$/;
            let result = res.test(this.phone);
            if(result){
                this.codeDisabled = false
                this.$set(this.lock,0,true)
            }else{
                alert('手机号输入有误')
                this.codeDisabled = true
                this.$set(this.lock,0,false)
            }
        }else{
            this.$set(this.lock,0,false)
        }
    },
    checkCode(){
        let value = trim(this.code)   
        if(value == ''){
            this.$set(this.lock,1,false)
        }else{
            this.$set(this.lock,1,true)
        }
    },
    checkPwd(){
        let value = trim(this.pwd)   
        if(value == ''){
            this.$set(this.lock,2,false)
        }else{
            this.$set(this.lock,2,true)
        }
    },
    getCode(){
        this.countDown(60)
        // apiGetRegcode({
        //     mobile:this.phone
        // }).then((result) => {
        //     if(result.status == 1){
        //         //this.countDown(6)
        //     }
        // }).catch((err) => {
            
        // });
    },
    submitFn(){
        if(!this.submitDisabled){   //可以点击
            if(this.pwd.length<6){
                alert('密码最少为6位')
            }
        }
    },
    countDown(time) {
        this.codeDisabled = true;  
        time--
        this.codeTxt = "重新获取"+time+"s";
        if (time == 0) {  
            this.codeTxt = "重新发送"
            this.codeDisabled = false;  
            time = 60;  
            return;  
        }  
        setTimeout(()=>{
            this.countDown(time)
        },1000);  
    } 
  }
}
</script>

<style>
@import "user.css";
</style>

