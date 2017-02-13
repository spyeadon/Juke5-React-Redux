import Songs from './Songs'
import React from 'react';

const Station = songs => {

  const DUMMY_GENRE_NAME = 'Jazz';
  const DUMMY_SONGS = [{
    id: 1,
    name: "A Love Supreme",
    genre: "Jazz",
    artists: [{ name: "John Coltrane" }]
  }];
  const DUMMY_CURRENT_SONG = {};
  const DUMMY_IS_PLAYING = false;
  const DUMMY_TOGGLE_ONE = function () {};

  return (
    <div>
    <h3>{DUMMY_GENRE_NAME}</h3>
    <Songs
      songs={DUMMY_SONGS}
      currentSong={DUMMY_CURRENT_SONG}
      isPlaying={DUMMY_IS_PLAYING}
      toggle={DUMMY_TOGGLE_ONE}
    />
    </div>
  )
}

export default Station;
