import React, {Component} from 'react';
import styles from './index.less';

class Footer extends Component{
    render(){
        return (
            <div className={styles.footer}>
                版权所有
            </div>
        )
    }
}

export default Footer;