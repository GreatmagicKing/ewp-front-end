import { Col, Row } from 'antd'
import React, { Component, Fragment } from 'react'
import './WorkCenter.css';
export default class WorkCenter extends Component {

    render() {
        return (
            <Fragment>
                <div className='body'>
                    <Row>
                        <Col flex={1}></Col>
                        <Col flex={15}>
                            <div className='welcome'>
                                
                            </div>
                        </Col>
                        <Col flex={1}></Col>
                    </Row>
                    <Row>
                        <Col flex={1}></Col>
                        <Col flex={10}>
                            <Row>
                                <Col flex={1}>
                                    <div className='notice'>
                                
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col flex={1}>
                                    <div className='remind'>
                                
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col flex={5}>
                            <div className='skillFigure'>
                                
                            </div>
                        </Col>
                        <Col flex={1}></Col>
                    </Row>
                </div>
                
            </Fragment>
        )
    }
}
