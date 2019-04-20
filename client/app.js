import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="main">
        <Routes />
      </div>
    </div>
  )
}

export default App
