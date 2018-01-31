import React, { Component } from 'react';

import './Music.css';


class Music extends Component {
  render() {
    const width = document.body.clientWidth;
    var cstate = 'music';
    var cstate2 = 'nav';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'music2';
      cstate2 = 'nav2';
    }
    if (width >= 750){
      columns = 3;
      cstate = 'music';
      cstate2 = 'nav';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'music';
      cstate2 = 'nav';
    }
    return (
      <div className={cstate}>

        This is music stuff
        
      </div>
    );
  }
}

export default Music;