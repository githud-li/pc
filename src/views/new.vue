<template>
<!-- 新闻资讯页 -->
<div class=''>
    <SeNew/>
    <LnNew/>
    <PiLnf/>
    <GONews/>
    <Foot/>
</div>
</template>

<script>
import SeNew from '../components/news/SecondaryNavigation'// 新闻页面导航组件
import LnNew from '../components/news/LndustryLnformation'// 新闻行业资讯组件
import PiLnf from '../components/news/PictureLnformation'// 新闻图片资讯组件
import GONews from '../components/news/GovernmentNews'// 新闻政府要闻组件
import Foot from '../components/Foot'// 底部
export default {
  name: '',
  components: {
    SeNew,
    LnNew,
    PiLnf,
    GONews,
    Foot
  },
  props: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>

</style>
