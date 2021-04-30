<template>
<div>
<!-- 卖家基本信息 /联系人信息-->
<ContactPerson/>
<div class='sellerInfo'>
    <div class="sellerInfo-firm">
<!-- 卖家工作台/基本信息/公司信息 -->
      <Company/>
    </div>
    <div class="sellerInfo-firm">
<!-- 卖家基本信息 /详细信息-->
      <Detailed/>
    </div>
</div>

</div>
</template>

<script>
import ContactPerson from '../../components/SellerBackground/ContactPerson'// 联系人信息
import Company from '../../components/SellerBackground/Company'// 公司信息
import Detailed from '../../components/SellerBackground/Detailed'// 详细信息

export default {
  name: '',
  components: {
    ContactPerson,
    Company,
    Detailed
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
  methods: {

  }
}
</script>
<style scoped lang='scss'>

//公司信息
.sellerInfo{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .sellerInfo-firm{
        width: 810px;
        // height: 634px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 2px 4px 12px #efefef
    }
    .sellerInfo-detailed{
        width: 810px;
        // height: 634px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 2px 4px 12px #efefef
    }

}
</style>
