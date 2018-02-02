import React, { Component } from 'react';

import './Music.css';


class Music extends Component {
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
    var cstate = 'music';
    var cstate2 = 'nav';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'music2';
      cstate2 = 'nav2';
    }
    if (width >= 550){
      columns = 3;
      cstate = 'music';
      cstate2 = 'nav';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'music';
      cstate2 = 'nav';
    }

    if (width >= 550 && height <= 375){
        cstate = 'music3';
  
    }
    return (
      <div className={cstate}>

        This is music stuff
        
      </div>
    );
  }
}

export default Music;