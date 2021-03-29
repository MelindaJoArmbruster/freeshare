import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchUserItems} from '../store/useritems'
import SingleItem from './SingleItem'
import {logout} from '../store'
import history from './../history'

/**
 * COMPONENT
 */

// Render Class
class UserHome extends React.Component {
  componentDidMount() {
    this.props.fetchUserItems(this.props.user.id)
  }

  render() {
    const {user} = this.props
    let {items} = this.props.useritems

    // Attach the user to each item
    items = items.map((item) => {
      item.user = user
      return item
    })

    return (
      <div className="containter-sm container-xl mt-3 footerSpacing">
        {this.props.useritems.loading ? null : console.log(items)}
        <h3>Welcome {user.firstName}!</h3>
        Account Details |{' '}
        {this.props.user.admin ? (
          <a
            className="text-decoration-none"
            onClick={() => history.push('/users')}
          >
            {' '}
            * Admin Home *{' '}
          </a>
        ) : null}
        {this.props.user.admin ? <a> | </a> : null}
        <a
          className="text-decoration-none"
          href="#"
          onClick={this.props.handleClick}
        >
          Logout
        </a>
        <ul className="list-group">
          <li className="list-group-item">
            {user.firstName} {user.lastName}
          </li>
          <li className="list-group-item">{user.email}</li>
          <li className="list-group-item">{user.street1}</li>
          {user.street2 ? (
            <li className="list-group-item">{user.street2}</li>
          ) : null}
          <li className="list-group-item">
            {user.city}, {user.state} {user.zip}
          </li>
        </ul>
        <div className="row gx-2 row-cols-1 row-cols-md-2 text-secondary mt-3">
          <div className="col text-light">
            <div className="bg-secondary border rounded">
              <a
                className="btn m-1 bg-light py-2 rounded-top text-secondary text-center"
                style={{width: '98%'}}
                data-bs-toggle="collapse"
                href="#multiCollapseOpen"
                aria-expanded="true"
                aria-controls="multiCollapseOpen"
                role="button"
              >
                <h4 className="m-0">Open Items </h4>
                <i
                  className="bi bi-chevron-compact-down text-secondary"
                  style={{
                    fontSize: '2rem',
                  }}
                />
              </a>
              <div className="collapse multi-collapse" id="multiCollapseOpen">
                <div className="row gx-2 p-2 row-cols-1 row-cols-md-2">
                  {items
                    .filter((item) => item.status === 'Open')
                    .map((item) => (
                      <SingleItem key={item.id} item={item} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col text-light">
            <div className="bg-secondary border rounded">
              <a
                className="btn m-1 bg-light py-2 rounded-top text-secondary text-center"
                style={{width: '98%'}}
                data-bs-toggle="collapse"
                href="#multiCollapseClosed"
                aria-expanded="true"
                aria-controls="multiCollapseClosed"
                role="button"
              >
                <h4 className="m-0">Closed Items </h4>
                <i
                  className="bi bi-chevron-compact-down text-secondary"
                  style={{
                    fontSize: '2rem',
                  }}
                />
              </a>
              <div className="collapse multi-collapse" id="multiCollapseClosed">
                <div className="row gx-2 p-2 row-cols-1 row-cols-md-2">
                  {items
                    .filter((item) => item.status === 'Closed')
                    .map((item) => (
                      <SingleItem key={item.id} item={item} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapDispatch = (dispatch) => ({
  fetchUserItems: (page, items) => {
    dispatch(fetchUserItems(page, items))
  },
  handleClick: () => {
    dispatch(logout())
  },
})

const mapState = (state) => {
  return {
    user: state.user,
    useritems: state.useritems,
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  user: PropTypes.object,
}
