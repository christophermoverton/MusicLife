import React, { Component } from 'react';
import fire from './fire';
import './Contactusform.css';


class Contactusform extends Component {
    addMessage(e){
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        console.log(this.inputEl.value);
        console.log(this.inputEl2.value);
        console.log(this.inputEl3.value);
        fire.database().ref('messages').push( {name: this.inputEl.value, email: this.inputEl2.value, message: this.inputEl3.value} );
        this.inputEl.value = '';
        this.inputEl2.value = '';
        this.inputEl3.value = ''; // <- clear the input
      }

  render() {
    const width = document.body.clientWidth;
    var cstate = 'contactusform';
    var cstate2 = 'nav';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'contactusform2';
      cstate2 = 'nav2';
    }
    if (width >= 750){
      columns = 3;
      cstate = 'contactusform';
      cstate2 = 'nav';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'contactusform';
      cstate2 = 'nav';
    }   
    return (
      <div className={cstate}>

            <form id="form" className="topBefore" onSubmit={this.addMessage.bind(this)}>
		
                <input id="name" type="text" placeholder="NAME" ref={ el => this.inputEl = el }/>
                <input id="email" type="text" placeholder="E-MAIL" ref={ el => this.inputEl2 = el }/>
                <textarea id="message" type="text" placeholder="MESSAGE" ref={ el => this.inputEl3 = el }></textarea>
                <input id="submit" type="submit" value="GO!"/>

            </form>
        
      </div>
    );
  }
}

export default Contactusform;