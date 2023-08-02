"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Movies = ({ data }) => {
  
  const router = useRouter()
  
  const posterUrl = data?.backdrop_path === null
    ? '/img/empty-film-image.jpg'
    : `https://image.tmdb.org/t/p/original/${data?.backdrop_path}`;

  return (
    <div onClick={() => router.push(`/movie/${data.id}`)} className='w-[400px] h-[300px] m-auto relative cursor-pointer'>
      <img style={{height:"230px", width:"100%"}} className='rounded-xl' src={posterUrl} alt="Movie Poster"/>

      <div className='absolute bottom-0 p-3 flex flex-col justify-end opacity-0 text-center w-full h-full hover:opacity-100'>
        <div>{data?.title}</div>
        <div>{data?.release_date}</div>
      </div>
    </div>
  );
}

export default Movies;