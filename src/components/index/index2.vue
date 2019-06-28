   
<template>
  <div class="pagination-box">
    <h2>PaginationChild 分页</h2>

    <div class="wrap wbox">
      <button class="prev" :disabled="prev_disabled" @click="clickPrev"><</button>
      <ul class="wbox">
        <li class="item" :class="{active:nowCur=='first'}" @click="clickItem('first',1)">1</li>
        <li class="item spot" v-show="l_spot">...</li>
        <li class="item"
            :class="{active:nowCur==i}"
            v-for="(item,i) in pageArr" :key="i"
            @click="clickItem(i,item)">{{item}}</li>
        <li class="item spot" v-show="r_spot">...</li>
        <li class="item" :class="{active:nowCur=='last'}" @click="clickItem('last',total)">{{total}}</li>
      </ul>
      <button class="next" :disabled="next_disabled" @click="clickNext">></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 10,
      prev_disabled: false,
      next_disabled: false,
      l_spot: false,
      r_spot: false,
      nowCur: 'first',
      nowPage:1

    };
  },
  computed: {
    pageArr() {
      let arr = [];
      let len = 7;
      if (this.total > 7) { //大于7条数据右边点显示   
        len = 7;
        this.r_spot = true;
      } else {
        len = this.total;
        this.r_spot = false;
      }
      for (let i = 2; i < 7; i++) {  //中间页码
        arr.push(i);
      }
      return arr;
    }
  },
  created() {
    this.btnDisabled();
  },
  methods: {
    tapItem(index,item) {
      //当前活动页
      this.nowCur = index;
      this.nowPage = item 
      this.btnDisabled()
    },
    clickPrev() {
      if(this.nowCur < 2 ){
        this.nowCur = 'first'
      }
      this.nowCur -- 
      this.btnDisabled()
    },
    clickNext(){
        if(this.nowCur == 'first'){
            this.nowCur = 0
        }else if(this.nowCur>=this.total){
            this.nowCur = 'last'
        }else if(this.nowCur>){

        }else{
            this.nowCur ++ 
        }

        console.log(this.nowCur)
        this.leftSpotShow()
        this.btnDisabled()
    },
    btnDisabled() {
      if (this.nowCur == 'first') {
        this.prev_disabled = true;
        this.next_disabled = false;
      }else if(this.nowCur == 'last') {
        this.next_disabled = true;
        this.prev_disabled = false;
      }else{
        this.next_disabled = false;
        this.prev_disabled = false;
      }
    },
    //左边省略号是否显示
    leftSpotShow(){
        if(this.total>7 && this.nowPage>=4){
            this.l_spot = true
            console.log(this.pageArr)
        }
    }
  }
};
</script>

<style>
html,
body {
  background-color: #fff;
}
.pagination-box {
  width: 100%;
}
.wrap {
  text-align: center;
  width: 100%;
  margin-top: 20px;
  justify-content: center;
}
.next,
.prev,
.item {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  background-color: #eee;
  margin-right: 10px;
  cursor: pointer;
  padding: 0;
}
.next,
.prev{font-size:15px;}
.item.spot {
  line-height: 35px;
}
.item.active {
  background-color: #409eff;
  color: #fff;
}
.prev:disabled,
.next:disabled {
  cursor: not-allowed;
}
</style>

