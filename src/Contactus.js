import React, { Component } from 'react';
import Contactusform from './Contactusform';
import './Contactus.css';


class Contactus extends Component {
  render() {
    const width = document.body.clientWidth;
    var cstate = 'contactus';
    var cstate2 = 'nav';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'contactus2';
      cstate2 = 'nav2';
    }
    if (width >= 750){
      columns = 3;
      cstate = 'contactus';
      cstate2 = 'nav';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'contactus';
      cstate2 = 'nav';
    }   
    return (
      <div className={cstate}>
        <div className='hed'>Contact Us<br /><br />
               <div className='reg'>
                Booking:  <br />
                (913) 271-5220 <br /> <br />
                Fax:      <br />
                (913) 825-6230 <br /> <br />
                Email:   <br /> 
                rabramsmusic@gmail.com <br /><br /><br />
               </div>
               <div className='regb'>
                Interested in booking?  Tell us more!
             </div>
        </div>
        <Contactusform />
        
      </div>
    );
  }
}

export default Contactus;