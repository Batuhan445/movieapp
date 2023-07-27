import React from 'react';

const Movies = ({ dt }) => {
  console.log(dt, "dt");
  
  return (
    <div className='min-w-[400px] h-[300px]'>
      <img src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} alt="Movie Poster"/>
    </div>
  );
}

export default Movies;
