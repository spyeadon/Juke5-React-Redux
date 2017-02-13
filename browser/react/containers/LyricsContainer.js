import React, {Component} from 'react';
import { connect } from 'react-redux'
import store from '../store';
import Lyrics from '../components/Lyrics';

import {searchLyrics} from '../action-creators/lyrics';

class Lyric extends Component {

  constructor(props) {

    super(props);

    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }


  render() {
    return (
      <Lyrics
        {...this.state}
        text={this.props.text}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    text: state.lyrics.text,
  }
}

const LyricsContainer = connect(mapStateToProps, null)(Lyric)

export default LyricsContainer
