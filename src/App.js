import React, { Component } from 'react';
import logo from './back2.jpg';
import Asset4 from './Asset4.png';
import './App.css';


class App extends Component {
  render() {
    const width = document.body.clientWidth;
    var cstate = 'si';
    var cstate2 = 'title';
    var cstate3 = 'App';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'si2';
      cstate2 = 'title2';
      cstate3 = 'App2';
    }
    if (width >= 750){
      columns = 3;
      cstate = 'si';
      cstate2 = 'title';
      cstate3 = 'App';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'si';
      cstate2 = 'title';
      cstate3 = 'App';
    }
    return (
      <div className={cstate3}>

          <img id={cstate} src={logo}  />
          <div id={cstate2}>Music of Your Life</div>
        
      </div>
    );
  }
}

export default App;
