<template>
	<div class="secodAni">
		<div class="sAbgImg" @mouseenter="sAenter" @mouseleave="sAleave">
			<img src="../../assets/images/secondAni1.jpg">
			<!-- 上半部分 -->
			<transition name="el-zoom-in-top">
        		<div v-show="sAshow" class="transition-box sAmaskOne">
        			<div class="cycleLinkTop">
        				<span>图</span>
        				<span>图</span>
        			</div>
        		</div>
      		</transition>
      		<!-- 下部分 -->
			<transition name="el-zoom-in-bottom">
        		<div v-show="sAshow" class="transition-box sAmaskTwo">
        			<div class="cycleLinkBottom">
        				<p>UX与UI不是对立而是共生</p>
        				<p>网页设计</p>
        			</div>
        		</div>
      		</transition>
		</div>
	</div>
</template>

<script>
export default {

  name: 'secodAnimation',

  data() {
    return {
    	sAshow:false,
    };
  },
  methods:{
  	sAenter(){
  		this.sAshow=true;
  		event.stopPropagation(); 
  	},
  	sAleave(){
  		this.sAshow=false;
  		 event.stopPropagation(); 
  	}
  },
};
</script>

<style lang="css" scoped>
	.secodAni{
		width: 337px;
		height: 260px;
		position: relative;
	}
	.sAbgImg{
		width: 100%;
		height: 260px;
	}
	.sAbgImg img{
		width: 100%;
		height: 260px;
	}
	/*模糊背景*/
	.Smask{
		width: 100%;
		height: 100%;
	}
	.sAmaskOne{
		width: 100%;
		height: 50%;
		background-color: rgba(0,0,0,0.5);
		position: absolute;
		top: 0;
		left: 0;
	}
	.sAmaskTwo{
		width: 100%;
		height: 50%;
		background-color: rgba(0,0,0,0.5);
		position: absolute;
		bottom: 0;
		left: 0;
	}
	/*链接图标*/
	.cycleLinkTop{
		width: 100%;
		height: 40px;
		position: absolute;
		bottom: 10px;	
		left: 0;
		text-align: center;
	}
	.cycleLinkTop span{
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		background-color: #fff;
		color: #1dcfd1;
		margin: 0 10px;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}
	.cycleLinkTop span:hover{
		background-color: #1dcfd1;
		color:#fff;
	}
	.cycleLinkBottom{
		width: 100%;
		height: 70px;
		position: absolute;
		top: 20px;
		left: 0;
		text-align: center;
	}
	.cycleLinkBottom p{
		color:#fff;
		text-align: center;
		font-size: 18px;
		cursor: pointer;
		margin-bottom: 10px;
	}
	.cycleLinkBottom p:hover{
		color: #1dcfd1;
	}
</style>