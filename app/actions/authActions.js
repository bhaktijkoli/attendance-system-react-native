import store from './../store';
import request from './../utils/request';

module.exports.setHost = (data) => {
  store.dispatch({type: 'AUTH_SET_HOST', payload: data})
}

module.exports.getStudents = () => {
  request.get('students')
  .then(res => {
    store.dispatch({type: 'AUTH_SET_STUDENTS', payload: res.data})
  })
}

module.exports.getSubjects = () => {
  request.get('subjects')
  .then(res => {
    store.dispatch({type: 'AUTH_SET_SUBJECTS', payload: res.data})
  })
}
