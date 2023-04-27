<template>
	 <view class="login-container">
	    <!-- 提示登录的图标 -->
	    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
	    <!-- 登录按钮 -->
	    <button type="primary" class="btn-login" @click="getUserProfile">一键登录</button>
	    <!-- 登录提示 -->
	    <view class="tips-text">登录后尽享更多权益</view>
	  </view>
</template>

<script>
	import{mapMutations,mapState} from "vuex"
	export default {
		name:"my-login",
		data() {
			return {
				
			};
		},
		computed:{
		...mapState('m_user',['token'])	
		},
		methods:{
			...mapMutations('m_user',['updateUserInfo','updateToken']),
			getUserProfile(){
				uni.getUserProfile({
					desc:'你的授权信息',
					success: (res) => {
						// console.log(res);
						this.updateUserInfo(res.userInfo)
						this.getToken(res)
					},
					fail: (res) => {
						return uni.$showMsg('你取消登录')
					}
				})
			},
			// 调用登录接口，换取永久的 token
			async getToken(info) {
			  // 调用微信登录接口
			  const [err, res] = await uni.login().catch(err => err)
			  // 判断是否 uni.login() 调用失败
			  // console.log(res.code);
			  if (err || res.errMsg !== 'login:ok') return uni.$showError('登录失败！')
			
			  // 准备参数对象
			  const query = {
			    code: res.code,
			    encryptedData: info.encryptedData,
			    iv: info.iv,
			    rawData: info.rawData,
			    signature: info.signature
			  }
			  console.log(query);
			
			  // 换取 token
			  const { data: loginResult } = await uni.$http.post('https://api-ugo-web.itheima.net/api/public/v1/users/wxlogin', query)
			  // if (loginResult.meta.status !== 200) return uni.$showMsg('登录失败！')
			 this.updateToken('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo')
			}
		}
	}
</script>

<style lang="scss">
.login-container {
  // 登录盒子的样式
  height: 750rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;

  // 绘制登录盒子底部的半椭圆造型
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    background-color: white;
    border-radius: 100%;
    transform: translateY(50%);
  }

  // 登录按钮的样式
  .btn-login {
    width: 90%;
    border-radius: 100px;
    margin: 15px 0;
    background-color: #c00000;
  }

  // 按钮下方提示消息的样式
  .tips-text {
    font-size: 12px;
    color: gray;
  }
}
</style>