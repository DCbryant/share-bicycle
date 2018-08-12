import React, { Component } from 'react';
import { Row,Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft/index';
import Home from './pages/Home';
import styles from './admin.less'


class Admin extends Component{

    render(){
        return (
            <Row className={styles.container}>
                <Col className={styles.navLeft}  span={4}>
                    <NavLeft />
                </Col>
                <Col className={styles.main} span={20}>
                    <Header />
                    <Row className={styles.content}>
                        {/* <Home /> */}
                        {this.props.children}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        )
    }
}

export default Admin;