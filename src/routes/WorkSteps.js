import React from 'react';
import { connect } from 'dva';
import WorkStep from '../components/workSteps';
import styles from './IndexPage.css';

class Dom extends React.Component {
  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className={styles.combined_wrapper}>
        <h5 style={{ position: 'fixed', top: -2, left: 17, color: '#000' }} onClick={this.handleBack}>返回上一页</h5>
        <WorkStep />
      </div>
    );
  }
}

export default connect(({ worksteps }) => ({
  worksteps,
}))(Dom);
