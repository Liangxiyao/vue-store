<template>
  <div class="bindBank">
    <m-header>
      <span slot="header-cont">绑定银行卡</span>
    </m-header>
    <div class="mui-content">
      <div class="hd">
        <div class="warn">
          <i class="iconfont icon-warn"></i>
          请使用本人身份证认证的银行卡
        </div>
      </div>
      <div class="bd">
        <div class="form">
          <div class="title">银行卡信息</div>
          <div class="item">
            <label for="name">持卡人</label>
            <input type="text" name="name" id="name" v-model="form.name">
          </div>
          <div class="item">
            <label for="bankNo">银行卡号</label>
            <input type="text" name="idNo" id="bankNo" @keyup="textChange" v-model="form.bankNum">
          </div>
          <div class="item pr" id="showUserPicker">
            <i class="mui-navigate-right"></i>
            <label for="bankName">银行名称</label>
            <input type="text" name="idNo" id="bankName" value readonly>
          </div>
          <div class="item">
            <label for="branch">支行</label>
            <input type="text" name="idNo" id="branch" v-model="form.branch">
          </div>
          <div class="item">
            <label for="phone">预留手机号</label>
            <input type="text" name="idNo" id="phone" v-model="form.phone">
          </div>
        </div>
        <div class="tip">*以上信息仅用于身份认证</div>
        <input type="button" id="submit" value="下一步" @click="submit" class="mui-btn mui-btn-block">
      </div>
    </div>
  </div>
</template>

<script>
import mHeader from "base/header/header";
export default {
  components: {
    mHeader
  },
  data() {
    return {
      form: {
        name: '',
        bankNum: '',
        bankName: '',
        branch: '',
        phone: ''
      }
    }
  },
  methods: {
    textChange () {
      this.form.bankNum = this.form.bankNum.replace(/[^\d]/g, '')
    },
    submit(){
      if (this.form.name) {
        let regName = /^[\u4e00-\u9fa5]{2,6}$/
        if (!regName.test(this.form.name)) {
          alert('请输入正确名字')
          return false
        }
      } else {
        alert('请填写姓名')
        return
      }
      if (!this.form.bankNum) {
        alert('请填写银行卡号')
        return
      }
      if (!this.form.branch) {
        alert('请填写支行')
        return
      }
      if (this.form.phone) {
       let regPhone = /^1[3|4|5|6|7|8|9]\d{9}$/
       if (!regPhone.test(this.form.phone)) {
          alert('请输入正确手机号')
          return false
        }
      } else {
         alert('请填写手机号')
         return
      }
      alert('ok')
    }
  }
};
</script>

<style>
.bindBank .hd{background-color:#fff;padding:0 15px;}
.bindBank .hd .warn{font-size:13px;color:#666;height:50px;line-height:50px;}
.bindBank .hd .iconfont:before{font-size:22px;color:#f70800;vertical-align:middle;}
.bindBank .hd .upload .item{position:relative;margin-bottom:15px;}
.bindBank .hd .upload .item:first-of-type{margin-right:15px;}
.bindBank .hd .upload input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;}
.bindBank .bd{padding:15px;}
.bindBank .form{background-color:#fff;border-radius:5px;}
.bindBank .form .title{line-height:50px;font-size: 15px;color:#333;padding:0 15px;position:relative;}
.bindBank .form .item{padding:5px 15px;position:relative;}
.bindBank .form .item:after,.bindBank .form .title:after{position: absolute;right: 0;bottom: 0;left:0;height: 1px;content: '';-webkit-transform: scaleY(.5);transform: scaleY(.5);
background-color: #ddd;}
.bindBank .form .item label{display:block;font-size:12px;color:#ccc;}
.bindBank .form .item input,.bindBank .form .item textarea{width:100%;font-size:15px;color:#333;padding:6px 0;height:35px;
margin-bottom:0;border:0;font-family:'Helvetica Neue',Helvetica,sans-serif;}
.bindBank .form .item textarea{height:100px;}
.bindBank .bd .tip{font-size:12px;color:#999;line-height:40px;}
.bindBank .bd .mui-btn-block{border:none;background-color:#00A43E;color:#fff;font-size:16px;padding:12px;border-radius:5px;}

.bindBank .hd {background: transparent;}
.bindBank .hd .warn {height: 45px;line-height: 45px;}
.bindBank .bd {padding: 0 15px;}
.bindBank .mui-navigate-right:after{font-size:25px;right:5px;color:#ccc;}
.mui-btn-blue, .mui-btn-primary, input[type=submit]{background-color:#00A43E;border-color:#00A43E;}

</style>
