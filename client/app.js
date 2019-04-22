import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <main>
        <div>
          <Navbar />
        </div>
        <div className="main">
          <Routes />
        </div>
      </main>
    </div>
  )
}

export default App
