import React from 'react';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';
import styles from './index.css';

class Demo extends React.Component {
  state = {
    show: true,
  };

  getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`} />);
      }
    });
    return c;
  };
  geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10; // eslint-disable-line
      default:
        return 150 + 450 + (e.index - 6) * 150; // eslint-disable-line
    }
  };
  render() {
    return (
      <div className={styles.combined_wrapper}>
        {this.state.show && (
          <div className={styles.combined}>
            <div className={styles.combined_shape}>
              <div className={styles.shape_left}>
                <TweenOne
                  animation={[
                    { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
              <div className={styles.shape_right}>
                <TweenOne
                  animation={[
                    { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
            </div>
            <Texty
              className={styles.title}
              type="mask-top"
              delay={400}
              interval={this.geInterval}
              component={TweenOne}
              componentProps={{
                animation: [
                  { x: 130, type: 'set' },
                  { x: 100, delay: 500, duration: 450 },
                  {
                    ease: 'easeOutQuart',
                    duration: 300,
                    x: 0,
                  },
                  {
                    letterSpacing: 0,
                    delay: -300,
                    scale: 0.9,
                    ease: 'easeInOutQuint',
                    duration: 1000,
                  },
                  { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                ],
              }}
            >
              ShouZhihe
            </Texty>
            <TweenOne
              className={styles.combined_bar}
              animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
            />
            <Texty
              className={styles.content}
              type="bottom"
              split={this.getSplit}
              delay={2200}
              interval={30}
            >
              EveryThing&nbsp;Is&nbsp;Possible,&nbsp;If&nbsp;
              You&nbsp;Put&nbsp;Your&nbsp;Heart&nbsp;Into&nbsp;It
            </Texty>
          </div>
        )}
      </div>
    );
  }
}

export default Demo;
