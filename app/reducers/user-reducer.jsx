import { combineReducers } from 'redux'
import axios from 'axios'
const initialState = {
  users: [],
  currentUser: {}
}

const SET_USER_MOOD = 'SET_USER_MOOD'

export default function(state = initialState, action) {
  switch(action.type) {

    default: return state
  }
};

const setCurrentUser = (moodInfo) => ({
  type: SET_CURRENT_USER,
  name: moodInfo.userName
})

const setUserMood = (moodInfo) => ({
  type: SET_USER_MOOD,
  moodInfo
})
const getUserMoodInfo = moodInfo => dispatch => {
  console.log('getUserMoodInfo', moodInfo)
    axios.get(`/api/users/${moodInfo.name}`)
      .then(res => res.send(res.data))
}


