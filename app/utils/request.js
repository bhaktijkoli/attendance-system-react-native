import axios from 'axios';
import store from './../store';

module.exports.get = (url) => {
  let state = store.getState();
  let host = state.auth.host + ":5000";
  console.log(`http://${host}/${url}`);
  return axios.get(`http://${host}/${url}`);
}
