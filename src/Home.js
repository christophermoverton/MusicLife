import React, { Component } from 'react';

import './Home.css';


class Home extends Component {
  render() {
    const width = document.body.clientWidth;
    var cstate = 'home';
    var cstate2 = 'nav';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'home2';
      cstate2 = 'nav2';
    }
    if (width >= 750){
      columns = 3;
      cstate = 'home';
      cstate2 = 'nav';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'home';
      cstate2 = 'nav';
    }
    return (
      <div className={cstate}>

        This is home stuff
        
      </div>
    );
  }
}

export default Home;