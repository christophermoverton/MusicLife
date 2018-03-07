
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.css';

export default class Player extends React.Component {

  static propTypes = {
		autoplay: PropTypes.bool,
		progressColor: PropTypes.string,
		btnColor: PropTypes.string,
		playlist: PropTypes.array.isRequired,
		style: PropTypes.object,
  }

  static defaultProps = {
		autoplay: false,
		progressColor: '#66cccc',
		btnColor: '#4a4a4a',
		playlist: [],
		style: {},
  }


  constructor(props) {
    super(props);
	this.tupdates = this.tupdates.bind(this);
    
	this.state = { play: false,
		leftTime: 0,
		progress: 0,
		playMode: 'loop',
		activeMusicIndex: 0,
		volume: 1
		
	  };
	
  }

  componentWillReceiveProps(nprops) {
	
	//this.setState({play: true});
	this.setState({play: true, activeMusicIndex: nprops.musicid});
  }

  componentWillMount(){
	this.setState({play: true, ptrackname: this.props.trackname});
  }


  componentDidMount() {
	this.audio.addEventListener("timeupdate", this.tupdates);
	
  }

  

  componentWillUnmount() {
	this.audio.removeEventListener("timeupdate", this.tupdates);
	this.setState({play: true, ptrackname: this.props.trackname});
	
  }

  _formatTime(time) {
    if (isNaN(time) || time === 0) {
      return
    }
    const mins = Math.floor(time / 60)
    const secs = (time % 60).toFixed()
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  tupdates() {
		  let ratio = this.audio.currentTime / this.audio.duration;
		  let position = this.timeline.offsetWidth * ratio;
		  this.positionHandle(position);
		  const duration = this.audio.duration
		  const currentTime = this.audio.currentTime
		  const progress = currentTime / duration
		  this.setState({
			progress: progress,
			leftTime: duration - currentTime
		  })
	}

	handleAdjustVolume(e) {
		const volumeContainer = this.volumeContainer
		let volume = (e.clientX - volumeContainer.getBoundingClientRect().left) / volumeContainer.clientWidth
		volume = volume < 0 ? 0 : volume
		this.audio.volume = volume
		this.setState({
		  volume: volume
		})
	  }

	handlePrev() {
		const { playMode, activeMusicIndex } = this.state
		if (playMode === 'repeat') {
		  this._playMusic(activeMusicIndex)
		} else if (playMode === 'loop') {
		  const total = this.props.playlist.length
		  const index = activeMusicIndex > 0 ? activeMusicIndex - 1 : total - 1
		  this._playMusic(index)
		} else if (playMode === 'random') {
		  let randomIndex = Math.floor(Math.random() * this.props.playlist.length)
		  while (randomIndex === activeMusicIndex) {
			randomIndex = Math.floor(Math.random() * this.props.playlist.length)
		  }
		  this._playMusic(randomIndex)
		} else {
		  this.setState({ play: false })
		}

	  }
	
	  handleNext() {
		const { playMode, activeMusicIndex } = this.state
		if (playMode === 'repeat') {
		  this._playMusic(activeMusicIndex)
		} else if (playMode === 'loop') {
		  const total = this.props.playlist.length
		  const index = activeMusicIndex < total - 1 ? activeMusicIndex + 1 : 0
		  this._playMusic(index)
		} else if (playMode === 'random') {
		  let randomIndex = Math.floor(Math.random() * this.props.playlist.length)
		  while (randomIndex === activeMusicIndex) {
			randomIndex = Math.floor(Math.random() * this.props.playlist.length)
		  }
		  this._playMusic(randomIndex)
		} else {
		  this.setState({ play: false })
		}

	  }

  positionHandle = (position) => {
	let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;

    let handleLeft = position; //- this.timeline.offsetWidth;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = handleLeft + "px";
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = "0px";
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = timelineWidth + "px";
    }
  };

  mouseMove = (e) => {
	var rect = e.target.getBoundingClientRect();
    var x = e.pageX - rect.left; //x position within the element
    this.positionHandle(x);
    this.audio.currentTime = (x / this.timeline.offsetWidth) * this.audio.duration;
  };

  mouseUp = (e) => {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };

  mouseDown = (e) => {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  };  
  
  _playMusic(index) {
    this.setState({
      activeMusicIndex: index,
      leftTime: 0,
      play: true,
      progress: 0
    }, () => {
      this.audio.currentTime = 0
      this.audio.play()
	})
	var elm = document.getElementById("bimage-container");
	elm.classList.remove("bimage-animation");
	void elm.offsetWidth;
	elm.classList.add("bimage-animation");
	/*
	setTimeout(function() {
		var elm = document.getElementById("bimage-container");
		
		var newone = elm.cloneNode(true);
		elm.parentNode.replaceChild(newone, elm);
	}, 1000);
    */
  }




  play = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  };

  render() {
    const { progressColor, btnColor, playlist } = this.props
    const { activeMusicIndex, playMode } = this.state
    const activeMusic = playlist[activeMusicIndex]	 
    return <div id="pl1">
      <audio src={activeMusic.url}
        ref={(audio) => { this.audio = audio }}
        autoPlay
      />
	  <div className="bimage-animation" id="bimage-container">
		 <img src={activeMusic.photourl}/>
	  </div>
	  <div id="container">

	  	<div id="ctitle">{activeMusic.title}</div>
      	
	  	<div id="pare">
      		<div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
        	<div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} />
			</div>
			<div id="tims">-{this._formatTime(this.state.leftTime)}</div> 
	  	</div>
		<div id="controls">
			<i className="icon fa fa-step-backward" id="fbut" onClick={this.handlePrev.bind(this)}></i>
	  		<i class={`icon fa fa-${this.state.play ? 'pause' : 'play'}`} id="fbut2" onClick={this.play}></i>
			<i className="icon fa fa-step-forward" id="fbut3" onClick={this.handleNext.bind(this)}></i>

			<div id="volume-container">
      			<div id="volume-icon">
        			<i className="icon fa fa-volume-up"></i>
        		</div>
        		<div id="volume-wrapper">
            		<div id="progress-container"
                	onClick={this.handleAdjustVolume.bind(this)}
                	ref={ref => { this.volumeContainer = ref }} >
            			<div id="progress" style={{ width: `${this.state.volume * 100}%` }}></div>
                	</div>
            	</div>
      		</div>
		</div>
		<div id="description-container">
		   {activeMusic.description}
		</div>
	  </div>

	  
    </div>
  }
}