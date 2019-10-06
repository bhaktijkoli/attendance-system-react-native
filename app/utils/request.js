import axios from 'axios';
import store from './../store';

module.exports.get = (url) => {
  return axios.get(module.exports.route(url));

}

module.exports.post = (url, data) => {
  return axios.post(module.exports.route(url), data);
}

module.exports.delete = (url, data) => {
  return axios.delete(module.exports.route(url), data);
}

module.exports.route = (url) => {
  let state = store.getState();
  let host = state.auth.host + ":5000";
  console.log(`http://${host}/${url}`);
  return `http://${host}/${url}`;
}
