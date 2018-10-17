import React from 'react';
import { connect } from 'dva';
import 'rc-texty/assets/index.css';
import Intorduce from '../components/intorduce';

class Dom extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <Intorduce dispatch={this.props.dispatch} />
      </div>
    );
  }
}

Dom.propTypes = {
};
export default connect()(Dom);
