<template>
<div class="register user-module">
    <m-header>
        <router-link tag="span" slot="header-right" class="mui-btn-link mui-pull-right" to="/login">登录</router-link>
    </m-header>
    <div class="mui-content">
        <h1>注册姜力账号</h1>
        <form id="loginForm" class="login-form" ref="myForm">
            <div class="input-row bdb">
                <input id="account"  maxlength="11" type="text" class="mui-input-clear mui-input-txt mui-click-iphone" placeholder="请输入手机号" v-model.trim="phone" @input="checkPhone">
            </div>
            <div class="input-row bdb">
                <input type="text" class="mui-input-txt" placeholder="请输入短信验证码" v-model.trim="code" @input="checkCode">
                <input class="axc_yzm"  id="btnSendCode" type="button" :value="codeTxt" :class="{active:codeState}" @click="getCode">
            </div>
            <div class="input-row bdb">
                <input id="password" type="password" class="mui-input-clear mui-input-txt" placeholder="请设置密码" v-model.trim="pwd" @input="checkPwd">
            </div>
            <div class="input-row">
                <button type="button" class="submit" @click="submitFn" :class="{active:submitState}">注册</button>
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
import { apiRegcode,apiRegister } from 'api/api'
export default {
  components: {
    mHeader
  },
  data() {
    return {
        phone:'',
        code:'',
        pwd:'',
        codeState:false,
        submitState:false,
        lock:[],    //存储校验状态
        codeTxt:'获取验证码',
        isGetCode:false //是否获取验证码
    }
  },
  watch:{
    lock(val,val2){
        if(val.length == 3){
            for(let i=0;i<3;i++){
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
  computed:{
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
    checkPwd(){  
        if(this.pwd == ''){
            this.$set(this.lock,2,false)
        }else{
            this.$set(this.lock,2,true)
        }
    },
    getCode(){
        apiRegcode({
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
            if(this.pwd.length<6){
                alert('密码最少为6位')
                return;
            }
            if(!this.isGetCode){
                alert('请获取验证码')
                return;
            }
            let data = {
                mobile:this.phone,
                code:this.code,
                password:this.pwd
            }
            apiRegister(data).then((result) => {
                if(result.status == 1){
                    alert('注册成功')
                    window.location.href='/login'
                    this.$refs.myForm.reset()

                }else{
                    alert(result.msg)
                }
            }).catch((err) => {
                
            });
        }
    },
    countDown(time) {
        this.codeState = false;  
        time--
        this.codeTxt = "重新获取"+time+"s";
        if (time == 0) {  
            this.codeTxt = "重新发送"
            this.codeState = true;  
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

<style scoped>
@import "user.css";
</style>

