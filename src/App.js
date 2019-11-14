import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Routes from './Routes'

const App = () => {

  return (
    <div>
      <header>
        <Router>
          <Switch>
            <Route path="*">
              <Routes/>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
