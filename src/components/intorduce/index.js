import React from 'react';
import Texty from 'rc-texty';
import { routerRedux } from 'dva/router';
import 'rc-texty/assets/index.css';
import styles from './index.less';

class Dom extends React.Component {
  handleClick = () => {
    this.props.dispatch(routerRedux.push({
      pathname: 'work',
    }));
  };
  render() {
    return (
      <div className={styles.wrap}>
        <div className="texty-demo" style={{ marginTop: 64 }}>
          <Texty className={styles.title}>姓名： 何守志</Texty>
          <Texty className={styles.title}>性别： 男</Texty>
          <Texty className={styles.title}>民族： 汉</Texty>
          <Texty className={styles.title}>出生日期： 1993/8/6</Texty>
          <Texty className={styles.title}>手机号： 17621140956</Texty>
          <Texty className={styles.title}>职业： web前端</Texty>
          <Texty className={styles.title}>
            职业技能： 精通JavaScript、Ajax等Web开发技术；
            精通HTML/XHTML、CSS等网页制作技术，熟悉页面架构和布局；
            熟练掌握React前端框架；
            熟悉Webpack/LESS等现代Web技术；
            熟练使用数据可视化组件库echart/d3/antd；
            熟练使用dva、react-router；
            熟练使用es6
          </Texty>
          <Texty className={styles.title}>爱好： 比较广泛，尚待发现</Texty>
        </div>
        <div className={styles.linkTo}>
          <Texty className={styles.title} onClick={this.handleClick}>点我看下去</Texty>
        </div>
      </div>
    );
  }
}

export default Dom;
