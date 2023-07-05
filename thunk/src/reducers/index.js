import { GET_PERSON, SET_IS_FETCHING } from "../actions";

const initialState = {
  person: {
    name: {
      title: "Mr",
      first: "Silas",
      last: "Petersen"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
    }
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING:
      return {...state, isFetching: action.payload}
    default:
      return state;
  }
};