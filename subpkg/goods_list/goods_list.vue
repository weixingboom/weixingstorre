<template>
	<view>
		<view class="goods-list">
			<view v-for="(goods,i) in goodsList" :key="i" @click="gotoDetail(goods)">
			<my-goods :goods='goods'></my-goods>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				queryObj:{
					query:'',
					cid:'',
					pagenum:1,
					pagesize:10
				},
				goodsList:[],
				total:0,
				//防止某些图片不存在
				 // 默认的空图片
			defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
			isloading:false
			};
		},
		onLoad(options) {
			console.log(options);
			this.queryObj.query=options.query||''
			this.queryObj.cid=options.cid||''
			this.getGoodsList()
		},
		methods:{
			// 获取商品列表的方法
			async getGoodsList(cb){
				//打开节流阀
				this.isloading=true
				const{data:res}=await uni.$http.get('https://api-ugo-web.itheima.net/api/public/v1/goods/search',this.queryObj)
				//关闭节流阀
				this.isloading=false
				cb&&cb()
				if(res.meta.status!==200) return uni.$showMsg()
				
				this.goodsList=[...this.goodsList,...res.message.goods]
				this.total=res.message.total
			},
			gotoDetail(goods){
				uni.navigateTo({
					url:"/subpkg/goods_detail/goods_detail?goods_id="+goods.goods_id
				})
			}
		},
		onReachBottom(){
			if(this.isloading) return 
			//让页码之子增加一
			this.queryObj.pagenum++
			//重新获取列表数据
			this.getGoodsList()
		},
		onPullDownRefresh(){
			//充值关键数据
			this.queryObj.pagenum=1
			this.total=0
			this.isloading=false
			this.goodsList=[]
			
			//重新发起数据请求
			this.getGoodsList(()=>uni.stopPullDownRefresh())
		},
	}
</script>

<style lang="scss">
</style>
