var initialState = {
  host: '',
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "AUTH_SET_HOST": {
      return {...state, host: action.payload}
    }
  }

  return state
}
