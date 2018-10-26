import React from 'react';
// import { History } from 'dva/router';
import 'rc-texty/assets/index.css';
import Photo from '../components/photo';
import AntMotion from '../components/ant-motion';

class PhotoPage extends React.Component {
  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <h5 style={{ position: 'fixed', top: -2, left: 17, color: '#fff' }} onClick={this.handleBack}>返回上一页</h5>
        <Photo />
        <AntMotion />
      </div>
    );
  }
}

PhotoPage.propTypes = {
};
export default PhotoPage;
