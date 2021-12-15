import { Col, Row } from 'antd'
import React, { Component, Fragment } from 'react'
import styles from './EmployeesHome.module.css'
export default class EmployeesHome extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.body}>
                    <Row>
                        <Col flex={1}></Col>
                        <Col flex={10}>
                            <div className={styles.bodybackground}>
                                
                            </div>
                        </Col>
                        <Col flex={1}></Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}
