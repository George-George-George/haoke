import request from '@/utils/request'
/**
 *登录
 * @param {string} account
 手机号
 * @param {string} password
 验证码
 * @returns
 */
export const login = (account, password) => {
  return request({
    url: 'user/login',
    method: 'POST',
    data: { username: account, password: password }
  })
}
