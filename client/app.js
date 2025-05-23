import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <ToastContainer />
    </div>
  )
}

export default App
