import React, { Component } from 'react';
import Contactusform from './Contactusform';
import './Contactus.css';


class Contactus extends Component {
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
    var cstate = 'contactus';
    var cstate2 = 'hed';
    var cstate3 = 'reg';
    var cstate4 = 'regb';
    let columns = 1;
    if (width >= 250){
      cstate = 'contactus2';
      cstate2 = 'hed2';
      cstate3 = 'reg2';
      cstate4 = 'regb2';
    }
    if (width >= 550){
      cstate = 'contactus';
      cstate2 = 'hed';
      cstate3 = 'reg';
      cstate4 = 'regb';
    }
    if (width >= 1824){
      cstate = 'contactus';
      cstate2 = 'hed';
      cstate3 = 'reg';
      cstate4 = 'regb';
    }   
    if (width >= 550 && height <= 375){
        cstate = 'contactus3';
  
    }
    return (
      <div className={cstate}>
        <div className={cstate2}>Contact Us<br /><br />
               <div className={cstate3}>
                Booking:  <br />
                (913) 271-5220 <br /> <br />
                Fax:      <br />
                (913) 825-6230 <br /> <br />
                Email:   <br /> 
                rabramsmusic@gmail.com <br /><br /><br />
               </div>
               <div className={cstate4}>
                Interested in booking?  Tell us more!
             </div>
        </div>
        <Contactusform />
        
      </div>
    );
  }
}

export default Contactus;