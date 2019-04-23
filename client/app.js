import React from 'react'

import {Navbar, UserHome} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <main>
        <div>
          <Navbar />
          <UserHome />
        </div>
        <div className="main">
          <Routes />
        </div>
      </main>
    </div>
  )
}

export default App
