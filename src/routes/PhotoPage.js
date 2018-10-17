import React from 'react';
import 'rc-texty/assets/index.css';
import Photo from '../components/photo';
import AntMotion from '../components/ant-motion';

class PhotoPage extends React.Component {
  render() {
    return (
      <div>
        <Photo />
        <AntMotion />
      </div>
    );
  }
}

PhotoPage.propTypes = {
};
export default PhotoPage;
