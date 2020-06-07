import React from 'react'

import SmallWindow from './SmallWindow'
import Home from './Home'
import { HashRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/login' exact component={SmallWindow} />
        <Route component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default App
