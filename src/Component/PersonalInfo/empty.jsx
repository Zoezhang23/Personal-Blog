import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd';
import './index.scss'

export default function Empty() {
    return (
        <div className="empty">
            <Result
                status="warning"
                title="You did not login."
                extra={
                    <Link to='/home'>
                        <Button type="primary" key="console">
                            Go to login
                        </Button>
                    </Link>
                }
            />
        </div>
    )
}


