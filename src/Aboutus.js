import React, { Component } from 'react';
import Rhonda1 from './rhonda1.jpg';
import Rhonda2 from './rhonda2.jpg';
import './Aboutus.css';


class Aboutus extends Component {
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
    var cstate = 'aboutus';
    var cstate2 = 'par1';
    var cstate3 = 'r1';
    var cstate4 = 'r2';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'aboutus2';
      cstate2 = 'par12';
      cstate3 = 'r12';
      cstate4 = 'r22';
    }
    if (width >= 550){
      columns = 3;
      cstate = 'aboutus';
      cstate2 = 'par1';
      cstate3 = 'r1';
      cstate4 = 'r2';
    }

    if (width >= 1824){
      columns = 4;
      cstate = 'aboutus';
      cstate2 = 'par1';
      cstate3 = 'r1';
      cstate4 = 'r2';
    }

    if (width >= 550 && height <= 375){
        cstate = 'aboutus3';
  
    }
    return (
      <div className={cstate}>
      
        <div className={cstate2}>
        <img id={cstate3} src={Rhonda1}  />  
            Though originally trained in opera and classical repertoire, Rhonda Abrams 
(soprano), has performed a wide variety of musical genres in various community  
theaters, churches and in Kansas City's American Opera Studio. As a member of  
Celtique Trio for several years she has branched more into folk music. While in the 
band she picked up playing the bodhran and Low D Whistle. The bodhran is a 
single headed wood rimmed Celtic drum played with a hand or stick and is rooted 
deep in Celtic history and tradition. The Low D Whistle is a relatively new 
instrument that produces a sound similar to an ancient Recorder, or maybe even a 
Clarinet.<br /><br /><br />
<img id={cstate4} src={Rhonda2}  />  
As a trained pianist, Cathy Overton has participated in the Kansas City music
scene for over 30 years. She has performed in churches, various ensembles/bands
and has accompanied many soloists in a wide range of repertoire. She is also well
known for the myriad of instrumental sounds she can create from an electric
keyboard. In addition, she was a member of the O'Riada Dance Company for
several years and still enjoys demonstrating a jig or two when the opportunity
arises. <br /><br />
Based out of the Kansas City area, Rhonda and Cathy have joined together to offer an
eclectic assortment of songs and melodies that the world has been enjoying for many
decades, as well as throughout the ages. Performing Music of Your Life has been an outreach
of ministry that has touched the lives of hundreds of individuals over the past several years.
Specializing in jazz standards, show tunes, folk, sacred, classical and even a touch of opera
once in awhile, programs can be specialized to meet individual requests, venues and
occasions.<br /> 
        </div>
      </div>
    );
  }
}

export default Aboutus;