<template>
 <!-- 展会信息 -->
 <div>
   <!-- 顶部 -->
  <Head/>
   <!-- 搜索 -->
  <Search/>
   <!-- 产品导航 同级页面导航 -->
  <Navigation/>
  <div class="exhib">
   <div class="exhibOne"></div>
   <div class="exhibTow">
     <!-- 国内展会 -->
    <Domestic/>
    <!-- 国外展会 -->
    <Foreign/>
    <!-- 往期展会 -->
    <Past/>

   </div>
  </div>
  <!-- 底部 -->
    <Foot/>
 </div>
</template>

<script>
import Head from '../components/Head.vue'// 顶部
import Search from '../components/Module/search'// 搜索
import Navigation from '../components/Module/navigation'// 同级页面导航
import Domestic from '../components/Exhibitionl/domestic'// 国内展会
import Foreign from '../components/Exhibitionl/foreign'// 国外展会
import Past from '../components/Exhibitionl/Past'// 往期展会
import Foot from '../components/Foot'

export default {
  name: '',
  components: {
    Head,
    Search,
    Navigation,
    Domestic,
    Foreign,
    Past,
    Foot
  },
  props: {},
  data () {
    return {
      msg: '您好，欢迎来到中国进出口产品交易网！'
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style scoped lang="scss">
 .exhib{
  .exhibOne{
   width: 1200px;
   height: 280px;
   background: #aaff00;
   margin: 0 auto;
  }
  .exhibTow{
   width: 1200px;
   margin: 0 auto;
  }
 }
</style>
