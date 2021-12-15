import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Col, Menu, Row } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './header.module.css';
const { SubMenu } = Menu;

export default class Header extends Component {
    state = {
        current: 'mail',
    };

    handleClick = (e: any) => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <div>
                <Row>
                    <Col flex={1} className={styles.logo}>
                        
                    </Col>
                    <Col flex={3}>
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item key="team" className={styles.headerTitleFontSize}>
                            {/* icon={<MailOutlined />} */}
                                Team
                            </Menu.Item>
                            <Menu.Item key="class" className={styles.headerTitleFontSize}>
                                Class
                            </Menu.Item>
                            <Menu.Item key="icareer" className={styles.headerTitleFontSize}>
                                Icareer
                            </Menu.Item>
                            {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                                <Menu.ItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu> */}
                        </Menu>
                    </Col>
                </Row>
            </div>
        );
    }
}
