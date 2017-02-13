import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import { connect } from 'react-redux'
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';

class PlayerPreContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
    });
  }

  render() {
    return <Player
      next={this.props.next}
      prev={this.props.prev}
      toggle={this.props.toggle}
    />;
  }

}

const mapStateToProps = state => {
  return {
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    next: () => dispatch(next()),
    prev: () => dispatch(prev()),
    toggle: (song, list) => dispatch(toggleSong(song, list))

  }
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerPreContainer);

export default PlayerContainer
