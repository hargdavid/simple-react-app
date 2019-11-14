import React from 'react'

import './Routes.css'

import Page1 from './containers/Page1'
import Page2 from './containers/Page2'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Routes = () => {
  const location = useLocation()

  return (
    <>
      {console.log(location.key)}
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/page-1'}>Page1</Link>
        <Link to={'/page-2'}>Page2</Link>
      </nav>

      <div>
        <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          exit={false}
          enter={true}
          timeout={100}
        >

          <Switch location={location}>
            <Route path={'/page-1'}>
              <Page1/>
            </Route>
            <Route path={'/page-2'}>
              <Page2/>
            </Route>
          </Switch>

        </CSSTransition>

        </TransitionGroup>
      </div>


    </>
  )
}

export default Routes
