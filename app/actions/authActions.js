import store from './../store';

module.exports.setHost = (data) => {
  store.dispatch({type: 'AUTH_SET_HOST', payload: data})
}
