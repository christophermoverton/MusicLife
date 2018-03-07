import React, { Component } from 'react';
import P1 from './rhonda1.jpg';
import P2 from './rhonda2.jpg';
import P3 from './cr1.jpg';
import P4 from './cr2.jpg';
import P5 from './cr3.jpg';
import P6 from './cr4.jpg';
import P7 from './cr5.jpg';
import P8 from './cr6.jpg';
import P9 from './cr7.jpg';
import P10 from './cr8.jpg';
import P11 from './cr9.jpg';
import P12 from './cr10.jpg';
import P13 from './cr12.jpg';
import P14 from './cr11.jpg';
import P15 from './cr13.jpg';
import './Homegallery.css';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
  { src: P1, width: 3, height: 2 },
  { src: P2, width: 4, height: 5 },
  //{ src: P3, width: 3, height: 2 },
  { src: P4, width: 2, height: 3 },
  //{ src: P5, width: 3, height: 2 },
  //{ src: P6, width: 3, height: 2 },
  { src: P7, width: 3, height: 2 },
  { src: P8, width: 3, height: 2 },
  //{ src: P9, width: 2, height: 3 },
  { src: P10, width: 2, height: 3 },
  { src: P11, width: 2, height: 3 },
  { src: P12, width: 2, height: 3 },
  { src: P13, width: 2, height: 3 },
  { src: P14, width: 3, height: 2 },
  { src: P15, width: 2, height: 3 },

];

class Homegallery extends React.Component {
  constructor() {
    super();
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = { currentImage: 0 , width:-1, widthb: 0, height: 0};
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
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

        this.setState({widthb: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    var swidth = this.state.widthb;
    const width = document.body.clientWidth;
    const height = window.innerHeight;
    var cstate = 'boxSize';
    var cstate2 = 'titl';
    let columns = 1;
    if (width >= 100){
      columns = 4;
      cstate = 'boxSize2';
      cstate2 = 'titl2';
    }
    if (width >= 1024){
      columns = 4;
      cstate = 'boxSize';
      cstate2 = 'titl';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'boxSize';
      cstate2 = 'titl';
    }
    if (width >= 550 && height <= 375){
        columns = 4;
        cstate = 'boxSize3';
        cstate2 = 'titl3';
    }
    return (
      <div id="hg">
      
      <div id={cstate2}>Music of Your Life Photogallery</div>
      <div id={cstate}><Gallery photos= {photos} columns={columns} onClick={this.openLightbox}/></div>
        
 
      
      
    
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      
      </div>
    )
  }
}

export default Homegallery;

