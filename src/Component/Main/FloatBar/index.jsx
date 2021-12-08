import { Popover, Button, Form, Input, Checkbox } from 'antd';
import React from 'react';
import './index.scss'
import { HomeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const NormalLoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
};


export default class FloatBar extends React.Component {
    state = {
        clicked: false,
        hovered: false,
    };

    hide = () => {
        this.setState({
            clicked: false,
            hovered: false,
        });
    };

    handleHoverChange = visible => {
        this.setState({
            hovered: visible,
            clicked: false,
        });
    };

    handleClickChange = visible => {
        this.setState({
            clicked: visible,
            hovered: false,
        });
    };

    render() {
        const hoverContent = <div>Login Or Register</div>;
        const clickContent = <div><NormalLoginForm /></div>;
        return (

            <Popover
                style={{ width: 200 }}
                content={hoverContent}
                // title="Hover title"
                trigger="hover"
                visible={this.state.hovered}
                onVisibleChange={this.handleHoverChange}
            >
                <Popover
                    content={
                        <div>
                            {clickContent}
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <a onClick={this.hide}>Close</a>
                                Or<Link to='register' onClick={this.hide} >Register now!</Link>
                            </div>
                        </div>
                    }
                    title="Login"
                    trigger="click"
                    visible={this.state.clicked}
                    onVisibleChange={this.handleClickChange}
                >

                    <Button size='large ' className="float-btn" shape="circle" icon={<HomeTwoTone style={{ fontSize: 20 }} spin="true" twoToneColor='#fff' />} style={{ position: 'absolute' }} />
                </Popover>
            </Popover>

        );
    }
}