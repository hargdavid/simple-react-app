import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'

import Routes from './Routes'

const App = () => {

  return (
      <header>
        <Router>
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/page-1'}>Page1</Link>
            <Link to={'/page-2'}>Page2</Link>
          </nav>
          <Switch>
            <Route path="*">
              <Routes/>
            </Route>
          </Switch>
        </Router>
      </header>
  )
}

export default App
