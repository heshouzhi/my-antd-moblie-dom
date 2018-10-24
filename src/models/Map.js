export default {

  namespace: 'map',

  state: {
    data: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getWeather({ payload }, { call, put }) {  // eslint-disable-line
      // const url = 'https://restapi.amap.com/v3/weather/weatherInfo?city=310000&key=163e2eee901e51b0e804dbc112a5bcef';
      // fetch(url) // eslint-disable-line
      //   .then((response) => { return response.json(); })
      //   .then(data => console.log(data));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
