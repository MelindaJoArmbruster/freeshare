import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/users.js'
import {me} from '../store/user.js'
import {UserView} from './index.js'
class AllUsers extends Component {
  // need to fetch all the users
  // need to fetch the current logged in user to later check if admin
  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchUser()
  }

  // need this logic in case we refresh the page we're on,
  // which would necessitate reloading the user in componentDidMount
  // i.e., we may not have the rights to get all users yet
  // until the logged in user is successfully loaded

  componentDidUpdate(prevProps) {
    if (!prevProps.user.id && this.props.user.id) {
      this.props.fetchUsers()
    }
  }

  render() {
    console.log('in render this.props', this.props)
    if (this.props.users.length === 0) {
      return <div>Loading, or we have no users =(</div>
    }

    const {users} = this.props || []
    return (
      <div className="container mt-4">
        <div className="row">
          {users.map((user) => {
            return <UserView key={user.id} user={user} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    },
    fetchUser: () => dispatch(me()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
