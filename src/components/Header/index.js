import React, {Component} from 'react';
import { Row, Col } from 'antd';
import styles from './index.less';
import Util from '../../utils/utils';
import axios from '../../axios/index'

class Header extends Component{

    state = {
        username: 'dcbryant'
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            });
        },1000);
        this.getWeathData();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    getWeathData = () => {
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                console.log(data)
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }

    render(){
        return (
            <div className={styles.header}>
                <Row className={styles.headerTop}>
                    <Col span={24}>
                        <span>
                            欢迎，{this.state.username}
                        </span>
                        <a href="">退出</a>
                    </Col>
                </Row>
                <Row className={styles.breadcrumb}>
                    <Col className={styles.breadcrumbTitle} span={4}>
                        首页
                    </Col>
                    <Col className={styles.weather} span={20}>
                        <span className={styles.date}>{this.state.sysTime}</span>
                        <span className={styles.weatherImg}>
                            <img src={this.state.dayPictureUrl} alt="天气" />
                        </span>
                        <span className={styles.weatherDetail}>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;