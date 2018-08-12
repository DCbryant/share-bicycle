import React, { Component } from 'react';
import styles from './index.less';
import { Button, Card } from 'antd';

class Buttons extends Component {
  render() {
    return (
      <div >
        <Card title="基础按钮">
          <Button className={styles.cardWrap} type="primary">dcbryant</Button>
          <Button >dcbryant</Button>
          <Button type="dashed">dcbryant</Button>
          <Button type="danger">dcbryant</Button>
          <Button disabled>dcbryant</Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;
