import React, { FC } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.scss'
import { register } from '../../api/user'

export interface UserValue {
  username: string,
  password: string
}

const Register: FC = (props) => {

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const { username, password } = values
    const res = await register({ username, password })
    if (res.data.status === 200) {
      message.success(res.data.msg)
      console.log(props);
      //@ts-ignore
      props.history.replace('/login')
    } else {
      message.error(res.data.msg)
    }
  };

  return (
    <div className="box">
      <div className="register-wrapper">
        <Form
          name="normal_login"
          className="register-form"
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
            <Button type="primary" htmlType="submit" className="register-form-button">
              注册
            </Button>
            <Link to={'./login'}>
              <Button type={'primary'}>
                登录
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
