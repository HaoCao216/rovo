import React, { Component } from 'react'
import './App.css'
import './assets/css/grid.css'
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"

import SignUp from './containers/SignUpContainer/SignUp'
import Login from './containers/LoginContainer/Login'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
