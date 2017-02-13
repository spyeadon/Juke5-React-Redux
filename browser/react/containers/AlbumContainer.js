import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: (song, list) => {dispatch(toggleSong(song, list))},
  };
}

let AlbumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);

export default AlbumContainer;
