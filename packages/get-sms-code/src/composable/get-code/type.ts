export enum LoginType {
  Code = 'SMS', // 验证码登录
  Password = 'PASSWORD', // 密码登录
}

// 验证码场景
export enum SceneType {
  Login = 'login', // 登录
  Sign = 'sign', // 注册
  Pwd_Modify = 'pwd_modify', // 修改密码
  Phone_Change = 'phone_change', // 修改手机号
}

export interface CaptchaSendParam {
  ct: string // 人机校验token
  pn: string // 手机号
  scene: SceneType // 场景
}
