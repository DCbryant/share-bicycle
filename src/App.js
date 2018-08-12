import React, { Component } from 'react';
import styles from './App.less';
import {Button} from 'antd';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
