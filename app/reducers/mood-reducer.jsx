import { combineReducers } from 'redux'

const initialState = {}

export default function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

const newUserMood = (moodInfo) => {
  // add moodInfo to database
}
