<template>
	<div class="thirdAni">
		<div class="topImg">
			<img src="../../assets/images/secondAni1.jpg">
		</div>
		<div class="Bottomtext">
			<a href="#" class="title">UX与UI不是对立而是共生</a>
			<a href="#" class="text">对于网站来说,公司设计团队完善UI的目的通常都是</a>
		</div>
	</div>
</template>

<script>
export default {

  name: 'thirdAnimation',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
	.thirdAni{
		width: 360px;
		height: auto;
		margin: 0;
		padding: 0;
	}
	/*顶部图片*/
	.topImg{
		width: 100%;
		height: auto;
	}
	.topImg img{
		width: 100%;
		display: block;
	}
	/*底部文本*/
	.Bottomtext{
		width: 320px;
		height: 50px;
		/*background-color: #e0e0e0;*/
		color: rgb(51,51,51);
		text-align: center;
		padding:40px 20px;
	}
	.Bottomtext a{
		width: 100%;
		display: block;
		text-align: center;
		margin-bottom: 10px;
	}
	.Bottomtext a:hover{
		color:#1dcfd1;
	}
	.Bottomtext .title{
		color:rgb(51,51,51);
		font-size: 16px;
	}
	.Bottomtext .text{
		color:rgb(186,196,198);
		font-size: 14px;
	}
</style>
