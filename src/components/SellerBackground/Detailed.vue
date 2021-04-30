<template>
<!-- 卖家基本信息 /详细信息-->
<div class='detailed'>
    <div class="detailedIcon">
        <i class="el-icon-edit"><span>详细信息</span></i>
    </div>
    <div class="detailedUl">
        <ul>
            <li>QQ号码：<span>1111</span></li>
            <li>阿里旺旺：<span>222</span></li>
            <li>银行卡号：<span>333</span></li>
            <li>开户银行：<span>444</span></li>
            <li>身份证照：</li>
            <li>营业执照：</li>
        </ul>
    </div>
    <div class="detailedD">
        <el-button type="primary" >主要按钮</el-button>
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
.detailed{
    width: 39vw;
    margin: 0 auto;
    .detailedIcon{
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
    .detailedUl{
        padding-left: 30px;
        ul{
            height: 220px;
            display: flex;
            flex-direction: column;
            width: 680px;
            justify-content: space-around;
            li{
                font-size: 16px;
                color: #272727;
                span{
                    font-size: 12px;
                    color: #8C8C8C;
                }
            }
        }
    }
    .detailedD{
        padding: 100px 0px;
        display: flex;
        justify-content: flex-end;
    }
}
</style>
