import './styles/globals.scss';
import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import  Home  from './components/hackathon22/home/home';
import Register from './components/hackathon22/register/register';


export default class App extends React.Component {
  constructor() {
    super();
    
}

  render() {
    return (
      <>
        <Switch>
          <Route path="/HealnHale/home">
            <Home></Home>
          </Route>
          <Route path="/HealnHale/register">
            <Register></Register>
          </Route>
          <Route exact path="/" render={() => { return <Redirect to="/HealnHale/home" /> }} />
        </Switch>
      </>
    );
  }
}
