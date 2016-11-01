import React from 'react';
import { connect } from 'react-redux'
import { setCurrentUser } from '../reducers/user-reducer'
import { Link } from 'react-router'
import axios from 'axios'
import store from '../store'


export default class MoodList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      moodName: '',
      picUrl: ''
    }
    this.addUserMood = this.addUserMood.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  render() {
    const {currentUser} = this.props
    console.log('currentUser', currentUser)
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.onFormSubmit}>
          <fieldset>
            <legend className='text-center'>Add New Mood</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Your Name</label>
              <div className="col-xs-8">
                <input
                  className="form-control"
                  name='userName'
                  type="text"
                  placeholder='your name'/>
              </div>
            </div>

            <div className="form-group">
              <label className="col-xs-2 control-label">Mood Name</label>
              <div className="col-xs-8">
                <input
                  className="form-control"
                  name='moodName'
                  type="text"
                  placeholder='happy / sad / angry / frustrated'/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Picture Link</label>
              <div className="col-xs-8">
                <input
                  className="form-control"
                  name='picUrl'
                  type="text"
                  placeholder='www.image-link.com'/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-8 col-xs-offset-5">
                <button
                  type="submit"
                  className="btn btn-info">Save</button>
              </div>
            </div>

          </fieldset>

          <div className="form-group">
              <div className="col-xs-8 col-xs-offset-11">
                <Link to='/moods'><button
                  type="submit"
                  className="btn btn-success">Next</button></Link>
              </div>
            </div>
        </form>
      </div>
    )
  }

  addUserMood(moodInfo){
    fetch(`/api/users/${moodInfo.userName}/${moodInfo.moodName}`, {
      method: "POST",
      headers: {
      "Content-type": "application/json"
      },
      body: JSON.stringify({
        userName: moodInfo.userName,
        moodName: moodInfo.moodName,
        picUrl: moodInfo.picUrl
      })
     })
      .then(()=> store.dispatch(setCurrentUser(moodInfo)))
      .catch(err => console.error(err))

    .then(res => console.log('finished posting'))
  }

  onFormSubmit(e){
    e.preventDefault();
    //dispach an action with form info to update the store
    const moodInfo = {
      userName: e.target.userName.value,
      moodName: e.target.moodName.value,
      picUrl: e.target.picUrl.value
    }
    console.log('moodInfo', moodInfo)
     this.addUserMood(moodInfo)
  }
}

const mapState = (user) => {
  return {
    currentUser: user.currentUser}
  }

export const MoodContainer = connect(mapState, null)(MoodList)

