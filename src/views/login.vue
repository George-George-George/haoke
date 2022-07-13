<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="账号登录" left-arrow @click="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <!-- 输入框 -->
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="account"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button class="login-btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <!-- 注册栏 -->
    <div class="register">
      <span>还没有账号，去注册~</span>
    </div>
  </div>
</template>
<script>
import { login } from '@/apis/login.js'
import { Toast } from 'vant'

export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },

    async onSubmit() {
      const res = await login(this.account, this.password)
      console.log(res)
      if (res.data.status === 200) {
        Toast.success('登录成功')
      } else {
        Toast.fail('登录失败')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.van-nav-bar {
  background-color: #21b97a;

  :deep(.van-nav-bar__title) {
    color: #fff;
  }

  :deep(.van-icon) {
    color: #fff;
  }
}
.form {
  .login-btn {
    background-color: #21b97a;
    border: none;
  }
}
.register {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  :deep(span) {
    font-size: 14px;
    color: #666;
  }
}
</style>
