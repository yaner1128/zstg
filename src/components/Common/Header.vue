<template>
	<el-container>
      	<el-header height ='130px' >
            <div class="mainHeader">
                <div class="nav-left">
                    <img src="../../assets/images/logo.png">
                </div>
                <div class="nav-right">
                    <ul>
                      	<li v-for='(list,index) in Headerlist' :key='list.id' @click='bgcAdd(index)' :class="{active:list.id==current}" >
                        	<router-link :to='{name:list.name}'>{{list.title}}</router-link>
                      	</li>
                    </ul>
                </div>
            </div>
      	</el-header>
    </el-container>
</template>

<script>
export default {
  	name: 'Header',
    data() {
      	return {
      		Headerlist:[
        		{id:1,name:'Home',title:'首页'},
		        {id:2,name:'Display',title:'产品展示'},
		        {id:3,name:'News',title:'新闻中心'},
		        {id:4,name:'About',title:'关于我们'}
		    ],
		    current:0,
      	};
    },
    methods:{
    	bgcAdd(index){
      		this.current=index+1;
    	},
    }
};
</script>

<style lang="css" scoped>
/*点击添加背景色*/
.active{
	color: #08A72C;
	font-weight: bold;
}
.nav-right ul .active a{
	color: #08A72C;
}

/*导航栏*/
.el-container{
	width: 100%;
	height: 130px;
}
.el-header{
	width: 100%;
	height: 100%;
}
.mainHeader{
	width: 88%;
	height: 100%;
	margin: 0 auto;
}
/*左边*/
.mainHeader .nav-left{
	width: 30%;
	height: 100%;
	float: left;
	/*text-align: center;*/
	line-height: 165px;
}
.mainHeader .nav-left img{
	width: 150px;
	height: 35px;
}
/*右边*/
.mainHeader .nav-right{
	width: 50%;
	height: 100%;
	/*background-color: pink;*/
	float: right;
}
.mainHeader .nav-right ul{
	width: 100%;
	height: 100%;
}
.mainHeader .nav-right ul li{
	float: left;
	width: 25%;
	text-align: center;
	line-height: 130px;
	font-size: 15px;
	color: rgb(51,51,51);
}
.nav-right ul li>a{
	width: 100%;
	height: 100%;
	color: rgb(51,51,51);
}
.nav-right ul li a:hover{
	color:rgb(60,111,160);
}
</style>
