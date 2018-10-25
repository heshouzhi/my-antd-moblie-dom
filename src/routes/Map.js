import React from 'react';
import { WhiteSpace, Card } from 'antd-mobile';
import { Map, Marker } from 'react-amap';
import { connect } from 'dva';

class Dom extends React.Component {
  constructor() {
    super();
    this.toolEvents = {
      created: (tool) => {
        this.tool = tool;
      },
    };
    this.mapPlugins = ['ToolBar'];
    this.mapCenter = { longitude: 121.2834221625, latitude: 31.3331965295 };
    this.markerPosition = { longitude: 121.2834221625, latitude: 31.3331965295 };
  }
  state = {
    data: {},
  };
  componentWillMount() {
    const url = 'https://restapi.amap.com/v3/weather/weatherInfo?city=310000&key=163e2eee901e51b0e804dbc112a5bcef';
    fetch(url) // eslint-disable-line
      .then((response) => { return response.json(); })
      .then(data => this.setState({ data }));
  }
  componentDidMount() {
    this.props.dispatch({ type: 'map/getWeather' });
  }
  render() {
    // const weatherInfo = this.state.data.lives[0];
    let a = '';
    if (this.state.data.lives && this.state.data.lives.length > 0) {
      a = this.state.data.lives[0];
    }
    const loading = '加载中...';
    return (
      <div style={{ width: '100%', height: '50%' }}>
        <Map
          amapkey={'163e2eee901e51b0e804dbc112a5bcef'}
          plugins={this.mapPlugins}
          center={this.mapCenter}
          zoom={12}
        >
          <Marker position={this.markerPosition} />
        </Map>
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title={`${a.city || loading}天气预报`}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          />
          <Card.Body>
            <div>日期：{`${a.reporttime || loading}`}</div>
            <WhiteSpace size="lg" />
            <div>天气：{`${a.weather || loading}`}</div>
            <WhiteSpace size="lg" />
            <div>风力：{`${a.windpower || loading}`}</div>
            <WhiteSpace size="lg" />
            <div>湿度：{`${a.humidity || loading}`}</div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect(({ map }) => ({ map }))(Dom);
