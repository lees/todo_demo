import 'babel-polyfill'
import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import IndexScreen from 'screens/IndexScreen.jsx'
import AddScreen from 'screens/AddScreen.jsx'

const history = createBrowserHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <section className="b-page">
          <Switch>
            <Route path="/add" component={AddScreen}   />
            <Route path="/"    component={IndexScreen} />
          </Switch>
        </section>
      </Router>
    )
  }
}