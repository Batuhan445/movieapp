"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Movies = ({ dt }) => {
  
  const router = useRouter()
  // Güvenli bir şekilde posterUrl oluşturma işlemi
  const posterUrl = dt?.backdrop_path === null
    ? '/img/empty-film-image.jpg' // Alternatif görsel URL
    : `https://image.tmdb.org/t/p/original/${dt.backdrop_path}`;

  return (
    <div onClick={() => router.push(`/movie/${dt.id}`)} className='w-[400px] h-[300px] m-auto relative cursor-pointer'>
      <img style={{height:"230px", width:"100%"}} className='rounded-xl' src={posterUrl} alt="Movie Poster"/>

      <div className='absolute bottom-0 p-3 flex flex-col justify-end opacity-0 text-center w-full h-full hover:opacity-100'>
        <div>{dt.title}</div>
        <div>{dt.release_date}</div>
      </div>
    </div>
  );
}

export default Movies;

// dt.backdrop_path === null ? "/img/empty-film-image.jpg" : `https://image.tmdb.org/t/p/original/${dt?.backdrop_path}`
