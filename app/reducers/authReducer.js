var initialState = {
  host: '',
  students: [],
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "AUTH_SET_HOST": {
      return {...state, host: action.payload}
    }
    case "AUTH_SET_STUDENTS": {
      return {...state, students: action.payload}
    }
  }

  return state
}
