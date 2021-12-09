import React, { Component } from 'react'
import { HomeFilled, FileTextFilled, ContainerFilled, TagFilled, MenuOutlined, SmileFilled, CoffeeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import "./index.scss"
import MenuItem from "./menuItem"


const { Header } = Layout;
const { SubMenu } = Menu;


export default class TopHeader extends Component {
    state = {
        current: '1',
    };

    handleClick = e => {
        // this.props.history.push(`/${page}`);
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        return (
            <Header style={{
                position: 'fixed', zIndex: 1, width: '100%'
            }}>
                <div className="logo"> Zhijuan's Personal Blog</div>
                <Menu theme="dark" mode="horizontal" onClick={this.handleClick} selectedKeys={[current]} defaultSelectedKeys={[current]} className="right-menu">
                    <MenuItem key="1" icon={< HomeFilled />} >Home</MenuItem>
                    <MenuItem key="2" icon={< FileTextFilled />}>Article</MenuItem>
                    <MenuItem key="3" icon={< ContainerFilled />}>Archive</MenuItem>
                    <MenuItem key="4" icon={< MenuOutlined />}>Categories</MenuItem>
                    <MenuItem key="5" icon={< TagFilled />}>Tag</MenuItem>
                    <MenuItem key="6" icon={< SmileFilled />}>About</MenuItem>
                    <Menu.Item key="7" icon={<CoffeeOutlined />}></Menu.Item>
                    <SubMenu key="SubMenu" title="More">
                        <Menu.ItemGroup title="">
                            <MenuItem key="me" icon={<UserOutlined />} >Me</MenuItem>
                            <MenuItem key="logOut" icon={<LogoutOutlined />}>Log Out</MenuItem>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </Header>
        )

    }

}

