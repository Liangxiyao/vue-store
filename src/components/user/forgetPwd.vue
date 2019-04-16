<template>
<div class="forgetPwd user-module">
    <m-header></m-header>
    
    <div class="mui-content">
        <h1>找回密码</h1>
		<form id='loginForm' class="login-form" ref="loginForm">
			<div class="input-row bdb">
				<input id='account' type="text" class="mui-input-clear mui-input-txt mui-click-iphone" placeholder="请输入注册的手机号" v-model="phone" @input='checkPhone'>
			</div>
			<div class="input-row bdb">
				<input type="text" class="mui-input-txt" placeholder="请输入短信验证码" v-model="code" @input="checkCode">
				<input class="axc_yzm" id="btnSendCode" type="button" value="获取验证码" :value="codeTxt" :class="{active:codeState}" @click="getCode">
			</div>
			<div class="input-row">
				<button type="button" class="submit" @click="submitFn" :class="{active:submitState}">下一步</button>
			</div>
		</form>
    </div>
</div>
</template>
<script>
import mHeader from "base/header/header";
import { trim } from 'common/js/common';
import { apiGetFindCode,apiVarifyFindPassCode } from 'api/api'
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
        let value = trim(this.code)   
        if(value == ''){
            this.$set(this.lock,1,false)
        }else{
            this.$set(this.lock,1,true)
        }
    },
    getCode(){
        apiGetFindCode({
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
            apiVarifyFindPassCode(data).then((result) => {
                if(result.status == 1){
                    window.location.href=`/setNewPwd?phone=${this.phone}&id=${result.data.verify_id}`
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
    } 
  }
}
</script>

<style>
@import "user.css";
</style>

