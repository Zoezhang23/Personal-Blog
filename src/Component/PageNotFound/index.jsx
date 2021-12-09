import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom'
import './index.scss'

export default function PageNotFound() {
    return (
        <div className="page-not-found">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary"><Link to="/home">Back Home</Link></Button>}
            />
        </div>
    )
}
