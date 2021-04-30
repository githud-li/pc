<template>
<!-- 新闻图片资讯 -->
<div class='piLnf'>
    <div class="pilnfCen">
        <div class="piinfH">
            <h2>{{name}}</h2>
            <p><a href="">{{newdadt}}</a><i class="el-icon-arrow-right"></i></p>
        </div>
        <div class="pilinf-Div">
            <div class="pilinf-Div-tu" v-for="a in 3" :key="a">
                <div class="demo-image__placeholder">
                    <div class="block">
                        <!-- <span class="demonstration">自定义</span> -->
                        <el-image :src="src">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                        </el-image>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      name: '行业资讯',
      newdadt: '查看更多',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
.piLnf{
    .pilnfCen{
         width: 1200px;
         margin: 0 auto;
        .piinfH{
             margin: 20px 0px;
            h2{
                text-align: center;
                color: #272727;
                font-size: 24px;
            }
            p{
                display: flex;
                justify-content: flex-end;
                i{
                    margin: 3px 2px 0px 0px;
                }
            }
        }
        .pilinf-Div{
            display:flex;
            justify-content: space-between;
        }
    }
}
.el-image{
    width: 392px;
    height: 360px;
}
</style>
