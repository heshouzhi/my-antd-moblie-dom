import React from 'react';
import { connect } from 'dva';
import WorkStep from '../components/workSteps';

class Dom extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <WorkStep dispatch={this.props.dispatch} />
      </div>
    );
  }
}

Dom.propTypes = {
};
export default connect()(Dom);
