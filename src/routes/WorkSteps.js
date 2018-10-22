import React from 'react';
import { connect } from 'dva';
import WorkStep from '../components/workSteps';
import styles from './IndexPage.css';

class Dom extends React.Component {
  render() {
    return (
      <div className={styles.combined_wrapper}>
        <WorkStep dispatch={this.props.dispatch} />
      </div>
    );
  }
}

Dom.propTypes = {
};
export default connect()(Dom);
