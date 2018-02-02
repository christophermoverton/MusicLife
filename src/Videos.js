import React, { Component } from 'react';

import './Videos.css';


class Videos extends Component {
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
    var cstate = 'videos';
    var cstate2 = 'vid2';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'videos2';
      cstate2 = 'vid22';
    }
    if (width >= 550){
      columns = 3;
      cstate = 'videos';
      cstate2 = 'vid2';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'videos';
      cstate2 = 'vid2';
    }     
    if (width >= 550 && height <= 375){
        cstate = 'videos3';
  
    }

    return (
      <div className={cstate}>
      <div className='vid'>
<iframe id={cstate2} src="https://www.youtube.com/embed/hMdmhlPsKS8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe id={cstate2} src="https://www.youtube.com/embed/w95U37IlQ5s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      </div>
    );
  }
}

export default Videos;