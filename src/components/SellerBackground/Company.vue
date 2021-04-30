<template>
<!-- 基本信息/ 公司信息 -->
<div class=''>
    <div class="sellerInfoCen">
        <div class="sellerInfoCenIcon">
          <i class="el-icon-office-building"><span>公司信息</span></i>
        </div>
        <div class="sellerInfoCenUl">
          <ul>
            <li>公司名称：<a href="">江苏斯菲尔电气股份有限公司</a></li>
            <li>公司简介：<a href="">江苏斯菲尔电气股份有限公司成立于1998年，是一家专注于为智能电网用户提供电力监控、电能质量改善、电气安全等系统性解决方案的高新技术企业。我们专注于各类综合运维及能源管理平台的研发与服务，业务聚焦于轨道交通、市政建筑、综合管廊、信息通信、商业地产、医疗卫生等行业和领域。江苏斯菲尔电气股份有限公司，是国内首家实现智能配电仪表产业化的企业，改变了传统指针式仪表一统天下的格局。率先实现了电力仪表数字化、智能化、网络化，技术达到了国际先进水平，能为客户提供安全、高效、节能用电的综合性解决方案。斯菲尔电气致力于打造行业第一品牌。自创立以来，“江苏省高新技术企业”、“软件企业”、“优秀民营科技企业”、“工程技术中心”、“江苏省著名商标”、80余项发明及实用新型专利、20余项软件著作权....这些来自社会各界的荣誉和表彰正是对斯菲尔电气十年如一日辛苦付出的最好褒奖。作为高新技术企业及“双软企业”</a></li>
            <li>详细地址：<a href="">江苏无锡江阴市东定路1号</a></li>
          </ul>
        </div>
        <div class="sellerInfoCenB">
          <el-button type="primary" >主要按钮</el-button>
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
.sellerInfoCen{
      width: 39vw;
      margin: 0 auto;
      .sellerInfoCenIcon{
        padding: 30px 0px;
        i{
          font-size: 20px;
          span{
            font-size: 20px;
            margin-left: 10px;
            color: #272727;
          }
        }
      }
      .sellerInfoCenUl{
        padding-left: 30px;
        ul{
          height: 350px;
          display: flex;
          flex-direction: column;
          width: 680px;
          justify-content: space-around;
          li:nth-child(2){
            display: flex;
            a{
              width: 600px;
            }
          }
          li{
            font-size: 16px;
            color: #272727;
            a{
              font-size: 12px;
              color: #8C8C8C;
            }
          }
        }
      }
      .sellerInfoCenB{
        // padding: 100px 0px;
        display: flex;
        justify-content: flex-end;
      }
    }
</style>
