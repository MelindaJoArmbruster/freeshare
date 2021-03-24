import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MessageList from './MessageList'
import {fetchMessages} from '../store'

export class Main extends Component {
  componentDidMount() {
    this.props.loadMessages()
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
          <Switch>
            <Route path="/chat/:chatId" component={MessageList} />
            {/* <Redirect to="/channels/1" /> */}
          </Switch>
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => dispatch(fetchMessages()),
})

export default connect(null, mapDispatchToProps)(Main)
