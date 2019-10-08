var initialState = {
  host: '',
  students: [],
  subjects: [],
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "AUTH_SET_HOST": {
      return {...state, host: action.payload}
    }
    case "AUTH_SET_STUDENTS": {
      return {...state, students: action.payload}
    }
    case "AUTH_SET_SUBJECTS": {
      return {...state, subjects: action.payload}
    }
  }

  return state
}
