import React from 'react';
import { updateUsers, loadUsers} from '../reducers/user-reducer'
import store from '../store'
import { connect } from 'react-redux'
export default class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {userName: ''}
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  render() {
    const {users} = this.props

    return (
      <div className="well">
        <form onSubmit={this.onFormSubmit}>
          <fieldset>
           <div className="form-group">
              <label className="col-xs-2 control-label">Your Name</label>
              <div className="col-xs-8">
                <input
                  className="form-control"
                  name='userName'
                  type="text"
                  placeholder='your name'/>
              </div>
              <div className="col-xs-2">
                <button
                    type="submit"
                    className="btn btn-info">Add
                </button>
              </div>
          </div>

          </fieldset>
        </form>
        <div className="col-xs-8">
        {/*show a list of all users here*/}
        </div>
      </div>
    )
  }

  postUser(userInfo) {
    fetch('/api/users', {
      method: "POST",
      headers: {
      "Content-type": "application/json"
      },
      body: JSON.stringify({
        userName: userInfo.userName,
      })
     })
      .then(()=> store.dispatch(updateUsers(userInfo)))
      .catch(err => console.error(err))

    .then(res => console.log('finished posting'))
  }

  afterSubmit(e) {

  }

  onFormSubmit(e){
    e.preventDefault();
    //dispach an action with form info to update the store
    const userInfo = {
      userName: e.target.userName.value,
    }
     this.postUser(userInfo)
     e.target.userName.value = ''
  }
}

const mapState = (user) => {
  return {users: user.users}
}


export const UserListContainer = connect(mapState, null)(UserList)
