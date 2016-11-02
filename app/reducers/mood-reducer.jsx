import { combineReducers } from 'redux'

const initialState = {
  moods: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

const newUserMood = (moodInfo) => {
  // add moodInfo to database
}
