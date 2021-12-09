import React, { Component } from 'react'
import './index.scss'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import bg from '../Images/archivBkg.jpg'

export default class Archive extends Component {
    getBgImg = () => {
        return `url(${bg})`;
    }
    render() {
        return (
            <div className="archive" style={{ backgroundImage: this.getBgImg() }}>
                <div className="timeLane">
                    <Timeline mode="alternate">
                        <Timeline.Item color="red">Looking for new opportunity</Timeline.Item>
                        <Timeline.Item>Provided configuration recommendations and assistance in customer deployment
                            Performed configuration and troubleshooting of Huawei routing/switching platforms
                            Configured and performed troubleshooting with routing and switching protocols, including Layer 2 and Layer 3 protocols.
                            HCIE certification. </Timeline.Item>
                        <Timeline.Item color="green">2018-09 – 2020-01</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Developed a cryptocurrency exchanging management system both in front-end and back-end in an Agile team.
                            Requirements analyzing, prototype designing, fast pace project development.
                            Created the web application layout and user interface using HTML, CSS, Bootstrap practices.
                            RESTful APIs for data exchanging.
                            Programming tech stack consists of PHP (YII2), Javascript , and Javascript libraries.
                            MongoDB as the data persistent layer.
                        </Timeline.Item>
                        <Timeline.Item color="red">2018-02 – 2018-07</Timeline.Item>
                        <Timeline.Item>Fontys University of Applied Sciences - Bachelor of ICT
                            2016-09 - 2018-07</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            Chengdu Neusoft University - Bachelor of Software Engineering 2016-09 - 2018-07
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        )
    }
}
