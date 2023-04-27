export default {
	//为当前模块开启明明空间
	namespaced: true,

	// 模块的 state 数据
	state: () => ({
		// 购物车的数组，用来存储购物车中每个商品的信息对象
		// 每个商品的信息对象，都包含如下 6 个属性：
		// { goods_id, goods_name, goods_price, goods_count, goods_small_logo, goods_state }
		cart: JSON.parse(uni.getStorageSync('cart')||'[]'),
	}),

	// 模块的 mutations 方法
	mutations: {
		addToCart(state, goods) {
			const findResult = state.cart.find(x => x.goods_id === goods.goods_id)
			if (!findResult) {
				state.cart.push(goods)
			} else {
				findResult.goods_count++
			}
			
			this.commit('m_cart/saveToStorage')
			// console.log(state.cart);
		},
		saveToStorage(state){
			uni.setStorageSync('cart',JSON.stringify(state.cart))
		},
		//更新购物车的选中状态
		updateGoodsState(state,goods){
			const findResult=state.cart.find(x=>x.goods_id===goods.goods_id)
			
			if(findResult){
				findResult.goods_state=goods.goods_state
				
				this.commit("m_cart/saveToStorage")
			}
		},
		//更新商品数量
		updateGoodsCount(state,goods){
			const findResult=state.cart.find(x=>x.goods_id===goods.goods_id)
			
			if(findResult){
				findResult.goods_count=goods.goods_count
			}
			this.commit("m_cart/saveToStorage")
		},
		//根据id从购物车删除数据
		removeGoodsById(state,goods_id){
			state.cart=state.cart.filter(x=>x.goods_id!==goods_id)
			this.commit("m_cart/saveToStorage")
		},
		//更新购物车所有商品数量
		updateAllGoodsState(state,newState){
			state.cart.forEach(x=>x.goods_state=newState)
			this.commit("m_cart/saveToStorage")
		}
	},

	// 模块的 getters 属性
	getters: {
		//统计购物车中的商品的数量
		total(state){
			let c=0;
			//循环统计商品的数量
			state.cart.forEach(goods=>c+=goods.goods_count)
			return c;
		},
		//购物车已勾选的商品数量
		checkedCount(state){
			return state.cart.filter(x=>x.goods_state).reduce((total,item)=>total+=item.goods_count,0)
		},
		//已勾选商品在哪个价格
		checkedGoodsAmount(state){
			return state.cart.filter(x=>x.goods_state).reduce((total,item)=>total+=item.goods_count*item.goods_price,0).toFixed(2)
		}
	},
}
