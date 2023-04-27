import {
		mapGetters
	} from "vuex"
	export default {
		computed: {
			...mapGetters('m_cart', ['total'])
		},
		onShow() {
			this.setBadge()
		},
		watch:{
			total(){
				this.setBadge()
			}
		},
		methods: {
			//设置购物车右上角的徽标
			setBadge() {
				uni.setTabBarBadge({
					index: 2,
					text: this.total + ''
				})
			}
		}
	}
