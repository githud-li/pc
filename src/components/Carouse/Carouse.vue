<template>
<!-- 走马灯 组件 -->
<div class=''>
    <el-carousel :interval="5000" arrow="always">
    <slot></slot>
  </el-carousel>
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

</style>
