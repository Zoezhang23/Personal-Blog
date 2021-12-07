import React from 'react'
import { Card } from 'antd';
import { LinkedinFilled, InstagramFilled, GithubFilled } from '@ant-design/icons';
import me from '../Images/me.jpg'
import './index.scss'

const { Meta } = Card;
export default function LeftSide() {
    return (
        <div style={{ marginTop: 64, left: '5%', width: '10%', position: 'sticky' }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="avatar" src={me} />}
            >
                <Meta style={{ marginBottom: 0 }} title="Frontend Developer" description="www.instagram.com" />
                <a href='https://www.linkedin.com/in/zhijuan/'><LinkedinFilled style={{ fontSize: 30 }} /></a>
                <a href='https://www.instagram.com/zzzi.y/'><InstagramFilled style={{ fontSize: 30, color: 'purple' }} /></a>

                <a href='https://github.com/Zoezhang23'>< GithubFilled style={{ fontSize: 30, color: 'grey' }} /></a>
            </Card>
        </div>
    )
}
