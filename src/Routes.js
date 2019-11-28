import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Page1 from './containers/Page1'
import Page2 from './containers/Page2'
import Home from './containers/Home'

import './Routes.css'

const Routes = () => {
  const location = useLocation()

  return (
    <>
      <TransitionGroup className={'wrapper'}>
        <CSSTransition
          key={location.key}
          classNames="example"
          timeout={2500}
        >
          <Switch location={location}>
                <Route exact path={'/'}>
                  <Home/>
                </Route>
            <Route path={'/page-1'}>
              <Page1/>
            </Route>
            <Route path={'/page-2'}>
              <Page2/>
            </Route>
          </Switch>

        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default Routes
