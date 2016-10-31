'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import { HomeContainer } from './components/Home'
import UserList from './components/UserList'
import MoodList from './components/MoodList'
import MoodDetail from './components/MoodDetail'
import { Router, Route, browserHistory, indexRoute} from 'react-router'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Root}>
        <indexRoute component={MoodList}/>
        <Route path='users' component={UserList}/>
        <Route path='users/:userName' component={HomeContainer}/>
        <Route path='users/:userName/:moodId' component={MoodDetail}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
