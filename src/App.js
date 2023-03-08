import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import Post from './Post'
import Get from './Get'
import Put from './Put'
import Delete from './Delete'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'
class App extends Component {
  render() {
    return (
      <Router>
          <div className='App'>
            <Switch>
            <Route exact path="/" component={Signin}></Route>
            <Route exact path="/Signin" component={Signin}></Route>
            <Route exact path="/Signup" component={Signup}></Route>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/Post" component={Post}></Route>
            <Route exact path="/Get" component={Get}></Route>
            <Route exact path="/Put" component={Put}></Route>
            <Route exact path="/Delete" component={Delete}></Route>
            </Switch>
          </div>
      </Router>
    )
  }
}

export default App