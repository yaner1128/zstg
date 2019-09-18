<template>
	<div class="paging">
		<el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page.sync="currentPage3"
	      :page-size="100"
	      layout="prev, pager, next, jumper"
	      :total="1000">
	    </el-pagination>
	</div>
</template>

<script>
export default {

  name: 'pag',

  data() {
    return {
    	currentPage3: 5,
    };
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
};
</script>

<style lang="css" scoped>
	.paging{
		width: 100%;
		margin: 20px 0;
	}
	.el-pagination{
		width:500px;
	}
</style>
