import React, { Component } from 'react';

import './Music.css';
//import MusicPlayer from 'react-responsive-music-player';
import Tr1 from './Musicofyourlife1a.mp3';
import Tr2 from './Musicofyourlife2a.mp3';
import Tr3 from './Musicofyourlife3a.mp3';
import Tr4 from './Musicofyourlife4.mp3';
import Tr5 from './Musicofyourlife5.mp3';
import Tr6 from './Musicofyourlife6.mp3';
import Tr7 from './Musicofyourlife7.mp3';
import Tr8 from './Musicofyourlife8.mp3';
import Ic1 from './ico1.jpg';
import Ic2 from './ico2.jpg';
import Ic3 from './ico3.jpg';
import Player from './Player';

class Music extends Component {
    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.selectItemn = this.selectItemn.bind(this);
        this.playlist = [
          {
            url: Tr1,
            cover: '',
            title: 'Be Thou My Vision',
            artist: [
              'Luis Fonsi',
              'Daddy Yankee'
            ],
            description: '- Traditional Celtic hymn',
            photourl: Ic1
          },
          {
            url: Tr2,
            cover: '',
            title: 'Tis the Last Rose of Summer',
            artist: [
              'Music Of Your Life'
            ],
            description: '- Traditional Irish melody, words by poet Thomas Moore.',
            photourl: Ic2
          },
          {
            url: Tr3,
            cover: '',
            title: 'Red is the Rose',
            artist: [
              'Music Of Your Life'
            ],
            description: '-Music is from Loch Lomond aire',
            photourl: Ic3
          },
          {
            url: Tr4,
            cover: '',
            title: 'Sleepsong',
            artist: [
              'Music Of Your Life'
            ],
            description: 'From Secret Garden album Earth Songs.  Music by Rolf Lovland and lyrics by Brendan Graham'
          },
          {
            url: Tr5,
            cover: '',
            title: 'Runnings',
            artist: [
              'Music Of Your Life'
            ],
            description: ' Lyrics by Sarah Brightman and music by Greg Holtz'
          },
          {
            url: Tr6,
            cover: '',
            title: 'Black is the Color',
            artist: [
              'Music Of Your Life'
            ],
            description: 'Traditional Scottish song'
          },
          {
            url: Tr7,
            cover: '',
            title: 'Almost Like Being in Love',
            artist: [
              'Music Of Your Life'
            ],
            description: 'From Brigadoon, Music by Frederick Loewe and lyrics by Alan Jay Lerner'
          }
        ]
        this.state = {width: 0, height: 0, musicid: 0, musictrack: Tr1, trackname: "Be Thou My Vision"};
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
  selectItemn(ind){
    this.setState({musicid: ind, musictrack: this.playlist[ind].url, trackname: this.playlist[ind].title});
    console.log(this.state.musicid);

    
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
    const playlist = [
      {
        url: Tr1,
        cover: '',
        title: 'Be Thou My Vision',
        artist: [
          'Luis Fonsi',
          'Daddy Yankee'
        ]
      },
      {
        url: Tr2,
        cover: '',
        title: 'Tis the Last Rose of Summer',
        artist: [
          'Music Of Your Life'
        ]
      },
      {
        url: Tr3,
        cover: '',
        title: 'Red is the Rose',
        artist: [
          'Music Of Your Life'
        ]
      },
      {
        url: Tr4,
        cover: '',
        title: 'Sleepsong',
        artist: [
          'Music Of Your Life'
        ]
      },
      {
        url: Tr5,
        cover: '',
        title: 'Runnings',
        artist: [
          'Music Of Your Life'
        ]
      },
      {
        url: Tr6,
        cover: '',
        title: 'Black is the Color',
        artist: [
          'Music Of Your Life'
        ]
      }
    ]

    const lp1 = playlist[0].artist;

    const todoItems = this.playlist.map((todo, index) =>
      // Only do this if items have no stable IDs
      <tr id="rowl"><td id="tcol">
      <li id="TrackList" key={index} onClick={this.selectItemn.bind(this, index)}>
        {index}{'. '}{todo.title}
      </li></td>
      </tr>
    );

    const playlist2 = [
      {
        url: Tr2,
        cover: '',
        title: 'Despacito2',
        artist: [
          'Music Of Your Life'
        ]
      }
    ]

    const playlist3 = [
      {
        url: Tr3,
        cover: '',
        title: 'Despacito3',
        artist: [
          'Music Of Your Life'
        ]
      }
    ]

    const playlist4 = [
      {
        url: Tr4,
        cover: '',
        title: 'Despacito4',
        artist: [
          'Music Of Your Life'
        ]
      }
    ]

    const playlist5 = [
      {
        url: Tr5,
        cover: '',
        title: 'Despacito3',
        artist: [
          'Music Of Your Life'
        ]
      }
    ]

    const playlist6 = [
      {
        url: Tr6,
        cover: '',
        title: 'Despacito4',
        artist: [
          'Music Of Your Life'
        ]
      }
    ]

    const playlist7 = [
      {
        url: Tr7,
        cover: '',
        title: 'Despacito3',
        artist: [
          'Music Of Your Life'
        ]
      }
    ]

    const playlist8 = [
      {
        url: Tr8,
        cover: '',
        title: 'Despacito4',
        artist: [
          'Music Of Your Life'
        ]
      }
    ]
    
    return (
       
      <div className={cstate} >

        <Player class="aplayer" audio={this.state.musictrack} musicid={this.state.musicid} trackname={this.state.trackname} playlist={this.playlist}/>
        <br /> <br /> <br />
        <table class="navn" align="center">
        {todoItems}
        </table>
        
      </div>
    );
  }
}

export default Music;