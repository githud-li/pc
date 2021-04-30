<template>
<!-- 新闻页面导航 -->
<div class='news'>
    <div class='newCen'>
        <div class="newLogo">
            <img src="../../assets/logo.jpg" alt="">
        </div>
        <div class="newUl">
            <ul>
                <li v-for="item in navigation" :key="item.id"><a href="">{{item.name}}</a></li>
            </ul>
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
      navigation: [
        {
          name: '首页',
          id: 2
        },
        {
          name: '求购信息',
          id: 2
        },
        {
          name: '展会信息',
          id: 3
        },
        {
          name: '新闻资讯',
          id: 4
        }
      ]
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
    .news{
        background: #f5f5f5;
        background: #fff;
        .newCen{
            width: 1200px;
            height: 90px;
            margin:0 auto;
            display: flex;
            align-items: center;
            .newLogo{
                width: 300px;
                img{
                    width: 289px;
                    height: 75px;
                }
            }
            .newUl{
                width: 500px;
                ul{
                    height: 75px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    li {
                        a{
                            color: #272727;
                            font-size: 20px;
                        }
                    }
                    a:hover{color:red;}//鼠标放上去字体变红
                }
            }
        }
    }
</style>
