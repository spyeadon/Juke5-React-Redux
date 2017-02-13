import { connect } from 'react-redux';
import Stations from '../components/stations';
import React from 'react';

const groupByGenre = songs => {
  const stations = {};
  songs.forEach( song => {
    if(stations.hasOwnProperty(song.genre)) stations[song.genre].push(song);
    else stations[song.genre] = [song];
  });
  return stations;
};

const mapStateToProps = (state, ownProps) => {
  return {
    stations: groupByGenre(state.songs),
    children: ownProps.children,
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const StationsContainer =  connect(
  mapStateToProps,
  mapDispatchToProps)(Stations);

export default StationsContainer;
