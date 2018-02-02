import React, { Component } from 'react';

import './Home.css';
import Homegallery from './Homegallery';

class Home extends Component {
    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
       this.state = {width: 0, height: 0};
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
      }
      updateDimensions(){

        var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
    
            this.setState({width: width, height: height});
            // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
        }
  render() {
    var swidth = this.state.width;
    const width = document.body.clientWidth;
    const height = window.innerHeight;
    var cstate = 'home';
    var cstate2 = 'nav';

    if (width >= 250){
      cstate = 'home2';
      cstate2 = 'nav2';
    }
    if (width >= 550){
      cstate = 'home';
      cstate2 = 'nav';
    }

    if (width >= 1824){
     
      cstate = 'home';
      cstate2 = 'nav';
    }
    if (width >= 550 && height <= 375){
        cstate = 'home3';
        cstate2 = 'nav';
    }

    return (
      <div className={cstate}>
        <Homegallery />

      </div>
    );
  }
}

export default Home;