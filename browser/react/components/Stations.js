import React from 'react';
import { Link } from 'react-router';

const Stations = ( {stations} ) => {

  const stationKeys = Object.keys(stations);

  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        stationKeys.map(genre => {
          return (
            <div className="list-group-item" key={genre}>
              <Link to={`/stations/${genre}`}>{genre}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default Stations;
