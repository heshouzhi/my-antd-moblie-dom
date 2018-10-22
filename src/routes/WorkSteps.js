import React from 'react';
import { connect } from 'dva';
import WorkStep from '../components/workSteps';
import styles from './IndexPage.css';

class Dom extends React.Component {
  render() {
    console.log('111', this.props.worksteps.data);
    return (
      <div className={styles.combined_wrapper}>
        <WorkStep />
      </div>
    );
  }
}

export default connect(({ worksteps }) => ({
  worksteps,
}))(Dom);
