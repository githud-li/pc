<template>
<!--卖家后台管理 分类管理 -->
<div class='LnCharge'>
    <div class="LnChargeCen">
        <div class="LnChargeBo">
             <el-button type="primary">添加分类</el-button>
        </div>
        <div class="LnChargeTable">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                    <el-table-column
                    prop="date"
                    label="分类名称"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="创建时间"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">删除</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
                    </template>
                    </el-table-column>
            </el-table>
        </div>
        <div class="LnChargePag">
            <el-button-group>
                <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
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
.LnCharge{
    background: #fff;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 2px 4px 12px #efefef;
    .LnChargeCen{
        width: 80vw;
        margin: 0 auto;
        .LnChargeBo{
            padding: 30px 0px;
        }
        .LnChargeTable{

        }
        .LnChargePag{
            display: flex;
            justify-content: center;
            padding: 30px 0px;
        }
    }
}
</style>
