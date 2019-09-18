<template>
	<div class="secondNew">
		<!-- 标题 -->
		<div class="title">
			<h1><a href="#">创客云-建站资源共享学习平台</a></h1>
		</div>
		<!-- 时间 -->
		<div class="date">
			<span>2016-03-07</span>&nbsp;/&nbsp;<span>by admin</span>
		</div>
		<!-- 文本 -->
		<div class="content">
			<p>
				创客云（www.22vd.com）专业提供网站模板，网页模板，网站源码，网站素材，网页特效等网页设计素材免费下载。我们致力于打造一个优秀的建站资源共享学习平台。 创客云离不开您的参与，如果您 ：
			</p>
		</div>
		<!-- 按钮 -->
		<div class="btn">
			<div>查看详情</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'secondNews',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
	.secondNew{
		width: 740px;
		height:200px;
		padding: 40px;
		background-color: #e0e0e0;
		position: relative;
	}
	/*标题*/
	.secondNew .title{
		width: 100%;
	}
	.secondNew .title a{
		color:#45464b;
		font-weight: normal;
	}
	.secondNew .title a:hover{
		color: #1dcfd1;
	}
	/*时间*/
	.secondNew .date{
		width: 100%;
		padding: 5px 0;
		font-size: 14px;
		color: #bac4c6;
	}
	/*新闻内容*/
	.secondNew .content{
		width: 100%;
		height: 50px;
		padding: 20px 0;
	}
	.secondNew .content p{
		font-size: 16px;
    	color: #98a2a4;
    	font-weight: normal;
    	line-height: 27px;
	}
	/*按钮*/
	.secondNew .btn{
		width: 100%;
		height: 70px;
		position: absolute;
		bottom: 0;
		cursor: pointer;
	}
	.secondNew .btn:hover{
		background-color: #1dcfd1;
		color:#fff;
	}
	.secondNew .btn>div{
		width: 100px;
		height: 36px;
		border: 2px solid #bac4c6;
		border-radius: 18px;
		text-align: center;
		line-height: 36px;
		color:#45464b;
	}
</style>