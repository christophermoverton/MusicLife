import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Music from './Music';
import Aboutus from './Aboutus';
import Videos from './Videos';
import Contactus from './Contactus';
import Menu from './Menu';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
ReactDOM.render(
    (
  <BrowserRouter>
    <div id="bc">
        <App />
        <Menu />
        <Switch class="fre">
          
          <Route exact path='/' component={Home} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/aboutus' component={Aboutus} />
          <Route exact path='/videos' component={Videos} />
          <Route exact path='/contactus' component={Contactus} />
      </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
