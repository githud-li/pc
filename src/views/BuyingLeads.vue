<template>
 <!-- 求购信息 -->
  <div class="buying">
 <Head/>
    <Search/>
 <Navigation/>
 <div class="buying-total">
  <div class="buying-total-Centered">
   <div class="buying-total-top">
    <p>求购信息(共找到<span>{{amount}}</span>条求购信息）</p>
   </div>
   <div class="buying-total-cne">
    <ul>
     <li v-for="item in title" :key='item' @click="Head"><a href="">{{item}}</a></li>
    </ul>
   </div>
   <div class="buying-total-bottom">
    发货地
   </div>
   <div class="buying-total-bottomLi">
    <div class="buying-total-bottomLione">
     <ul>
      <li>标题</li>
      <li>采购量</li>
      <li>交货地址</li>
      <li>报名截止日期</li>
      <li>采购商信息</li>
      <li>操作</li>
     </ul>
    </div>
     <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">

    <div class="buying-total-bottomLitwo" v-for="i in count" :key='i'>
     <div class="bottomLitwo">
      <h1>求购儿童吸管</h1>
      <p>发布日期：2020-11-05</p>
     </div>
     <div class="bottomLitwo">
      <p>5000个</p>
     </div>
     <div class="bottomLitwo">
      <p>交货地：江苏 南通</p>
     </div>
     <div class="bottomLitwo">
      <p>2010-12-24</p>
      <p>剩余30天</p>
     </div>
     <div class="bottomLitwo">
      <p>广东兴发铝业有限公司</p>
     </div>
     <div class="bottomLitwo">
      <div></div>
      <p>已有1人报价</p>
     </div>
    </div>

    </ul>
   </div>
  </div>
 </div>
 <Foot/>
  </div>
</template>
<script>
import Head from '../components/Head.vue'
import Search from '../components/Module/search'
import Navigation from '../components/Module/navigation'
import Foot from '../components/Foot.vue'
export default {
  name: '',
  components: {
    Head,
    Search,
    Navigation,
    Foot
  },
  props: {},
  data () {
    return {
      count: 0,
      amount: 300,
      title: ['机械/五金工具', '工业/环保设备', '家装建材/家具摆设', '电子元件/仪表', '电工电气/通讯广播', '交通运输/汽摩',
        '化工/冶金能源', '电脑数码/消费电子', '安防/照明', '日用百货/节庆礼品', '休闲娱乐/玩具', '服装配饰/纺织',
        '食品农业/园艺工具', '箱包/工业盒子', '制造加工机械', '冶金矿产和能源', '包装和印刷用品', '计算机数码产品'
      ]

    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    Head () {
      console.log(1)
    },
    load () {
      this.count += 1
    }
  }
}
</script>
<style scoped lang="scss">
 .buying-total{
  .buying-total-Centered{
   width: 1200px;

   margin:  0 auto;
   margin-top: 20px;
   .buying-total-top{
    p{
     span{
      color: #BF270F;
     }
    }
   }
   .buying-total-cne{
    border: 1px solid #BFBFBF;
    height: 104px;
    margin-top: 10px;
    ul{
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;

     li{
      width: 180px;
      padding: 8px 0px;
      a{
       font-size: 14px;
       color: #272727;
      }
     }
    }
   }
   .buying-total-bottomLi{

    .buying-total-bottomLione{
     height: 42px;
     line-height: 42px;
     ul{
      display: flex;
      justify-content: space-around;;

      li{

       text-align: center;
      }
     }
    }
    .buying-total-bottomLitwo{
     display: flex;
     justify-content: space-around;
     align-items: center;
     background: #fff;
     height: 86px;
     margin-bottom: 3px;

    }
   }
  }
 }
</style>
