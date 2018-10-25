import React from 'react';
import { connect } from 'dva';
import 'rc-texty/assets/index.css';
import Intorduce from '../components/intorduce';
import styles from './IndexPage.css';

class Dom extends React.Component {
  render() {
    return (
      <div className={styles.intorduce_bac}>
        <Intorduce dispatch={this.props.dispatch} />
      </div>
    );
  }
}

Dom.propTypes = {
};
export default connect()(Dom);
