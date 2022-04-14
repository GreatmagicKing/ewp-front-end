import { Col, Row, Button } from 'antd'
import React, { Component, Fragment, ReactNode } from 'react'
import { connect } from 'react-redux';
import { setbridge } from '../../redux/actions/bridge';
import { BridgeService } from '../../services/BridgeService'
import styles from './Bridge.module.css'


interface IProps {
    bridge?: any,
    setbridge: () => void
}

export class Bridge extends Component<IProps> {
    private bridgeService: BridgeService;
    constructor(props:any) {
        super(props);
        
        this.bridgeService = new BridgeService();
    }
    setBridge = () => {
        this.bridgeService.getBridge();
    }
    getBridgeState = () =>{
        const {bridge}=this.props;
        console.log(this.state);
        console.log(bridge);
    }
    render(): JSX.Element {
        return (
            <Fragment>
                <Button type="primary" onClick={this.setBridge}>Primary Button</Button>
                <Button type="primary" onClick={this.getBridgeState}>Primary Button</Button>
                {this.props.bridge.key}
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
const mapStateToProps = (state: any)=> ({
    bridge:state.bridge
})
 
const mapDispatchToProps = (dispatch: any) => ({
    setbridge: (data: any) => dispatch(setbridge(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bridge);
