<template>
  <div class="home">
 <!-- 顶部-->
    <Head/>
    <!-- 搜索 -->
    <Search/>
    <!-- 导航 -->
    <Navigate/>
    <!-- 轮播图 -->
    <Carousel/>
    <Billing/>
    <Advertis/>
    <!-- 优质资源 -->
    <Resources/>
    <Recommend/>
    <Foot/>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from '../components/Head.vue'
import Search from '../components/Module/search'
import Navigate from '../components/Module/Navigate'
import Carousel from '../components/Carousel.vue'
import Foot from '../components/Foot.vue'
import Billing from '../components/Module/billing'
import Advertis from '../components/Module/advertis'
import Recommend from '../components/Module/recommend'
import Resources from '../components/Module/Resources'

export default {
  name: 'Home',
  components: {
    Head,
    Search,
    Navigate,
    Carousel,
    Billing,
    Advertis,
    Recommend,
    Resources,
    Foot
  }
}
</script>
