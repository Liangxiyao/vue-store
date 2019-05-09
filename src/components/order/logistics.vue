<template>
  <div class="mui-content logistics">
    <div class="hd">
      <div class="item">快递公司：中通快递</div>
      <div class="item">快递单号：123465665552122</div>
      <div class="item">
        快递电话：
        <span class="green">95565</span>
      </div>
    </div>
    <div class="bd">
      <ul class="lists">
        <li class="item">
          <div class="text">【北京市】快件已被A5前台签收,如有问题请电联业务员金全东【13717849343】。</div>
          <div class="date">
            2019-01-20
            <span class="time">21:20:20</span>
          </div>
        </li>
        <li class="item">
          <div class="text">【北京市】快件已被A5前台签收,如有问题请电联业务员：金全东【13717849343】。</div>
          <div class="date">
            2019-01-20
            <span class="time">21:20:20</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        orderId: {
            type: String,
            default: ''
        },
    },
    methods: {
        _getLogistics() {
            apiLogstics({
                order_id
            })
        }
    },
};
</script>

<style >
.logistics .hd{background-color:#fff;padding:10px 14px;line-height:20px;font-size:13px;color:#333;margin-bottom:15px;}
.logistics .hd .green{color:#00A43E;}
.logistics .bd{padding:20px 15px;background-color:#fff;font-size:13px;color:#999;line-height:18px;}
.logistics .bd .date{font-size:12px;margin-top:3px;}
.logistics .bd .date .time{padding-left:5px;}
.logistics .bd .item{border-left:1px dashed #ccc ;padding:0 0 20px 15px;position:relative;}
.logistics .bd .item:before{content:'';position:absolute;top:0;left:-4px;width:8px;height:8px;border-radius:50%;background-color:#ccc;}
.logistics .bd .item .text{position:relative;top:-3px;}
.logistics .bd .item:first-of-type:before{width:12px;height:12px;background: url(../../common/images/order-icon.png) no-repeat -4px -79px;background-size:20px;left:-6px;border-radius:0;}
.logistics .bd .item:first-of-type .text{color:#333;}
.logistics .bd .item:last-of-type{border-left:0;}

</style>