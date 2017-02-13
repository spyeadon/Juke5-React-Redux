import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import Albums from '../components/Albums';

const mapStateToProps = (state, ownProps) => {
  return {
    albums: state.albums.list,
  };
}

let AlbumsContainer = connect(
  mapStateToProps,
  null
)(Albums);

export default AlbumsContainer;
