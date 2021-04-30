<template>
 <div class="divider">
  <div class="divider_up">
   <div class="title" id="contain_title"><i class="iconfont iconhangyefenlei"></i>行业分类</div>
   <div class="header" id="header">
    <ul>
     <li class="cur"><a href="/index">首页</a></li>
     <li><a href="BuyingLeads">求购信息</a></li>
     <li><a href="/Exhibition">展会信息</a></li>
     <li><a href="/New">新闻资讯</a></li>
    </ul>
   </div>
  </div>
  <div class="divider_down">
   <div class="list_left">
    <div class="meu" @mouseenter="enter" @mouseleave="leave" >
     <input type="hidden" value="1">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">机械/五金工具</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="11">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">工业设备/环保设备</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="21">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">家装建材/家具摆设</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="33">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">电子元件/仪表</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="45">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">电工电气/通信广播</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="59">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">交通运输/汽摩</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="71">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">化工/治金能源</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="78">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">安防/照明</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="85">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">日用百货/节庆礼品</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="92">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">电脑数码/消费电子</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="99">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">休闲娱乐/玩具</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="106">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">服装配饰/纺织</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="115">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1"  >食品农业/园艺工具</span>
      </div>
     </div>
    </div>
    <div class="meu">
     <input type="hidden" value="122">
     <div class="list_liftIn">
      <div class="list_cloum1">
       <i class="iconfont"></i>
       <span class="span1">箱包/工艺盒子</span>
      </div>
     </div>
    </div>
   </div>

  </div>
  <div class="divider_right" v-show="isShow">
   <div class="list_con">
    <div class="list_top">
     <p class="p1">日用百货/节庆礼品</p>
     <div class="list_oncloum1" v-for="a in 5" :key="a">
      <span class="title" style="cursor: pointer" onclick="clickAssortName('B86','包装传输')">包装传输</span>
      <span class="con">
        <span style="cursor: pointer" onclick="clickAssortName('C87','包装盒')">包装盒</span>
        <span style="cursor: pointer" onclick="clickAssortName('C88','包装箱')">包装箱</span>
        <span style="cursor: pointer" onclick="clickAssortName('C837','包装袋')">包装袋</span>
        <span style="cursor: pointer" onclick="clickAssortName('C881','扎带')">扎带</span>
        <span style="cursor: pointer" onclick="clickAssortName('C881','扎带')">扎带</span>
        <span style="cursor: pointer" onclick="clickAssortName('C87','包装盒')">包装盒</span>
        <span style="cursor: pointer" onclick="clickAssortName('C88','包装箱')">包装箱</span>
        <span style="cursor: pointer" onclick="clickAssortName('C837','包装袋')">包装袋</span>
        <span style="cursor: pointer" onclick="clickAssortName('C881','扎带')">扎带</span>
        <span style="cursor: pointer" onclick="clickAssortName('C881','扎带')">扎带</span>
 <span style="cursor: pointer" onclick="clickAssortName('C87','包装盒')">包装盒</span>
        <span style="cursor: pointer" onclick="clickAssortName('C88','包装箱')">包装箱</span>
        <span style="cursor: pointer" onclick="clickAssortName('C837','包装袋')">包装袋</span>
        <span style="cursor: pointer" onclick="clickAssortName('C881','扎带')">扎带</span>
        <span style="cursor: pointer" onclick="clickAssortName('C881','扎带')">扎带</span>
      </span>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      isShow: true
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    enter () {
      console.log(1)
      this.isShow = true
    },
    leave () {
      console.log(1)

      this.isShow = false
    }
  }
}
</script>

<style scoped lang="scss">
 .divider {
  .active{
   display: block;
  }
  width: 1200px;
  height: 40px;
  margin: 0 auto;

  .divider_up {
   display: flex;
   height: 100%;
   align-items: center;

   .title {
    width: 210px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #fff;
    background: #BF270F;
   }

   .header {
    ul {
     width: 500px;
     display: flex;
     justify-content: space-around;

     li {
      a {
       color: #272727;
       font-size: 16px;
      }
     }
    }
   }
  }

  .divider_down {
   width: 210px;
   position: relative;
    z-index: 10;
   .list_left {
    position: absolute;
    top: 0px;
    width: 210px;
    opacity: 0.75;
    background: rgba(0, 0, 0, 0.25);

    .meu {
     height: 37px;
     display: flex;
     justify-content: center;
     align-items: center;

     span {
      color: #FFFFFF;
      font-size: 14px;
     }
    }
   }
  }
  .divider_right{
   position: relative;
   z-index: 10;
   .list_con{
    width: 780px;
    height: 520px;
    position: absolute;
    top: 0px;
    left: 210px;
    background: #fff;
    .p1{
     color: #272727;
     font-size: 14px;
     font-weight: bold;
     padding-top: 20px;
    }
    .list_top{
     width: 720px;
     height: 500px;
     margin: 0 auto;
     display: flex;
     flex-direction: column ;
     justify-content: space-between;
     .list_oncloum1{
      display: flex;
      // flex-direction: column;
      // justify-content: space-around;
      height: 50px;
      .title{
       width: 100px;
       font-size: 14px;
       color: #272727;
      }
      .con{
           border-bottom: 1px dashed #e6e6e6;

       span{
        margin: 10px 10px;
        font-size: 14px;
        color: #272727;
       }
      }
     }
    }
   }
  }
 }
</style>
