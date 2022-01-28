import { Col, List, Row, Avatar } from 'antd'
import React, { Component, Fragment } from 'react'
import './LearnHub.css';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
    {
        title: 'Ant Design Title 5',
    },
    {
        title: 'Ant Design Title 6',
    },
];
export default class LearnHub extends Component {
    render() {
        return (
            <Fragment>
                <div className='body'>
                    <Row>
                        <Col flex={1}></Col>
                        <Col flex={10}>
                            <Row>
                                <Col flex={2}>
                                    <div className='infobox'>
                                        <h3>学习社区</h3>
                                        <List
                                            itemLayout="vertical"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                                        title={<a href="https://ant.design">{item.title}</a>}
                                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                    />
                                                    <div>1111111111111111111111111</div>
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                </Col>
                                <Col flex={1}>
                                    <div className='infobox'>

                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col flex={1}></Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}
