<template>
    <div class="login user-module">
        <m-header>
            <router-link tag="span" slot="header-right" class="mui-btn-link mui-pull-right" to="/register">注册账号</router-link>
        </m-header>
        <div class="mui-content">
            <h1>欢迎登录姜力</h1>
            <form id='loginForm' class="login-form" ref="myForm">
                <div class="input-row bdb">
                    <input id='account' type="text" class="mui-input-clear mui-input-txt" placeholder="请输入您的账号" v-model.trim="phone" @input="checkPhone">
                </div>
                <div class="input-row bdb">
                    <input id='password' :type="[lookPwd?'text':'password']" class="mui-input-txt" placeholder="请输入密码" v-model.trim="pwd" @input="checkPwd">
                    <i class="iconfont" :class="[lookPwd?'icon-zhengyan':'icon-biyan']" @click="lookPwdFn"></i>
                </div>
                <div class="input-row">
                    <button type="button" class="submit" :class="{active:submitState}" @click="submitFn">登录</button>
                </div>
            </form>

            <div class="mui-input">
                <div class="link-area">
                    <router-link tag="span" to="/forgetPwd" class="link forgetPassword fl">忘记密码</router-link>
                    <router-link tag="span" :to="`/codeLogin${pathParams}`" class="link forgetCode fr">短信验证码登录</router-link>
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
import { apiLoginByPass } from 'api/api'

export default {
    components:{
        mHeader
    },
    data(){
        return{
            pathParams:'',
            phone:'',
            pwd:'',
            submitState:false,
            lock:[],    //存储校验状态
            lookPwd:false   //密码是否可见   
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
    methods:{
        checkPhone(){  
            this.phone = this.phone.replace(/[^\d]/g,'')  //去除非数字
            if(this.phone.length == 11){
                let res = /^1[3456789]\d{9}$/;
                let result = res.test(this.phone);
                if(result){
                    this.$set(this.lock,0,true)
                }else{
                    alert('手机号输入有误')
                    this.$set(this.lock,0,false)
                }
            }else{
                this.$set(this.lock,0,false)
            }
        },
        checkPwd(){
            if(this.pwd == ''){
                this.$set(this.lock,1,false)
            }else{
                this.$set(this.lock,1,true)
            }
        },
        lookPwdFn(){
            this.lookPwd = !this.lookPwd
        },
        submitFn(){
            if(this.submitState){   //可以点击
                if(this.pwd.length<6){
                    alert('密码输入有误')
                    return;
                }
                let data = {
                    mobile:this.phone,
                    password:this.pwd
                }
                apiLoginByPass(data).then((result) => {
                    if(result.status == 1){
                        alert('登录成功')

                        // 储存user信息
                        let data = result.data
                        let userInfo = {
                            token:data.token
                        }
                        storage.set('userInfo',userInfo)

                        //判断跳转路径 有callback返回callback，否则返回index
                        const path = this.$route.query.redirect || '/'
                        this.$router.push(path)

                    }else{
                        alert(result.msg)
                    }
                }).catch((err) => {
                    alert(err)
                });

            }
        },
    }

}
</script>

<style>
@import 'user.css';

</style>

