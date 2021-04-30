<template>
<div class="layoutTopCen">
    <div class="layoutTopCenP">
        <span>您好，欢迎来到中国进出口产品交易网！</span>
        <ul>
            <li>客服电话：</li>
            <li>400-860-0992</li>
            <li><a href="">个人中心</a></li>
        </ul>
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
.layoutTopCen{
    width: 1200px;
    margin: 0 auto;

    .layoutTopCenP{
        display: flex;
        justify-content: space-between;
        span{
            color: #000;
            font-size: 14px;
        }
        ul{
            display: flex;
            justify-content: space-between;
            width: 230px;
            float: right;
            li{
                list-style: none;
                font-size: 14px;
                color: #000;
            }
            a:hover{
                color: red;;
            }
        }
    }
}
</style>
