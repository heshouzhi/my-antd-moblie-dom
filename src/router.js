import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import PhotoPage from './routes/PhotoPage';
import Intorduce from './routes/Intorduce';
import WorkSteps from './routes/WorkSteps';
import Map from './routes/Map';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/photo" component={PhotoPage} />
      <Route path="/intorduce" component={Intorduce} />
      <Route path="/work" component={WorkSteps} />
      <Route path="/map" component={Map} />
    </Router>
  );
}

export default RouterConfig;
