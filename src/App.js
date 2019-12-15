import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from './pages/mainpage';
import Quiz from './pages/quiz';
import Admin from './pages/admin';
import Login from './pages/login';

class App extends Component {
  render() {
  
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/quiz' component={Quiz}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
 
  }
}

export default App;