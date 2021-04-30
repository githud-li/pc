<template>
<!-- 新闻政府要闻 -->
<div class='GONews'>
    <div class="GONewsCen">
        <div class="GONewsH">
            <h2>{{name}}</h2>
            <p><a href="">{{newdadt}}</a><i class="el-icon-arrow-right"></i></p>
        </div>
        <div class="GONewsFor">
            <div class="GONewsp"  v-for="item in 6" :key="item">
            <div class="GONewsp-Div">
                <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt="">
            </div>
            <div class="GONewsp-Div">
                <dl>
                    <dt>跨境电商线上综合服务平台“六体系”建设专题工 作会议顺利召开</dt>
                    <dd>为加快推进跨境电商综试区建设，进一步完善中国（嘉兴）跨境 电子商务综合试验区线上综合服务平台“六体系”功能，实现政府 管理部门之间“信息互换、监督互认、执法互助”，更好服务跨境 电商企业，4月2日上午，我局组织海关、税务、外管、法院、市 场监管、嘉服集团等相关部门负责人召开专题工作会议。</dd>
                    <dd>2021-04-08</dd>
                </dl>
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
      name: '政府要闻',
      newdadt: '查看更多'
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
.GONews{
    margin-bottom: 40px;
    .GONewsCen{
        width: 1200px;
        margin: 0 auto;
        .GONewsH{
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
        .GONewsp{
            width: 392px;
            height: 464px;
            background: #fff;
            margin-bottom: 12px;
            .GONewsp-Div:first-child{
                text-align: center;
                img{
                    width: 392px;
                    height: 240px;
                }
            }
            .GONewsp-Div:last-child{
                width: 300px;
                margin: 0 auto;
                dl{
                    display: flex;
                    flex-direction: column ;
                    dt{
                        padding-top: 10px;
                        color: #272727;
                        font-size: 16px;
                    }
                    dd{
                        padding: 10px 0px;
                        color: #5A5A5A;
                        font-size: 12px;
                    }
                }
            }
        }
        .GONewsFor{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
}
</style>
