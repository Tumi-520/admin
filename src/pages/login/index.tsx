import React, { FC ,useEffect} from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link ,withRouter} from 'react-router-dom';
import './index.scss'
import { login } from '../../api/user'

export interface UserValue {
  username: string,
  password: string
}

const Login: FC = (props) => {

  useEffect(()=>{
    let username=(localStorage.getItem('user'))
    if(username){
      //@ts-ignore
      props.history.replace('/')
    }
  })

  const onFinish = async (values: any) => {
    const { username, password } = values
    const res = await login({ username, password })
    if (res.data.status === 200) {
      message.success(res.data.msg)
      localStorage.setItem('user',JSON.stringify({username}))
      //@ts-ignore
      props.history.replace('/')
    } else {
      message.error(res.data.msg)
    }
  };

  return (
    <div className="box">
      <div className="login-wrapper">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <Link to={'/register'} className="login-form-forgot">
              忘记密码
            </Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            <Link to={'./register'}>
              <Button type={'primary'}>
                注册
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(Login);
