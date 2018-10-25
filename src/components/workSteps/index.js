import React from 'react';
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';
import echarts from 'echarts';
import A from '../../assets/A.svg';
import B from '../../assets/B.svg';
import styles from './index.less';

const Step = Steps.Step;

const descriptionOne = () => (
  <img src={A} alt="" style={{ width: 18, height: 18, color: '#fff' }} />
);
const descriptionTwo = () => (
  <img src={B} alt="" style={{ width: 18, height: 18, color: '#fff' }} />
);
class Dom extends React.Component {
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('main')); // eslint-disable-line

// 指定图表的配置项和数据
    const option = {
      title: {
        text: '人生生活满意度',
      },
      tooltip: {},
      xAxis: {
        data: ['童年', '少年', '青年'],
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'line',
        data: [80, 70, 36],
      }],
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    setTimeout(() => {
      window.onresize = () => { // eslint-disable-line
        myChart.resize();
      };
    }, 500);
  }
  handleClick1 = () => {
    console.log(1 + 1);
  };
  render() {
    const element1 = React.createElement(
      'span',
      {
        className: styles.world,
        onClick: this.handleClick1,
      },
      '此时间内工作于上海佑佑信息科技有限公司,在职期间做过优驾微信公众号和后台，' +
      ' 服装定制微信公众号和后台，微信选房系统公众号和后台，数据备份后台' +
      '， 比亚迪4S店工人安装充电桩公众号，善淘网电商微信公众号、仓库管理、收银系统、数据统计，' +
      '以上都是由个人独立完成从页面设计和代码完成',
    );
    const element2 = React.createElement(
      'span',
      {
        className: styles.world,
        onClick: this.handleClick2,
      },
      '此时间内工作于深圳XXX有限公司,在职期间做过房屋数据查看微信公众号，' +
      '政府房屋拆迁管理系统，房屋拆迁管理系统数据设置系统，个人独立完成从页面设计和代码完成',
    );
    return (
      <WingBlank size="lg" style={{ overflow: 'auto', height: '100%' }}>
        <WhiteSpace />
        <Steps size="small" current={1}>
          <Step title="2016.03—2018.02" icon={descriptionOne()} description={element1} />
          <Step title="2018.02—2018—11" icon={descriptionTwo()} description={element2} />
          <Step title="2018.11—至今" description="期待我能在这里留下贵公司浓墨重彩的一笔" />
        </Steps>
        <WhiteSpace size="lg" />
        <div id="main" style={{ width: '100%', height: 200 }} />
      </WingBlank>
    );
  }
}

export default Dom;
