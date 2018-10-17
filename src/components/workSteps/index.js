import React from 'react';
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;

class Dom extends React.Component {
  render() {
    return (
      <WingBlank size="lg">
        <div className="sub-title">Small size</div>
        <WhiteSpace />
        <Steps size="small" current={1}>
          <Step title="Finished" description="This is description" />
          <Step title="In Progress" description="This is description" />
          <Step title="Waiting" description="This is description" />
        </Steps>
      </WingBlank>
    );
  }
}

export default Dom;
