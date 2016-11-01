'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import { HomeContainer } from './components/Home'
import UserList, {UserListContainer} from './components/UserList'
import MoodList,{MoodContainer} from './components/MoodList'
import MoodDetail from './components/MoodDetail'
import { Router, Route, browserHistory, indexRedirect} from 'react-router'
import { sendUsers } from './reducers/user-reducer'

const loadUsers = (nextState) => {
  fetch('/api/users')
    .then(res => res.json())
    .then(users => store.dispatch(sendUsers(users)))
}
render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Root}>
        <indexRedirect to='/home'/>
        <Route path='home' component={MoodContainer}/>
        <Route path='users' component={UserListContainer} onEnter={loadUsers}/>
        <Route path='moods' component={HomeContainer}/>
        <Route path='users/:userName/:moodId' component={MoodDetail}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
