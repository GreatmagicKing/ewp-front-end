import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Col, Menu, Row } from 'antd';
import styles from './header.module.css';
import { Link, Redirect, Route } from 'react-router-dom';
import LearnHub from '../../pages/LearnHub/LearnHub';
import Career from '../../pages/Career/Career';
import WorkCenter from '../../pages/WorkCenter/WorkCenter';
import Bridge from '../../pages/Bridge/Bridge';

export default class Header extends Component {
    state = {
        current: 'LearnHub',
    };

    handleClick = (e: any) => {
        console.log('click ', e);
        this.setState({ current: e.key });
        
    };
    componentDidMount() {

    }
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
                        </Menu>
                    </Col>
                </Row>
                <Route exact path="/" component={LearnHub}/>
                <Route path="/LearnHub" component={LearnHub}/>
                <Route path="/Career" component={Career}/>
                <Route path="/Bridge" component={Bridge}/>
                <Route path="/WorkCenter" component={WorkCenter}/>
            </div>
        );
    }
}
