import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Asset4 from './Asset4.png';
import './Menu.css';

class Menu extends Component {
  render() {
    const width = document.body.clientWidth;
    var cstate = 'menubar';
    var cstate2 = 'nav';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'menubar2';
      cstate2 = 'nav2';
    }
    if (width >= 750){
      columns = 3;
      cstate = 'menubar';
      cstate2 = 'nav';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'menubar';
      cstate2 = 'nav';
    }
    return (
        <div id={cstate}>
            <ul id={cstate2}>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'/Music'}>MUSIC</Link></li>
                <li><Link to={'/aboutus'}>ABOUT US</Link></li>
                <li><Link to={'/videos'}>VIDEOS</Link></li>
                <li><Link to={'/contactus'}>CONTACT US</Link></li>
            </ul>
        </div>
    );
  }
}

export default Menu;