import { Layout, Menu } from 'antd';
import React from 'react';


const { Header } = Layout;

export default function HeaderPage() {
    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">FIND MATCH</Menu.Item>
                        <Menu.Item key="2">GROUNDS</Menu.Item>
                        <Menu.Item key="3">MESSAGE</Menu.Item>
                        <Menu.Item key="4">UPCOMING</Menu.Item>
                    </Menu>
                </Header>


            </Layout>
        </div>
    )
}
