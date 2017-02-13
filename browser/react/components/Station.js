import Songs from './Songs'
import React from 'react';

const Station = ({toggleOne, genre, songs, currentSong, isPlaying}) => {
  console.log(genre, songs, currentSong, isPlaying);
  return (
    <div>
    <h3>{genre}</h3>
    <Songs
      songs={songs}
      currentSong={currentSong}
      isPlaying={isPlaying}
      toggleOne={toggleOne}
    />
    </div>
  )
}

export default Station;
