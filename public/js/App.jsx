import 'babel-polyfill'
import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from 'store/store'

import IndexScreen from 'screens/IndexScreen.jsx'
import AddScreen from 'screens/AddScreen.jsx'

const history = createBrowserHistory()
const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
        <section className="b-page">
          <Switch>
            <Route path="/add" component={AddScreen}   />
            <Route path="/"    component={IndexScreen} />
          </Switch>
        </section>
      </Router>
      </Provider>
    )
  }
}