import React from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './IndexPage.css';
import Morning from '../assets/morning.mp3';
// import Test from '../assets/test.svg';
// import PhotoPage from './PhotoPage';

class IndexPage extends React.Component {
  handleClick = () => {
    this.props.dispatch(routerRedux.push({
      pathname: 'photo',
    }));
  };
  handlePause = () => {
    const myVideo = document.getElementById('video1');
    myVideo.pause();
  };
  handlePlay = () => {
    const myVideo = document.getElementById('video1');
    myVideo.play();
  };
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} onClick={this.handleClick} />
        <audio
          id="video1"
          src={Morning}
          controls="controls"
          // autoPlay
          loop
          style={{ width: '100%', opacity: 0, height: 1 }}
        >
          Your browser does not support the audio tag.
        </audio>
        <Button onClick={this.handlePlay} style={{ color: '#0CA495' }}>播放</Button>
        <WhiteSpace size="lg" />
        <Button onClick={this.handlePause} style={{ color: '#0CA495' }}>暂停</Button>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
