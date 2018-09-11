手机注册  端口 '/register_phone'
        传入的参数是
          {
            phone：手机号
            psd：密码
            code：短信验证码
          }
        传输方式：post

邮箱注册 端口'/register_email'
		参数
		{
			email:邮箱
			pwd:密码
		}
		传输方式：post





登录全部使用post方式

手机短信登录	端口'/mylogin-code'
			参数：phone 
				code
	发送短信首先验证手机是否注册，再发送短信（重写发送短信验证码route，添加查询部分）

手机密码登录	端口'/mylogin-ppwd'
			参数：phone
				ppwd

邮箱登录		端口'/malogin-epwd'
			参数：phone
				epwd

返回数据
          * 登陆成功
            {
              "code": 0,
              "data": {
                "_id": "5a9cd9c6ad5b2d34d42b385d",
                "name": "aaa"
              }
            }
          * 登陆失败
            {
              "code": 1,
              "msg": "用户名或密码不正确!"
            }