import { Col, Row } from 'antd'
import React, { Component, Fragment } from 'react'
import './Career.css';
export default class Career extends Component {

    render() {
        return (
            <Fragment>
                <div className='body'>
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
