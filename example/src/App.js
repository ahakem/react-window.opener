import React from 'react'


import SmallWindow from './SmallWindow'
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

const App = () => {
  
  return (
    <Router>
      <>
      <Switch>
      <Route path="/login" exact component={SmallWindow} />
      <Route  component={Home} />
      
      </Switch>
      </>

    </Router>
  )
}

export default App
