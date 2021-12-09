import {
    Form, Input, Select, Button,
} from 'antd';
import MyAvatar from './avatar'
import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const userInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}


export default function InfoForm() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const newValues = {
            ...values,
            avatar: url
        }
        localStorage.setItem('user', JSON.stringify(newValues));
        navigate('/home')
    };
    const onChange = (newFields) => {
        setFields(newFields);
    }
    const user = userInfo();
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="31">+31</Option>
                <Option value="31">+31</Option>
            </Select>
        </Form.Item>
    );
    const [url, updateUrl] = useState(user.avatar);
    const handler = (data) => {
        updateUrl(data)
    }
    const [fields, setFields] = useState([
        {
            name: ['username'],
            value: user.username,
        },
        {
            name: ['password'],
            value: user.password,
        },
        {
            name: ['confirm'],
            value: user.confirm,
        },
        {
            name: ['email'],
            value: user.email,
        },
        {
            name: ['phone'],
            value: user.phone,
        },

    ]);

    return (
        <div>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ['Eindhoven', 'NL'],
                    prefix: '31',
                }}
                scrollToFirstError
                fields={fields}
                onFieldsChange={(_, allFields) => {
                    onChange(allFields);
                }}
            >
                <Form.Item
                    name="avatar"
                    label="Avatar">
                    <MyAvatar urlUpdateProp={handler} originImg={user.avatar ? user.avatar : ''} />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {

                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Change Password"
                    rules={[
                        {

                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {

                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="username"
                    label="User Name"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {

                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {

                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};