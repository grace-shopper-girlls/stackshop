import React from 'react'

import {Navbar} from './components'
import AllFruits from './components/all-fruits'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AllFruits />
    </div>
  )
}

export default App
