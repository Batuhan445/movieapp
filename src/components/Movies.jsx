"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Movies = ({ dt }) => {
  
  const router = useRouter()
  
  return (

    <div onClick={() => router.push(`/movie/${dt.id}`)} className='w-[400px] h-[300px] m-auto relative cursor-pointer'>
      <img className='rounded-xl' src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} alt="Movie Poster"/>

      <div className='absolute bottom-0 p-3 flex flex-col justify-end opacity-0 text-center w-full h-full hover:opacity-100'>
        <div>{dt.title}</div>
        <div>{dt.release_date}</div>
      </div>

    </div>

  );
}

export default Movies;

