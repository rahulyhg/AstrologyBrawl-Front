import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Segment, Container } from 'semantic-ui-react'
import './Signing.css';

class MusicPlayerComponent extends Component {


  shuffleSongList = (songs) => {

    let songsToShuffle = [...songs]

    let shuffledSongs = []
    let songsToShuffleLength = songsToShuffle.length
    const maxSongs = songsToShuffleLength

    for (var i = 0; i < maxSongs; i++) {
      let song = songsToShuffle[Math.floor(Math.random()*songsToShuffleLength)];
      shuffledSongs = [...shuffledSongs, song]
      let index = songsToShuffle.indexOf(song)
      songsToShuffle = [...songsToShuffle.slice(0,index), ...songsToShuffle.slice(index+1)];
      songsToShuffleLength = songsToShuffle.length
    }

    return shuffledSongs
  }

  soundTrack = (songs) => {

    let song = this.shuffleSongList(songs)[0]

    return (
      <iframe
        width="0%"
        height="0"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={song}
      />
    )
  }

  render() {
    let songs = this.props.songs
    return (
      <div className="MusicPlayer">
        {this.soundTrack(songs)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    handleSignIn: user => {
      dispatch({type: "SIGN_USER_IN", payload: user})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerComponent);