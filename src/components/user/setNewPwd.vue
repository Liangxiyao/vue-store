<template>
    <div class="login user-module">
        <m-header></m-header>
        <div class="mui-content">
            <h1>设置新密码</h1>
            <form id='loginForm' class="login-form" ref="myForm">
                <div class="input-row bdb">
                    <input ref="pwd1" :type="[lookPwd1?'text':'password']" class="mui-input-txt" placeholder="请输入新密码" v-model.trim="pwd1" @input="checkPwd(pwd1,0)">
                    <i class="iconfont" :class="[lookPwd1?'icon-zhengyan':'icon-biyan']" @click="lookPwdFn(lookPwd1,1)"></i>
                </div>
                <div class="input-row bdb">
                    <input  ref="pwd2" :type="[lookPwd2?'text':'password']" class="mui-input-txt" placeholder="重复新密码" v-model.trim="pwd2" @input="checkPwd(pwd2,1)">
                    <i class="iconfont" :class="[lookPwd2?'icon-zhengyan':'icon-biyan']" @click="lookPwdFn(lookPwd2,2)"></i>
                </div>
                <div class="input-row">
                    <button type="button" class="submit" :class="{active:submitState}" @click="submitFn">确定</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import mHeader from "base/header/header"
import { apiResetPass } from 'api/api'
import {GetQueryString} from "common/js/common.js"

export default {
    components:{
        mHeader
    },
    data(){
        return{
            pwd1:'',
            pwd2:'',
            submitState:false,
            lock:[],    //存储校验状态
            lookPwd1:false,  //密码是否可见 
            lookPwd2:false   
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
    methods:{
        checkPwd(val,index){
            if(val == ''){
                this.$set(this.lock,index,false)
            }else{
                this.$set(this.lock,index,true)
            }
        },
        lookPwdFn(val,index){
            val = !val
            if(index == 1){
                this.lookPwd1 = val
            }else if(index = 2){
                this.lookPwd2 = val
            }
        },
        submitFn(){
            if(this.submitState){   //可以点击
                if(this.pwd1.length < 6){
                    alert('密码最少为6位')
                    this.$refs.pwd1.focus()
                    return;
                }else if(this.pwd1 !== this.pwd2){
                    alert('两次输入的密码不一致,请重新输入')
                    this.$refs.pwd2.focus()
                    return;
                }

                let data = {
                    mobile:GetQueryString('phone'),
                    password:this.pwd1,
                    repassword:this.pwd2,
                    verify_id:GetQueryString('id')
                }
                apiResetPass(data).then((result) => {
                    if(result.status == 1){
                        alert('修改成功')
                        window.location.href = '/login'
                        this.$refs.myForm.reset();
                    }else{
                        alert(result.msg)
                    }
                }).catch((err) => {
                    
                });

            }
        }
    }

}
</script>

<style>
@import 'user.css';

</style>

