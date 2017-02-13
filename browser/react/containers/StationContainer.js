import { connect } from 'react-redux';
import Station from '../components/Station';
import React from 'react';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player';

const filteredSongs = (songs, genre) => {
  return songs.filter(song => song.genre = genre).map(convertSong);
}

const mapStateToProps = (state, ownProps) => {
  return {
    genre: ownProps.routeParams.genre,
    songs: filteredSongs(state.songs, ownProps.routeParams.genre),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: (currentSong, songs) => dispatch(toggleSong(currentSong, songs)),
  };
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
