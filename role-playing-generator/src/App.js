import * as React from 'react';
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import LoginPage from './screens/LoginPage'
import UserPage from './screens/UserPage'
import CharacterCreationPage from './screens/CharacterCreationPage'
import CharacterPage from './screens/CharacterPage'
import GamePage from './screens/GamePage'
import Navbar from './components/Navbar'

import history from './history'

const PurePrivateRoute = ({
  component, isAuthenticated, ...rest
}) => {
  const Component = component;
  if (Component != null) {
    return (
      <Route {...rest} render={(props) => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect to={ {
              pathname: '/login',
              state: { from: props.location }
            } } />
          )
      )} />
    )
  } else {
    return null;
  }
};

const PrivateRoute = connect((state) => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PurePrivateRoute);



export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <Router history={history}>

        <Navbar />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <PrivateRoute exact path='/user' component={UserPage} />
          <PrivateRoute exact path='/charactercreation' component={CharacterCreationPage} />
          <PrivateRoute exact path='/character' component={CharacterPage} />
          <PrivateRoute exact path='/game' component={GamePage} />
          <Route component={LoginPage} />
        </Switch>
      </Router>

    )
  }
}