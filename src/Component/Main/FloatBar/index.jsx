import { Popover, Button } from 'antd';
import React from 'react';
import './index.scss'
import { HomeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LoginForm from './loginForm';


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
        const hoverContent = <div id='popover1'>Login Or Register? Click !</div>;
        const clickContent = <LoginForm hide={this.hide} />;
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
                        <div id='popover1'>
                            {clickContent}
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <a onClick={this.hide} href="">Close</a>
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