import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from './screens/LoginPage'
import UserPage from './screens/UserPage'
import CharacterCreationPage from './screens/CharacterCreationPage'
import CharacterPage from './screens/CharacterPage'
import GamePage from './screens/GamePage'
import Navbar from './components/Navbar'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <BrowserRouter>

        <Navbar />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/user' component={UserPage} />
          <Route exact path='/charactercreation' component={CharacterCreationPage} />
          <Route exact path='/character' component={CharacterPage} />
          <Route exact path='/game' component={GamePage} />
          <Route component={LoginPage} />
        </Switch>
      </BrowserRouter>

    )
  }
}