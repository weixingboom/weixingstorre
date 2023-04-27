<template>
	<view class="my-container">
		<my-login v-if="!token"></my-login>
		<my-userinfo v-else></my-userinfo>
	</view>
</template>

<script>
	import {mapState} from "vuex"
		import badgeMix from "@/mixins/tabbar-badge.js"
	export default {
		mixins:[badgeMix],
		data() {
			return {
				
			};
		},
		computed:{
			...mapState("m_user",['token'])
		}
	}
</script>

<style lang="scss">
page,.my-container{
	height: 100%;
}
</style>
