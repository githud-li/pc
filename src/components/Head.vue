<template>
<!-- 顶部 -->
<div class='class="my-top"'>
    <div class="my-top-Centered">
        <div class="my-top-Centered-left">
            <span>{{msg}}</span>
            <ul>
                <li><el-link href="#" target="_blank" :underline="false">登入</el-link></li>
                <li>|</li>
                <li><el-link href="#" target="_blank" :underline="false">免费注册</el-link></li>
            </ul>
        </div>
        <div class="my-top-Centered-Right">
            <ul>
                <li><el-link :underline="false"><span @click="Order()">我的订单</span><i class="el-icon-arrow-down el-icon--right"></i> </el-link></li>
                <li><el-link :underline="false">我的收藏</el-link></li>
                <li><el-link :underline="false">供应商服务</el-link></li>
                <li><el-link :underline="false">采购商服务</el-link></li>
                <li><el-link :underline="false">客服中心<i class="el-icon-arrow-down el-icon--right"></i> </el-link></li>
                <li><el-link :underline="false">网站导航<i class="el-icon-arrow-down el-icon--right"></i> </el-link></li>
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
    .my-top{
        width: 100%;
        height: 30px;
    }
    .my-top-Centered{
        width: 1200px;
        margin: 0 auto;
        line-height: 30px;
        position: relative;
    }
    .my-top-Centered-left{
        position: relative;
        width: 370px;

            span{
                font-size: 14px;
                color: #5A5A5A;
                display: inline-block;
                line-height: 35px;
            }
            ul{
                position: absolute;
                top: 0px;
                right: 0px;

                li{
                    float: left;
                    font-size: 14px;
                    color: #BF270F;
                    margin-left: 10px;

                    .el-link--inner{
                        font-size: 14px;
                    }
                }
            }
    }
    .my-top-Centered-Right{
        position: absolute;
        right: 0px;
        top: 0px;
        line-height: 30px;
        ul li{
            float: right;
            font-size: 14px;
            margin-left: 10px;
            color: #5A5A5A;
            .el-link--inner{
                font-size: 14px;
            }
        }
    }
</style>
