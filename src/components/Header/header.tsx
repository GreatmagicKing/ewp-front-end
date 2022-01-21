import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Col, Menu, Row } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './header.module.css';
import EmployeesHome from '../../pages/EmployeesHome/EmployeesHome';
import { Link, Route } from 'react-router-dom';
import LearnHub from '../../pages/LearnHub/LearnHub';
import Career from '../../pages/Career/Career';
import WorkCenter from '../../pages/WorkCenter/WorkCenter';
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
                    <Col flex={5}>
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                            {/* icon={<MailOutlined />} */}
                            <Menu.Item key="LearnHub" className={styles.headerTitleFontSize}>
                                <Link to="/LearnHub">LearnHub</Link>
                            </Menu.Item>
                            <Menu.Item key="Career" className={styles.headerTitleFontSize}>
                                <Link to="/Career">Career</Link>
                            </Menu.Item>
                            <Menu.Item key="Bridge" className={styles.headerTitleFontSize}>
                                <Link to="/Bridge">Bridge</Link>
                            </Menu.Item>
                            <Menu.Item key="WorkCenter" className={styles.headerTitleFontSize} >
                                <Link to="/WorkCenter">Work Center</Link>
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
                <Route path="/LearnHub" component={LearnHub}/>
                <Route path="/Career" component={Career}/>
                <Route path="/WorkCenter" component={WorkCenter}/>
            </div>
        );
    }
}
