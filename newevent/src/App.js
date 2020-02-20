import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { RSC, RCC } from './pages' ;

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path = "/" component = {RCC}/>  

        <Route path = "/also" component = {RSC}/> 
      </div>
    );
  }
}

export default App;