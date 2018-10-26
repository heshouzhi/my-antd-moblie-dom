import React from 'react';
import { connect } from 'dva';
import 'rc-texty/assets/index.css';
import Intorduce from '../components/intorduce';
import styles from './IndexPage.css';

class Dom extends React.Component {
  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className={styles.intorduce_bac}>
        <h5 style={{ position: 'fixed', top: -2, left: 17, color: '#fff' }} onClick={this.handleBack}>返回上一页</h5>
        <Intorduce dispatch={this.props.dispatch} />
      </div>
    );
  }
}

Dom.propTypes = {
};
export default connect()(Dom);
