import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserMoodInfo, setUserMood } from '../reducers/user-reducer'
import store from '../store'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      mood: '',
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  loadUserMood(moodInfo){
    store.dispatch(getUserMoodInfo(moodInfo))
  }

  render() {
    const {currentUser} = this.props
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.onFormSubmit}>
          <fieldset>
            <legend className='text-center'>How are you feeling today?</legend>

            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-8">
                <input
                  className="form-control"
                  name='name'
                  type="text"
                  placeholder='your name'/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Mood</label>
              <div className="col-xs-8">
                <input
                  className="form-control"
                  name='mood'
                  type="text"
                  placeholder='happy / sad / angry / frustrated etc'/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-8 col-xs-offset-5">
                <button
                  type="submit"
                  className="btn btn-info">Submit</button>
              </div>
            </div>

          </fieldset>
        </form>
      </div>
    )
  }



  onFormSubmit(e){
    console.log('this.props', this.props)
    const { loadUserMood } = this.props
    e.preventDefault();
    //dispach an action with form info to update the store
    const moodInfo = {
      name: e.target.name.value,
      mood: e.target.mood.value
    }
    // console.log('moodInfo', moodInfo)
     this.loadUserMood(moodInfo)
  }
}

const mapState = ({currentUser}) => ({currentUser})
const mapDispatch = dispatch => ({
  loadUserMood: (moodInfo) => {
    dispatch(setUserMood(moodInfo))
  }
})
// mapDispatch takes in dispatch and return an object

export const HomeContainer = connect(mapState, mapDispatch)(Home)

