import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './index.less';

class Photo extends React.Component {
  onClick = () => {
    console.log('111');
    this.props.dispatch(routerRedux.push({
      pathname: 'intorduce',
    }));
  };
  render() {
    return (
      <div className={styles.outer} onClick={this.onClick}>
        <div className={styles.front}><img src={require('../../assets/me1.jpg')} alt="front" /></div>
        <div className={styles.back}><img src={require('../../assets/me2.jpg')} alt="back" /></div>
        <div className={styles.left}><img src={require('../../assets/me3.jpg')} alt="left" /></div>
        <div className={styles.right}><img src={require('../../assets/me4.jpg')} alt="right" /></div>
        <div className={styles.above}><img src={require('../../assets/me5.jpg')} alt="above" /></div>
        <div className={styles.down}><img src={require('../../assets/me6.jpg')} alt="down" /></div>
      </div>
    );
  }
}

Photo.propTypes = {
};

export default connect()(Photo);
