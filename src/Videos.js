import React, { Component } from 'react';

import './Videos.css';


class Videos extends Component {
  render() {
    const width = document.body.clientWidth;
    var cstate = 'videos';
    var cstate2 = 'nav';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'videos2';
      cstate2 = 'nav2';
    }
    if (width >= 750){
      columns = 3;
      cstate = 'videos';
      cstate2 = 'nav';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'videos';
      cstate2 = 'nav';
    }     
    return (
      <div className={cstate}>

        This is Videos stuff
        
      </div>
    );
  }
}

export default Videos;