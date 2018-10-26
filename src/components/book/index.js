import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './index.less';

class Dom extends React.Component {
  render() {
    const input = '### 对于这份简历的简单说明\n\n' +
      ' * 项目概述：\n\n > 随着工作的时间逐渐增长，发现' +
      '在学习新东西的过程中一直没有可见的成功，也无法把自己' +
      '学的东西有效的结合起来，经过思考，决定做个简单的项目，' +
      '考虑到用处，于是就做了一个简单的web简历；\n\n' +
      ' * 涉及技术：\n\n > webStorm: 这是一个前端代码编辑' +
      '器 \n\n > react: 是一个用于构建用户界面的 JAVASCRIPT 库，' +
      ' \n\n > ant-moblie: 一个基于 Preact / React / React Native 的 UI 组件库 \n\n > dva: ' +
      '是基于 redux 最佳实践 实现的 framework，简化使用 redux 和 redux-saga ' +
      '时很多繁杂的操作 \n\n > echarts: 一个使用 JavaScript 实现的开源可视化库' +
      ' \n\n > Ant Mition:  能够快速在React 框架中使用动画 \n\n > react-markdown:' +
      ' 为react开发的markDown工具，方便用于文档的编辑 \n\n > css3:' +
      ' 用于控制网页的样式和布局 \n\n > react-router: 管理路由 \n\n' +
      ' * 使用指导: \n\n' +
      ' 1. 进入首页点击简历图片会进入个人照片展示页面,下方是两个音乐播放的控制按钮，点击跳动的书本进入项目文档页面 \n\n' +
      ' 2. 点击六面体图片任何位置都会进入跟人资料详情页面 \n\n' +
      ' 3. 在个人信息页面有个现居住项，点击会进入地图页面，此页面展示目前住址，和当前天气情况 \n\n' +
      ' 4. 在所有子页面点击返回上一页可回退';
    return (
      <div className={styles.wrap}>
        <ReactMarkdown source={input} />
      </div>
    );
  }
}

export default Dom;
