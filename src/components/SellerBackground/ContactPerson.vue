<template>
<!--基本信息 /联系人信息 -->
<div>
<div class='BasicSeller'>
    <div class="BasicSeller-contact">
        <div class="BasicSeller-contact-man">
            <i class="el-icon-s-custom"><span>联系人信息</span></i>
        </div>
        <div class="BasicSeller-contact-ul">
            <ul>
                <li>联系人姓名：<a href="">111111111111111111</a></li>
                <li>联系人电话：<a href="">2211111111111112</a></li>
                <li>联系人邮箱：<a href="">3111111111111133</a></li>
            </ul>
        </div>
        <div class="BasicSeller-contact-button">
            <el-button type="primary"  @click="dialogFormVisible = true">主要按钮</el-button>
        </div>
    </div>
</div>
<!-- 弹框 -->
<el-dialog title="联系人信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="联系人姓名" >
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="联系人电话" >
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="联系人邮箱" >
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
.BasicSeller{
    background: #fff;
    height: 202px;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 2px 4px 12px #efefef
}
.BasicSeller-contact{
    width: 83vw;
    margin: 0 auto;
    .BasicSeller-contact-man{
        padding: 30px 0px;
        i{
            font-size: 20px;
            span{
                font-size: 20px;
                margin-left: 10px;
            }
        }
    }
    .BasicSeller-contact-ul{
        ul{
            display: flex;
            padding-left: 30px;
            li{
                padding-right: 30px;
                font-size: 16px;
                color: #272727;
                a{
                    font-size: 12px;
                    color: 8C8C8C;
                }
            }
        }

    }
}
.BasicSeller-contact-button{
    padding: 30px;
    display: flex;
    justify-content: flex-end;

}
</style>
