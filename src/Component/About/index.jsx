import React, { Component } from 'react'
import bg1 from '../Images/aboutBkg.jpg'
import bg2 from '../Images/aboutBkg2.jpg'
import bg3 from '../Images/aboutBkg3.jpg'
import bg4 from '../Images/aboutBkg4.jpg'
import me from '../Images/me.jpg'

import './index.scss'
import { Carousel } from 'antd';
import { Card, Avatar } from 'antd';
import EditableTagGroup from './ClosedTag/index'

const { Meta } = Card;


const imgStyle = {
    width: '100vw',
    height: '100vh',

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'block'
}

export default class About extends Component {
    getBgImg = () => {
        return `url(${bg1})`;
    }
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <Carousel autoplay>
                    <div>
                        <img src={bg1} alt="" style={imgStyle} />
                    </div>
                    <div>
                        <img src={bg2} alt="" style={imgStyle} />
                    </div>
                    <div>
                        <img src={bg3} alt="" style={imgStyle} />
                    </div>
                    <div>
                        <img src={bg4} alt="" style={imgStyle} />
                    </div>
                </Carousel>
                <Card
                    hoverable
                    style={{ position: 'absolute', left: '10%', top: '15%', bottom: '20%', height: '60%', width: '30%', }}
                // cover={
                //     <img style={{ width: 100, height: 100 }}
                //         alt="avatar"
                //         src={me}
                //     />
                // }
                >
                    <Meta style={{ width: '100%', height: '100%' }}
                        avatar={<Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={me} />}
                        title={[<span style={{ color: 'white', position: 'absolute' }}>Zhijuan Zhang</span>]}
                        description={[
                            <div style={{ color: 'white', width: '100%', height: '100%' }}>
                                As a web application developer, I have acquired the following front-end basics: HTML5, CSS2 & CSS3, as well as CSS pre-processing languages like LESS. I have experience with front-end technologies, including Javascript, ES6, ReactJS, Redux, Bootstrap, etc. I have strong experience utilizing RESTful APIs to exchange data between front-end and back-end systems. I am also proficient in the use of distributed repository tools such as Git and Github.<br /><br />
                                My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.<br /><br />
                                Coding is my passion, and I am always eager to learn new things.
                            </div>
                        ]}
                    />
                    <EditableTagGroup />
                </Card>
            </div>
        )
    }
}
