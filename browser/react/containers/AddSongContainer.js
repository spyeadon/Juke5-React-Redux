import React from 'react';
import AddSong from '../components/AddSong';
import { connect } from 'react-redux';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

class AddSongPreContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();

    const playlistId = this.state.playlists.selected.id;
    const songId = this.state.songId;

    store.dispatch(addSongToPlaylist(playlistId, songId))
      .catch(() => this.setState({ error: true }));

  }

  render() {

    const songs = this.props.songs;
    const error = this.state.error;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    songs: state.songs,
  }
}

const AddSongContainer = connect(mapStateToProps, null)(AddSongPreContainer);

export default AddSongContainer
