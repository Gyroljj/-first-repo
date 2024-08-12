<template>
  <div class="login-page">
    <el-card>
      <template #header>浩方面经后台管理系统</template>
      <!-- 卡片内容，默认插槽，不用嵌套template -->
      <el-form ref="form" label-width="80px" :model="user" :rules="rules">
        <!-- 第一项：账号 -->
        <el-form-item label="账号" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <!-- 第二项：密码 -->
        <el-form-item label="密码" prop="password">
          <el-input show-password v-model="user.password"></el-input>
        </el-form-item>
        <!-- 第三项：按钮 -->
        <el-form-item style="margin-left: 40px">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { loginAPI } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      // 提交的数据
      user: {
        username: 'admin',
        password: 'admin'
      },
      // 验证规则对象
      rules: {
        username: [
          // required必填；message验证不通过时的提示；trigger触发方式
          {
            required: true,
            message: '请输入账号',
            trigger: ['blur', 'change']
          },
          {
            min: 3,
            max: 6,
            message: '长度在 3 到 6 个字符',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 进行完整的校验
      this.$refs.form.validate(async valid => {
        // console.log(valid) // 验证通过-true； 验证失败-false
        if (valid) {
          try {
            // 进入这个if区间，表示验证通过，此时可以提交数据了
            const res = await loginAPI(this.user)
            // console.log(res)
            // 存token
            // localStorage.setItem('mj-pc-token', res.data.token)
            this.$store.commit('user/updateToken', res.data.token)
            this.$message.success('登录成功')
            this.$router.push('/dashboard')
          } catch (error) {
            if (error.response) {
              this.$message.error(error.response.data.message)
            } else {
              this.$message.error('登录失败')
            }
          }
        }
      })
    },
    reset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background: url(@//assets/login-bg.svg) no-repeat center;
  background-size: cover;
  // 使用element-ui，组件名，就是类名
  .el-card {
    width: 420px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // 样式穿透，用于修改子组件元素的样式
    ::v-deep .el-card__header {
      text-align: center;
      background-color: #727cf5;
      color: #fff;
      height: 80px;
      line-height: 40px;
    }
    .el-form {
      padding-right: 65px;
    }
  }
}
</style>
