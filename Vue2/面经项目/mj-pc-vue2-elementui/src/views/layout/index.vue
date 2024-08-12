<template>
  <el-container class="layout-page">
    <el-aside width="200px">
      <div class="logo">浩方面经</div>
      <!-- 侧边栏菜单 start -->
      <el-menu
        background-color="#313a46"
        text-color="#8391a2"
        active-text-color="#FFF"
        :default-active="$route.path"
        unique-opened
        router
      >
        <el-menu-item index="/dashboard">
          <i class="el-icon-pie-chart"></i>
          <span>数据看板</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-notebook-1"></i>
          <span>面经管理</span>
        </el-menu-item>
      </el-menu>
      <!-- 侧边栏菜单 end -->
    </el-aside>
    <el-container>
      <el-header>
        <div class="user">
          <el-avatar :size="36" :src="avatar"></el-avatar>
          <el-link :underline="false">{{ username }}</el-link>
        </div>
        <div class="logout">
          <el-popconfirm title="您确认退出黑马面运营后台吗？" @confirm="logout">
            <i
              slot="reference"
              title="logout"
              class="el-icon-switch-button"
            ></i>
          </el-popconfirm>
        </div>
      </el-header>
      <el-main>
        <!-- 内容区，把二级路由出口加上 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getUserAPI } from '@/api/user'
export default {
  name: 'layout-page',
  data () {
    return {
      avatar: '',
      username: ''
    }
  },
  methods: {
    logout () {
      // localStorage.removeItem('mj-pc-token')
      this.$store.commit('user/updateToken', '')
      this.$router.push('/login')
    }
  },
  async created () {
    const res = await getUserAPI()
    // console.log(res)
    this.avatar = res.data.avatar
    this.username = res.data.username
  }
}
</script>

<style lang="scss" scoped>
.layout-page {
  height: 100vh;
  .el-aside {
    background: #313a46;
    .logo {
      color: #fff;
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .el-menu {
      border-right: none;
      margin-top: 20px;
      &-item {
        background-color: transparent !important;
        > span,
        i {
          padding-left: 5px;
        }
      }
    }
  }
  .el-header {
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
    background: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 999;
    .user {
      display: flex;
      align-items: center;
      background: #fafbfd;
      height: 60px;
      border: 1px solid #f1f3fa;
      padding: 0 15px;
      .el-avatar {
        margin-right: 15px;
      }
    }
    .logout {
      font-size: 20px;
      color: #999;
      cursor: pointer;
      padding: 0 15px;
    }
  }
  .el-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #aaa;
    border-top: 1px solid rgba(152, 166, 173, 0.2);
    font-size: 14px;
  }
}
</style>
