import HeaderAdmin from "~/layouts/HeaderAdmin.jsx";
import LeftMenu from "~/layouts/LeftMenu.jsx";
import {Outlet} from "react-router-dom";
import { Layout, theme } from 'antd';
import React from "react";
const {  Content, Footer, Sider } = Layout;


const LayoutAdmin = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout hasSider>
            <HeaderAdmin/>
            <Layout>
                <LeftMenu/>
                <Content
                    style={{
                        margin: '24px 16px',
                        overflow: 'initial',
                    }}
                >
                    <div
                        style={{padding: 24, textAlign: 'center', background: colorBgContainer, borderRadius: borderRadiusLG,}}
                    >
                        <Outlet/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutAdmin;


