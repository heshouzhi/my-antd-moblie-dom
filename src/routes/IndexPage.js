import React from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './IndexPage.css';
import Morning from '../assets/morning.mp3';
import Book from '../assets/book.svg';
// import Test from '../assets/test.svg';
// import PhotoPage from './PhotoPage';

class IndexPage extends React.Component {
  handleClick = () => {
    this.props.dispatch(routerRedux.push({
      pathname: 'photo',
    }));
  };
  handleBook = () => {
    this.props.dispatch(routerRedux.push({
      pathname: 'book',
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
        <img
          src={Book}
          className={styles.bookAnimation}
          alt="这是一份说明书"
          style={{ position: 'fixed', left: 30, bottom: 30 }}
          onClick={this.handleBook}
        />
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
