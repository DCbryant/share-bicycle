import React, { Component } from 'react';
import styles from './App.less';
import {Button} from 'antd';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h3>hello world</h3>
        <Button>点击</Button>
      </div>
    );
  }
}

export default App;
