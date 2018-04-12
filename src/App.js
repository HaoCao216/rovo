import React, { Component } from 'react'
import './App.css'
import './assets/css/grid.css'
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"

import SignUp from './containers/SignUpContainer/SignUp'
import Login from './containers/LoginContainer/Login'
import Navbar from './components/Navbar/Navbar'
import About from './containers/About/About'
// import Dashboard from './containers/Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>        
        <div className="App">
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/about" component={About}/>
          <About />
        </div>
      </Router>
    );
  }
}

export default App;
