import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './IndexPage.css';
// import PhotoPage from './PhotoPage';

class IndexPage extends React.Component {
  handleClick = () => {
    this.props.dispatch(routerRedux.push({
      pathname: 'photo',
    }));
  };
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} onClick={this.handleClick} />
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
