import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map(director => <div key={director.name}>
                        <h4>{ director.name }</h4>
                        <p>Movies:</p>
                        <ul>
                          { director.movies.map(movie => <li key={movie}>{movie}</li>)}
                        </ul>
                    </div>)}
    </div>
  );
}

export default Directors
