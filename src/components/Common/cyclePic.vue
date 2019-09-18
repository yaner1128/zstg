<template>
	<div class="slide">
		<el-carousel :interval="5000" arrow="always">
	    	<el-carousel-item v-for="Item in cyclePicture" :key="Item.id">
	    		<img :src="Item.src">
	    		<h2>{{Item.title}}</h2>
	    	</el-carousel-item>
  		</el-carousel>
	</div>

</template>

<script>
export default {

  name: 'cyclePic',

  data() {
    return {
    	cyclePicture:[
    		{
          		id:1,
          		src:require('../../../src/assets/images/slide_1_bg.jpg'),
          		title: '大标题',
        	},
         	{
          		id:2,
          		src:require('../../../src/assets/images/slide_2_bg.jpg'),
          		title: '大标题',
        	},
        	{
          		id:3,
          		src:require('../../../src/assets/images/slide_3_bg.jpg'),
          		title: '大标题',
        	},
    	]
    };
  },
};
</script>

<style lang="css">
  .el-carousel__item:nth-child(2n){
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1){
    background-color: #d3dce6;
  }
  .slide .el-carousel__container{
	height: 680px;
  }
  .slide{
  	position: relative;
  }
  h2{
  	position: absolute;
  	width: 100%;
  	text-align: center;
  	top: 40%;
  	color: #fff;
  	font-size: 50px;
  }
</style>
