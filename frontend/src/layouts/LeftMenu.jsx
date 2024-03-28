import React from 'react';
import {
    UserOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom'

import {Layout, Menu} from 'antd';
const { Sider} = Layout;
// Function return của menu
const setupMenu = {
    menu: (label = '', icon, router = false, group = false, children = []) => {
        return {
            icon,
            children,
            label,
            group,
            router
        };
    },
    subMenu: (label = '', router = '') => {
        return {
            label,
            router
        };
    }
}

const leftNavigation = [
    setupMenu.menu(
        'Quản lý nhân sự',<UserOutlined/>,false,true,[
            setupMenu.subMenu('Danh sách'),
            setupMenu.subMenu('Phòng ban'),
        ]
    ),
]
const LeftMenu = () => {

    return (
        <div className="fixed top-0 left-0">
            <Menu theme="dark" mode="inline">
                {leftNavigation.map((item, key) => {
                    if (item.group === true) {
                        return (
                            <Menu.SubMenu key={key} title={item.label} icon={item.icon}>
                                {item.children.map((child) => (
                                    <Menu.Item key={child.key}>
                                        <Link to={`/${child.router}`}>
                                            {child.label}
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        );
                    }
                    return (
                        <Menu.Item key={key} icon={item.icon}>
                            <Link to={`/${item.router}`}>
                                {item.label}
                            </Link>
                        </Menu.Item>
                    );
                })}

            </Menu>
        </div>
    );
}

export default LeftMenu;


