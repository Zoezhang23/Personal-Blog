import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from "../Component/Header/index"
import { Layout, } from 'antd';
import MyFooter from '../Component/Footer';


const { Content } = Layout;

export default function Home() {
    return (
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
    )
}
