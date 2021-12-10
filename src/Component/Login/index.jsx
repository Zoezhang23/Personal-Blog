import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Result, } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import './index.scss'

export function LoginSuccess() {
    const navigate = useNavigate();
    return (
        <div className='login'>
            <Result
                icon={<SmileOutlined />}
                title="Do you have your avater?"
                extra={<div><Button type="primary" onClick={() => { navigate('/home') }}>Yes,I do</Button> <Button type="primary" onClick={() => { navigate('/personalInfo') }}>No,need now!</Button> </div>}
            />
        </div>
    )
}
export function LoginFailed() {
    const navigate = useNavigate();
    return (
        <div className='login'>
            <Result
                icon={<FrownOutlined style={{ color: '#ff4d4f' }} />}
                title="Incorrect username or password!"
                extra={<Button type="primary" onClick={() => { navigate('/home') }} danger>Try again</Button>}
            />
        </div>
    )
}
