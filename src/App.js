import React, { Component } from 'react';
import logo from './back2.jpg';
import Asset4 from './Asset4.png';
import './App.css';


class App extends Component {
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
    var cstate = 'si';
    var cstate2 = 'title';
    var cstate3 = 'App';
    var cstate4 = 'titleb';
    let columns = 1;
    if (width >= 250){
      columns = 2;
      cstate = 'si2';
      cstate2 = 'title2';
      cstate3 = 'App2';
      cstate4 = 'titleb2';
    }
    if (width >= 550){
      columns = 3;
      cstate = 'si';
      cstate2 = 'title';
      cstate3 = 'App';
      cstate4 = 'titleb';
    }
    if (width >= 1824){
      columns = 4;
      cstate = 'si';
      cstate2 = 'title';
      cstate3 = 'App';
      cstate4 = 'titleb';
    }
    return (
      <div className={cstate3}>

          <img id={cstate} src={logo}  />
          <div id={cstate2}>Music of Your Life</div> <br />
          <div id={cstate4}>and more</div>
      </div>
    );
  }
}

export default App;
