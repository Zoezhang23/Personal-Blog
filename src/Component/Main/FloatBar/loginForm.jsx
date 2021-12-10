import React from 'react'
import { Button, Form, Input, Checkbox } from 'antd';
import './index.scss'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../../../App'


export default function LoginForm(props) {
    const { setIsLogin } = useContext(LoginContext)
    const navigate = useNavigate();
    const onFinish = (values) => {
        const user = localStorage.getItem('user');
        if (user !== null) {
            const { username, password } = JSON.parse(user);
            if (values.username === username && values.password === password) {
                props.hide();
                setIsLogin(true)
                navigate('/home/loginSuccess')
            }
        } else {
            props.hide();
            navigate('/home/loginFailed')
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
}
