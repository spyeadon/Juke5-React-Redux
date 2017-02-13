import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import Artist from '../components/Artist';

import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedArtist: state.artists.selected,
    albums: state.artists.selected.albums,
    songs: state.artists.selected.songs,
    currentSong: state.player.currentSong,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: (song, list) => {
      dispatch(toggleSong(song, list));
    }
  };
}

const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);

export default ArtistContainer;
