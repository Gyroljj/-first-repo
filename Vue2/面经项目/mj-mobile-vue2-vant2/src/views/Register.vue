<template>
  <div class="login-page">
    <!-- 登录标题 -->
    <van-nav-bar title="面经注册" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="账号"
        placeholder="请求输入账号"
        :rules="userRulers"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\S{6,20}$/, message: '请输入6~20位的密码' }
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <!-- 超链接 -->
    <router-link class="link" to="/login">已有账号，去登录</router-link>
  </div>
</template>

<script>
// 导入配置好的 request.js
// import request from '@/utils/request'

// 导入 API 方法
import { registerAPI } from '@/api/user'

export default {
  name: 'register-page',
  data () {
    return {
      username: '',
      password: '',
      userRulers: [
        // required 必须，表示用户名必填
        { required: true, message: '请填写账号' },
        // pattern 正则表达式，验证用户名 5~10 位的数字字母下划线组合
        { pattern: /^\w{5,10}$/, message: '请输入5~10位的账号' }
      ]
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        // values === { username: 'xxx', password: 'xxx' }
        // console.log('submit', values)
        await registerAPI(values)
        //   request({
        //   method: 'POST',
        //   url: '/h5/user/register',
        //   data: values
        // })
        // console.log(res)
        this.$toast('注册成功')
        this.username = this.password = '' // 重置表单
        this.$router.push('/login') // 跳转到登录页面
      } catch (error) {
        if (error.response.data.message) {
          this.$toast(error.response.data.message) // 如果有响应结果，则提示响应结果中的信息
        } else {
          this.$toast('注册失败') // 如果没有响应结果，则笼统的提示一下
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  float: right;
  margin-right: 20px;
  font-size: 14px;
  color: #1989fa;
}
</style>
