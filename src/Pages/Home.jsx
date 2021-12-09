import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from "../Component/Header/index"
import { Layout, } from 'antd';
import MyFooter from '../Component/Footer';
import { loginContext } from '../App'
import { useState } from 'react';

const { Content } = Layout;

export default function Home() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <loginContext.Provider value={{ isLogin, setIsLogin }}>
            <div>
                <Layout>
                    <TopHeader />
                    <Content className="site-layout">
                        {/* <Main /> */}
                        <Outlet />
                    </Content>
                    <MyFooter />
                </Layout>
            </div>
        </loginContext.Provider>
    )
}
